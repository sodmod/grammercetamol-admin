import {Outlet} from "react-router-dom";
import NavBar from "../components/templates/navbar/NavBar.jsx";

import styles from "./land-page/LandPage.module.css";


const Root = () => {
  return (
    <div className={styles.LandPage_components}>
      <NavBar/>
      <Outlet/>
    </div>
  );
};
export default Root;