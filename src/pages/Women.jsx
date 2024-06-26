import React from 'react'
import Card_item_women from '../components/Card_item_women'
import Womendata from '../assets/Womendata'

const Women = () => {
  return (
    <div>
      <Card_item_women data={Womendata}/>
    </div>
  )
}

export default Women