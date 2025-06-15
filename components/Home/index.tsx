import { type FC } from 'react'

import HeroSection from './HeroSection'
import FeaturesSection from './FeatureSection'
import HowItWorksSection from './HowItWorksSection'
import TestimonialsSection from './TestimonialsSection'

const Home: FC = () => {
	return (
		<main className='w-full'>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TestimonialsSection />
		</main>
	)
}

export default Home
