import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const CTASection: FC = () => {
	return (
		<section className='w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white flex flex-col items-center gap-16 bg-gradient-to-r from-indigo-600 to-green-600'>
			<div className='w-full flex flex-col gap-8 text-center'>
				<div className='w-full flex flex-col gap-4 md:gap-6 items-center'>
					<h2 className='text-3xl sm:text-4xl font-bold text-white'>Ready to Land Your Dream Job?</h2>
					<p className='text-xl text-indigo-100 text-center'>
						Start building your AI-powered resume today and join thousands of successful job seekers.
					</p>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Button
						size='lg'
						className='bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold cursor-pointer'
					>
						Create My Resume for Free
						<ArrowRight className='ml-2 h-5 w-5' />
					</Button>
				</div>

				<div className='flex flex-col sm:flex-row items-center justify-center gap-6 text-indigo-100'>
					<div className='flex items-center'>
						<CheckCircle className='w-5 h-5 mr-2' />
						<span>No credit card required</span>
					</div>

					<div className='flex items-center'>
						<CheckCircle className='w-5 h-5 mr-2' />
						<span>Free forever plan</span>
					</div>

					<div className='flex items-center'>
						<CheckCircle className='w-5 h-5 mr-2' />
						<span>Cancel anytime</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CTASection
