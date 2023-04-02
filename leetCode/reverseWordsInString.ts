function reverseWords(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
 };
 
 const sentence: string = "Let's take LeetCode contest"
 reverseWords(sentence)