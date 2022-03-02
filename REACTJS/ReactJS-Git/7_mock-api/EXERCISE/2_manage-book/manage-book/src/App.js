import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/Books';
import { Edit } from './components/Edit';
import { Add } from './components/Add';
import { Delete } from './components/Delete';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books/edit/:bookId" element={<Edit />} />
          <Route path="/books/add" element={<Add />} />
          <Route path="/books/delete/:bookId" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
