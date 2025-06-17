import { SiTrustpilot } from "react-icons/si"
import TrustPilotStars from "./trustpilotStars"
import { TpData } from "./trustpilot";
import Media from "react-media";

const TrustpilotSummary = ({data}: {data: TpData}) => {
  return (
      <div style={{height: '120px', width: '100%', backgroundColor: '#F6F6F6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
        <Media queries={{
          small: "(max-width: 320px)",
          medium: "(min-width: 321px) and (max-width: 425px)",
          large: "(min-width: 426px) and (max-width: 768px)",
          xl: "(min-width: 769px) and (max-width: 1024px)",
          xxl: "(min-width: 1024px)"
        }}>
          {matches => (
            <div style={{
              width: matches.small ? '90%' : matches.medium ? '70%' : matches.large ? '90%' : matches.xl ? '70%' : '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between'
            }}>
            <Media query="(min-width: 600px)">
              <div style={{fontWeight: '600'}}>{data.starsString}</div>
            </Media>
            <div>
              <TrustPilotStars totalRating={data.businessEntity.trustScore} />
            </div>
            <Media query="(min-width: 600px)">
              <div>{data.businessEntity.trustScore} out of 5 based on {data.businessEntity.numberOfReviews.total.toLocaleString()} reviews</div>
            </Media>
            <div style={{fontWeight: '500'}}><SiTrustpilot color="#00b67a" size={20}/> Trustpilot</div>
          </div>)}
      </Media>
      </div>
  )
}

export default TrustpilotSummary;