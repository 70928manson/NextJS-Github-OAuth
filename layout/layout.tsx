import React from 'react';
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

import styles from '../styles/Layout.module.css'

const Layout = ({ children } : Props) => {
    return (
        <div className="w-full h-full flex absolute bottom-0 left-0 top-0 right-0">
            <div className="m-auto bg-slate-50 rounded-md w-2/5 h-2/4 flex"> {/**width: 60%; height:75% */}
                <div className="flex flex-col w-full justify-evenly">
                    <div className="text-center py-10">
                      {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;