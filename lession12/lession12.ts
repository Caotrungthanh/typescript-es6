let displayColorSpear = (...colors: string[]) => {
    for(let i in colors) {
        console.log(colors[i]);
    }
    // console.log(colors);
}

let colors = ['Red', 'Green', 'Blue'];

displayColorSpear(...colors);