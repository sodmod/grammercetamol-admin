import {Col, Container, Navbar, Row} from "react-bootstrap";
import "./dashboard.css";
import {Outlet} from "react-router-dom";
import SideBar from "../../components/templates/navigation bar/sidebar/Sidebar.jsx";
import {useState} from "react";

const Dashboard = () => {

  const [showFullSideBar, setShowFullSideBar] = useState(false);

  function onClick(){
    setShowFullSideBar((prevState) => !prevState);
  }

  return (
    <>
      <Container fluid={true} className="min-vh-100 max-vw-100 vh-100 dashboard">
        <Row className="h-100 p-0">
          <SideBar showFullSideBar={showFullSideBar} setShowFullSideBar={onClick}/>
          {/* Main content area */}
          <Col xs={12} sm={showFullSideBar ? 9 : 10} className="px-sm-1 vh-100 h-100 m-0 px-sm-1 px-0 bg-dark">
            <Navbar className="dashboard-top-nav d-none d-sm-block">
              <Container className="p-0 px-sm-1">
                <Navbar.Brand href="#home" className="nav-brand">
                  <Navbar.Text className="d-none d-sm-inline-block">
                    Dear Users name
                  </Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle/>
                {/*todo: image of the user to be implemented later*/}
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <Outlet/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
