import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import styles from "./Items.module.scss"

export default function Items() {
  const items = [
    {
      img: "regulation.svg",
      name: "Regulation",
      desc: "The EXANTE brokerage is licensed by MFSA (Malta), CySEC (Cyprus), SFC (Hong Kong), and FCA (UK). Following MiFID II, we separate EXANTE’s assets from the client’s assets and safeguard the latter on segregated accounts with trusted custodians in Europe and Asia.",
    },
    {
      img: "margin-trading.svg",
      name: "Margin Trading",
      desc: "We enable margin trading for all types of assets – with transparent and predictable costs. Based on individual risk assessment, we may provide financing equivalent to an open-date repo with variable interests for borrowed cash.",
    },
    {
      img: "cross-platform-compatibility.svg",
      name: "Cross-platform<br>Compatibility",
      desc: "The EXANTE desktop edition works smoothly on Windows, macOS and Linux. You can also trade on the go with the native iOS and Android applications or use the full-scale browser version.",
    },
    {
      img: "it-network.svg",
      name: "IT Network",
      desc: "EXANTE operates a distributed IT infrastructure backed by 1,100+ servers across the world. EXANTE commits to the high performance and stability of its trading technology.",
    },
  ]

  return (
    <section className={styles.items}>
      <Container>
        <Row>
          {items.map((item, index) => {
            return (
              <Col xs={3} key={index}>
                <IconItem item={item}></IconItem>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
