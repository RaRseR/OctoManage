import Link from "next/link";
import {
    ClipboardDocumentCheckIcon,
    BellAlertIcon,
    FolderOpenIcon,
    UserGroupIcon,
    Cog8ToothIcon,
    IdentificationIcon,
} from "@heroicons/react/24/outline";

export default function Nav() {
    const links = [
        {
            url: "/dashboard",
            name: "DASHBOARD",
            icon: <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2" />,
        },
        {
            url: "/projects",
            name: "PROJECTS",
            icon: <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2" />,
        },
        {
            url: "/notifications",
            name: "NOTIFICATIONS",
            icon: <BellAlertIcon className="w-6 h-6 mr-2" />,
        },
        // {
        //     url: "/customers",
        //     name: "CUSTOMERS",
        //     icon: <ClipboardDocumentCheckIcon className="w-6 h-6" />,
        // },
        {
            url: "/files",
            name: "FILES",
            icon: <FolderOpenIcon className="w-6 h-6 mr-2" />,
        },
        {
            url: "/staff",
            name: "STAFF",
            icon: <UserGroupIcon className="w-6 h-6 mr-2" />,
        },
        {
            url: "/settings",
            name: "SETTINGS",
            icon: <Cog8ToothIcon className="w-6 h-6 mr-2" />,
        },
        {
            url: "/profile",
            name: "PROFILE",
            icon: <IdentificationIcon className="w-6 h-6 mr-2" />,
        },
    ];

    return (
        <nav className="w-48 h-screen hidden lg:flex text-slate-50 flex-col p-1 border-r border-neutral-500 rounded-tr-md rounded-br-md">
            {links.map(({ url, name, icon }, index) => (
                <Link
                    href={url}
                    key={index}
                    className="hover:bg-neutral-900 ease-in-out duration-300 px-1 py-3 box-border rounded inline-flex"
                >
                    {icon}
                    {name}
                </Link>
            ))}
        </nav>
    );
}
