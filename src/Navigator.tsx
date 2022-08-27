import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import App from './App'


function Navigator(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route index element={<App />}/>
            <Route path='/projects' element={<Projects />} />
        </Routes>
    )
}



  export default Navigator;