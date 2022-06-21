import './Buttons.css'
import { icons } from '../../constants/icons/index';

const ButtonPrimary = (props) => {
  return (
    <button className="button-primary">{props.children}</button>
  )
}

const ButtonSecondary = (props) => {
  return (
    <button className="button-secondary">{props.children}</button>
  )
}

const ButtonTertiary = (props) => {
  return (
    <button className="button-tertiary">{props.children}</button>
  )
}

const ButtonFilter = (props) => {
  return (
    <div className='button-filter'>
      <p>{props.children}</p>
    </div>
  )
}

const ButtonFilterToClose = (props) => {
  return (
    <div className='button-filter-to-close'>
        <p>{props.children}</p>
        <img src={icons.close}/>
    </div>
  )
}


export default ButtonPrimary;
export { ButtonSecondary, ButtonTertiary, ButtonFilter, ButtonFilterToClose };
