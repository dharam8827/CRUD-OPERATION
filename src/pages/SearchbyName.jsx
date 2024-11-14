import axios from "axios";
import { useState, useEffect } from "react";

const SearchByName = () => {
    const [ename, setEname] = useState("");
    const [mydata, setMydata] = useState([]);

    useEffect(() => {
        let api = `http://localhost:3000/employees`;
        axios.get(api)
            .then((res) => {
                setMydata(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    }, []);

    const handleChange = (e) => {
        setEname(e.target.value);
    };

    const filteredData = mydata.filter((key) => key.name.toLowerCase().includes(ename.toLowerCase()));

    const ans = filteredData.map((key) => (
        <tr key={key.empno}>
            <td>{key.empno}</td>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.contact}</td>
        </tr>
    ));

    return (
        <>
            <h1>Search Employee by Name</h1>
            <label>Type Employee Name:</label>
            <input
                type="text"
                value={ename}
                onChange={handleChange}
            />
            <hr size="5" color="blue" />
            <table>
                <thead>
                    <tr>
                        <th>Emp No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {ans.length > 0 ? ans : (
                        <tr>
                            <td colSpan="4">No results found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default SearchByName;
