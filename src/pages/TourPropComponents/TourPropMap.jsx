import "bootstrap/dist/css/bootstrap.min.css";

function TourPropMap(props) {
  return (
    <div>
      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading fw-normal lh-1">{props.mapRoute}</h2>
          <p class="lead">
            <h3>{props.whyLocation}</h3>

            {props.whyLocDesc}
            <br />
          </p>
        </div>
        <div class="col-md-5">
          <iframe
            class="index1"
            loading="lazy"
            src={props.embedLink}
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            referrerPolicy="no-referrer-when-downgrade"
            title="Responsive Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default TourPropMap;
