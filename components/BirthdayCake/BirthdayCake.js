import styles from "./BirthdayCake.module.scss"

export default function BirthdayCake({
  width = 64,
  height = 64,
  className = "",
}) {
  return (
    <div
      className={`${styles.cake} ${className} `}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        loading="lazy"
        src="/images/icons/cake.svg"
        alt="cake icon"
        style={{ width: `${width / 2}px`, height: `${height / 2}px` }}
      />
    </div>
  )
}
