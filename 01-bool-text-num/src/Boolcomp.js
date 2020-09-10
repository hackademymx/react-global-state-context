import React from 'react'
import {useGlobalState} from './contex' 
import './Bool.css'
import OtherComp from './OtherComp'

const BoolComp = () => {
  const [state, dispatch] = useGlobalState()
  console.log('BoolComp -> state', state)

  const handleBool = () => dispatch({ bool: !state.bool})

  return (
    <div className='container-bool'>
      <h1 className='bool-title'>{`bool: ${state.bool}`}</h1>
      <div>
        <button className='bool-btn' onClick={handleBool}>{state.bool ? 'true' : 'false'}</button>
      </div>
      <OtherComp type='bool' />
    </div>
  )
}

export default BoolComp