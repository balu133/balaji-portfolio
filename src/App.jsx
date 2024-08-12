import React from "react"
import './App.css'
import myImage from './person.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import skill from './data'
import GetSkill from "./components/GetSkill";
function App() {

  return (
    <>
     <div className="banner">
        <div className="container">
           <div className="data-container">
              <h3>IT'S ME</h3>
              <h1 style={{fontSize:'100px'}}>BOLE BALAJI</h1>
              <br />
              <h4>I'm a <span style={{color:'blue'}}>Full Stack Developer</span></h4>
           </div>
           <div className="data-container">
              <div className="circle">
                <img src={myImage}  className="adjust-img"/>
              </div>
           </div>
        </div>
     </div>
     <h1 style={{color:'tomato'}}>MY SKILLS ARE :  </h1>
     <div className="skills">
        {
            skill.map((item,index)=>{
            return <GetSkill item={item} key={index} />
            })
        }   
     </div >
    </>
  )
}

export default App
