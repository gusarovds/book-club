import { FC } from 'react'
import RatingProps from './Rating.types'
import { Rating as RatingTypes} from '@/types/state'
import { Rating as RatingUi } from '@mui/material'
import { Tooltip as TooltipUi } from '@mui/material'
import { RATING_TYPE_TO_HUMAN_READABLE } from '@/constants/i18n'

const Rating: FC<RatingProps> = ({ readers, locale }) => {
    const fields: RatingTypes[] = ['plot', 'atmosphere', 'characters', 'total']
    let count = 0
    const ratings: Record<RatingTypes, number> = Object.values(readers).reduce((acc, cur) => {
        if (cur?.rating) { 
            count++
            fields.forEach((field) => {
                acc[field] += cur?.rating?.[field] ?? 0
            })
        }

        return acc
    }, {
        plot: 0,
        atmosphere: 0,
        characters: 0,
        total: 0
    } as Record<RatingTypes, number>)
    const ratingSum = Object.values(ratings).reduce((acc, sum) => acc + sum, 0)

    return !!(ratingSum > 0) && <div className="text-xl w-full">
        {fields.map((field) => <div key={field} className="flex justify-between mt-4">
            {`${RATING_TYPE_TO_HUMAN_READABLE[field][locale]}:`}
            <TooltipUi placement="left" title={Math.round(ratings[field] / count * 10) / 10}>
                <div className="text-xl"><RatingUi readOnly={true} size="large" defaultValue={ratings[field] / count / 2} precision={0.2}/></div>
            </TooltipUi>
        </div>)}
    </div>
}

export default Rating