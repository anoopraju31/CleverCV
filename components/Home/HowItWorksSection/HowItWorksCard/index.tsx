import type { FC, ForwardRefExoticComponent, RefAttributes } from 'react'
import { type LucideProps } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

type Props = {
	step: string
	title: string
	description: string
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
}

const HowItWorksCard: FC<Props> = ({ step, title, description, icon: Icon }) => {
	return (
		<div className='relative'>
			<Card className='border-0 shadow-lg hover:shadow-xl transition-shadow shadow-purple-600/10 duration-300 h-full'>
				<CardContent className='p-8 text-center'>
					<div className='relative mb-6'>
						<div className='w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4'>
							<Icon className='w-8 h-8 text-white' />
						</div>
						<div className='absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
							{step}
						</div>
					</div>
					<h3 className='text-xl font-semibold text-gray-900 mb-4'>{title}</h3>
					<p className='text-gray-600'>{description}</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default HowItWorksCard
