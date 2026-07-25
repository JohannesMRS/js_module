import { MongoClient } from 'mongodb';

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  try {
    const database = client.db('polmed');
    const mahasiswa = database.collection('mahasiswa');
    // // Queries for a movie that has a title value of 'Back to the Future'

    // Create Data
    // await mahasiswa.insertOne({
    //     nim: "2405102155",
    //     nama: "Cahya Supriadi",
    //     email: "cahya@gmail.com"
    // })
    // console.log(mahasiswa);


    // Read Data
    // const result = await mahasiswa.find().toArray();
    // console.log(result);

    // Update Data
    // const filter = {nama: "Ryan Limbong"};
    // const options = {upsert: true};
    // const updateDoc = {
    //     $set: {
    //         email: "ryan25@gmail.com"
    //     }
    // }

    // const result = await mahasiswa.updateOne(filter, updateDoc, options);

    // Delete Data
    const data = {nama: "Cahya Supriadi"};
    const result = await mahasiswa.deleteOne(data);
    const showRes = await mahasiswa.find().toArray();
    console.log(showRes);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);