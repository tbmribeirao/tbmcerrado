export class Artigos {
    data: Artigo[];
    qtyItems: number;
    pageNumber: number;
    pageSize: number;
}

export class Artigo {
    article_id: number;
    church_id: number;
    church: string;
    title: string;
    verse: string;
    date: Date;
    author: string;
    cover: string;
    text: string;
    active: boolean;
}