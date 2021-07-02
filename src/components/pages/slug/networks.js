const Networks = ({ item }) => {

  const redirect = (url) => {

    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url
    }

    window.open(url, '_blank')
  }

  return (
    <div className="flex space-x-5">
      {item.networks?.facebook &&
        <button onClick={() => redirect(item.networks.facebook)} className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full w-7 h-7">
          <span className="fab fa-facebook-f" />
        </button>
      }
      {item.networks?.youtube &&
        <button onClick={() => redirect(item.networks.youtube)} className="flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full w-7 h-7">
          <span className="fab fa-youtube text-sm self-center" />
        </button>
      }
      {item.networks?.instagram &&
        <button onClick={() => redirect(item.networks.instagram)} className="bg-gradient-to-tl via-pink-600 to-purple-600 from-yellow-300 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full w-7 h-7">
          <span className="fab fa-instagram" />
        </button>
      }
      {item.networks?.twitter &&
        <button onClick={() => redirect(item.networks.twitter)} className="bg-blue-400 hover:bg-blue-500 focus:ring-blue-400 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full w-7 h-7">
          <span className="fab fa-twitter" />
        </button>
      }
    </div>
  )
}

export default Networks