import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Homepage from './pages/Homepage';
import Trending from './pages/TrendingPage.jsx';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage/>}></Route>
      <Route path="/trending" element={<Trending/>}></Route>
    </Route>
)
);

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App
