import React, { Fragment } from 'react'
import classes from './Cart.module.css'

const cartElements = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  quantity: 2,
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  quantity: 3,
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  quantity: 1,
  
  }
  
  ]

function Cart() {
  return (
    <Fragment>
        <div className={classes.cart}>
          <h4 style={{textAlign:'center', marginTop:'4vh'}}>Cart</h4>
          <div>
            <span className={classes.span}>item</span>
            <span className={classes.span}>price</span>
            <span className={classes.span}>quantity</span>

          </div>
          <br />
          {cartElements.map((product)=><div className={classes.cartmap}>
            <span>
                <img   style={{width:'10%', height:'auto', marginTop: '7%',
}} src={product.imageUrl} alt="Description of image" />{product.title}
            </span>
            <span>{product.price}</span>
            <span>{product.quantity}</span>

          </div>)}
        </div>
    </Fragment>
  )
}

export default Cart