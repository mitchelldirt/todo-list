export interface toDoItem {
    title: string;
    description?: string;
    dateTime?: Date;
    project?: string;
    id?: string;
    checked: boolean;
}

export interface toDoItemArray {
    value: string;
    array: toDoItem[];
}

type SvgInHtml = HTMLElement & SVGElement;