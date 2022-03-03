import AppHeader from '../app-header/app-header';
import RandomCharacter from '../random-character/random-character';
import CahrList from '../charList/charList';
import CharInfo from '../charInfo/charInfo';


import './app.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppHeader/>
      </header>
      <RandomCharacter/>
      <div className="char-list">
        <CahrList/>
        <CharInfo/>
      </div>
    </div>
  );
}

export default App;