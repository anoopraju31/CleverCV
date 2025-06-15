import { FC } from 'react'

import { steps } from '@/lib/constants/howItWorks'
import HowItWorksCard from './HowItWorksCard'

const HowItWorksSection: FC = () => {
	return (
		<section
			id='how-it-works'
			className='w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col items-center gap-16'
		>
			<div className='w-full flex flex-col items-center gap-16'>
				<div className='w-full flex flex-col gap-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 text-center'>
						How AI Helps You Get Hired Faster
					</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto text-center'>
						Our intelligent system tailors your resume to job descriptions, uses industry-specific phrases,
						and adapts tone for corporate, creative, or technical roles.
					</p>
				</div>

				<div className='w-full max-w-7xl grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					{steps.map((step) => (
						<HowItWorksCard key={step.id} {...step} />
					))}
				</div>
			</div>
		</section>
	)
}

export default HowItWorksSection
