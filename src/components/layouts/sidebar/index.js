import Image from 'next/image'

import Options from '@/src/components/layouts/options'

const Sidebar = ({ item }) => {

  return (
    <>
      <div className="h-64 bg-white border border-white rounded shadow-lg relative">
        <Image src={item.image} className="rounded object-cover" alt="" layout="fill" />
      </div>

      <Options />
    </>
  )
}

export default Sidebar