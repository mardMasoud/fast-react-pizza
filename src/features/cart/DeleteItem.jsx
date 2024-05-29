import React from 'react'
import Button from '../../ui/Button'
import { decrease, deleteAtCart } from './cartSlice'
import { useDispatch } from 'react-redux'

export default function DeleteItem({id,type}) {
  const dispatch = useDispatch()

  return (
    <Button type='small' onClick={()=>dispatch(deleteAtCart(id)) }>Delete</Button>
  )
}
