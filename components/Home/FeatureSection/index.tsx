import { type FC } from 'react'

import { features } from '@/lib/constants/features'
import FeatureCard from './FeatureCard'

const FeaturesSection: FC = () => {
	return (
		<section
			id='features'
			className='w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col items-center gap-16'
		>
			<div className='w-full flex flex-col items-center gap-16'>
				<div className='w-full flex flex-col gap-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-center text-gray-900'>Why Choose CleverCV?</h2>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto text-balance text-center'>
						Our AI-powered platform combines cutting-edge technology with proven resume strategies to help
						you land your dream job faster.
					</p>
				</div>

				<div className='w-full max-w-7xl grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					{features.map((feature, index) => (
						<FeatureCard key={index} {...feature} />
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturesSection
