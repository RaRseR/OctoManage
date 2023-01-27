export default function SignUp() {
    return <div className="w-1/2 h-1/2 p-3 rounded-md border border-neutral-500">
        <form className="flex flex-col backdrop-filter backdrop-blur-lg bg-opacity-10 text-white">
            <input type="text" />
            <input type="text" />
            <input type="password" />
            <button type="submit">Sign Up</button>
        </form>
    </div>
}