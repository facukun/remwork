import './PageOfferMaker.css';
import { images } from '../../constants/images/index'

const PageOfferMaker = () => {
  return (
    <div className='offer-maker'>
      <p className='offer-maker__title'>Publicar una oferta</p>
      <p className='offer-maker__form-title'>Detalles del puesto</p>
      <div className='offer-maker__form-container'>
        <div className='offer-maker__form-sub-container'>
          <form>
            <label>Nombre del puesto</label>
            <input></input>
            <label>Seniority requerido</label>
            <input></input>
            <label>Disponibilidad requerida</label>
            <input></input>
            <label>Tecnologías requeridas</label>
            <input></input>
            <label>Ubicación requerida</label>
            <input></input>
            <label>Salario</label>
            <input></input>
            <label>Al hacer click en "APLICAR":</label>
            <input></input>
            <label>URL</label>
            <input></input>
            <label>Descripción detallada del puesto:</label>
            <input></input>
          </form>
        </div>
      </div>
      <p className='offer-maker__form-title'>Configuración de la publicación</p>
      <div className='offer-maker__form-container'>
        <div className='offer-maker__form-sub-container'>
          <form>
            <label>Duración</label>
            <input></input>
            <label>Tipo de publicación</label>
            <input></input>
            <label>Método de pago</label>
            <input></input>
            <button className='button-primary'>PAGAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PageOfferMaker;