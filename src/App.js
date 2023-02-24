import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Course from './components/pages/Courses';
import Dashboards from './components/pages/Dashboards';
import HomePage from './components/pages/HomePage';
import StudyRoute from './components/pages/StudyRoutes';


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/roadmap-list' element={<StudyRoute/>}/>
      <Route path='/course-list' element={<Course/>}/>
      <Route path='/dashboard' element={<Dashboards/>}/>
    </Routes>  
    
  );
}

export default App;
