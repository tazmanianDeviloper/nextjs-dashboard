import SideNav from '@/app/ui/dashboard/sidenav';
import React from "react";

// This Component accepts Node Objects that have Key/value fields where key is initialized latter (children)
// and value is a React object. These Node Objects are also of type Object that have children fields.
export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}