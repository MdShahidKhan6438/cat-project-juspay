import React from 'react';
import {  runAnimation, runSingleCodeBlockAnimation } from '../../constants/functions';
import { StringToCodeMap, applyTransformations } from '../../constants';
import IconFlag from '../Event/IconFlag';

function easeLinear(t, b, c, d) {
  return (c * t) / d + b
}

let InitialStyles;

const PlayIcon = () => {
  return (
    <div className='p-2 flex bg-green-400 rounded-3xl'>
      <svg fill="#FFFFFF" height="12px" width="12px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 58.752 58.752" space="preserve">
        <g>
          <path d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
		c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
		c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
		c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
		c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
		C49.663,29.47,49.611,29.561,49.524,29.612z"/>
        </g>
      </svg>
    </div>
  )
}

export default function Run({
  codeElements,
  selectedSpirit,
  codeBlock,
  runPlayButton,
  playClicked,
  setCodeElements
}) {

  const onRunClick = () => {
    if (runPlayButton) {
      
      runSingleCodeBlockAnimation(codeBlock, selectedSpirit, playClicked, codeElements);
      return;
    } else {
      runAnimation({ selectedSpirit, codeElements, event: StringToCodeMap.WHENFLAG, playClicked , setCodeElements})
    }
  }

  return (
    <button className={`text-white ${runPlayButton ? null : 'mx-4'}`} onClick={onRunClick}>
     
        <PlayIcon />
     
    </button>
  )
}