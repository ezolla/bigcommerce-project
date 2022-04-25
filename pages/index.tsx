import Head from 'next/head'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'

import PageWrapper from 'components/PageWrapper'
import Entry from 'components/Entry'
import Button from 'components/Button'
import { Entry as IEntry } from 'safety/interfaces'

const Home = ({ entryIds }) => {
  // State
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(true)
  const [total, setTotal] = useState<number>(0)
  const [entries, setEntries] = useState<IEntry[]>([])

  useEffect(() => {
    // Set total count
    setTotal(entryIds.length)

    // Fetch first 10 entries
    fetchEntries()
  }, [])

  useEffect(() => {
    // Fetch next page of entries
    fetchEntries()
  }, [page])

  // Fetches entries
  const fetchEntries = async () => {
    // Start loading
    setLoading(true)

    // Find page IDs
    const pageIds = entryIds.splice(page * 10 - 10, page * 10)

    // Collected entries
    const collectedEntries: IEntry[] = []

    // Fetch all entries by ID
    await Promise.all(
      pageIds.map(async (id: string) => {
        try {
          // Fetch entry
          const response = await fetch(
            `${process.env.API_URL}/actions/bcCore/interview/getShowcaseEntryById?id=${id}`,
            {
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                Accept: '*/*',
                'User-Agent':
                  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json',
                Connection: 'keep-alive',
              },
            }
          )

          // Find response's data
          const data = await response.json()

          // Add to collection
          if (response.status === 200 && !data.error) {
            collectedEntries.push(data)
          }
        } catch (err) {
          console.log(err)
        }
      })
    )

    // Push entry into state
    setEntries([...entries, ...collectedEntries])

    // Stop loading
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>BigCommerce</title>
      </Head>

      <PageWrapper>
        {/* Header */}
        <Header>
          <h1>Entries</h1>
          <p>
            {loading ? 'Loading data -' : null} {total} total
          </p>
        </Header>

        {/* Entries */}
        <EntriesContainer>
          {entries.map((entry: IEntry, index: number) => (
            <Entry entry={entry} key={index} />
          ))}
        </EntriesContainer>

        {/* Pagination */}
        <PaginationContainer>
          {page * 10 < entryIds.length && entries.length !== 0 ? (
            <Button type='button' onClick={() => setPage(page + 1)}>
              Show more
            </Button>
          ) : null}
        </PaginationContainer>
      </PageWrapper>
    </>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch customer IDs
  const response = await fetch(
    `${process.env.API_URL}/actions/bcCore/interview/getShowcaseEntryIds`,
    {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: '*/*',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/json',
        Connection: 'keep-alive',
      },
    }
  )

  // Find response's data
  const data: string[] = await response.json()

  // Pass data to props
  return { props: { entryIds: data } }
}

const Header = styled.header`
  margin-bottom: 36px;

  h1 {
    font-size: 48px;
    margin-bottom: 8px;
  }
`

const EntriesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 48px;
`

const PaginationContainer = styled.footer`
  margin-top: 48px;
`
