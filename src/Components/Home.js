import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() =>{
    axios.get('/api/product/')
    .then(response =>{
      console.log(response.data.response)
      setProducts(response.data.response)
    })
  },[])


    return (

        
        <>
          
            <div className="container">
                <div className="row">

                            {products.map(item =>(
                              <div className="card col-md-4" key={item._id}>
                                <div className="box_card">
                                  <img src={item.photo} alt="bike picture" />
                                  <div  className="card-body" >                                    
                                    <h4 className="card-title">{item.prodname}</h4>
                                    <h5 className="card-price">{item.price}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <NavLink to="/" className="btn btn-primary">Buy Now</NavLink>                 
                                  </div>
                                </div>                             
                              </div>
                            ))}
                     
                    
                    
                </div>

            </div>
        </>
    )
}

export default Home
