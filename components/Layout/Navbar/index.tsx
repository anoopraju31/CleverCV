'use client'

import { type FC, useState } from 'react'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'

const Navbar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleToggleMenu = () => setIsMenuOpen((prev) => !prev)

	return (
		<header className='bg-white shadow-sm sticky top-0 z-50'>
			<div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
				<DesktopNavigation isMenuOpen={isMenuOpen} toggleMenu={handleToggleMenu} />
				<MobileNavigation isMenuOpen={isMenuOpen} />
			</div>
		</header>
	)
}

export default Navbar
