import TrendingTechnology from '../extra/TrendingTechnology';
import CourseHome from '../extra/CourseHome';
import RoadmapHome from '../extra/RoadmapHome';
import Posts from '../extra/Posts';



function Abouts() {
    return (
        <div className='abouts'>
            <TrendingTechnology />
            <CourseHome />
            <RoadmapHome />
            <Posts />
        </div>
    );
}

export default Abouts;