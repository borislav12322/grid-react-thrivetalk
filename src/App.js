import './App.scss';
import Header from './header/Header';
import Description from './components/description/Description';
import About from './components/about/About';
import MoreInfo from './components/moreInfo/MoreInfo';
import Contacts from './components/contacts/Contacts';
import Information from './components/information/Information';
import Footer from './footer/Footer';

// Images
import SmallCards from "./components/smallCards/SmallCards";
import LargeCards from "./components/largeCards/LargeCards";
import TextCards from "./components/textCards/TextCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <About />
        <SmallCards/>
        <LargeCards/>
        <TextCards/>
      <MoreInfo />
      <Contacts />
      <Information />
      <Footer year='2021' />
    </div>
  );
}
export default App;
