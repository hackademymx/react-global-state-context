import React from 'react'
import {useGlobalState} from './contex' 
import './Text.css'

import OtherComp from './OtherComp'

const TextComp = () => {
  const [state, dispatch] = useGlobalState()
  console.log('TextComp -> state', state)

  const onChange = (e) => dispatch({ [e.target.name]: e.target.value })

  return (
    <div className='container-text'>
      <h1 className='text-title'>{`Text: ${state.text}`}</h1>
      <div>
        <input
          className='input-text'
          type='text'
          name='text'
          value={state.text}
          onChange={onChange}
        />
      </div>
      <OtherComp type='text' />
    </div>
  )
}

export default TextComp