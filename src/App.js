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

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />
      <div className="smallCards">
        <Card cardText='Weight Lifting' style={{ backgroundColor: '#FFE2DE' }} />
        <Card cardText='Running & Spinning' style={{ backgroundColor: '#C4E769' }} />
        <Card cardText='Pumping Iron' style={{ backgroundColor: '#62D0DF' }} />
        <Card cardText='Pumping Iron' style={{ backgroundColor: '#0052C1' }} />
      </div>
      <div className="largeCard">
        <Card cardText='Physical Health' style={{ backgroundColor: '#22356F' }} />
        <Card cardText='Mental Health' style={{ backgroundColor: '#0052C1' }} />
        <Card cardText='Nutrition' />
        <Card cardText='Gymnastics' style={{ backgroundColor: '#62D0DF' }} />
        <Card cardText='Crossfit' style={{ backgroundColor: '#DEE1FF' }} />
        <Card cardText='Aerobics' style={{ backgroundColor: '#8F00FF' }} />
      </div>
      <div className="textCard">
        <TextCard titleText='Nutritional Plans' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
        <TextCard titleText='Weight Loss' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
        <TextCard titleText='Mental Peace' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
        <TextCard titleText='Home Training' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
        <TextCard titleText='Work/Life Balance' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
        <TextCard titleText='Cardio' textValue='Nutritional Facts on some shitty things that you don’t care about and even we don’t , I need to replace this copy.' />
      </div>
    <MoreInfo/>
    <Contacts/>
    <Information/>
    <Footer year='2021'/>
    </div>
  );
}
export default App;
