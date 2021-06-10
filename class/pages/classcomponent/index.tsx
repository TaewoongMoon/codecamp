import { Component, createRef, RefObject } from 'react'

class MyClassPage extends Component {
  private inputRef: RefObject<HTMLInputElement>
  constructor(props: any) {
    // 초기값을 정해주는 곳
    super(props)
    this.state = {}
    this.inputRef = createRef()
  }

  componentDidMount() {
    console.log('aaaa')
    this.inputRef.current.focus()
  }

  componentDidUpdate() {
    console.log('dddd')
  }

  onChangeInput(event: any) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <span>나이: </span>
        <input
          type="text"
          name="age"
          onChange={this.onChangeInput.bind(this)}
          ref={this.inputRef}
        ></input>
        <span>학교: </span>
        <input
          type="text"
          name="school"
          onChange={this.onChangeInput.bind(this)}
        ></input>
      </div>
    )
  }
}

export default MyClassPage
