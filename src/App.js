import './App.css';
import HighOrderComp from './components/HigherOrderComp';
import Hover from './components/Hover';
import ClickCount from './components/counter'
import PureComp from './components/PureComp';

function App() {
  return (
    <div className="App">
      <HighOrderComp/>
      <Hover/>
     
      <ClickCount/>
      <hr/><hr/>
      <PureComp/>
    </div>
  );
}

export default App;
