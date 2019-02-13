#! python3


from ctypes import cdll
from ctypes import c_double


lib = cdll.LoadLibrary("../lib-rs/target/release/libembed.dylib")

lib.rust_hello()
lib.rust_arg_int(100)
lib.rust_arg_float.argtypes = (c_double, )
lib.rust_arg_float(2.718)


lib.rust_twice.argtypes = (c_double,)
lib.rust_twice.restype = c_double
x = 2.718
y = lib.rust_twice(x)
print("twice({}) = {}".format(x, y))

print("done!")

