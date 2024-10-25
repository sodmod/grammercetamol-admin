import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import "./course root container.css";

function CoursePage(){
  return (
    <Container fluid className="bg-dark course-root-container p-0 m-0">
      <Outlet/>
    </Container>
  );
}

export default CoursePage;
