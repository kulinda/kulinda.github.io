import { start_frame } from '../js/client/wasm-imports.js';
import { finish_frame } from '../js/client/wasm-imports.js';
import { set_buffer } from '../js/client/wasm-imports.js';
import { delete_buffer } from '../js/client/wasm-imports.js';
import { render_buffer } from '../js/client/wasm-imports.js';
import { render_buffer_instanced } from '../js/client/wasm-imports.js';
import { show_notification } from '../js/client/wasm-imports.js';

const __exports = {};
let wasm;

const heap = new Array(32);

heap.fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

function __wbg_startframe_62aedd95f143e596(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29, arg30, arg31, arg32, arg33, arg34, arg35, arg36, arg37, arg38, arg39, arg40, arg41, arg42, arg43, arg44, arg45, arg46, arg47, arg48, arg49, arg50, arg51, arg52, arg53, arg54, arg55, arg56, arg57, arg58, arg59, arg60, arg61, arg62, arg63) {
    start_frame(getObject(arg0), arg1 >>> 0, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18, arg19, arg20, arg21, arg22, arg23, arg24, arg25, arg26, arg27, arg28, arg29, arg30, arg31, arg32, arg33, arg34, arg35, arg36, arg37, arg38, arg39, arg40, arg41, arg42, arg43, arg44, arg45, arg46, arg47, arg48, arg49, arg50, arg51, arg52, arg53, arg54, arg55, arg56, arg57, arg58, arg59, arg60, arg61, arg62, arg63);
}

__exports.__wbg_startframe_62aedd95f143e596 = __wbg_startframe_62aedd95f143e596;

function __wbg_finishframe_fdb43acdb1ed2084(arg0) {
    finish_frame(getObject(arg0));
}

__exports.__wbg_finishframe_fdb43acdb1ed2084 = __wbg_finishframe_fdb43acdb1ed2084;

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== wasm.memory.buffer) {
        cachegetFloat32Memory = new Float32Array(wasm.memory.buffer);
    }
    return cachegetFloat32Memory;
}

function getArrayF32FromWasm(ptr, len) {
    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
}

function __wbg_setbuffer_794b805bc1205e88(arg0, arg1, arg2, arg3, arg4, arg5) {
    let varg3 = getArrayF32FromWasm(arg3, arg4);
    set_buffer(getObject(arg0), arg1, arg2, varg3, arg5 >>> 0);
}

__exports.__wbg_setbuffer_794b805bc1205e88 = __wbg_setbuffer_794b805bc1205e88;

function __wbg_deletebuffer_1181e1074d1d1905(arg0, arg1, arg2) {
    delete_buffer(getObject(arg0), arg1, arg2);
}

__exports.__wbg_deletebuffer_1181e1074d1d1905 = __wbg_deletebuffer_1181e1074d1d1905;

function __wbg_renderbuffer_d8da95fa3155a149(arg0, arg1, arg2) {
    render_buffer(getObject(arg0), arg1, arg2);
}

__exports.__wbg_renderbuffer_d8da95fa3155a149 = __wbg_renderbuffer_d8da95fa3155a149;

function __wbg_renderbufferinstanced_41390fb35593443d(arg0, arg1, arg2, arg3) {
    render_buffer_instanced(getObject(arg0), arg1, arg2, arg3);
}

__exports.__wbg_renderbufferinstanced_41390fb35593443d = __wbg_renderbufferinstanced_41390fb35593443d;

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

function __wbg_shownotification_7635b840211c35de(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    let varg1 = getStringFromWasm(arg1, arg2);
    let varg3 = getStringFromWasm(arg3, arg4);
    let varg5 = getStringFromWasm(arg5, arg6);
    show_notification(getObject(arg0), varg1, varg3, varg5);
}

__exports.__wbg_shownotification_7635b840211c35de = __wbg_shownotification_7635b840211c35de;

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
* @param {any} renderer
* @returns {void}
*/
export function init_game(renderer) {
    return wasm.init_game(addHeapObject(renderer));
}

