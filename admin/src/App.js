import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import Movie from "./pages/movie/updateMovie/Movie";
import MovieList from "./pages/movie/movieList/MovieList";
import NewMovie from "./pages/movie/newMovie/NewMovie";
import ListList from "./pages/list/listList/ListList";
import NewList from "./pages/list/newList/NewList";
import List from "./pages/list/updateList/List";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/">
          {user ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/movies">
                  <MovieList />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/newmovie">
                  <NewMovie />
                </Route>
                <Route path="/lists">
                  <ListList />
                </Route>
                <Route path="/newlist">
                  <NewList />
                </Route>
                <Route path="/list/:listId">
                  <List />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <ToastContainer autoClose={2000} />
              </div>
            </>
          ) : (
            <Login />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
