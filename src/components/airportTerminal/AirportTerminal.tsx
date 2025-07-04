import styled from "styled-components";
import Collapsible from "../Collapsible/collapsible";
import { useState } from "react";
import { CiAirportSign1 } from "react-icons/ci";
import Media from "react-media";

const data = {
  "@context": "https://schema.org",
  "@type": "AirportTerminalPage",
  "mainEntity": [
    {
      "terminal": "Terminal 1",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 2",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 3",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 4",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 5",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 6",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 7",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    },
    {
      "terminal": "Terminal 8",
      "terminalDetails": [
        {
          "@type": "Question",
          "name": "How much is a transfer from Las Vegas airport to The Strip?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A transfer from Las Vegas airport to The Strip typically costs under $50 when booked with Elife Transfer, depending on the vehicle type and time of day."
          },
          "icon": ""
        },
        {
          "@type": "Question",
          "name": "Is there a shuttle service at Las Vegas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, <strong style='color: #FE7A1F'>Elife</strong> Transfer offers <em>a private and shared shuttle service at Las Vegas Airport with 24/7 availability and real-time flight tracking.</em>"
          },
          "icon": ""
        }
      ]
    }
  ]
}

const AirportTerminalTitle = styled.div({
  width: '100%',
  marginBottom: '16px',
  textAlign: 'left',
  fontWeight: '700'
})

const AirportTerminalSubTitle = styled.div({
  width: '100%',
  marginBottom: '44px',
  textAlign: 'left',
  fontSize: '24px',
  fontWeight: '600',
  color: '#999999'
})

const AirportTerminalDiv = styled.div({
  width: '100%',
  marginBottom: '200px',
  maxHeight: '586px'
})

const Terminal = styled.div({
  fontSize: '18px',
  fontWeight: '500',
  display: 'flex',
  alignItems: 'center',
})

const TerminalContainer = styled.div({
  marginBottom: '48px',
  cursor: 'pointer'
})

const TerminalList = ({selectedTerminal, selectTerminal}: {selectedTerminal: number, selectTerminal: (id: number) => void}) => {
  return <Media queries={{
      small: "(max-width: 425px)",
      large: "(min-width: 426px)",
    }}>
      {matches => (<div style={{display: "flex", flexDirection: matches.large ? "column" : "row", width: matches.large ? '170px' : '100%', overflowX: 'auto'}}>
      {data.mainEntity.map(
        (terminal, index) => 
          (<TerminalContainer style={{marginRight: matches.small ? '30px' : '0', marginBottom: matches.large ? selectedTerminal !== index ? '48px' : '30px' : selectedTerminal !== index ? '28px' : '16px'}} key={index}>
            <Terminal
            onClick={() => selectTerminal(index)}>
              <CiAirportSign1 style={{marginRight: '5px'}} />
              <div style={{fontWeight: selectedTerminal === index ? 600 : 500, width: matches.small ? '98px' : ''}}>{terminal.terminal}</div>
            </Terminal>
            {selectedTerminal === index && <hr color="#FE7A1F" style={{height: '4px', borderRadius: '8px'}}/>}
          </TerminalContainer>)
      )}
    </div>)}
  </Media>
}

const TerminalDetailsList = ({selectedTerminal}: {selectedTerminal: number}) => {
  return <div style={{display: "flex", flexDirection: "column", width: '100%',maxWidth: '949px'}}>
    <div style={{textAlign: 'left', fontSize: '18px', fontWeight: '600', marginBottom: '16px'}}>
      {data.mainEntity[selectedTerminal].terminal}
    </div>
    {data.mainEntity[selectedTerminal].terminalDetails.map((entity, index) => 
        <Collapsible title={entity.name} content={entity.acceptedAnswer.text} icon={entity.icon} key={index} />
      )}
  </div>
}


const AirportTerminal = () => {
  const [selectedTerminal, setSelectedTerminal] = useState(0);
  const selectTerminal = (id: number) => setSelectedTerminal(id)

  return <AirportTerminalDiv>
    <Media queries={{
      small: "(max-width: 425px)",
      large: "(min-width: 426px)",
    }}>
      {matches => (<AirportTerminalTitle style={{fontSize: matches.large ? '48px' : '30px'}}>Airport Terminal Information</AirportTerminalTitle>)}
    </Media>

    <Media queries={{
      small: "(max-width: 425px)",
      large: "(min-width: 426px)",
    }}>
      {matches => (<AirportTerminalSubTitle style={{fontSize: matches.large ? '24px' : '20px' }}>
        Las Vegas Airport has two main terminals serving domestic and international flights...
      </AirportTerminalSubTitle>)}
    </Media>

    <Media queries={{
      small: "(max-width: 425px)",
      large: "(min-width: 426px)",
    }}>
      {matches => (<div style={{display: "flex", flexDirection: matches.large ? 'row' : 'column'}}>
        <TerminalList selectedTerminal={selectedTerminal} selectTerminal={selectTerminal} />
        {matches.large && <div style={{width: '1px', backgroundColor: "#D9D9D9", margin: '0 50px 0 93px'}}></div>}
        {matches.small && <hr style={{backgroundColor: '#D9D9D9', height: '1px', width: '100%', marginBottom: '24px'}}/>}
        <TerminalDetailsList selectedTerminal={selectedTerminal} />
      </div>)}
    </Media>
  </AirportTerminalDiv>
}

export default AirportTerminal;