import { useEffect, useState } from "react";
import TrustpilotSummary from "./trustpilotSummary";
import TrustpilotDetails from "./trustpilotDetails";

interface TpReviews {
    stars: number,
    title: string,
    text: string,
    reviewUrl: string,
    language: string,
    createdAt: string,
    consumer: {
      displayName: string
    },
  }

export interface TpData {
  businessUnit: {
    stars: number,
    trustScore: number,
    displayName: string,
    numberOfReviews: {
      total: number,
      oneStar: number,
      twoStars: number,
      threeStars: number,
      fourStars: number,
      fiveStars: number
      },
    websiteUrl: string,
    identifyingName: string
  },
  businessEntity: {
    stars: number,
    trustScore: number,
    displayName: string,
    numberOfReviews: {
      total: number,
      oneStar: number,
      twoStars: number,
      threeStars: number,
      fourStars: number,
      fiveStars: number
      },
    websiteUrl: string,
    identifyingName: string
  },
  reviews: TpReviews[],
  starsString: string
}

const TrustPilotComponent = () => {
  let [stars, setStars] = useState(5);
  let [data, setData] = useState<TpData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      let key = '54ad5defc6454f065c28af8b';
      let id = '5c2c7ada0ea8e10001a3ad57';
      let lang = 'en';
      let data = await fetch(`https://widget.trustpilot.com/trustbox-data/${key}?businessUnitId=${id}&locale=en-US&reviewLanguages=${lang}&reviewStars=${stars}&reviewsPerPage=15`);
      let json = await data.json();
      console.log(json);
      
      setData(json);
    }

    fetchData()
  }, [stars])
  return (
    <div style={{height: 'auto', maxWidth: '1440px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px 0'}}>
      {data && <TrustpilotSummary data={data} />}
      {data && <TrustpilotDetails data={data.reviews} />}
    </div>
  )
}

export default TrustPilotComponent;