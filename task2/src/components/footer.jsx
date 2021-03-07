import React from 'react'

function Footer () {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="max-w-screen-lg mx-auto flex lg:flex-row flex-col justify-around lg:items-start items-center">
          <div className="flex flex-wrap flex-col items-center justify-center">
            <img src="https://cdn.sekolah.mu/assets/home/footer_logo.svg" alt="footer-logo" className="my-1 text-gray-500 cursor-pointer hover:text-gray-700"/>
            <img src="https://cdn.sekolah.mu/assets/home/googleplay.svg" alt="footer-logo" className="my-1 text-gray-500 cursor-pointer hover:text-gray-700"/>
          </div>
          <div className="flex justify-around w-full flex-col sm:flex-row">
            <div className="flex-col flex my-3 text-center lg:text-left">
              <p className="font-semibold mb-5">Tentang Prakerja</p>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Mitra Kolaborasi</a>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Panduan Prakerja</a>
            </div>
            <div className="flex-col flex my-3 text-center lg:text-left">
              <p className="font-semibold mb-5">Tentang Kami</p>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Tentang Sekolah.mu</a>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Dewan Sekolah.mu</a>
            </div>
            <div className="flex-col flex my-3 text-center lg:text-left">
              <p className="font-semibold mb-5">Lainnya</p>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Blog</a>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Bantuan</a>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Syarat Ketentuan</a>
              <a className="my-1 text-gray-500 cursor-pointer hover:text-gray-700" href="https://www.sekolah.mu/">Kebijakan Privasi</a>
            </div>
            <div className="flex-col items-center flex my-3 text-center lg:text-left">
              <p className="font-semibold mb-5">Ikuti Kami</p>
              <div className="flex">
                <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-500 border-gray-500 cursor-pointer hover:border-gray-700 hover:text-gray-700 mx-1">
                  <i className="fab fa-youtube" />
                </div>
                <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-500 border-gray-500 cursor-pointer hover:border-gray-700 hover:text-gray-700 mx-1">
                  <i className="fab fa-instagram" />
                </div>
                <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-500 border-gray-500 cursor-pointer hover:border-gray-700 hover:text-gray-700 mx-1">
                  <i className="fab fa-facebook" />
                </div>
                <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-500 border-gray-500 cursor-pointer hover:border-gray-700 hover:text-gray-700 mx-1">
                  <i className="fab fa-twitter" />
                </div>
                <div className="border-2 rounded-full w-8 h-8 flex justify-center items-center text-gray-500 border-gray-500 cursor-pointer hover:border-gray-700 hover:text-gray-700 mx-1">
                  <i className="fab fa-linkedin" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300">
        <div className="max-w-screen-lg mx-auto">
          <p className="text-center py-1 text-gray-500">© 2021 Jalu Wibowo Aji All Rights Reserved</p>
        </div>
      </div>
    </>
  )
}

export default Footer