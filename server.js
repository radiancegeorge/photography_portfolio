const express = require('express');
const cors =  require('cors');

const app = express();


app.use(cors())
const items = [
    {
        name: 'radiance',
        age: '22',
        portfolio: 'web developer'
    },
    {
        name: 'kachi',
        age: '20',
        portfolio: 'web developer'
    }
]
app.get('/', (req, res)=>{
    console.log('sending...');
    res.send(items);
})





app.listen(4000, (e)=>{
    if(e)throw err;
    console.log('app running on port 4000')
})
