import './App.css';
import { useRef, useState } from 'react';

import Car from './assets/car.png'
import Skeleton from './assets/car-skeleteon.jpg'
import CarAd from './assets/Car-Ad.mp4'

function App() {

  const [range, setRange] = useState(0);
  const [hideCar, setHideCar] = useState(false);
  const video = useRef();

  const handleRangeLeave = (rangeVal) => {
    console.log("leave", rangeVal);
    if (+rangeVal === 100) {
      setHideCar(true)
      video.current.play()
    }
  }

  return (
    <div className="App">
      <div className='main-container'>

        <div className='header'>
          <h3>Car Launch</h3>
        </div>

        <div className='car-container'>
          <div className='car-skeleton'>
            <img src={Skeleton} alt='car' />
          </div>
          <div
            className={`car ${hideCar ? 'hide' : ''}`}
            style={{ width: `${range}%` }}>
            <img style={{ marginTop: '18px' }} src={Car} alt='car' />
          </div>
        </div>

        <div className={`car ${hideCar ? '' : 'hide'}`}>
          <video ref={video} width='100%' height='100%' autoPlay={true}>
            <source src={CarAd} type="video/mp4"></source>
          </video>
        </div>

        <div className={`car ${hideCar ? 'hide' : ''}`}>
          <input
            onClick={(e) => handleRangeLeave(e.target.value)}
            className='range-input'
            type='range'
            value={range}
            onChange={(e) => setRange(e.target.value)} />
        </div>

        <div className='footer'>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
