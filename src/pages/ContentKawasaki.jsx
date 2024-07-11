import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";

//images
import KawasakiMainImg from "../images/kawasakiMain.png";
import KawasakiW800 from "../images/kawasakiW800.png";
import KawasakiZ650rs from "../images/kawasakiZ650RS.png";
import KawasakiW175 from "../images/kawasakiW175.png";

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

        <McPropContentImg
          isRight={true}
          mcName="Kawasaki W800"
          pageLink="https://kawasakileisurebikes.ph/motorcycles/heritage-models/w800-street/#show-content"
          mcDescription="The W800 Street is the latest evolution of the brand that spans 50 years. With
                        numerous parts updated from the original W1 and compared to the standard W800 - the W800 Street
                        is a retro model that has been thoroughly modernized to deliver rider-friendly machines with
                        easy handling and good stability on the highway."
          img={KawasakiW800}
        />

        <McPropContentImg
          isRight={false}
          mcName="Kawasaki Z650RS"
          pageLink="https://www.kawasaki.com/en-us/motorcycle/z/retro-sport/z650rs"
          mcDescription="A true middleweight naked sportbike for a broad range of riders, the Z650RS tempts
                        the eye with the timeless beauty of a retro sport. Distinguishing the Z650RS from the larger
                        displacement Z900RS is a slimmer tank and a shorter, more compact tail—all contributing to light
                        handling and an approachable nature. Experience modern responsive power and retro styling that's
                        perfect for everyday riding on the Z650RS."
          img={KawasakiZ650rs}
        />

        <McPropContentImg
          isRight={true}
          mcName="Kawasaki W175"
          pageLink="https://www.motodeal.com.ph/motorcycles/kawasaki/w175"
          mcDescription="The Kawasaki W175 is the newest member of the 'W' family. Going back years ago,
                        Kawasaki’s original W, the 1966 W1, had gained recognition worldwide for having the largest
                        displacement in its segment. This success became the brand’s first step in manufacturing
                        large-displacement motorcycles. Now, embracing the W heritage, the W175 commuter bike aims to
                        continue this legacy with its great performance without losing its retro style."
          img={KawasakiW175}
        />
        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* container for featurettes */}
    </div>
  );
}

export default ContentKawasaki;
