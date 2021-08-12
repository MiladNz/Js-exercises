const input = 'Every developer likes to mix kubernetes and javascript';
const createNumeronym = (word) => word[0] + (word.length - 2) +  word[word.length - 1];
const result = input.split(' ').map(word => {
    if (word.length >= 4){
        return createNumeronym(word);
    }
    return word; // for words with length < 4
}).join(' ');
console.log(result);
