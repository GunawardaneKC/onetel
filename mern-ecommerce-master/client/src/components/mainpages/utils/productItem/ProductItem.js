import React from 'react'
import BtnRender from './BtnRender'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <Link id="btn_view" to={`/detail/${product._id}`}>
            <img src={product.images.url} alt="" /></Link>

            <div className="product_box">
            <Link id="btn_view" to={`/detail/${product._id}`}>
                <h2 title={product.title}>{product.title}</h2>
                </Link>
                <span>Rs. {product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div>
    )
}

export default ProductItem
