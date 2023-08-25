'use strict';

const languages = ['javascript', "java", "python", "swift"];
languages.forEach(items => {
    console.log(items);
})

console.log("***************************")
// store foreach results in a variable
// but it will not return anything
// const result = languages.forEach(items => {
//     console.log(items);
// },
// )


// filter: by filter you can extract some values from the array and it will return to a variable
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const values = numbers.filter((x) => x >= 5)
// note: const values = numbers.filter((x) => {return x >= 5})         curly braces inside arrow funtion the will have to manually write return keyword
console.log(values);

// filter results using foreach with if condition

console.log("***************************")
const newNums = [];
numbers.forEach((x) => {
    if (x >= 5) {
        newNums.push(x);
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
console.log(books);
console.log("***********Filtered Result ****************");
// books having history genre
const historyGenreBooks = books.filter((book) => {
    return book['genre'].toLowerCase() == 'history'
})
console.log(historyGenreBooks);


// books which published after 2000

const booksPubAfterTwoThousand = books.filter((book) => { return book['publish'] >= 2000 });
console.log(booksPubAfterTwoThousand);


