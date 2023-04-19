
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/pages/Home';
import Movielist from './components/movieList/Movielist';



function App() {
  return (


<div className="App">
<Router>
  <Header/>
  <Routes>
<Route index element={<Home/>}></Route>
<Route path="movie/:id" element={<h1><movieDetail/></h1>}></Route>
<Route path="movies/:type" element={<Movielist/>}></Route>
<Route path="/*" element={<h1>Error page</h1>}></Route>
</Routes>
</Router>
</div>

  );
}

export default App;
