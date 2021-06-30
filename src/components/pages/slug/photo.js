import Image from 'next/image'

const Photo = ({ item }) => {

  if (item.cover?.file)
    return <Image src={item.cover.file} className="rounded rounded-t-none object-cover" alt="" layout="fill" />

  else return <div className="bg-blue-700 h-full absolute inset-0" />
}

export default Photo