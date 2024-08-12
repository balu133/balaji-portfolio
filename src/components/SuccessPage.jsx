import React from 'react'
import tick from './tick.jpg'
function SuccessPage() {
  return (
    <> 
       <div className='success'>
          <div className='card' style={{width:'300px',height:'350px'}}>
            <img src={tick} style={{margin:'10px'}}/>
             <div className='card-body'>
               <p style={{color:'green',fontSize:'30px',textAlign:'center'}}>SUCCESS</p>
               <p style={{fontWeight:'bold',textAlign:'center'}}>Message has successfully sent</p>
             </div>
          </div>
       </div>
    </>
  )
}

export default SuccessPage
