import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";

//images
import YamahaMainImg from "../images/yamahaMain.png";
import YamahaSr400 from "../images/yamahaSR400.png";
import YamahaXsr900 from "../images/yamahaXSR900.png";
import YamahaXsr700 from "../images/yamahaXSR700.png";
import YamahaXsr155 from "../images/yamahaXSR155.png";

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

        <McPropContentImg
          isRight={true}
          mcName="Yamaha SR400"
          pageLink="https://www.yamaha-motor.com.ph/sport-machines/sport-heritage/sport-heritage/sr400"
          mcDescription="Born to be a legend, SR400 remains timeless through the creativity of the builders
                        that approach this authentic machine. Discover their unique designs.

                        Yamaha has marketed the SR400 in the JDM since model year 1978, with a production
                        hiatus for model years 2008–2009.
                        The SR400 has an air-cooled 4-stroke single cylinder SOHC 2-valve engine with a dry-sump, with
                        the downtubes of the motorcycle's frame serving as the engine's oil reservoir and cooling
                        system, thereby eliminating the need for an external oil cooler, reducing engine pumping
                        losses, and allowing increased ground clearance as well as reduced overall width. The bike's
                        semi-double cradle frame uses high-strength steel."
          img={YamahaSr400}
        />

        <McPropContentImg
          isRight={false}
          mcName="Yamaha XSR900"
          pageLink="https://www.yamaha-motor.com.ph/sport-machines/sport-heritage/sport-heritage/xsr900"
          mcDescription="The XSR900 is at home on any road, whether it's on those dreamy twisting lanes or
                        the open straight. With the most up-to-date electronics package, every rider has the greatest
                        amount of controllability in any situation. You can go wherever you want with this 3-cylinder
                        muscle machine, thanks to its sporty Quick Shifter and comfortable Cruise Control."
          img={YamahaXsr900}
        />

        <McPropContentImg
          isRight={true}
          mcName="Yamaha XSR700"
          pageLink="https://www.yamaha-motor.com.ph/sport-machines/sport-heritage/sport-heritage/xsr700"
          mcDescription="The XSR700 is a true vintage machine that has earned its stripes on the road. The
                        versatile character is the machine's beating heart. The XSR700 is a bike that can be ridden in
                        any way you want. The bike can do it all, from casual cruising to twisty roads."
          img={YamahaXsr700}
        />

        <McPropContentImg
          isRight={false}
          mcName="Yamaha XSR155"
          pageLink="https://www.yamaha-motor.com.ph/sport-machines/sport-heritage/sport-heritage/xsr900"
          mcDescription="The XSR155 inherits the design traits of the XSR series while being distinctively
                        unique. It provides a remarkable sense of freedom with an agile balance of different elements of
                        the machine. It's a tribute to timeless and pure style of iconic motorcycles in history that
                        redefined the riding excellence of today."
          img={YamahaXsr155}
        />

        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* container for featurettes */}
    </div>
  );
}

export default ContentYamaha;
