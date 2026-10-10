"use client";
import Link from "next/link"
import { bodoni_moda } from '../ui/fonts';
import { Phone } from 'lucide-react';
import { School } from 'lucide-react';
import AdmissionForm from './AdmissionForm';
import { useState } from 'react';

export default function HeroComps(){
    const [open, setOpen] = useState(false);

    return (
        <div className="grid justify-items-center text-center gap-3 sm:gap-5 px-5 sm:pl-8 md:pl-13 md:justify-items-start md:text-left max-w-xl mx-auto md:mx-0 lg:max-w-none">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold ${bodoni_moda.className} leading-tight`}>
            Shiksha, Sanskar, Samarpan
          </h1>
          <h3 className={`text-2xl sm:text-xl md:text-4xl font-semibold ${bodoni_moda.className} text-[#8b282b] leading-tight`}>
            For a Disciplined Future
          </h3>
          <div className='text-base sm:text-xl font-thin'>
            <p>CBSE affiliated school committed to</p>
            <p>excellence and character building.</p>
          </div>
          <div className='flex flex-row flex-wrap justify-center md:justify-start gap-3 w-full sm:w-auto'>
            <button
              onClick={() => setOpen(true)}
              className='flex justify-center items-center gap-2 sm:gap-5 bg-linear-180 from-[#8b282b] to-[#812820] mt-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[#faf3ed] rounded-[8px] text-sm sm:text-lg font-light hover:shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-shadow duration-300'
            >
              <p className='font-black'>Reserve Call</p>
              <Phone className='w-4 h-4 sm:w-5 sm:h-5' />
            </button>
            <Link 
              href='/campus'
              className='flex justify-center items-center gap-2 sm:gap-5 bg-linear-180 from-[#f9f1e6] to-[#f9f1e6] mt-2 px-3 sm:px-5 py-2.5 sm:py-3 text-[#8b282b] rounded-[8px] border-2 border-[#5e3536] text-sm sm:text-lg font-light hover:shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-shadow duration-300'
            >
              <p className='font-black'>Visit Campus</p>
              <School className='w-4 h-4 sm:w-5 sm:h-5' />
            </Link>
          </div>
          <div>
            <AdmissionForm open={open} onClose={() => setOpen(false)} />
          </div>
        </div>
    )
}
