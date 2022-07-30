import TopBar from "./components/TopBar/TopBar";
import Home from "./Pages/Home";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single.jsx";
import Write from "./Pages/write/Write";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
    const currentUser = false;
    return (
        <Router>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/Home" element={<Home />}></Route>
                <Route exact path="/Settings" element={<Settings />}></Route>
                <Route path="/posts" element={<Home />}></Route>
                <Route
                    path="/register"
                    element={currentUser ? <Home /> : <Register />}
                ></Route>
                <Route
                    path="/login"
                    element={currentUser ? <Home /> : <Login />}
                ></Route>
                <Route path="/post/:id" element={<Single />}></Route>
                <Route
                    path="/write"
                    element={currentUser ? <Write /> : <Login />}
                ></Route>
                <Route
                    path="/settings"
                    element={currentUser ? <Settings /> : <Login />}
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
