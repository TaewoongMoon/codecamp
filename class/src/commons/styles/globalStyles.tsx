import { Global, css } from '@emotion/react'

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  input {
    border: 0px;
    padding: 0px;
  }

  @font-face {
    font-family: 'aaa';
    src: url('/fonts/scifibit.ttf');
  }
`

const Globalstyles = () => {
  return <Global styles={reset} />
}

export default Globalstyles
