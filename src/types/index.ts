export interface IBlogs {
    id?: number;
    title: string;
    content: string;
    authorid?: number;
    _created?: Date | string;
}

export interface IAuthors {
    id?: number;
    name: string;
    email: string;
    _created?: Date | string;
}

export interface ITags {
    id?: number;
    name: string;
    _created?: Date | string;
}

export interface IBlogTags {
    blogid?: number;
    tagid?: number;
}