// Components
import Home from './components/Home'

import DataProvider from './Conext/DataProvider';
function App() {
  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  );
}

export default App;
