import axios from "axios";
import { useEffect, useState } from "react";
import editimg from "../images/edit.png";
import delimg from "../images/delete.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const [mydata, setMydata] = useState([]);
    const navigate = useNavigate();
    
    const loadData = () => {
        let api = "http://localhost:3000/employees";
        axios.get(api)
            .then((res) => {
                console.log(res.data);
                setMydata(res.data);
            })
            .catch((err) => console.error("Error loading data:", err));
    };

    useEffect(() => {
        loadData();
    }, []);

    const myRecDel = (id) => {
        let api = `http://localhost:3000/employees/${id}`;
        axios.delete(api)
            .then((res) => {
                message.success("Record deleted successfully!");
                loadData();
            })
            .catch((err) => {
                message.error("Failed to delete the record.");
                console.error("Error deleting record:", err);
            });
    };

    const myEdit = (id) => {
        navigate(`/editrec/${id}`);
    };

    const ans = mydata.map((key) => {
        return (
            <tr>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.contact}</td>
                <td>
                    <button onClick={() => myEdit(key.id)}>
                        <img src={editimg} alt="Edit" width="30" height="30" />
                    </button>
                    <button onClick={() => myRecDel(key.id)}>
                        <img src={delimg} alt="Delete" width="30" height="30" />
                    </button>
                </td>
            </tr>
        );
    });

    return (
        <table width="80%" border="2">
            <thead>
                <tr>
                    <th>Employee Number</th>
                    <th>Employee Name</th>
                    <th>Employee Email</th>
                    <th>Employee Contact Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </table>
    );
};

export default Update;
