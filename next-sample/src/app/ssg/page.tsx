import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from 'next/head'
import Link from "next/link";

type SSGProps = {
  message: string;
}

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>
          이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
        </p>
      </main>
    </div>
  )
}
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `${timestamp}에 getStaticProps가 실행됐습니다.`
  console.log(message);
  return {
    props: {
      message,
    }
  }
}
export default SSG;