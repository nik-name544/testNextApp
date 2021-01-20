import { MainLayout } from "../components/MainLayout";
import Head from "next/head"

export default function Posts(){
    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next Course</title>
            </Head>
            <h1>Posts page</h1>
        </MainLayout>
    )
}