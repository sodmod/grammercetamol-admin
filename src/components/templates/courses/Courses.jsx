import AllCourse from "./all-course/AllCourse";

import styles from "./courses.module.css";

// Displays all courses including the available course and registered course
const Courses = () => {
  return (
    <div className={styles.courses}>
      <AllCourse/>
    </div>
  );
};

export default Courses;