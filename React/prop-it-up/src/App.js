import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Taleen"} lastName={"Khoury"} age={"23"} color={"Brown"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={"45"} color={"Black"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={"88"} color={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={"20"} color={"Black"}/>
    </div>
  );
}

export default App;
