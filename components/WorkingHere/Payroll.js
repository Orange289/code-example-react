import { Container, Row, Col } from "react-grid-system"
import styles from "./Payroll.module.scss"

export default function Payroll() {
  return (
    <>
      <div className="anchor" id="payroll-policy"></div>
      <section className={styles.payroll}>
        <Container>
          <Row className={styles.payroll__policy}>
            <Col xs={5.5}>
              <h2>Payroll</h2>
              <p>
                Your payments are accrued throughout the month and paid as
                defined by your agreement. The details can be found in the
                Payroll Policy.
              </p>
              <a
                href="https://confluence.exante.eu/display/HA/Payroll+Policy"
                target="_blank"
              >
                See details here
              </a>
            </Col>
            <Col xs={0.5}></Col>
            <Col xs={6}>
              <div className={styles.payroll__important}>
                The payment is outlined in your agreement and&nbsp;should be
                regarded as confidential.
              </div>
              <p>
                Please refrain from sharing your salary information with anyone
                within the company except for your immediate manager and the HR
                Manager. Comprehensive details regarding the breakdown of your
                payments will be provided to you on, or shortly after, payday.
              </p>
            </Col>
          </Row>
          <Row className={styles.payroll__policy}>
            <Col xs={5}>
              <div className={styles.payroll__salary} id="salary-review">
                <h3>Reimbursement Request</h3>
                <p>
                  You can reimburse your out-of-pocket expenses, such as
                  representation costs and business trip expenses.
                </p>
                <div>
                  <a href="https://confluence.exante.eu/display/HA/Instruction+for+Reimbursement+Request+Process">
                    Read more
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={1}></Col>
            <Col xs={5}>
              <div className={styles.payroll__salary} id="salary-review">
                <h3>Crypto Payment Instruction</h3>
                <p>
                  If you receive your salary in stablecoins, learn how to use
                  crypto wallets and withdraw your money.
                </p>
                <div>
                  <a
                    href="https://confluence.exante.eu/pages/viewpage.action?pageId=1814444391"
                    target="_blank"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          {/* <div className={styles.payroll__salary} id="salary-review">
            <h3>Salary Review Process</h3>
            <p>
              Your salary is subject to review annually in February and adjusted
              in line with your performance.<br></br>The salary review process
              will consider your performance in your role, market rates for your
              role and the Company’s ability to pay.
            </p>
            <div className={styles.payroll__note}>
              <img src="/images/icons/attention.svg" alt="attention icon" />
              Reviews will not necessarily lead to an increase.
            </div>
          </div> */}
        </Container>
      </section>
    </>
  )
}
