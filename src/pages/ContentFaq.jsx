import "bootstrap/dist/css/bootstrap.min.css";

function ContentFaq() {
  return (
    <div>
      <div class="container py-5 my-5">
        <h2 class="featurette-heading fw-normal lh-1 pb-5">
          Frequently Asked Questions{" "}
        </h2>

        <ul class="lead">
          <li class="lead py-3">
            <b>What is this website?</b>
            <hr class="featurette-divider" />
            This is a page that talks about certain classic motorcycle brands
            and models as well as a guide for specific motorcycle touring
            destinations.
            <br />
            This is a "capstone" project that involves using the React famework.
          </li>

          <li class="lead py-3">
            <b>Do you plan to monetize this website?</b>
            <hr class="featurette-divider" />
            No, this is simply a test and demonstration of my skill in web
            development as of 11 July 2024.
            <br />
          </li>

          <li class="lead py-3">
            <b>What did you create in this website?</b>
            <hr class="featurette-divider" />
            React framework with the sue of HTML, CSS and Javascript languages
            also the use Bootstrap Templates, the contents such as pictures and
            descriptions can all be found on opensource materials in the
            internet.
          </li>

          <li class="lead py-3">
            <b>Who are you?</b>
            <hr class="featurette-divider" />
            I'm a programming student that made this project at of 11 July 2024,
            you can see my details in the about page.
            <br />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContentFaq;
