import './App.css';
import LogingPage from './components/LoginPage/LoginPage';
import SwipeableTextMobileStepper from './components/carousel/carousel';
import DatePicker from './components/datepicker/datePicker';
import MainBtnScreen from './components/butoonComponent/mainBtnScreen';
import { useState } from 'react';
import SizeCarousel from './components/carousel/sizeCarousel';

export const mainView = 1;
export const weeklyView = 2;
export const sizeView = 3;
export const calendarView = 4;
export const loginView = 4;

function App() {
  const [view, setView] = useState(mainView);

  const returnToMainView = () => {
    setView(mainView);
  };

  const changeView = (requestedView) => {
    setView(requestedView);
  };

  const getCurrentView = () => {
    switch (view) {
      case mainView:
        return <MainBtnScreen changeView={changeView} />;

      case weeklyView:
        return (
          <SwipeableTextMobileStepper returnToMainView={returnToMainView} />
        );

      case sizeView:
        //   צד שמאל זה השם של הפרופס בסייד קרוסל - מי שזה נשלח אליו
        // בצד ימין שם הערך שלו בקובץ הנוכחי
        return <SizeCarousel returnToMainView={returnToMainView} />;

      case calendarView:
        return <DatePicker returnToMainView={returnToMainView} />;

      case loginView:
        return <LogingPage />;

      default:
        return <div>{'Error'}</div>;
    }
  };

  return <div className="App">{getCurrentView()}</div>;
}

export default App;
