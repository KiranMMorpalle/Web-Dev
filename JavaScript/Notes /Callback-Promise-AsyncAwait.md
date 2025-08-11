Let’s compare **Callbacks**, **Promises**, and **Async/Await** in JavaScript — like a timeline of how developers evolved to keep their sanity.

---

## **1️⃣ Callbacks**

**Definition:**
A callback is a function passed into another function, to be executed later (usually after an async task finishes).

**Example:**

```js
function getData(callback) {
    setTimeout(() => {
        callback("✅ Data loaded");
    }, 1000);
}

getData(result => {
    console.log(result);
});
```

**Pros:**

* Simple for small tasks.
* Supported everywhere.

**Cons:**

* **Callback Hell** when chaining many async tasks.
* Error handling is awkward (need separate error callbacks).
* Code gets deeply nested and hard to read.

**Example of callback hell:**

```js
doTask1(result1 => {
    doTask2(result1, result2 => {
        doTask3(result2, result3 => {
            console.log("Done!");
        });
    });
});
```

---

## **2️⃣ Promises**

**Definition:**
A Promise is an object representing the eventual completion or failure of an async task.

**Example:**

```js
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("✅ Data loaded");
        }, 1000);
    });
}

getData().then(result => {
    console.log(result);
});
```

**Pros:**

* Avoids deep nesting by using `.then()`.
* Built-in error handling via `.catch()`.
* Can chain async operations cleanly.

**Cons:**

* Still not as readable as synchronous code.
* Multiple `.then()` chains can get messy.

**Chaining:**

```js
task1()
  .then(result1 => task2(result1))
  .then(result2 => task3(result2))
  .catch(err => console.error(err));
```

---

## **3️⃣ Async/Await**

**Definition:**
A cleaner syntax for writing Promises, making async code look synchronous.

**Example:**

```js
async function getData() {
    return "✅ Data loaded";
}

async function main() {
    const result = await getData();
    console.log(result);
}
main();
```

**Pros:**

* Looks like normal step-by-step code.
* Easier to read, debug, and maintain.
* Works naturally with `try...catch` for error handling.

**Cons:**

* Needs a modern JS environment (ES2017+).
* Still needs Promise knowledge to use effectively.

**Example with try/catch:**

```js
async function processTasks() {
    try {
        const result1 = await task1();
        const result2 = await task2(result1);
        const result3 = await task3(result2);
        console.log("✅ Done:", result3);
    } catch (err) {
        console.error("❌ Error:", err);
    }
}
```

---

## **📊 Quick Comparison Table**

| Feature            | Callbacks               | Promises    | Async/Await                     |
| ------------------ | ----------------------- | ----------- | ------------------------------- |
| Syntax Readability | ❌ Poor (nested)         | ⚠️ Better   | ✅ Best                          |
| Error Handling     | Awkward                 | `.catch()`  | `try...catch`                   |
| Chaining           | Messy                   | Clean       | Cleanest                        |
| Learning Curve     | Easy start, messy later | Medium      | Easy if you know Promises       |
| Code Style         | Nested functions        | Flat chains | Sequential, synchronous-looking |

---

