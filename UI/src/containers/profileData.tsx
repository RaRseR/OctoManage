import { SyntheticEvent, useState, useEffect } from "react";

import { clearName, validateEmail } from "../utils/profile";
import { clearPhone } from "../utils/phone";
import { passwordStrength } from "../utils/password";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import ProfileStore from "../store/profile";

export default function ProfileData() {
    const [firstName, updateFirstName] = ProfileStore((state) => [
        state.firstName,
        state.updateFirstName,
    ]);
    const [lastName, updateLastName] = ProfileStore((state) => [
        state.lastName,
        state.updateLastName,
    ]);
    const [login, updateLogin] = ProfileStore((state) => [
        state.login,
        state.updateLogin,
    ]);
    const [email, updateEmail] = ProfileStore((state) => [
        state.email,
        state.updateEmail,
    ]);
    const [phone, updatePhone] = ProfileStore((state) => [
        state.phone,
        state.updatePhone,
    ]);

    const [currPass, setCurrPass] = useState<string>("");
    const [newPass, setNewPass] = useState<string>("");

    const [isCurrPass, setIsCurrPass] = useState<boolean>(true);
    const [isNewPass, setIsNewPass] = useState<boolean>(true);

    const [currPassState, setCurrPassState] = useState({
        status: 0,
        description: "",
    });
    const [newPassState, setNewPassState] = useState({
        status: 0,
        description: "",
    });
    const [emailState, setEmailState] = useState({
        status: 0,
        description: "",
    });

    const [isChanged, setIsChanged] = useState<boolean>(false);

    useEffect(() => {
        if (
            firstName !== "Ruslan" ||
            lastName !== "Nurmukhametov" ||
            login !== "RaRseR" ||
            email !== "rus.nurm@gmail.com" ||
            phone !== "+7-999-134-1948"
        ) {
            setIsChanged(true);
        } else {
            setIsChanged(false);
        }
    }, [firstName, lastName, login, email, phone]);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (currPass !== "") {
                // req
                if (currPass === "123") {
                    setCurrPassState({
                        status: 1,
                        description: "",
                    });
                } else {
                    setCurrPassState({
                        status: 2,
                        description: "Password is incorrect",
                    });
                }
            }
        }, 1500);

        return () => clearTimeout(delay);
    }, [currPass]);

    useEffect(() => {
        const delay = setTimeout(() => {
            if (email !== "") {
                if (validateEmail(email)) {
                } else {
                    console.log("Is not valid");
                    setEmailState({
                        status: 1,
                        description: "Is not valid",
                    });
                }
            }
        }, 1000);

        return () => clearTimeout(delay);
    }, [email]);

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
    }

    return (
        <form
            action="#"
            method="POST"
            className="h-full flex flex-col justify-between"
            onSubmit={(event) => {
                handleSubmit(event);
            }}
        >
            <div className="overflow-hidden py-5 sm:p-3">
                <div className="grid grid-cols-6 gap-5">
                    <span className="col-span-6 text-gray-700 font-bold select-none">
                        Update personal data
                    </span>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            First name
                        </label>
                        <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            defaultValue={firstName}
                            onInput={(event) => {
                                const target = event.target as HTMLInputElement;
                                target.value = clearName(target.value);
                                updateFirstName(target.value);
                            }}
                            className="text-black p-2 focus:outline outline-offset-1 outline-1 mt-1 block w-full rounded-md border border-black box-border"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="last-name"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            Last name
                        </label>
                        <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            defaultValue={lastName}
                            onInput={(event) => {
                                const target = event.target as HTMLInputElement;
                                target.value = clearName(target.value);
                                updateLastName(target.value);
                            }}
                            className="text-black p-2 focus:outline outline-offset-1 outline-1 mt-1 block w-full rounded-md border border-black box-border"
                        />
                    </div>

                    <div className="col-span-6">
                        <label
                            htmlFor="login"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            Login
                        </label>
                        <input
                            type="text"
                            name="login"
                            id="login"
                            autoComplete="username"
                            defaultValue={login}
                            onInput={(event) => {
                                updateLogin(
                                    (event.target as HTMLInputElement).value
                                );
                            }}
                            className="text-black p-2 focus:outline outline-offset-1 outline-1 mt-1 block w-full rounded-md border border-black box-border"
                        />
                    </div>
                    <div className="col-span-5 sm:col-span-4">
                        <label
                            htmlFor="email-address"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            Email
                        </label>
                        <input
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            defaultValue={email}
                            onInput={(event) => {
                                updateEmail(
                                    (event.target as HTMLInputElement).value
                                );
                            }}
                            className="text-black p-2 focus:outline outline-offset-1 outline-1 mt-1 block w-full rounded-md border border-black box-border"
                        />
                    </div>
                    {/* <div className="col-span-2 row-span-2 text-black flex flex-col justify-between items-center select-none">
                        Can coworkers see it?
                        <input
                            type="checkbox"
                            className="appearance-none checked:bg-black checked:hover:bg-neutral-900 rounded-md w-8 h-8 border border-black cursor-pointer duration-100"
                        />
                        <input
                            type="checkbox"
                            className="appearance-none checked:bg-black checked:hover:bg-neutral-900 rounded-md w-8 h-8 border border-black cursor-pointer duration-100"
                        />
                    </div> */}
                    <div className="col-span-5 sm:col-span-4">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            Phone
                        </label>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            autoComplete="tel"
                            minLength={11}
                            maxLength={20}
                            defaultValue={phone}
                            placeholder="+A-BBB-CCC-DDDD"
                            onInput={(event) => {
                                const target = event.target as HTMLInputElement;
                                target.value = clearPhone(target.value);

                                updatePhone(target.value);
                            }}
                            className="text-black p-2 focus:outline outline-offset-1 outline-1 mt-1 block w-full rounded-md border border-black box-border"
                        />
                    </div>
                    <span className="col-span-6 text-gray-700 font-bold select-none">
                        Update password
                    </span>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="current-password"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            Current password
                        </label>
                        <div className="relative flex flex-row justify-between items-center mt-1">
                            <input
                                type={isCurrPass ? "password" : "text"}
                                name="current-password"
                                id="current-password"
                                autoComplete="current-password"
                                onChange={(event) => {
                                    setCurrPassState({
                                        status: 0,
                                        description: "",
                                    });
                                    setNewPassState({
                                        status: 0,
                                        description: "",
                                    });
                                    setCurrPass(
                                        (event.target as HTMLInputElement).value
                                    );
                                }}
                                className={`${
                                    currPassState.status === 0
                                        ? "focus:outline border-black "
                                        : ""
                                }${
                                    currPassState.status === 1
                                        ? "outline-green-600 outline border-green-500 text-green-500 "
                                        : ""
                                }${
                                    currPassState.status === 2
                                        ? "outline-red-600 outline border-red-500 text-red-500 "
                                        : ""
                                }text-black p-2 pr-12 outline-offset-1 outline-1 block rounded-md w-full border box-border`}
                            />
                            <button
                                className="bg-black rounded-md p-2 box-border absolute inset-y-0 right-0 hover:bg-neutral-900"
                                onClick={() => {
                                    setIsCurrPass(!isCurrPass);
                                }}
                            >
                                {isCurrPass ? (
                                    <EyeIcon className="w-6 h-6" />
                                ) : (
                                    <EyeSlashIcon className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                        {currPassState.status === 2 && (
                            <span className="text-red-500 select-none text-sm">
                                {currPassState.description}
                            </span>
                        )}
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label
                            htmlFor="new-password"
                            className="block text-sm font-medium text-gray-700 select-none"
                        >
                            New password
                        </label>
                        <div className="relative flex flex-row justify-between items-center mt-1">
                            <input
                                type={isNewPass ? "password" : "text"}
                                name="new-password"
                                id="new-password"
                                autoComplete="new-password"
                                disabled={currPassState.status !== 1}
                                onChange={(event) => {
                                    setNewPassState({
                                        status: 0,
                                        description: "",
                                    });
                                    const target =
                                        event.target as HTMLInputElement;
                                    if (target.value !== currPass) {
                                        setNewPassState(
                                            passwordStrength(target.value)
                                        );
                                    } else {
                                        setNewPassState({
                                            status: 3,
                                            description:
                                                "Passwords are the same",
                                        });
                                    }
                                }}
                                className={`${
                                    newPassState.status === 0
                                        ? "focus:outline border-black "
                                        : ""
                                }${
                                    newPassState.status === 1
                                        ? "outline-green-600 outline border-green-500 text-green-500 "
                                        : ""
                                }${
                                    newPassState.status === 2
                                        ? "outline-amber-600 outline border-amber-500 text-amber-500 "
                                        : ""
                                }${
                                    newPassState.status === 3
                                        ? "outline-red-600 outline border-red-500 text-red-500 "
                                        : ""
                                }text-black p-2 pr-12 disabled:cursor-no-drop disabled:bg-gray-200 focus:outline outline-offset-1 outline-1 block w-full rounded-md border border-black box-border`}
                            />
                            <button
                                className="bg-black rounded-md p-2 box-border absolute inset-y-0 right-0 hover:bg-neutral-900 disabled:cursor-no-drop disabled:bg-neutral-900"
                                disabled={currPassState.status !== 1}
                                onClick={() => {
                                    setIsNewPass(!isNewPass);
                                }}
                            >
                                {isNewPass ? (
                                    <EyeIcon className="w-6 h-6" />
                                ) : (
                                    <EyeSlashIcon className="w-6 h-6" />
                                )}
                            </button>
                        </div>

                        {newPassState.status !== 0 && (
                            <span
                                className={`${
                                    newPassState.status === 1
                                        ? "text-green-500 "
                                        : ""
                                }${
                                    newPassState.status === 2
                                        ? "text-amber-500 "
                                        : ""
                                }${
                                    newPassState.status === 3
                                        ? "text-red-500 "
                                        : ""
                                }select-none text-sm`}
                            >
                                {newPassState.description}
                            </span>
                        )}
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 p-3 text-right flex flex-row justify-between">
                {isChanged && (
                    <button className="inline-flex justify-center rounded-md border border-black bg-white py-2 px-4 font-medium text-black hover:bg-gray-100 focus:outline outline-offset-1 outline-1 focus:ring-1 focus:ring-black focus:ring-offset-1 select-none">
                        Cancel
                    </button>
                )}
                <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 font-medium text-white hover:bg-neutral-900 focus:outline outline-offset-1 outline-1 focus:ring-1 focus:ring-black focus:ring-offset-1 select-none ml-auto"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
