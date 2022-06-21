import './App.css';
import { images } from './constants/images/index'
import OfferCard from './components/OfferCard/OfferCard.jsx'
import FiltersCarousel from './components/FiltersCarousel/FiltersCarousel.jsx'
import PopUpFilters from './components/PopUpFilters/PopUpFilters';
import PopUpNotifications from './components/PopUpNotifications/PopUpNotifications';
import PopUpOffer from './components/PopUpOffer/PopUpOffer';
import PopUpLogIn, { PopUpSignUp, PopUpEmailWarning, PopUpEmailConfirmed } from './components/PopUpAccount/PopUpAccount';
import PageApply from './components/PageApply/PageApply';
import PageOfferMaker from './components/PageOfferMaker/PageOfferMaker';
import PageProfile from './components/PageProfile/PageProfile';


function App() {
  return (
    <div className="app">
      <div className='max-width-container'>
        <PageProfile
          companyLogo={images.logoTelegram}
          companyName='Telegram'
          verified={true}
        />
        <p><br></br></p>
        <PageOfferMaker />
        <p><br></br></p>
        <PageApply
          positionName='Senior Full Stack Developer'
          companyLogo={images.logoTelegram}
          companyName='Telegram'
        />
        <p><br></br></p>
        <PopUpEmailConfirmed />
        <p><br></br></p>
        <PopUpEmailWarning />
        <p><br></br></p>
        <PopUpLogIn />
        <p><br></br></p>
        <PopUpSignUp />
        <p><br></br></p>
        <PopUpOffer
          companyLogo={images.logoTelegram}
          companyName='Telegram'
          verified={true}
          highlighted={true}
          positionName='Senior Full Stack Developer'
          location='Buenos Aires, Argentina'
          postAge='22 m'
          views='250'
          currency='AR'
          minPayment='100K'
          maxPayment='200K'
        />
        <p><br></br></p>
        <PopUpNotifications />
        <p><br></br></p>
        <PopUpFilters />
        <p><br></br></p>
        <FiltersCarousel />
        <p><br></br></p>
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
  );
}

export default App;
