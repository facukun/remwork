import '../PopUpContainer/PopUpContainer.css';
import './PopUpOffer.css'
import { icons } from '../../constants/icons/index';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import ButtonPrimary, { ButtonSecondary, ButtonTertiary } from '../Buttons/Buttons';

const PopUpOffer = (props) => {
  return (
    <>
      <PopUpContainer>
        <div className='offer-container'>

          <div className='offer-head'>

            <img className='offer-head__company-logo' src={props.companyLogo} />

            <div className='offer-head__container'>
              <div className='offer-head__container__company'>
                <p>{props.companyName}</p>
                <div className='offer-head__container__company__sub-container'>
                  <img
                    className={props.verified ? 'offer-head__container__company__sub-container__verified' : 'offer-head__container__company__sub-container__not-verified'}
                    src={icons.verified}
                  />
                  <p className={props.verified ? 'offer-head__container__company__sub-container__verified-text' : 'offer-head__container__company__sub-container__not-verified-text'}>
                    Cuenta verificada
                  </p>
                </div>
                <div className='offer-head__container__company__sub-container'>
                  <img
                    className={props.highlighted ? 'offer-head__container__company__sub-container__highlighted' : 'offer-head__container__company__sub-container__not-highlighted'}
                    src={icons.star}
                  />
                  <p className={props.highlighted ? 'offer-head__container__company__sub-container__highlighted-text' : 'offer-head__container__company__sub-container__not-highlighted-text'}>
                    Publicación destacada
                  </p>
                </div>
              </div>
              <ButtonTertiary>Sobre nosotros</ButtonTertiary>
            </div>

            <div className='offer-head__buttons-container'>
              <ButtonSecondary>COMPARTIR</ButtonSecondary>
              <div className='buttons-separator' />
              <ButtonPrimary>APLICAR</ButtonPrimary>
            </div>

          </div>

          <div className='offer-body'>
            <div className='offer-body__scroll-container'>
              <h3>{props.positionName}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates sapiente ullam accusantium, adipisci esse reprehenderit eius labore veritatis
                provident? Quia, veniam. Iure, repudiandae! Quisquam, voluptates ratione eius facere facilis
                provident?
              </p>
            </div>
            <div className='offer-body__info'>
              <div className='offer-body__info__details'>
                <img
                  className='offer-body__info__details__location-icon'
                  src={icons.location} />
                <p >{props.location}</p>
                <p className='offer-body__info__details__italic'>Hace {props.postAge}</p>
                <img className='offer-body__info__details__eye-icon'
                  src={icons.eye} />
                <p className='offer-body__info__details__italic'>{props.views}</p>
              </div>
              <p className='offer-body__info__salary-range'>Salario: {props.currency} {props.minPayment} - {props.maxPayment} / año</p>
              <div className='offer-body__info__buttons-container'>
                <ButtonSecondary>COMPARTIR</ButtonSecondary>
                <div className='buttons-separator' />
                <ButtonPrimary>APLICAR</ButtonPrimary>
              </div>
            </div>

          </div>

        </div>
      </PopUpContainer>
    </>
  )
}

export default PopUpOffer;