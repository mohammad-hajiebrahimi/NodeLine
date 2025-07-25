// stringMethods.js
// مجموعه متدهای مهم رشته در جاوااسکریپت با توضیح و مثال

const sampleText = "Hello, Asabeneh!";

// 1. length: طول رشته را برمی‌گرداند (تعداد کاراکترها)
console.log('length:', sampleText.length); // 16

// 2. toUpperCase(): تبدیل رشته به حروف بزرگ
console.log('toUpperCase:', sampleText.toUpperCase()); // "HELLO, ASABENEH!"

// 3. toLowerCase(): تبدیل رشته به حروف کوچک
console.log('toLowerCase:', sampleText.toLowerCase()); // "hello, asabeneh!"

// 4. indexOf(searchValue, fromIndex): موقعیت اولین ظاهر شدن searchValue در رشته را برمی‌گرداند، -1 اگر پیدا نشد
console.log('indexOf "Asa":', sampleText.indexOf("Asa")); // 7

// 5. lastIndexOf(searchValue): موقعیت آخرین ظاهر شدن searchValue در رشته را می‌دهد
console.log('lastIndexOf "l":', sampleText.lastIndexOf("l")); // 3

// 6. includes(searchValue): بررسی می‌کند رشته شامل searchValue هست یا نه (true/false)
console.log('includes "Hello":', sampleText.includes("Hello")); // true

// 7. startsWith(searchValue): بررسی می‌کند رشته با searchValue شروع شده یا نه
console.log('startsWith "He":', sampleText.startsWith("He")); // true

// 8. endsWith(searchValue): بررسی می‌کند رشته با searchValue تمام شده یا نه
console.log('endsWith "!":', sampleText.endsWith("!")); // true

// 9. slice(startIndex, endIndex): بخشی از رشته را برمی‌گرداند (endIndex اختیاری، تا قبل از آن)
console.log('slice(0,5):', sampleText.slice(0,5)); // "Hello"

// 10. substring(startIndex, endIndex): مشابه slice اما اندیس منفی را قبول نمی‌کند
console.log('substring(7,14):', sampleText.substring(7,14)); // "Asabeneh"

// 11. substr(startIndex, length): از startIndex به اندازه length را برمی‌گرداند (در حال منسوخ شدن)
console.log('substr(7,7):', sampleText.substr(7,7)); // "Asabene"

// 12. replace(searchValue, newValue): اولین مورد searchValue را با newValue جایگزین می‌کند
console.log('replace "Asabeneh" with "Friend":', sampleText.replace("Asabeneh", "Friend")); 
// "Hello, Friend!"

// 13. replaceAll(searchValue, newValue): همه موارد searchValue را با newValue جایگزین می‌کند (جدیدتر)
console.log('replaceAll "l" with "1":', sampleText.replaceAll("l", "1")); 
// "He11o, Asabeneh!"

// 14. trim(): حذف فاصله‌های اضافی ابتدا و انتهای رشته
const spaced = "   hello world   ";
console.log('trim:', `"${spaced.trim()}"`); // "hello world"

// 15. split(separator): تقسیم رشته به آرایه با جداکننده مشخص
console.log('split by ",":', sampleText.split(",")); // ["Hello", " Asabeneh!"]

// 16. charAt(index): کاراکتر در اندیس مشخص را برمی‌گرداند
console.log('charAt(1):', sampleText.charAt(1)); // "e"

// 17. charCodeAt(index): کد یونیکد کاراکتر در اندیس مشخص
console.log('charCodeAt(1):', sampleText.charCodeAt(1)); // 101

// 18. concat(...strings): اتصال چند رشته به هم
console.log('concat:', "Hello".concat(", ", "World", "!")); // "Hello, World!"

// 19. repeat(count): تکرار رشته count بار
console.log('repeat(3):', "ha".repeat(3)); // "hahaha"

// 20. localeCompare(compareString): مقایسه رشته‌ها برای ترتیب محلی (-1، 0، 1)
console.log('localeCompare "Asabeneh":', "Asabeneh".localeCompare("Asa")); // 1

// 21. toString(): تبدیل رشته به رشته (معمولاً نیاز نیست)
console.log('toString:', sampleText.toString()); // "Hello, Asabeneh!"

// 22. valueOf(): مقدار اولیه رشته را برمی‌گرداند (معمولاً نیاز نیست)
console.log('valueOf:', sampleText.valueOf()); // "Hello, Asabeneh!"

