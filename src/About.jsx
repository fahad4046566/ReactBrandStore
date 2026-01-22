import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  return (
    <div>
   {/* About Page Hero - Reversed Layout */}
<div className="flex flex-col md:flex-row-reverse items-center justify-between px-5 md:px-20 py-20 gap-16">
  
  {/* Right Side: Text (Ab ye Right par nazar aayega) */}
  <div className="md:w-1/2 space-y-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
      We Believe in <span className="text-blue-600">Quality</span> & Trust
    </h2>
    <p className="text-gray-600 text-lg">
      It all began with a simple vision: Making premium products accessible to all. Today, we are honored to have earned the trust of thousands of happy customers.
    </p>
   
  </div>

  {/* Left Side: Image (Ab ye Left par nazar aayegi) */}
  <div className="md:w-1/2 flex justify-center">
   <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800" 
            alt="Our Team" className="rounded-2xl shadow-xl" />
  </div>

</div>

<div className="bg-slate-900 text-gray-300 py-16 -mb-19.5 md:px-20">
  <div className="max-w-300 mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
    <div>
      <h3 className="text-4xl font-bold">15k+</h3>
      <p className="text-blue-100">Happy Customers</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">150+</h3>
      <p className="text-blue-100">Premium Products</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">12</h3>
      <p className="text-blue-100">Global Awards</p>
    </div>
    <div>
      <h3 className="text-4xl font-bold">24/7</h3>
      <p className="text-blue-100">Support Lead</p>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
