import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';
<script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin="true"></script>
import 'bootstrap/dist/css/bootstrap.min.css';
import  HeaderStyles  from "../styles/HeaderStyles.module.css";
export default function Header(){
    return (
        <Container fluid className={HeaderStyles.Navigation}>
            <Row >
                <Col lg="5" ><Link href="/"><a>Raymond Timothy Harris</a></Link></Col>
                <Col sm="1"><Link href="/projects"><a>Projects</a></Link></Col>
                <Col sm="1"><Link href="/blog"><a>Blog</a></Link></Col>
                <Col sm="1"><Link href="/about"><a>About</a></Link></Col>
                <Col sm="1">G</Col>
                <Col sm="1">T</Col>
                <Col sm="1">I</Col>
                <Col sm="1">E</Col>
            </Row> 
           
        </Container>
    )
}