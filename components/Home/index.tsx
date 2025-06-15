import { type FC } from 'react'

import HeroSection from './HeroSection'
import FeaturesSection from './FeatureSection'
import HowItWorksSection from './HowItWorksSection'
import TestimonialsSection from './TestimonialsSection'
import CTASection from './CTASection'

const Home: FC = () => {
	return (
		<main className='w-full'>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<TestimonialsSection />
			<CTASection />
		</main>
	)
}

export default Home
