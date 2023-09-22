import styles from "./Person.module.scss"

export default function Person({ item, className, isBig }) {
  if (!item) {
    return null
  }
  return (
    <div
      className={`${styles.person} ${isBig ? styles.isBig : ""} ${className}`}
    >
      {item.photoUploaded && item.photoUrl && (
        <img
          loading="lazy"
          className={styles.person__photo}
          src={item.photoUrl}
          alt={`${item.firstName} ${item.lastName}`}
        />
      )}
      <div className={styles.person__info}>
        <div
          className={styles.person__fullname}
        >{`${item.firstName} ${item.lastName}`}</div>
        {item.jobTitle && (
          <div className={styles.person__jobTitle}>{item.jobTitle}</div>
        )}
      </div>
    </div>
  )
}
