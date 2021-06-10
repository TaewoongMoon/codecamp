import { useState } from 'react'
import ModalUI from './Modal.presenter'

const Modal = (props: any) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <ModalUI
      open={open}
      setOpen={setOpen}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleComplete={props.handleComplete}
    />
  )
}

export default Modal
