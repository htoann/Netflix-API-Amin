import { useHistory, useLocation } from "react-router-dom";
import "./list.css";
import { useContext, useState, useEffect } from "react";
import { ListContext } from "../../../context/listContext/ListContext";
import { updateList } from "../../../context/listContext/apiCalls";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { getMovies } from "../../../context/movieContext/apiCalls";

export default function List() {
  const location = useLocation();
  const history = useHistory();

  const [list, setMovie] = useState(location.state?.list);
  const { dispatch } = useContext(ListContext);
  const { movies, dispatch: dispatchMovies } = useContext(MovieContext);

  useEffect(() => {
    setMovie(location.state?.list);
    getMovies(dispatchMovies);
  }, [location.state, dispatchMovies]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateList(list, dispatch);
    history.push("/lists");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...list, [e.target.name]: e.target.value });
  };

  return (
    <div className="list">
      <div className="listTop">
        <div className="listTopRight">
          <div className="listInfoTop">
            <span className="listName">{list.title}</span>
          </div>
          <div className="listInfoBottom">
            <div className="listInfoItem">
              <span className="listInfoKey">ID : </span>
              <span className="listInfoValue">{list._id}</span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">Genre : </span>
              <span className="listInfoValue">
                {list.genre.charAt(0).toUpperCase() + list.genre.slice(1)}
              </span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">Type : </span>
              <span className="listInfoValue">
                {list.type.charAt(0).toUpperCase() + list.type.slice(1)}
              </span>
            </div>
            <div className="listInfoItem">
              <span className="listInfoKey">List Movies : </span>
              <div className="listMovie">
                {list.content.map((id, key) => (
                  <div key={key} className="listInfoValue">
                    {movies.map((movie) => (
                      <div key={movie._id}>
                        {movie._id === id[0] ? movie.title : ""}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="listBottom">
        <form className="listForm">
          <div className="listFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              defaultValue={list.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              defaultValue={list.genre}
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              name="type"
              onChange={handleChange}
              defaultValue={list.type}
            />
            <button className="listButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
