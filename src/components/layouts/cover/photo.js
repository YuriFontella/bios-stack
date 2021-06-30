import Image from 'next/image'

const Photo = ({ cover, item }) => {

  if (item.cover?.file || cover)
    return <Image src={cover ? cover : item.cover.file} alt="" className="rounded rounded-t-none object-cover" layout="fill" />

  else return <div className="bg-blue-700 h-full absolute inset-0" />
}

export default Photo