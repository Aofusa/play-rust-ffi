RUST-OBJECT
---


Rust 製のライブラリを 他言語から呼び出してみる  


## Rust コンパイル  
```sh
cd lib-rs

# オブジェクトファイルのコンパイル
cargo build --release
```

## Python3 実行  
```sh
python3 python/main.py
```

## .Net Core 実行  
```sh
cd csharp
dotnet run
```


## Rust WebAssembly コンパイル  
```sh
cd lib-rs

# WebAssembly へのコンパイル
cargo build --release --target=wasm32-unknown-unknown
cp target/wasm32-unknown-unknown/release/embed.wasm ../js
```


## JavaScript 準備
```sh
cd js

# モジュールインストール
npm i -D

# サーバ起動
npm start

# ブラウザで http://localhost:3000 にアクセス
```

