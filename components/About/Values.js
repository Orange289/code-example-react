"use client"

import { Container, Row, Col } from "react-grid-system"
import IconItem from "../IconItem/IconItem"
import Modal from "../Modal/Modal"
import { useState, useEffect } from "react"
import styles from "./Values.module.scss"

export default function Values() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const items = [
    {
      img: "evangelist-white.svg",
      name: "Change Evangelist",
      desc: "EXANTErs go beyond the ordinary, with instantaneous reaction to the market changes and possibilities to solve any problem. There is always an opportunity to make an impact. EXANTErs see themselves always in continuous growth, and feel empowered to influence change in people, processes, and products as well. Innovation starts with the desire to always improve. <br><br>Everyone at EXANTE is responsible for innovation and moving the company forward.",
      label: "Taking Initiative",
      question: "What can I do to move the company forward?",
    },
    {
      img: "ownership-white.svg",
      name: "Ownership",
      desc: "Ownership is a culmination of personal accountability, a culture of organisational responsibility, and owning the outcomes and consequences of our actions. <br><br>Rather than making excuses, EXANTErs learn from our mistakes, look forward to new challenges, and build positive opportunities in the event of failure. <br><br>We think ahead to prevent avoidable traps, take calculated risks, and make wise decisions. We consider the future when taking tangible steps toward making those improvements.",
      label: "Accountable, Responsive, and Responsible",
      question: "What can I do to improve my results?",
    },
    {
      img: "loyalty-white.svg",
      name: "Loyalty",
      desc: "Loyalty has nothing to do with length of employment and everything to do with actions. EXANTErs work hard for their pay and place in the company, and are committed to our company's success. <br>Loyal EXANTErs never criticise leaders or the company in public, but instead are always stewards of the brand. However, in private, they may disagree. Loyal employees know that we most need to hear what we least want to hear. <br><br>As a company, we are loyal to our EXANTErs and really listen and develop them. We want to help them reach their professional and personal goals and want what's best for them--and they also want what's best for the company. <br><br>Loyal EXANTErs form strong, trust-based relationships within the company, and have a long term commitment to a specific domain that is goal oriented and unruffled by short term turbulence.",
      label: "Reciprocal Success",
      question: "How do I best represent the company?",
    },
    {
      img: "passion-white.svg",
      name: "Passion",
      desc: "EXANTErs are not only aligned with the company mission, but also work with energy and fervour to pursue it. They want what the company wants. <br><br>You can’t teach passion; employees either have it or they don’t, but we work to create an innovative and resonant environment that helps grow the passion. <br><br>We like risk. We are ready to test different approaches, business models, and products to lead our industry.",
      label: "Aligned Energy",
      question: "How can I bring more energy into my role?",
    },
    {
      img: "integrity-white.svg",
      name: "Integrity",
      desc: "Trust and integrity are paramount at EXANTE. Our team always does what's right. <br>We honour our commitments. Customers expect reliable products/services that solve problems and add value. We prioritise understanding and honouring these commitments. <br><br>Respect is fundamental. EXANTErs  embrace diverse perspectives. We treat everyone kindly and respectfully.",
      label: "Meeting commitments",
      question: "What do I stand for?",
    },
  ]
  const modalUrl = "838213702?h=b2f638d8be"

  function closeModal() {
    setIsModalVisible(false)
  }

  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.code === "Escape") {
        closeModal()
      }
    })
  }, [])

  return (
    <>
      <div className="anchor" id="values"></div>
      <section className={styles.values}>
        <Container>
          <h2>Company Values</h2>
          <Row className={styles.values__top}>
            <Col xs={6} className={styles.values__item}>
              <IconItem item={items[0]}></IconItem>
            </Col>
            <Col xs={6}>
              <div
                className={styles.values__video}
                onClick={() => setIsModalVisible(true)}
              >
                <div className={styles.values__videowrapper}>
                  <img
                    loading="lazy"
                    src="/images/icons/play.svg"
                    alt="play icon"
                  />
                  <p>
                    Watch our video<br></br>about internal values
                  </p>
                </div>
              </div>
            </Col>
            {items.slice(1).map((item, index) => {
              return (
                <Col xs={6} key={index} className={styles.values__item}>
                  <IconItem item={item} />
                </Col>
              )
            })}
          </Row>
          {/* <Row className={styles.values__bottom}></Row> */}
        </Container>

        {isModalVisible && (
          <Modal v-if="isModalVisible" link={modalUrl} close={closeModal} />
        )}
      </section>
    </>
  )
}
