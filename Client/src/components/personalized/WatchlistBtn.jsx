import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const WatchlistBtn = ({movie}) => {


  const {addMovieToWatchlist, watchlist} = useContext(GlobalContext);
   
  let storedMovie = watchlist.find(o => o.id === movie.id);

  const watchlistDisabled = storedMovie ? true : false;
  return (
    <div>
        <button className='button-wlist mt-5'
        disabled={watchlistDisabled}
        onClick={() => addMovieToWatchlist(movie)}
        >Add to Watch-list</button>
    </div>
  )
}

export default WatchlistBtn;

