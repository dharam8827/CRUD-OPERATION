import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const EditData=()=>{
    const {myid}=useParams();
    const [mydata, setMydata]=useState({});// myData{}
    const loadData=()=>{
        let api=`http://localhost:3000/employees${myid}`;
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })

    }
    useEffect(()=>{
        loadData();
    },[]);
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setMydata(values=>({...values, [name]:value}))
        console.log(mydata);
    }
    const handleSubmit=(e)=>{

        e.preventDefault();
        let api=`http://localhost:3000/employees${myid}`;
        axios.put
    }
    return(
        <>
        
        </>
    )
}

export default EditData;
