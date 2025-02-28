import { useState } from 'react'

import data from './data/learners'
import './App.css'
import Learner from './components/Learner'

function App() {
  const [learnersData, setLearnersData] = useState({
    learners: data
  })

  return (
    <>
      {learnersData.learners.map((learner, i) => (
        <Learner key={i} {...learner}/>
      ))}
    </>
  )
}

export default App
