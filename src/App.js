import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const ApiKey=' 65df68c4'
  return (
    <div className="App">

      <h1 className="min-w-0 text-3xl font-bold underline">
      Hello world!
      <Link to='/Movie'>Movie</Link>
    </h1>
    </div>
  );
}

export default App;
