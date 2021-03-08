import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

const name = 'Hannele Valtanen'
export const siteTitle = 'Portfolio'

export default function Layout({ children, home }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={home ? styles.headerHome : styles.header}>
                
                <span className={`${styles.siteTitle}`}>Hannele Valtanen</span>

                <Link href="/">
                    <a className={`${styles.siteLogo}`}>
                        <svg data-v-6f9d974a="" height="50" id="logo" viewBox="0 0 53.15 47.48" width="50" xmlns="http://www.w3.org/2000/svg"><title data-v-6f9d974a="">Hannele Valtanen</title><path d="M32.91,47.48v-.66A13.42,13.42,0,0,0,37,45.93a4.55,4.55,0,0,0,2.18-1.55,2.35,2.35,0,0,0,.23-.79c.07-.4.12-.86.17-1.39s.07-1.07.09-1.65,0-1.12,0-1.64c0-1.45.06-2.95.06-4.49V24h-26V38.18q0,1.92.06,3.69a4.7,4.7,0,0,0,.6,2.51,4.83,4.83,0,0,0,2.24,1.71,9.86,9.86,0,0,0,2.83.73v.66H0v-.66a14.35,14.35,0,0,0,3.17-.89,5.88,5.88,0,0,0,2.3-1.55,2.64,2.64,0,0,0,.43-1.09,16.29,16.29,0,0,0,.27-1.75c.06-.66.12-1.37.16-2.14s.07-1.5.07-2.21,0-1.45,0-2.5,0-2.21.07-3.47,0-2.54,0-3.85V8.31a21.77,21.77,0,0,0-.1-2.21,14.61,14.61,0,0,0-.3-1.85A3,3,0,0,0,5.54,3,5.21,5.21,0,0,0,3.26,1.35,13.25,13.25,0,0,0,.2.66V0H19.85V.66a18.78,18.78,0,0,0-2,.4A6.17,6.17,0,0,0,16,1.88a4.61,4.61,0,0,0-1.45,1.55,5.16,5.16,0,0,0-.66,2.51c0,1.53-.08,3.19-.1,5s0,3.49,0,5.11v6.66h26V12.07c0-1.15,0-2.44-.06-3.89-.05-.84-.1-1.71-.17-2.61a4.85,4.85,0,0,0-.62-2.21A5.08,5.08,0,0,0,36.2,1.15a13.3,13.3,0,0,0-3-.49V0H53V.66a10.54,10.54,0,0,0-3.1.89,4.65,4.65,0,0,0-2.24,2,3.85,3.85,0,0,0-.4,1.29c-.09.55-.15,1.16-.2,1.84S47,8.07,47,8.77V30.33c0,1.23,0,2.51,0,3.83s0,2.77,0,4.35c0,1.28,0,2.45.1,3.53a4.82,4.82,0,0,0,.5,2.21A4.52,4.52,0,0,0,50,46.09a13.37,13.37,0,0,0,3.17.73v.66Z" data-v-6f9d974a=""></path></svg>
                    </a>
                </Link>

                <span className={`${styles.siteSubtitle}`}>UX/UI Developer</span>

                <span className={`${styles.update}`}>Last update: March 2021</span>

                {home ? (
                    <>
                        <div className={`${styles.containerPost}`}>
                            <motion.p className={styles.lead}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}>
                                Hello, I’m Hannele Valtanen, UX/UI Designer and Frontend Developer from Tampere Finland. I am passionate about human centered, accessible and beautiful design. I’m self-driven and eager to learn new skills continuously. You can find my experiments also on <a href="https://github.com/hannelevaltanen" target="_blank">Github</a>, <a href="https://codepen.io/nnele/" target="_blank">Codepen</a> and <a href="https://dribbble.com/hannelevaltanen" target="_blank">Dribbble</a>. Let's connect via <a href="https://twitter.com/HanneleValtanen" target="_blank">Twitter</a> and <a href="https://www.linkedin.com/in/hannelevaltanen" target="_blank">LinkedIn</a>.
                            </motion.p>
                        </div>
                    </>
                ) : (
                        <>
                            
                        </>
                    )}

            </header>
            <main className={`${styles.container} ${styles.containerPost}`}>
                {children}
            </main>
            {!home && (
                <div className={`${styles.container} ${styles.containerPost}`}>
                    <Link href="/" className={`${styles.backToHome}`}>
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
            <footer className={`${styles.container} ${styles.footer}`}>
                © Hannele Valtanen 2021
            </footer>
        </div>
    )
}