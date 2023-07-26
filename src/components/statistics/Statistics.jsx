import propTypes from 'prop-types'
import StaticList from "./StaticList"
const Statistics = ({positiveFeedback,total,good,neutral,bad}) => {
  
    
return (
    <div>
      
      <StaticList
     positiveFeedback={positiveFeedback}
     total={total}
     good={good}
     neutral={neutral}
     bad={bad}

      />
     
        
    </div> 
)
}

Statistics.propTypes ={
    positiveFeedback: propTypes.number,
            total: propTypes.number,
            good: propTypes.number,
            neutral: propTypes.number,
            bad: propTypes.number,
}
export default Statistics