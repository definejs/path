

const Path = require('./modules/Path');

console.log(`/a\\b/c\\d`, '-->', Path.normalize(`/a\\b/c\\d`))
console.log(`/a\\b/c\\d`, '-->', Path.normalizeDir(`/a\\b/c\\d`))

console.log('/a/b/c/', '-->', Path.dirname('/a/b/c/'));
console.log('/a/b/c\\', '-->', Path.dirname('/a/b/c\\'));
console.log('/a/b/c', '-->', Path.dirname('/a/b/c'));
console.log(Path.join('/a/b', 'c'));
console.log(Path.join('/a/b/', 'c'));
console.log(Path.join('/a/b/', '/c'));
console.log(Path.join('/a/b/', '/c/'));
console.log(Path.join('/a/b', '/c\\'));