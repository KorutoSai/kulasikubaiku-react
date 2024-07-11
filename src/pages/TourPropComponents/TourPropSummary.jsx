import "bootstrap/dist/css/bootstrap.min.css";

function TourPropSummary(props) {
  return (
    <div>
      <div class="row featurette my-5 py-5">
        <div class="container">
          <h2 class="featurette-heading fw-normal lh-1">
            {/* Trip Summary  */}
            {props.summary}
          </h2>
          <p class="lead">{props.summaryDesc}</p>
        </div>
      </div>
    </div>
  );
}

export default TourPropSummary;
