import connectDb from '../../../components/hoc/withDb';
import Book from '../../../api/models/book';
const handler = (req, res) => { 

    let id;
    if(req.query.id){
        id = req.query.id;
    }
    const bookData = req.body;


    switch (req.method) {
        case 'GET':
            Book.find(id,(err,foundBook)=>{
                if(err){
                    return res.status(422).send(err);
                }
                foundBook.set(bookData);
                foundBook.save((err,savedBook)=>{
                    if(err){
                        return res.status(422).send(err);
                    }
                    return res.json(foundBook);
                });
            })
          break

        case 'POST':
            const book  = new Book(bookData);
            book.save((err,createdBook)=>{
                if(err){
                  return res.status(422).send(err);
                }
                return res.json(createdBook);
              })
          break

        case 'DELETE':
            Book.deleteOne({_id:id},(err,deletedBook)=>{
                if(err){
                    return res.status(422).send(err);
                }
                return res.json({status:"DELETED"});
            })
        default:
          res.status(405).end() //Method Not Allowed
          break
      }
 
};
export default connectDb(handler);