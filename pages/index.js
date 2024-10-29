import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        As a software engineer, I bring a diverse skill set honed through my Bachelor's degree in Software Development. My expertise spans Secure App Development, Machine Learning, Neural Networks, and proficiency in Agile Development and DevOps practices. While my previous role involved C# and .NET, I also enjoy using them in personal projects.
        <br/><br/>
        My goal is to secure a challenging software engineering role where I can apply my skills, learn from experienced colleagues, and contribute to cutting-edge solutions. I'm open to exploring opportunities that align with my passion for technology and continuous growth.
        <br/><br/>
        During my studies at SETU, I had the privilege of working on diverse projects, including the implementation of mitigations to common vulnerabilities in web applications, and developing a simple Java application by following the Test-Driven Development process. This experience has shaped my problem-solving abilities and instilled a strong work ethic.
        <br/><br/>
        I welcome networking opportunities and look forward to connecting with fellow professionals, recruiters, and industry leaders. Feel free to reach out—I'd love to discuss software development, share insights, and explore potential collaborations.
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title}) =>(
                <li className={utilStyles.listItem} key={id}>
                  {title}
                  <br/>
                  {id}
                  <br />
                  {date}
                </li>
              ))}
            </ul>
      </section>
    </Layout>
  );
}