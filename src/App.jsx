import { useState } from 'react'

import data from './data/learners'
import styles from './App.module.css'
import Learner from './components/Learner'

function App() {
  const [learnersData, setLearnersData] = useState({
    learners: data
  })

  return (
    <div className={styles.learnersContainer}>
      {learnersData.learners.map((learner, i) => (
        <Learner key={i} {...learner}/>
      ))}
    </div>
  )
}

export default App
