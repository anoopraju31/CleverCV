import { type FC } from 'react'

import HeroSection from './HeroSection'
import FeaturesSection from './FeatureSection'

const Home: FC = () => {
	return (
		<main className='w-full'>
			<HeroSection />
			<FeaturesSection />
		</main>
	)
}

export default Home
