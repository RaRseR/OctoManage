export function validateEmail(email: string): boolean {
    if (
        email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
        return true;
    }
    return false;
}

export function clearName(name: string): string {
    return name.replace(/[^A-Za-z]/g, "");
}
