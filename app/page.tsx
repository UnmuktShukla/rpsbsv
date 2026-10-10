import './globals.css';
import backgroundImage from '@/public/background-homepage.png';
import Hero from './components/Hero'
import HeroComps from './components/HeroComps'
import discipline from '@/public/discipline.png';
import hd from '@/public/holistic_development.png';
import ae from '@/public/Academic_Excellence.png';
import { bodoni_moda } from './ui/fonts';
import EmblemCard from './components/EmblemCard';
import EmblemCarousel from './components/EmblemCarousel';
import CamoTorchSection from './components/CamoTorchSection';
import { ArrowRight} from 'lucide-react';
import campusImage from '@/public/campus.png';
import camoBg from '@/public/camo-bg.png';
import camoBanner from '@/public/camo-banner.png';
import Link from "next/link"

const emblems = [
  { imageSrc: discipline, title: "Discipline", description: "Instilling strong values and character", scale: 0.45 },
  { imageSrc: hd, title: "Holistic development", description: "Growing mind, body, and spirit together", scale: 0.63 },
  { imageSrc: ae, title: "Academic excellence", description: "Strong foundations for lifelong learning", scale: 0.6 },
];

export default function Page() {
  return (
    <div>
      {/* Hero + overlapping emblems share one positioning context */}
      <div className="relative">
        <section className="relative min-h-[70vh] md:min-h-screen overflow-hidden">
          <div
            className="fixed inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage.src})` }}
          />
          <div className='min-h-[60vh] md:min-h-screen flex flex-col justify-center pt-20 pb-20 md:pt-28 md:pb-40 lg:pb-0'>
            <div className='z-30 relative'>
              <HeroComps />
            </div>
            <Hero />
          </div>
        </section>

        {/* Small: auto carousel, half on hero / half on next section */}
        <div className="md:hidden absolute left-1/2 top-full z-20 w-[min(100%,340px)] -translate-x-1/2 -translate-y-1/2 px-2 overflow-visible">
          <EmblemCarousel items={emblems} />
        </div>

        {/* md + lg: same floating row; md cards are smaller via EmblemCard */}
        <div className="hidden md:flex absolute left-1/2 top-full z-20 -translate-x-1/2 -translate-y-1/2 flex-row flex-nowrap items-stretch justify-center gap-6 lg:gap-15 px-4">
          {emblems.map((emblem) => (
            <EmblemCard key={emblem.title} {...emblem} />
          ))}
        </div>
      </div>

      <CamoTorchSection
        imageSrc={camoBg}
        className="min-h-[50vh] lg:h-[60vh] z-10"
        torchSize={300}
      >
        <div className="px-5 sm:px-8 lg:px-15 pt-40 md:pt-36 lg:pt-[17%] pb-12">
          <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-10'>
            <h1 className={`${bodoni_moda.className} text-2xl md:text-3xl lg:text-4xl font-bold text-[#F7DF8C] max-w-xl`}>
              Building Disciplined Leaders for Tomorrow
            </h1>
            <div className='flex flex-row gap-10 md:gap-12 lg:gap-30'>
              <div>
                <h2 className={`${bodoni_moda.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white`}>
                  20+
                </h2>
                <p className='text-[#F7DF8C] text-sm md:text-sm lg:text-base'>
                  Years of Experience
                </p>
              </div>
              <div>
                <h2 className={`${bodoni_moda.className} text-4xl md:text-5xl lg:text-6xl font-bold text-white`}>
                  100%
                </h2>
                <p className='text-[#F7DF8C] text-sm md:text-sm lg:text-base'>
                  Focus on Character & Growth
                </p>
              </div>
            </div>
          </div>
          <div className='relative flex flex-row justify-center items-center gap-3 sm:gap-5 pt-8 lg:pt-[3%] overflow-hidden'>
            <div className="h-px flex-1 max-w-1/3 bg-gradient-to-r from-transparent to-[#F7DF8C]" />
            <a href="" className={`${bodoni_moda.className} text-white text-sm sm:text-base whitespace-nowrap`}> Read More About Us</a>
            <div className="h-px flex-1 max-w-1/3 bg-gradient-to-l from-transparent to-[#F7DF8C]" />
          </div>
        </div>
      </CamoTorchSection>

      {/* Campus gallery */}
      <section className='relative min-h-0 lg:h-[90vh] mb-16 lg:mb-40 px-5 sm:px-8 lg:px-15'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-10 lg:pt-15'>
          <div>
            <p className='text-sm mb-3 tracking-widest'>VIBRANT CAMPUS</p>
            <h2 className={`${bodoni_moda.className} text-3xl sm:text-4xl text-[#8b282b] font-medium`}>The Student Experience</h2>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <p>View Full Gallery</p>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-5 justify-center mt-10 lg:mt-20'>
          <div
            className='relative h-[280px] sm:h-[400px] lg:h-[500px] w-full lg:w-1/2 overflow-hidden rounded-3xl bg-cover bg-center'
            style={{ backgroundImage: `url(${campusImage.src})` }}
          >
            <div className='absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8b282b] to-transparent' />
            <h3 className='absolute bottom-6 left-6 z-10 text-md font-semibold text-white'>
              Scientific Discovery
            </h3>
          </div>

          <div className='flex flex-col gap-5 lg:gap-7 w-full lg:w-auto lg:flex-1'>
            <div
              className='relative h-[200px] sm:h-[240px] lg:h-1/2 w-full overflow-hidden rounded-3xl bg-cover bg-center'
              style={{ backgroundImage: `url(${campusImage.src})` }}
            >
              <div className='absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8b282b] to-transparent' />
              <h3 className='absolute bottom-6 left-6 z-10 text-md font-semibold text-white'>
                Scientific Discovery
              </h3>
            </div>

            <div className='flex flex-row gap-5 h-[160px] sm:h-[200px] lg:h-1/2'>
              <div
                className='relative h-full flex-1 lg:w-[190px] overflow-hidden rounded-3xl bg-cover bg-center'
                style={{ backgroundImage: `url(${campusImage.src})` }}
              >
                <div className='absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8b282b] to-transparent' />
                <h3 className='absolute bottom-4 left-4 z-10 text-sm sm:text-md font-semibold text-white'>
                  Scientific Discovery
                </h3>
              </div>
              <div
                className='relative h-full flex-1 lg:w-[190px] overflow-hidden rounded-3xl bg-cover bg-center'
                style={{ backgroundImage: `url(${campusImage.src})` }}
              >
                <div className='absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#8b282b] to-transparent' />
                <h3 className='absolute bottom-4 left-4 z-10 text-sm sm:text-md font-semibold text-white'>
                  Scientific Discovery
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CamoTorchSection
        imageSrc={camoBanner}
        className="min-h-[50vh] lg:h-[90vh] border-b-7 border-[#8b282b] z-20"
        torchSize={340}
      >
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-5 px-5 py-16 text-center min-h-[50vh] lg:h-[90vh]">
          <h2 className={`${bodoni_moda.className} text-3xl sm:text-5xl lg:text-7xl text-[#F7DF8C]`}>
            Your Journey Begins Here
          </h2>
          <p className='text-base sm:text-lg text-white font-light tracking-wide max-w-2xl'>
            Join a community that values wisdom, character, and curiosity. Applications for the next academic year are now open.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto justify-center mt-2'>
            <Link
              href="/admissions"
              className='flex justify-center gap-5 bg-linear-180 from-[#8b282b] to-[#812820] px-5 py-3 text-[#faf3ed] rounded-[8px] text-lg font-light hover:shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-shadow duration-300'
            >
              Start Your Journey
            </Link>
            <Link
              href="/prospectus"
              className='flex justify-center gap-5 bg-linear-180 from-[#f9f1e6] to-[#f9f1e6] px-5 py-3 text-[#8b282b] rounded-[8px] border-2 border-[#5e3536] text-lg font-light hover:shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-shadow duration-300'
            >
              Request A Prospectus
            </Link>
          </div>
        </div>
      </CamoTorchSection>

      {/* Footer */}
      <section className="relative bg-[#f9f1e6] flex flex-col gap-10 p-6 sm:p-10">
        <div className='flex flex-col sm:flex-row flex-wrap gap-10'>
          <div className='flex flex-col gap-4 max-w-md'>
            <h2 className={`${bodoni_moda.className} text-xl text-[#8b282b] font-bold`}>RPS Bal Sainik Vidyalaya</h2>
            <p className='text-sm'>Established 2019, providing high-quality CBSE education grounded in traditional values and modern excellence.</p>
            <div className='flex flex-row gap-3'>
              <Link
                href="https://www.instagram.com/rpsbalvidyalaya/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5e3536] hover:text-[#8b282b]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@rpsbalsainikvidyalaya2234"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5e3536] hover:text-[#8b282b]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden>
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className={`${bodoni_moda.className} text-md text-[#8b282b] font-bold`}>Quick Links</h2>
            <div className='flex flex-col gap-1 text-sm'>
              <Link href="/about">About Us</Link>
              <Link href="/academics">Academics</Link>
              <Link href="/admissions">Admissions</Link>
              <Link href="/campus">Campus Life</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className={`${bodoni_moda.className} text-md text-[#8b282b] font-bold`}>Portals</h2>
            <div className='flex flex-col gap-1 text-sm'>
              <Link href="/portal/student">Careers</Link>
            </div>
          </div>
        </div>
        <div className="text-sm text-left sm:text-right">
          <p>© 2026 RPS Bal Sainik Vidyalaya. CBSE Affiliation No. 1234567. All Rights Reserved.</p>
        </div>
      </section>
    </div>
  );
}
