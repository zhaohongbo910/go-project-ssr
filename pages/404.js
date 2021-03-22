import Link from 'next/link'

export default function Page404() {
    return (
        <div className='w-full h-screen mx-auto  flex items-center flex-wrap justify-center'>
            <div>
                <img src='assets/images/go-icon.jpeg' className='inline-block w-80 h-96' />
                <div className='w-full text-center text-xl'> 呀，走丢了 要不
                    <Link href='/'><a className='text-2xl' style={{ color: "rgba(97,207,222,1)" }}> Go Back </a>
                    </Link>一下</div>
                </div>

        </div>
    )
}