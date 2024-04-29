import fs from 'fs';

const baseUrl = 'https://verifycerti.vercel.app/certificates/CHED-IIChE-BSPP-24-';

let links = [];
for (let i = 1; i <= 400; i++) {
    links.push(baseUrl + (i < 10 ? '0' : '') + i);
}

fs.writeFileSync('links.json', JSON.stringify(links, null, 2));
console.log('Links file created successfully.');
