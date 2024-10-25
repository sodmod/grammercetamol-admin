import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

import Img from "../../../ui/Images/coursesImg/Course1.png";
import {Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Icons from "../../../ui/Icons/Icons.jsx";


const EachCourse = ({course, to, buttonText}) => {
  const {courseId, lesson, courseTitle} = course;

  return (
    <Card className="bg-dark shadow">
      <Card.Img variant="top" src={Img}/>
      <Card.Body className="">
        <Card.Title>{courseTitle}</Card.Title>
        <Row className="pb-5">
          <Col>
            <span className="pe-1">
              <Icons icons="fa-solid fa-layer-group"/>
            </span>
            {`${lesson} Lessons`}
          </Col>
          <Col>
            <span className="pe-1">
              <Icons icons="fa-solid fa-clock"/>
            </span>
            Time interface
          </Col>
        </Row>
        <NavLink to={`${to}${courseId}`} className="text-decoration-none">
          <Button variant="danger">{buttonText}</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

EachCourse.propTypes = {
  course: PropTypes.shape({
    courseId: PropTypes.string.isRequired,
    lesson: PropTypes.number.isRequired,
    courseTitle: PropTypes.string.isRequired,
  }).isRequired,
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default EachCourse;
