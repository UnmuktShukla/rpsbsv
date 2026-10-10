import { bodoni_moda } from '../ui/fonts';
import Image, { StaticImageData } from 'next/image';

type EmblemCardProps = {
    imageSrc: StaticImageData | string;
    title: string;
    description: string;
    scale: number;
}

export default function EmblemCard({imageSrc, title, description, scale} : EmblemCardProps) {
    return (
        <div className='w-full max-w-[300px] md:w-[220px] md:max-w-none lg:w-[340px] relative p-4 md:p-4 lg:p-6 bg-[#f9f1e6] rounded-3xl z-40 border-2 border-black shadow-lg md:border-0 md:shadow-2xl'>
            <div className='max-w-full max-h-32 md:max-h-28 lg:max-h-40 overflow-hidden rounded-xl mb-3 md:mb-3 lg:mb-4'>
                <Image
                  className='origin-top pt-2'
                  style={{ transform: `scale(${scale})` }}
                  src={imageSrc}
                  alt={title}
                />
            </div>
            <a href="#">
                <h2 className={`${bodoni_moda.className} mt-1 text-xl md:text-lg lg:text-2xl text-center font-bold tracking-tight text-[#8b282b]`}>{title}</h2>
                <p className='text-sm md:text-xs lg:text-base text-center'>{description}</p>
            </a>
        </div>
    )
}
