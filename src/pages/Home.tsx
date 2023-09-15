const posts = [
  {
    id: 1,
    title: 'Comment s\'équiper pour la rentrée ?',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    image : '/images/shoes.jpg',
    alt : 'Chaussures'
  },
  {
    id: 2,
    title: 'Stages d\'arbitrage 2023-2024',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    image : '/images/arbitre.jpg',
    alt : 'Arbitre'
  },
  {
    id: 3,
    title: 'Les règles du 3x3',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    image : '/images/playground.jpg',
    alt : 'Terrain'
  },
  // More posts...
]

export default function Home() {
  return (
    <main className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl pt-16 sm:pt-32 lg:pt-32 pb-12 sm:pb-24">
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
              Bienvenue sur le site du <span className="text-purple-900">SOCL</span> Basket
            </h1>
            <p className="mt-6 text-sm sm:text-lg leading-8 text-gray-600">
              Vous trouverez ici toutes les infos, les résultats, les différents évènements de la vie du club de Candé-Loiré !
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-end"> <img src="images/basketball.png" alt="Ballon basket" className="h-8 mr-5" />Infos du club</h2>
            <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dolore sint facilis consectetur quibusdam? Numquam veniam dolorem nisi temporibus, asperiores et cumque ab exercitationem deleniti est minima obcaecati nesciunt non pariatur? Vitae sapiente rem ad ipsam quia facilis maxime fuga exercitationem officia minus, aspernatur culpa asperiores fugiat, aperiam in laboriosam?</p>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-10">
          </div>
      </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-end"> <img src="images/basketball.png" alt="Ballon basket" className="h-8 mr-5" />Dernières News</h2>
          </div>
          <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-[#581c87] hover:underline mb-4">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <img src={post.image} alt={post.alt} className="rounded-lg h-60 w-full object-cover" />
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>              
            </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
