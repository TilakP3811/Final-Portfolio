import React from 'react';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div style={{cursor: 'pointer'}}>
          <a style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} href="https://www.linkedin.com/in/tilak-patidar-865841214/" target="_blank" rel="noreferrer">
            <FaLinkedinIn/>
          </a>
        </div>
        <div style={{cursor: 'pointer'}}>
          <a style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} href="https://www.instagram.com/tilak.patidar.25/" target="_blank" rel="noreferrer">
            <BsInstagram/>
          </a>
        </div>
        <div style={{cursor: 'pointer'}}>
          <a style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}} href="https://github.com/TilakP3811" target="_blank" rel="noreferrer">
            <BsGithub/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia