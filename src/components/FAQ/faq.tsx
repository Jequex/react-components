import styled from "styled-components";
import Collapsible from "../Collapsible/collapsible";
import Media from "react-media";

const data = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much is a transfer from Las Vegas airport to The Strip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a shuttle service at Las Vegas Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
      }
    }
  ]
}

const FaqTitle = styled.div({
  width: '100%',
  marginBottom: '44px',
  textAlign: 'left',
  fontSize: '48px',
  fontWeight: '700'
})

const FAQDIv = styled.div({
  width: '100%',
  marginBottom: '100px',
})


const FAQ = ({title}: {title: string}) => {
  return <FAQDIv>
    <Media queries={{
      small: "(max-width: 320px)",
      medium: "(min-width: 321px) and (max-width: 425px)",
      large: "(min-width: 426px)",
    }}>
      {matches => (<FaqTitle style={{fontSize: matches.large ? '48px' : '30px'}}>{title}</FaqTitle>)}
    </Media>
    {data.mainEntity.map((entity, index) => 
      <Collapsible title={entity.name} content={entity.acceptedAnswer.text} key={index} />
    )}
  </FAQDIv>
}

export default FAQ;