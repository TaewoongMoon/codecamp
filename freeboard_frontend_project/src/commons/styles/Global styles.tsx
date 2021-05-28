import { Global, css } from '@emotion/react'

const reset = css`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'notoSansKR';
    src: url('/fonts/NotoSansKR-Light.otf');
  }
`

const Globalstyles = () => {
  return <Global styles={reset} />
}

export default Globalstyles
