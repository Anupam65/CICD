import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Post from './post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/CICD" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;