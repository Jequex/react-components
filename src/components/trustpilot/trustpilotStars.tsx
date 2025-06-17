import { SiTrustpilot } from "react-icons/si";
import styled from "styled-components";

const TPDiv = styled.div({
  padding: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 1px'
})

const TPStarsGroup = styled.div({
  display: 'flex'
})

export const TrustPilotStar = ({id, totalRating, size, radius}: {id: number, totalRating: number, size?: number, radius?: boolean}) => {
  const backgroundColor = ['#ff3722', '#ff8622', '#ffce00', '#73cf11', '#00b67a'];
  const defaultBackgroundColor = '#dcdce6';
  const selectedBackgroundColor = Math.ceil(totalRating) >= id 
  ? backgroundColor[Math.ceil(totalRating) -  1] 
  : defaultBackgroundColor;
  const percentage = totalRating < id ? ((1 - (id - totalRating)) * 100) + '%' : '100%'

  return (
    <TPDiv style={{backgroundImage: `linear-gradient(
        to right, 
        ${selectedBackgroundColor} 0%, 
        ${selectedBackgroundColor} ${percentage}, 
        ${defaultBackgroundColor} ${percentage}, 
        ${defaultBackgroundColor} 100%
      )`,
      height: `${size || 24}px`,
      width: `${size || 24}px`,
      borderRadius: `${radius ? '2px' : 'none'}`
    }}>
      <SiTrustpilot color="white" size={size || '24'}/>
    </TPDiv>
  )
}

const TrustPilotStars = ({totalRating = 0, size, radius}: {totalRating?: number, size?: number, radius?: boolean}) => {
  return (
    <TPStarsGroup >
      <TrustPilotStar id={1} totalRating={totalRating} size={size} radius={radius} />
      <TrustPilotStar id={2} totalRating={totalRating} size={size} radius={radius} />
      <TrustPilotStar id={3} totalRating={totalRating} size={size} radius={radius} />
      <TrustPilotStar id={4} totalRating={totalRating} size={size} radius={radius} />
      <TrustPilotStar id={5} totalRating={totalRating} size={size} radius={radius} />
    </TPStarsGroup>
  )
}

export default TrustPilotStars;