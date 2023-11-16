import Book from './Book'
import Link from 'next/link'
import { PostsMenu } from '@/components/PostsMenu'

const Header = () => {
    return <div className={`bg-gray-50 sticky top-0 z-10 rounded shadow-lg m-2`}>
        <div className="p-4 flex items-center">
            <div className="h-9 w-9 mr-4">
                <Link href="./">
                    <Book />
                </Link>
            </div>
            <PostsMenu/>
        </div>
    </div>
}

export default Header