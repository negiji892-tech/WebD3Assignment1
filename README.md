# Smart Utility Toolkit

A collection of simple utility programs built with **only Node.js built-in/core modules** — no external packages, no Express.js, no database.

## Project Structure

```
smart-utility-toolkit/
├── calculator.js   → CLI Calculator (process.argv)
├── isEven.js       → Custom reusable module (module.exports)
├── app.js          → Uses the isEven module (require())
├── server.js       → Basic HTTP Server (http)
├── fileManager.js  → File operations (fs)
└── dice.js         → Random Dice Generator (crypto)
```

## Requirements

- [Node.js](https://nodejs.org/) installed (includes all core modules used here)

---

## 1. CLI Calculator — `calculator.js`

Uses `process.argv` to accept arguments and supports addition, subtraction, multiplication, and division.

```bash
node calculator.js add 10 5          # 15
node calculator.js subtract 10 5     # 5
node calculator.js multiply 4 6      # 24
node calculator.js divide 20 4       # 5
```

Invalid operations are handled gracefully.

---

## 2. Custom Module — `isEven.js` + `app.js`

`isEven.js` exports a reusable function using `module.exports`. `app.js` imports it using `require()`.

```bash
node app.js 10
```

---

## 3. Basic HTTP Server — `server.js`

Runs on port `3000` and responds differently based on the URL.

```bash
node server.js
```

Then open in your browser or Postman:

| Route      | Response              |
|------------|-----------------------|
| `/`        | Welcome message       |
| `/about`   | About page            |
| `/contact` | Contact page          |
| anything else | 404 error message  |

---

## 4. File Manager — `fileManager.js`

Demonstrates all four file operations using the `fs` module:

```bash
node fileManager.js
```

- Create File → `writeFile()`
- Read File → `readFile()`
- Update File → `appendFile()`
- Delete File → `unlink()`

Missing-file errors are handled gracefully.

---

## 5. Random Dice Generator — `dice.js`

Uses `crypto.randomInt()` for secure randomness (1–6), with a loop for multiple rolls.

```bash
node dice.js      # single roll
node dice.js 5    # roll 5 times
```

Example output:

```
Dice Rolled: 4
```

---

## Modules Used

Only Node.js built-in core modules:

- `process` — CLI calculator
- `http` — HTTP server
- `fs` — file manager
- `crypto` — dice generator
- `module.exports` / `require()` — custom module
