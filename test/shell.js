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
        'change bg --red': ['bgChanger', 'red'],
        'change bg --blue': ['bgChanger', 'blue']
    }
},
commandsHistory = [],
counter1;

function commandHelp() {
    var win = window.open('https://www.google.com', '_blank');
    win.focus();
    return 'we will redirect you to sjcm help page';
}
function commandCls() {
    $(shellObj['shell-container']).find('div').remove();
    return '';
}
function makeAShell(container) {
    $(container).css({
        // border: "1px solid red"
    });
    $(container).css('background-color', shellObj['background-color']);
    makeAPrompt(container);
    let dialog1 = $('<dialog id="myDialog">This is a dialog window</dialog>').appendTo(container);
}
function makeAPrompt (container) {
    let prompt_c = $('<div><b>'+shellObj['prompt-sign']+'</b><pre> </pre></div>').appendTo(container);
    $(prompt_c).css({
        position: 'relative',
        border: '1px solid black',
        width: '100%',
        height: '30px',
        boxSizing: 'border-box',
        paddingLeft: '5px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: shellObj['prompt-sign-color'],
        whiteSpace: 'nowrap'
    });
    let prompt_command = $('<div contenteditable="true" class="prompt-command-class"></div>').appendTo(prompt_c);
    $(prompt_command).css({
        position: 'relative',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        lineHeight: '180%',
        fontWeight: '100',
        color: 'white',
        fontFamily: "Courier",
        fontSize: "0.9rem",
        outline: 'none'
    });
    $(prompt_command).focus();
    $(prompt_command).keypress(function (event) {
        let command = $(this).html();
        if (event.keyCode == 13) {
            event.preventDefault();
            commandsHistory.push(command);
            counter1 = commandsHistory.length;
            counter2 = 0;
            makeAnAnswer(command, container);
        }
    });
    $(prompt_command).keydown(function (event) {
        if (event.keyCode == 38) {
            event.preventDefault();
            counter1 = counter1 >= 1 ? counter1 -= 1 : counter1 = commandsHistory.length - 1;
            $(this).html(commandsHistory[counter1]);
        } else if (event.keyCode == 40){
            event.preventDefault();
            counter1 = counter1 < commandsHistory.length - 1 ? counter1 += 1 : counter1 = 0;
            $(this).html(commandsHistory[counter1]);
        }
    });
}
function makeAnAnswer(command, container) {
    $('.prompt-command-class').attr('contenteditable', 'false');
    let commandsObj = shellObj['commands'];
    try {
        let jsonVal = commandsObj[command][0];
        let ifArg = commandsObj[command][1];
        showAnswer(eval(jsonVal)(ifArg), container);
        return;
    } catch (e) {
        try {
            let jsonVal = commandsObj[command][0];
            let ifArg = commandsObj[command][1];
            for (let key in commandsObj){
                if(commandsObj.hasOwnProperty(key)){
                    if (command == key) {
                        showAnswer(jsonVal, container);
                        return;
                    }
                }
            }
        } catch (e) {
            showAnswer('this command doesn\'t exists', container);
        }
    }
}
function showAnswer(answer, container) {
    if (answer == '') {
        makeAPrompt(shellObj['shell-container']);
        return;
    }
    let answer_c = $('<div>'+answer+'</div>').appendTo(container);
    $(answer_c).css({
        position: 'relative',
        border: '1px solid black',
        width: '100%',
        height: '30px',
        boxSizing: 'border-box',
        paddingLeft: '3px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '100',
        color: shellObj['prompt-answer-color']
    });
    makeAPrompt(shellObj['shell-container']);
}
makeAShell(shellObj['shell-container']);
