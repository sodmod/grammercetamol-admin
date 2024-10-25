import ViewCourses from "../../../components/templates/courses/all-course/ViewCourses.jsx";
import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";

const Whitelisted = () => {
  const {data, loading} = useFetchData(endpoints.courses.whitelisted);

  return < ViewCourses data={data} loading={loading}/>
};

export default Whitelisted;
