import React, {useState, useEffect} from 'react';
import './Metronome.css';

import clickOne from './assets/clickOne.wav';
import clickTwo from './assets/clickTwo.wav';

function Metronome () {
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);
  const [bpm, setBpm] = useState(100);
  const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);

  const handleBpmChange = event => {
    const bpmAdjust = event.target.value;

    if (playing) {
      setCount(0);
      setBpm(bpmAdjust)
    } else {
      setBpm(bpmAdjust);
    }
  }

  const startStop = () => {
    if (!playing) {
      setCount(0);
      setPlaying(true);
    } else {
      setPlaying(false);
    }
  };

  useEffect(() => {
    const click1 = new Audio(clickOne);
    const click2 = new Audio(clickTwo);
    if (playing) {
      const interval = setInterval(() => {
        if (count % beatsPerMeasure === 0) {
          click2.play();
        } else {
          click1.play();
        }
        setCount((count + 1) % beatsPerMeasure);
      }, (60 / bpm) * 1000);
      return () => clearInterval(interval);
    }
  }, [bpm, count, playing, beatsPerMeasure]);

  return (
    <div className="metronome">
      <h1>METRÔNOMO</h1>
      <div>TEMPO: {bpm} BPM</div>
      <input
        type="range"
        min="35"
        max="250"
        value={bpm}
        onChange={handleBpmChange} />
        <div>BATIDAS: {beatsPerMeasure}</div>
      <select
        value={beatsPerMeasure}
        onChange={(event) => setBeatsPerMeasure(event.target.value)}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
      <button onClick={startStop}>
        {playing ? 'Parar' : 'Iniciar'}
      </button>
    </div>
  );
}

    

export default Metronome;