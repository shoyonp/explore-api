const user = {id: 19, name: 'Purna', job:'ghumano'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/*
{ id: 19, name: 'Purna', job: 'ghumano' }
{"id":19,"name":"Purna","job":"ghumano"}
*/

const shop = {
    owner: 'Alia',
    address: {
        street: 'voot er goli',
        city: 'ranvir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);