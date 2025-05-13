import React from 'react'
import { formatPrice, isNewShoe } from '../../utils'

export default function ShoeCard({shoe}) {
  return (
    <article>
        <img src={shoe.imageSrc} alt={shoe.name} />
        {isNewShoe(shoe.releaseDate) && <span className='bg-blue-950 text-white'>Just Released!</span>}
        {shoe.salePrice && <span className='bg-red-300'>Sale</span>}
        <h1>{shoe.name}</h1>
        <p>{formatPrice(shoe.price)}</p>
        {shoe.salePrice && <p>{formatPrice(shoe.salePrice)}</p>}
        <p>{`${shoe.numOfColors} ${shoe.numOfColors > 1 ? 'Colors' : 'Color'}`}</p>
    </article>
  )
}
