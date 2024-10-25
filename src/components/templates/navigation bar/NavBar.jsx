import {useState} from "react";
import {NavLink} from "react-router-dom";
import {CgProfile} from "react-icons/cg";

import {getCookie} from "../../../store/storage";
import {navbarContent, routePath} from "../../../utils/constants";

import UL from "../../ui/Lists/Ulist";
import Icons from "../../ui/Icons/Icons";
import Lists from "../../ui/Lists/Lists";

import styles from "./NavBar.module.css";


const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((previous) => !previous);
  };

  const isClicked = clicked
    ? `${styles.navmenu} ${styles.active}`
    : `${styles.navmenu}`;

  let isLoggedIn = false;

  if(getCookie("*") && getCookie("*").length > 0) {
    isLoggedIn = true;
  }

  const icons = clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  return (
    <nav className={styles.navitems}>
      <div className={styles.logo}>
        <NavLink to={routePath.landpage}>

        </NavLink>
      </div>
      <div className={styles.hambuger} onClick={handleClick}>
        <Icons icons={icons}/>
      </div>
      <UL className={isClicked}>
        {navbarContent.map((navbar, key) => (
          <Lists key={key}>
            <NavLink
              onClick={handleClick}
              to={navbar.dir}
              className={({isActive}) => (isActive ? styles.active : undefined)}
              end
            >
              {navbar.dirName}
            </NavLink>
          </Lists>
        ))}
        <Lists>
          {!isLoggedIn ? (
            <NavLink
              to={routePath.auth.login}
              className={({isActive}) =>
                isActive ? styles.active : undefined
              }
              end
            >
              Sign In
            </NavLink>
          ) : (
            <NavLink to={routePath.auth.login}>
              {/* <Button className={styles.btn}>My ProfileRoot</Button>
               */}
              <div
                onClick={handleClick}
                className=""
                style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CgProfile/>
              </div>
            </NavLink>
          )}
        </Lists>
      </UL>
    </nav>
  );
};

export default NavBar;
