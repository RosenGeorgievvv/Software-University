//Task: Write a program that keeps a string inside its context and can execute different commands that modify or print the string on the console.

// append(string) - append the given string at the end of the internal string

// removeStart(n) - remove the first n characters from the string, n is an integer

// removeEnd(n) - remove the last n characters from the string, n is an integer

// print - print the stored string on the console

//Solution:


function solve(){

    let str = '';

    return {
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length - n),
        print: () => console.log(str)
    }
}

let firstZeroTest = solve();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();