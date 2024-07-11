import "bootstrap/dist/css/bootstrap.min.css";

function McPropContentImg(props) {
  return (
    <>
      <hr className="featurette-divider" />

      <div className="row featurette">
        {/* <div className="col-md-7"> */}
        <div className={props.isRight ? "col-md-7" : "col-md-7 order-md-2"}>
          <h2 className="featurette-heading fw-normal lh-1">
            {props.mcName},
            <a
              href={props.pageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-secondary text-decoration-none"
            >
              See it here
            </a>
          </h2>
          <p className="lead">{props.mcDescription}</p>
        </div>
        {/* <div className="col-md-5"> */}
        <div className={props.isRight ? "col-md-5" : "col-md-5 order-md-1"}>
          <img
            src={props.img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}

export default McPropContentImg;
