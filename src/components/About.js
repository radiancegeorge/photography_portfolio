import React, {useState, useEffect} from 'react';
import style from './Style';
// import { response } from 'express';

const About = ()=>{
    const innerStyle = {
        margin: '5px 0',
        
    }
    const [data, get] = useState([])
    
    useEffect(()=>{
            const getDetails = fetch('http://localhost:4000/',
            {
                method: 'get'
            });
        getDetails.then(res=>{
            const response = res.json();
            response.then(res=>{
                // console.log(res)
                get(res)
            })
        })
    }, [])
    
   return(
       <div style = {style}>
           {
               data.map(people =>(
               <div style = {innerStyle} key = {data.indexOf(people)}> 
                       <h5>Name: {people.name}</h5>
                       <h5>Age: {people.age}</h5>
                       <h5>Porfolio: {people.porfolio}</h5>
               </div>
               
               ))
           }
       </div>
   ) 
};
export default About;