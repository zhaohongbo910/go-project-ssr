import Link from "next/link"
import Avatar from '../avatar'
import DateFormatter from "../date-formatter"
import IconFont from '../IconFont/index'

export default function ArticleList(props) {
    console.log("🚀 ~ file: index.js ~ line 7 ~ ArticleList ~ props", props)
    let { users } = props
    console.log("🚀 ~ file: index.js ~ line 9 ~ ArticleList ~ users", users)
    let user = {

    }
    return (
        <>
            { users && users.map((user,index) => {

                return (<div className='pb-2 mb-2 border-b' key={index}>
                    {/* 标题名称 */}
                    <Link href='/'><a className='text-xl mb-2 inline-block font-semibold'>{user.nickname}</a></Link>
                    <div className='flex'>
                        {/* 内容 */}
                        <p className='text-999 line-clamp pr-2 mr-2'>
                            他生命中的第一个有着丁香般芬芳的姑娘，名叫施绛年，是其好友施蛰存的妹妹，在某年的某天，他们相遇了，这不是美丽的遇见，却在他们最美好的年龄。
                            可待他归来时已是物是人非，施绛年遇到了自己真正爱的人，她勇敢地选择了自己的爱情，独留他一人走不出那飘着绵绵细雨的雨巷。
                            他的梦碎了，他梦里那朵心心念念，爱护有加的花已经吐露花苞，却在快要绽放的那一刻枯萎了。
                </p>
                        {/* 图片 */}
                        <img src={user.avatar_source} className='w-20 h-20 '></img>
                    </div>
                    {/* 底部小图标 */}
                    <div className="flex items-center mt-2" onMouseEnter={(e) => {
                        users[index].loveColor = true
                        console.log(users)
                    }}>
                        <IconFont>
                            <svg t="1616223381826" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2281"><path d="M288 64L64 362.67h224z" fill="#FFD600" p-id="2282"></path><path d="M512 64H288v298.67zM736 64H512l224 298.67z" fill="#FCEE21" p-id="2283"></path><path d="M736 362.67L512 960l448-597.33z" fill="#FFD600" p-id="2284"></path><path d="M960 362.67L736 64v298.67zM64 362.67L512 960 288 362.67z" fill="#FBB03B" p-id="2285"></path><path d="M736 362.67L512 64 288 362.67z" fill="#FFFF00" p-id="2286"></path><path d="M288 362.67L512 960l224-597.33z" fill="#FCEE21" p-id="2287"></path></svg>
                        </IconFont>
                        <span className='text-xs text-999 ml-1'>19803</span>
                        <Link href="/"><a className='text-xs mx-2  text-999'>{user.nickname}</a></Link>
                        <IconFont>
                            <svg t="1616224801589" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10918"><path d="M512.8 13.6C233.6 13.6 8 208.8 8 448.8c0 124.8 60.8 237.6 159.2 316.8L512 1022.4V884c278.4 0 504.8-195.2 504.8-435.2S791.2 13.6 512.8 13.6zM764 526.4c-36.8 0-66.4-29.6-66.4-66.4 0-36.8 29.6-66.4 66.4-66.4s66.4 29.6 66.4 66.4c-0.8 36.8-30.4 66.4-66.4 66.4z m-251.2 0c-36.8 0-66.4-29.6-66.4-66.4 0-36.8 29.6-66.4 66.4-66.4s66.4 29.6 66.4 66.4c-0.8 36.8-30.4 66.4-66.4 66.4z m-250.4 0c-36.8 0-66.4-29.6-66.4-66.4 0-36.8 29.6-66.4 66.4-66.4 36.8 0 66.4 29.6 66.4 66.4 0 36.8-29.6 66.4-66.4 66.4z m0 0" fill={user.loveColor ? 'red' : '#cdcdcd'} p-id="10919"></path></svg>
                        </IconFont>
                        <span className='text-xs text-999 mx-1'>19803</span>
                        <IconFont >
                            <svg t="1616224541119" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7139"><path d="M736 128c-65.952 0-128.576 25.024-176.384 70.464-4.576 4.32-28.672 28.736-47.328 47.68L464.96 199.04C417.12 153.216 354.272 128 288 128c-141.152 0-256 114.848-256 256 0 82.432 41.184 144.288 76.48 182.496l316.896 320.128C450.464 911.68 478.304 928 512 928c33.696 0 61.568-16.32 86.752-41.504l316.736-320 2.208-2.464C955.904 516.384 992 471.392 992 384 992 242.848 877.152 128 736 128z" p-id="7140" fill="#cdcdcd" ></path></svg>
                        </IconFont>
                        <span className='text-xs text-999 mx-1'>19803</span>
                    </div>
                </div>)
            })
            }
        </>
    )
}

export async function getStaticProps(props) {
    console.log("🚀 ~ file: index.js ~ line 45 ~ getStaticProps ~ props", props)


    return {
        props: {
            data: null
        }
    }
}