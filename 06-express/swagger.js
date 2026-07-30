import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API Mahasiswa',
        description: 'API sederhana yang berisi tentang data mahasiswa'
    },
    host: 'localhost:3000',
    basePath: '/mahasiswa',
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];

swaggerAutogen()(outputFile, routes);