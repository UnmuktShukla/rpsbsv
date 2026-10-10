"use client";
import { useState , useEffect} from "react";
import { bodoni_moda } from "../ui/fonts";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

type Student = {
    name: string;
    age: string;
};


export default function AdmissionForm({open, onClose} : any){

    const [mounted , setMounted] = useState(false);

    const [form, setForm] = useState({
        parentName: "",
        phoneNumber: "",
        students: [{
            name: "",
            age: ""
        }] as Student[],
    })
    
    function handleParentChange( e: any){
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }

    function handleStudentChange(index : number , field : keyof Student , value : string){
        const updatedStudents = form.students.map((s , i ) => i === index ? {...s, [field]: value} : s);
        updatedStudents[index][field] = value;
        setForm({
            ...form,
            students: updatedStudents
        })
    }

    function addStudent(){
        setForm({
            ...form,
            students: [...form.students , {name: "", age: ""}],
        })
    }

    function removeStudent(index :number){
        const updatedStudents = form.students.filter((_,i) => i !== index);
        setForm({
            ...form,
            students: updatedStudents
        })
    }

    async function handleSubmit(e:any){
        e.preventDefault();
        
        try {
            await fetch("api/reserve", {
                method: "POST",
                headers: {
                    "Content-Type" : "applcation/json"
                },
                body: JSON.stringify(form),
            });
            alert("Saved Successfully");
            onClose();
        }
        catch (error) {
            alert("Failed to save");
        }
    }

    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev;
        }
    }, [open]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <>
        <div
            aria-hidden={!open}
            className={`fixed inset-0 z-100 bg-black/50 backdrop-blur-xs transition-opacity duration-300 ease-out ${
                open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
              }`}
            onClick={open ? onClose : undefined}
        />

            <div className={`fixed top-0 right-0 z-100 h-full w-full sm:w-[min(100%,28rem)] md:w-1/2 max-w-full bg-[#222222] p-6 sm:p-10 shadow-lg transition-transform duration-300 ease-out will-change-transform overflow-y-auto ${open ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
                }`}
                role="dialog"
                aria-modal='true'
            >
            <div className="flex justify-between items-center gap-4 mb-8 sm:mb-10 border-b border-t border-[#4b4a4a] pt-4 pb-4">
                <h1 className={`${bodoni_moda.className} text-2xl sm:text-4xl font-bold text-[#F7DF8C]`}>Request A Callback</h1>
                <button type="button" onClick={onClose} aria-label="Close form"><X className="w-6 h-6 text-white" /></button>
            </div>
            
            <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            name="parentName"
                            placeholder="Parent Name"
                            value={form.parentName}
                            onChange={handleParentChange}
                            className="w-full sm:w-1/2 p-3 border-b border-[#4b4a4a] text-white bg-[#222222] mb-2 sm:mb-4"
                        />
                        <input
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={form.phoneNumber}
                            onChange={handleParentChange}
                            className="w-full sm:w-1/2 p-3 border-b border-[#4b4a4a] text-white bg-[#222222] mb-2 sm:mb-4"
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center">
                        <h3 className={`${bodoni_moda.className} text-xl font-bold text-white mt-4 mb-1`}>Students</h3>
                        <button type="button" onClick={addStudent} className="text-white text-sm">
                            + Add Student
                        </button>
                    </div>
                {form.students.map((students, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border-b border-[#4b4a4a] pt-3 pb-3">
                        <input 
                            placeholder="Student Name"
                            value={students.name}
                            onChange={(e) => handleStudentChange(index, "name", e.target.value)}
                            className="text-white bg-transparent border-b border-[#4b4a4a] sm:border-0 p-2 sm:p-0 w-full sm:w-auto"
                        />
                        <input 
                            placeholder="Student Age"
                            value={students.age}
                            onChange={(e) => handleStudentChange(index, "age", e.target.value)}
                            className="text-white bg-transparent border-b border-[#4b4a4a] sm:border-0 p-2 sm:p-0 sm:ml-10 w-full sm:w-auto"
                        />

                        {form.students.length>1 && (
                            <button type="button" onClick={() => removeStudent(index)} className="text-white text-xs self-start sm:self-center">
                                Remove Student
                            </button>
                        )}

                    </div>
                ))}
                <button type="submit" className="mt-8 bg-[#F7DF8C] text-[#222222] px-4 py-2 rounded-md w-full sm:w-auto">Submit</button>
            </form>
            
        </div>
        </>,
        document.body
    )
}