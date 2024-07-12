import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";
import ContentTriumphData from "./ContentData/ContentTriumphData";
// Images
import TriumphMainImg from "../images/triumphMainPic.jpg";

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

        {ContentTriumphData.map((data) => (
          <McPropContentImg
            key={data.key}
            isRight={data.isRight}
            mcName={data.mcName}
            pageLink={data.pageLink}
            mcDescription={data.mcDescription}
            img={data.img}
          />
        ))}
        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* container for featurettes */}
    </div>
  );
}

export default ContentTriumph;
