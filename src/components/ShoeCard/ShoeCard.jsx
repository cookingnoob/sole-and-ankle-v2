import React from 'react'
import { formatPrice, isNewShoe } from '../../utils'

export default function ShoeCard({shoe}) {
  return (
    <article>
        <img src={shoe.imageSrc} alt={shoe.name} />
        <NewTag release={shoe.releaseDate}/>
        <SalesTag sale={shoe.salePrice}/>
        <h1>{shoe.name}</h1>
        <ShoePrice price={shoe.price}/>
        <SalesPrice price={shoe.salePrice}/>
        <ColorsP colors={shoe.numOfColors}/>
    </article>
  )
}

function NewTag({release}){
return (
    isNewShoe(release) ? <span className='bg-blue-950 text-white'>Just Released!</span> : null
)
}

function SalesTag({sale}){
    return sale ? <span className='bg-red-300'>Sale</span> : null
}

function SalesPrice({price}){
    return (price ? <p>{formatPrice(price)}</p> : null)
}

function ShoePrice(price){
    return  <p>{formatPrice(price.price)}</p>
}

function ColorsP({colors}){

    return <p>{`${colors} ${colors > 1 ? 'Colors' : 'Color'}`}</p>
}