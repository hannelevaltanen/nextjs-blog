import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styles from '../../components/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import { motion } from 'framer-motion'

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
            <article className={`${styles.container} ${styles.containerPost}`}>
                
                <small>{postData.client} · {postData.role} · <Date dateString={postData.date} /></small>
                <h1 className={utilStyles.headingXl} layoutId="post">{postData.title}</h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }} className={utilStyles.lightText}>

                    

                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                />

                <h2 className={`${utilStyles.headingXl} $`}>{postData.tooling}</h2>
            </article>
        </Layout>
    )
}