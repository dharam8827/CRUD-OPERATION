import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{
    const [empdata,setEmpdata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/employees";
        axios.get(url).then((res)=>{
            console.log(res.data);
            setEmpdata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=empdata.map((key)=>{
        return(
            <>
            <tr>
                <td> {key.empno} </td>
                <td> {key.name} </td>
                <td> {key.email} </td>
                <td> {key.contact} </td>
            </tr>
            </>
        )
    })
    
    return(
        <>
        <h1>Display</h1>
        <table width="90%" border="2">
            <tr>
                <th>Employee number </th>
                <th>Employee name </th>
                <th>Employee email </th>
                <th>Employee contact </th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;