export function passwordStrength(password: string) {
    if (password.length < 8) return { status: 3, description: "Weak" };
    let strength = 0;

    if (/[0-9]+/.test(password)) strength++;
    if (/[a-z]+/.test(password)) strength++;
    if (/[A-Z]+/.test(password)) strength++;
    if (/[!@#?-]+/.test(password)) strength++;
    if (/[_\.$]+/.test(password)) strength++;
    if (/[\"%&/()=~`\\';:+=^*]+/.test(password)) strength++;

    if (strength >= 6) {
        return { status: 1, description: "Strong" };
    }
    if (strength >= 4) {
        return { status: 2, description: "Medium" };
    }
    return { status: 3, description: "Weak" };
}
