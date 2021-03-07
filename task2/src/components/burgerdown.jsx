import React from 'react'

function BurgerDown ({ data, isShown }) {
  return (
    <div>
      {
        isShown
        ?
        <div>
          {
            data.map(datum => (
              <div key={datum.id} className="font-semibold text-gray-500 hover:bg-gray-100 text-center">
                <a href={`https://www.sekolah.mu/${datum.slug}`} className="px-2 hover:text-gray-900">{datum.name}</a>
              </div>
            ))
          }
        </div>
        :
        ""
      }
    </div>
  )
}

export default BurgerDown