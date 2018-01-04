# myrest
my rest api tool inspired by [koa-decorators](https://github.com/DavidCai1993/koa-decorators)

## Usage

```javascript
class ExampleAPI {
  @get('/:id')
  @input(c.Obj({
    id: t.Num,
  }));
  @output(c.Arr(t.Num));
  async api1(ctx, data) {
    console.log(data);
  }
}
```

```sh
myrest path/to/controllers path/to/docs
```
