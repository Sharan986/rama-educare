import ServicesSection from '../components/Service'
import Pattern from '../components/Pattern'
import FAQsSection from '../components/Faqs'
import Work from '../components/Work'
import Navbar from '@/components/Navbar'
import AboutUs from '@/components/AboutUs'
import WhyChooseUs from '@/components/WhyChooseUs'
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39'
import Link from 'next/link'
import EntranceMarquee from '@/components/EntranceMarquee'
import UniversityMarquee from '@/components/UniversityMarquee'


const Page = () => {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-white">
        <nav> <Navbar /> </nav>
        {/* Animated Crowd Background - Very Subtle */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-20">
          <CrowdCanvas src="/image.png" rows={15} cols={7} />
        </div>

        {/* Clean White Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50/50" />

        {/* Hero Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="max-w-5xl space-y-8">
            {/* Main Headline */}
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-black md:text-7xl lg:text-8xl">
              Your Future
              <br />
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl text-lg font-medium text-gray-700 md:text-xl lg:text-2xl">
              Expert guidance for students pursuing education abroad.
              <br />
              Transform your dreams into reality with personalized support.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-full bg-black px-10 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:px-12 md:py-5 md:text-lg"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>

              <Link
                href="/services"
                className="group rounded-full border-2 border-black bg-white px-10 py-4 text-base font-semibold text-black shadow-sm transition-all hover:scale-105 hover:bg-black hover:text-white md:px-12 md:py-5 md:text-lg"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-16">
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-gray-600 md:gap-16 md:text-base">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>500+ Students Placed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>25+ Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-violet-500" />
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Scroll to explore
              </span>
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* ENTRANCE EXAMS LOGO MARQUEE */}
      <EntranceMarquee />

      {/* SERVICES */}
      <ServicesSection />

      {/* UNIVERSITY MARQUEE */}
      <UniversityMarquee />

      {/* HOW WE WORK */}
      <Work />
      
      <div className='px-24'>

        <Pattern />
        <FAQsSection />


      </div>

    </>

  )
}

export default Page