import './App.css';
import Calendar from './components/calendar/calendar';
import 'react-datetime/css/react-datetime.css';
import LogingPage from './components/LoginPage/LoginPage';
import SwipeableTextMobileStepper from './components/carousel/carousel';
import DatePicker from './components/datepicker/datePicker';
import MainBtnScreen from './components/butoonComponent/mainBtnScreen';
import { useState } from 'react';
import SizeCarousel from './components/carousel/sizeCarousel';
import WeeklyCarousel from './components/carousel/weeklyCarousel';
import AppToDo from './components/todo/appToDo';
import MyWeight from './components/myWeight/appMyWeight';
import { withMobileDialog } from '@material-ui/core';

export const mainView = 1;
export const weeklyView = 2;
export const sizeView = 3;
export const calendarView = 4;
export const loginView = 5;
export const todoView = 6;
export const myWeightView = 7;

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
        return <SizeCarousel returnToMainView={returnToMainView} />;
      case calendarView:
        return <Calendar returnToMainView={returnToMainView} />;
      case myWeightView:
        return <MyWeight returnToMainView={returnToMainView} />;
      case loginView:
        return <LogingPage returnToMainView={returnToMainView} />;
      default:
        return <div>{'Error'}</div>;
    }
  };
  return (
    <>
      <div className="App">{getCurrentView()}</div>
    </>
  );
}

export default App;
