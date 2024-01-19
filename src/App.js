import DataSuccess from './components/DataSuccess/DataSuccess';
import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';

import './App.css';

function App() {
  const urlDataSuccess = 'http://localhost:7070/data';
  const urlError = 'http://localhost:7070/error';
  const urlLoading = 'http://localhost:7070/loading';

  return (
    <div className="App">
      <DataSuccess url={urlDataSuccess}/>
      <Error url={urlError}/>
      <Loading url={urlLoading}/>
    </div>
  );
}

export default App;
