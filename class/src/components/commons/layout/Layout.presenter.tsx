const LayoutUI = ({ children }) => {
  return (
    <div>
      <div>헤더</div>
      <div>{children}</div>
      <div>푸터</div>
    </div>
  )
}

export default LayoutUI
