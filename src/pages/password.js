import Auth from '@/src//layouts/Auth'

import { CHANGE_PASSWORD } from '@/src/graphql/queries'

import { toast } from '@/src/libs/toast'

import { useMutation } from 'graphql-hooks'

import { useForm } from 'react-hook-form'

import { useEffect } from 'react'

const Password = () => {

  const [changePassword, { data }] = useMutation(CHANGE_PASSWORD)

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {

    if (data.password !== data.repeat_password)
      return toast('As senhas devem ser iguais')

    else if (!data.password || !data.repeat_password)
      return toast('Todos os campos devem ser preenchidos')

    changePassword({ variables: { password: data.password } })
    reset()
  }

  useEffect(() => {
    if (data)
      toast('A senha foi alterada!')
  }, [data])

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-md font-medium leading-6 text-gray-700">Alterar a senha</h3>
        <p className="mt-1 text-xs text-gray-600">
          Preencha todos os campos necessários
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Nova senha</label>
            <input {...register('password')} type="password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Repetir senha</label>
            <input {...register('repeat_password')} type="password" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-6 bg-gray-50 text-right">
          <button type="submit" className="uppercase inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Alterar
          </button>
        </div>
      </form>
    </div>
  )
}

Password.Layout = Auth

export default Password