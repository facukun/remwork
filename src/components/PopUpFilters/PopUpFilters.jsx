import '../PopUpContainer/PopUpContainer.css';
import { icons } from '../../constants/icons/index';
import PopUpContainer from '../PopUpContainer/PopUpContainer';
import ButtonPrimary, { ButtonSecondary, ButtonFilter } from '../Buttons/Buttons';

const PopUpFilters = () => {
  return (
    <>
      <PopUpContainer>
        <div className='sub-container'>
          <h3>Filtros</h3>
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
          <div className='buttons-container'>
            <ButtonSecondary>CANCELAR</ButtonSecondary>
            <div className='buttons-separator' />
            <ButtonPrimary>APLICAR</ButtonPrimary>
          </div>
        </div>
      </PopUpContainer>
    </>
  )
}

export default PopUpFilters;