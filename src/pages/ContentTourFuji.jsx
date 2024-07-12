import "bootstrap/dist/css/bootstrap.min.css";
import TourPropMain from "./TourPropComponents/TourPropMain";
import TourPropContent from "./TourPropComponents/TourPropContent";
import TourPropSummary from "./TourPropComponents/TourPropSummary";
import ContentTourFujiData from "./ContentData/ContentTourFujiData";

//special component
import MapFujiSpecialComponent from "./TourPropComponents/MapFujiSpecialComponent";

// images
import FujiMain from "../images/fujiMain.png";

function ContentTourFuji() {
  return (
    <div>
      <TourPropMain
        img={FujiMain}
        title="Kanto (Fuji) Loop"
        titleDescription="This tour is specifically made not only to let you enjoy motorcycle touring in Japan, but also
                        some unique pieces of Japanese culture as well.
                        
                        You of course will enjoy classic Japanese
                        pattern like hot spring’s relaxing water and made fresh sashimi, but you will also be able to
                        try the uncommon experience of wasabi’s harvest on an authentic Japanese wasabi field.
                   
                        You will
                        be also enjoying some of the greatest historic treasures of Japan can offer you, like the
                        Owakudani valley or the unique Oshino Hakkai.
                     
                        And then, the road: Izu Skyline’s curves, the
                        Kawazu Nanadaru Bridge’s astonishing loop and the romantic ocean view on the Bay Bridge. You
                        will understand the uniqueness of motorcycle touring in the Land of the Rising Sun."
      />
      {/* content container */}
      <div class="container">
        {/* content container */}

        <MapFujiSpecialComponent />

        {/* divider */}
        <hr class="featurette-divider" />

        {ContentTourFujiData.map((data) => (
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
          summaryDesc="The Kanto region in Japan is a densely populated area with a rich history and culture.
                        For a motorcycle tour, the region offers a mix of urban excitement and natural beauty.
              
                        Overall, a motorcycle tour in the Kanto region offers a unique blend of urban excitement,
                        natural beauty, and cultural experiences.
                        With careful planning and preparation, you can create an unforgettable adventure in this
                        fascinating part of Japan.."
        />
      </div>
    </div>
  );
}
export default ContentTourFuji;
