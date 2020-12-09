import express from 'express'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import firebase from 'firebase'
import bodyParser from 'body-parser';
dotenv.config();

const main = async () => {

    //express setup
    const port = 8080;
    const app = express();
    app.listen(port , () => {
        console.log(`Api is listening on port : ${port}`);
    });

    //middlewares
    app.use(bodyParser.json());
    app.use('/', authMiddleware);
    
    //mongo setup
    const uri = "mongodb+srv://shlokm289:quiver1985@cluster0.ccgx8.mongodb.net/indebit-main?retryWrites=true&w=majority";
    const client = new MongoClient(uri , {
        useUnifiedTopology: true
    });
    await client.connect();
    console.log("Connection established: ",client.isConnected());
}
main();