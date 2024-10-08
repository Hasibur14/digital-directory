const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://digital:fnH8uAoX1Ku2flGN@cluster0.lfxjcnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {

        const companyCollection = client.db('digitalDirectory').collection('companyData');

        app.get('/company', async (req, res) => {
            const cursor = companyCollection.find()
            const result = await cursor.toArray()
            res.send(result)
        });

        // Get a single company data from db using  id
        app.get('/company/:id', async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await companyCollection.findOne(query)
            res.send(result)
        });


        // company filtering by alphabet
        app.get('/companys/:letter', async (req, res) => {
            const letter = req.params.letter.toUpperCase();
            const cursor = companyCollection.find({ company_name: { $regex: `^${letter}`, $options: 'i' } });
            const result = await cursor.toArray();
            res.send(result);
        });



        app.get('/companyNames/names', async (req, res) => {
            const cursor = companyCollection.find({}, { projection: { _id: 0, company_name: 1 } });
            const companyNames = await cursor.toArray();
            console.log(companyNames)
            res.send(companyNames.map(company => company.company_name));
        });


        app.get('/companyName/filter', async (req, res) => {
            const { name } = req.query;
            const query = name ? { company_name: { $regex: name, $options: 'i' } } : {};
            const result = await companyCollection.find(query).toArray();
            console.log("Filtered Result:", result);
            res.send(result);
        });



        //add Company info in db
        app.post("/add-company", async (req, res) => {
            const companyData = req.body
            const result = await companyCollection.insertOne(companyData);
            res.send(result)
        })


        //Delete  data
        app.delete('/companyDelete/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await companyCollection.deleteOne(query)
            res.send(result);
        })

        // update a job in db
        app.put('/company-update/:id', async (req, res) => {
            const id = req.params.id
            const companyData = req.body
            const query = { _id: new ObjectId(id) }
            const options = { upsert: true }
            const updateDoc = {
                $set: {
                    ...companyData,
                },
            }
            const result = await companyCollection.updateOne(query, updateDoc, options)
            res.send(result)
        });



        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Digital Directory is running')
})


app.listen(port, () => {
    console.log(`Digital Directory is running on port: ${port}`);
})