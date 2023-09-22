import styles from "./Loader.module.scss"

export default function Loader({ width, height }) {
  return (
    <div
      className={styles.loader}
      style={{ width: width, height: height, textAlign: "center" }}
    >
      <img
        loading="lazy"
        style={{ maxWidth: "200px" }}
        src="/images/icons/spinner.svg"
        alt="spinner"
      />
    </div>
  )
}
