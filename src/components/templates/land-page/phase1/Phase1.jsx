import {useEffect, useState} from "react";
import Button from "../../../ui/Button/Button";
import {Microphone} from "../../../ui/constants";

import styles from "./Phase1.module.css";

const Phase1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Add a resize event listener to update the window width when the screen size changes
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define your breakpoint (screen width) where the div should disappear
  const breakpoint700 = 700; // Adjust this value to your desired screen width
  const breakpoint641 = 641; // Adjust this value to your desired screen width

  return (
    <>
      <div className={styles.clinic}>
        <div className={styles.clinic__}>
          <div className={styles.grammercetamol_clinic}>
            <h2>THE GRAMMCETAMOL CLINIC</h2>
          </div>
          {windowWidth <= breakpoint700 && windowWidth > breakpoint641 ? (
            <div className={styles.explain}>
              <p>
                SPEAK <span id="span">ENGLISH</span> MORE NATURALLY WITH CONFIDENCE AND
                STUNNING <span id="span">DICTION</span>
              </p>
            </div>
          ) : (
            <div className={styles.explain}>
              {windowWidth <= breakpoint641 ? (
                <p>
                  SPEAK <span id="span">ENGLISH</span> MORE<br/> NATURALLY WITH
                  <br/> CONFIDENCE AND<br/>STUNNING <span id="span">DICTION</span>
                </p>
              ) : (
                <p>
                  SPEAK <span id="span">ENGLISH</span> MORE NATURALLY WITH <br/>
                  CONFIDENCE AND STUNNING <span id="span">DICTION</span>
                </p>
              )}
            </div>
          )}
          <div className={styles.title_text_container}>
            {windowWidth <= breakpoint700 && windowWidth > breakpoint641 ? (
              <p className={styles.title_text_container_p}>
                Discover the Secrets to fat fluency,boost your word power and
                improve your pronunciation
              </p>
            ) : (


              <>
                {windowWidth <= breakpoint641 ? <p className={styles.title_text_container_p}>
                    Discover the Secrets to fat fluency,boost your word power
                    <br></br>
                    and improve your pronunciation
                  </p> :
                  <p className={styles.title_text_container_p}>Discover the Secrets to fat fluency,boost your word power<br></br>
                    and improve your pronunciation
                  </p>}
              </>

            )}
          </div>
          <Button className={styles.button}>Get Started</Button>
        </div>
        <img className={styles.image} src={Microphone} alt=""></img>
        {/* <div className={styles.microphone}>
          
        </div> */}
      </div>
    </>
  );
};

export default Phase1;