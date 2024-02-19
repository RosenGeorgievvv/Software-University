//Task: Write a closure that can create and modify objects. All created objects should be kept and be accessible by name. You should support the following functionality:

// · create <name> - creates an object with the supplied <name>

// · create <name> inherits <parentName> - creates an object with the given <name>, that inherits from the parent object with the <parentName>

// · set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.

// · print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" - the printing should also print all inherited properties from parent objects. Inherited properties should come after own properties.


//Solution:

function solve(data) {
    function cars() {
        let state = {};

        function create(name, inherit, parentName) {
            let obj = {};
            state[name] = obj;
            if (inherit) {
                Object.setPrototypeOf(obj, state[parentName])
            }
        }

        function set(name, propName, value) {
            state[name][propName] = value;
        }

        function print(name) {
            let obj = state[name];
            let props = allProps(obj);
            console.log(props
                .map(e => `${e[0]}:${e[1]}`)
                .join(',')
            );
        }

        function allProps(obj) {
            let props = Object.entries(obj)
            getParentProps(obj);
            return props;

            function getParentProps(obj) {
                let prototype = Object.getPrototypeOf(obj);
                if (Object.getPrototypeOf(prototype)) {
                    let parentProps = Object.entries(prototype);
                    props = props.concat(parentProps);
                    getParentProps(prototype);
                }
            }
        }

        return {
            create,
            set,
            print
        }
    }

    let processor = cars();

    data.forEach(element => {
        let els = element.split(' ');
        processor[els.splice(0, 1)](...els);
    });
}

solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']);