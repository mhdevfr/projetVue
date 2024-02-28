export type categorie = 'gamer' | 'bureau' | 'mac' | 'all';

export interface filtersInterface {
    search:  string;
    priceRange: [number, number];
    categorie: categorie;
}

export interface FilterUpdate {
    search?: string;
    priceRange?: [number, number];
    categorie?: categorie;
}