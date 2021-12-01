import style from "./style.module.css";

const Button = (props) => {
  return (
    <button {...props} className={style.btn}>
      {props.children}
    </button>
  );
};

export default Button;
