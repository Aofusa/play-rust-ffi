using System;
using System.Runtime.InteropServices;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(rust_twice(2.718));
        }

        [DllImport("../lib-rs/target/release/libembed.dylib")]
        internal static extern double rust_twice(double x);
    }
}
