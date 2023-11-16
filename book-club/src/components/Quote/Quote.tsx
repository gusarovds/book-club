import { FC } from 'react'
import QuoteProps from './Quote.types'

const Quote: FC<QuoteProps> = ({ text, ...rest }) => {
    return <blockquote {...rest} className="text-lg pl-2 text-justify border-l-4 border-lime-300">{text}</blockquote>
}

export default Quote