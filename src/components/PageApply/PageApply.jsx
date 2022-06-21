import './PageApply.css';
import { images } from '../../constants/images/index'

const PageApply = (props) => {
  return (
    <div className='apply'>
      <p className='apply__text'>Aplicar para</p>
      <p className='apply__position-name'>{props.positionName}</p>
      <div className='apply__container'>
        <img src={props.companyLogo}
          className='apply__container__company-logo' />
        <h2 className='apply__container__company-name'>{props.companyName}</h2>
        <button className='button-tertiary apply__container__button'>Ver oferta</button>
      </div>
      <div className='apply__form-container'>
        <div className='apply__form-sub-container'>
          <form>
            <label>Nombre</label>
            <input></input>
            <label>Apellido</label>
            <input></input>
            <label>E-mail</label>
            <input></input>
            <label>Teléfono</label>
            <input></input>
            <label>Lugar de residencia</label>
            <input></input>
            <label>¿Por qué deseas aplicar para este puesto?</label>
            <input></input>
            <label>Cuéntanos sobre algo que hayas desarrollado</label>
            <input></input>
            <label>Sube tu currículum en formato PDF</label>
            <input></input>
            <button className='button-primary'>ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PageApply;