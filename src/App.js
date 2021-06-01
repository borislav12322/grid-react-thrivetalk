import './App.scss';
import Header from './header/Header';
import Description from './components/description/Description';
import About from './components/about/About';
import Card from './components/card/Card';
import TextCard from './components/textCard/TextCard';
import MoreInfo from './components/moreInfo/MoreInfo';
import Contacts from './components/contacts/Contacts';
import Information from './components/information/Information';
import Footer from './footer/Footer';

// Images
import SmoothieBackground from './assets/img/smothieBackground.svg';
import SmallCards from "./components/smallCards/SmallCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />
        <SmallCards/>

      <div className="largeCards">
        <Card cardText='Physical Health'
          styleWrapper={{ backgroundColor: '#22356F', padding: '126px 219px 282px 104px' }} />
        <Card cardText='Mental Health'
          styleWrapper={{ backgroundColor: '#0052C1', padding: '126px 219px 282px 104px' }} />
        <Card cardText='Nutrition'
          styleWrapper={{

            backgroundImage: `url(${SmoothieBackground})`,
            backgroundRepeat: 'no-repeat',
            backgroundPositon: 'center',
            backgroundSize: 'cover',
            padding: '126px 219px 282px 104px'
          }} />
        <Card cardText='Gymnastics'
          styleWrapper={{

            backgroundColor: '#62D0DF',
            padding: '126px 219px 282px 104px'
          }} />
        <Card cardText='Crossfit'
          styleWrapper={{

            backgroundColor: '#DEE1FF',
            padding: '126px 219px 282px 104px'
          }} />
        <Card cardText='Aerobics'
          styleWrapper={{

            backgroundColor: '#8F00FF',
            padding: '126px 219px 282px 104px'
          }} />
      </div>
      <div className="textCards">
        <TextCard
          titleText='Nutritional Plans'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
        <TextCard
          titleText='Weight Loss'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
        <TextCard
          titleText='Mental Peace'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
        <TextCard
          titleText='Home Training'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
        <TextCard
          titleText='Work/Life Balance'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
        <TextCard
          titleText='Cardio'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
        />
      </div>
      <MoreInfo />
      <Contacts />
      <Information />
      <Footer year='2021' />
    </div>
  );
}
export default App;
