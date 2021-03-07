import React from 'react'
import StarRatings from 'react-star-ratings';

function Card({ data }) {

  const currencyFormatter = ( string ) => {
    const number = +string
    if (number === 0) {
      return 0
    }

    const currency = Number((number)).toLocaleString(['ban', 'id'])

    return `Rp${currency}`
  }

  return (
    <div className="shadow-lg rounded-b-xl pb-3">
      <img src={ data.avatar } alt={ data.name } className=" rounded-t-xl"/>
      <div className="px-3 py-1 text-gray-600">
        <p className="font-semibold">{ data.name }</p>
        <p className="text-xs">Oleh <span className="font-semibold">{ data.creator }</span></p>
        <div className="py-1">
          <StarRatings
            rating={parseFloat(data.rating)}
            numberOfStars={5}
            starRatedColor="#FFFF00"
            starDimension="10px"
            starSpacing="3px"
          />
          <span className="ml-1 text-xs font-semibold">{ data.rating } ( { data.reviewers } )</span>
        </div>
        <p className="text-blue-500 text-sm font-semibold">{ currencyFormatter(data.price) === 0 ? "GRATIS" : currencyFormatter(data.price) }<span className="text-gray-400 text-xs line-through"> { currencyFormatter(data.price_normal) === 0 ? "" : currencyFormatter(data.price_normal) }</span></p>
      </div>
    </div>
  )  
}

export default Card