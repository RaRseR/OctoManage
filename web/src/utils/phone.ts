export function clearPhone(str: string): string {
    if (str) {
        const value = str
            .replace(/[^0-9]/g, "")
            .match(/(\d)(\d{0,3})(\d{0,3})(\d{0,4})/);
        let result = "";

        if (value != null) {
            const phoneElements = [value[1], value[2], value[3], value[4]];
            for (let i = 0; i < phoneElements.length; ++i) {
                if (!phoneElements[i]) {
                    break;
                }
                switch (i) {
                    case 1:
                        result += "-" + phoneElements[1];
                        break;
                    case 2:
                        result += "-" + phoneElements[2];
                        break;
                    case 3:
                        result += "-" + phoneElements[3];
                        break;

                    default:
                        result += "+" + phoneElements[0];
                        break;
                }
            }
        }

        return result;
    }

    return "";
}
