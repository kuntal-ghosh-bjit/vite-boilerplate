export interface Todo {
    id?: string;
    text: string;
    completed: boolean;
}

export interface TodoLibrary {
    all: Todo[];
}
