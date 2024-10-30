import Layout from '../../components/layout';
import { getAllPostIds } from '../../lib/posts';

export default function Post(){
    return <Layout>...</Layout>
}

// Return a list of possible value for id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return{
        paths,
        fallback: false,
    };
}

// Fetch necessary data for the blog post using params.id
export async function getStaticProps({params}) {
    
}