const String1 = "SUBI NO ONIBUS"; //:D
let String2 = "";

for (let i = String1.length - 1; i >= 0; i--) {
    String2 += String1[i];
}
console.log(`String original: ${String1}`);
console.log(`String invertida: ${String2}`);