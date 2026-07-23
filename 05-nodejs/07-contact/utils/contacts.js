import fs from 'fs';

const dirPath = './data';

if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}

const filePath = './data/contacts.json';

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, '[]', 'utf-8');
};

export const loadContact = ()=>{
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};

const saveData = (contacts)=>{
    fs.writeFileSync(filePath, JSON.stringify(contacts));
};

export const addContact = (contact)=>{
    const newContacts = loadContact();
    newContacts.push(contact);
    saveData(newContacts);
};

export const cekDuplikat = (email)=>{
    const contacts = loadContact();
    return contacts.find(contact=>contact.email === email);
}

export const findContact = (id)=>{
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    const contact = contacts.find(item=>item.id === id);
    return contact;
};