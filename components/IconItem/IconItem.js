import styles from "./IconItem.module.scss"

export default function IconItem({ item }) {
  return (
    <div className={styles.iconitem}>
      {item.url ? (
        <a href={item.url} target="_blank">
          <img
            loading="lazy"
            src={`/images/icons/${item.img}`}
            alt={item.name}
          />
          <strong dangerouslySetInnerHTML={{ __html: item.name }}></strong>
          <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
        </a>
      ) : (
        <>
          <img
            loading="lazy"
            src={`/images/icons/${item.img}`}
            alt={item.name}
          />
          <strong dangerouslySetInnerHTML={{ __html: item.name }}></strong>
          {item.label && (
            <>
              <div className={styles.iconitem__label}>{item.label}</div>
              <div className={styles.iconitem__question}>{item.question}</div>
            </>
          )}
          <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
        </>
      )}
    </div>
  )
}
