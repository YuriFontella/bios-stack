import { signOut, useSession } from "next-auth/client"

import Link from 'next/link'
import { useRouter } from 'next/router'

const Options = () => {

  const [session] = useSession()

  const router = useRouter()

  return (
    <section className="py-0 mt-6 sm:py-5 sm:mt-0">
      <ul className="space-y-8 p-6 sm:p-0 bg-white sm:bg-transparent border border-white sm:border-0 rounded shadow sm:shadow-none">
        <li>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
            <span>Opções</span>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/profile">
                <a className={`text-sm font-medium ${router.asPath === '/profile' ? 'text-blue-700' : 'text-gray-500'}`}>
                  Editar informações
                </a>
              </Link>
            </li>
            <li>
              <Link href="/networks">
                <a className={`text-sm font-medium ${router.asPath === '/networks' ? 'text-blue-700' : 'text-gray-500'}`}>
                  Cadastrar redes sociais
                </a>
              </Link>
            </li>
            <li>
              <a href={session.name} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-500">
                Abrir a minha página
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
            <span>Sistema</span>
          </div>

          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/password">
                <a className={`text-sm font-medium ${router.asPath === '/password' ? 'text-blue-700' : 'text-gray-500'}`}>
                  Alterar a senha
                </a>
              </Link>
            </li>
            <li>
              <button className="text-sm font-medium text-gray-500" onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
                Sair do sistema
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Options