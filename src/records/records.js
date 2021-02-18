const receipt1 =
{
    person: 'Andre',
    order: {
        main: 'Burrito',
        protein: 'Organic Tofu',
        rice: 'Purple Rice',
        sauce: 'Green Crack',
        toppings: [
            'Baby Bok Choy', 'Cucumber Kimchi'
        ],
        drink: 'Korchata',
        cost: 22
    },
    paid: false
}

const receipt2 = {
    person: 'Katelyn',
    order: {
        main: 'Rice Bowl',
        protien: 'Ginger Soy Chix',
        rice: 'Sticky Rice',
        sauce: 'Korrilla',
        toppings: [
            'Yuzu Pickled Sweet Pepper', 'Kale'
        ],
        drink: 'Korchata',
        cost: 19
    },
    paid: false
}

const receipt3 = {
    person: 'Bruno',
    order: {
        main: 'Salad Bowl',
        protien: 'Organic Tofu',
        rice: 'none',
        sauce: "K'lla",
        toppings: [
            'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
        ],
        drink: 'Sparkling Blood Orange Soda',
        cost: 20
    },
    paid: false
}

export { receipt1, receipt2, receipt3 };
