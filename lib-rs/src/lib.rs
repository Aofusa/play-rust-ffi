
extern crate nalgebra as na;

use std::os::raw::{c_int, c_double, c_void};
use std::slice;
use std::mem;

#[no_mangle]
pub fn alloc(size: usize) -> *mut c_void {
    let mut buf = Vec::with_capacity(size);
    let ptr = buf.as_mut_ptr();
    mem::forget(buf);
    return ptr as *mut c_void;
}

#[no_mangle]
pub fn free(ptr: *mut c_void, size: usize) {
    unsafe {
        let _buf = Vec::from_raw_parts(ptr, 0, size);
    }
}

#[no_mangle]
pub extern fn rust_twice(x: c_double) -> c_double {
    2.0 * x
}

#[no_mangle]
pub extern fn rust_array(array: *mut c_int, length: c_int, v: c_int) {
    assert!(!array.is_null(), "Null pointer exception.");

    let array: *mut [c_int] = unsafe { slice::from_raw_parts_mut(array, length as usize) };

    for idx in 0..length as usize {
        unsafe { (*array)[idx] += v; }
    }
}