__exports.init_game = init_game;

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm(arg) {
    const ptr = wasm.__wbindgen_malloc(arg.length * 1);
    getUint8Memory().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint8Array} data
* @returns {void}
*/
export function load_map(data) {
    const ptr0 = passArray8ToWasm(data);
    const len0 = WASM_VECTOR_LEN;
    try {
        return wasm.load_map(ptr0, len0);

    } finally {
        wasm.__wbindgen_free(ptr0, len0 * 1);

    }

}

__exports.load_map = load_map;

function getArrayU8FromWasm(ptr, len) {
    return getUint8Memory().subarray(ptr / 1, ptr / 1 + len);
}

let cachedGlobalArgumentPtr = null;
function globalArgumentPtr() {
    if (cachedGlobalArgumentPtr === null) {
        cachedGlobalArgumentPtr = wasm.__wbindgen_global_argument_ptr();
    }
    return cachedGlobalArgumentPtr;
}

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}
/**
* @returns {Uint8Array}
*/
export function save_map() {
    const retptr = globalArgumentPtr();
    wasm.save_map(retptr);
    const mem = getUint32Memory();
    const rustptr = mem[retptr / 4];
    const rustlen = mem[retptr / 4 + 1];

    const realRet = getArrayU8FromWasm(rustptr, rustlen).slice();
    wasm.__wbindgen_free(rustptr, rustlen * 1);
    return realRet;

}

__exports.save_map = save_map;

/**
* @param {number} x
* @param {number} y
* @param {number} z
* @returns {void}
*/
export function set_spawn_point(x, y, z) {
    return wasm.set_spawn_point(x, y, z);
}

__exports.set_spawn_point = set_spawn_point;

/**
* @param {number} tick
* @param {number} canvas_width
* @param {number} canvas_height
* @param {number} move_fwd
* @param {number} move_side
* @param {boolean} move_jump
* @param {boolean} move_running
* @param {number} turn_x
* @param {number} turn_y
* @param {number} look_x
* @param {number} look_y
* @param {boolean} look_action
* @param {number} skill
* @returns {void}
*/
export function tick(tick, canvas_width, canvas_height, move_fwd, move_side, move_jump, move_running, turn_x, turn_y, look_x, look_y, look_action, skill) {
    return wasm.tick(tick, canvas_width, canvas_height, move_fwd, move_side, move_jump, move_running, turn_x, turn_y, look_x, look_y, look_action, skill);
}

__exports.tick = tick;

/**
* @returns {void}
*/
export function player_reset() {
    return wasm.player_reset();
}

__exports.player_reset = player_reset;

/**
* @returns {number}
*/
export function player_get_x() {
    return wasm.player_get_x();
}

__exports.player_get_x = player_get_x;

/**
* @returns {number}
*/
export function player_get_y() {
    return wasm.player_get_y();
}

__exports.player_get_y = player_get_y;

/**
* @returns {number}
*/
export function player_get_z() {
    return wasm.player_get_z();
}

__exports.player_get_z = player_get_z;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function __wbindgen_object_drop_ref(i) { dropObject(i); }

__exports.__wbindgen_object_drop_ref = __wbindgen_object_drop_ref;

function init(module) {
    let result;
    const imports = { './client_web': __exports };
    if (module instanceof URL || typeof module === 'string' || module instanceof Request) {

        const response = fetch(module);
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            result = WebAssembly.instantiateStreaming(response, imports)
            .catch(e => {
                console.warn("`WebAssembly.instantiateStreaming` failed. Assuming this is because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
                return response
                .then(r => r.arrayBuffer())
                .then(bytes => WebAssembly.instantiate(bytes, imports));
            });
        } else {
            result = response
            .then(r => r.arrayBuffer())
            .then(bytes => WebAssembly.instantiate(bytes, imports));
        }
    } else {

        result = WebAssembly.instantiate(module, imports)
        .then(result => {
            if (result instanceof WebAssembly.Instance) {
                return { instance: result, module };
            } else {
                return result;
            }
        });
    }
    return result.then(({instance, module}) => {
        wasm = instance.exports;
        init.__wbindgen_wasm_module = module;

        return wasm;
    });
}

export default init;

