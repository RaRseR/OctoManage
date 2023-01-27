export default function SignIn() {
    return <div className="w-1/2 h-3.5 p-3 rounded-md border bg-slate border-neutral-500">
        <form className="flex flex-col text-white">
            <div className="col-span-6 sm:col-span-3">
                <label
                    htmlFor="login"
                    className="block text-sm font-medium text-gray-700 select-none"
                >
                    Login or email
                </label>
                <input
                    type="text"
                    name="login"
                    id="login"
                    autoComplete="given-name"

                    className="text-black p-2 focus-visible:outline-none mt-1 block w-full rounded-md border border-black box-border"
                />
            </div>
            <input type="text" />
            <input type="password" />
            <button type="submit">Sign In</button>
        </form>
    </div>
}