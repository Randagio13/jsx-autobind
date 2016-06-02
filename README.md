# jsx-autobind
Easy autobind function for jsx template

```js
autobind(fn, ...params)
```

## Usage in React Component
```js
import autobind from 'jsx-autobind'

class Home extends Component {
  test(param) {
    console.log(param);
  }
  render() {
    const param = 'Hello'
    return <div>{autobind(this.test, param)}</div>
  }
}
```
