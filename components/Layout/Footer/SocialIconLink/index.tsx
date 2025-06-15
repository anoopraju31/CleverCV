import { type FC } from 'react'
import { type IconType } from 'react-icons'
import Link from 'next/link'

type Props = {
	label: string
	href: string
	icon: IconType
}

const SocialIconLink: FC<Props> = ({ label, href, icon: Icon }) => {
	return (
		<Link href={href}>
			<span className='sr-only'>{label}</span>
			<Icon className='w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors' />
		</Link>
	)
}

export default SocialIconLink
