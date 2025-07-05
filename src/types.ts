export interface Ibook {
    _id: string
    title: string,
    author: string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'HISTORY' | 'BIOGRAPHY' | 'FANTASY',
    isbn: string,
    description?: string,
    copies: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
};

export type DraftBook = Pick<Ibook, "title" | "author" | "genre" | "isbn" | "description" | "copies" >;

export interface Iborrow {
    book: string,
    quantity: number,
    dueDate: Date
};

export interface IborrowedBook {
    book : {
        title: string,
        isbn: string
    },
    totalQuantity: number
};