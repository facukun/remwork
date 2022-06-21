import './FiltersCarousel.css';
import { ButtonFilterToClose } from '../Buttons/Buttons';
import { icons } from '../../constants/icons/index';
import { useState } from 'react';

function FiltersCarousel() {

  // const [positionX, setPositionX] = useState(0);
  // const [leftButtonDisplay, setLeftButtonDisplay] = useState(none);
  // const [rightButtonDisplay, setRightButtonDisplay] = useState(none);

  // let maxScroll = 'filters-container'.offsetWidth - 'filters'.offsetWidth;

  // const changePositionX = (val) => {

  //   setPositionX(positionX + (val * 320));

  //   if (positionX >= 0) {
  //     setPositionX(0);
  //     setLeftButtonDisplay(none);
  //   } else {
  //     setLeftButtonDisplay(unset)
  //   }

  //   if (positionX <= maxScroll) {
  //     setPositionX(maxScroll);
  //     setRightButtonDisplay(none)
  //   } else {
  //     setRightButtonDisplay(unset)
  //   }

  //   'filters'.style.left = positionX + 'px';

  // }

  return (

    <div className='filters-carousel'>

      <div className='filter-icon-container'>
        <img src={icons.filter} />
      </div>

      <div className='bell-icon-container'>
        <img src={icons.bell} />
      </div>

      <button
        className='button-move button-move-left'
      // onClick={changePositionX(1)}
      >
        <img src={icons.arrow} />
      </button>

      <button
        className='button-move button-move-right'
      // onClick={changePositionX(-1)}
      >
        <img src={icons.arrow} />
      </button>

      <div className='filters-to-close-container'>
        <ButtonFilterToClose>Engineer</ButtonFilterToClose>
        <ButtonFilterToClose>HTML</ButtonFilterToClose>
        <ButtonFilterToClose>CSS</ButtonFilterToClose>
        <ButtonFilterToClose>JavaScript</ButtonFilterToClose>
      </div>
    </div>
  )
}


export default FiltersCarousel;