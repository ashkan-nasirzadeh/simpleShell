<div id="write" class="is-node">

# <a name="simple-shell-for-websites" class="md-header-anchor"></a><span>simple shell for websites</span>

> **<span>this is not a real shell</span>** <span>, it's just an environment to use in web apps/sites instead of using buttons</span>

![shell-gif](C:\Users\ashkan nasirzadeh\Desktop\shell-gif.gif)

* * *

### <a name="usage" class="md-header-anchor"></a><span>usage:</span>

**<span>index.html</span>**

<span>1- make a container for your shell (with</span> `shell-c` <span>id)</span>

<span>2- copy</span> `shell.js` <span>file to your project and add it to your html file</span>

*   <span>don't forget jQuery</span>
*   <span>don't forget your custom</span> `.js` <span>(blob.js) before</span> `shell.js`
*   <span>don't forget</span> `<meta charset="UTF-8">` <span>, otherwise shell chars looks weird!</span>

<pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="html">

<div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="html">

<div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div>

<div class="CodeMirror-scroll" tabindex="-1">

<div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;">

<div style="position: relative; top: 0px;">

<div class="CodeMirror-lines" role="presentation">

<div role="presentation" style="position: relative; outline: none;">

<div class="CodeMirror-code" role="presentation" style="">

<div class="CodeMirror-activeline" style="position: relative;">

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-meta"><!DOCTYPE html></span></span></pre>

</div>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">html</span> <span class="cm-attribute">lang</span>=<span class="cm-string">"en"</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">meta</span> <span class="cm-attribute">charset</span>=<span class="cm-string">"UTF-8"</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">script</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"</span><span class="cm-tag cm-bracket">></</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">></span>simple shell for web<span class="cm-tag cm-bracket"></</span><span class="cm-tag">title</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"></</span><span class="cm-tag">head</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"shell-c"</span> <span class="cm-attribute">style</span>=<span class="cm-string">"width:500px;height:90vh;overflow-y: scroll;"</span><span class="cm-tag cm-bracket">></</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">script</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text/javascript"</span> <span class="cm-attribute">src</span>=<span class="cm-string">"blob.js"</span><span class="cm-tag cm-bracket">></</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"><</span><span class="cm-tag">script</span> <span class="cm-attribute">type</span>=<span class="cm-string">"text/javascript"</span> <span class="cm-attribute">src</span>=<span class="cm-string">'shell.js'</span><span class="cm-tag cm-bracket">></</span><span class="cm-tag">script</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"></</span><span class="cm-tag">body</span><span class="cm-tag cm-bracket">></span></span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-tag cm-bracket"></</span><span class="cm-tag">html</span><span class="cm-tag cm-bracket">></span></span></pre>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</pre>

**<span>blob.js</span>**

<span>1- make your commands:</span>

*   <span>the returned value is the message that will be shown for the user</span>

<pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="javascript">

<div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript">

<div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div>

<div class="CodeMirror-scroll" tabindex="-1">

<div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;">

<div style="position: relative; top: 0px;">

<div class="CodeMirror-lines" role="presentation">

<div role="presentation" style="position: relative; outline: none;">

<div class="CodeMirror-measure">

<pre><span>xxxxxxxxxx</span></pre>

</div>

<div class="CodeMirror-code" role="presentation" style="">

<div class="CodeMirror-activeline" style="position: relative;">

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">bgChanger</span> (<span class="cm-def">color</span>) {</span></pre>

</div>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">try</span> {</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-variable">$</span>(<span class="cm-string">'body'</span>).<span class="cm-property">css</span>(<span class="cm-string">'background-color'</span>, <span class="cm-variable-2">color</span>);</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">return</span> <span class="cm-string">'we changed your background successfully'</span>;</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;">} <span class="cm-keyword">catch</span> (<span class="cm-def">err</span>) {</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">if</span> (<span class="cm-variable-2">err</span>) <span class="cm-keyword">return</span> <span class="cm-variable-2">err</span>;</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;">}</span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</pre>

**<span>shell.js</span>**

<span>1- just change</span> `shellObj[command]`<span>:</span>

<pre spellcheck="false" class="md-fences md-end-block ty-contain-cm modeLoaded" lang="javascript" style="break-inside: unset;">

<div class="CodeMirror cm-s-inner CodeMirror-wrap" lang="javascript">

<div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 0px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div>

<div class="CodeMirror-scroll" tabindex="-1">

<div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;">

<div style="position: relative; top: 0px;">

<div class="CodeMirror-lines" role="presentation">

<div role="presentation" style="position: relative; outline: none;">

<div class="CodeMirror-measure">

<pre><span>xxxxxxxxxx</span></pre>

</div>

<div class="CodeMirror-code" role="presentation" style="">

<div class="CodeMirror-activeline" style="position: relative;">

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">shellObj</span> <span class="cm-operator">=</span> {</span></pre>

</div>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'shell-container'</span>: <span class="cm-string">'#shell-c'</span>,</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'background-color'</span>: <span class="cm-string">'black'</span>,</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'prompt-sign'</span>: <span class="cm-string">'►'</span>,</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'prompt-sign-color'</span>: <span class="cm-string">'lime'</span>,</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'prompt-answer-color'</span>: <span class="cm-string">'yellow'</span>,</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'commands'</span>: {</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'hello'</span>: [<span class="cm-string">'hi'</span>, []], <span class="cm-comment">// ['string', '']</span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'how are you'</span>: [<span class="cm-string">'im fine thanks'</span>, <span class="cm-string">''</span>],</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'help'</span>: [<span class="cm-string">'commandHelp'</span>, <span class="cm-string">''</span>],</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'cls'</span>: [<span class="cm-string">'commandCls'</span>, <span class="cm-string">''</span>],</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'clear'</span>: [<span class="cm-string">'commandCls'</span>, <span class="cm-string">''</span>],</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'change bg --red'</span>: [<span class="cm-string">'bgChanger'</span>, <span class="cm-string">'red'</span>],</span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;"><span class="cm-string cm-property">'change bg --blue'</span>: [<span class="cm-string">'bgChanger'</span>, <span class="cm-string">'blue'</span>] <span class="cm-comment">// ['funcName', 'Arg']</span></span></pre>

<pre class=" CodeMirror-line " role="presentation"> <span role="presentation" style="padding-right: 0.1px;">}</span></pre>

<pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">}</span></pre>

</div>

</div>

</div>

</div>

</div>

</div>

</div>

</pre>

_<span>AND IT'S DONE :</span>_

![shell-gif2](C:\Users\ashkan nasirzadeh\Desktop\shell-gif2.gif)

</div>
