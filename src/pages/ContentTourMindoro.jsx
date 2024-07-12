import "bootstrap/dist/css/bootstrap.min.css";
import TourPropMain from "./TourPropComponents/TourPropMain";
import TourPropMap from "./TourPropComponents/TourPropMap";
import TourPropContent from "./TourPropComponents/TourPropContent";
import TourPropSummary from "./TourPropComponents/TourPropSummary";
import ContentTourMindoroData from "./ContentData/ContentTourMindoroData";

// images
import MindoroMain from "../images/mindoroMain.png";

function ContentTourMindoro() {
  return (
    <div>
      <TourPropMain
        img={MindoroMain}
        title="Mindoro Loop"
        titleDescription="Mention Mindoro and most people immediately think of Puerto
              Galera. This party beach that’s easily accessible by sea travel
              from Batangas Port is one of the most popular weekend destinations
              for those based in the metro. But that’s literally just the tip of
              the island. The rest of Mindoro has much more to offer. Mindoro is
              actually the seventh largest island in the Philippines and is
              composed of two provinces: Oriental Mindoro and Occidental
              Mindoro."
      />
      {/* content container */}
      <div class="container">
        {/* content container */}

        <TourPropMap
          mapRoute="Mindoro Loop Route"
          whyLocation="Why Mindoro?"
          whyLocDesc="Mindoro is one of the largest islands of the Philippines with over
        480+ km (almost complete) circumferential road. For riders based
        in Manila who want to bring their own motorcycles, it’s a matter
        of boarding a ferry from Batangas Port (roughly 2-5 hours from
        Manila depending on the traffic) to cross to the island. The ferry
        ride itself lasts 1 – 3 hours. Mindoro is divided in the middle by
        beautiful mountain ranges, giving riders both coastal and mountain
        views. You can choose to start and end the loop in different
        provinces as your entry or exit points. NOTE: As of May 2019, a
        4-km stretch of road connecting Puerto Galera to Abra de Ilog in
        the northern part of Mindoro is still under construction.
        According to locals, some motorcycles have been able to cross
        this, but it still involves rough roads and river crossings.
        There’s also a new 50-km cross-country road being built that
        zigzags through the mountains connecting Sablayan in Occidental
        Mindoro to the town of Victoria in Oriental Mindoro. This road is
        not yet marked on Google maps."
          embedLink="https://www.google.com/maps/embed?pb=!1m46!1m12!1m3!1d995637.4017167983!2d120.47919873578273!3d12.
          894304103105423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m31!3e0!4m5!1s0x33bc5a68fdf9b4d7%3A0xa484db3dba0eb79f!2sAbra+De+Ilog+Port%2C+Abra+de+Ilog%2C+Occidental+Mindoro!3m2!1d13.
          467245199999999!2d120.7725286!4m5!1s0x33bb84d72538861f%3A0x8e0b3c517e38e637!2sSablayan+Adventure+Camp%2C+Sablayan%2C+Occidental+Mindoro!3m2!1d12.8392749!2d120.
          762919!4m5!1s0x33bb0319b55fffe9%3A0xb49309a4529452c3!2sSikatuna+Beach+Hotel%2C+San+Roque%2C+San+Jose%2C+Occidental+Mindoro!3m2!1d12.3553347!2d121.
          0534866!4m5!1s0x33bceece975a1a9d%3A0x287cc64012d92786!2sVencios+Garden+Hotel+and+Restaurant%2C+Calapan%2C+Oriental+Mindoro!3m2!1d13.
          3968566!2d121.1688944!4m5!1s0x33bcf87d6508aff7%3A0xc8cc6ba2fa963959!2sCasa+Marco+Suites%2C+White+beach%2C+Puerto+Galera%2C+Oriental+Mindoro!3m2!1d13.
          5074606!2d120.905234!5e0!3m2!1sen!2sph!4v1557964847657!5m2!1sen!2sph"
        />

        {/* divider */}
        <hr class="featurette-divider" />

        {ContentTourMindoroData.map((data) => (
          <TourPropContent
            key={data.key}
            locName={data.locName}
            embedLoc={data.embedLoc}
            embedLocDesc={data.embedLocDesc}
            locSpMention={data.locSpMention}
            locSpMentionDesc={data.locSpMentionDesc}
            locImg={data.locImg}
          />
        ))}

        {/* divider */}
        <hr class="featurette-divider" />

        <TourPropSummary
          summary="Trip Summary"
          summaryDesc="Our Mindoro Loop trip took 5 days including 1 day to get there and
              back and 1 overnight island-hopping trip. Based on my odometer
              reading and Google Map estimates, we traveled almost 1,000 kms.
              But more than the distance, this trip meant a lot more to me. I’ve
              said it before, but there’s really something immensely satisfying
              about looping an island. Well, not completely. As of this writing,
              there’s still that 4-km stretch of the road connecting Puerto
              Galera to Abra de Ilog that under construction and is not yet
              passable. I guess it’s only a matter of time before more tourists
              discover the beauty of the Occidental side. But for me, the charm
              lies in how raw and rugged the place is. I hope it stays that way."
        />
      </div>
    </div>
  );
}
export default ContentTourMindoro;
