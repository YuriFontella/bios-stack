import { SpeakerphoneIcon } from '@heroicons/react/solid'

const Toast = ({ message }) => {

  return (
    <div className="fixed w-full top-0 z-50">
      <div className="flex justify-center items-center z-50 space-x-3 text-white text-xs p-3 shadow-xl bg-blue-500">
        <span>
          <SpeakerphoneIcon className="h-5 w-5" />
        </span>
        <span>
          <p className="font-medium">{message}</p>
        </span>
      </div>
    </div>
  )
}

export default Toast
