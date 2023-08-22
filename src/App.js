import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='React-News-App' element={<News country = "us" category = "general"/>}/>
        <Route path='React-News-App/Sports' element={<News country = "us" category = "sports"/>}/>
        <Route path='React-News-App/Technology' element={<News country = "us" category = "technology"/>}/>
        <Route path='React-News-App/Science' element={<News country = "us" category = "science"/>}/>
        <Route path='React-News-App/Health' element={<News country = "us" category = "health"/>}/>
        <Route path='React-News-App/Entertainment' element={<News country = "us" category = "entertainment"/>}/>
        <Route path='React-News-App/Business' element={<News country = "us" category = "business"/>}/>
      </Routes>
      
    </>
  );
}

export default App;
