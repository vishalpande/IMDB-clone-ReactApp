
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
function App() {
  return (


<div className="App">
<Router>
  <Header/>
  <Routes>
<Route index element={<Home/>}></Route>
<Route path="movie/:id" element={<h1>movies detail</h1>}></Route>
<Route path="movies/:types" element={<h1>movies list page</h1>}></Route>
<Route path="/*" element={<h1>Error page</h1>}></Route>
</Routes>
</Router>
</div>

  );
}

export default App;
