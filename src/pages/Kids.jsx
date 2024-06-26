import React from 'react'
import Card_item_kids from '../components/Cart_item_kids'
import Kidsdata from '../assets/Kidsdata'

const Kids = () => {
  return (
    <div>
      <Card_item_kids data={Kidsdata}/>
    </div>
  )
}

export default Kids