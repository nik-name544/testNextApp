import Link from "next/link"
import Head from "next/head" 

export function MainLayout({ children, title = 'Next App' }) { 
    return (
        <>
            <Head>
                <title>{title} | Next some</title>
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>
                {`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: red;      
                    display: flex;
                    justify-content: space-evenly;
                }

                nav a {
                    color: white;
                    margin: auto 0;
                    text-decoration: none;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
                `}
            </style>
        </>
    )
}