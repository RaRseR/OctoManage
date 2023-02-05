export default function Cell({ children, name, color }: Cell) {

    function handleClick(event: React.MouseEvent) {
        (event.target as HTMLInputElement)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    return (
        <div className="w-72 snap-center bg-zinc-900 text-white rounded-md overflow-hidden last:mr-0 select-none mr-3" onClick={(event) => handleClick(event)}>
            <div className={`bg-gradient-to-r from-${color}-600 to-${color}-500 p-3 border-b-2 border-black cursor-pointer`}>{name}</div>
            <div className="p-3">{children}</div>
        </div>
    );
}

type Cell = {
    children: React.ReactNode;
    name: string;
    color: string;
};
