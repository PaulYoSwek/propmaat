export type LegalTable = {
  headers: string[];
  rows: string[][];
};

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: LegalTable;
  afterTable?: string[];
};

export type LegalDoc = {
  title: string;
  updated: string;
  sections: LegalSection[];
};
