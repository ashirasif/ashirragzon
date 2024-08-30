"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

interface IFormInput {
  color: string,
  size: string,
}

export default function ProductPage({params} : {
  params: {
    id: string
  }
}) {

  const [product, setProduct] = useState({} as any)
  const form = useForm<IFormInput>()

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`https://fakestoreapi.com/products/${params.id}`).then((res) => res.json())
      setProduct(data)
    }

    fetchProduct()
  }, [])

  function onSubmit(data: IFormInput) {
    if (!data.size || !data.color) {
      return
    }

    const cart = localStorage.getItem('cart')

    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([{
        id: product.id,
        size: data.size,
        color: data.color,
      }]))
      return
    }
    
    localStorage.setItem('cart', JSON.stringify([
      ...JSON.parse(cart),
      {
        id: product.id,
        size: data.size,
        color: data.color,
      }
    ]))

    console.log("stored")
  }

 
  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='max-w-screen-md'>
        <img src={product.image} className='h-40' alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.price} USD</p>
        <p>{product.description}</p>   
      </div>
      <div>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='flex gap-4'>
            <label htmlFor="red">
              <input type='radio' {...form.register('color')} value="red" id="red" />
              red
            </label>
            <label htmlFor="yellow">
              <input type='radio' {...form.register('color')} value="yellow" id="yellow" />
              yellow
            </label>
            <label htmlFor="green">
              <input type='radio' {...form.register('color')} value="green" id="green" />
              green
            </label>
          </div>

          <div className='flex gap-4'>
            <label htmlFor="small">
              <input type='radio' {...form.register('size')} value="small" id="small" />
              small
            </label>
            <label htmlFor="medium">
              <input type='radio' {...form.register('size')} value="medium" id="medium" />
              medium
            </label>
            <label htmlFor="large">
              <input type='radio' {...form.register('size')} value="large" id="large" />
              large
            </label>
          </div>
          <button className='bg-black p-2 text-white' type='submit'>
            Add to cart
          </button>
        </form>       
      </div>
    </>
  )
}

