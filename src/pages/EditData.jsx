import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { message } from "antd"; // Assuming you're using antd for messages

const EditData = () => {
    const { myid } = useParams();
    const [mydata, setMydata] = useState({
        empno: "",
        name: "",
        email: "",
        contact: ""
    });

    const loadData = () => {
        let api = `http://localhost:3000/employees/${myid}`;
        axios.get(api)
            .then((res) => {
                console.log(res.data);
                setMydata(res.data);
            })
            .catch((err) => {
                console.error("Error loading data:", err);
            });
    };

    useEffect(() => {
        loadData();
    }, [myid]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setMydata((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let api = `http://localhost:3000/employees/${myid}`;
        axios.put(api, mydata)
            .then((res) => {
                message.success("Data successfully updated!");
                setMydata({
                    empno: "",
                    name: "",
                    email: "",
                    contact: ""
                });
            })
            .catch((err) => {
                message.error("Failed to update data.");
                console.error("Error updating data:", err);
            });
    };

    return (
        <>
            <h1>Edit Employee Data</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Edit Employee No:
                    <input
                        type="text"
                        name="empno"
                        value={mydata.empno}
                        onChange={handleInput}
                    />
                </label>
                <br /><br />

                <label>
                    Edit Name:
                    <input
                        type="text"
                        name="name"
                        value={mydata.name}
                        onChange={handleInput}
                    />
                </label>
                <br /><br />

                <label>
                    Edit Email:
                    <input
                        type="text"
                        name="email"
                        value={mydata.email}
                        onChange={handleInput}
                    />
                </label>
                <br /><br />

                <label>
                    Edit Contact No:
                    <input
                        type="text"
                        name="contact"
                        value={mydata.contact}
                        onChange={handleInput}
                    />
                </label>
                <br /><br />

                <button type="submit">Update</button>
            </form>
        </>
    );
};

export default EditData;
