# simple shell for web apps/sites

> **this is not a real shell** , it's just an environment to use in web apps/sites instead of using buttons

![](https://github.com/ashkan-nasirzadeh/simpleShell/tree/master/README assets/shell-gif.gif)

---

### usage:

**index.html**

1- make a container for your shell (with `shell-c` id)

2- copy `shell.js` file to your project and add it to your html file

- don't forget jQuery
- don't forget your custom `.js` (blob.js) before `shell.js`
- don't forget `  <meta charset="UTF-8">  ` , otherwise shell chars looks weird! 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <title>simple shell for web</title>
</head>
<body>
     <div id="shell-c" style="width:500px;height:90vh;overflow-y: scroll;"></div>
     <script type="text/javascript" src="blob.js"></script>
     <script type="text/javascript" src='shell.js'></script>
</body>
</html>
```

**blob.js**

1- make your commands:

- the returned value is the message that will be shown for the user

```javascript
function bgChanger (color) {
    try {
        $('body').css('background-color', color);
        return 'we changed your background successfully';
    } catch (err) {
        if (err) return err;
    }
}
```

**shell.js**

1- just change `shellObj[command]`:

```javascript
var shellObj = {
    'shell-container': '#shell-c',
    'background-color': 'black',
    'prompt-sign': '►',
    'prompt-sign-color': 'lime',
    'prompt-answer-color': 'yellow',
    'commands': {
        'hello': ['hi', []], // ['string', '']
        'how are you': ['im fine thanks', ''],
        'help': ['commandHelp', ''],
        'cls': ['commandCls', ''],
        'clear': ['commandCls', ''],
        'change bg --red': ['bgChanger', 'red'],
        'change bg --blue': ['bgChanger', 'blue'] // ['funcName', 'Arg']
    }
}
```

*AND IT'S DONE :*

![shell-gif2](README assets\shell-gif2.gif)
