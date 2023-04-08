import burger from '../assets/burger-small.jpg';
import pizza from '../assets/pizza-small.jpg';
import pasta from '../assets/pasta-small.jpg';
import cheesesteak from '../assets/cheesesteak.jpg';
import coke from '../assets/coke.jpg';

export const PAGEITEMS = [
    {
        id: 0,
        name: 'Burger',
        image: burger,
        description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, barbecued, or flame broiled.',
        featured: true,
        price: 8.99
    },
    {
        id: 1,
        name: 'Cheese Pizza',
        image: pizza,
        description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
        featured: true,
        price: 15.99
    },
    {
        id: 2,
        name: 'Pasta',
        image: pasta,
        description: 'Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily. It is also commonly used to refer to the variety of pasta dishes.',
        featured: true,
        price: 12.99
    },
    {
        id: 3,
        name: 'Cheese Steak',
        image: cheesesteak,
        description: 'Cheesesteak, also known as a Philly cheesesteak and by the portmanteau cheesesteak sandwich, is a sandwich made from thinly sliced pieces of beefsteak and melted cheese in a long hoagie roll.',
        featured: false,
        price: 10.99
    },
    {
        id: 4,
        name: 'Coke',
        image: coke,
        description: 'Coca-Cola is a carbonated soft drink manufactured by The Coca-Cola Company.',
        featured: false,
        price: 4.99
    }
];