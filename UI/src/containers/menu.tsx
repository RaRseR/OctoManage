export default function Menu({ children }: Menu) {
    return (
        <menu className="border-x border-b rounded-b-lg border-neutral-500 w-full lg:w-2/3 flex flex-row text-slate-50 p-3 select-none items-center bg-black z-50">
            {children}
        </menu>
    );
}

type Menu = {
    children: React.ReactNode;
};
