fetch('embed.wasm').then(response => response.arrayBuffer())
    .then(bytes => WebAssembly.instantiate(bytes, {}))
    .then(results => {
        console.log(results.instance.exports.rust_twice(2.718));
    });

