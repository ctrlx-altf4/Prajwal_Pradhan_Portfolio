import { useRouter } from 'next/router';
import BaseLayout from '../../components/layout/BaseLayout';
import axios from 'axios';
import BasePage from '../../components/BasePage';


export default function Post(props) {
  const router = useRouter();
  const { post } = props;
  return (
     <BaseLayout>
         <BasePage>
            <h1>{router.query.id}</h1>
            <h2>post: {post.body}</h2>
         </BasePage>
     </BaseLayout>  
  );
}

Post.getInitialProps= async({query})=>{
   let post={}
   try{
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post=res.data;
   }
   catch(err){
      console.error(err);
   }
  
   return{ post };
}