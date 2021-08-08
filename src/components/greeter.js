import React from 'react'
import Typewriter from 'typewriter-effect'

const Greeter = () => {
  return (
    <div className="segment" id="greeter">
      <Typewriter
        options={{
          delay: 70,
          cursor: "_"
        }}
        onInit={(typewriter) => {
          typewriter.typeString('Hi!')
                    .pauseFor(700)
                    .typeString(' My name is Alex.')
                    .start();
  }}
      />
    </div>
  )
}

export default Greeter
