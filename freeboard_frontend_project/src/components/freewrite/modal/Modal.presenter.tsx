import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import Postcode from '../address/Address.container'
const ModalUI = (props: any) => {
  return (
    <div>
      <Button
        style={{
          width: '124px',
          height: '52px',
          marginLeft: '16px',
          backgroundColor: 'black',
          cursor: 'pointer',
          color: 'white',
          fontSize: '16px'
        }}
        onClick={props.handleClickOpen}
      >
        우편번호 검색
      </Button>
      {props.open && (
        <Dialog
          open={true}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <Postcode
            setOpen={props.setOpen}
            handleComplete={props.handleComplete}
            handleClose={props.handleClose}
          />
        </Dialog>
      )}
    </div>
  )
}

export default ModalUI
