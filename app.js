//Recall the Latin alphabet variable from the previous exercise.
const alphabet = "abcdefghijklmnopqrstuvwxyz";

//Use a loop to iterate through each letter of "BRUTUS". Employ the Caesar Cipher technique to shift each letter by the given value. Store the encrypted name in a variable.
let encryptedName = "";

for (let i = 0; i < friend.length; i++)
{
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

//What advantage does using a loop provide over manually encrypting each letter?
//Using a loop automates letter-by-letter name encryption for consistency and adaptability.

//Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
//The % operator ensures continuous encryption by wrapping to 'a' after 'z'.