// "use client"
import { store } from "@/store"
import { getNewsList } from "@/store/api/NewsApi"
import { setStartupNewsList } from "@/store/slice/NewsSlice"
import Intro from "@/components/NewsPage/Intro"
import AllNews from "@/components/NewsPage/AllNews"
// import DATA from "@/data/news"

export const revalidate = 60

export default async function NewsPage() {
  const { isLoading, isFetching, data, error } = await store.dispatch(
    getNewsList.initiate()
  )
  if (data) {
    store.dispatch(setStartupNewsList(data))
  }

  const items = store.getState().newsSlice.startupNews.items

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
          <Intro items={items.slice(0, 2)} />
          <AllNews items={items.slice(2)} />
        </>
      ) : null}
    </>
  )
}
