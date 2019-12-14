# simple shell for web apps/sites

> **this is not a real shell** , it's just an environment to use in web apps/sites instead of using buttons

![how to use a terminal/shell in web sites/apps](https://github.com/ashkan-nasirzadeh/simpleShell/blob/master/README%20assets/shell-gif.gif?raw=true)

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

![how to use simpleShell with options](https://github.com/ashkan-nasirzadeh/simpleShell/blob/master/README%20assets/shell-gif2.gif?raw=true)

---

## version 1.2.0

now it's possible that some commands get arguments of your desired functions:

to use `prompt-type-commands` you should use set your command in `shell.js` like this:

`'command': ['function_name', 'prompt', ['1th_arg_promt', '2th_arg_prompt', ...]]`

for example :

**index.html**

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

```javascript
function bgChanger (backedArr) {
    let color = backedArr[0];
    let successMessage = backedArr[1];
    let failMessage = backedArr[2];
    try {
        document.getElementsByTagName('body')[0].style.backgroundColor = "";
        document.getElementsByTagName('body')[0].style.backgroundColor = color;
        let finalColor = document.getElementsByTagName('body')[0].style.backgroundColor;
        if (finalColor != '') {
            return successMessage;
        } else {
            return failMessage;
        }
    } catch (err) {
        if (err) return err;
    }
}
```

**shell.js**

```javascript
var shellObj = {
    'shell-container': '#shell-c',
    'background-color': 'black',
    'prompt-sign': '►',
    'prompt-sign-color': 'lime',
    'prompt-answer-color': 'yellow',
    'commands': {
        'hello': ['hi', []],
        'how are you': ['im fine thanks', ''],
        'help': ['commandHelp', ''],
        'cls': ['commandCls', ''],
        'clear': ['commandCls', ''],
        'change bg': ['bgChanger', 'prompt', ['color:', 'success message:', 'fail message:']]
    }
}
```

and this is output:

![how to set arguments for a simpleShell command](https://github.com/ashkan-nasirzadeh/simpleShell/blob/master/README%20assets/shell-gif3.gif?raw=true)

---

## version 1.3.0

now alias are available, use `alias -soft` if you just want to change the text of the command or use `alias -hard` if the command has some arguments and you want to also set the arguments:

![how to make alias in simpleShell](https://github.com/ashkan-nasirzadeh/simpleShell/blob/master/README%20assets/shell-gif4.gif?raw=true)