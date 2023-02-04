export default function Cell({ children, name, color }: Cell) {
    return (
        <div className="w-72 bg-zinc-900 text-white rounded-md overflow-hidden mr-3 last:mr-0 select-none">
            <div className={`bg-gradient-to-r from-${color}-600 to-${color}-500 p-3 border-b-2 border-black`}>{name}</div>
            <div className="p-3">{children}</div>
        </div>
    );
}

type Cell = {
    children: React.ReactNode;
    name: string;
    color: string;
};
