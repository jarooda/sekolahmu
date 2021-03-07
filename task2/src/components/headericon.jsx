import React from 'react'

function HeaderIcon({ data }) {
  return (
    <div className="group flex items-center justify-center">
      <span className="material-icons text-gray-500 cursor-pointer">
        { data.icon }
      </span>
      <span className="opacity-0 bg-yellow-400 text-black font-light text-center top-8 rounded-md p-1 mx-3 my-2 absolute z-10 group-hover:opacity-100">{ data.tooltip }</span>
    </div>
  )
}

export default HeaderIcon