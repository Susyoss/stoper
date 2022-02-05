import Stopwatch from "./components/Stopwatch/Stopwatch";
import Button from "./components/Button/Button";
import React, {useState} from "react";
import Container from "./components/Container/Container";

function App() {
  
  const [time, setTime] = useState({h: 0, m: 0, s:0, ms:.0});
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  }

  let timerH = time.h, timerM = time.m, timerS= time.s, timerMs = time.ms;

  const run = () => {
    if(timerM === 60){
      timerH ++;
      timerM = 0;
    }
    if(timerS === 60){
      timerM ++;
      timerS =0
    }
    if(timerMs === 100){
      timerS ++;
      timerMs = 0
    }
    timerMs++;
    return setTime({h: timerH, m: timerM, s: timerS, ms: timerMs})
  }

  const pause = () => {
    clearInterval(interv);
  }

  const reset = () =>{
    clearInterval(interv)
    return setTime({h: 0, m: 0, s: 0, ms: 0})
  }

  return (
    <Container>

     <Stopwatch time={time}/>
     <Button start={start} pause={pause}  reset={reset}/>

    </Container>
  )
}

export default App;