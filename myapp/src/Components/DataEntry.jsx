import React from "react";
import axios from "axios";
import "./form.css"
import { useNavigate } from "react-router-dom";
export default function DataEntry(){
    const navi=useNavigate()
    const [regnum,setreg]=React.useState(0)
    const [name,setname]=React.useState("")
    const [dob,setdob]=React.useState()
    const [dept,setdept]=React.useState("")
    const [sem,setsem]=React.useState("")
    const [add,setadd]=React.useState("")
    const [fname,setfname]=React.useState("")
    const [bgroup,setbgroup]=React.useState("")
    const [login,setlogin]=React.useState(false)
    const [uname,setuname]=React.useState("")
    const [pass,setpass]=React.useState("")
    return (
      <div>
        <div>
            <hr/>
            <center>
            <label>UserName :</label>
            <input onChange={(e)=>{
                setuname(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Password :</label>
            <input onChange={(e)=>{
                setpass(e.target.value)
            }} type="password"></input>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                if(uname==="register" && pass==="admin123")
                {
                    setlogin(true)
                }
            }}>Login</button></center>
        </div>
        
        
        <hr/>
      {login ? <div><center>
        <label>Register Number :</label>
            <input onChange={(e)=>{
                setreg(e.target.value)
            }} type="number"></input>
            <br/>
            <label>Candidate Name :</label>
            <input onChange={(e)=>{
                setname(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Date Of Birth :</label>
            <input onChange={(e)=>{
                setdob(e.target.value)
            }} type="date"></input>
            <br/>
            <label>Department :</label>
            <input onChange={(e)=>{
                setdept(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Semester :</label>
            <input onChange={(e)=>{
                setsem(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Address :</label>
            <input onChange={(e)=>{
                setadd(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Father Name :</label>
            <input onChange={(e)=>{
                setfname(e.target.value)
            }} type="text"></input>
            <br/>
            <label>BloodGroup :</label>
            <input onChange={(e)=>{
                setbgroup(e.target.value)
            }} type="text"></input>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                console.log(dob)
                { sem==="VII" ? axios.post('http://localhost:5000/newstudent/sem7',{name:name,rno:regnum,dob:dob,dept:dept,sem:sem,add:add,fathername:fname,blood:bgroup}) : axios.post('http://localhost:5000/newstudent/sem5',{name:name,rno:regnum,dob:dob,dept:dept,sem:sem,add:add,fathername:fname,blood:bgroup}) }
            }}>Register</button>
        </center></div> :<></>}
        <center><button onClick={(e)=>{
        e.preventDefault()
        navi('/')
      }}>Home</button></center>
      </div>)
}