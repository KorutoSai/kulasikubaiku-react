import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";
import ContentSuperiorData from "./ContentData/ContentSuperiorData";

//images
import SuperiorSs100Main from "../images/superiorMain.png";

function ContentSuperior() {
  return (
    <div>
      <McPropMain
        img={SuperiorSs100Main}
        brandName="Brough Superior Motorcycles"
        brandDescription="The motorcycles were
                        dubbed the 'Rolls-Royce of Motorcycles' by H. D. Teague of The Motor Cycle newspaper.
                        Approximately 3048 motorcycles (19 models) were made in the 21 years of production; around a
                        third of that production still exists.
                        
                        T. E. Lawrence ('Lawrence of Arabia') owned eight of
                        these motorcycles and died from injuries sustained when he crashed number seven; the eighth was
                        on order.
                        
                        Moving forward to 2008, vintage motorcycle enthusiast Mark Upham acquired the rights
                        to the Brough Superior name.
                       
                        In 2013 he met motorcycle designer Thierry Henriette and asked him
                        to design a new Brough Superior motorcycle. Three months later a prototype of a new SS100 was
                        shown in Milan.
"
      />

      {/* container for featurettes */}
      <div className="container">
        {/* container for featurettes */}

        {ContentSuperiorData.map((data) => (
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

export default ContentSuperior;
