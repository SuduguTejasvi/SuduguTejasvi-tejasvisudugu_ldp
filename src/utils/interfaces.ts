export interface buttonprops{
    variants:'contained'|'text'|'outlined';
    label:string;
    handleClick:()=>void;

} 
export interface textprops{
    variants:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1';
    text:string;
}
export interface customheaderprops{
    headerTitle:string;
    handleAddBooksData:()=>void;
}
export interface dataactionsprops {
    handleGetBooksData: () => void;
    handleUpdateBooksData: () => void;
    handleDeleteBooksData: () => void;
  }

  export interface dataprops {
    id:string;
    title: string;
    author: string;
    genre: string;
    totalCopies: number;
  }
  export interface booksprops {
    title: string;
    author: string;
    genre: string;
    totalCopies: number;
}

export interface bookstoretemplateprops {
  children: React.ReactNode;
}

export type iconButtonColor = 'inherit' | 'primary' | 'secondary' | 'default' | 'error' | 'info' | 'success' | 'warning';