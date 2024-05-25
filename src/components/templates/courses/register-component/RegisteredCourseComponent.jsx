import {Spinner2} from "../../spinner/Spinner";
import EachCourse from "../each-course/EachCourse";

import useFetchData from "../../../../hooks/useFetchData";

import {routePath} from "../../../../utils/constants";
import {endpoints} from "../../../../store/endpoints";

import styles from "../courses.module.css";

// Display users registered course
const RegisteredCourseComponent = () => {

  const {
    data: registeredCourses,
    loading: isRegisteredCourseLoading
  } = useFetchData(endpoints.courses.registered);

  return <div>
    <h2>My Courses</h2>
    {isRegisteredCourseLoading ? <Spinner2/> : <div className={styles.grid_container}>
      {Array.isArray(registeredCourses) && registeredCourses.map((course) => (
        <EachCourse key={course.courseId} course={course} to={routePath.course["watch-course"]}/>
      ))}
    </div>}
  </div>

};

export default RegisteredCourseComponent;