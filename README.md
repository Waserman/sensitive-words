# Usage

```shell
$ npm install sensitive-words --save
```

```javascript
const { sensitive } = require('sensitive-words');
//ES6 modules
import { sensitive } = from 'sensitive-words';

const filtered = sensitive('Hello World!', ['hello']);

console.log(filtered);
// *** World!
```