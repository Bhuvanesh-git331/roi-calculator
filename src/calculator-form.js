import React,{useState} from 'react'
import Calculator from './calculator'
import './index.css'

const CalculatorForm=(props)=> {
    const [hireTime, setHireTime]=useState(0)
    const [annualHire, setAnnualHire]=useState(0)
    const [candidates, setCandidates]= useState(0)

    const handleHireTime=(e)=> {
        setHireTime(e.target.value)
    }

    const handleAnnualHire=(e)=> {
        setAnnualHire(e.target.value)
    }

    const handleCandidates=(e)=> {
        setCandidates(e.target.value)
    }

   

    return (
        <div>


         <div className='main'>    
          <div className='input'>
            <label><b>Current time to Hire</b></label>
            <input type='text' value={hireTime} onChange={handleHireTime} placeholder='hireTime'/>
            </div>

            <div className='input'>
            <label><b>Annual Hiring</b></label>
            <input type='text' value={annualHire} onChange={handleAnnualHire} placeholder='Annual Hiring'/>
            </div>

            <div className='input'>
            <label><b>No. of Candidates Interview/Role</b></label>
            <input type='text' value={candidates} onChange={handleCandidates} placeholder='No of Candidates'/>
            </div>
            </div>


            {/* <p>{hireTime}</p>
            <p>{annualHire}</p>
            <p>{candidates}</p> */}

            <Calculator hireTime={hireTime}
                        annualHire={annualHire}
                        candidates={candidates}
                         />

        </div>
    )

}

export default CalculatorForm