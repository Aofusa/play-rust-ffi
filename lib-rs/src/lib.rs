
#[no_mangle]
pub extern fn rust_hello() {
    println!("This is a rust function.");
}

#[no_mangle]
pub extern fn rust_arg_int(x: i32) {
    println!("[Rust int] called with {}.", x);
}

#[no_mangle]
pub extern fn rust_arg_float(x: f64) {
    println!("[Rust float] called with {}.", x);
}

#[no_mangle]
pub extern fn rust_twice(x: f64) -> f64 {
    2.0 * x
}
