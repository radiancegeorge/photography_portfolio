import React from 'react';
import Home from './components/Home'
import Follow from './components/Follow'
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  // Link,
  Route, 
  Switch
} from 'react-router-dom';
import About from './components/About';
function App() {
 return(
   <div>
     <Router>
       <Header />

       <Switch>
         <Route  exact path='/'>
              <Home />
         </Route>
         <Route  path='/about'>
            <About />
         </Route>
         <Route  path='/follow'>
            <Follow />
         </Route>
       </Switch>

       <Footer />
     </Router>
   </div>
 )
}

export default App;
