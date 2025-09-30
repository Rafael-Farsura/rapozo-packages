export interface sendDocumentsParams {
  id?: string;
  documentFile?: File;
  type?:
    | "IDENTIFICATION"
    | "SOCIAL_CONTRACT"
    | "ENTREPENEUER_REQUIREMENT"
    | "MINUTES_OF_ELECTION"
    | "CUSTOM";
}
