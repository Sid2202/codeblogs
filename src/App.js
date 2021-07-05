import './App.css';
import Navbar from './components/Navbar';
import Body from './Pages/Body';
import Logobar from './components/Logobar';
import Create from './Pages/Create';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import ProfilePage from './Pages/ProfilePage';
import UserProvider from './providers/UserProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Navbar />
        </UserProvider>
        <Logobar />       
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Body />
            </Route>
            <Route path ="/signin">
              <SignIn />
            </Route>
            <Route path ="/create">
              <Create />
            </Route>
            <Route path ="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      
      </Router>
    </div>
  );
}

export default App;
