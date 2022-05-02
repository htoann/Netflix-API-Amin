import { useHistory, useLocation } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../../../context/movieContext/MovieContext";
import { updateMovie } from "../../../context/movieContext/apiCalls";

export default function Movie() {
  const location = useLocation();
  const [movie, setMovie] = useState(location.state?.movie);
  const { dispatch } = useContext(MovieContext);
  const history = useHistory();

  useEffect(() => {
    setMovie(location.state?.movie);
  }, [location.state]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    updateMovie(movie, dispatch);
    history.goBack();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="movie">
      <div className="movieTop">
        <div className="movieTopRight">
          <div className="movieInfoTop">
            <img src={movie.img} alt="" className="movieInfoImg" />
            <span className="movieName">{movie.title}</span>
          </div>
          <div className="movieInfoBottom">
            <div className="movieInfoItem">
              <span className="movieInfoKey">ID</span>
              <span className="movieInfoValue">{movie._id}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Genre : </span>
              <span className="movieInfoValue">
                {movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}
              </span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Year : </span>
              <span className="movieInfoValue">{movie.year}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Limit : </span>
              <span className="movieInfoValue">{movie.limit}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Trailer Link: </span>
              <span className="movieInfoValue">{movie.trailer}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Video Link : </span>
              <span className="movieInfoValue">{movie.video}</span>
            </div>
            <div className="movieInfoItem">
              <span className="movieInfoKey">Type : </span>
              <span className="movieInfoValue">
                {movie.isSeries ? "Season" : "Movie"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="movieBottom">
        <form className="movieForm">
          <div className="movieFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              name="title"
              defaultValue={movie.title}
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              name="genre"
              defaultValue={movie.genre}
              onChange={handleChange}
            />
            <label>Year</label>
            <input
              type="text"
              name="year"
              defaultValue={movie.year}
              onChange={handleChange}
            />
            <label>Limit</label>
            <input
              type="text"
              name="limit"
              defaultValue={movie.limit}
              onChange={handleChange}
            />
            <label>Trailer</label>
            <input
              type="text"
              name="trailer"
              defaultValue={movie.trailer}
              onChange={handleChange}
            />
            <label>Video</label>
            <input
              type="text"
              name="video"
              defaultValue={movie.video}
              onChange={handleChange}
            />
            <label>Type</label>
            <select
              name="isSeries"
              id="isSeries"
              onChange={handleChange}
              defaultValue={movie.isSeries}
            >
              <option value="false">Movie</option>
              <option value="true">Series</option>
            </select>
          </div>
          <div className="movieFormRight">
            <div className="movieUpload">
              <img src={movie.img} alt="" className="movieUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
            </div>
            <button className="movieButton" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
