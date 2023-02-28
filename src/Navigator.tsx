import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects'
import NotFound from './pages/notFound/notFound'
import ExperienceTimeline from './pages/expirience/Experience'
import Biography from './pages/biography/Biography'
import Recommendation from './pages/recommendations/Recommendation'


function Navigator(){
    return(
        <Routes>
            <Route path="/home" element={<Home />}/>
            <Route path='/'  element={<Home />}/>
            <Route path='/projects' element={<Projects />} />
            <Route path='/expirience' element={<ExperienceTimeline />} />
            <Route path='/biography' element={<Biography />} />
            <Route path='/recommendations' element={<Recommendation />} />
            <Route path='/hobbies' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}



  export default Navigator;