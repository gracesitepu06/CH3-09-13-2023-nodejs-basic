const { text } = require("express");
const fs = require("fs"); // -->file system
const http = require("http");
const url = require("url");

// console.log(fs.readFileSync("./txt/read-this.txt", "utf-8"));
// blocking code execution => synchronous
// const textIn = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(textIn);

// const textOut = fs.writeFileSync(
//   ".txt/output.txt",
//   "misal ini tuh ayam keju panggang "
// );
// console.log("sukses ngayalnya ya...");

// const textOut = `ini tuh penjelasan ttg alpukat di b.ing: ${textIn}`;
// fs.writeFileSync("./txt/output-penjelasan.txt", textOut);
// console.log("sukses nyetak data Avocado");

// non-blocking code execution =>asynchronous, yg mana beres dulu yg pertama keluar outputnya

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);

//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.writeFile("./txt/gabungan.txt", `${data}\n${data2}`, "utf-8", (err) => {
//       console.log("Sukses menggabungkan data.");
//     });
//   });
// });

// console.log("Hasil FSW 2 menunggu read file, bukan sebaliknya.");

//writeFile tp hasil gabungan dari read-this.txt sama final.txt
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data);

//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.writeFile("./txt/gabungan2.txt", `${data}\n${data2}`, "utf-8", (err) => {
//       console.log("Sukses menggabungkan data.");
//     });
//   });
// });

// console.log("Hasil FSW 2 menunggu read file, bukan sebaliknya.");

//////////////////////////////////////////////////////////////////

// SERVER DENGAN HTTP
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;
  if (pathName === "/hello") {
    res.end("ini helow ke fsw 2");
  } else if (pathName === "/product") {
    res.end(
      JSON.stringify({
        data: "ini product",
      })
    );
  } else if (pathName === "/api") {
    const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
    res.writeHead(200, {
      "Content-tipe": "application/json",
    });
    res.end(data);
  } else if (pathName === "/overview") {
    const overviewPage = fs.readFileSync(
      `${__dirname}/templates/overview.html`
    );
    res.writeHead(200, {
      "Content-tipe": "text/html",
    });
    res.end(overviewPage);
  } else {
    res.writeHead(404, {
      "Content-tipe": "text/html",
    });
    res.end("<h1>url ini ngk ada apa2</h1>");
  }

  //   res.end(
  //     JSON.stringify({
  //       data: "Hello FSW 2!!",
  //     })
  //   );
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Hello, the server is working >3<");
});

//ROOTING
