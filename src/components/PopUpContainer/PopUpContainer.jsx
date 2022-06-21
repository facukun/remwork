import './PopUpContainer.css'
import { icons } from '../../constants/icons/index';

const PopUpContainer = (props) => {
  return (
    <div className='pop-up-background'>
      <div className='pop-up-container'>
        <div className='close-container'>
          <div className='close-container-circle'>
            <img src={icons.close} />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default PopUpContainer;