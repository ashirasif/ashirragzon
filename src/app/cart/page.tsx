"use client"
import React, { useEffect } from 'react'
import { ProductPage } from './_component/ProductPage'

export default function Page() {

  const [data, setData] = React.useState([])

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (!cart) {
      return
    }
    setData(JSON.parse(cart))
  }, [])

  if (!data || data.length === 0) {
    return <div>Empty Cart</div>
  }


  return (
    <div className='flex flex-col gap-12'>
      <h1>Cart</h1>
      <div className='space-y-6'>
        {
          data.map((item: any, i) => (
            <ProductPage key={i} size={item.size} color={item.color} id={item.id} />
          ))
        }
      </div>
    </div>
  )
}

