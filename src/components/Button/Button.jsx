import "./Button.css"

function Button (props){
    const {children,...otherprops}=props;
    return(
        <button {...otherprops} >
        {child ren}
        </button>
    )
}
export default Button;