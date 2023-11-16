import { FC } from 'react'
import HeadingProps from './Heading.types'
import localFont from 'next/font/local'
const mainFont = localFont({ src: '../../../public/fonts/ac_line.otf' })

const Heading: FC<HeadingProps> = ({ level, text }) => {
    const Tag = level ?? 'h1'
    const fontSizes = {
        h1: '4xl',
        h2: '3xl',
        h3: '2xl'
    }

    return <Tag className={`${mainFont.className} text-red-500 font-semibold ${level === 'h1' ? 'text-4xl' : 'text-3xl'}`}>{text}</Tag>
}

export default Heading