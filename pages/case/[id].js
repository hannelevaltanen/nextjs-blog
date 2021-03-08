import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/case'
import { motion } from 'framer-motion'

import Head from 'next/head'
import Date from '../../components/date'

import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article className={utilStyles.article}>
                
                <header className={utilStyles.articleHeader}>
                    
                    <motion.small
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0 }}
                        className={utilStyles.caseHeading}>
                        <Date dateString={postData.date} /> — {postData.client} — {postData.role}
                    </motion.small>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className={utilStyles.heading2Xl}>{postData.title}</motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}>
                        {postData.tooling}
                    </motion.p>

                </header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }} className={utilStyles.lightText}>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                />

            </article>
        </Layout>
    )
}