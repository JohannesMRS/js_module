const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const kontak = require('./contact');

yargs().command({
    command: 'add',
    describe: 'Menambah Kontak Baru',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string',
        },
        noHp: {
            describe: 'Nomor HP',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHp: argv.noHp,
        };
        kontak.simpanData(contact.nama,contact.email,contact.noHp);
    }
}).help()
.parse(hideBin(process.argv));


yargs().command({
    command: 'edit',
    describe: 'Mengedit Data Kontak',
    builder: {
        nama: {
            describe: 'Nama Lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: true,
            type: 'string',
        },
        noHp: {
            describe: 'Nomor HP',
            demandOption: false,
            type: 'string',
        }
    },
    handler(argv){
        const contact = {
            nama: argv.nama,
            email: argv.email,
            noHp: argv.noHp,
        }
        kontak.editData(contact.nama, contact.email, contact.noHp);
    }
}).help()
.parse(hideBin(process.argv));

