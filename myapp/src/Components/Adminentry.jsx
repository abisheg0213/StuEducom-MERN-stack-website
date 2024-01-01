import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Adminentry(){
    const navi=useNavigate()
    const [regnum,setreg]=React.useState(0)
    const [markobt,setmark]=React.useState(0)
    const [subname,setsubname]=React.useState("")
    const [login,setlogin]=React.useState(false)
    const [uname,setuname]=React.useState("")
    const [pass,setpass]=React.useState("")
    const [sem,setsem]=React.useState("")
    return (
      <div>
        <div>
            <center><hr/>
            <label>UserName:</label>
            <input onChange={(e)=>{
                setuname(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Password:</label>
            <input onChange={(e)=>{
                setpass(e.target.value)
            }} type="password"></input>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                if(uname==="coeadmin" && pass==="admin123")
                {
                    setlogin(true)
                }
            }}>Login</button></center>
        </div>
        
        
        <hr/>
      {login ? <div><center>
        <label>Semester :</label>
       <select onChange={(e)=>
      {
        console.log(e.target.value)
        setsem(e.target.value)
      }}><option>...</option>
        <option>SEM VII</option>
       <option>SEM V</option></select>
      <hr/>
        <label>Register Number :</label>
        <input onChange={(e)=>{
          setreg(e.target.value)
        }} type="number"></input><br/>
        <label>Subject Name :</label>
        {sem==="SEM VII" ? <select onChange={(e)=>
      {
        console.log(e.target.value)
        setsubname(e.target.value)
      }}><option>...</option>
        <option>Enterprise Blockchain Frameworks</option>
       <option>Embedded Security</option><option>Firewall and IDS</option><option>Full Stack Web Development</option><option>Firewall and IDS Laboratory</option><option>Blockchain Laboratory</option><option>Software Testing</option><option>Proffesional Ethics</option> </select>: <select onChange={(e)=>
      {
        console.log(e.target.value)
        setsubname(e.target.value)
      }}><option>...</option>
       <option>Fundamentals of Cryptography and Cryptanalysis</option>
      <option>Computer Networks</option><option>Network tool and Technique</option><option>Operating Systems</option><option>FCC Laboratory</option><option>Python Programming with web framework</option><option>Compter Network Laboratory</option><option>SOFT SKILLS - II</option></select>}
      
      
      <br/><label> Marks :</label>
        <input onChange={(e)=>{
          setmark(e.target.value)
        }} type="number"></input>
        <button onClick={(e)=>{
          e.preventDefault()
          const s=regnum.slice(1,3)

          {s==="24" ? axios.post('http://localhost:5000/addexternals/sem7',{rno:regnum,marks:markobt,subject:subname}) : axios.post('http://localhost:5000/addexternals/sem5',{rno:regnum,marks:markobt,subject:subname})}
        }}>Submit</button></center></div> :<></>}
      <center><button onClick={(e)=>{
        e.preventDefault()
        navi('/')
      }}>Home</button></center>
      </div>)
}