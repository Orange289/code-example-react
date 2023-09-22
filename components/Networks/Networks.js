"use client"
import { Container } from "react-grid-system"
import styles from "./Networks.module.scss"

export default function Networks({ items }) {
  return (
    <section className={styles.networks}>
      <Container>
        <h2>Social Networks</h2>
        <table className={styles.networks__table}>
          <tbody>
            <tr>
              {items.slice(0, 3).map((item, index) => {
                return (
                  <td key={index}>
                    <a
                      className={styles.networks__pic}
                      href={item.url}
                      target="_blank"
                    >
                      <img loading="lazy" src={item.img} alt="social network" />
                    </a>
                    {/* <ul className={styles.networks__links}>
                      {item.links.map((link, linkIndex) => {
                        return (
                          <a key={linkIndex} target="_blank" href={link.url}>
                            {link.name}
                          </a>
                        )
                      })}
                    </ul> */}
                  </td>
                )
              })}
            </tr>
            <tr className={styles.networks__secondrow}>
              {items.slice(3, 5).map((item, index) => {
                return (
                  <td key={index}>
                    <a
                      className={styles.networks__pic}
                      href={item.url}
                      target="_blank"
                    >
                      <img loading="lazy" src={item.img} alt="social network" />
                    </a>
                    {/* <ul className={styles.networks__links}>
                      {item.links.map((link, linkIndex) => {
                        return (
                          <a key={linkIndex} target="_blank" href={link.url}>
                            {link.name}
                          </a>
                        )
                      })}
                    </ul> */}
                  </td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </Container>
    </section>
  )
}
