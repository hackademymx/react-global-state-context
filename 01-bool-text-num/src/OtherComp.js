import React from 'react'
import {useGlobalState} from './contex' 

import './other.css'

const OtherComp = (props) => {
  const [state] = useGlobalState()

  return (
    <div className='other-states'>
      <p>Other states:</p>
      {props.type !== 'num' && (<p className='p-states'>
        <label className='label-state'>Num</label>{state.num}
      </p>)}
      {props.type !== 'text' && (<p className='p-states'>
        <label className='label-state'>Text</label>{state.text}
      </p>)}
      {props.type !== 'bool' && (<p className='p-states'>
        <label className='label-state'>Bool</label>{state.bool ? 'true' : 'false'}
      </p>)}
    </div>
  )
}

export default OtherComp