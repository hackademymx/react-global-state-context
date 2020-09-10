import React from 'react'
import {useGlobalState} from './contex' 
import './Num.css'

import OtherComp from './OtherComp'

const NumComp = () => {
  const [state, dispath] = useGlobalState()
  console.log('NumComp -> state', state)

  const decrease = () => dispath({ num: state.num - 1 })
  const increase = () => dispath({ num: state.num + 1 })

  return (
    <div className='container-num'>
      <h1 className='num-title'>{`Num: ${state.num}`}</h1>
      <div>
        <button className='num-btn' onClick={decrease}>Decrease</button>
        <button className='num-btn' onClick={increase}>Increase</button>
      </div>
      <OtherComp type='num' />
    </div>
  )
}

export default NumComp