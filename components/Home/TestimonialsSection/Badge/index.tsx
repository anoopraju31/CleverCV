import React, { FC } from 'react'

type Props = {
	title: string
}

const Badge: FC<Props> = ({ title }) => {
	return <div className='text-sm font-medium'>{title}</div>
}

export default Badge
