import React from "react";
import axios from "axios";
import "./form.css"
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const [dec,setdec]=React.useState(false)
    const [date,setdate]=React.useState("")
    React.useEffect(()=>{
        axios.get('http://localhost:5000/checkres').then((res)=>{
            setdec(res.data)
        })
        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
let currentDate = `${day}-${month}-${year}`;
setdate(currentDate)
    })
    const navi=useNavigate()
    const [login,setlogin]=React.useState(false)
    const [reg,setreg]=React.useState("")
    const [dob,setdob]=React.useState()
    return <div>
        <center><h1>EDUCOM EDUCATION AT UR FINGER TIP</h1></center>
        <div>
            <center><hr/>
            <label>Register Number:</label>
            <input onChange={(e)=>{
              setreg(e.target.value)
            }} type="text"></input>
            <br/>
            <label>Date Of Birth:</label>
            <input onChange={(e)=>{
               setdob(e.target.value)
            }} type="password"></input>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault()
                axios.get("http://localhost:5000/checkdata/"+reg+"/"+dob).then((res)=>
                {
                    console.log(res.data)
                    if(res.data==="Data not Found"){
                        setlogin(true)
                    }
                    else{
                        navi('/data/'+reg)
                    }
                })
            }}>Login</button><br/>
            {login ? <p><strong>Entered details are incorrect</strong></p> :<></>}
            <br/>
           {dec ? <div><Card className="card" style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title><strong>Odd Semester Results 2023</strong></Card.Title>
                    <Card.Subtitle>{date}</Card.Subtitle>
                    <Card.Text><strong>Results for the Odd Semeter for the academic year 2023-2024 has been declared </strong></Card.Text>
                    <Card.Text>Log in into your SWI to view your results</Card.Text>
                </Card.Body>
            </Card></div> :<></>}
            
            </center>
        </div>
        
    </div>
}