import react from 'react'
import './index.css'

const Calculator=(props)=> {
    const {hireTime, annualHire, candidates}= props 

    const val=annualHire/candidates

    const recruit= (val*30)+(val*20)+(val*30)*(0.66 * ((1-Math.pow(0.66, 3))/(1-0.66))) + (val*30) +15*(val)*(0.66 * ((1-Math.pow(0.66, 3))/(1-0.66)))+ ((val*30)/60)

    const panel=((val*55)*(val*15)*(0.66))/60

    return (
        <div className='calc-display'>

       <div>
        <h1>Direct Values:</h1>
        </div>
        
        <div>
       <h2> Total Panel Savings: {panel ? <b>{panel} hours</b>: <b>0 hours</b>}</h2> 

       <h2>Total panel cost Saving:{panel ? <b>${panel * 40} USD</b> : <b>0 USD</b>}</h2>

       <h2>Total Recruiter Time Savings:{recruit ? <b>{recruit.toFixed(2)} Hours</b> : <b>0 Hours</b> }</h2>

       <h2>Total Recruiter Cost Savings:{recruit? <b>${(recruit * 30).toFixed(2)} USD</b> : <b>0 USD</b> }</h2>

       <h2>Time to hire: <b>{hireTime * 0.4} Days</b></h2>
        </div>

        </div>
    )
}

export default Calculator

