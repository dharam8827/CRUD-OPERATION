// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InsertData from "./pages/InsertData";
import Display from "./pages/Display";
import Search from "./pages/Search";
import Searchbyname from "./pages/SearchbyName";
import Update from "./pages/Update";


const App = () => {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="insert" element={<InsertData />} />
                        <Route path="display" element={<Display />} />
                        <Route path="search" element={<Search />} />
                        <Route path="searchbyname" element={<Searchbyname />} />
                        <Route path="update" element={<Update />} />


                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default App;
