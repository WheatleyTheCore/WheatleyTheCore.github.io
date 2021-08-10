import React from 'react'
import Typist from 'react-typist'
import '../../node_modules/react-typist/dist/Typist.css'

const Greeter = () => {
  return (
    <div className="segment" id="greeter">
      <Typist cursor={{
        show: true,
        blink: true,
        element: '_',
        hideWhenDone: false,
        hideWhenDoneDelay: 1000}} avgTypingDelay={50} className="greeterText">
        <Typist.Delay ms={300}/>
        <span>Hi,</span>
        <Typist.Delay ms={500}/>
        <span> my name is Alex.</span>
        <Typist.Delay ms={600}/>
        <span> To learn more about me you can visit the <a href="#about">summary section</a>, the <a href="#about2">skills section</a>, and <a href="#about3">check me out elsewhere</a>.</span>
      </Typist>
    </div>
  )
}

export default Greeter
