import React, { useEffect } from 'react'
import Header from './components/Header';
import {RouterProvider, createBrowserRouter, useNavigate} from 'react-router-dom'
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import VideoContainer from './components/VideoContainer';
import { Youtube_Api } from './Utils/Constants';
import { Provider } from 'react-redux';
import youtubestore from './Utils/Store';
import SearchPage from './components/SearchPage';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <Body/>,
    children:[
      {
        path:'/',
        element:<VideoContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
      {
        path:'Search',
        element:<SearchPage/>
      }
    ]
  }
])

function App() {
 
 

  return (
    <Provider store={youtubestore}>
      
      <RouterProvider router={appRouter}/>
    
    </Provider>
  );
}

export default App;
