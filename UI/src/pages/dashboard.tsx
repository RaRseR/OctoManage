import { Menu, NotificationBar } from "../container";
import {
    ChartPieIcon,
    UserGroupIcon,
    CheckBadgeIcon,
    BugAntIcon,
} from "@heroicons/react/24/outline";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { toast } from "react-toastify";
import {
    errorToast,
    warningToast,
    successToast,
    infoToast,
} from "../utils/toast";

import NotificationStore from "../store/notifications";

export default function Dashboard() {
    const [addNotification] = NotificationStore((state) => [state.addNotification]);

    const notify = () => {
        toast("Success", {
            icon: <SparklesIcon className="w-6 h-6" />,
            onClose: () => addNotification({ id: 0, sender: "system", status: "success", text: "test" }),
            ...successToast,
        });
    };
    return (
        <section className="w-full h-screen px-6 flex flex-col">
            <div className="flex">
                <Menu>
                    <button onClick={notify}>Success</button>
                </Menu>
                <NotificationBar />

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-rows-3 gap-4 h-full py-4">
                <Cell>
                    <div className="inline-flex">
                        <ChartPieIcon className="w-6 h-6 mr-2" />
                        Revenue
                    </div>
                </Cell>
                <Cell>
                    <div className="inline-flex">
                        <UserGroupIcon className="w-6 h-6 mr-2" />
                        Staff
                    </div>
                </Cell>
                <Cell>
                    <div className="inline-flex">
                        <CheckBadgeIcon className="w-6 h-6 mr-2" />
                        NPS
                    </div>
                </Cell>
            </div>
        </section>
    );
}

function Cell({ children }: Cell) {
    const [isOpened, setIsOpened] = useState<boolean>(false);

    return (
        <div
            onClick={() => {
                setIsOpened(!isOpened);
            }}
            className="bg-zinc-900 text-white rounded-md overflow-hidden p-3 select-none"
        >
            {children}
        </div>
    );
}

type Cell = {
    children: React.ReactNode;
};
