import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routs/Routs/Routs';

function App() {
  return (
    <div className="App w-[1300px] mx-auto">
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
