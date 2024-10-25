import {routePath} from "../../../../utils/constants";

import {Spinner2} from "../../spinner/Spinner";
import EachCourse from "../each-course/EachCourse";

import styles from "../courses.module.css";
import PropTypes from "prop-types";

const ViewCourses = ({data, loading}) => {
  return <div className="text-center">
    {loading ? (
      <Spinner2/>
    ) : Array.isArray(data) && data.length > 0 ? (
      <div className={styles.grid_container}>
        {data.map((course, key) => (
          <EachCourse key={key} course={course} to={`/${routePath.course.courses}/view/`} buttonText="View Course"/>
        ))}
      </div>
    ) : (
      "No courses available"
    )}
  </div>
};

export default ViewCourses;

ViewCourses.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}
