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
        hideWhenDoneDelay: 1000}}   className="greeterText">
        <Typist.Delay ms={300}/>
        <span>Hi,</span>
        <Typist.Delay ms={700}/>
        <span> my name is Alex.</span>
        <Typist.Delay ms={900}/>
        <span> You can learn more about me <a href="#about">here</a>, about my skills <a href="#about2">here</a>, and find me elsewhere <a href="#about3">here</a>.</span>
      </Typist>
    </div>
  )
}

export default Greeter
