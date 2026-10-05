# 🔎 Sentence Analysis — JavaScript Algorithm

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Algorithm](https://img.shields.io/badge/Algorithm-Sentence%20Analysis-4B5563?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Completed-22C55E?style=for-the-badge)

**A character-by-character JavaScript algorithm for analyzing a sentence.**

</div>

---

## 📋 Table of Contents

* [About the Project](#-about-the-project)
* [Checkpoint Objective](#-checkpoint-objective)
* [Features](#-features)
* [Algorithm Logic](#-algorithm-logic)
* [Technologies](#-technologies)
* [Project Structure](#-project-structure)
* [How It Works](#-how-it-works)
* [Example](#-example)
* [Installation & Execution](#-installation--execution)
* [Learning Objectives](#-learning-objectives)
* [Author](#-author)

---

## 📌 About the Project

**Sentence Analysis** is a JavaScript algorithm developed as part of a programming and algorithmic logic checkpoint.

The application reads a sentence **character by character** until it reaches the final point (`.`).

It then calculates three important properties of the sentence:

* The total number of characters
* The total number of words
* The total number of vowels

The implementation focuses on fundamental programming concepts such as **variables, counters, loops, conditions, strings, and character processing**.

---

## 🎯 Checkpoint Objective

The objective of this checkpoint is to create an algorithm capable of reading a sentence that ends with a point and determining:

1. **The length of the sentence**
2. **The number of words**
3. **The number of vowels**

### Requirements

The algorithm must:

* Process every character separately.
* Stop when the final point (`.`) is reached.
* Assume that words are separated by a single space.
* Use three variables as counters.
* Identify vowels regardless of their capitalization.

---

## ✨ Features

### Character-by-Character Processing

Each character is accessed individually using its position inside the string.

### Character Counter

The algorithm counts every character appearing before the final point.

### Word Counter

Words are calculated using spaces:

```text
Number of words = Number of spaces + 1
```

### Vowel Counter

The algorithm detects both lowercase and uppercase vowels:

```text
a, e, i, o, u
A, E, I, O, U
```

### Interactive Input

The user enters the sentence through a JavaScript `prompt()`.

### Console Output

The calculated results are displayed clearly in the browser's developer console.

---

## 🧠 Algorithm Logic

The algorithm uses three main counters:

```javascript
let length = 0;
let words = 0;
let vowels = 0;
```

### 1. Read the Sentence

The user enters a sentence ending with a period:

```javascript
const sentence = prompt("Enter a sentence ending with a point (.)");
```

### 2. Start Character Processing

The algorithm begins at the first character:

```javascript
let i = 0;
```

A `while` loop processes the sentence until the period is reached:

```javascript
while (sentence[i] !== ".") {
```

### 3. Count Characters

Each character is counted:

```javascript
length++;
```

### 4. Detect Vowels

The current character is checked against the list of vowels:

```javascript
if ("aeiouAEIOU".includes(character)) {
    vowels++;
}
```

### 5. Count Words

Each space indicates the separation between two words:

```javascript
if (character === " ") {
    words++;
}
```

After the loop, one is added because the last word does not have a space after it:

```javascript
words++;
```

---

## 🛠️ Technologies

<div align="center">

<img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript">

</div>

### Core Concepts

* JavaScript
* Strings
* Variables
* Counters
* `while` loops
* Conditional statements
* Character indexing
* String methods
* Console output
* User input with `prompt()`

---

## 📁 Project Structure

```text
Sentence-Analysis/
│
├── index.html
├── script.js
└── README.md
```

### `index.html`

Provides the basic HTML structure and loads the JavaScript file.

### `script.js`

Contains the complete sentence analysis algorithm.

### `README.md`

Contains the project documentation, algorithm explanation, and usage instructions.

---

## ⚙️ How It Works

The algorithm follows this sequence:

```text
START
  │
  ▼
Ask the user for a sentence
  │
  ▼
Initialize three counters
length = 0
words = 0
vowels = 0
  │
  ▼
Read the sentence character by character
  │
  ▼
Is the character "." ?
  │
 ┌┴───────────────┐
 │                │
YES              NO
 │                │
 ▼                ▼
STOP        Count character
             │
             ▼
       Is it a vowel?
             │
             ▼
       Increment vowels
             │
             ▼
        Is it a space?
             │
             ▼
        Increment words
             │
             ▼
       Read next character
             │
             └───────►
  │
  ▼
Add 1 to words
  │
  ▼
Display results
  │
  ▼
END
```

---

## 🧪 Example

### Input

```text
Hello world.
```

### Character Analysis

| Character | Length | Vowel | Space |
| --------- | -----: | ----: | ----: |
| H         |      1 |    No |    No |
| e         |      2 |   Yes |    No |
| l         |      3 |    No |    No |
| l         |      4 |    No |    No |
| o         |      5 |   Yes |    No |
| Space     |      6 |    No |   Yes |
| w         |      7 |    No |    No |
| o         |      8 |   Yes |    No |
| r         |      9 |    No |    No |
| l         |     10 |    No |    No |
| d         |     11 |    No |    No |
| `.`       |   Stop |     — |     — |

### Result

```text
Sentence length: 11
Number of words: 2
Number of vowels: 3
```

---

## 🚀 Installation & Execution

### 1. Clone or Download the Project

Download the project files to your computer.

### 2. Open the Project

Open the project folder using **Visual Studio Code** or another code editor.

### 3. Open `index.html`

Launch the HTML file in a modern web browser.

You can also use the **Live Server** extension in Visual Studio Code.

### 4. Enter a Sentence

When prompted, enter a sentence ending with a period:

```text
JavaScript is powerful.
```

### 5. Open the Developer Console

Press:

```text
F12
```

or:

```text
Ctrl + Shift + J
```

Then open the **Console** tab to view the results.

---

## 📊 Expected Output

For:

```text
JavaScript is powerful.
```

The console will display results similar to:

```text
=================================
       SENTENCE ANALYSIS
=================================
Sentence length: 24
Number of words: 3
Number of vowels: 8
=================================
```

---

## 🎓 Learning Objectives

This project reinforces several fundamental programming concepts.

### Variables

Using variables to store and update information:

```javascript
let length = 0;
let words = 0;
let vowels = 0;
```

### Loops

Using a `while` loop to process multiple characters:

```javascript
while (sentence[i] !== ".") {
    // Process character
}
```

### Conditions

Using `if` statements to identify vowels and spaces.

### String Manipulation

Accessing individual characters using:

```javascript
sentence[i]
```

### Counters

Incrementing values during the execution of the algorithm:

```javascript
length++;
words++;
vowels++;
```

### Algorithmic Thinking

Breaking a larger problem into smaller logical operations and processing the input sequentially.

---

## 🔐 Input Assumptions

The algorithm follows the checkpoint assumptions:

* The sentence ends with a period (`.`).
* Words are separated by a single space.
* The final period is used as the termination character.
* The period is not included in the character count.
* The last word is counted after processing the sentence.
* Both uppercase and lowercase vowels are recognized.

---

## 💡 Key Programming Principle

The most important concept demonstrated by this project is **sequential character processing**.

Instead of using high-level methods such as:

```javascript
sentence.split(" ")
```

the algorithm explicitly examines each character:

```javascript
const character = sentence[i];
```

This approach demonstrates a stronger understanding of how strings can be processed internally and directly follows the requirements of the checkpoint.

---

## 📈 Possible Future Improvements

Although the current implementation satisfies the checkpoint requirements, the project could later be extended with:

* Input validation
* Support for accented vowels such as `é`, `è`, `à`, and `ù`
* A graphical user interface
* Real-time analysis
* Character-type statistics
* Punctuation analysis
* Sentence statistics dashboard
* Responsive web interface
* Automated test cases

These improvements are intentionally outside the scope of the basic checkpoint.

---

## 👨‍💻 Author

**Yassine Kalthoum**

Software & Network Engineering

### Focus Areas

* Software Engineering
* Web Development
* Network Engineering
* Cybersecurity
* Algorithms & Data Structures

---

## 📄 License

This project was developed for educational purposes as part of a programming and algorithmic logic checkpoint.

---

<div align="center">

**Built with JavaScript • Algorithmic Thinking • Clean Code**

</div>
