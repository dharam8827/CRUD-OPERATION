import axios from "axios";
import { useState } from "react";

const Search = () => {
    const [eno, setEno] = useState("");
    const [mydata, setMydata] = useState([]);
    const [noResults, setNoResults] = useState(false); // State for no results feedback

    const handleSubmit = () => {
        if (!eno.trim()) {
            alert("Please enter an Employee Number.");
            return;
        }

        let api = `http://localhost:3000/employees/?eno=${eno}`;
        axios.get(api)
            .then((res) => {
                setMydata(res.data);
                setNoResults(res.data.length === 0); // Set no results state if empty
                console.log(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    };

    const ans = mydata.map((key) => (
        <div key={key.id}>
            <h1>Employee Number: {key.empno}</h1>
            <h2>Employee Name: {key.name}</h2>
            <h2>Employee Email: {key.email}</h2>
            <h2>Employee Contact No: {key.contact}</h2>
        </div>
    ));

    return (
        <div>
            <label>Enter Employee No:</label>
            <input
                type="text"
                value={eno}
                onChange={(e) => setEno(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
            <hr size="5" color="green" />
            {noResults && <p>No results found for this Employee Number.</p>}
            {ans}
        </div>
    );
};

export default Search;
