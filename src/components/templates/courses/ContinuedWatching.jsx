import useFetchData from "../../../hooks/useFetchData.js";
import {endpoints} from "../../../store/endpoints.js";
import {Spinner2} from "../spinner/Spinner.jsx";
import styles from "./courses.module.css";
import EachCourse from "./each-course/EachCourse.jsx";
import {routePath} from "../../../utils/constants.js";

const ContinuedWatching = () => {

  const {data: allCourse, loading: isAllCourseLoading} = useFetchData(endpoints.courses.courses);

  return <div className="text-center">
    {isAllCourseLoading ? (
      <Spinner2/>
    ) : Array.isArray(allCourse) && allCourse.length > 0 ? (
      <div className={styles.grid_container}>
        {allCourse.map((course, key) => (
          <EachCourse key={key} course={course} to={routePath.course.view} buttonText="Continue Watching"/>
        ))}
      </div>
    ) : (
      "No courses available"
    )}
  </div>
};

export default ContinuedWatching;
