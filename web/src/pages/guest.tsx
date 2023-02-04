import { SignIn, SignUp } from "../containers";

export default function Guest() {
    return <section className="flex">
        <SignIn/>
        <SignUp/>
    </section>
}