import React, { useState } from 'react'
import Dropdown from './dropdown'
import HeaderIcon from './headericon'

function Header() {
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

  return (
    <div className="py-2 bg-white shadow-md sticky top-0">
      <div className="px-4 flex justify-between max-w-screen-lg mx-auto items-center">

        <div className="flex items-center w-10/12 justify-between">
          <img src="https://cdn.sekolah.mu/assets/home/sekolahmu_logo.svg" alt="Logo" className="mr-5 cursor-pointer"/>

          <div className="flex justify-around items-center w-full">
            {/* dropdown */}
            <div className="min-w-max">
              <div className="flex items-center ml-3 cursor-pointer" onClick={() => { setJenjangShown(!jenjangShown) }}>
                <p className="font-semibold text-gray-500">Pilihan Jenjang</p>
                <span className="material-icons text-gray-500">
                  expand_more
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

        <div className="flex items-center w-2/12 justify-around">
          
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