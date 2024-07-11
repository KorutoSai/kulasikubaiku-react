import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//images
import KawasakiLogo from "../../images/kawasaki.png";
import RoyalenfielLogo from "../../images/royalenfield.png";
import YamahaLogo from "../../images/yamaha.png";
import YamahaSr400 from "../../images/yamahaSR400.png";
import EnfieldS411 from "../../images/enfieldS411.png";
import KawasakiW800 from "../../images/kawasakiW800.png";

function MarketingContent() {
  return (
    <div>
      <div className="container marketing py-5 my-3">
        <div className="row">
          <div className="col-lg-4">
            <img
              style={{ height: "130px", width: "130px", borderRadius: "130px" }}
              class="d-block mx-auto mb-4"
              src={KawasakiLogo}
              alt="pic"
            />
            <title></title>
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>

            <h2 className="fw-normal">Kawasaki</h2>
            <p>
              One of the Big four motorcycle manufacturers, the company produces
              some classic style motorcycles.
            </p>
            <p>
              <NavLink className="btn btn-secondary" to="/kawasaki">
                View details »
              </NavLink>
            </p>
          </div>

          {/* <!-- /.col-lg-4 --> */}

          <div className="col-lg-4">
            <img
              style={{ height: "130px", width: "130px", borderRadius: "130px" }}
              class="d-block mx-auto mb-4"
              src={RoyalenfielLogo}
              alt="pic"
            />
            <title></title>
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>

            <h2 className="fw-normal">Royal Enfield</h2>
            <p>The oldest motorcycle brand still in operation.</p>
            <p>
              <NavLink className="btn btn-secondary" to="/enfield">
                View details »
              </NavLink>
            </p>
          </div>

          {/* <!-- /.col-lg-4 --> */}

          <div class="col-lg-4">
            <img
              style={{ height: "130px", width: "130px", borderRadius: "130px" }}
              class="d-block mx-auto mb-4"
              src={YamahaLogo}
              alt="pic"
            />

            <title></title>
            <rect
              width="100%"
              height="100%"
              fill="var(--bs-secondary-color)"
            ></rect>

            <h2 class="fw-normal">Yamaha </h2>
            <p>Another big four motorcycle, known for it's retro classics.</p>
            <p>
              <NavLink className="btn btn-secondary" to="/yamaha">
                View details »
              </NavLink>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
        {/* <!-- /.row --> */}

        {/* <!-- START THE FEATURETTES --> */}

        <hr class="featurette-divider py-5 my-3" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              Yamaha SR400,
              <a
                href="https://www.yamaha-motor.com.ph/sport-machines/sport-heritage/sport-heritage/sr400"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-secondary text-decoration-none"
              >
                See it here
              </a>
            </h2>
            <p class="lead">
              Born to be a legend, SR400 remains timeless through the creativity
              of the builders that approach this authentic machine. Discover
              their unique designs. Yamaha has marketed the SR400 in the JDM
              since model year 1978, with a production hiatus for model years
              2008–2009. The SR400 has an air-cooled 4-stroke single cylinder
              SOHC 2-valve engine with a dry-sump, with the downtubes of the
              motorcycle's frame serving as the engine's oil reservoir and
              cooling system, thereby eliminating the need for an external oil
              cooler, reducing engine pumping losses, and allowing increased
              ground clearance as well as reduced overall width. The bike's
              semi-double cradle frame uses high-strength steel.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={YamahaSr400}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading fw-normal lh-1">
              Royal Enfield Scram 411,{" "}
              <a
                href="https://www.royalenfield.com/ph/en/motorcycles/scram411/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-body-secondary text-decoration-none"
              >
                See it here
              </a>
            </h2>

            <p class="lead">
              Royal Enfield’s high altitude adventurer DNA has evolved from
              decades of expeditions and thousands of kilometers of rides across
              the most challenging terrains in the world. The scram 411 is
              derived from this very DNA. It is a multi purpose tool optimised
              for agility; an ally that’s always ready for whatever life has in
              store.
              <br />
              This is no cosmetic crossover or pumped up street bike this is a
              brand new subspecies. A motorcycle with strong adventure lineage
              yet remains true to our philosophy of pure motorcycling. The
              all-new Himalayan retains the capability, versatility and the
              ability to go anywhere your adventure takes you. Nothing you dont
              need and everything that you do for the changing times.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img
              src={EnfieldS411}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading fw-normal lh-1">
              Kawasaki W800,{" "}
              <a
                href="https://kawasakileisurebikes.ph/motorcycles/heritage-models/w800-street/#show-content"
                rel="noopener noreferrer"
                target="_blank"
                class="text-body-secondary text-decoration-none"
              >
                See it here
              </a>
            </h2>
            <p class="lead">
              The W800 Street is the latest evolution of the brand that spans 50
              years. With numerous parts updated from the original W1 and
              compared to the standard W800 - the W800 Street is a retro model
              that has been thoroughly modernized to deliver rider-friendly
              machines with easy handling and good stability on the highway.
            </p>
          </div>
          <div class="col-md-5">
            <img
              src={KawasakiW800}
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="500"
              height="500"
              loading="lazy"
            />
          </div>
        </div>

        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* <!-- /.container --> */}
    </div>
  );
}

export default MarketingContent;
