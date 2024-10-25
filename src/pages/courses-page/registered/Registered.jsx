import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import ViewCourses from "../../../components/templates/courses/all-course/ViewCourses.jsx";

function Registered (){

  const {data, loading} = useFetchData(endpoints.courses.registered);
  console.log("Registered")
  return <>
    <ViewCourses data={data} loading={loading}/>
  </>
}

export default Registered;
