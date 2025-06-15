import { type FC } from 'react'

import HeroSection from './HeroSection'

const Home: FC = () => {
	return (
		<main className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0'>
			<HeroSection />
		</main>
	)
}

export default Home
