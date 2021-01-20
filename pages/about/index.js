import Router from "next/router"
import { MainLayout } from "../../components/MainLayout"
import React, { useState } from 'react'

export default function About() {
    const [data, setData] = useState(1)
    const linkClickHandler = () => {
        Router.push("/")
    }
    const onClickHandler = () => {
        setData(data + 1)
    }
    return (
        <MainLayout title={'About page'}>
            <h1 onClick={onClickHandler}>About page{data}</h1>
            <button onClick={linkClickHandler}>go back to home page</button>
            <button onClick={() => Router.push('/posts')}>go to posts page</button>
        </MainLayout>
    )
}