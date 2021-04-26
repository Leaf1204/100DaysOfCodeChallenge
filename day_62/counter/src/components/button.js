const Button = (props) => {
  return(
    <button className="button button1" onClick={props.updateCounter}>{props.lable}</button>
  )
}

export default Button