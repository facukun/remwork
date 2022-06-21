import '../PopUpContainer/PopUpContainer.css';
import { icons } from '../../constants/icons/index';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import ButtonPrimary, { ButtonFilter } from '../Buttons/Buttons';

const PopUpNotifications = () => {
  return (
    <>
      <PopUpContainer>
        <div className='sub-container'>
          <h3>Notificarme sobre ofertas que coincidan con:</h3>
          <div className='scroll-container'>
            <h4>Seniority</h4>
            <div className='filters-container'>
              <ButtonFilter>Junior</ButtonFilter>
              <ButtonFilter>Semi Senior</ButtonFilter>
              <ButtonFilter>Senior</ButtonFilter>
              <ButtonFilter>Engineer</ButtonFilter>
            </div>
            <h4>Tecnologías</h4>
            <div className='filters-container'>
              <ButtonFilter>HTML</ButtonFilter>
              <ButtonFilter>CSS</ButtonFilter>
              <ButtonFilter>JavaScript</ButtonFilter>
              <ButtonFilter>React</ButtonFilter>
              <ButtonFilter>React Native</ButtonFilter>
              <ButtonFilter>React JS</ButtonFilter>
              <ButtonFilter>Java</ButtonFilter>
              <ButtonFilter>WordPress</ButtonFilter>
              <ButtonFilter>Node JS</ButtonFilter>
              <ButtonFilter>Figma</ButtonFilter>
              <ButtonFilter>Adobe XD</ButtonFilter>
              <ButtonFilter>Sketch</ButtonFilter>
              <ButtonFilter>Angular</ButtonFilter>
              <ButtonFilter>Swift</ButtonFilter>
            </div>
          </div>
          <form action=''>
            <label>E-mail</label>
            <input
              type='email'
              autoComplete='email'
              className='input-email'
              placeholder='ejemplo@correo.com'
              label></input>
            <div className='buttons-container'>
              <ButtonPrimary>RECIBIR NOTIFICACIONES</ButtonPrimary>
            </div>
          </form>
        </div>
      </PopUpContainer>
    </>
  )
}

export default PopUpNotifications;