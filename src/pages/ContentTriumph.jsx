import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";

//images
import TriumphMainImg from "../images/triumphMainPic.jpg";
import TriumphThrux from "../images/triumphThruxtonpic.png";
import TriumphBoni from "../images/triumphBoni.png";
import TriumphScram from "../images/triumphScram.png";

function ContentTriumph() {
  return (
    <div>
      <McPropMain
        img={TriumphMainImg}
        brandName="Triumph Motorcycles"
        brandDescription="Triumph Motorcycles Ltd is the largest UK-owned motorcycle
              manufacturer, established in 1983 by John Bloor after the original
              company Triumph Engineering went into receivership. The new
              company, initially called Bonneville Coventry Ltd, continued
              Triumph's lineage of motorcycle production since 1902."
      />

      {/* container for featurettes */}
      <div className="container">
        {/* container for featurettes */}

        <McPropContentImg
          isRight={true}
          mcName="Triumph Thruxton"
          pageLink="https://www.triumphmotorcycles.ph/bikes/classic/thruxton-rs/thruxton-rs-2023"
          mcDescription="The name Thruxton is an internationally acclaimed motorcycle
              racing icon, born from incredible success at the Thruxton 500 and
              the Isle of Man TT, inspiring a whole generation of fanatical
              teenage cafe racers. Designed and developed to evolve the legend
              further, the Thruxton RS combines all the original cafe racer
              design DNA and pure original style while pushing forward the level
              of modern capability and performance."
          img={TriumphThrux}
        />

        <McPropContentImg
          isRight={false}
          mcName="Triumph Bonneville T120"
          pageLink="https://www.triumphmotorcycles.ph/bikes/classic/bonneville-t120/t120-2023"
          mcDescription="The Triumph Bonneville T120 is a motorcycle originally made by
              Triumph Engineering from 1959 to 1975. It was the first model of
              the Bonneville series, which was continued by Triumph Motorcycles
              Ltd. The T120 was discontinued in favour of the larger 750 cc T140
              in the early 1970s"
          img={TriumphBoni}
        />

        <McPropContentImg
          isRight={true}
          mcName="Triumph Scrambler 400X"
          pageLink="https://www.triumphmotorcycles.ph/bikes/classic/scrambler-400-x/scrambler-400-x-2024"
          mcDescription="Affordable, stylish, charming, and practical – these qualities are
              woven into the fabric of the Triumph Scrambler 400X. Whether
              you're seeking to conquer the wilderness or simply enjoy a
              thrilling urban commute, this bike is your ticket to adventure.
              With its retro-inspired allure and rugged spirit, the Scrambler
              400X is ready to accompany you on a journey that transcends
              boundaries."
          img={TriumphScram}
        />
        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* container for featurettes */}
    </div>
  );
}

export default ContentTriumph;
