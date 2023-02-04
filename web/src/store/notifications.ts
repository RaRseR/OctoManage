import {create} from "zustand";

type State = {
    success: Notification[];
    warning: Notification[];
    error: Notification[];
    info: Notification[];

};

type Actions = {
    setNotifications: (notification: Notification) => void;
    addNotification: (notification: Notification) => void;
    removeNotification: (notification: Notification) => void;

    reset: () => void;
};

const initialState: State = { info: [], success: [], warning: [], error: [] };

const NotificationStore = create<State & Actions>((set) => ({
    ...initialState,
    setNotifications: (notification) =>
        set(() => ({ [notification.status]: notification })),
    addNotification: (notification) =>{
        set(state => ({
            ...state,
            [notification.status]: [...state[notification.status], notification]
          }));
    },
    removeNotification: (notification) =>
        set(() => ({ [notification.status]: notification })),

    reset: () => {
        set(initialState);
    },
}));

export default NotificationStore;

export type Notification = {
    id: number;
    sender: string;
    status: "info" | "success" | "warning" | "error";
    text: string;
};
