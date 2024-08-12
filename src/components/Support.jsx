import React, { useState } from 'react';
import boy from './Designer.png';
import {useNavigate} from 'react-router-dom'
import SuccessPage from './SuccessPage'
import axios from 'axios'
function Support() {
  const navigate=useNavigate();
  const [detail, setDetail] = React.useState({ 
    "recipient": "", 
    "subject": "",
    "message": "",
  });
  const [success,setSuccess]=useState(false);
  function handleChange(e, field) {
    setDetail({...detail, [field]: e.target.value});
  }
  function Send() {
    axios.post("http://localhost:8080/message/send", detail)
      .then(res => {
        console.log(res.data); 
        setSuccess(true); 
      })
      .catch(error => {
        console.error('Error sending message:', error);
      });
  }
  
  function handleSubmit(e){
    e.preventDefault();
    Send();
   setSuccess(prev => !prev)
   setTimeout(()=>{
     navigate("/")
   },2000)
  }
  
  return (
    <>{
      success ?<SuccessPage />:(
      <div className='support'>
        <h1>HOW MAY I HELP YOU!!!!</h1>
        <div className="content-wrapper">
          <form onSubmit={handleSubmit}>
            <input 
              type='email' 
              className='form-control'
              placeholder='Enter your Email'
              onChange={(e) => handleChange(e, "recipient")}
            />
            <br />
            <input 
              type='text' 
              className='form-control'
              placeholder='Enter subject' 
              onChange={(e) => handleChange(e, "subject")}
            />
            <br />
            <textarea 
              className='form-control fixed-textarea'
              placeholder='Enter your Message'  
              onChange={(e) => handleChange(e, "message")}
            >
            </textarea>
            <br />
            <input type='submit' className='btn btn-primary' value='send'/>
          </form>
          <aside>
            <img src={boy} style={{width:'100%',height:'100%'}} alt="Boy Designer"/>
          </aside>
        </div>
      </div>
      )
      }
    </>
  );
}

export default Support;
