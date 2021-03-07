import React from 'react'
import DropdownList from './dropdownlist'

function Dropdown({ data, isShown, isProfile }) {
  return (
    <div className={`${isShown ? "absolute" : "hidden"} border mt-2 flex-col absolute text-base z-50 float-left py-2 list-none text-left rounded shadow-lg w-48 bg-white top-12`}>
      
      {
        isProfile
        ?
        <div className="flex flex-col items-center py-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar" className="h-16 w-16 rounded-full"/>
          <p className="font-semibold text-gray-400 mt-2">Fullname</p>
          <p className="font-semibold text-gray-400">(Professional(Umum))</p>
        </div>
        :
        ""
      }
      {
        data.map(list => (
          <DropdownList key={list.id} data={list} />
        ))
      }
      {
        isProfile
        ?
        <div className="font-semibold text-gray-500 hover:bg-gray-100">
          <a href="https://www.sekolah.mu/logout" className="px-2 hover:text-gray-900">Logout</a>
        </div>
        :
        ""
      }

    </div>
  )
}

export default Dropdown