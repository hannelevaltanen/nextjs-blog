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
            <header className={home? styles.headerHome : styles.header}>
                {home ? (
                    <>
                        <motion.img layoutId="profile"
                            src="/images/profile.jpg"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <motion.h1 layoutId="title" className={utilStyles.heading2Xl}>{name}</motion.h1>
                        <div className={styles.containerPost}>
                            <motion.p className={styles.lead}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}>
                                Hello, I’m Hannele. UX/UI Designer and Frontend Developer from Finland. I am passionate about human centered, accessible and beautiful design. I love to learn all the new things. You can find my experiments also on Github, Dribbble and Codepen. Let's connect via Twitter and LinkedIn.
                            </motion.p>
                        </div>
                    </>
                ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <motion.img layoutId="profile"
                                        src="/images/profile.jpg"
                                        className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <motion.h2 className={utilStyles.headingLg} layoutId="title">
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </motion.h2>
                        </>
                    )}
            </header>
            <main className={`${styles.container} ${styles.containerPost}`}>
                {children}
            </main>
            {!home && (
                <div className={`${styles.container} ${styles.containerPost}`}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}