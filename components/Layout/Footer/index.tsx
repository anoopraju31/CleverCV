import { type FC } from 'react'
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from 'react-icons/lu'

import SocialIconLink from './SocialIconLink'

const Footer: FC = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className='bg-gray-900 text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Brand */}
					<div className='col-span-1 md:col-span-2'>
						<h3 className='text-2xl font-bold text-indigo-400 mb-4'>CleverCV</h3>
						<p className='text-gray-300 mb-6 max-w-md'>
							AI-powered resume builder helping job seekers craft perfect resumes and land their dream
							jobs faster.
						</p>

						<div className='flex items-center gap-4'>
							<SocialIconLink label='Facebook' href='#' icon={LuFacebook} />
							<SocialIconLink label='Twitter' href='#' icon={LuTwitter} />
							<SocialIconLink label='LinkedIn' href='#' icon={LuLinkedin} />
							<SocialIconLink label='Instagram' href='#' icon={LuInstagram} />
						</div>
					</div>

					{/* Product */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Product</h4>
						<ul className='space-y-2 text-gray-300'>
							<li>
								<a href='/resume-builder' className='hover:text-white transition-colors'>
									Resume Builder
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Templates
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Cover Letters
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Pricing
								</a>
							</li>
						</ul>
					</div>

					{/* Resources */}
					<div>
						<h4 className='text-lg font-semibold mb-4'>Resources</h4>
						<ul className='space-y-2 text-gray-300'>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Blog
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Career Tips
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Resume Examples
								</a>
							</li>
							<li>
								<a href='#' className='hover:text-white transition-colors'>
									Help Center
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
					<p className='text-gray-400 text-sm'>© {currentYear} CleverCV. All rights reserved.</p>
					<div className='flex space-x-6 mt-4 md:mt-0'>
						<a href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
							Privacy Policy
						</a>
						<a href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
							Terms of Service
						</a>
						<a href='#' className='text-gray-400 hover:text-white text-sm transition-colors'>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
