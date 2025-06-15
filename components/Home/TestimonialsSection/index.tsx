import type { FC } from 'react'
import { testimonials, trustBadges } from '@/lib/constants/testimonials'
import Testimonials from './TestimonialsCard'
import Badge from './Badge'

const TestimonialsSection: FC = () => {
	return (
		<section
			id='testimonials'
			className='w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col items-center gap-16'
		>
			<div className='w-full flex flex-col items-center gap-16'>
				<div className='w-full flex flex-col gap-4'>
					<h2 className='text-3xl sm:text-4xl font-bold text-gray-900 text-center'>
						What Job Seekers Are Saying
					</h2>
					<p className='text-xl text-gray-600 text-center'>
						Join thousands of professionals who've accelerated their careers with CleverCV
					</p>
				</div>

				<div className='w-full max-w-7xl grid auto-rows-min grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 md:gap-8'>
					{testimonials.map((testimonial) => (
						<Testimonials key={testimonial.id} {...testimonial} />
					))}
				</div>

				{/* Trust Badges */}
				<div className='flex flex-wrap md:justify-center items-center gap-4 sm:gap-6 md:gap-8 text-gray-500'>
					{trustBadges.map((badge) => (
						<Badge key={badge.id} title={badge.title} />
					))}
				</div>
			</div>
		</section>
	)
}

export default TestimonialsSection
