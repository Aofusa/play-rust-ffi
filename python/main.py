#! python3


from ctypes import cdll
from ctypes import c_double
from ctypes import c_int
from ctypes import c_void_p
from ctypes import byref
from ctypes import Structure
from ctypes import POINTER

lib = cdll.LoadLibrary("target/release/libembed.dylib")

lib.rust_twice.argtypes = (c_double,)
lib.rust_twice.restype = c_double
x = 2.718
y = lib.rust_twice(x)
print("twice({}) = {}".format(x, y))

arr = [4, 3, 1, 2, 5]
print("[before] arr = {}".format(arr))
arr_c = (c_int*len(arr))(*arr)
lib.rust_array.argtypes = (c_void_p, c_int, c_int)
lib.rust_array.restype = (None)
lib.rust_array(byref(arr_c), len(arr), 2)
arr = list(arr_c)
print("[after]  arr = {}".format(arr))

arr_c = (c_int*len(arr))(*arr)
lib.rust_sort.argtypes = (c_void_p, c_int)
lib.rust_sort.restype = (None)
lib.rust_sort(byref(arr_c), len(arr))
arr = list(arr_c)
print("[sort]   arr = {}".format(arr))

print("done!")
