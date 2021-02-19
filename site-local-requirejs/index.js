/**
 * @author "Brian Kirkpatrick" <code@tythos.net>
 */

require.config({
    "paths": {
        "wasm": "wasmloader"
    }
});

require(["wasm!hello_wasm_standalone_bg.wasm"], function(wasm) {
    let value = wasm.exports.return_bool();
    let div = window.document.createElement("div");
    div.textContent = `> ${value} has typeof ${typeof(value)}`;
    window.document.body.appendChild(div);
});
