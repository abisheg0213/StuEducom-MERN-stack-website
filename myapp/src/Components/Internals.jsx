import React from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
export default function Internals(){
    const {regno}=useParams()
    const navi=useNavigate()
    const [data,setdata]=React.useState({subject1:{subname: 0,internal: 0},subject2:{subname: '',internal:0},subject3:{subname: '',internal: 0},subject4:{subname: '',internal: 0},subject5:{subname: '',internal: 0},subject6:{subname: '',internal: 0},subject7:{subname: '',internal: 0},subject8:{subname: '',internal: 0}})
    React.useEffect(()=>{
        axios.get("http://localhost:5000/getinternals/"+regno).then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
    },[])
    return <div> <center><h1>EDUCOM EDUCATION AT UR FINGER TIP</h1></center><hr/>
    <center>
    <table border="2px">
        <tr>
            <td><strong>S.NO</strong></td>
            <td><strong>Subject Name</strong></td>
            <td><strong>Internals</strong></td>
        </tr>
        <tr>
            <td>1</td>
            <td>{data.subject1.subname}</td>
            <td>{data.subject1.internal}</td>
        </tr>
        <tr>
            <td>2</td>
            <td>{data.subject2.subname}</td>
            <td>{data.subject2.internal}</td>
        </tr>
        <tr>
            <td>3</td>
            <td>{data.subject3.subname}</td>
            <td>{data.subject3.internal}</td>
        </tr>
        <tr>
            <td>4</td>
            <td>{data.subject4.subname}</td>
            <td>{data.subject4.internal}</td>
        </tr>
        <tr>
            <td>5</td>
            <td>{data.subject5.subname}</td>
            <td>{data.subject5.internal}</td>
        </tr>
        <tr>
            <td>6</td>
            <td>{data.subject6.subname}</td>
            <td>{data.subject6.internal}</td>
        </tr>
        <tr>
            <td>7</td>
            <td>{data.subject7.subname}</td>
            <td>{data.subject7.internal}</td>
        </tr>
        <tr>
            <td>8</td>
            <td>{data.subject8.subname}</td>
            <td>{data.subject8.internal}</td>
        </tr>
       
    </table>
    <button onClick={(e)=>{
            e.preventDefault()
            navi(-1)
        }}>Back</button>
    </center>
    </div>
}