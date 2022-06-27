import React from "react";

const ButtonPrimary = ({ children, href, additionalClass }) => {
    return (
        <a className={`bg-primary rounded-full py-2 px-7 inline-block font-bold border-2 border-transparent hover:bg-primary/20 hover:border-primary cursor-pointer ${additionalClass}`} href={href}>
            {children}
        </a>
    );
};

export default ButtonPrimary;
