
type User = {
    id: number,
    name: string,
    email: string
}

type Boss = {
    id: number,
    name: string,
    contact: string
}

type Gig = {
    userId: number,
    id: number,
    title: string,
    body: string
    // description: string,
    // owner: Boss,
    // location: string
}