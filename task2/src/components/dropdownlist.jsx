import React from 'react'

function DropdownList({ data }) {
  return (
    <div className="font-semibold text-gray-500 hover:bg-gray-100">
      <a href={`https://www.sekolah.mu/${data.slug}`} className="px-2 hover:text-gray-900">{data.name}</a>
    </div>
  )
}

export default DropdownList