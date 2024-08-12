import React from 'react'

function GetSkill({item,key}) {
  return (
    <div className="card" key={key}>
    <img src={item.logo} className="card-img-top" />
    <div className="card-body">
     <h1 className="card-title">{item.name}</h1>
     <p className="card-text">
      {item.definition} 
      </p>
    </div>
   </div>   
  )
}

export default GetSkill
