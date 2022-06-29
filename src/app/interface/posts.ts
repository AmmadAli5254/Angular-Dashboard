export interface Posts {
    category: string
    created_at: string
    description: string
    title: string
    updated_at: string
    user: User
    __v: number
    _id: string
}

interface User {
    _id: string
    name: string
    email: string
    password: string
    created_at: string
    __v: number
}
