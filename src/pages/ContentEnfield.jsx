import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";
import ContentEnfieldData from "./ContentData/ContentEnfieldData";

//images
import EnfieldMainImg from "../images/enfieldMain.png";

function ContentEnfield() {
  return (
    <div>
      <McPropMain
        img={EnfieldMainImg}
        brandName="Royal Enfield Motorcycles"
        brandDescription="Royal Enfield is an Indian multinational motorcycle manufacturing company, headquartered in Chennai. 
                The Royal Enfield brand, including its original English heritage, is the oldest global motorcycle brand in continuous production.
                The company operates manufacturing plants in Chennai in India.
                
                The first Royal Enfield motorcycle was built in 1901 by The Enfield Cycle Company of Redditch, Worcestershire, 
                England, which was responsible for the design and original production of the Royal Enfield Bullet, the longest-lived motorcycle design in history."
      />
      {/* container for featurettes */}
      <div className="container">
        {ContentEnfieldData.map((data) => (
          <McPropContentImg
            key={data.key}
            isRight={data.isRight}
            mcName={data.mcName}
            pageLink={data.pageLink}
            mcDescription={data.mcDescription}
            img={data.img}
          />
        ))}

        {/* container for featurettes */}
      </div>
    </div>
  );
}
export default ContentEnfield;
