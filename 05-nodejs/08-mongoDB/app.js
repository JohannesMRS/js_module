import { MongoClient } from 'mongodb';

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  try {
    const database = client.db('polmed');
    const mahasiswa = database.collection('mahasiswa');
    // Queries for a movie that has a title value of 'Back to the Future'
    await mahasiswa.insertOne({
        nim: "2405102155",
        nama: "Cahya Supriadi",
        email: "cahya@gmail.com"
    })
    console.log(mahasiswa);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);