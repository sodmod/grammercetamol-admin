import {Outlet} from "react-router-dom";

import styles from "./courseRootLayout.module.css";

function CourseRootLayout(){
  return (
    <div className={styles.courseRoot}>
      <Outlet/>
    </div>
  );
}

export default CourseRootLayout;