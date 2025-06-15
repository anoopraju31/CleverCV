import { type FC } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

type Props = {
	isMenuOpen: boolean
	toggleMenu: () => void
}

const DesktopNavigation: FC<Props> = ({ isMenuOpen, toggleMenu }) => {
	return (
		<div className='flex justify-between items-center h-16'>
			{/* Logo */}
			<div className='flex items-center'>
				<div className='flex-shrink-0'>
					<h1 className='text-2xl font-bold text-indigo-600'>CleverCV</h1>
				</div>
			</div>

			<div className='flex items-center gap-8'>
				{/* Navigation */}
				<nav className='hidden md:flex items-center gap-6 lg:gap-8'>
					<Link href='/resume-builder' className='text-gray-700 hover:text-indigo-600 transition-colors'>
						Builder
					</Link>

					<Link href='/resume-parser' className='text-gray-700 hover:text-indigo-600 transition-colors'>
						Parser
					</Link>
				</nav>

				{/* CTA */}
				<div className='hidden md:flex items-center gap-4'>
					<Button variant='ghost' className='text-gray-700 hover:text-indigo-600'>
						Sign In
					</Button>
					<Button className='bg-indigo-600 hover:bg-indigo-700 text-white'>Get Started Free</Button>
				</div>
			</div>

			{/* Mobile menu button */}
			<div className='md:hidden'>
				<Button variant='ghost' size='sm' onClick={toggleMenu}>
					{isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
				</Button>
			</div>
		</div>
	)
}

export default DesktopNavigation
