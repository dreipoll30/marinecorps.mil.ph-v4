'use client'

import { ReactNode, useState } from "react";
import Topbar from "./topbar";

interface Props {
    children?: ReactNode;
}
export default function NavigationBar({ children }: Props) {

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <Topbar toggleMenu={toggleMenu} />
        </>
    )
}