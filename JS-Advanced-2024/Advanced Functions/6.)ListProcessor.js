//Task: Using a closure, create an inner object to process list commands. The commands supported should be the following:

// · add <string> - adds the following string in an inner collection.

// · remove <string> - removes all occurrences of the supplied <string> from the inner collection.

// · print - prints all elements of the inner collection joined by ",".


//Solution:


function solve(cmds) {
    function proc() {
        let arr = [];

        function add(srt) {
            arr.push(srt);
        }

        function remove(str) {
            arr = arr.filter(x=>x !== str);
        }

        function print() {
            console.log(arr.join(','));
        }
        return {
            add,
            remove,
            print
        };
    }

    let procVariable = proc();

    cmds.forEach(e => {
        let [command, value] = e.split(' ');
        procVariable[command](value);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);