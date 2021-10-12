import Comments from '../components/Comments/Comments';
import InputsField from '../components/InputsField/InputsField';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        <InputsField />
        <Comments />
    </div>
  );
}

export default App;
