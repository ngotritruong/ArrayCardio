console.log('hello world');

const inventor=[
    { first:'Albert' , last: 'Einstein', year: 1879, passed: 1955},
    { first:'Asaac' , last: 'Newton', year: 1645, passed: 1727},
    { first:'Galileo' , last: 'Galileo', year: 1564, passed: 1642},
    { first:'Marie' , last: 'Curie', year: 1876, passed: 1934},
    { first:'Johannes' , last: 'kepler', year: 1571, passed: 1630},
    { first:'Nicolaus' , last: 'Copernicus', year: 1473, passed: 1543},
    { first:'Max' , last: 'Planck', year: 1858, passed: 1947},
];

const people  = ['beck, Clenn','beck, Clenn', 'Becker, Carl', 'beckett, samuel', 'beddoes, Mick', 'beecher, Henry','beecher, Henry','beecher, Henry','beecher, Henry','beecher, Henry'];

//array.prototype.filter()
//1. filter the list ofinventor for those who were born in the 1500 
const fifteen = inventor.filter(inventor => inventor.year >=1500 && inventor.year < 1600 )
console.table(fifteen);

//array.prototype.map()

const fullnams = inventor.map(inventor=>`${inventor.first} ${inventor.last}`)
console.log(fullnams.join(' ')); 


//array.prototype.sort()
const ordered = inventor.sort((a,b)=>a.year>b.year?1:-1);

console.table(ordered);
//array.prototype.forEach()
const yearordered = ordered.forEach(year => console.table(year.passed-year.year) )


//array.prototype.reduce()

const totalYears = inventor.reduce((total, inventor)=>{
    return total + (inventor.passed - inventor.year);
},0)
console.log(totalYears);
//array.prototype.filter()

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links.map(link => link.textContent);
// de;

//array.prototype.filter()
const alpha = people.sort(function(lastone, nextone){
    const [last, first] = lastone.split(', ');
    const [alast, afirst]=nextone.split(', ');
    return first > afirst ?1:-1;
});
console.log(alpha);


//array.prototype.ruduce()

const data = ['car','car','track','track','bike','wack','car','van','bike','wake','dibo'];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item]=0;
    }
   
    return obj;
},{});
console.log(transportation);
 

//:)