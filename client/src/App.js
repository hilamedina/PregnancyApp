import './App.css';
import LogingPage from './components/LoginPage/LoginPage';
import SwipeableTextMobileStepper from './components/carousel/carousel';
import DatePicker from './components/datepicker/datePicker';
import MainBtnScreen from './components/butoonComponent/mainBtnScreen';
import { useState } from 'react';
import SizeCarousel from './components/carousel/sizeCarousel';
import WeeklyCarousel from './components/carousel/weeklyCarousel';
// import AppToDo from './components/todo/appToDo';
import AppToDo from './components/todo/appToDo';

export const mainView = 1;
export const weeklyView = 2;
export const sizeView = 3;
export const calendarView = 4;
export const loginView = 5;
export const todoView = 6;

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
      case todoView:
        return <AppToDo returnToMainView={returnToMainView} />;
      case weeklyView:
        return <WeeklyCarousel returnToMainView={returnToMainView} />;
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
  return (
    <>
      <header
        style={{
          marginBottom: '1rem',
          backgroundColor: '#DABBB3',
          height: '2.5rem',
        }}
      >
        hila
      </header>
      <div className="App">{getCurrentView()}</div>
      {/* <AppToDo /> */}
    </>
  );
}

export default App;
