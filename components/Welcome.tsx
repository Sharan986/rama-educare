"use client";

import Image from "next/image";

const Welcome = () => { 
  return (
    <section className="w-full  mt-50 "> 
      <div className="  grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Images */}
        <div className="flex flex-col gap-6 relative">
          <div className="grid grid-cols-2 gap-6">
            <Image
              src="/dsn2.jpg"
              alt="Students 1"
              width={400}
              height={400}
              className="rounded-xl object-cover shadow-md w-full h-50"
            />
            <Image
              src="/dsn2.jpg"
              alt="Students 2"
              width={400}
              height={400}
              className="rounded-xl object-cover shadow-md w-full h-50"
            />
          </div>

          <div className="w-full ">
            <Image
              src="/dsn2.jpg"
              alt="Students 3"
              width={500}
              height={500}
              className="rounded-xl object-cover shadow-md w-full h-60"
            />
          </div>

        </div>

        {/* Right Content */}
        <div className="pl-18">
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Welcome to RamaEducare
          </h1>

          <p className="text-gray-600 leading-relaxed mb-6 max-w-lg text-lg">
            Helping students achieve their academic dreams with expert guidance.
            From university selection to application success, we make the journey
            smooth and stress-free. Your future starts here lets make it happen
            together!
          </p>

          <button className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-xl">
            view services
          </button>

          {/* Stats */}
          <div className="flex gap-10 mt-10 flex-wrap">
            <div>
              <h3 className="text-5xl text-green-600">200+</h3>
              <p className="text-gray-600 text-sm">Students Accepted</p>
            </div>

            <div>
              <h3 className="text-5xl text-blue-500">50+</h3>
              <p className="text-gray-600 text-sm">Partner Universities</p>
            </div>

            <div>
              <h3 className="text-5xl text-orange-500">$2M+</h3>
              <p className="text-gray-600 text-sm">Scholarships Secured</p>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
}

export default Welcome; 