module.exports = function check(x, conf) {
  // your solution
  let count =  conf.map(item => {
    let [c1, c2] = item;
    if(c1 == c2) {
        return x.split('').filter(i => i == c1).length ;
    } else {
        return item.reduce((acc, curr) => { 
        acc += x.split('').filter(char => char == curr).length;
        return acc;
    }, 0);

    }
    });

if(count%2) return false;

let pattern = conf.reduce((acc, curr, i) => {
    let [a, b] = curr;
    acc +=  (Number(a)) ? `${a}${b}|` : `\\${a}\\${b}|`;
    return acc;
}, ``).slice(0,-1);

let regex = new RegExp(pattern, 'g');
let c = count.reduce((a, c) => a+c)/2;

for(let i = 0; i < c; i++) {
    x = x.replace(regex, '');
    if(x.length == 0) {
        return true;
    } else {
        continue;
    }
}

return false;
}
