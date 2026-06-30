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
        <main>
            <div className="min-h-screen h-full w-full flex bg-white">
                <div className="flex flex-col w-full m-auto p-0 max-w-full">
                    {children}
                </div>
            </div>
        </main >
    )
}