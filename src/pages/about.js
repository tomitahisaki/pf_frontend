import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'

export default function Home() {
  return (
    <>
      <Head>
        <title>個人開発集</title>
        <meta name="description" content="旅行 音楽 クソアプリ 岐阜県" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Headline title="サイト概要" description="駆け出しエンジニアが学習のために作っているサイトです" />
      
        <Links />
      </main>
    </>
  )
}
