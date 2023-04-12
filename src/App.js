import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {
// tours wale variable mei jitni bhi places/cards hai unka sarra data daal diya from data.js file 
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      {/* here we created our custom component i.e Tours and all info related to tour is in tour.js file inside component folder */}
      {/* Tours contains all 7 cards */}
      {/* Tours mei tours variable ko as a props pass kar diya */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
