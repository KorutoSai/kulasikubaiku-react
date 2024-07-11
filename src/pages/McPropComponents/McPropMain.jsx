import "bootstrap/dist/css/bootstrap.min.css";

function McPropMain(props) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={props.img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            {props.brandName}
          </h1>
          <p className="lead">{props.brandDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default McPropMain;
