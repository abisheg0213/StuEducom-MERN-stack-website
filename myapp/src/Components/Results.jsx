import React from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
export default function Results(){
    const {regno}=useParams()
    console.log("***")
    const navi=useNavigate()
    const [dec,setdec]=React.useState(false)
    const [data,setdata]=React.useState({subject1:{subname: '',grade: ''},subject2:{subname: '',grade: ''},subject3:{subname: '',grade: ''},subject4:{subname: '',grade: ''},subject5:{subname: '',grade: ''},subject6:{subname: '',grade: ''},subject7:{subname: '',grade: ''},subject8:{subname: '',grade: ''},sgpa:0})
    React.useEffect(()=>{
        axios.get("http://localhost:5000/announceresult/"+regno).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
        axios.get('http://localhost:5000/checkres').then((res)=>{
            setdec(res.data)
        })
    },[])
    return <div> <center><h1>EDUCOM EDUCATION AT UR FINGER TIP</h1></center><hr/>
    <center>
   { dec ?  <table border="2px">
        <tr>
            <td><strong>S.NO</strong></td>
            <td><strong>Subject Name</strong></td>
            <td><strong>Grade</strong></td>
        </tr>
        <tr>
            <td>1</td>
            <td>{data.subject1.subname}</td>
            <td>{data.subject1.grade}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{data.subject2.subname}</td>
            <td>{data.subject2.grade}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{data.subject3.subname}</td>
            <td>{data.subject3.grade}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>{data.subject4.subname}</td>
            <td>{data.subject4.grade}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>{data.subject5.subname}</td>
            <td>{data.subject5.grade}</td>
        </tr>
        <tr>
            <td>6</td>
            <td>{data.subject6.subname}</td>
            <td>{data.subject6.grade}</td>
        </tr>
        <tr>
            <td>7</td>
            <td>{data.subject7.subname}</td>
            <td>{data.subject7.grade}</td>
        </tr>
        <tr>
            <td>8</td>
            <td>{data.subject8.subname}</td>
            <td>{data.subject8.grade}</td>
        </tr>
        <tr>
            <td></td>
            <td>SGPA</td>
            <td>{data.sgpa}</td>
            
        </tr>

    </table> : <h3>Results are Not Declared yet</h3>}<button onClick={(e)=>{
            e.preventDefault()
            navi(-1)
        }}>Back</button></center>
    </div>
}