import './App.css';
import Dashboard from './componentsUI/dashboard/Dashboard';
import NewPost from './componentsUI/dashboard/NewPost';
import PostManage from './componentsUI/dashboard/PostManage/PostManage'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './componentsUI/Home/Home';
import Login from './componentsUI/Login/Login';
import PostDetails from './componentsUI/Home/PostDetails/PostDetails';
import { createContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import PrivetRoute from './componentsUI/PrivetRoute/PrivetRoute'

export const UserContext = createContext();


function App() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://sleepy-taiga-61544.herokuapp.com/posts')
      .then(res => res.json())
      .then(data => setPosts(data))


    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email
      }
      if (userAuth) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
    return unSubscribe
  }, [])

  console.log(user)
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home posts={posts} user={user}></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute exact path="/admin">
            <Dashboard posts={posts}></Dashboard>
          </PrivetRoute>
          <Route  path="/admin/managepost">
            <PostManage posts={posts}></PostManage>
          </Route>
          <Route path="/admin/newpost" >
            <NewPost></NewPost>
          </Route>



          <Route path="/readpost/:id">
            <PostDetails posts={posts}></PostDetails>
          </Route>

          <Route path="/">

          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
