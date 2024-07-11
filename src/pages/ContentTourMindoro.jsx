import "bootstrap/dist/css/bootstrap.min.css";
import TourPropMain from "./TourPropComponents/TourPropMain";
import TourPropMap from "./TourPropComponents/TourPropMap";
import TourPropContent from "./TourPropComponents/TourPropContent";
import TourPropSummary from "./TourPropComponents/TourPropSummary";

// images
import MindoroMain from "../images/mindoroMain.png";
import MindoroAbra from "../images/mindoroAbra.png";
import MindoroMamburao from "../images/mindoroMamburao.png";
import MindoroSablayan from "../images/mindoroSablayan.png";
import MindoroSanjose from "../images/mindoroSanJose.png";
import MindoroBulalacao from "../images/mindoroBulalacao.png";
import MindoroMansalay from "../images/mindoroMansalay.png";
import MindoroCalapan from "../images/mindoroCalapan.png";
import MindoroBaco from "../images/mindoroBaco.png";
import MindoroPuerto from "../images/mindoroPuerto.png";

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

        <TourPropContent
          locName="Abra de Ilog"
          embedLoc="https://www.google.com/maps/place/Abra+de+Ilog,+Occidental+Mindoro/@13.
         3800146,120.5842462,11z/data=!3m1!4b1!4m6!3m5!1s0x33bc5cf183e4fc29:0xdac7a65087957e19!8m2!3d13.
         3638315!4d120.7579834!16zL20vMDZwbXNj?entry=ttu"
          embedLocDesc="We will take a RoRo from mainland Luzon at Batangas port to Abra
              de Ilog Abra de Ilog is a small port town and the main entry point
              from the province for those coming from Batangas. The town’s name
              refers to an “opening of the river” and is named because of the
              numerous rivers and creeks that traverse this municipality."
          locSpMention=""
          locSpMentionDesc=""
          locImg={MindoroAbra}
        />

        <TourPropContent
          locName="Mamburao"
          embedLoc="https://www.google.com/maps/place/Mamburao,+Occidental+Mindoro/@13.2310881,120.5640042,
                            12z/data=!3m1!4b1!4m6!3m5!1s0x33bc6eeb997651ad:0x728faa8dfccef606!8m2!3d13
                            .2681778!4d120.6204892!16zL20vMDZwbXFf?entry=ttu"
          embedLocDesc=" Next Stop is Mamburao. Mamburao is the capital of Occidental
              Mindoro, and the next town after Abra de Ilog. We didn’t really
              get to explore much of the place and didn’t stop here for photo
              ops because it was getting dark when we arrived, but you can find
              the provincial capitol here, as well as a few restaurants,
              traveller’s hotels and simple beach resorts."
          locSpMention=""
          locSpMentionDesc=""
          locImg={MindoroMamburao}
        />

        <TourPropContent
          locName="Sablayan"
          embedLoc="https://www.google.com/maps/place/Sablayan,+Occidental+Mindoro/@12.8942284,120.6613785,11z/data=!3m1!4b1!
                    4m6!3m5!1s0x33bb7c18c6099c4f:0x2c449bb90def4db7!8m2!3d12.8563975!4d120.9101142!16zL20vMDZwbXNx?entry=ttu"
          embedLocDesc=" Next Stop is Sablayan. Sablayan is located in the central part of
              Occidental Mindoro, around 2-3 hours drive from Abra de Ilog. It
              is the largest municipality in the Philippines and is the common
              jump-off point to island-hopping trips to Apo Reef Natural Park
              and Pandan Island."
          locSpMention="Sablayan Adventure Camp"
          locSpMentionDesc="It was dark by the time we got to Sablayan, so we stayed for the
              night at Sablayan Adventure Camp, a beachfront hotel that caters
              mainly to international divers. They have basic standard and
              duplex type (either fan or aircon) rooms good for groups and an
              in-house restaurant serving pretty good home-cooked meals like
              seafood like tanigue steak and calamares. Service was very
              friendly."
          locImg={MindoroSablayan}
        />

        <TourPropContent
          locName="San Jose"
          embedLoc="https://www.google.com/maps/place/San+Jose,+Occidental+Mindoro/@12.3521575,120.942421,11z
                    /data=!3m1!4b1!4m6!3m5!1s0x33bb1ce8dabed823:0x3b81ac41ab96ca51!8m2!3d12.3474326!4d121.0659175!16zL20vMDRkeGc0?entry=ttu"
          embedLocDesc=" Next Stop is San Jose. San Jose is the largest town of Occidental
              Mindoro where you can find the largest commercial port and
              airport. The town also has the most banking, business, dining and
              commercial establishments making it a good place to stay overnight
              for those who want more hotel and dining options."
          locSpMention="Sikatuna Beach Hotel & Restaurant"
          locSpMentionDesc="While in San Jose, we stayed overnight in Sikatuna Beach Hotel &
              Restaurant, a large hotel surrounded by tropical flowers and
              plants facing a coast where you can hire boats to go island
              hopping to secluded beaches in nearby Ilin Island and Grace
              Island. Rooms are clean and modern, equipped with
              air-conditioning, TV and private restrooms. The hotel can arrange
              airport pickup and drop-off, car rentals, tours and laundry
              service."
          locImg={MindoroSanjose}
        />

        <TourPropContent
          locName="Bulalacao"
          embedLoc="https://www.google.com/maps/place/Bulalacao,+Oriental+Mindoro/@12.3262096,
                    121.2730943,12z/data=!3m1!4b1!4m6!3m5!1s0x33bb26cb20749d65:0xd1562073ddab3bf7!8m2!3d12.3443972!4d121.3361897!16zL20vMDZzNV9k?entry=ttu"
          embedLocDesc="Next Stop is Bulalacao. Bulalacao is a quiet coastal town located
              at the southernmost tip of Oriental Mindoro, roughly 176
              kilometers from Calapan. We just breezed through here for this
              road trip, but I’ve stayed longer here during a previous trip.
              This is another alternative place to stay aside from San Jose,
              where you can enjoy quality beach-bumming and island-hopping minus
              the crowds."
          locSpMention=""
          locSpMentionDesc=""
          locImg={MindoroBulalacao}
        />

        <TourPropContent
          locName="Mansalay"
          embedLoc="https://www.google.com/maps/place/Mansalay,+Oriental+Mindoro/
                    @12.5276486,121.2734752,11.75z/data=!4m6!3m5!1s0x33bb3921d726a0ed:0x5c396efe07b921a3!8m2!3d12.520154!4d121.
                    438851!16zL20vMDFxa2o5?entry=ttu"
          embedLocDesc="Next Stop is Mansalay. If you have more time to spare, another
              notable stop in the side of Oriental Mindoro is the town of
              Mansalay, notable for its indigenous Mangyan population. It’s here
              where you can find the Panaytayan Mangyan Settlement, an upland
              Mangyan community that is home to an estimated 500 Mangyan
              residents. Going here requires a detour from the main highway
              though."
          locSpMention=""
          locSpMentionDesc=""
          locImg={MindoroMansalay}
        />

        <TourPropContent
          locName="Calapan"
          embedLoc="https://www.google.com/maps/place/Calapan,+Oriental+Mindoro/@13.391132,121.1105311,
                    12z/data=!3m1!4b1!4m6!3m5!1s0x33bce8d27f6f844d:0xf7cc1b1c943ab71b!8m2!3d13.3770935!
                    4d121.1645706!16zL20vMDZzNjAy?entry=ttu"
          embedLocDesc="Next Stop is Calapan. Calapan City is the major gateway to
              Oriental Mindoro province, with the largest and busiest seaport on
              Mindoro Island. It’s currently one of only two cities in Region
              4-B (MIMAROPA) aside from Puerto Princesa in Palawan. Calapan
              serves as the region’s administrative center. You can find a lot
              of business and transient hotels, restaurants and commercial
              establishments here."
          locSpMention="Vencio’s Garden Hotel & Restaurant"
          locSpMentionDesc="We stopped for late lunch at Vencio’s Garden Hotel & Restaurant in
              Calapan, which serves seafood and good coffee. The restaurant has
              nice interiors in and strong WiFi. The outdoor area at the back
              has several native cottages perched over a mangrove area, making
              it a good area for groups to unwind at night in the city."
          locImg={MindoroCalapan}
        />

        <TourPropContent
          locName="Baco"
          embedLoc="https://www.google.com/maps/place/Baco,+Oriental+Mindoro/@13.2813709,120.9548342,
                            12z/data=!3m1!4b1!4m6!3m5!1s0x33bc8d3278734597:0x41a131f241de013e!8m2!3d13.
                            2623378!4d121.0564425!16zL20vMDZzNXpj?entry=ttu"
          embedLocDesc="Next Stop is Baco. Baco is the former capital of Oriental Mindoro.
              In a story told by anthropologist and missionary, Rev. Antoon
              Postma, the first parochial church in Oriental Mindoro was
              established in Baco in the year 1567. Due to this, it was declared
              the first official capital of Oriental Mindoro in 1575. Baco was
              considered the cabecera town. However, when Corregidor Joseph de
              Chavez became Governor of Oriental Mindoro in the year 1678,
              Calapan was declared the new capital of the province."
          locSpMention="Infinity Farm Resort"
          locSpMentionDesc="This awesome location is a series of waterfalls in a condensed
              relaxing atmosphere which is great for relaxing and having a nice
              meal with friends and family all while enjoying the serene sounds
              of rushing water and surrounding nature. As you walk along the
              river or relax in a nice spot you’ve found, you will find the
              background noise of the water cascading down the stream is both
              relaxing and refreshing from city life. There are also several
              locations along the river going up or downstream where you can
              find some really nice areas perfect for a mid-day snack or meal
              with your group. Travel upstream and you will find the water
              rapids begin to increase in speed and really make for a fun
              adventure up the mountain."
          locImg={MindoroBaco}
        />

        <TourPropContent
          locName="Puerto Galera"
          embedLoc="https://www.google.com/maps/place/Baco,+Oriental+Mindoro/@13.2813709,120.9548342,
                            12z/data=!3m1!4b1!4m6!3m5!1s0x33bc8d3278734597:0x41a131f241de013e!8m2!3d13.
                            2623378!4d121.0564425!16zL20vMDZzNXpj?entry=ttu"
          embedLocDesc="Next Stop is Puerto Galera. After a long day on the road, we
              finally made it to Puerto Galera, the most popular tourist
              destination in the whole island of Mindoro. Located at the
              north-westernmost part of the province, about 130 kilometers south
              of Manila, it is mainly accessible from the Southern Luzon gateway
              port of Batangas by numerous fastcrafts and ferries. On the way
              there, we made stopped by Tamaraw Falls, a scenic waterfall along
              the highway that features artificial pools at the base where
              visitors can swim. Puerto Galera is known for its vibrant
              nightlife and party scene, which makes it popular with weekend
              travelers and families looking to unwind. There are numerous
              hotels, restaurants, bars and shops in the areas of White Beach
              and Sabang Beach."
          locSpMention="Casa Marco Suites"
          locSpMentionDesc="We decided to stay in Casa Marco Suites upon the recommendation of
              Art’s biker friend. Casa Marco Suites is one of the newest
              beachfront hotels in White Beach equipped with modern amenities
              and facilities. Eco-rooms are fully air-conditioned with
              comfortable beds, large flat screen TV, and hot and cold shower."
          locImg={MindoroPuerto}
        />

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
