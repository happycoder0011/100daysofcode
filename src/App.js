import './App.css';
import Homepage from './components/homepage';
import Mood from './projects/Mood_Calender';
import Timeline from './projects/Timeline/Timeline';
import Birthday from './projects/Birthday_reminder';
function App() {
  return (
    <div className="App">
    <Birthday/>
    <Homepage/>
    <Timeline/>
    <Mood/>
    </div>
  );
}

export default App;
