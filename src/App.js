import './App.css';
import Homepage from './components/homepage';
import Mood from './projects/Mood_Calender';
import Timeline from './projects/Timeline/Timeline';
import Birthday from './projects/Birthday_reminder';
import Tour_Project from './projects/Tours';
import Texteffect from './projects/Texteffects/Index';
function App() {
  return (
    <div className="App">
    <Texteffect/>
    {/*
    <Birthday/>
    <Homepage/>
    <Timeline/>
    <Mood/>
    <Tour_Project/>
     */}
    </div>
  );
}

export default App;
