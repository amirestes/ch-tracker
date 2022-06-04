import './App.css';
import Points from './components/Points'
import Tracker from './components/Tracker'
import Dog from './components/Dog'
import Judges from './components/Judges'


function App() {
  return (
    <div className="App">
        <Dog />
        <Judges />
        <Points />
        <Tracker />
    </div>
  );
}

export default App;
