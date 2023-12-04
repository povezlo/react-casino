export interface IPost {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export type IRequestCreatePostApi = Pick<IPost, 'body' | 'title'| "userId">