import React from 'react';
import 'react-circular-progressbar/dist/styles.css'
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

import bannerImg from '../../assets/banner.png'
import '../Welcome/styles.css'

function Welcome() {
  return (
   <div className="container">        
    <img src={bannerImg} alt="" className="banner"/>
      <h2 className="title">Staying focused at work isn't easy!</h2>
      
      <Link to="/Timer"><button><MdChevronRight size={32} /></button></Link>
    </div>
  );
}

export default Welcome;
