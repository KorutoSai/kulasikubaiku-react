import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";
import ContentKawasakiData from "./ContentData/ContentKawasakiData";

//images
import KawasakiMainImg from "../images/kawasakiMain.png";

function ContentKawasaki() {
  return (
    <div>
      <McPropMain
        img={KawasakiMainImg}
        brandName="Kawasaki Motorcycles"
        brandDescription="Kawasaki's Aircraft Company began the development of a motorcycle engine in 1949.
                        The development was completed in 1952 and mass production started in 1953. The engine was an
                        air-cooled, 148 cc, OHV, four-stroke single cylinder with a maximum power of 4 PS (2.9 kW; 3.9
                        hp) at 4,000 rpm. In 1954, the first complete Kawasaki Motorcycle was produced under the name of
                        Meihatsu, a subsidiary of Kawasaki Aircraft. In 1960, Kawasaki completed construction of a
                        factory dedicated exclusively to motorcycle production and bought Meguro Motorcycles."
      />

      {/* container for featurettes */}
      <div className="container">
        {/* container for featurettes */}

        {ContentKawasakiData.map((data) => (
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

export default ContentKawasaki;
