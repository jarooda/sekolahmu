import React from 'react'

function DropdownList({ data }) {
  return (
    <div className="font-semibold text-gray-500">
      <a href={`https://www.sekolah.mu/${data.slug}`} className="px-2">{data.name}</a>
    </div>
  )
}

export default DropdownList