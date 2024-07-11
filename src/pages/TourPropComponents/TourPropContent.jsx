import "bootstrap/dist/css/bootstrap.min.css";

function TourPropContent(props) {
  return (
    <div>
      <div class="row featurette my-5 py-5">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading fw-normal lh-1">
            {props.locName},
            <a
              href={props.embedLoc}
              target="_blank"
              rel="noopener noreferrer"
              class="text-body-secondary text-decoration-none"
            >
              It is Located Here
            </a>
          </h2>

          <p class="lead">{props.embedLocDesc}</p>

          <h3 class="featurette-heading fw-normal lh-1">
            {props.locSpMention}
          </h3>

          <p class="lead">{props.locSpMentionDesc}</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            src={props.locImg}
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
export default TourPropContent;
