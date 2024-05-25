import React, {useState} from "react";

import {useParams} from "react-router-dom";
import useMutate from "../../hooks/useMutate";
import useFetchData from "../../hooks/useFetchData";

import {Card} from "antd";
import {HeartOutlined} from "@ant-design/icons";
import {endpoints} from "../../store/endpoints";

import UL from "../../components/ui/Lists/Ulist";
import Lists from "../../components/ui/Lists/Lists";
import Button from "../../components/ui/Button/Button";
import {Spinner} from "../../components/template/spinner/Spinner";
import Img from "../../components/ui/Images/coursesImg/Course1.png";

import styles from "./course-details.module.css";
import Modal from "../../components/modals/Modal";
import Purchase from "../../components/modals/buy-course/Purchase";
import {createPortal} from "react-dom";
import {overLay} from "../../utils/constants";

const {Meta} = Card;


const CourseDetails = () => {
  const [showModal, setShowModal] = useState(false);

  const {courseId} = useParams();
  const apiGetCourseDetail = endpoints.courses.courses
  const whitelist = `${endpoints.courses.whiteList}/${courseId}`;

  const {data, loading} = useFetchData(`${apiGetCourseDetail}/${courseId}`)


  const {onCall: whiteListAction} = useMutate({postUrl: whitelist, formMethod: "POST"});


  if(!data || loading) {
    return <Spinner/>
  }
  const displayModal = () => {
    setShowModal((show) => !show);
  }

  return (
    <>
      {
        showModal && createPortal(
          <Modal>
            <Purchase courseId={courseId} amount={data.priceDTO} onClose={displayModal}
                      courseName={data.courseName}/>
          </Modal>, overLay)
      }
      <section className={styles["course-details-section"]}>
        <div className={styles["course-details-wrap"]}>
          <div className={styles["course-details"]}>
            <Card
              className={styles["course-details-1"]}
              cover={<img src={Img ? Img : ""} alt=""/>}
            >
              <div className={styles["white-list"]}>
                <Button>Add to my whitelists</Button>
                <Button onClick={whiteListAction}>
                  <HeartOutlined/>
                </Button>
              </div>
              <div className={styles["buy-now"]} onClick={displayModal}>
                <Button>Buy Now</Button>
              </div>
              <Meta
                title={data.courseName}
                description="Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "
              />
            </Card>
            <div className={styles["course-details-2"]}>
              <div className={styles["contents"]}>
                <h3>Table of Content</h3>
                <div className={styles["content-lists"]}>
                  <UL>
                    {data.videoIds.map((course, key) => (
                      <Lists key={key}>{course.fileIds}</Lists>
                    ))}
                  </UL>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>

  );
};

export default CourseDetails;