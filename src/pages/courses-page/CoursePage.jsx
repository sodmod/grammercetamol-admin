import Courses from "../../components/templates/courses/Courses";

import styles from "./coursepage.module.css";

const CoursesPage = () => {
  return (
    <section className={styles.section}>
      <Courses/>
    </section>
  );
};
export default CoursesPage;