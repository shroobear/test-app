import './App.css';
import Nav from './Nav';
import Main from './Main';

const App = () => {
  return (
    <div id="container">
      <header id="top">
        <h1>QR Code Menu</h1>
        <Nav />
      </header>
      <Main />
      <footer>
        <a href="#top">Go to top</a>
      </footer>
    </div>
  )
}

export default App;