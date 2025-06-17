import styled from "styled-components";
import SwiperComponent from "../swiper/Swiper"
import { TpData } from "./trustpilot";
import TrustPilotStars from "./trustpilotStars";

const Div = styled.div({
  width: '80%',
  height: '324px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
  backgroundColor: '#F6F6F6',
  borderRadius: '8px'
})

const TrustpilotDetails = ({data}: {data: TpData["reviews"]}) => {
  return (
    <SwiperComponent>
      {data.map((tp) => 
        <Div>
          <div style={{color: '#FE7A1F', fontSize: '18px', fontWeight: '600'}}>{tp.title}</div>
          <TrustPilotStars totalRating={tp.stars} size={16} radius={true} />
          <div style={{
            fontSize: '16px', 
            fontWeight: '400', 
            color: '#333333', 
            textAlign: 'justify', 
            overflowY: 'auto',
            maxHeight: '50%'
          }}
            >
              {tp.text}
            </div>
          <div style={{fontSize: '18px', fontWeight: '600', color: '#333333'}}>{tp.consumer.displayName}</div>
          <div style={{fontSize: '16px', fontWeight: '400', color: '#666666'}}>{tp.createdAt.split('T')[0]}</div>
        </Div>
      )}
    </SwiperComponent>
  )
}

export default TrustpilotDetails;