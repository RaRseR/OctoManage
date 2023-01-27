import { useState } from "react";
import NotificationStore from "../store/notifications";

import {
    XMarkIcon
} from "@heroicons/react/24/outline";

import { toast } from "react-toastify";

export default function NotificationBar() {
    const [open, setOpen] = useState<number>(-1);

    const [info, success, warning, error] = NotificationStore((state) => [state.info, state.success, state.warning, state.error]);

    const [] = useState<string>()

    return (
        <div
            className="z-20 w-1/4 select-none ml-auto relative"
        >
            {/* text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 */}
            <div className="text-slate-50 p-3 box-border rounded-bl-md rounded-br-md border-x border-b border-neutral-500 flex align-middle">
                <button className="w-10 h-6 mr-2 p-px rounded-md bg-gradient-to-r from-indigo-500 to-sky-500" onClick={() => { setOpen(0) }}>
                    <div className="bg-black rounded-md h-full w-full">
                        {info.length > 10 ? "10+" : info.length}
                    </div>
                </button>
                <button className="w-10 h-6 mr-2 p-px rounded-md bg-gradient-to-r from-emerald-500 to-lime-500" onClick={() => { setOpen(1) }}>
                    <div className="bg-black rounded-md h-full w-full">
                        {success.length > 10 ? "10+" : success.length}
                    </div>
                </button>
                <button className="w-10 h-6 mr-2 p-px rounded-md bg-gradient-to-r from-orange-400 to-amber-400" onClick={() => { setOpen(2) }}>
                    <div className="bg-black rounded-md h-full w-full">
                        {warning.length > 10 ? "10+" : warning.length}
                    </div>
                </button>
                <button className="w-10 h-6 mr-2 p-px rounded-md bg-gradient-to-r from-red-500 to-orange-600" onClick={() => { setOpen(3) }}>
                    <div className="bg-black rounded-md h-full w-full">
                        {error.length > 10 ? "10+" : error.length}
                    </div>
                </button>
                {/* <button className="rounded-md" onClick={() => { closeAll() }}><ArrowRightCircleIcon className="w-6 h-6" /></button> */}
                <button className="w-6 h-6 p-px rounded-md border border-white" onClick={() => { toast.dismiss() }}>
                    <XMarkIcon className="w-6 h-6" />
                </button>
            </div>
            {/* <div className={`${open !== -1 ? "translate-y-0 opacity-1" : "-translate-y-2 opacity-0"} transition ease-in-out duration-300 w-full h-64 drop-shadow-md z-30 mt-4 flex flex-col text-slate-50 border rounded-md p-3 bg-zinc-900 border-white absolute`}>
                {open === 0 && info.map(({ text, sender }, key) => <NotificationElement text={text} sender={sender} />)}
                {open === 1 && success.map(({ text, sender }, key) => <NotificationElement text={text} sender={sender} />)}
                {open === 2 && warning.map(({ text, sender }, key) => <NotificationElement text={text} sender={sender} />)}
                {open === 3 && error.map(({ text, sender }, key) => <NotificationElement text={text} sender={sender} />)}
            </div> */}
        </div>
    );
}

function NotificationElement({ text, sender }: { text: string, sender: string }) {
    return <div>{text}</div>
}