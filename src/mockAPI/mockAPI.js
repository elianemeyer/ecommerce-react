const data = [
    {
        id: 0,
        name: "Tigre",
        price: 250,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/lienzo-tigre.jpg"
    },

    {
        id: 1,
        name: "Margaritas",
        price: 135,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/lienzo-margaritas.jpg" 
    },

    {
        id: 2,
        name: "Mandalas",
        price: 185,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/lienzo-mandalas.jpg"
    },

    {
        id: 3,
        name: "Cienpiés",
        price: 135,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image:  "lienzo-cienpies.jpg" 
    },

    {
        id: 4,
        name: "Círculo",
        price: 155,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/lienzo-circulo.jpg"
    },

    {
        id: 5,
        name: "Atardecer",
        price: 185,
        category: "canvas",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/lienzo-hojas-agua.jpg"
    },

    {
        id: 6,
        name: "Cushion",
        price: 95,
        category: "deco",
        stock: 3,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/cojin-hojas.jpg"
    },

    {
        id: 7,
        name: "Cushion Mandala",
        price: 115,
        category: "deco",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/cojin-mandala.jpg"
    },

    {
        id: 8,
        name: "T-shirt 1",
        price: 50,
        category: "clothing",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/camiseta-1.jpg"
    },

    {
        id: 9,
        name: "T-shirt 2",
        price: 50,
        category: "clothing",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/camiseta-2.jpg"
    },
    
    {
        id: 10,
        name: "T-shirt 3",
        price: 50,
        category: "clothing",
        stock: 1,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/camiseta-3.jpg"
    },

    {
        id: 11,
        name: "Hut",
        price: 65,
        category: "clothing",
        stock: 4,
        description: "Black leaves canvas / Botanical wall art canvas / abstract print canvas / large home wall decor / ecoprint textile art", 
        image: "/img/shop/sombrero.jpg"
    }
];

export function getItems() {
    return new Promise ((resolve) => {
        setTimeout(() => resolve(data), 2000);
    });
} 

export function getItem(idParams) {
    return new Promise ((resolve) => {
        let itemAsked = data.find((item) => {
            return item.id === Number(idParams);
        });
        setTimeout(() => resolve(itemAsked), 2000);
    });
}

export function getItemsByCategory(idCategoryParams) {
    return new Promise ((resolve) => {
        let filterItems = data.filter( item => item.category === idCategoryParams)
        setTimeout(() => resolve(filterItems), 2000);
    });
}