
import './App.css';
import './assets/css/style.css'
import { CardArticle } from './components/CardArticle';
import {CardDesktop} from './components/CardDesktop'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <CardArticle></CardArticle>
      <CardDesktop></CardDesktop>
    </div>
  );
}

export default App;
