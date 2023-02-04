import { useState } from "react";
export default function Pagination({ amount }: Pagination) {
    const [current, setCurrent] = useState<number>(0);

    return (
        <nav className="isolate inline-flex -space-x-px rounded-md text-white">
            <a
                href="#"
                onClick={() => {
                    if (current > 0) {
                        setCurrent(current - 1);
                    }
                }}
                className={`${
                    current === 0
                        ? "text-gray-500 cursor-no-drop"
                        : "hover:bg-neutral-900"
                } relative inline-flex items-center rounded-l-md border border-white px-2 py-2 text-sm font-medium`}
            >
                <span className="sr-only">Previous</span>
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
            <a
                href="#"
                className={`${
                    current === 0
                        ? "bg-white text-black"
                        : "hover:bg-neutral-900"
                } relative inline-flex items-center border border-white  px-4 py-2 text-sm font-medium`}
                onClick={() => setCurrent(0)}
            >
                1
            </a>
            {Array(amount - 2)
                .fill("")
                .map((_, i) => {
                    return (
                        <a
                            href="#"
                            className={`${
                                i + 1 === current
                                    ? "bg-white text-black "
                                    : "hover:bg-neutral-900 "
                            }relative inline-flex items-center border border-white  px-4 py-2 text-sm font-medium`}
                            key={i}
                            onClick={() => setCurrent(i + 1)}
                        >
                            {i + 2}
                        </a>
                    );
                })}
            {/* <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                    ...
                </span> */}
            <a
                href="#"
                className={`${
                    current === amount - 1
                        ? "bg-white text-black "
                        : "hover:bg-neutral-900 "
                }relative inline-flex items-center border border-white  px-4 py-2 text-sm font-medium`}
                onClick={() => setCurrent(amount - 1)}
            >
                {amount}
            </a>
            <a
                href="#"
                onClick={() => {
                    if (current < amount - 1) {
                        setCurrent(current + 1);
                    }
                }}
                className={`${
                    current === amount - 1
                        ? "text-gray-500 cursor-no-drop"
                        : "hover:bg-neutral-900"
                } relative inline-flex items-center rounded-r-md border border-white px-2 py-2 text-sm font-medium`}
            >
                <span className="sr-only">Next</span>
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                    />
                </svg>
            </a>
        </nav>
    );
}

type Pagination = {
    amount: number;
};
