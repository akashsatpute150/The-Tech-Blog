
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
function App() 
{
  
  return (
    <Router>
    
    <div className="App">
      <Navbar/>
      <div className="content">
       <Routes>
        <Route  exact path="/" Component={Home}/>
        <Route exact path="/create" Component={Create}/>
        <Route exact path="/blogs/:id" Component={BlogDetails}/>
        <Route exact path="*" Component={NotFound}>
         
        </Route>
       </Routes>
       
      </div>
      
    </div>
    </Router>
  );
}


export default App;
