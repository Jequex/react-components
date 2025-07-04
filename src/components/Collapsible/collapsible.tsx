import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

const CollapsibleDiv = styled.div({
  maxWidth: '100%',
  marginBottom: '16px',
  padding: '20px',
  backgroundColor: '#F6F6F6',
  cursor: 'pointer',
  borderRadius: '8px'
})

const CollapsibleButton = styled.button({
  backgroundColor: '#F6F6F6',
  width: '100%',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'left',
  fontSize: '18px',
  fontWeight: '600',
  padding: 0,
  margin: 0
})

const Content = styled.div({
  paddingLeft: '20px',
  backgroundColor: '#F6F6F6',
  textAlign: 'justify'
})


const Collapsible = ({icon, content, title}: {icon?: string, content: string, title: string}) => {
  const [isOpen, setIsOpen] = useState(true)

  return <CollapsibleDiv onClick={() => setIsOpen(!isOpen)}>
    <CollapsibleButton>
      <div style={{display: 'flex', alignItems: 'center'}}>
        {icon ? icon : <GoDotFill color="#FE7A1F" size={24} style={{marginRight: '5px'}}/>}
        <div>{ title }</div>
      </div>
      <div>{isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}</div>
    </CollapsibleButton>
    <Content style={{display: isOpen ? 'none' : 'flex'}}>
      <p dangerouslySetInnerHTML={{ __html: content}}></p>
    </Content>
  </CollapsibleDiv>
}

export default Collapsible;