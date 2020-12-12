import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getPosts} from './api/posts';
import Header from '../components/header'
import { Container, Row, Col } from 'react-bootstrap'
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
import 'bootstrap/dist/css/bootstrap.min.css';

About.getInitialProps = async () => {
  const posts = await getPosts();
  console.log(posts);
  return { posts: posts }
}

export default function About(props) {
  return (
    <div>
      <Head>
        <title>Raymond Timothy Harris</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>  
      <Container>
        <Header></Header>
        <Container>
      
        </Container>
      </Container>
      
    </div>
  )
}
