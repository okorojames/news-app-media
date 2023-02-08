import './App.css';
import './App_responsive.css'
import Header from './components/Header';
import First_col_section from './components/First_col_section';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <First_col_section />
      <Main/>
    </div>
  );
}

export default App;
