import Head from 'next/head'
import Header from '../components/header'
import { Container } from 'react-bootstrap';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true" ></script>
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(props: any) {
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
