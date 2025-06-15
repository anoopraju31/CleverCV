import { type FC } from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

type Props = {
	isMenuOpen: boolean
}

const MobileNavigation: FC<Props> = ({ isMenuOpen }) => {
	if (!isMenuOpen) return null

	return (
		<div className='md:hidden'>
			<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t'>
				<Link href='/resume-builder' className='block px-3 py-2 text-gray-700 hover:text-indigo-600'>
					Builder
				</Link>

				<Link href='/resume-parser' className='block px-3 py-2 text-gray-700 hover:text-indigo-600'>
					Parser
				</Link>

				<div className='px-3 py-2 space-y-2'>
					<Button
						variant='ghost'
						className='w-full flex items-center justify-center text-gray-700 cursor-pointer'
					>
						Sign In
					</Button>

					<Button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer'>
						Get Started Free
					</Button>
				</div>
			</div>
		</div>
	)
}

export default MobileNavigation
