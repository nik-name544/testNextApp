import Link from "next/link"
import { MainLayout } from "../components/MainLayout"


export default function ErrorPage() {
    return (
        <MainLayout>
            <h1>404 not found</h1>
            <p>please <Link href={'/'}><a>go back</a></Link> to save plase</p>
        </MainLayout>

    )
}