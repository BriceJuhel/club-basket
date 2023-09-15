import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'


const navigation = [
  { name: 'Le club', href: '/club'},
  { name: 'Articles', href: '#' },
  { name: 'Plannings', href: '#' },
  { name: 'Résultats', href: '#' },
  { name: 'Contact', href: '/contact' },
]

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 lg:top-5 z-50 2xl:w-2/3 2xl:mx-auto ">
        <nav className="flex items-center lg:justify-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1 max-w-xs lg:absolute lg:inset-x-12 lg:top-0 lg:z-50">
            <a href="/" className="-m-1.5 p-1.5">
              <img
                className="sm:h-32 h-16 w-auto"
                src="/images/logo.png"
                alt="Logo"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink key={item.name} to={item.href} className="text-sm lg:text-lg leading-6 text-gray-900 hover:text-[#581c87] relative group" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'bold'})}>
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-2 h-1 bg-yellow-400 transform -translate-x-1/2 group-hover:w-full group-hover:transition-all transition-all"></span>
              </NavLink>
            ))}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>                
  )
        }