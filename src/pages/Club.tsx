const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
    },
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
      },
      {
          name: 'Leslie Alexander',
          role: 'Co-Founder / CEO',
        },
        {
          name: 'Leslie Alexander',
          role: 'Co-Founder / CEO',
        },
        {
          name: 'Leslie Alexander',
          role: 'Co-Founder / CEO',
        },
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
          },
          {
              name: 'Leslie Alexander',
              role: 'Co-Founder / CEO',
            },
            {
              name: 'Leslie Alexander',
              role: 'Co-Founder / CEO',
            },
            {
              name: 'Leslie Alexander',
              role: 'Co-Founder / CEO',
            },
  ]

  const teams = [
    {
      name: 'U7/U9',
      img: 'images/team1.jpg',
    },
    {
        name: 'U11',
        img: 'images/team1.jpg',
      },
      {
        name: 'U13',
        img: 'images/team1.jpg',
      },
      {
        name: 'U15',
        img: 'images/team1.jpg',
      },
      {
        name: 'U18',
        img: 'images/team1.jpg',
      },
      {
        name: 'Sénior F',
        img: 'images/team1.jpg',
      },
      {
        name: 'Séniors M',
        img: 'images/team1.jpg',
      },
      {
        name: 'Loisirs F',
        img: 'images/team1.jpg',
      },
      {
        name: 'Loisirs M',
        img: 'images/team1.jpg',
      },

  ]
  
  export default function Example() {
    return (
      <div className="bg-white py-24 sm:py-32 mt-8 sm:mt-16">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl flex item-end"><img src="images/basketball.png" alt="Ballon basket" className="h-8 mr-5" />Le bureau 2023-2024</h2>
            <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 grid-cols-2 gap-y-2 sm:grid-cols-4 sm:gap-y-2 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-purple-900">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl flex item-end"><img src="images/basketball.png" alt="Ballon basket" className="h-8 mr-5" />Les équipes 2023-2024</h2>
            <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3"></div>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 grid-cols-2 gap-y-2 sm:grid-cols-2 sm:gap-y-2 xl:col-span-2">
            {teams.map((team) => (
              <li key={team.name}>
                <div className="flex items-center gap-x-6">
                  <div>
                    <h3 className="sm:text-2xl font-semibold leading-7 tracking-tight text-gray-900 mb-1">{team.name}</h3>
                    <img src={team.img} alt={team.name} className="rounded-lg h-60 w-full object-cover" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      

      
    )
  }
  