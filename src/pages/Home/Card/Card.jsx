import React, {useState} from "react";
import ReactPlayer from "react-player";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import Yicon from "../../assets/images/icons8-youtube-48.png";
import Close from '../../assets/images/close_24dp_D39742_FILL0_wght400_GRAD0_opsz24.svg'
import { useGetMoviesQuery } from "../../../store/CardSlice";




const Cart = () => {


  const [playing, setPlaying] = useState(false);
  const {data, isLoading, error} = useGetMoviesQuery()
  const navigate = useNavigate()
  // const seances = session.data  
  
  
   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>;

  const handleIconClick = (id) => {
    setPlaying((prev) => ({ ...prev, [id]: true }));
  };

   const handleCloseClick = (id) => {
     setPlaying((prev) => ({ ...prev, [id]: false }));
   };


  return (
    <div className="card__container">
      {data.results.map((movie) => (
        <div className="schedule-container" key={movie.id}>
          <div className="video-container">
            <img src={movie.image} alt="" className="movie-poster" />
            <button
              className="youtube-icon"
              onClick={() => handleIconClick(movie.id)}
            >
              <img src={Yicon} alt="YouTube Icon" />
            </button>
            {playing[movie.id] && (
              <div className="player-wrapper">
                <ReactPlayer
                  url={movie.link}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="video-player"
                />
                <button
                  className="close-button"
                  onClick={() => handleCloseClick(movie.id)}
                >
                  <img src={Close} alt="Close Icon" />
                </button>
              </div>
            )}
          </div>
          <div className="schedule__box">
            <div className="schedule-info">
              <h1 onClick={() => navigate("/details")}>{movie.title}</h1>
              <div className="rating">{movie.rating}</div>
              <div className="details">
                <p>{movie.info}</p>
                <p>{movie.genre}</p>
                <p>ЦУМ "Айчурек"</p>
              </div>
            </div>
            {/* <div className="session__box">
              <div className="session__box__left">
                <div className="session__box__left__top">
                  <p>Зал 3</p>
                  <div className="line"></div>
                </div>
                {session.data.results.map((item) => (
                  <div className="session__box__left__bottom">
                    <h4 key={item.id}>{item.start_time}</h4>
                    <p>{item.price.slice(0, 3)}C</p>
                  </div>
                ))}
              </div>
              <div className="session__box__right"></div>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;



