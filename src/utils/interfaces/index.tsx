export interface NavButtonProps {
    label: string;
    variants: 'contained' | 'text' | 'outlined';
    handleClick: () => void;
  }
  export interface NavHeaderProps{
    handleHome:()=>void;
    handleAbout:()=>void;
    handleContact:()=>void;
    hlabel:string;
    alabel:string;
    clabel:string;
  }
export interface IconProps{
    source:string
}
export interface TextProps{
    variants:'h4'|'h6'|'subtitle1'|'h3', 
    text:string
}
export interface ButtonProps{
    variants:'contained'|'outlined'|"text",
    label:string,
    handleClick:()=>void;
}
export interface InputProps{
    text:string;
    types:'string'|'password';
}