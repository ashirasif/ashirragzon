"use client"
import React, { useEffect } from 'react'

export function ProductPage(props: {
  key: number,
  id: number,
  size: string,
  color: string,
}) {

  const [product, setProduct] = React.useState({} as any)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${props.id}`).then((res) => res.json())
      setProduct(data)
    }

    fetchProduct()
  }, [])

  return (
    <div key={props.key}>
      <img src={product.image} className='h-40' alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.price} USD</p>
      <p>{product.description}</p>   
      <p>Color: {props.color}</p>
      <p>Size: {props.size}</p>
    </div>
  )
}

