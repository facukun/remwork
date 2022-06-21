import './OfferCard.css';
import { icons } from '../../constants/icons/index'

function OfferCard(props) {
  return (
    <div className='card-container'>
      <div className={props.highlighted ? 'card-highlighted' : 'card-not-highlighted'}>
        <img src={icons.star} />
      </div>
      <div className='card-head'>
        <img
          className='card-head__company-logo'
          src={props.companyLogo}
        />
        <div className='card-head__container'>
          <div className='card-head__container__company'>
            <p>{props.companyName}</p>
            <img
              className={props.verified ? 'card-head__container__company__verified' : 'card-head__container__company__not-verified'}
              src={icons.verified}
            />
          </div>
          <p className='card-head__container__position-name'>{props.positionName}</p>
        </div>
      </div>
      <div className='card-body'>
        <p className='card-body__position-name'>{props.positionName}</p>
        <p className='card-body__tecnologies'>{props.tecnologies}</p>
      </div>
      <div className='card-separator' />
      <div className='card-details'>
        <p className='card-details__post-age'>Hace {props.postAge}</p>
        <div className='card-details__location'>
          <p >{props.location}</p>
          <img
            src={icons.location} />
        </div>
      </div>
      <div className='card-foot'>
        <p className='card-foot__salary-range'>{props.currency} {props.minPayment} - {props.maxPayment}</p>
        <img
          className='card-foot__share-icon'
          src={icons.share} />
        <button className='card-foot__apply-button'>APLICAR</button>
      </div>
    </div>
  );
}

export default OfferCard;