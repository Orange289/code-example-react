import { Container, Row, Col } from "react-grid-system"
import Contact from "./Contact.tsx"
import { useState } from "react"
import ReactPaginate from "react-paginate"
import pStyles from "./Pagination.module.scss"
import styles from "./Contacts.module.scss"

export default function Contacts({ items }) {
  // PAGINATION //
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  if (!items || !items.items) {
    return null
  }

  let searchHeader = ""
  if (items.header) {
    searchHeader = items.header
  }

  const itemsPerPage = searchHeader ? items.items.length : 6

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const paginationItems = items.items
  const endOffset = itemOffset + itemsPerPage

  // let currentItems = isGlobal
  //   ? paginationItems.slice(itemOffset, endOffset)
  //   : paginationItems

  let currentItems = paginationItems.slice(itemOffset, endOffset)

  const pageCount = Math.ceil(paginationItems.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % paginationItems.length

    setItemOffset(newOffset)
  }

  return (
    <section className={styles.contacts}>
      <Container>
        {searchHeader && (
          <h2 className={styles.search_header}>
            {searchHeader} ({items.items.length})
          </h2>
        )}
        {!searchHeader && (
          <div className={styles.results_count}>
            {items.items.length} results found
          </div>
        )}
        <Row>
          {currentItems.map((item) => {
            return (
              <Col xs={6} key={item.id}>
                <Contact item={item} />
              </Col>
            )
          })}
        </Row>
        {items.items.length > itemsPerPage && (
          <ReactPaginate
            className={pStyles.pagination}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            nextLabel=""
            previousLabel=""
            renderOnZeroPageCount={null}
            previousLinkClassName={`${pStyles.pagination__arrow} ${pStyles.pagination__arrow_prev}`}
            nextLinkClassName={`${pStyles.pagination__arrow} ${pStyles.pagination__arrow_next}`}
            disabledLinkClassName={pStyles.disabled}
            pageClassName={pStyles.pagination__page}
            breakClassName={pStyles.pagination__page}
            activeClassName={pStyles.active}
          />
        )}
      </Container>
    </section>
  )
}
