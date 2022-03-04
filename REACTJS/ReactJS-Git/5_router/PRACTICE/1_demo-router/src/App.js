import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Contract from "./components/Contract";
import Home from "./components/Home";
 
function App() {
    return (
        <BrowserRouter>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contract">Contract</Link>
                    </li>
                </ul>
 
                <hr />
                <div className="main-route-place">            
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contract" component={Contract} />
                
            </Routes>
            </div>
            </div>
        </BrowserRouter>
    );
}
export default App;