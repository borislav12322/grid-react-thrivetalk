import './App.scss';
import Header from './header/Header';
import Description from './components/description/Description';
import About from './components/about/About';
import TextCard from './components/textCard/TextCard';
import MoreInfo from './components/moreInfo/MoreInfo';
import Contacts from './components/contacts/Contacts';
import Information from './components/information/Information';
import Footer from './footer/Footer';

// Images
import SmallCards from "./components/smallCards/SmallCards";
import LargeCards from "./components/largeCards/LargeCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />
        <SmallCards/>
        <LargeCards/>


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
