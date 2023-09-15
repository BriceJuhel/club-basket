const photos = [
    {
      name: 'Album',
      img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
    },
    {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      },    
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      },    
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      },    
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      },
      {
        name: 'Album',
        img: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      },
  ]



export const Photos = () => {
    return (        
    <div>
        <ul role="list" className="px-2 sm:px-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-40 sm:mt-60">
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