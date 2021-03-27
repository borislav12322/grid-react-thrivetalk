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

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />

      <Card cardText='Weight Lifting'
        styleWrapper={{ gridArea: '4/1/5/2', backgroundColor: '#FFE2DE', maxHeight: '360px', height: '100%' }} />
      <Card cardText='Running & Spinning'
        styleWrapper={{ gridArea: '4/2/5/5', backgroundColor: '#C4E769' }} />
      <Card cardText='Pumping Iron'
        styleWrapper={{ gridArea: '4/5/5/8', backgroundColor: '#62D0DF' }} />
      <Card cardText='Pumping Iron'
        styleWrapper={{ gridArea: '4/8/5/9', backgroundColor: '#0052C1' }} />


      <Card cardText='Physical Health'
        styleWrapper={{ gridArea: '5/1/6/3', backgroundColor: '#22356F' }} />
      <Card cardText='Mental Health'
        styleWrapper={{ gridArea: '5/3/6/7', backgroundColor: '#0052C1' }} />
      <Card cardText='Nutrition'
        styleWrapper={{
          gridArea: '5/7/6/9',
          backgroundImage: `url(${SmoothieBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundPositon: 'center',
          backgroundSize: 'cover'
        }} />
      <Card cardText='Gymnastics'
        styleWrapper={{
          gridArea: '6/1/7/3',
          backgroundColor: '#62D0DF'
        }} />
      <Card cardText='Crossfit'
        styleWrapper={{
          gridArea: '6/3/7/7',
          backgroundColor: '#DEE1FF'
        }} />
      <Card cardText='Aerobics'
        styleWrapper={{
          gridArea: '6/7/7/9',
          backgroundColor: '#8F00FF'
        }} />

      
        <TextCard
          titleText='Nutritional Plans'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'7/1/8/3'}} />
        <TextCard
          titleText='Weight Loss'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'7/3/8/7'}} />
        <TextCard
          titleText='Mental Peace'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'7/7/8/9'}} />
        <TextCard
          titleText='Home Training'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'8/1/9/3'}} />
        <TextCard
          titleText='Work/Life Balance'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'8/3/9/7'}} />
        <TextCard
          titleText='Cardio'
          textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.'
          styleWrapper={{gridArea:'8/7/9/9'}} />

      <MoreInfo />
      <Contacts />
      <Information />
      <Footer year='2021' />
    </div>
  );
}
export default App;
