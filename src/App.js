import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Todo from "../src/Pages/Todo";
import Home from "../src/Pages/Home";
import PaginationPage from "../src/Pages/Pagination";
import SearchPage from "../src/Pages/Search";


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
            <li>
              <Link to='/pagination'>Pagination</Link>
            </li>
            <li>
              <Link to='/search'>Search</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/pagination' element={<PaginationPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
