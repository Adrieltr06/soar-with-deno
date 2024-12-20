// Tutorial 1 -> HTTP Library "Hello world!"
// if (import.meta.main) {
//   Deno.serve((_req_) => {
//     (async () => {
//       for await (const el of Deno.readDir(".")) {
//         console.log(el.name);
//       }
//     })();
//     const hello = new Response("Hello, World!");
//     return hello;
//   });
// }

// Tutorial 2 -> Importing multiple library
// Step 3 - Importing local modules and files
// import { mutiplyWords } from "./utils/multiply-words.ts";

// if (import.meta.main) {
//   const multipliedWords = mutiplyWords(Deno.args[0].trim(), Number.parseInt(Deno.args[1].trim()));
//   console.log(multipliedWords)
// }

// Step 4 - Import Syntax
// Import oak library from jsr
// import { Application, Router } from "jsr:@oak/oak@17.1.3";
// const router = new Router();
// const app = new Application();

// router.get("/", (ctx) => {
//     ctx.response.body = "Hello, World!";
// })

// app.use(router.allowedMethods());
// app.use(router.routes());

// if (import.meta.main) {
//     app.listen({ port: 8080 });
// }

// Import express library from node/npm
// import express from "npm:express@4.21.1";
// const app = express();

// app.get("/", (_req, res) => {
//         res.send("Hello, World!");
// });

// if (import.meta.main) {
//         app.listen({ port: 8080 });
// }

// Step 5 - Http import
// import { hello } from "https://gist.githubusercontent.com/uncomfyhalomacro/b5de275dfcbaeff1d2d89739541e4e6f/raw/648e323e4ab872cc2a6eeafdd1ccf46d8f6c6301/mod.ts";

// if (import.meta.main) {
//   hello();
// }

// Step 6 - Import maps
// import { mutiplyWords } from "multiply-words";

// if (import.meta.main) {
//   const multipliedWords = mutiplyWords(Deno.args[0].trim(), Number.parseInt(Deno.args[1].trim()));
//   console.log(multipliedWords)
// }

// Step 7 - Adding Dependencies | Essential Deno Commands
// touch deno.json
// deno add jsr:@oak/oak
// deno add --dev jsr:@std/assert -> declare the dependecies as developer dependencies by passing a --dev flag
// Developer dependencies are subjective to most developers but they usually mean dependencies that are used only for development and NOT for production. For example, one can add a developer dependency for tests such as @std/assert

// Step 8 - Formatting Code | Essential Deno Commands
// deno fmt -> Command for formatting code
// import { mutiplyWords } from "multiply-words";

// if (import.meta.main) {
//   const multipliedWords = mutiplyWords(
//     Deno.args[0].trim(),
//     Number.parseInt(Deno.args[1].trim()),
//   );
//   console.log(
//     multipliedWords,
//   );
// }

// Step 9 - Linting Code | Essential Deno Commands
// deno lint -> Using linter to checking code for potential ambiguities such as possible wrong use of a type, declaring a variable with the let keyword but is only used once, or unused variables.
// function foo(s: any): any {
//   return "foo"
// }

// if (import.meta.main) {
//   let foobar = "bar";
//   const barsoap = 0;
//   console.log(foo("foo"), foobar);
// }

// Step 10 - Watch Flag | Essential Deno Commands
// deno run -A --watch main.ts -> A watcher is a utility that reruns a program if it detects file or directory changes.
// if (import.meta.main) {
//   Deno.serve((_req_) => {
//     (async () => {
//       for await (const el of Deno.readDir(".")) {
//         console.log(el.name);
//       }
//     })();
//     const hello = new Response("Hello, World!");
//     return hello;
//   });
// }

// Step 11 - Upgrading and Downgrading Deno | Essential Deno Commands
// deno upgrade
// deno upgrade $specified_version
// deno --version