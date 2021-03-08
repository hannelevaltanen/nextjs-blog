import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from '../components/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/case'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import { motion } from 'framer-motion'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd}`}>
        <motion.ul className={utilStyles.list} layoutId="post">
          {allPostsData.map(({ id, date, title, client, imgUrl }) => (
            <li className={utilStyles.listItem} key={id}>
              
              <Link href={`/case/${id}`}>
                <a className={utilStyles.caseItem}>
                  <div className={`${utilStyles.caseImage}`}>
                    <Image
                      src={imgUrl}
                      alt="Picture of the author"
                      width={440}
                      height={660}
                    />
                  </div>
                  <h2
                    className={`${utilStyles.caseHeading}`}>
                    <small><Date dateString={date} /> — Case {client}</small>
                    {title}
                  </h2>
                </a>
              </Link>
              <br />
              <motion.small
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className={utilStyles.lightText}>
              </motion.small>
            </li>
          ))}
        </motion.ul>
      </section>
    </Layout>
  )
}