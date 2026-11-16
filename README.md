# Caesar Cipher

A simple, interactive web application for encrypting and decrypting messages using the **Caesar Cipher**.

## 📋 Features

* **Encryption (`>`):** Converts plain text (*Normal Text*) into ciphered text (*Ciphered Text*) based on the specified shift number.
* **Decryption (`<`):** Reverts ciphered text back to the original plain text using the same shift key.
* **Customizable Shift:** Allows you to numerically define how many positions the alphabet is rotated.
* **Character Preservation:** Spaces, punctuation, numbers, and uppercase letters remain intact during conversion.
* **Content-Responsive Interface:** Text fields automatically adjust their height to fit the length of the entered message.

## 🛠️ Technologies Used

* **HTML5:** Page structure with two text areas and central controls.
* **CSS3:** Clean styling with Flexbox.
* **JavaScript (Vanilla):** Alphabet rotation logic (`a-z`) and DOM manipulation.

## 📂 File Structure

```text
├── index.html   # Main page structure
├── style.css    # Application styles and layout
└── script.js    # Encryption and decryption logic
```

## 🚀 How to Use

1. Clone or download this repository to your computer.
2. Open the `index.html` file directly in any modern web browser.
3. In the central input field, enter the desired **number of shifts** (e.g., `3`).
4. To **encrypt**: type in the **Normal Text** field and click the `>` button.
5. To **decrypt**: type in the **Ciphered Text** field and click the `<` button.

## ⚙️ How the Logic Works

The script uses the standard lowercase alphabet (`abcdefghijklmnopqrstuvwxyz`). When a value $N$ is entered in the shift field, the code slices and rearranges the alphabet string to create the substitution map:

```javascript
const alphabetCipher = alphabetNormal.slice(numOfMoves, 26) + alphabetNormal.slice(0, numOfMoves);
```

Each character present in the base alphabet is replaced by its corresponding character at the same index in the shifted alphabet. Characters not found in the lowercase alphabet are appended without changes.
