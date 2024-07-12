import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";
import ContentYamahaData from "./ContentData/ContentYamahaData";
//images
import YamahaMainImg from "../images/yamahaMain.png";

function ContentYamaha() {
  return (
    <div>
      <McPropMain
        img={YamahaMainImg}
        brandName="Yamaha Motorcycles"
        brandDescription="Yamaha Motor Co., Ltd. is a Japanese
                        mobility manufacturer that produces motorcycles, motorboats, outboard motors, and other
                        motorized products.
                        The motorcycle division of Yamaha was spun off in 1955, being incorporated on 1 July 1955 in
                        Japan, and was headed by Genichi Kawakami. Yamaha's initial product was a 125 cc (7.6 cu in)
                        two-cycle, single cylinder motorcycle, the YA-1, which was a copy of the German DKW RT 125. The
                        YA-1 was a competitive success at racing from the beginning, winning not only the 125cc class in
                        the Mt. Fuji Ascent, but also sweeping the podium with first, second and third place in the All
                        Japan Autobike Endurance Road Race that same year."
      />

      {/* container for featurettes */}
      <div className="container">
        {/* container for featurettes */}

        {ContentYamahaData.map((data) => (
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

export default ContentYamaha;
