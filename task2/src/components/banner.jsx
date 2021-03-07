import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

function Banner() {
  const [banners] = useState([
    {
      id: 1,
      url: 'https://cdn.sekolah.mu/avatar/158586/026b04aa2d224f45af8834288bc0d6ed.jpg'
    },
    {
      id: 2,
      url: 'https://cdn.sekolah.mu/upload/97a5a42be51e45bd93bf7b13be9137fa.jpg'
    },
    {
      id: 3,
      url: 'https://cdn.sekolah.mu/upload/6fd0a2dfdf1d4c99b1d73e43d62f71a6.png'
    },
    {
      id: 4,
      url: 'https://cdn.sekolah.mu/upload/06abcd97223c4cbe969cb9006d6185bf.png'
    },
  ])

  const slideProperties = {
    indicators: true,
    prevArrow: <div className="flex justify-center items-center rounded-full border shadow-md w-10 h-10 -right-5 relative bg-white cursor-pointer"><span className="material-icons text-blue-400 text-5xl">keyboard_arrow_left</span></div>,
    nextArrow: <div className="flex justify-center items-center rounded-full border shadow-md w-10 h-10 -left-5 relative bg-white cursor-pointer"><span className="material-icons text-blue-400 text-5xl">keyboard_arrow_right</span></div>
  }

  return (
    <div className="max-w-screen-lg mx-auto mt-5">
      <Slide {...slideProperties}>
        {
          banners.map(banner => (
            <div style={{'backgroundImage': `url(${banner.url})`}} className="flex items-center justify-center bg-contain h-80 rounded-2xl bg-no-repeat bg-center" key={banner.id}>
            </div>
          ))
        }
      </Slide>
    </div>
  )
}

export default Banner