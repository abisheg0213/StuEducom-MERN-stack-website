import React from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";
export default function Display(){
    const navi=useNavigate()
    const [resdata,setresdata]=React.useState([{regno:0,name:"",dept:"",sem:"",fathername:"",add:"",bloodgroup:""}])
    const [dec,setdec]=React.useState(false)
    const {regno}=useParams()
    console.log(regno)
    React.useEffect(()=>{
        axios.get('http://localhost:5000/getdata/'+regno).then((res)=>{
            console.log(res.data)
            setresdata(res.data)
        })
        axios.get('http://localhost:5000/checkres').then((res)=>{
            setdec(res.data)
        })
    },[])
    return <div><div> <center><h1>EDUCOM EDUCATION AT UR FINGER TIP</h1></center><hr/></div>
    <div><center>
        <span><strong>Register Number :</strong> {resdata[0].regno}</span><br/>
        <span><strong>Name :</strong> {resdata[0].name}</span><br/>
        <span><strong>Department :</strong> {resdata[0].dept}</span><br/>
        <span><strong>Semester :</strong> {resdata[0].sem}</span><br/>
        <span><strong>Address :</strong>{resdata[0].address}</span><br/>
        <span><strong>Father Name :</strong> {resdata[0].fathername}</span><br/>
        <span><strong>Blood Group :</strong> {resdata[0].bloodgroup}</span><br/><hr/></center></div>
        <center>{dec ? <button onClick={(e)=>{
            e.preventDefault()
            navi('/result/'+regno)
        }}>Click to View Results</button> : <></> }
        <button onClick={(e)=>{
            e.preventDefault()
            navi('/internals/'+regno)
        }}>Click to View Internals</button>
        <button onClick={(e)=>{
            e.preventDefault()
            navi(-1)
        }}>Log-Out</button>
        </center>
        </div>
}