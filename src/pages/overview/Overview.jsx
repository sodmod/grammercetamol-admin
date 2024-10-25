import {Container} from "react-bootstrap";
import "./overview.css";

function Overview(){

  return (
    <Container fluid className={"overview rounded-3 d-flex flex-wrap p-1 p-sm-1 justify-content-around bg-white"}>
      <div className={"rounded-2 custom-responsive-width pb-2"}>
        <div className={"shadow rounded-3 p-md-4 w-100 h-100 mx-auto bg-white"}>
          <div className={"rounded-4 h-100"}>
            <div className={"mx-md-auto  text-center overview-size h-50" +
              " align-content-center"}
            >
              <div className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center" +
                " justify-content-center number mt-2"}>
                <p className={"text-black paragraph w-100"}>55</p>
              </div>
            </div>
            <p className="px-2 w-100 align-items-center text-black h-50 text-center pt-3 pt-md-5 fs-5 ">
              what
            </p>
          </div>
        </div>
      </div>
      <div className={"rounded-2 custom-responsive-width pb-2"}>
        <div className={"shadow rounded-3 p-md-4 w-100 h-100 mx-auto bg-white"}>
          <div className={"rounded-4 h-100"}>
            <div className={"mx-md-auto  text-center overview-size h-50" +
              " align-content-center"}
            >
              <div className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center" +
                " justify-content-center number mt-2"}>
                <p className={"text-black paragraph w-100"}>55</p>
              </div>
            </div>
            <p className="px-2 w-100 align-items-center text-black h-50 text-center pt-3 pt-md-5 fs-5 ">
              what
            </p>
          </div>
        </div>
      </div>
      <div className={"rounded-2 custom-responsive-width pb-2"}>
        <div className={"shadow rounded-3 p-md-4 w-100 h-100 mx-auto bg-white"}>
          <div className={"rounded-4 h-100"}>
            <div className={"mx-md-auto  text-center overview-size h-50" +
              " align-content-center"}
            >
              <div className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center" +
                " justify-content-center number mt-2"}>
                <p className={"text-black paragraph w-100"}>55</p>
              </div>
            </div>
            <p className="px-2 w-100 align-items-center text-black h-50 text-center pt-3 pt-md-5 fs-5 ">
              what
            </p>
          </div>
        </div>
      </div>
      <div className={"rounded-2 custom-responsive-width pb-2"}>
        <div className={"shadow rounded-3 p-md-4 w-100 h-100 mx-auto bg-white"}>
          <div className={"rounded-4 h-100"}>
            <div className={"mx-md-auto  text-center overview-size h-50" +
              " align-content-center"}
            >
              <div className={"shadow rounded-2 mx-auto h-100 d-flex align-items-center" +
                " justify-content-center number mt-2"}>
                <p className={"text-black paragraph w-100"}>55</p>
              </div>
            </div>
            <p className="px-2 w-100 align-items-center text-black h-50 text-center pt-3 pt-md-5 fs-5 ">
              what
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Overview;
