import React from "react";
import Topbar from "../components/topbar";
import clsx from "clsx";
import Invitation from "../components/invitation";
import LogoWall from "../components/logowall";
import Footer from "../components/footer";


export default function MainLayout({
    children,
    className
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <div className="min-h-full flex flex-col">
            <Topbar />
            <main className="flex flex-1 flex-col w-full">
                {children}
            </main>
            <Invitation/>
            <LogoWall/>
            <Footer/>
        </div>
    )
}