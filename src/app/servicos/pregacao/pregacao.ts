export class Pregacoes {
    data: Pregacao[];
    qtyItems: number;
    pageNumber: number;
    pageSize: number;
}

export class Pregacao {
    cult_id: number;
    church_id: number;
    title: string;
    date: Date;
    preacher: string;
    verse: string
    youtube: string;
    mp3: string;
    active: boolean
    topic_id: number
}