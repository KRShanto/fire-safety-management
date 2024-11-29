import React from 'react'
import NewsSection from './NewsSection'

export default function NewsComponent() {
  return (
    <div>
      
      {/* <section
        className="relative -mt-24 h-[530px] bg-cover bg-center"
        style={{ backgroundImage: "url(/heroone.png)",backgroundRepeat: "no-repeat", }}
      >
         <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-48 font-montserrat">
          <h1 className="mb-4 text-5xl font-bold text-white">FSM Safety Insights</h1>
          <p className="mb-8 text-xl text-white font-poppins">
          Stay informed with the latest in safety technology, training and trends
          </p>
        </div>
      </section> */}
      <NewsSection/>
    </div>
  )
}
