import {create} from "zustand";

type State = {
    firstName: string;
    lastName: string;
    login: string;
    email: string;
    phone: string;
    role: number;
    status: number;
};

type Actions = {
    updateFirstName: (firstName: State["firstName"]) => void;
    updateLastName: (lastName: State["lastName"]) => void;
    updateLogin: (login: State["login"]) => void;
    updateEmail: (email: State["email"]) => void;
    updatePhone: (phone: State["phone"]) => void;
    reset: () => void;
};

const initialState: State = {
    // firstName: "",
    // lastName: "",
    // login: "",
    // email: "",
    // phone: "",
    firstName: "Ruslan",
    lastName: "Nurmukhametov",
    login: "RaRseR",
    email: "rus.nurm@gmail.com",
    phone: "+7-999-134-1948",
    role: 1,
    status: 0,
};
const ProfileStore = create<State & Actions>((set) => ({
    ...initialState,
    updateFirstName: (firstName) => set(() => ({ firstName })),
    updateLastName: (lastName) => set(() => ({ lastName })),
    updateLogin: (login) => set(() => ({ login })),
    updateEmail: (email) => set(() => ({ email })),
    updatePhone: (phone) => set(() => ({ phone })),
    reset: () => {
        set(initialState);
    },
}));

export default ProfileStore;
