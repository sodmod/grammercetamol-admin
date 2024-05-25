import EachCourse from "../each-course/EachCourse";
import {Spinner2} from "../../spinner/Spinner";

import useFetchData from "../../../../hooks/useFetchData";

import {endpoints} from "../../../../store/endpoints";
import {routePath} from "../../../../utils/constants";

import styles from "../courses.module.css";
import PropTypes from "prop-types";

// This component displays all available courses to users
const AllCourse = () => {

  const {data: allCourse, loading: isAllCourseLoading} = useFetchData(endpoints.courses.courses);

  return <div>
    <h2>Explore Courses</h2>
    {isAllCourseLoading ? <Spinner2/> : <div className={styles.grid_container}>
      {Array.isArray(allCourse) && allCourse.map((course, key) => (
        <EachCourse key={key} course={course} to={routePath.course.view}/>))}
    </div>}
  </div>
};

AllCourse.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    lesson: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
  })), loading: PropTypes.bool.isRequired,
};

export default AllCourse;