import type { Metadata } from 'next'
import type { FC, ReactNode } from 'react'

import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import './globals.css'

export const metadata: Metadata = {
	title: 'CleverCV - AI Resume Builder',
	description:
		'CleverCV is an AI-powered resume builder that helps you create professional, job-winning resumes in minutes. Customize templates, get smart suggestions, and land your dream job faster'
}

type Props = Readonly<{
	children: ReactNode
}>

export const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang='en'>
			<body className='antialiased'>
				<div className='min-h-screen bg-gray-50'>
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}

export default RootLayout
