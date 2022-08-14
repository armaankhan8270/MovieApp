import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import Search from './Components/Search';
import SingleMovie from './Components/SingleMovie';
import UseFetch from './Components/UseFetch';
import { Error } from '@material-ui/icons';
import { AppProvider } from './Components/Context';
import Movie from './Components/Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      {/* <Navbar/> */}
      <AppProvider>
    <Routes>
    <Route path="/" element={(<App />)} />
    <Route path="/Home" element={(<Home />)} />
    <Route path="/Search" element={(<Search />)} />
    <Route path="/Movie/Movie/:id" element={(<SingleMovie />)} />
    <Route path="Movise/:id" element={(<Home/>)}/>
    <Route path="/UseFetch" element={(<UseFetch />)} />
    <Route path="/Movie" element={(<Movie />)} />
    {/* <Route path="/a" element={(<Error />)} /> */}
    </Routes>
    </AppProvider>
    </BrowserRouter>
);

 