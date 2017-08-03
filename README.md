# clock-directive

Directive which displays a simple clock as the one on top momentjs [website](https://momentjs.com/)

### Required

You need to have these two libs in your app

   * [momentjs](https://momentjs.com/)
   * [momentjs-timezone](https://momentjs.com/timezone/)
   
### Examples

You need to provide the attribute zone name. 
To find them see this page https://momentjs.com/timezone/

```html
<clock-tz zone="America/New_York"></clock-tz>
```

You can change color of the clock too, by adding color attribute, as these two examples

```html
<clock-tz zone="America/New_York" color="#ff0000"></clock-tz>
```

or


```html
<clock-tz zone="America/New_York" color="rgb(255, 0, 0)"></clock-tz>
```
