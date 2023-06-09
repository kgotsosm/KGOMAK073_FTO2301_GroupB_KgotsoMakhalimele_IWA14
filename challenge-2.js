const add = (a, b) => a + b;
const multiply = (a, b, c) => a * (b * c);

function internal() {
    const added = add(this.internal.a, this.internal.b, this.internal.c);
    const multiplied = multiply(this.internal.a, this.internal.b, this.internal.c);
    console.log(multiplied * added, multiplied);
}

// Not allowed to change below this

const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add,
    multiply,
    calculate: internal
}

const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add,
    multiply,
    calculate: internal
}

example1.calculate()
example2.calculate()