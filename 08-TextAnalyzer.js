function textAnalyzer(text) {
    // 1. شمارش تعداد کلمات
    let words = text.trim().split(/\s+/);

    // 2. شناسایی کلمه خاص
    let hasJavaScript = text.includes("JavaScript");

    // 3. تبدیل حروف
    let upperText = text.toUpperCase();
    let lowerText = text.toLowerCase();

    // 4. جایگزینی کلمه (مثلا "JavaScript" با "JS")
    let replacedText = text.replaceAll("JavaScript", "JS");

    // 5. طول کلمات
    let lengths = words.map(w => w.length);
    let maxLen = Math.max(...lengths);
    let minLen = Math.min(...lengths);

    // 6. مرتب سازی کلمات
    let sortedWords = [...words].sort((a,b) => a.localeCompare(b));

    // 7. کلمات تکراری
    let wordCount = {};
    words.forEach(word => {
        word = word.toLowerCase();
        wordCount[word] = (wordCount[word] || 0) + 1;
    });

    // 8. تبدیل به آرایه و بازگشت به رشته
    let arrayToString = words.join(' ');

    // 9. پاکسازی متن (حذف علائم نگارشی ساده)
    let cleanText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();

    return {
        wordCount: words.length,
        hasJavaScript,
        upperText,
        lowerText,
        replacedText,
        maxWordLength: maxLen,
        minWordLength: minLen,
        sortedWords,
        repeatedWordsCount: wordCount,
        arrayToString,
        cleanText
    };
}

// تست پروژه
let sampleText = "Hello JavaScript! This is a simple JavaScript text analyzer, which counts words, replaces words, and more.";
console.log(textAnalyzer(sampleText));
