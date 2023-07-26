import { useState } from "react"
import Feedback from "./feedback/Feedback"
import Statistics from "./statistics/Statistics"
import SectionTitle from "./sectionTitle/SectionTitle"
import Notification from "./notification/Notification"

const App = () => {
    const [state, setState] = useState({
        good:0,
        neutral:0,
        bad:0,
    })
  const handleChangeOption = (option) => {
    setState({
    ...state,
     [option]: state[option] + 1
    })
  }

    const positiveFeedback=Math.round(state.good/(state.good + state.neutral + state.bad)*100)
    const total = state.good + state.neutral + state.bad
    return(
      <>
       <SectionTitle title="Please leave feedback">
       <Feedback
          options={Object.keys(state)}
           handleChangeOption = {handleChangeOption}
          />
      </SectionTitle>
       <SectionTitle title="Statistics">
        {
          total === 0 ? 
          <Notification message="There is no feedback"/> :
          <Statistics
            positiveFeedback={positiveFeedback}
            total={total}
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
          />
        }
       
        </SectionTitle>
      </>
    )
    

}

export default App