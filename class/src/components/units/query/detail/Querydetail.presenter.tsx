export default function QuerydetailUI (props) {
  return (
    <div>
      <div>이름: {props.data?.fetchProfile.name}</div>
      <div>나이: {props.data?.fetchProfile.age}</div>
      <div>학교: {props.data?.fetchProfile.school}</div>
    </div>
  )
}
