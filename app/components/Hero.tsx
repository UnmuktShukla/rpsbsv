import Image from 'next/image';
import hero from '@/public/home-hero.png'

export default function Hero(){
    return (
        <div
          className='pointer-events-none absolute inset-0 z-0 hidden overflow-hidden md:block'
          style={{
            maskImage: `
            linear-gradient(135deg, transparent 0%, transparent 35%, black 70%, black 100%)
          `,
            WebkitMaskImage: `
            radial-gradient(ellipse 50% 90% at 75% 55%, black 45%, transparent 75%),
            linear-gradient(to bottom, transparent 0%, transparent 10%, black 40%, black 100%)
          `,
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        >
          <Image
            src={hero}
            alt='Hero Image'
            className='h-full w-full object-cover object-left pt-20 md:pt-10 pl-[0%] lg:pl-95'
            priority
          />
        </div>
    )
}
