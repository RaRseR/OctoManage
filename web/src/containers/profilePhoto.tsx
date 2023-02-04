import Image from "next/image";
import photo from "./../../public/img/5.jpg";
import { useState } from "react";
import {
    PhotoIcon,
    ScissorsIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

import axios from "axios";

export default function ProfilePhoto() {
    const [isCrop, setIsCrop] = useState<boolean>(false);

    function UploadNewPhoto(image: File) {
        axios.post("/asd", {image});
    }
    function DeleteCurrentPhoto() {
        axios.delete("/asd");
    }

    return (
        <div className="flex flex-col justify-between h-full">
            <div className="h-full overflow-hidden p-3 relative">
                <Image
                    src={photo}
                    alt="Profile photo"
                    className="rounded-md select-none object-cover h-full w-full border border-black box-border"
                />
                {isCrop && (
                    <div className="w-full h-full border-4 border-red-500 absolute top-0 left-0"></div>
                )}
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-3 flex flex-row items-center">
                <label
                    htmlFor="newProfilePhoto"
                    className="bg-white border inline-flex justify-center cursor-pointer text-black font-medium border-black p-2 rounded-md hover:bg-gray-100 focus:outline outline-offset-1 outline-1 focus:ring-1 focus:ring-black focus:ring-offset-2 select-none"
                >
                    <PhotoIcon className="w-6 h-6 mr-2" />

                    <span>Upload</span>
                    <input
                        id="newProfilePhoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                    />
                </label>
                <button
                    onClick={() => {
                        setIsCrop(!isCrop);
                    }}
                    className="bg-white border ml-2 inline-flex justify-center cursor-pointer text-black font-medium border-black p-2 rounded-md hover:bg-gray-100 focus:outline outline-offset-1 outline-1 focus:ring-1 focus:ring-black focus:ring-offset-1 select-none"
                >
                    <ScissorsIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={() => {
                        DeleteCurrentPhoto();
                    }}
                    className="ml-auto inline-flex justify-center rounded-md border border-transparent bg-black p-2 text-sm text-white hover:bg-neutral-900 focus:outline outline-offset-1 outline-1 focus:ring-1 focus:ring-black focus:ring-offset-2 select-none"
                >
                    <TrashIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
