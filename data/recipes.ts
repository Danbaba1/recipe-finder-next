export interface Recipe {
    id: string;
    name: string;
    minutes: number;
    ingredients: string[];
}

export const RECIPES: Recipe[] = [
    { id: 'jollof', name: 'Jollof rice', minutes: 60, ingredients: ['Rice', 'Tomatoes', 'Peppers', 'Onions'] },
    { id: 'puff-puff', name: 'Puff-puff', minutes: 45, ingredients: ['Flour', 'Yeast', 'Sugar', 'Water'] },
    { id: 'moi-moi', name: 'Moi moi', minutes: 90, ingredients: ['Beans', 'Peppers', 'Onions'] },
    { id: 'egusi', name: 'Egusi soup', minutes: 75, ingredients: ['Egusi', 'Spinach', 'Palm oil'] },
];