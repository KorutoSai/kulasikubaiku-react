import "bootstrap/dist/css/bootstrap.min.css";

function TourPropMain(props) {
  return (
    <div>
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={props.img}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-5">
              {props.title}
            </h1>
            <p class="lead">{props.titleDescription}</p>
            <p class="lead">{props.titleDescription2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourPropMain;
