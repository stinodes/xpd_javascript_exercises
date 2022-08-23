export function SplitWise(...names) {
    let billPerPerson = names.reduce((result, n) => ({...result, [n]: 0.0}), {})

    function pay(namePayer, amount, personsInvolved) {
        if (amount < 0) return;

        billPerPerson[namePayer] = billFor(namePayer) + amount;

        if (!personsInvolved?.length)
            personsInvolved = Object.keys(billPerPerson);

        const amountPerPerson = amount / personsInvolved.length;
        personsInvolved.forEach(name =>
            billPerPerson[name] = billFor(name) - amountPerPerson);
    }

    function billFor(name) {
        return billPerPerson[name] ?? 0;
    }

    return {pay, billFor};
}