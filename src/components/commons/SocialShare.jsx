import Link from 'next/link'


const SocialShare = ({data}) => (
    <div className="social-share-inner">
    <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
        {data.map((val , i) => (
            <li key={i}>
                <Link href={`${val.link}`}>
                    <a target={val.target || null}>{val.Social}</a>
                </Link>
            </li>
        ))}
    </ul>
    </div>
)
export default SocialShare