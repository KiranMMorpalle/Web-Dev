
## **What is a Promise in JavaScript?**

A **Promise** is an object that represents a task that will **complete in the future** — either successfully (**fulfilled**) or with a failure (**rejected**).

It has 3 states:

1. **Pending** → Still waiting for the result.
2. **Fulfilled** → Task completed successfully.
3. **Rejected** → Task failed.

---

## **Real-Life Analogy — Swiggy/Zomato Food Order**

Imagine:

1. You order food on Swiggy.
2. Swiggy promises to deliver your food.
3. The delivery can have 3 outcomes:

| JS Promise State | Food Delivery Analogy                                          |
| ---------------- | -------------------------------------------------------------- |
| **Pending**      | You just placed the order, food is being prepared & picked up. |
| **Fulfilled**    | The delivery person arrives and gives you your delicious food. |
| **Rejected**     | Restaurant cancels your order, or delivery guy never shows up. |

---

## **Code Example**

```javascript
let foodOrder = new Promise((resolve, reject) => {
    let foodReady = true; // Change to false to simulate rejection

    console.log("Order placed. Restaurant is preparing your food...");

    setTimeout(() => {
        if (foodReady) {
            resolve("Your food has arrived! 🍔");
        } else {
            reject("Sorry, restaurant canceled the order 😢");
        }
    }, 2000); // Simulate 2s delay
});

// Handling the promise
foodOrder
    .then(message => {
        console.log("✅ Success:", message);
    })
    .catch(error => {
        console.log("❌ Error:", error);
    })
    .finally(() => {
        console.log("🍽 Thank you for using Swiggy!");
    });
```

---

## **Key Takeaways**

* **Promise** = Agreement that something will happen in the future.
* **then()** → What to do if the promise is kept.
* **catch()** → What to do if the promise is broken.
* **finally()** → Always runs, no matter what.

---
