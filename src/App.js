import "./App.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Todo from "../src/Pages/Todo";
import Home from "../src/Pages/Home";
import PaginationPage from "../src/Pages/Pagination";
import SearchPage from "../src/Pages/Search";
import AccordionPage from "../src/Pages/Accordion";
import CarouselPage from "../src/Pages/Carousel";
import ProgressBarPage from "../src/Pages/ProgressBar";
import HooksPage from "../src/Pages/Hooks";
import LazyLoadPostsPage from "../src/Pages/LazyLoadPosts";
import Cart from "../src/Pages/Cart";
import Scroll from "../src/Pages/InfiniteScroll";
import Throttle from "../src/Pages/Debounce/Throttle";
import AutoComplete from "../src/Pages/AutoComplete";

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
            <li>
              <Link to='/accordion'>Accordion</Link>
            </li>
            <li>
              <Link to='/carousel'>Carousel</Link>
            </li>
            <li>
              <Link to='/progress'>Progress</Link>
            </li>
            <li>
              <Link to='/hooks'>Hooks</Link>
            </li>
            <li>
              <Link to='/lazy'>Lazy-Load-Posts</Link>
            </li>
            <li>
              <Link to='/cart'>Add to Cart</Link>
            </li>
            <li>
              <Link to='/scroll'>Infinite Scroll</Link>
            </li>
            <li>
              <Link to='/throttle'>Throttle</Link>
            </li>
            <li>
              <Link to='/autocomplete'>AutoComplete</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/pagination' element={<PaginationPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/accordion' element={<AccordionPage />} />
        <Route path='/carousel' element={<CarouselPage />} />
        <Route path='/progress' element={<ProgressBarPage />} />
        <Route path='/hooks' element={<HooksPage />} />
        <Route path='/lazy' element={<LazyLoadPostsPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/scroll' element={<Scroll />} />
        <Route path='/throttle' element={<Throttle />} />
        <Route path='/autocomplete' element={<AutoComplete />} />
      </Routes>
    </div>
  );
}

export default App;
