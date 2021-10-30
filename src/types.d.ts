export interface toDoItem {
    title: string;
    description?: string;
    dateTime?: string;
    project?: string;
    id?: string;
}

export interface toDoItemArray {
    value: string;
    array: toDoItem[];
}

type SvgInHtml = HTMLElement & SVGElement;