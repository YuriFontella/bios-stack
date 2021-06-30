import { ADD_NETWORKS } from '@/src/graphql/queries'

import { useMutation } from 'graphql-hooks'

import { useForm } from 'react-hook-form'

import { toast } from '@/src/libs/toast'

import { useEffect } from 'react'

const Form = ({ item }) => {

  const { register, handleSubmit } = useForm()

  const [addNetworks, { data }] = useMutation(ADD_NETWORKS)

  const onSubmit = (networks) => {
    addNetworks({
      variables: { networks }
    })

    if (networks)
      Object.assign(item.networks = {}, networks)
  }

  useEffect(() => {
    if (data)
      toast('Salvo!')
  }, [data])

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-md font-medium leading-6 text-gray-700">Redes sociais</h3>
        <p className="mt-1 text-xs text-gray-600">
          Cadastre as que você gostaria de exibir
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Facebook</label>
            <input {...register('facebook')} defaultValue={item.networks?.facebook} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Youtube</label>
            <input {...register('youtube')} defaultValue={item.networks?.youtube} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Instagram</label>
            <input {...register('instagram')} defaultValue={item.networks?.instagram} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>

          <div className="col-span-6">
            <label className="block text-sm font-medium text-gray-700">Twitter</label>
            <input {...register('twitter')} defaultValue={item.networks?.twitter} type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="mt-6 bg-gray-50 text-right">
          <button type="submit" className="uppercase inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form