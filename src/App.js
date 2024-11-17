import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from "./pages/home/home.jsx";
import SingleTour from './pages/tour/single_tour.jsx';
import About from "./pages/about/about.jsx";
import Login from "./pages/forms/login.jsx";
import Register from "./pages/forms/register.jsx";



function App() {


  // Pagination Algo.

    return (
    <BrowserRouter>
        <Header/>

        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/tour/:id" element={<SingleTour/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>


        </Routes>

        <Footer/>
    </BrowserRouter>
  );
}

export default App;
