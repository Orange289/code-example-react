import { store } from "@/store"
import { setStartupNewsList } from "@/store/slice/NewsSlice"
import { getNewBySlug, getNewsList } from "@/store/api/NewsApi"
import Intro from "../NewPage/Intro"
import New from "../NewPage/New"
// import { usePathname } from "next/navigation"

export const revalidate = 60

export default async function NewsPage({ slug }) {
  const { isLoading, isFetching, data, error } = await store.dispatch(
    getNewBySlug.initiate({ slug, fields: "*" })
  )
  const newsRes = await store.dispatch(getNewsList.initiate())
  if (newsRes.data) {
    store.dispatch(setStartupNewsList(newsRes.data))
  }

  const items = store.getState().newsSlice.startupNews.items
  const filteredItems = [...items]
  for (let i = 0; i < filteredItems.length; i++) {
    if (data.items[0].id == filteredItems[i].id) {
      filteredItems.splice(i, 1)
      break
    }
  }

  return (
    <>
      {error ? (
        <>
          <p>Oh no, there was an error</p>
        </>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <Intro item={data.items[0]} />
          <New item={data.items[0]} items={filteredItems} />
        </>
      ) : null}
    </>
  )
}
