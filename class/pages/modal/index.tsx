import Button from '@material-ui/core/Button'
import Modal from '../../src/components/commons/modal/Modal.container'
import { useState } from 'react'

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Modal handleClose={handleClose} open={open} />
    </div>
  )
}
