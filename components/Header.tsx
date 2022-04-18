import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="netflix-logo"
          width={100}
          height={100}
          className="object-contain cursor-pointer"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New and Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div>
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline"></p>
      </div>
    </header>
  )
}

export default Header
