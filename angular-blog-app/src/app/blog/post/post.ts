export interface Post {
    body: string;
    id: number;
    reactions: { likes: number, dislikes: number };
    tags: string[];
    title: string;
    userId: number;
    views: number;
}
