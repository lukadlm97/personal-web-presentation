import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'

import NotFound from './pages/notFound/notFound'
import App from './App'


function Navigator(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path='/'  element={<Home />}/>
            <Route path='/projects' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}



  export default Navigator;