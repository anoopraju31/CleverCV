import { type FC } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

import { Button } from '@/components/ui/button'

const HeroSection: FC = () => {
	return (
		<section className='relative bg-gradient-to-br from-indigo-50 via-white to-green-50 py-16 xl:py-20'>
			<div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-12 items-center'>
					{/* Content */}
					<div className='text-center lg:text-left'>
						<div className='inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-6'>
							<Sparkles className='w-4 h-4 mr-2' />
							AI-Powered Resume Builder
						</div>

						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6'>
							Craft the Perfect Resume in <span className='text-indigo-600'>Minutes</span> — Powered by AI
						</h1>

						<p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0'>
							CleverCV uses cutting-edge AI to generate job-winning resumes tailored to your industry,
							experience, and dream role.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
							<Button
								size='lg'
								className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg cursor-pointer'
							>
								Get Started For Free
								<ArrowRight className='ml-2 h-5 w-5' />
							</Button>
							<Button
								variant='outline'
								size='lg'
								className='border-gray-300 text-gray-700 px-8 py-4 text-lg cursor-pointer'
							>
								View Sample Resume
							</Button>
						</div>

						<p className='text-sm text-gray-500 mt-4'>
							No credit card required • Free forever plan available
						</p>
					</div>

					{/* Visual Element */}
					<div className='mt-12 lg:mt-0'>
						<div className='relative'>
							<div className='bg-white rounded-lg shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300'>
								<div className='space-y-4'>
									<div className='h-4 bg-gray-200 rounded w-3/4'></div>
									<div className='h-4 bg-gray-200 rounded w-1/2'></div>
									<div className='space-y-2'>
										<div className='h-3 bg-indigo-200 rounded w-full'></div>
										<div className='h-3 bg-indigo-200 rounded w-5/6'></div>
										<div className='h-3 bg-indigo-200 rounded w-4/6'></div>
									</div>
									<div className='space-y-2'>
										<div className='h-3 bg-green-200 rounded w-full'></div>
										<div className='h-3 bg-green-200 rounded w-3/4'></div>
									</div>
								</div>
								<div className='absolute -top-2 -right-2 bg-indigo-600 text-white p-2 rounded-full'>
									<Sparkles className='w-4 h-4' />
								</div>
							</div>

							{/* Before/After indicator */}
							<div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium'>
								AI Enhanced ✨
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
