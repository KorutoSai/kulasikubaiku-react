import "bootstrap/dist/css/bootstrap.min.css";

import Crab from "../images/crab.gif";

function About() {
  return (
    <div>
      <div
        className="px-4 py-5  text-center"
        style={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="d-block mx-auto mb-4 intro-image intro"
          style={{ height: "300px", width: "300px", borderRadius: "100%" }}
          src={Crab}
          alt=""
          width="72"
          height="57"
        />
        <h1 className="display-5 fw-bold text-body-emphasis intro">
          Hi! I'm Kert Shriner!
        </h1>
        <div className="col-lg-6 mx-auto intro">
          <p className="lead mb-4 intro">
            An awesome Web Developer that will surely get things done! Hit me up
            if you want to start a project!
          </p>
          <p className="lead mb-4 intro">
            Press the button bellow to know more about me.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center intro">
            <button
              type="button"
              className="btn btn-warning text-dark btn-lg px-4 gap-3 intro"
            >
              {" "}
              <a
                href="https://kertshriner.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link text-dark"
              >
                To my Portfolio
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
