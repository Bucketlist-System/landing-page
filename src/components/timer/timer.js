import React, {useState, useEffect, useRef} from 'react'

import styles from './timer.module.scss'

const Timer = () => {
  
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  
  let interval = useRef()
  
  const startTimer = () => {
    const countdownDate = new Date('July 29, 2020 00:00:00').getTime();
    
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
      const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
      const seconds = Math.floor((distance % (1000*60)) / (1000));
      
      if (distance < 0) {
        // stop timer
        clearInterval(interval.current)
      } else {
        // update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
      
    }, 1000)
  }
  
  // componentDidMount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
    
  }, [])
  
  return (
    <div className={styles.root}>
      <section className={styles.wrapper}>
        <section className={styles.timer}>
          <div>
            <h2>Enter to win $25 gift card in</h2>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p>Days</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>Hours</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>Minutes</p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>Seconds</p>
            </section>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Timer