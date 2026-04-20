import React from 'react'
import { Link } from 'react-router-dom'

function Product() {


const products = [
    {
        id:1,
        name:"Laptop"
    },
    {
        id:2,
        name:"Mobile"
    },
    {
        id:3,
        name:"Tablet"
    },
]

  return (
    <div>

    <h2>Products</h2>

    {products.map(product =>(
        <div key={product.id}>

        <Link to={`/product/${product.id}`}>{product.name}</Link>

        </div>
    ))}
      
    </div>
  )
}

export default Product
