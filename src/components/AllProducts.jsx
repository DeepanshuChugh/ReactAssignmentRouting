import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const AllProducts = () => {
    const [data,setData] =useState([])

    useEffect(() => {
      const dataFn = async()=>{
        let res = await axios.get('http://localhost:8080/products');
        setData(res.data)
    }
    dataFn()
}, [])
console.log(data);

const tableStyle= {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding:"10px"
  }

  return (
      <>
      <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <table>
       <tr style={tableStyle} >
           <th style={tableStyle}>  Procuct Name</th>
           <th style={tableStyle}>Product Price</th>
           <th style={tableStyle}>Review</th>
           <th style={tableStyle}>Image</th>
           <th style={tableStyle}>More Details</th>
       </tr>
       {
           data.map((el,ind)=>{
               return(
                   <tr style={tableStyle} key={ind}>
                       <td style={tableStyle}>{el.title}</td>
                       <td style={tableStyle}>{el.price}</td>
                       <td style={tableStyle}>{el.reviewCount}</td>
                       <td style={tableStyle}><img src={el.imageUrl} style={{width:'60px' ,height:'60px'}} alt="helo"></img></td>
                      
                       <td><Link to={`/product/${el.id}`}>More Details</Link></td>
                   </tr>
               )

           })
       }
       </table>
      
       </div>
       
      </>
  )
}

export default AllProducts