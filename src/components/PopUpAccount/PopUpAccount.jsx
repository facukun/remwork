import '../PopUpContainer/PopUpContainer.css';
import './PopUpAccount.css'
import { images } from '../../constants/images/index'
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import ButtonPrimary, { ButtonSecondary } from '../Buttons/Buttons';
import { icons } from '../../constants/icons';


const PopUpAccount = (props) => {
  return (
    <>
      <PopUpContainer>

        <div className='account-container'>
          <img src={images.logIn}
            className='account-image'
          />
          <div className='account__sub-container'>
            {props.children}
          </div>
        </div>

      </PopUpContainer>
    </>
  )
}

const PopUpLogIn = () => {
  return (
    <>
      <PopUpAccount>

        <h3 className='pop-up-title'>Iniciar sesión</h3>
        <form>
          <label>E-mail</label>
          <input></input>
          <label>Contraseña</label>
          <input></input>
          <a className='account__forgot-password'>Olvidé mi contraseña</a>
          <div className='account__buttons-container'>
            <ButtonPrimary>INICIAR</ButtonPrimary>
            <div className='buttons-separator' />
            <ButtonSecondary>CREAR CUENTA</ButtonSecondary>
          </div>
        </form>

      </PopUpAccount>
    </>
  )
}

const PopUpSignUp = () => {
  return (
    <>
      <PopUpAccount>

        <h3 className='pop-up-title'>¿Eres empresa?<br />Crea una cuenta</h3>

        <form>
          <label>E-mail</label>
          <input></input>
          <label>Contraseña</label>
          <input></input>
          <label>Repite la contraseña</label>
          <input></input>

          <div className='account__buttons-container'>
            <ButtonPrimary>CREAR</ButtonPrimary>
            <div className='buttons-separator' />
            <ButtonSecondary>ATRÁS</ButtonSecondary>
          </div>
        </form>

      </PopUpAccount>
    </>
  )
}

const PopUpEmailWarning = () => {
  return (
    <>
      <PopUpAccount>

        <p>Para que tu cuenta pueda ser verificada, utiliza un e-mail corporativo.</p>
        <img
          className='account__sub-container-icon'
          src={icons.verified} />
        <p className='account__sub-container-aclaration'>(Evita usar extensiones como @gmail, @hotmail, @outlook, @yahoo, etc.)</p>

        <div className='account__buttons-container'>
          <ButtonPrimary>CAMBIAR E-MAIL</ButtonPrimary>
          <div className='buttons-separator' />
          <ButtonSecondary>OMITIR Y CREAR CUENTA</ButtonSecondary>
        </div>

      </PopUpAccount>
    </>
  )
}

const PopUpEmailConfirmed = () => {
  return (
    <>
      <PopUpContainer>
        <div className='sub-container'>
          <h3 className='pop-up-title'>Tu correo ha sido confirmado</h3>
          <p className='e-mail-confirmed-text'>Ahora completa con la información de tu empresa para poder realizar publicaciones.</p>
          <button className='button-primary'>¡VAMOS!</button>
        </div>
      </PopUpContainer>
    </>
  )
}

export default PopUpLogIn;
export { PopUpSignUp, PopUpEmailWarning, PopUpEmailConfirmed };