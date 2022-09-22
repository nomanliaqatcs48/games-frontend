import React from 'react'
import Who from '../Who'
import Why from '../Why';
import WhoImage from "../../Assets/images/Who.svg";
import WhyImage from "../../Assets/images/Why.svg";


const WhoAndWhy = () => {
  return (
    <>
    <Who title={"Who we are?"} description={"Our mission is to bridge the communication gap among teams and clients distributed around the globe with an all-in-one platform. We prioritize security, transparency, and accountability above all else."} image={WhoImage}/>
    <Why image={WhyImage} title={"Why choose Invochat?"}/>
    </>
  )
}

export default WhoAndWhy