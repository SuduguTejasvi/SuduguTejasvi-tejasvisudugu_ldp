export interface customButtonProps {
    variants: 'contained' | 'outlined' | 'text';
    label: string;
    handleButtonClick: () => void;
}

export interface iconProps {
    source: string;
}

export interface customTypographyProps {
    variants: 'h1' | 'h2' | 'h3' | 'h4' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1';
    text: string;
}

export interface homeTitleProps {
    mainheading: string;
    subheading1: string;
    subheading2: string;
    moneyicon: string;
    buttonvariant: 'contained' | 'outlined' | 'text';
    handleGoogleSignIn: () => void;
    googleButtonLabel: string;
    githubButtonLabel:string;
    handleGithubSignIn:()=>void;
}

export interface inputGroupProps {
    inputLabel: string;
    inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: number | string;
}
export interface financeTrackerTemplate{
    children:React.ReactNode;
}
