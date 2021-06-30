import { useMutation } from 'graphql-hooks'

import Photo from '@/src/components/layouts/cover/photo'

import { UPLOAD } from '@/src/graphql/queries'

import { useState } from 'react'

const Cover = ({ item }) => {

  const [cover, setCover] = useState(null)

  const [upload] = useMutation(UPLOAD)

  const handleChange = (event) => {
    event.preventDefault()

    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])
    reader.onloadend = () => {
      upload({
        variables: {
          file: reader.result
        }
      })

      setCover(reader.result)
    }

    event.target.value = null
  }

  return (
    <div className="h-80 border border-white border-t-0 rounded rounded-t-none shadow-lg relative">
      <Photo cover={cover} item={item} />

      <label className="absolute right-0 mr-2 sm:mr-12 mt-4 py-1 px-2 border border-transparent shadow-sm text-xs rounded font-medium text-gray-800 bg-white cursor-pointer z-50">
        <span className="leading-normal uppercase">Alterar</span>
        <input type='file' className="hidden" onChange={handleChange} />
      </label>
    </div>

  )
}

export default Cover
