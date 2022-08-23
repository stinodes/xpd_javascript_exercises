export function SplitWise(...names) {
    let billPerPerson = names.map(n => ({name: n, amount: 0.0}));

    function pay(namePayer, amount, personsInvolved) {
        const nrOfPersonsInvolved = personsInvolved?.length || billPerPerson.length;
        const amountPerPerson = amount / nrOfPersonsInvolved;

        function newBillWithPaidAmount(bill) {
            if (bill.name === namePayer) return {...bill, amount: bill.amount + amount};
            return bill;
        }

        function newBillFor(bill) {
            if (!personsInvolved || personsInvolved.includes(bill.name))
                return {...bill, amount: bill.amount - amountPerPerson};
            return bill;
        }

        billPerPerson = billPerPerson.map(bill => newBillWithPaidAmount(bill));
        billPerPerson = billPerPerson.map(bill => newBillFor(bill));
    }

    function billFor(name) {
        return billPerPerson.find(bill => bill.name === name)?.amount;
    }

    return {
        pay,
        billFor
    };
}