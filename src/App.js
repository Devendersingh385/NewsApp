import React, { useState } from 'react';
import { Navbar } from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import { News } from './Component/News';
import LoadingBar from 'react-top-loading-bar'
import SignUp from './Component/SignUp';
import Login from './Component/Login';

export const App = () => {
const pageSize = 8;
const apiKey = process.env.REACT_APP_NEWS_API;

const [progress, setProgress] = useState(0)

  return (
    <div>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Routes>
          <Route exact path='/' element={ <News setProgress={setProgress} key="general" apiKey={apiKey} pageSize={pageSize} country="us" category="general"  />} />
          <Route exact path='/business' element={ <News setProgress={setProgress} key="business" apiKey={apiKey} pageSize={pageSize} country="us" category="business"  />} />
          <Route exact path='/entertainment' element={ <News setProgress={setProgress} key="entertainment" apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment"  />} />
          <Route exact path='/health' element={ <News setProgress={setProgress} key="health" apiKey={apiKey} pageSize={pageSize} country="us" category="health"  />} />
          <Route exact path='/science' element={ <News setProgress={setProgress} key="science" apiKey={apiKey} pageSize={pageSize} country="us" category="science"  />} />
          <Route exact path='/sports' element={ <News setProgress={setProgress} key="sports" apiKey={apiKey} pageSize={pageSize} country="us" category="sports"  />} />
          <Route exact path='/technology' element={ <News setProgress={setProgress} key="technology" apiKey={apiKey} pageSize={pageSize} country="us" category="technology"  />} /> 
          <Route path='/login' element={ <Login />}/>        
          <Route path='/signup' element={ <SignUp />}/>        
      </Routes>
    </div>
  )
}

export default App;