import DaumPostCodeUI from './Address.presenter'

export default function Postcode(props: any) {
  return (
    <DaumPostCodeUI
      handleTest={props.handleTest}
      setOpen={props.setOpen}
      handleComplete={props.handleComplete}
      handleClose={props.handleClose}
    />
  )
}
