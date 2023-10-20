import React from 'react'
import "./TripStyles.css"
import TripData from './TripData'
import trip1 from '../assests/1.webp'
import trip2 from '../assests/5.jpg'
import trip3 from '../assests/4.jpg'



function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using google Maps</p>
      <div className='tripcard'>
        <TripData
        image={trip1}
        heading="Trip in Indonesia"
        text="Indonesia, officially the Republic of Indonesia ,is a country
        in southeast Asia and Oceania between the Indian and Pacific oceans
        . It consists of over 17,000 islands ,including Sumatra, Java ,Sulawesi and parts of Borneo and New Guinea"

        />
        <TripData
        image={trip2}
        heading="Trip in Malaysia"
        text="Malaysia has its origins in the Malay kingdoms, which, from the 18th century on, 
        became subject to the British Empire, along with the British Straits Settlements protectorate. 
        During World War Two, British Malaya."
          
        />
        <TripData
        image={trip3}
        heading="Trip in France"
        text="Metropolitan France was settled during the Iron Age by Celtic tribes known as
         Gauls before Rome annexed the area in 51 BC, leading to a distinct Gallo-Roman culture.
          In the Early Middle Ages, the Germanic Franks formed the Kingdom of Francia.,
          "
        />
      </div>
    </div>
  )
}
export default Trip
