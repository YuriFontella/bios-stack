import Cover from '@/src/components/layouts/cover'
import Sidebar from '@/src/components/layouts/sidebar'

import Loader from '@/src/libs/loader'

import { useStore } from '@/src/contexts/store'

import { useQuery } from 'graphql-hooks'

import { USER } from '@/src/graphql/queries'

import { useEffect } from 'react'

const Private = ({ children }) => {

  const { dispatch } = useStore()

  const { data, loading } = useQuery(USER)

  useEffect(() => {
    dispatch({
      type: 'user',
      user: data
    })
  }, [data])

  return (
    <main className="bg-gray-100 w-full min-h-screen pb-4 font-serif">
      <Loader
        source={data?.user}
        loading={loading}
        component={(item) =>
          <section className="max-w-4xl mx-auto">
            <Cover item={item} />

            <div className="px-2 sm:px-12 -mt-28">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-1">
                  <Sidebar item={item} />
                </div>

                <div className="col-span-3 sm:col-span-2">
                  <div className="p-6 bg-white border border-white rounded shadow-lg relative">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </section>
        }
      />
    </main>
  )
}

export default Private
