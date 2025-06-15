import type { FC } from 'react'
import { Star } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

type Props = {
	name: string
	role: string
	content: string
	rating: number
	avatar: string
}

const Testimonials: FC<Props> = ({ name, role, content, rating, avatar }) => {
	return (
		<Card className='border-0 h-full shadow-lg hover:shadow-xl shadow-purple-500/10 transition-shadow duration-300'>
			<CardContent className='w-full h-full flex flex-col justify-between gap-4'>
				<div className=''>
					<div className='flex items-center mb-4'>
						{[...Array(rating)].map((_, i) => (
							<Star key={i} className='w-5 h-5 text-yellow-400 fill-current' />
						))}
					</div>
					<p className='text-gray-700 mb-6 italic'>"{content}"</p>
				</div>

				<div className='flex items-center'>
					<Image
						src={avatar || '/placeholder.svg'}
						alt={name}
						className='w-12 h-12 rounded-full mr-4'
						width={50}
						height={50}
					/>
					<div>
						<div className='font-semibold text-gray-900'>{name}</div>
						<div className='text-gray-600 text-sm'>{role}</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Testimonials
