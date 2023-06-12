const products = [
    {
        id: 1,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Crocken'", 
        description: "Pan de papa , mayonesa Crocken ahumada, pechuga Crocken , lechuga, tomate y cebolla colorada encurtida.",
        price: 2669,
        img: "burguer-crocken.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {   
        id: 2,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Hot Spicy'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2709,
        img: "burguer-hot-spicy.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.4
    },
    {
        id: 3,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Crunchy'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2769,
        img: "burguer-crunchy.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.8
    },
    {
        id: 4,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Original'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2789,
        img: "burguer-original.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 5,                                                        
        type: "burguer",
        name: "Sandwich de Pollo Frito 'De la Casa'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2829,
        img: "burguer-de-la-casa.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 6,
        type: "burguer",
        name: "Sandwich de Pollo Frito 'Americano'", 
        description: "Pan de papa, mayonesa Crocken picante, pechuga Crocken y ajies en conserva.",
        price: 2969,
        img: "burguer-americano.jpg",
        cantidad: 1,
        title: "la mas caliente",
        stars: 4.5
    },
    {
        id: 7,
        type: "burguer",
        name: "Sandwich Veggie", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2629,
        img: "burguer-veggie.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 8,
        type: "combo-1",
        name: "Combo Crocken Mini", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-crocken-mini.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 9,
        type: "combo-1",
        name: "Combo Crocken Junior", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-crocken-jr.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 10,
        type: "combo-1",
        name: "Combo Crocken Medium", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-crocken-medium.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 11,
        type: "combo-1",
        name: "Combo Crocken Senior", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-crocken-senior.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 12,
        type: "combo-1",
        name: "Combo de 3 Alitas Crocken", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-3alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 13,
        type: "combo-1",
        name: "Combo de 4 Alitas Crocken", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-4alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 14,
        type: "combo-1",
        name: "Combo de 5 Alitas Crocken", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-5alitas-crunch.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 15,
        type: "combo-1",
        name: "Pop´s Crocken", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "pops-crocken.jpg",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
    {
        id: 16,
        type: "combo-1",
        name: "Pop´s Crocken", 
        description: "Pan de papa, mayonesa Crocken verde, rúcula, tomate, coleslaw, cebolla morada encurtida y queso tybo.",
        price: 2649,
        img: "combo-pechugas-crocken.webp",
        cantidad: 1,
        title: "nuevo",
        stars: 4.5
    },
]

const appState = {
    activeFilter: 'burguer',
}