import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TodoList from "../src/components/TodoList";
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
        <Route path='/todo' element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
