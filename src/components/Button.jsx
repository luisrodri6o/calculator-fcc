
import '../style-sheets/Button.css'

function Button(props){
    const ifOperator = value => {
        return isNaN(value) && (value != '.') && (value != '=')
    };
    return(
        <div 
        className={ `container-button ${ifOperator(props.children) ? 'operator' : null}`}
        onClick ={ ()=> props.clickDrive(props.children)}  > 
            {props.children}
        </div>
    );
}
export default Button;