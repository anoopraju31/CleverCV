import type { FC, ForwardRefExoticComponent, RefAttributes } from 'react'
import { type LucideProps } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Props = {
	title: string
	description: string
	icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>
	color: string
	shadowColor: string
}

const FeatureCard: FC<Props> = ({ title, description, color, icon: Icon, shadowColor }) => {
	return (
		<Card className={cn('border-0 shadow-lg hover:shadow-xl transition-shadow duration-300', shadowColor)}>
			<CardContent className='p-6'>
				<div className='flex items-center mb-4'>
					<div className={cn('p-3 rounded-lg bg-gray-50', color)}>
						<Icon className='w-6 h-6' />
					</div>
				</div>

				<h3 className='text-xl font-semibold text-gray-900 mb-2'>{title}</h3>
				<p className='text-gray-600'>{description}</p>
			</CardContent>
		</Card>
	)
}

export default FeatureCard
