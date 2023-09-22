"use client"

import { Container, Row } from "react-grid-system"

export default function DivisionsWrap({
  children,
  className,
  key,
}: {
  children: React.ReactNode
  className?: string
  key?: string
}) {
  return (
    <Container>
      <Row key={key} className={className}>
        {children}
      </Row>
    </Container>
  )
}
