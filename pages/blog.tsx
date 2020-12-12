import Head from 'next/head'
import Link from 'next/link'
import { getPosts} from './api/posts';
import Header from '../components/header'
import { Container, Row, Col } from 'react-bootstrap';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin='true'></script>
import 'bootstrap/dist/css/bootstrap.min.css';

Blog.getInitialProps = async () => {
  const posts = await getPosts();
  console.log(posts);
  return { posts: posts }
}
export default function Blog(props) {
  return (
    <div>
      <Head>
        <title>Raymond Timothy Harris</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>  
      <Container fluid>
        <Header></Header>
        <Container >
      
          {props.posts.map(post => (
            
          <Row key={post.id}>
             
            <Col>{post.title}</Col>{post.tags.map(tag =>(
            <Col key={tag.id}>{tag.name}</Col>

            ))}</Row>
          ))}  

          
        </Container>
      </Container>
      
    </div>
  )
}