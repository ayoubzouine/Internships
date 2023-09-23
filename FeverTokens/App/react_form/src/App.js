import logo from './logo.svg';
import './App.css';
import CenterContent from './Core/Components/CenterContent/CenterContent'

function App() {
  const apiURL = "http://localhost:90000/personal_details"
  return (
    <CenterContent apiURL={apiURL}/>
  );
}

export default App;
