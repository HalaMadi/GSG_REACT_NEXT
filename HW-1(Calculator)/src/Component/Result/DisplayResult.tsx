interface IProps{
  input:string,
  result:number
}

const DisplayResult=(props:IProps)=> {
 
  
  return (
    <div className="resultBox">
    <span>{props.input}</span> {/* Display the ongoing input */}
    <span>= {props.result}</span> {/* Display the result */}
  </div>
  )
}

export default DisplayResult