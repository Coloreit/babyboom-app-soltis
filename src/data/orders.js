export const ORDERS = [
    {
        id: '1',
        date: new Date('2020-09-15T03:24:00'),
        total: 7800,
        items: [
            {
                id: '1',
                category: '1',
                name: 'Body',
                description: 'Varón, 0 a 3 meses',
                price: 800,
                quantity: 3,
            },
            {
                id: '2',
                category: '2',
                name: 'Mamadera',
                description: 'Marca Avent, 80ml',
                price: 1200,
                quantity: 1,
            }
        ]
    },
    {
        id: '2',
        date: new Date('2020-09-16T03:24:00'),
        total: 6600,
        items: [
            {
                id: '4',
                category: '2',
                name: 'Jabón',
                description: 'Marca Petit Enfant bebé',
                price: 350,
                quantity: 2
            }
        ]
    }
]