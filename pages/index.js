import Link from "next/link" 
import { MainLayout } from "../components/MainLayout"

export default function Index() {
    return (
        <MainLayout title={"home page"}>
            <h1>Hi new Next</h1>
            <p>
                <Link href={'/about'}>
                    <a>About</a>
                </Link>
            </p>
            <p>
                <Link href={'/posts'}>
                    <a>Posts</a>
                </Link>
            </p>
            <p>text</p>
        </MainLayout>

    )
}