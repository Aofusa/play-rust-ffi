
'use strict';

var importObject = {
    env: {
        memory: new WebAssembly.Memory({
            initial: 128
        })
    }
}

fetch('embed.wasm')
    .then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, importObject))
    .then(obj => {
        const instance = obj.instance;
        const module = obj.module;

        console.log("twice(2.718) = " + instance.exports.rust_twice(2.718));

        // var arr = new Int32Array([1, 2, 3, 4, 5]);

        const length = 5;
        const ptr = instance.exports.alloc(length);
        const arr = new Int32Array(instance.exports.memory.buffer, ptr, length*Int32Array.BYTES_PER_ELEMENT);
        arr[0] = 4;
        arr[1] = 3;
        arr[2] = 1;
        arr[3] = 2;
        arr[4] = 5;
        // const arr = new DataView(instance.exports.memory.buffer, ptr, length*Int32Array.BYTES_PER_ELEMENT);
        // arr.setInt32(0, 1, true);
        // arr.setInt32(4, 2, true);
        // arr.setInt32(8, 3, true);
        // arr.setInt32(12, 4, true);
        // arr.setInt32(16, 5, true);

        var show_data = [];
        for (var i=0; i < length; i++) {
            // const data = arr.getInt32(i*Int32Array.BYTES_PER_ELEMENT, true);
            const data = arr[i];
            show_data.push(data);
        }
        console.log("[before] arr = " + JSON.stringify(show_data));

        instance.exports.rust_array(ptr, length, 2);

        show_data = [];
        for (var i=0; i < length; i++) {
            // const data = arr.getInt32(i*Int32Array.BYTES_PER_ELEMENT, true);
            const data = arr[i];
            show_data.push(data);
        }
        console.log("[after]  arr = " + JSON.stringify(show_data));

        instance.exports.rust_sort(ptr, length);

        show_data = [];
        for (var i=0; i < length; i++) {
            // const data = arr.getInt32(i*Int32Array.BYTES_PER_ELEMENT, true);
            const data = arr[i];
            show_data.push(data);
        }
        console.log("[sort]   arr = " + JSON.stringify(show_data));

        instance.exports.free(ptr, length);

        console.log("done!");
    });
