
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import {ContentA} from './components/ContentA';
import {ContentB} from './components/ContentB';
import {SharedComponent} from './components/SharedComponents';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContentA/>
      <SharedComponent name={"click"}/>
      <ContentB/>
      <SharedComponent name={"click"}/>
      <Footer/>
    </div>
      
  );
}

export default App;
