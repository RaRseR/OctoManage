export default function Cell({ items, name, color }: Cell) {

    function handleClick(event: React.MouseEvent) {
        (event.target as HTMLInputElement)?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    return (
        <div className="w-72 snap-center bg-zinc-900 text-white rounded-md overflow-hidden last:mr-0 select-none mr-3 mb-3" onClick={(event) => handleClick(event)}>
            <div className={`bg-gradient-to-r from-${color}-600 to-${color}-500 p-2 border-b-2 border-black`}>{name}</div>
            <div className="p-2  snap-both">
                <div>{items.map(({ name, text }, key) => <Item name={name} text={text} key={key} />)}</div>
            </div>
        </div>
    );
}

function Item({ name, text }: Item) {
    return <div className="mb-2 last:mb-0 p-2 bg-zinc-300 rounded-md text-zinc-900">
        {name}
        {text}
    </div>
}

type Cell = {
    items: Item[];
    name: string;
    color: string;
};

type Item = {
    name: string;
    text: string;
};
