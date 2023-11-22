import React from 'react'
import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'
// import img1 from '../../img/porto1.png'
// import img2 from '../../img/porto2.png'
// import img3 from '../../img/sun.png'




const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Ahmad</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus fugiat facere voluptas illo. Vel quam unde fuga distinctio deserunt est mollitia modi, molestias asperiores, cum, aperiam dolorem maiores commodi ea.</p>
            </div>
            <div className="pl-list">
                {products.map(item => (
                    <Product key={item.id} img={item.img} />
                ))}
            </div>
        </div>
    )
}

export default ProductList