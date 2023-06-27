import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container flex-grow-1">
          <Switch>
            <Route exact path="/">
              <h1>Hello, React!</h1>
              <p>This is the Home page.</p>
            </Route>
            <Route path="/about">
              <h1>About</h1>
              <p>This is the About page.</p>
            </Route>
            <Route path="/contact">
              <list-contact-form company="xyz" title="User Contact Forms"></list-contact-form>
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
