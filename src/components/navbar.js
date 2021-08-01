import React, { useState } from "react";

//TODO change this to be tabs instead of the kinda ugly navbar thing

const Navbar = () => {
  return (
    <div className="nav">
      <Tabs>
        <Tab label="Home" to="greeter"/>
        <Tab label="Projects" to="projectSegment" />
        <Tab label="Blog" to="articleSegment" />
        <Tab label="About" to="about" />
      </Tabs>
    </div>
  );
};

const Tabs = (props) => {

  const [activeTab, changeTab] = useState(props.children[0].label)
    let buttons = [];

    return (
      <div className="tab-buttons">
        {React.Children.map(props.children, child =>{
          buttons.push({'label': child.props.label, 'to': child.props.to})
        })}

        <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab}/>
      </div>
    );
}

const TabButtons = ({changeTab, buttons, activeTab}) =>{

  return(
    <div className="tab-buttons">
    {buttons.map(button =>{
      return (
        <div  className="divtag" className={`divtag ${button.label === activeTab? 'active': ''}`}>
        <a href={`#${button.to}`} className={button.label === activeTab? 'active': ''} className="button" onClick={()=>changeTab(button.label)}>{button.label}</a>
</div>
      )
      })}
    </div>
  )
}

const Tab = props => {
  return (
      <React.Fragment>
        {props.children}
      </React.Fragment>
  )
}


export default Navbar;
