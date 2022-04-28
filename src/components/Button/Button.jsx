import "./Button.css"

function Button (props){
    const {children,...otherprops}=props;
    return(
        <button {...otherprops} >
        {children}
        </button>
    )
}
export default Button;