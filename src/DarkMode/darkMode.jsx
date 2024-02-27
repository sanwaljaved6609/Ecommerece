import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function DarkMode() {

    const [myStyle, setMyStyle] = useState({
      color: "black",
      backgroundColor: "white"  
    });

    const [btn, setBtn] = useState("Enable Dark Mode");

    const toggleBtn = ()=>{
        if(myStyle.color==="white"){
            setMyStyle(
                {
                    color: "black",
                    backgroundColor: "white"
                }
            )
            setBtn("Enable Dark Mode")
        }
        else{
            setMyStyle(
                    {
                        color: "white",
                        backgroundColor: "black"
                    }
            )
            setBtn("Enable Light Mode")
        }
    }

  return (
    <div className='container'>


<Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >Accordion Item #1</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body style={myStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Button onClick={toggleBtn} variant="primary">{btn}</Button>{' '}
      
     </div> 
  )
}

export default DarkMode
