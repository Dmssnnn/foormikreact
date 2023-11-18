import React from 'react'
import Button from '../_atoms/Button'
import Form from './Form'

const RightSide = () => {
  return (
    <div className='rightSideWrap'>
        <Button width="540px" height="60px" backgroundColor="#5E54A4" value="Try it free 7 days then $20/mo. thereafter"  />
        <Form /> 
    </div>
  )
}

export default RightSide  