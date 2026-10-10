import { supabase } from "@/lib/supabaseServer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { parentName, phoneNumber, students } = body

        //validation
        if (!parentName || typeof parentName !== "string") {
            return NextResponse.json(
                { ok: false, error: "Parent Name is Required" },
                { status: 422 }
            )
        }

        if (!phoneNumber || !/^\d{10,15}$/.test(phoneNumber)) {
            return NextResponse.json(
                { ok: false, error: "Invalid Phone Number" },
                { status: 422 }
            )
        }

        if (!Array.isArray(students) || students.length === 0) {
            return NextResponse.json(
                { ok: false, error: "Atleast One student detail should be entered" },
                { status: 422 }
            )
        }

        for (const s of students) {
            if (!s.name || !s.age) {
                return NextResponse.json(
                    { ok: false, error: "Each student must have name and age" },
                    { status: 422 }
                )
            }
        }

        //insert into table 
        const { data, error } = await supabase
            .from("admission_requests")
            .insert([
                {
                    parent_name: parentName,
                    phone_number: phoneNumber,
                    students: students
                },
            ])
            .select()
            .single();

        if (error) {
            throw error
        }

        //build whatsapp message
        const message = `
    New Admission Request
    ID: ${data.id}

    Parent Name : ${parentName}
    Phone : ${phoneNumber}

    Students
    ${students.map((s: any) => ` - ${s.name} (${s.age})`).join("\n")}
    `

        const whatsappUrl = `https://wa.me/91${phoneNumber}/?text=${encodeURIComponent(
            message
        )}`;

        //response 
        return NextResponse.json(
            {
                ok: true,
                id: data.id,
                whatsappUrl
            },
            { status: 201 }
        )
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { ok: false, error: "Something went wrong" },
            { status: 500 }
        )
    }
}