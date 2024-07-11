import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
// import images
import Triumph from "../../images/mc.png";
import Superior from "../../images/ss100.png";
import Fuji from "../../images/Fuji.png";

function CarouselContent() {
  return (
    <>
      <div className="carousel slide mb-6">
        <Carousel>
          <Carousel.Item className="bg-secondary" interval={1500}>
            <img
              style={{ height: "500px" }}
              class="d-block mx-auto mb-4 opacity-75"
              src={Triumph}
              alt="pic"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />

            <Carousel.Caption className="carousel-caption text-start">
              <h1>Triumph Thruxton.</h1>
              <p class="opacity-75">
                Check out Triumph's flagship bike, the Thruxton
              </p>
              <p>
                <NavLink className="btn btn-lg btn-primary" to="/triumph">
                  Go to Triumph
                </NavLink>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="bg-secondary" interval={500}>
            <img
              style={{ height: "500px" }}
              class="d-block mx-auto mb-4 opacity-75"
              src={Superior}
              alt="pic"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />

            <Carousel.Caption className="carousel-caption">
              <h1>Brough Superior SS 100</h1>
              <p>A legendary classic, ridden by Laurence of Arabia.</p>
              <p>
                <NavLink className="btn btn-lg btn-primary" to="/superior">
                  Brough Superior
                </NavLink>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="bg-secondary" interval={500}>
            <img
              style={{ height: "500px" }}
              class="d-block mx-auto mb-4 opacity-75"
              src={Fuji}
              alt="pic"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            />

            <Carousel.Caption className="carousel-caption text-end">
              <h1>Mount Fuji Tour.</h1>
              <p>Explore Japan's symbol, Mount Fuji in two wheels.</p>
              <p>
                <NavLink className="btn btn-lg btn-primary" to="/tourFuji">
                  Go to Mount Fuji Tour
                </NavLink>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselContent;
