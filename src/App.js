import Header from './examples/Header';
import Title from './components/Title';
import FirstRequest from './examples/1-first-request';
import Headers from './examples/2-headers';
import PostRequest from './examples/3-post-request';
import GlobalInstance from './examples/4-global-instance';
import CustomInstance from './examples/5-custom-instance';
import Interceptors from './examples/6-interceptors';
//Import Routes
import {Routes, Route} from 'react-router-dom';

import './axios/global';

function App() {
  return (
    <main>
      <Header />
        <Routes>
          <Route path='/Title' element={<Title />} />
          <Route path='/FirstRequest' element={<FirstRequest />} />
          <Route path='/Headers' element={<Headers />} />
          <Route path='/PostRequest' element={<PostRequest />} />
          <Route path='/GlobalInstance' element={<GlobalInstance />}/>
          <Route path='/CustomInstance' element={<CustomInstance />} />
          <Route path='/Interceptors' element={<Interceptors />} />
        </Routes>
    </main>
  );
}

export default App;