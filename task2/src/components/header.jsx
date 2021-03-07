import React, { useState } from 'react'
import Dropdown from './dropdown'
import HeaderIcon from './headericon'
import BurgerDown from './burgerdown'

function Header() {
  const [showBurger, setShowBurger] = useState(false)
  const [icons] = useState([
    {
      id: 1,
      icon: 'notifications',
      tooltip: 'Tanyamu'
    },
    {
      id: 2,
      icon: 'shopping_bag',
      tooltip: 'Daftar Pilihan'
    },
    {
      id: 3,
      icon: 'forum',
      tooltip: 'Notifikasi'
    }
  ])
  const [profileShown, setProfileShown] = useState(false)
  const [profileList] = useState([
    {
      id: 1,
      name: 'Lihat Profil',
      slug: 'profile'
    },
    {
      id: 2,
      name: 'Portofolio',
      slug: 'portofolio/profil'
    },
    {
      id: 3,
      name: 'Transkrip',
      slug: 'transkrip'
    },
    {
      id: 4,
      name: 'Tukar Voucher',
      slug: 'tukar-voucher'
    },
    {
      id: 5,
      name: 'Riwayat Pembelian',
      slug: 'riwayat-pembelian'
    },
  ])
  const [jenjangShown, setJenjangShown] = useState(false)
  const [jenjangList] = useState([
    {
      id: 1,
      name: 'PAUD',
      slug: 'jenjang/paud'
    },
    {
      id: 2,
      name: 'SD',
      slug: 'jenjang/sd'
    },
    {
      id: 3,
      name: 'SMP',
      slug: 'jenjang/smp'
    },
    {
      id: 4,
      name: 'SMA/SMK',
      slug: 'jenjang/sma'
    },
    {
      id: 5,
      name: 'Mahasiswa',
      slug: 'jenjang/mahasiswa'
    },
    {
      id: 6,
      name: 'Orangtua',
      slug: 'jenjang/orangtua'
    },
    {
      id: 7,
      name: 'Guru',
      slug: 'jenjang/guru'
    },
    {
      id: 8,
      name: 'Profesional',
      slug: 'jenjang/profesional'
    }
  ])
  const [burgerProfile, setBurgerProfile] = useState(false)
  const [burgerJenjang, setBurgerJenjang] = useState(false)

  return (
    <div className="py-2 z-20 bg-white shadow-md sticky top-0">
      <div className="px-4 flex justify-between max-w-screen-lg mx-auto items-center">

        <div className="flex lg:items-center items-start lg:w-10/12 w-full justify-between">
          <img src="https://cdn.sekolah.mu/assets/home/sekolahmu_logo.svg" alt="Logo" className="mr-5 cursor-pointer"/>

          {/* less than large display */}
          <div className="lg:hidden flex flex-col items-end w-full">
            <div className="flex items-start md:w-3/12 w-6/12 justify-between">
              <div className="flex items-center w-8/12 justify-around">
                {
                  icons.map(icon => <HeaderIcon key={icon.id} data={icon} />)
                }
              </div>

              <span className="material-icons cursor-pointer" onClick={() => setShowBurger(!showBurger)}>
                { !showBurger ? "menu" : "close" }
              </span>
            </div>

            <div className={`${showBurger ? "flex" : "hidden"} w-full pt-3 mt-3 flex-col justify-end items-end`}>
              <div className="flex w-8/12 items-end justify-end">
                <form className="border rounded-full flex w-full">
                  <button type="submit" className="material-icons ml-3 text-gray-500">search</button>
                  <input type="search" className="m-1 w-10/12 p-1 focus:outline-none" placeholder="Cari Program Belajar"/>
                </form>
              </div>

              <div className="w-8/12 flex-col justify-center items-center flex">

                <div className="flex flex-col items-center mt-2 p-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar" className="h-16 w-16 rounded-full"/>
                  <p className="font-semibold text-gray-400 mt-2">Fullname</p>
                  <p className="font-semibold text-gray-400">(Professional(Umum))</p>
                  <p className="font-semibold text-gray-400 cursor-pointer">Logout</p>
                </div>

                <a href="https://www.sekolah.mu/programmu" className="font-semibold text-gray-500 border-b">Programmu</a>

                <div className="flex justify-center border-b cursor-pointer mt-2" onClick={() => { setBurgerProfile(!burgerProfile) }}>
                  <p className="font-semibold text-gray-500">Profile</p>
                  <span className="material-icons text-gray-500">
                    expand_more
                  </span>
                </div>
                <BurgerDown data={ profileList } isShown={burgerProfile}/>

                <div className="flex justify-center border-b cursor-pointer mt-2" onClick={() => { setBurgerJenjang(!burgerJenjang) }}>
                  <p className="font-semibold text-gray-500">Pilihan Jenjang</p>
                  <span className="material-icons text-gray-500">
                    expand_more
                  </span>
                </div>
                <BurgerDown data={ jenjangList } isShown={burgerJenjang}/>
              </div>
            </div>
          </div>

          {/* end less than large display */}

          <div className="lg:flex hidden justify-around items-center w-full">
            {/* dropdown */}
            <div className="min-w-max">
              <div className="flex items-center ml-3 cursor-pointer" onClick={() => { setJenjangShown(!jenjangShown) }}>
                <p className="font-semibold text-gray-500">Pilihan Jenjang</p>
                <span className="material-icons text-gray-500">
                  { !jenjangShown ? "expand_more" : "keyboard_arrow_right" }
                </span>
              </div>

              <Dropdown data={jenjangList} isShown={jenjangShown} />
            </div>

            <div className="flex w-full items-end justify-center mx-3">
              <form className="border rounded-full flex w-full">
                <button type="submit" className="material-icons ml-3 text-gray-500">search</button>
                <input type="search" className="m-1 w-10/12 p-1 focus:outline-none" placeholder="Cari Program Belajar"/>
              </form>
            </div>
          
            <a href="https://www.sekolah.mu/programmu" className="font-semibold text-gray-500">Programmu</a>
          </div>
        </div>

        <div className="lg:flex hidden items-center w-2/12 justify-around">
          
          {
            icons.map(icon => <HeaderIcon key={icon.id} data={icon} />)
          }

          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar" className="h-10 w-10 rounded-full cursor-pointer" onClick={() => setProfileShown(!profileShown)}/>
          
          <Dropdown data={profileList} isShown={profileShown} isProfile={true} />
        </div>

      </div>
    </div>
  )
}

export default Header