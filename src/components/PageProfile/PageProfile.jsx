import './PageProfile.css';
import { images } from '../../constants/images/index'
import { icons } from '../../constants/icons/index'
import { PopUpOfferContent } from '../PopUpOffer/PopUpOffer';
import OfferCard from '../OfferCard/OfferCard'
import ButtonPrimary from '../Buttons/Buttons';

const PageProfile = (props) => {
  return (
    <div className='page-profile'>

      <div className='profile-config'>

      </div>

      <div className='profile-title'>
        <img
          src={props.companyLogo}
          className='profile-title__logo' />
        <p className='profile-title__company-name'>{props.companyName}</p>
        <img
          className={props.verified ? 'profile-title__verified' : 'profile-title__not-verified'}
          src={icons.verified}
        />
      </div>

      <div className='profile-about-us'>
        <p className='profile-about-us__title'>Sobre nosotros</p>
        <p className='profile-about-us__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nostrum deserunt error cumque libero omnis animi maiores iure magni voluptas id tenetur, sit nobis, accusamus ipsum quibusdam, laboriosam tempora nesciunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aut. Delectus, laudantium provident hic earum quibusdam at quia ut possimus eligendi in, incidunt sit inventore consequatur voluptatibus, ad accusantium praesentium!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia harum consequuntur consectetur nobis maxime, itaque totam placeat voluptatem temporibus optio iure saepe perferendis sequi et pariatur. Explicabo, aliquid perferendis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil cumque enim ducimus deleniti voluptas nobis, voluptates explicabo voluptatibus inventore facere quam, numquam eum nemo illo molestias illum? Dignissimos, impedit?</p>
      </div>

      <div className='profile-offers'>
        <p className='profile-offers__title'>Nuestras ofertas</p>
        <ButtonPrimary>+ Publicar nueva oferta</ButtonPrimary>
        <OfferCard
          highlighted={true}
          companyLogo={images.logoTelegram}
          companyName='Telegram'
          verified={true}
          positionName='Senior Full Stack Developer'
          tecnologies='Engineer, HTML, CSS, JavaScript, Engineer, HTML, CSS.'
          postAge='22 m'
          location='Buenos Aires'
          currency='AR'
          minPayment='100K'
          maxPayment='200K'
        />
      </div>
    </div>
  )
}

export default PageProfile;