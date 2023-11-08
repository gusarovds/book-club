import Image from 'next/image'
import Book from './Book'
import Link from 'next/link'

const Header = () => {
    return <div className={`bg-gray-50 sticky top-0 z-10 rounded shadow-lg m-2`}>
        <div className="">
            <div className="p-4">
                <div className="w-5 h-5">
                    <Link href="./">
                        <Book />
                    </Link>
                </div>
            </div>
        </div>
    </div>
}

export default Header