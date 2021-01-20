import { useRouter } from "next/router"
import { MainLayout } from "../../components/MainLayout" 


export default function Post(data) {
    const router = useRouter()
    const { id } = router.query;
    let urlOfPhoto = data[0][id].url
    let textData = data[1] 
    return (
        <MainLayout>
            <div className="serv-data">
                <h1>Post {id}</h1>
                <img src={urlOfPhoto} alt="photo" width="150" />
                <h2>{textData.title}</h2>
                <p>{textData.body}</p>
            </div>
            <div className="serv-data_new-way">

            </div>
        </MainLayout>
    )
}

Post.getInitialProps = async (ctx) => {
    const { id } = ctx.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
    const resPhoto = await fetch(`https://jsonplaceholder.typicode.com/photos`).then((res) => res.json())
    return await [resPhoto, res]
}
 