import React, { ReactNode } from 'react';


interface HeadProps {
    children: ReactNode;
}

const Head: React.FC<HeadProps> = ({ children }) => {
    return (
        <header className="header">
            {children}
        </header>
    );
}

export default Head;
