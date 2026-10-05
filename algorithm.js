// ============================================================
// SENTENCE ANALYSIS ALGORITHM
// ============================================================
// Objective:
// Read a sentence character by character and determine:
//
// 1. The length of the sentence
// 2. The number of words
// 3. The number of vowels
//
// Requirements:
// - The sentence must end with a point (.)
// - Each character is processed separately
// - Words are separated by a single space
// - Three counters are used
// ============================================================


// Import Node.js readline module
// readline allows us to receive input from the terminal
const readline = require("readline");


// Create the interface for terminal input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Ask the user to enter a sentence
rl.question(
    "Enter a sentence ending with a point (.): ",
    function (sentence) {

        // ----------------------------------------------------
        // INPUT VALIDATION
        // ----------------------------------------------------

        // Check if the user entered an empty sentence
        if (sentence.trim() === "") {

            console.log("Error: Please enter a valid sentence.");
            rl.close();
            return;
        }


        // Check if the sentence ends with a point
        if (!sentence.endsWith(".")) {

            console.log("Error: The sentence must end with a point (.).");
            rl.close();
            return;
        }


        // ----------------------------------------------------
        // THREE COUNTERS
        // ----------------------------------------------------

        // Counter for the number of characters
        let length = 0;

        // Counter for the number of words
        let words = 0;

        // Counter for the number of vowels
        let vowels = 0;


        // Index used to process each character
        let i = 0;


        // ----------------------------------------------------
        // PROCESS THE SENTENCE CHARACTER BY CHARACTER
        // ----------------------------------------------------

        // Continue until the final point is reached
        while (sentence[i] !== ".") {

            // Store the current character
            const character = sentence[i];


            // ------------------------------------------------
            // COUNT CHARACTERS
            // ------------------------------------------------

            // Count the current character
            length++;


            // ------------------------------------------------
            // COUNT VOWELS
            // ------------------------------------------------

            // Check whether the character is a vowel
            if ("aeiouAEIOU".includes(character)) {
                vowels++;
            }


            // ------------------------------------------------
            // COUNT WORDS
            // ------------------------------------------------

            // Words are separated by a single space
            if (character === " ") {
                words++;
            }


            // Move to the next character
            i++;
        }


        // ----------------------------------------------------
        // CALCULATE NUMBER OF WORDS
        // ----------------------------------------------------

        // Number of words = number of spaces + 1
        words++;


        // ----------------------------------------------------
        // DISPLAY RESULTS
        // ----------------------------------------------------

        console.log("\n=================================");
        console.log("       SENTENCE ANALYSIS");
        console.log("=================================");

        console.log("Sentence length:", length);
        console.log("Number of words:", words);
        console.log("Number of vowels:", vowels);

        console.log("=================================");


        // ====================================================
        // EXAMPLE
        // ====================================================
        //
        // Input:
        // Hello world.
        //
        // Character processing:
        //
        // H → length = 1
        // e → length = 2, vowels = 1
        // l → length = 3
        // l → length = 4
        // o → length = 5, vowels = 2
        //   → length = 6, words = 1
        // w → length = 7
        // o → length = 8, vowels = 3
        // r → length = 9
        // l → length = 10
        // d → length = 11
        // . → STOP
        //
        // Final values:
        //
        // length = 11
        // words = 2
        // vowels = 3
        //
        // Expected output:
        //
        // =================================
        //        SENTENCE ANALYSIS
        // =================================
        // Sentence length: 11
        // Number of words: 2
        // Number of vowels: 3
        // =================================
        // ====================================================


        // Close the readline interface
        rl.close();
    }
);