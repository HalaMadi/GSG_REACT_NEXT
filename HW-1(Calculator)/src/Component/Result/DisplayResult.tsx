import '../../index.css'
interface IProps{
    value:string,
    result:string
}
const DisplayResult=(props:IProps)=> {
  return (
<>
<div className='resultBox'>
    <span> {props.value}</span>
    <span> {props.result}</span>
</div>
</>
)
}

export default DisplayResult