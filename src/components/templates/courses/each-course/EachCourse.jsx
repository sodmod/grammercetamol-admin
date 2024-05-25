import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

import Img from "../../../ui/Images/coursesImg/Course1.png";

import styles from "./eachcourse.module.css";


const EachCourse = ({course, to}) => {
  const {courseId, lesson, courseTitle} = course;

  return (
    <NavLink
      className={styles.each}
      to={`${to}${courseId}`}
    >
      <div className={styles.grid_item}>
        <div
          className={styles.each_course_image}
          style={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "inherit",
            height: "200px",
            position: "relative",
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div className={styles.eachcourse_container_info}>
          <div className={styles.each_course_title}>{courseTitle}</div>
          <div className={styles.info_details} style={{fontSize: "25px"}}>
            <p className={styles.course_stack}> {lesson} Lessons</p>
            {/* <p className={styles.course_time}>2hrs 45min</p> */}
          </div>
        </div>
      </div>
    </NavLink>
  );
};

EachCourse.propTypes = {
  course: PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    lesson: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
};

export default EachCourse;