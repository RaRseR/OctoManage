import profileStore from "../store/profile";

import { ProfilePhoto, ProfileData } from "../container";

export default function Profile() {
    return (
        <section className="w-full h-screen py-3 px-3 grid grid-cols-3 lg:grid-cols-3 lg:grid-rows-3 gap-3 text-white">
            <div className="bg-white row-span-2 rounded-md overflow-hidden">
                <ProfilePhoto />
            </div>
            <div className="bg-white row-span-2 rounded-md overflow-hidden">
                <ProfileData />
            </div>
            <div className="bg-slate-200 p-5 rounded-md animate-pulse overflow-hidden"></div>
            <div className="bg-slate-200 p-5 rounded-md animate-pulse overflow-hidden"></div>
            <div className="bg-slate-200 p-5 rounded-md animate-pulse overflow-hidden">
                <Preview />
            </div>
            <div className="bg-slate-200 col-span-2 p-5 rounded-md animate-pulse overflow-hidden">
                1
            </div>
        </section>
    );
}



function Preview() {
    const [firstName, lastName, login, email, phone] = profileStore((state) => [
        state.firstName,
        state.lastName,
        state.login,
        state.email,
        state.phone,
    ]);

    return (
        <div className="grid grid-cols-3 grid-rows-5 gap-3 h-full text-black">
            <div className="row-span-3 rounded-md p-3 bg-neutral-600"></div>
            <div className="col-span-2">{login}</div>
            <div className="col-span-1">{firstName}</div>
            <div className="col-span-1">{lastName}</div>
            <div className="col-span-1">{email || "############"}</div>
            <div className="col-span-1">{phone || "############"}</div>
            <div className="col-span-3 row-span-2 bg-neutral-500 rounded-md"></div>
        </div>
    );
}

