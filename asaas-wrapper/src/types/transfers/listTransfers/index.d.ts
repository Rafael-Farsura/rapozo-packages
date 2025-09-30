export interface listTransfer {
    'dateCreated[ge]'?: string;
    'dateCreated[le]'?: string;
    'transferDate[ge]'?: string;
    'transferDate[le]'?: string;
    type?: string;
}
