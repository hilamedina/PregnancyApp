import './App.css';
import IndexSlider from './components/slider';
// import ButtonSlider from './components/slider/components/atoms/buttonSlider';
import LogingPage from './components/LoginPage/LoginPage';
import SwipeableTextMobileStepper from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <SwipeableTextMobileStepper />
      {/* <LogingPage /> */}
      {/* <IndexSlider /> */}
    </div>
  );
}

export default App;
