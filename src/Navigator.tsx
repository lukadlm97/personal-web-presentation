import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import NotFound from './pages/notFound/notFound'
import ExpirienceTimeline from './pages/expirience/Expirience'
import Biography from './pages/biography/Biography'


function Navigator(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path='/'  element={<Home />}/>
            <Route path='/projects' element={<Projects />} />
            <Route path='/expirience' element={<ExpirienceTimeline />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}



  export default Navigator;