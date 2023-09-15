const photos = [
    {
      name: 'Album',
      img: '/images/photo-test.jpg',
    },
    {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
      {
        name: 'Album',
        img: '/images/photo-test.jpg',
      },
  ]



export const Photos = () => {
    return (        
    <div>
        <ul role="list" className="px-2 sm:px-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-40 sm:mt-60">
                {photos.map((photo) => (
                <li key={photo.name}>
                    <div className="flex items-center gap-x-6">
                        <div>
                            <h3 className="sm:text-xl font-semibold leading-7 tracking-tight text-gray-900 mb-1">{photo.name}</h3>
                            <img src={photo.img} alt={photo.name} className="h-auto max-w-full rounded-lg" />
                        </div>
                    </div>
                </li>
                ))}
        </ul>
    </div>
    )
}