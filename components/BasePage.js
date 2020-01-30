import { Container} from 'reactstrap';
import Head from 'next/head';


const BasePage=props=>{
    const {children, className,title}= props;
    return(
        <React.Fragment>
            <Head>
            <script src="https://kit.fontawesome.com/a98d73a116.js" crossOrigin="anonymous"></script>
                <title>Prajwal Pradhan</title>
            </Head>
            <div className={`base-page ${className}`}>
                <Container>
                    {title && <div className="page-header"><h1 className="page-header-title">{title}</h1></div>}
                    {children}
                </Container>
            </div>
        </React.Fragment>
    )
}

BasePage.defaultProps={
    className:''
}
export default BasePage;