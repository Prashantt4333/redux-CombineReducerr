import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import Page1 from './page1';
import Page2 from './page2';

function App() {

  let store =useSelector(store => store)

  return (
      <>
          <Routes>

            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
      </>
  );
}

export default App;
