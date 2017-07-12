var femeleName = ['Asia', 'Kasia', 'Danuta', 'Natalia'];
var maleName = ['Andrzej', 'Stasiek', 'Tomek', 'Bartek'];
var allName = femeleName.concat(maleName);
var newName = "Maciek";

if ( allName.indexOf(newName) === -1 ) {
    allName.push(newName);
}

console.log(allName);