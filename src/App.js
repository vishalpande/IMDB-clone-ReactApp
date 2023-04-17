
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  return (


<div className="App">
<Router>
  <Routes>
<Route index element={<h1>hello world</h1>}></Route>
<Route path="movie/:id" element={<h1>movies detail</h1>}></Route>
<Route path="movie/:types" element={<h1>movies list page</h1>}></Route>
<Route path="/*" element={<h1>Error page</h1>}></Route>
</Routes>
</Router>
</div>

  );
}

export default App;
