import styles from "./Modal.module.scss"
import Script from "next/script"
import { useEffect } from "react"

export default function Modal({ link, close }) {
  const iframeStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <section className={styles.modal__body}>
          <slot name="body">
            <button type="button" className={styles.btnClose} onClick={close}>
              Close
            </button>
            <div
              style={{
                padding: "56.25% 0 0 0",
                position: "relative",
              }}
            >
              <iframe
                src={`https://player.vimeo.com/video/${link}&title=0&byline=0&portrait=0`}
                style={iframeStyle}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <Script src="https://player.vimeo.com/api/player.js"></Script>
          </slot>
        </section>
      </div>
      <div className={styles.modalClose} onClick={close}></div>
    </div>
  )
}
