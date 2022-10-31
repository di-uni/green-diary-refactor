export interface PostType {
    zero: number,
    carbon: number, 
    food: number,
    others: number,
}

export interface Post {
    id: number,
    date: string,
    title: string, 
    writer: string,
    image: string,
    contents: string,
    timestamp: number,
}

export interface User {
    id: number,
    name: string,
    email: string,
}