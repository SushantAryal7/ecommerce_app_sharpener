import React, { Fragment, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'


    
    
    
function ProductList() {
  const [productsArr, setProductsArr] = useState([])
  const [isLoading, setIsLoading]    = useState(true)
  useEffect(()=>{

    async function fun() {
      try{
        const fet = await fetch('https://fakestoreapi.com/products')
      const data = await fet.json()       
      setProductsArr(data)
      setIsLoading(false)
      } catch(error){console.log(error)}
    }
    // fetch('https://fakestoreapi.com/products')
    // .then((data)=>{return data.json()})
    // .then((ans)=>{
    //   setProductsArr(ans)
    // })
    fun()
  },[])

  const load = 'loading...'
  return (
    <Fragment>
        {isLoading?<p style={{textAlign:'center'}}>{load}</p>:
        <div style={{ display:'flex', flexWrap:'wrap', gap:'10px'}}>
        {productsArr.map((product) => <Card style={{ flex: '20%', boxSizing:'borderBox' ,padding: '20px', margin:'10%' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
      </Card.Body>
    </Card>
       
       
    )}
            </div>
        }

    </Fragment>
  )
}

export default ProductList