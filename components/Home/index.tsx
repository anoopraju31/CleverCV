import { type FC } from 'react'

import HeroSection from './HeroSection'
import FeaturesSection from './FeatureSection'
import HowItWorksSection from './HowItWorksSection'

const Home: FC = () => {
	return (
		<main className='w-full'>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
		</main>
	)
}

export default Home
