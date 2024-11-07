import { useState } from 'react';

import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultsTable from './components/ResultsTable';

import { calculateInvestmentResults } from './util/investment';

function App() {
  const [investmentParams, setInvestmentParams] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  })

  function handleParamChange(param, event){
    setInvestmentParams((prevValues) => {
      return (
        {
          ...prevValues,
          [param]: event.target.value
        }
      )
    })
  }

  const investmentData = calculateInvestmentResults(
    { 
      initialInvestment: investmentParams.initialInvestment,
      annualInvestment: investmentParams.annualInvestment,
      expectedReturn: investmentParams.expectedReturn,
      duration: investmentParams.duration
    }
  )

  return (
    <>
      <Header />
      <UserInput
        investmentState={investmentParams}
        onParamChange={handleParamChange}
      />
      {(investmentParams.duration <= 0) ?
        <p className="center">Please input a valid duration</p> :
        <ResultsTable 
          investmentDataArray={investmentData}
          className="center"
        />
      }
    </>
  )
}

export default App
