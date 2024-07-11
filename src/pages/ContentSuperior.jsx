import "bootstrap/dist/css/bootstrap.min.css";
import McPropMain from "./McPropComponents/McPropMain";
import McPropContentImg from "./McPropComponents/McPropContentImg";

//images
import SuperiorSs100Main from "../images/superiorMain.png";
import SuperiorSs100Classic from "../images/superiorClassic.png";
import SuperiorSs100Modern from "../images/superiorModern.png";

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

        <McPropContentImg
          isRight={true}
          mcName="Brough Superior SS 100 (Classic)"
          pageLink="https://en.wikipedia.org/wiki/Brough_Superior_SS100"
          mcDescription="The Brough Superior SS 100 is a motorcycle which was designed and built by George
                        Brough in Nottingham, England in 1924. Although every bike was designed to meet specific
                        customer requirements—even the handlebars were individually shaped—sixty-nine SS100s were
                        produced in 1925 and at £170 (equivalent to £12,200 in 2023) were advertised by Brough as the
                        'Rolls-Royce of Motorcycles'.
                        
                        The term was coined by a magazine road
                        tester in his review of the bike, and Brough eventually obtained explicit permission to use it
                        after a Rolls-Royce executive toured the Brough Superior factory. All bikes had a guarantee
                        that they were capable of 100 mph (160 km/h).
                        

                        T. E. Lawrence, Lawrence of Arabia, bought one of the first SS100s in 1925 having previously
                        owned three Brough SS80s."
          img={SuperiorSs100Classic}
        />

        <McPropContentImg
          isRight={false}
          mcName="Brough Superior SS 100 (Modern)"
          pageLink="https://www.brough-superior-motorcycles.com/en/brough-superior-models/ss100/article/original"
          mcDescription="In 2013 the Brough Superior company unveiled plans to build a new SS100 as a 90th
                        anniversary tribute to the most famous Brough Superior model. The first new SS100s were
                        delivered in 2015 and each was made to order.
                  
                        The new SS100 has a 997 cc (60.8 cu in) DOHC 88° V-twin engine developed and built with French
                        specialists Akira Engineering of Bayonne that produces 120 hp (89 kW). Produced at
                        Henriette's Boxer Design factory in Toulouse, France, the new SS100 is hand built. The
                        chassis is an expensive mix of magnesium, titanium, and aluminium with carbon-fiber wheels and a
                        double-wishbone front fork. The brakes are Behringer from the aircraft industry with four-disc
                        front brakes, motorcycling's first."
          img={SuperiorSs100Modern}
        />

        {/* <!-- /END THE FEATURETTES --> */}
      </div>

      {/* container for featurettes */}
    </div>
  );
}

export default ContentSuperior;
