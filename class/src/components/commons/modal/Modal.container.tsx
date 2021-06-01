import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import { forwardRef, ReactElement, Ref } from 'react'
import ModalUI from './Modal.presenter'

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function Modal({ handleClose, open }) {
  return (
    <ModalUI Transition={Transition} handleClose={handleClose} open={open} />
  )
}
