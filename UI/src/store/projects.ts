import {create} from "zustand";

type State = {
    projects: Project[];
    color: string;
};

type Actions = {};

const initialState: State = {
    projects: [],
    color: "string",
};

const ProjectsStore = create<State & Actions>((set) => ({
    ...initialState,
}));

export default ProjectsStore;

type Project = {
    id: number;
    name: number;
};
