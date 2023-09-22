import { store } from "@/store"
import { setStartupNewsList } from "@/store/slice/NewsSlice"
import { getNewsList } from "@/store/api/NewsApi"
// import { Container } from "react-grid-system"
import NewsSlider from "../NewsSlider/NewsSlider"
import styles from "./News.module.scss"

export default async function News() {
  const { isLoading, isFetching, data, error } = await store.dispatch(
    getNewsList.initiate()
  )
  if (data) {
    store.dispatch(setStartupNewsList(data))
  }

  const items = store.getState().newsSlice.startupNews.items

  return (
    <section className={styles.news}>
      {/* {items.length > 0 && items[0].image ? (
        <img
          src={items[0].image.meta.download_url}
          alt={items[0].title}
          className={styles.news__bg}
        />
      ) : (
        )} */}
      {/* <img src="/images/news-bg.jpg" alt="" className={styles.news__bg} /> */}
      {/* <Container className="container"> */}
      <NewsSlider items={items} />
      {/* </Container> */}
    </section>
  )
}
