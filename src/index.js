const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./database/mongo');
const {insertMenus, getMenus} = require('./database/menus')

const app = express();

const menus = [
    {
        id: 'BS000',
        label: 'Bay Sor',
        meat: [],
        type: 0,
        price: 1000,
    },
    {
        id: 'MJ001',
        label: 'Mju Kreong Sach Ko',
        meat: [],
        type: 0,
        price: 5000
    },
    {
        id: 'CK002',
        label: 'Cha Knhey',
        meat: [
            {
                id: 1,
                label: 'Pork',
                addOnPrice: 0
            },
            {
                id: 2,
                label: 'Chicken',
                addOnPrice: 0
            },
            {
                id: 3,
                label: 'Beef',
                addOnPrice: 2000
            },
        ],
        type: 0,
        price: 5000
    },
    {
        id: 'CK003',
        label: 'Cha Kroeung',
        meat: [
            {
                id: 1,
                label: 'Pork',
                addOnPrice: 0
            },
            {
                id: 2,
                label: 'Chicken',
                addOnPrice: 0
            },
            {
                id: 3,
                label: 'Beef',
                addOnPrice: 2000
            },
        ],
        type: 0,
        price: 5000
    },
    {
        id: 'TP004',
        label: 'Trey Proma Pong Tea Jean',
        meat: [],
        type: 0,
        price: 5000
    },
    {
        id: 'TK005',
        label: 'Trey Kahae Jean',
        meat: [],
        type: 0,
        price: 5000
    },
    {
        id: 'TA006',
        label: 'Trey Andaeng Ang',
        meat: [],
        type: 0,
        price: 5000
    },
    {
        id: 'SJ007',
        label: 'Sach Jean',
        meat: [
{
                id: 1,
                label: 'Pork',
                addOnPrice: 0
            },
            {
                id: 3,
                label: 'Beef',
                addOnPrice: 2000
            },
        ],
        type: 0,
        price: 5000
    },
    {
        id: 'PP007',
        label: 'Pong Jor Pnov',
        meat: [],
        type: 0,
        price: 1000
    },
    {
        id: 'FW000',
        label: 'Tae Teuk Kork',
        meat: [],
        type: 1,
        price: 1000
    },
    {
        id: 'FW001',
        label: 'Pro Vida',
        meat: [],
        type: 1,
        price: 2000
    },
    {
        id: 'FW002',
        label: 'Vital',
        meat: [],
        type: 1,
        price: 2000
    },
    {
        id: 'FW003',
        label: 'Cambodia',
        meat: [],
        type: 1,
        price: 2000
    },
    {
        id: 'FW004',
        label: 'Kulen',
        meat: [],
        type: 1,
        price: 3000
    },
    {
        id: 'ST005',
        label: 'Sting',
        meat: [],
        type: 1,
        price: 3000
    },
    {
        id: 'CH006',
        label: 'Champion',
        meat: [],
        type: 1,
        price: 3000
    },
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', async (req, res) => {
    res.send(await getMenus());
})

startDatabase().then(async () => {
    await insertMenus(menus);

    app.listen(3001, () => {
      console.log('Listening on port 3001');
    })
})
