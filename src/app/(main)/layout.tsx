import React from "react";

export default function MainLayout ({
    children
}:{children: React.ReactNode    
}){
    return (
        <div className="min-h-full flex flex-col">
            <main className="flex flex-1 flex-col w-full">
                {children}
            </main>
        </div>
    )
}