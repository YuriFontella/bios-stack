import { ADD_PROFILE } from '@/src/graphql/queries'

import { toast } from '@/src/libs/toast'

import { useMutation } from 'graphql-hooks'

import { useEffect } from 'react'

import { useForm } from 'react-hook-form'

const Form = ({ item }) => {

  const [addProfile, { data }] = useMutation(ADD_PROFILE)

  const { register, handleSubmit } = useForm()

  const onSubmit = (profile) => {
    addProfile({ variables: { profile } })

    if (profile)
      Object.assign(item.profile = {}, profile)
  }

  useEffect(() => {
    if (data)
      toast('Salvo!')
  }, [data])

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-md font-medium leading-6 text-gray-700">Perfil</h3>
        <p className="mt-1 text-xs text-gray-600">
          Esses dados serão exibidos publicamente
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Seu nome</label>
            <input {...register('name')} defaultValue={item.profile?.name} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium text-gray-700">Sobrenome</label>
            <input {...register('last_name')} defaultValue={item.profile?.last_name} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Localização</label>
            <input {...register('localization')} defaultValue={item.profile?.localization} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Contato</label>
            <input {...register('contact')} defaultValue={item.profile?.contact} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Profissão</label>
            <input {...register('career')} defaultValue={item.profile?.career} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Biografia</label>
            <textarea {...register('biography')} defaultValue={item.profile?.biography} rows="5" className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded" />
          </div>
        </div>
        <div className="mt-6 bg-gray-50 text-right">
          <button type="submit" className="uppercase inline-flex justify-center py-2 px-2.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form