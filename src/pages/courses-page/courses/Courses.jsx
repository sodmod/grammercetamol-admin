import ViewCourses from "../../../components/templates/courses/all-course/ViewCourses.jsx";
import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";

const Courses = ()=>{

  const {data, loading} = useFetchData(endpoints.courses.courses);
  return <ViewCourses data={data} loading={loading}/>
}

export default Courses;
