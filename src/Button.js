import PropTypes from "prop-types";
import styles from "./Button.module.css";
//Button.module.css에서 가져온걸 styles에 담기
function Button({text}) {
    return <button className ={styles.btn}>{text}</button>
}


Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;//App.js에서 Button을
//가져올수 있게 한다!