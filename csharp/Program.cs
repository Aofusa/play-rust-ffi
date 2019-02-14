using System;
using System.Runtime.InteropServices;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("twice(2.718) = {0}", rust_twice(2.718));

            var arr = new int[] {1, 2, 3, 4, 5};
            Console.WriteLine("[before] arr = [{0}, {1}, {2}, {3}, {4}]", arr[0], arr[1], arr[2], arr[3], arr[4]);
            rust_array(arr, arr.Length, 2);
            Console.WriteLine("[after]  arr = [{0}, {1}, {2}, {3}, {4}]", arr[0], arr[1], arr[2], arr[3], arr[4]);

            Console.WriteLine("done!");
        }

        [DllImport("../target/release/libembed.dylib")]
        internal static extern double rust_twice(double x);

        [DllImport("../target/release/libembed.dylib")]
        internal static extern void rust_array(int[] array, int length, int v);
    }
}
