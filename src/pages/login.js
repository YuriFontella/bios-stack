import { LockClosedIcon, UserCircleIcon, BanIcon } from '@heroicons/react/solid'

import { useForm } from 'react-hook-form'

import { signIn, getCsrfToken, getSession } from 'next-auth/client'

import { useRouter } from 'next/router'

const Login = () => {

  const route = useRouter()

  const { register, handleSubmit } = useForm()

  const onSubmit = (credentials) => {
    signIn('credentials', credentials)
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 px-4 sm:px-0">
      <div className="max-w-sm w-full space-y-8 mt-32 sm:mt-48">
        <div>
          <div className="flex justify-center">
            <UserCircleIcon className="h-16 w-16 text-blue-600" aria-hidden="true" />
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded shadow-sm space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="current-email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="E-mail"
                {...register('email')}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                {...register('password')}
              />
            </div>

            {route.query.error && <div className="flex space-x-2 items-center text-white text-sm p-3 rounded bg-red-500">
              <BanIcon className="w-5 h-5" />
              <span>
                <b className="capitalize">Atenção!</b> Usuário ou senha incorretos.
              </span>
            </div>}
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-semibold rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition active:bg-blue-400"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-blue-500 group-hover:text-blue-400" aria-hidden="true" />
              </span>
              Entrar
            </button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm leading-5">
            <span className="px-2 text-gray-500 bg-gray-100">
              ou
            </span>
          </div>
        </div>

        <button onClick={() => signIn('auth0')} type="button" className="w-full py-2 px-6 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
          <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z" />
          </svg>
          Google
        </button>
      </div>
    </div>
  )

}

export async function getServerSideProps(context) {

  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: '/profile'
      }
    }
  }

  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}

export default Login
