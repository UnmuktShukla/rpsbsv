import Image from "next/image";
import { bodoni_moda } from "../ui/fonts";
import campusImage from "@/public/campus.png";
import CamoTorchSection from "../components/CamoTorchSection";
import camoBg from "@/public/camo-bg.png";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#222222] pt-28 sm:pt-32 pb-20">
      {/* Page title */}
      <header className="px-5 sm:px-8 lg:px-15 mb-12 sm:mb-16 text-center">
        <p className="text-xs sm:text-sm tracking-[0.3em] text-[#F7DF8C]/80 uppercase mb-3">
          RPS Bal Sainik Vidyalaya
        </p>
        <h1
          className={`${bodoni_moda.className} text-4xl sm:text-5xl lg:text-6xl text-[#F7DF8C] font-bold`}
        >
          About Us
        </h1>
      </header>

      {/* Our Vision — centered */}
      <CamoTorchSection
        imageSrc={camoBg}
        className="border-y border-[#F7DF8C]/20"
        torchSize={320}
      >
        <section
          aria-labelledby="our-vision-heading"
          className="px-5 sm:px-8 lg:px-15 py-14 sm:py-20 max-w-4xl mx-auto text-center"
        >
          <h2
            id="our-vision-heading"
            className={`${bodoni_moda.className} text-3xl sm:text-4xl text-[#F7DF8C] font-bold mb-8`}
          >
            Our Vision
          </h2>
          <p
            className={`${bodoni_moda.className} text-xl sm:text-2xl text-white font-medium leading-relaxed mb-8`}
          >
            To nurture disciplined, confident, and responsible individuals
            equipped with knowledge, integrity, and leadership to contribute
            meaningfully to society and the nation.
          </p>
          <div className="mx-auto mb-8 h-px w-24 bg-gradient-to-r from-transparent via-[#F7DF8C] to-transparent" />
          <p className="text-base sm:text-lg text-[#f9f1e6]/90 font-light leading-relaxed">
            At RPS Bal Sainik Vidyalaya, we envision an educational environment
            where academic excellence goes hand in hand with character
            development, discipline, and a strong sense of responsibility. We
            aspire to empower every student to discover their potential, embrace
            challenges with confidence, and grow into a principled individual
            prepared for the future.
          </p>
        </section>
      </CamoTorchSection>

      {/* Director’s Message — text left, photo right */}
      <section
        aria-labelledby="director-message-heading"
        className="px-5 sm:px-8 lg:px-15 py-14 sm:py-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs tracking-[0.25em] text-[#8b282b] uppercase mb-3">
              Leadership
            </p>
            <h2
              id="director-message-heading"
              className={`${bodoni_moda.className} text-3xl sm:text-4xl text-[#F7DF8C] font-bold mb-2`}
            >
              Director&apos;s Message
            </h2>
            <h3
              className={`${bodoni_moda.className} text-xl sm:text-2xl text-[#f9f1e6] font-medium mb-6`}
            >
              A Message from the Director
            </h3>
            <div className="space-y-5 text-base sm:text-lg text-[#f9f1e6]/90 font-light leading-relaxed">
              <p>
                Education is one of the most powerful foundations upon which a
                nation&apos;s future is built. At RPS Bal Sainik Vidyalaya, we
                believe that the true purpose of education extends beyond
                academic achievement to the development of character, discipline,
                and a sense of responsibility.
              </p>
              <p>
                Our endeavour is to provide students with an environment that
                encourages learning, nurtures their abilities, and instils values
                that remain with them throughout their lives. We strive to help
                every child develop the confidence to pursue their aspirations,
                the integrity to make the right choices, and the determination to
                overcome challenges.
              </p>
              <p>
                Together with our educators and parents, we remain committed to
                shaping young minds into responsible citizens who carry forward
                the values of excellence, respect, and service to the nation.
              </p>
              <p className="font-medium text-white">
                With best wishes for a bright and purposeful future.
              </p>
              <footer className="pt-2">
                <p className={`${bodoni_moda.className} text-[#F7DF8C] text-lg italic`}>
                  Director
                </p>
                <p className="text-sm text-[#f9f1e6]/80">
                  RPS Bal Sainik Vidyalaya
                </p>
              </footer>
            </div>
          </div>

          <figure className="order-1 lg:order-2 mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#F7DF8C]/40 shadow-2xl bg-[#1a1a1a]">
              {/* Replace campusImage with director photo when available (e.g. /director.jpg) */}
              <Image
                src={campusImage}
                alt="Director of RPS Bal Sainik Vidyalaya"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/70 via-transparent to-transparent" />
            </div>
            <figcaption className={`${bodoni_moda.className} mt-4 text-center text-[#F7DF8C] text-lg`}>
              Director
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Divider */}
      <div className="px-5 sm:px-8 lg:px-15">
        <div className="max-w-6xl mx-auto h-px bg-gradient-to-r from-transparent via-[#8b282b] to-transparent" />
      </div>

      {/* Principal’s Message — photo left, text right */}
      <section
        aria-labelledby="principal-message-heading"
        className="px-5 sm:px-8 lg:px-15 py-14 sm:py-20"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="order-1 mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-[#F7DF8C]/40 shadow-2xl bg-[#1a1a1a]">
              {/* Replace campusImage with principal photo when available (e.g. /principal.jpg) */}
              <Image
                src={campusImage}
                alt="Principal of RPS Bal Sainik Vidyalaya"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/70 via-transparent to-transparent" />
            </div>
            <figcaption className={`${bodoni_moda.className} mt-4 text-center text-[#F7DF8C] text-lg`}>
              Principal
            </figcaption>
          </figure>

          <div className="order-2">
            <p className="text-xs tracking-[0.25em] text-[#8b282b] uppercase mb-3">
              Leadership
            </p>
            <h2
              id="principal-message-heading"
              className={`${bodoni_moda.className} text-3xl sm:text-4xl text-[#F7DF8C] font-bold mb-2`}
            >
              Principal&apos;s Message
            </h2>
            <h3
              className={`${bodoni_moda.className} text-xl sm:text-2xl text-[#f9f1e6] font-medium mb-6`}
            >
              A Message from the Principal
            </h3>
            <div className="space-y-5 text-base sm:text-lg text-[#f9f1e6]/90 font-light leading-relaxed">
              <p>Dear Students and Parents,</p>
              <p>
                A school is not merely a place of learning; it is where young
                minds are shaped, values are strengthened, and lifelong
                aspirations begin to take form.
              </p>
              <p>
                At RPS Bal Sainik Vidyalaya, we are committed to fostering a
                culture of academic excellence, discipline, curiosity, and mutual
                respect. We encourage our students to approach learning with an
                open mind, develop confidence in their abilities, and understand
                the importance of perseverance, teamwork, and integrity.
              </p>
              <p>
                We believe that every child possesses unique strengths and
                potential. Through the collective efforts of our teachers,
                parents, and students, we aim to create an environment where each
                learner is encouraged to grow intellectually, socially, and
                personally.
              </p>
              <p>
                As we continue this journey together, let us work towards
                nurturing individuals who are knowledgeable, compassionate,
                disciplined, and prepared to meet the challenges of tomorrow.
              </p>
              <p className="font-medium text-white">With warm regards,</p>
              <footer className="pt-2">
                <p className={`${bodoni_moda.className} text-[#F7DF8C] text-lg italic`}>
                  Principal
                </p>
                <p className="text-sm text-[#f9f1e6]/80">
                  RPS Bal Sainik Vidyalaya
                </p>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
