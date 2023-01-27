import { Canvas } from "@react-three/fiber";
import Link from "next/link";
import { Menu } from "../container";

export default function Ocean() {
    return (
        <section className="w-screen h-screen bg-gradient-to-b from-cyan-500 to-blue-500 flex flex-col">
            <div className="flex flex-row w-screen px-6 relative justify-center">
                <Link
                    href={"/"}
                    className="bg-black p-3 rounded-md hover:bg-neutral-900 cursor-pointer absolute left-2 top-2 z-50 border border-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="white"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                        />
                    </svg>
                </Link>
                <Menu>
                    <span className="cursor-pointer">tool</span>
                    <span className="cursor-pointer">tool</span>
                    <span className="cursor-pointer">tool</span>
                </Menu>
            </div>
            <div className="">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <directionalLight color="#1eC0FF" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry />
                        <meshStandardMaterial />
                    </mesh>
                </Canvas>
            </div>
        </section>
    );
}
