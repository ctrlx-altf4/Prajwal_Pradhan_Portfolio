import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import {Container, Col, Row} from 'reactstrap';
// import Link from '../routes';
import Link from 'next/link'
import moment from 'moment'


const Blog =props=>{
    return(
        <BaseLayout {...props.auth} headerType={'landing'} className="blog-listing-page">
            <div className="masthead" style={{"backgroundImage": "url('/images/blog-home.jpg')"}}>
                <div className="overlay"></div>
                <Container>
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="site-heading">
                        <h1>Fresh Blogs</h1>
                        <span className="subheading">Programming, travelling...</span>
                    </div>
                    </div>
                </div>
                </Container>
            </div>
            <BasePage className="blog-body">
                <Row>
                <Col md="10" lg="8" className="mx-auto">
                    {
                    <React.Fragment>
                    <div  className="post-preview">
                        <Link route={`/blogs/blogId`}>
                        <a>
                            <h2 className="post-title">
                            Very Nice Blog Post
                            </h2>
                            <h3 className="post-subtitle">
                            How I Start Porgramming...
                            </h3>
                        </a>
                        </Link>
                        <p className="post-meta">Posted by
                        <a href="#"> Prajwal Pradhan </a>
                        {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    <div  className="post-preview">
                        <Link route={`/blogs/blogId`}>
                        <a>
                            <h2 className="post-title">
                            Very Nice Blog Post
                            </h2>
                            <h3 className="post-subtitle">
                            How I Start Porgramming...
                            </h3>
                        </a>
                        </Link>
                        <p className="post-meta">Posted by
                        <a href="#"> Prajwal Pradhan </a>
                        {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    <div  className="post-preview">
                        <Link route={`/blogs/blogId`}>
                        <a>
                            <h2 className="post-title">
                            Very Nice Blog Post
                            </h2>
                            <h3 className="post-subtitle">
                            How I Start Porgramming...
                            </h3>
                        </a>
                        </Link>
                        <p className="post-meta">Posted by
                        <a href="#"> Prajwal Pradhan </a>
                        {moment().format('LLLL')}</p>
                    </div>
                    <hr></hr>
                    </React.Fragment>
                    }
                    <div className="clearfix">
                    <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                </Col>
                </Row>

                <footer>
                <Container>
                    <Row>
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <a target="_blank" href="https://www.facebook.com/ctrlx.altf4">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                            </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a target="_blank" href="https://github.com/ctrlx-altf4">
                            <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                            </a>
                        </li>
                        </ul>
                        <p className="copyright text-muted">Copyright &copy; Prajwal Pradhan 2018</p>
                    </div>
                    </Row>
                </Container>
                </footer>
            </BasePage>
        </BaseLayout>
    )
}
export default Blog;