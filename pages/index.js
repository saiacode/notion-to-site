import Head from 'next/head'
import Hero from '../components/hero'
import styles from '../styles/Home.module.css'
import * as page from '../lib/page'

export const getStaticProps = async() => {
  const headLine = await page.getHeadline(`${process.env.PAGE_ID}`);
  const children = await page.getChildren(`${process.env.PAGE_ID}`);
  const coverUrl = await page.getCoverUrl(`${process.env.PAGE_ID}`);
  const iconUrl = await page.getIconUrl(`${process.env.PAGE_ID}`);
  return {
    props: {
      headLine,
      children,
      coverUrl,
      iconUrl,
    },
  };
}


export default function Home({ ...props }) {
  return (
      <Hero {...props} />
  )
}
