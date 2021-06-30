import Image from 'next/image'

import Options from '@/src/components/layouts/options'

const Sidebar = ({ item }) => {

  return (
    <>
      <div className="flex justify-center sm:justify-start">
        <div className="h-48 sm:h-64 w-48 sm:w-full bg-white border border-white rounded-full sm:rounded shadow-lg relative">
          <Image src={item.image} className="rounded-full sm:rounded object-cover" alt="" layout="fill" />
        </div>
      </div>

      <Options />
    </>
  )
}

export default Sidebar