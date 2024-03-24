import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Todo from "../src/Pages/Todo";
import Home from "../src/Pages/Home";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/todo'>Todo</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
