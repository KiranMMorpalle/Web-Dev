# Async and Await

## 1️⃣ The problem they solve

Before `async/await`, we mostly dealt with asynchronous code using:

* **Callbacks** → quickly got messy (*callback hell*).
* **Promises with `.then()` / `.catch()`** → cleaner but still hard to read in long chains.

`async` and `await` are just **syntactic sugar** (nicer-looking code) for Promises.
They make asynchronous code **look like synchronous code** while still running asynchronously.

---

## 2️⃣ How it works

### `async`

* You put `async` before a function to make it **always return a Promise**.
* If you return a value, JavaScript wraps it in a Promise automatically.

```js
async function greet() {
    return "Hello!";
}
greet().then(msg => console.log(msg)); // "Hello!"
```

---

### `await`

* Can only be used **inside an `async` function**.
* Tells JS: "Wait here until this Promise settles (resolves or rejects) before moving on."

```js
async function getData() {
    const data = await fetch("https://api.github.com/users/octocat");
    const json = await data.json();
    console.log(json.name);
}
getData();
```

---

## 3️⃣ Real-life analogy

**Imagine you’re cooking dinner:**

* `async` = you promise your guests you’ll serve dinner (you don’t say exactly when).
* `await` = you personally wait for the oven to finish baking before moving on to the next dish.
* While you wait for the oven, your **kitchen helper (JS)** can still work on other tasks in the background.

---

## 4️⃣ Example with `Promise` vs `async/await`

**With Promises**

```js
fetch("https://api.github.com/users/octocat")
  .then(res => res.json())
  .then(data => console.log(data.name))
  .catch(err => console.log("Error:", err));
```

**With async/await**

```js
async function showUser() {
    try {
        const res = await fetch("https://api.github.com/users/octocat");
        const data = await res.json();
        console.log(data.name);
    } catch (err) {
        console.log("Error:", err);
    }
}
showUser();
```

✅ Reads top-to-bottom like normal code, but still non-blocking.

---

## 5️⃣ Key points to remember

* `await` pauses **only the async function**, not the whole program.
* Use `try...catch` for error handling with async/await.
* It’s perfect for writing clean, readable asynchronous code.

---

