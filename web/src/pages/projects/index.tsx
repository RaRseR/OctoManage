import { useState } from 'react';
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/outline";

import { gql, useQuery, NetworkStatus } from '@apollo/client';

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

    if (loading) return <p className='text-white'>Loading...</p>;
    if (error) return <p className='text-white'>Error : {error.message}</p>;


    return (
        <section className="w-full h-screen px-3 pb-3 flex flex-col">
            {/* <Modal forwardedRef={ref}>1</Modal> */}
            <Menu>
                <button className="rounded-md p-1 border border-white hover:bg-neutral-900">
                    <PlusIcon className={`w-6 h-6`} />
                </button>
                <button
                    onClick={() => {
                        setDisplayType(!displayType);
                    }}
                    className="rounded-md p-1 border border-white hover:bg-neutral-900"
                >
                    <Bars3Icon
                        className={`${displayType ? "rotate-90 " : ""
                            }duration-200 w-6 h-6`}
                    />
                </button>
            </Menu>
            <div
                className={`${displayType
                    ? "flex-row overflow-x-scroll "
                    : "flex-col overflow-y-scroll "
                    }flex h-full py-3 scrollbar`}
            >
                <Cell name="1" color="red">
                    red
                </Cell>
                <Cell name="2" color="amber">
                    amber
                </Cell>
                <Cell name="3" color="green">
                    green
                </Cell>
                {/* <Cell name="4" color="cyan">cyan</Cell>
                <Cell name="5" color="sky">sky</Cell>
                <Cell name="6" color="blue">blue</Cell>
                <Cell name="7" color="indigo">indigo</Cell>
                <Cell name="8" color="pink">pink</Cell>
                <Cell name="9" color="rose">rose</Cell> */}
            </div>
            {/* <Pagination amount={7} /> */}
        </section>
    );
}
