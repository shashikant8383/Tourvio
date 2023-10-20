import DestinationData from "./DestinationData";
import "./DestinationStyles.css"
const Destination = () => {
    return (
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, with in a time frame.</p>
        <DestinationData
        className="first-des"
            heading="Taal Volcano, Batangas"
            text="One of the most iconic views in Luzon ,Mt. 
            Taal Boasts a volcano inside a lake inside an island . If you fancy a closer look, 
            the hike up to the crater is a mere 45 minutes ,and is easy enough for beginners. 
            Guides will assists you most of the way ,and you will see the peculiar environment found on active volcano 
            ,including volcanic rocks and steam vents.The hike can be dusty and hot 
            ,so plan for an early morning trip ,and then unwind with some bulalo before heading back home!"
        />
        <DestinationData
        className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="Mount Daguldol is within the vicinity of the town of San Juan in Batangas. Normally it will take you around 3 hours to reach the jump off point Barrio Hugom by private vehicle.
            The site has been a favorite trekking location of mountaineers. Although quite new to other hikers, it was
            discovered by the University of the Philippines Mountaineers in the 1990’s."
            />
         </div>
      
      
    );
};
export default Destination;