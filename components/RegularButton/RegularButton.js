import styles from "./RegularButton.module.scss"

export default function RegularButton(props) {
  return (
    <>
      {props.link ? (
        <a
          target={props.external && "_blank"}
          href={props.link}
          scroll={false}
          className={`${styles.regularbutton} ${
            props.className ? props.className : ""
          } ${
            (props.btnStyle === "secondary" ||
              props.btnStyle === "secondaryGreen") &&
            styles.regularbutton_secondary
          } ${props.btnStyle === "white" && styles.regularbutton_white}
            ${
              props.btnStyle === "secondaryGreen" &&
              styles.regularbutton_secondaryGreen
            }
            `}
        >
          <span>{props.text || "Sign up"}</span>
        </a>
      ) : (
        <button
          onClick={props.onClick}
          className={`${styles.regularbutton} ${
            props.className ? props.className : ""
          } ${
            props.btnStyle === "secondary" && styles.regularbutton_secondary
          } ${props.btnStyle === "white" && styles.regularbutton_white}`}
          type={props.type || "button"}
        >
          <span>{props.text || "Sign up"}</span>
        </button>
      )}
    </>
  )
}
