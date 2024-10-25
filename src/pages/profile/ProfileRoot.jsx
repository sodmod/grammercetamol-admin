import {useState} from "react";
import {NavLink, Outlet} from "react-router-dom";
import UL from "../../components/ui/Lists/Ulist.jsx";
import {profileContent} from "../../utils/constants.js";
import Lists from "../../components/ui/Lists/Lists.jsx";
import Icons from "../../components/ui/Icons/Icons.jsx";

import styles from "./profileRoot.module.css";

const ProfileRoot = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  const isClicked = clicked
    ? `${styles["profile-nav-content"]} ${styles.active}`
    : `${styles["profile-nav-content"]}`;

  const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";

  return <section className={styles["profile-section"]}>
    <div className={styles["profile-hambuger"]} onClick={handleClick}>
      <Icons icons={icons}/>
    </div>
    <div className={styles["profile-side-nav"]}>
      <UL className={isClicked}>
        {profileContent.map((profile, key) =>
          <Lists key={key} className={styles["profile-nav-content-list"]}>
            <NavLink
              to={profile.to}>
              {profile.dir}
            </NavLink>
          </Lists>
        )}
      </UL>
    </div>
    <div className={styles["profile-outlet"]}>
      <Outlet/>
    </div>
  </section>


};

export default ProfileRoot;
