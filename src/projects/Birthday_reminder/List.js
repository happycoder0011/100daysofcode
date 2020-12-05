import React from 'react'

export default function List({people}) {
    return (
        <div>
             {people.map((pep) => {
            
            const {id,name,DOB,img} = pep;
            var dob = DOB.split('-');
            var today = new Date();
            var m = today.getMonth();
            var d = today.getDate()
            
            if(dob[1]==m+1 && dob[2]==d){

            return (
                <>
               <article key={id} className='person'>
                   <img src={img}/>
                   <div>
                       <h4>{name}</h4>
                       <p>{today.getFullYear()-dob[0]} years</p>
                   </div>
               </article>
                </>  
            )}
        })}      
        </div>
    )
}
