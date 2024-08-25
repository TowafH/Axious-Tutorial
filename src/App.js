import Header from './examples/Header';
import Title from './components/Title';
import FirstRequest from './examples/1-first-request';
import Headers from './examples/2-headers';
//Import Routes
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />
        <Routes>
          <Route path='/Title' element={<Title />} />
          <Route path='/FirstRequest' element={<FirstRequest />} />
          <Route path='/Headers' element={<Headers />} />
        </Routes>
    </main>
  );
}

export default App;