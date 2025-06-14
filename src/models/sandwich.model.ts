export interface Relleno{
    lechuga: boolean;
    carne: boolean;
    pepinillo: boolean;
    mostaza: boolean;
    mayonesa: boolean;
}

export const Panes = {
    LACTAL: "lactal",
    SEMILLAS: "semillas"
} as const;

export type Panes = typeof Panes[keyof typeof Panes];

export interface Ingredientes {
    relleno: Relleno;
    pan: Panes;
}
