import { graphQLClient } from '@/src/graphql/client'

import { SHOW } from '@/src/graphql/queries'

import Loader from '@/src/libs/loader'

import Image from 'next/image'
import Router from 'next/router'

import Meta from '@/src/components/meta'

import Networks from '@/src/components/pages/slug/networks'

import Photo from '@/src/components/pages/slug/photo'

const Profile = ({ data }) => {

  return (
    <main className="bg-gray-100 w-full min-h-screen pb-4">
      <Loader
        source={data?.user}
        component={(item) =>
          <div className="max-w-4xl mx-auto">
            {item.profile?.name && item.profile?.last_name &&
              <Meta
                title={`${item.profile?.name} ${item.profile?.last_name}`}
                image={item.image}
              />
            }
            <div className="h-80 border border-white border-t-0 rounded rounded-t-none shadow-lg relative">
              <Photo item={item} />

              <button onClick={() => Router.push('/login')} className="absolute right-0 mr-2 sm:mr-12 mt-4 py-1.5 px-2.5 border border-transparent shadow-sm text-xs rounded font-medium text-gray-800 bg-white z-50">
                <span className="uppercase">Login</span>
              </button>
            </div>

            <div className="p-2 sm:p-12 -mt-24">
              <div className="bg-white border border-white rounded shadow-lg pb-8 relative">

                <div className="absolute left-6 top-4 hidden sm:block">
                  <Networks item={item} />
                </div>

                <div className={`flex flex-col items-center ${item.profile ? 'space-y-12' : 'space-y-2'}`}>
                  <div className="-mt-16 border-4 border-white rounded-full">
                    <Image src={item.image} className="rounded-full object-cover" alt="" width="150" height="150" />
                  </div>

                  <div className="flex flex-col items-center">
                    <h1 className="capitalize text-2xl font-bold leading-normal text-gray-800">{item.profile?.name} {item.profile?.last_name}</h1>

                    {item.profile?.localization &&
                      <div className="text-xs leading-normal mt-2 text-gray-600 font-medium uppercase">
                        <span className="fas fa-map-marker-alt mr-1 text-gray-500" /> {item.profile?.localization}
                      </div>
                    }
                  </div>

                  {item.networks && Object.values(item.networks).indexOf("") !== 0 &&
                    <div className="sm:hidden">
                      <Networks item={item} />
                    </div>
                  }

                  <div className="flex flex-col space-y-2">

                    {item.profile?.contact &&
                      <p className="text-gray-600 text-center font-light leading-relaxed">
                        <span className="fas fa-phone-alt mr-2 text-gray-500" /> {item.profile?.contact}
                      </p>
                    }

                    {item.profile?.career &&
                      <p className="text-gray-600 text-center font-light leading-relaxed">
                        <span className="fas fa-briefcase mr-2 text-gray-500" /> {item.profile?.career}
                      </p>
                    }

                    <p className="text-gray-600 text-center font-light leading-relaxed">
                      <span className="fas fa-envelope mr-2 text-gray-500" /> {item.email}
                    </p>
                  </div>

                  {item.profile?.biography &&
                    <div className="w-full border-t border-gray-200">
                      <div className="text-md leading-relaxed text-gray-600 text-center px-8 pt-11 pb-4">
                        {item.profile?.biography}
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        }
      />
    </main>
  )

}

export async function getServerSideProps({ query }) {

  const { data } = await graphQLClient.request({
    query: SHOW,
    variables: { slug: query.slug }
  })

  return {
    props: { data }
  }
}

export default Profile