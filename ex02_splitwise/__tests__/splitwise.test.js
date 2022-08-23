import {SplitWise} from "../splitWise.js";

test('initialStatus', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke");
    expect(splitWise.billFor("Jan")).toBe(0);
    expect(splitWise.billFor("Jos")).toBe(0);
    expect(splitWise.billFor("Mieke")).toBe(0);
});

test('Jan pays 40', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 40)
    expect(splitWise.billFor("Jan")).toBe(30);
    expect(splitWise.billFor("Jos")).toBe(-10);
    expect(splitWise.billFor("Mieke")).toBe(-10);
    expect(splitWise.billFor("Tamara")).toBe(-10);
});

test('Jan pays 40 twice', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 40)
    splitWise.pay("Jan", 40)
    expect(splitWise.billFor("Jan")).toBe(60);
    expect(splitWise.billFor("Jos")).toBe(-20);
    expect(splitWise.billFor("Mieke")).toBe(-20);
    expect(splitWise.billFor("Tamara")).toBe(-20);
});

test('Mieke pays 100', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Mieke", 100)
    expect(splitWise.billFor("Jan")).toBe(-25);
    expect(splitWise.billFor("Jos")).toBe(-25);
    expect(splitWise.billFor("Mieke")).toBe(75);
    expect(splitWise.billFor("Tamara")).toBe(-25);
});

test('Mieke pays 10 - split is not an integer', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Mieke", 10)
    expect(splitWise.billFor("Jan")).toBe(-2.5);
    expect(splitWise.billFor("Jos")).toBe(-2.5);
    expect(splitWise.billFor("Mieke")).toBe(7.5);
    expect(splitWise.billFor("Tamara")).toBe(-2.5);
});

test('Jan pays 40 and then Mieke pays 10', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 40)
    splitWise.pay("Mieke", 10)
    expect(splitWise.billFor("Jan")).toBe(27.5);
    expect(splitWise.billFor("Jos")).toBe(-12.5);
    expect(splitWise.billFor("Mieke")).toBe(-2.5);
    expect(splitWise.billFor("Tamara")).toBe(-12.5);
});

test('Jan pays 12 - Only Jan and Jos are involved', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 12, ["Jan", "Jos"])
    expect(splitWise.billFor("Jan")).toBe(6);
    expect(splitWise.billFor("Jos")).toBe(-6);
    expect(splitWise.billFor("Mieke")).toBe(0);
    expect(splitWise.billFor("Tamara")).toBe(0);
});

test('Jan pays 12 - Only Jan is involved', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 12, ["Jan"])
    expect(splitWise.billFor("Jan")).toBe(0);
    expect(splitWise.billFor("Jos")).toBe(0);
    expect(splitWise.billFor("Mieke")).toBe(0);
    expect(splitWise.billFor("Tamara")).toBe(0);
});

test('Jan pays 12 - Jan is not in persons involved', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 12, ["Jos", "Mieke", "Tamara"])
    expect(splitWise.billFor("Jan")).toBe(12);
    expect(splitWise.billFor("Jos")).toBe(-4);
    expect(splitWise.billFor("Mieke")).toBe(-4);
    expect(splitWise.billFor("Tamara")).toBe(-4);
});

test('Jan pays 40 - Then Mieke 10 - Then Jan and Jos only involved', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 40)
    splitWise.pay("Mieke", 10)
    splitWise.pay("Jan", 12, ["Jan", "Jos"])
    expect(splitWise.billFor("Jan")).toBe(33.5);
    expect(splitWise.billFor("Jos")).toBe(-18.5);
    expect(splitWise.billFor("Mieke")).toBe(-2.5);
    expect(splitWise.billFor("Tamara")).toBe(-12.5);
});


test('Jan pays 40 - Then Mieke 10 - Then Jan and Jos only involved - Then Pieter', () => {
    const splitWise = SplitWise("Jan", "Jos", "Mieke", "Tamara");
    splitWise.pay("Jan", 40)
    splitWise.pay("Mieke", 10)
    splitWise.pay("Jan", 12, ["Jan", "Jos"])
    splitWise.pay("Pieter", 18, ["Jan", "Jos", "Pieter"])
    expect(splitWise.billFor("Jan")).toBe(27.5);
    expect(splitWise.billFor("Jos")).toBe(-24.5);
    expect(splitWise.billFor("Pieter")).
    toBe(12);
    expect(splitWise.billFor("Mieke")).toBe(-2.5);
    expect(splitWise.billFor("Tamara")).toBe(-12.5);
});

