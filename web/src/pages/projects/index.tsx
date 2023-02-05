import { useState } from 'react';
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";

import { gql, useQuery } from '@apollo/client';

import { Menu, Cell } from "../../containers";
import ProjectsStore from "../../store/projects";

const GET_COUNTRIES = gql`
    query GetCountries {
        countries {
            code
            name
            emoji
        }
    }`;

export default function Projects() {
    const [displayType, setDisplayType] = useState<boolean>(true);
    const store = ProjectsStore((state) => state);

    const { loading, error, data } = useQuery(GET_COUNTRIES);

    // if (error) return <p className='text-white'>Error : {error.message}</p>;


    return (
        <section className="w-full h-screen px-3 pb-3 flex flex-col overflow-hidden">
            <Menu>
                <input type="text" className="bg-neutral-900 px-2 rounded-md border border-neutral-500 h-full" />
                <input type="text" className="bg-neutral-900 px-2 rounded-md border border-neutral-500 h-full ml-2" />
                <button className="rounded-md p-1 border border-white hover:bg-neutral-900 ml-auto">
                    <PlusIcon className={`w-6 h-6`} />
                </button>
                <button
                    onClick={() => {
                        setDisplayType(!displayType);
                    }}
                    className="rounded-md p-1 border border-white hover:bg-neutral-900 ml-2"
                >
                    <Bars3Icon
                        className={`${displayType ? "rotate-90 " : ""
                            }duration-200 w-6 h-6`}
                    />
                </button>
            </Menu>

            <div className={`w-full h-full scrollbar snap-both ${displayType
                ? "overflow-x-scroll"
                : "overflow-y-scroll"
                }`}>
                <div className={`min-w-full w-max min-h-full h-max flex pt-3 ${displayType
                    ? "flex-row"
                    : "flex-col pr-3"
                    }`}>
                    {loading && <p className='text-white'>Loading...</p>}
                    {error && <p className='text-white'>Error : {error.message}</p>}
                    <Cell name="1" color="cyan" items={[
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }
                    ]} />
                    <Cell name="1" color="cyan" items={[
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }, 
                        { name: "Test", text: "Text" }
                    ]} />
                </div>
            </div>
            {/* <Pagination amount={7} /> */}
        </section>
    );
}
