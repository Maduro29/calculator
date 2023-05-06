import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
    if (buttonName === 'AC') {
        console.log(0)
        return {
            total: null,
            next: null,
            operation: null
        }
    }

    if (isNumber(buttonName)) {
        if (buttonName === '0' && obj.next === '0') {
            console.log(1)

            return {}
        }

        if (obj.operation) {
            if (obj.next) {
                console.log(2)

                return {
                    next: obj.next + buttonName
                }
            }
            console.log(3)

            return { next: buttonName }
        }

        if (obj.next) {
            console.log(4)

            return {
                next: obj.next + buttonName,
                total: null
            }
        }
        console.log(5)

        return {
            next: buttonName,
            total: null
        }
    }

    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                console.log(6)

                return {};
            }
            console.log(7)

            return {
                next: obj.next + '.'
            }
        }

        if (obj.operation) {
            console.log(8)

            return {
                next: '0.'
            }
        }

        if (obj.total) {
            if (obj.total.includes('.')) {
                console.log(9)

                return {}
            }
            console.log(10)

            return {
                total: obj.total + '.'
            }
        }
        console.log(11)

        return {
            total: '0.'
        }
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
            console.log(12)

            return {
                total: operate(obj.total, obj.next, obj.operation),
                next: null,
                operation: null
            }
        } else {
            console.log(13)

            return {}
        }
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            return { next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return { total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    if (obj.operation) {
        console.log(14)

        return {
            total: operate(obj.total, obj.next, obj.operation),
            next: null,
            operation: buttonName,
        };
    }

    if (!obj.next) {
        console.log(15)

        return { operation: buttonName };
    }
    console.log(16)

    return {
        total: obj.next,
        next: null,
        operation: buttonName,
    };
}