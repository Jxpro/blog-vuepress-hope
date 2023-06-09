import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as t}from"./app-5e6e2e94.js";const s={},d=t(`<h1 id="python程序打包成-exe" tabindex="-1"><a class="header-anchor" href="#python程序打包成-exe" aria-hidden="true">#</a> Python程序打包成.exe</h1><blockquote><p>为了让脚本在他人机器上顺利执行，你首先要帮他安装python解释器，如果你import了一些库比如pandas，那这个也需要安装，甚至相关的依赖也需要安装。这个时间成本显然是很大的，这部分工作也很枯燥，甚至会影响工作积极性，因此花一点时间，学会如何将python脚本打包为.exe文件，无需再安装各种开发环境和依赖库，是一件一劳永逸的事情。</p><p>现在，主流的工具有Pyinstaller、cz_Freeze、py2exe，本文只介绍Pyinstaller的使用。</p></blockquote><h2 id="一、安装pyinstaller" tabindex="-1"><a class="header-anchor" href="#一、安装pyinstaller" aria-hidden="true">#</a> 一、安装pyinstaller</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pyinstaller

$ pyinstaller <span class="token parameter variable">--version</span>
<span class="token number">4.6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、pyinstaller打包机制" tabindex="-1"><a class="header-anchor" href="#二、pyinstaller打包机制" aria-hidden="true">#</a> 二、pyinstaller打包机制</h2><p>我们写的python脚本是不能脱离python解释器单独运行的，所以在打包的时候，至少会将python解释器和脚本一起打包，同样，为了打包的exe能正常运行，会把我们所有安装的第三方包一并打包到exe。</p><p>即使我们的项目只使用的一个requests包，但是可能我们还安装了其他n个包，但是他不管，因为包和包只有依赖关系的。比如我们只装了一个requests包，但是requests包会顺带装了一些其他依赖的小包，所以为了安全，只能将所有第三方包+python解释器一起打包。</p><h2 id="三、pyinstaller打包exe" tabindex="-1"><a class="header-anchor" href="#三、pyinstaller打包exe" aria-hidden="true">#</a> 三、pyinstaller打包exe</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 打包exe</span>
Pyinstaller <span class="token parameter variable">-F</span> app.py

<span class="token comment"># 取消控制台输出</span>
Pyinstaller <span class="token parameter variable">-F</span> <span class="token parameter variable">-w</span> app.py

<span class="token comment"># 指定模块目录</span>
pyinstaller <span class="token parameter variable">-F</span> <span class="token parameter variable">-p</span> DIR app.py

<span class="token comment"># 指定exe图标打包</span>
Pyinstaller <span class="token parameter variable">-F</span> <span class="token parameter variable">-i</span> xx.ico app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面命令，将看到详细的生成过程。当生成完成后，将会在此 app 目录下看到多了一个 dist 目录，并在该目录下看到有一个 app.exe 文件，这就是使用 PyInstaller 工具生成的 EXE 程序。</p><h2 id="四、其他常用命令" tabindex="-1"><a class="header-anchor" href="#四、其他常用命令" aria-hidden="true">#</a> 四、其他常用命令</h2><table><thead><tr><th>-h</th><th>查看该模块的帮助信息</th></tr></thead><tbody><tr><td>-F</td><td>产生单个的可执行文件，覆盖打包</td></tr><tr><td>-D</td><td>产生一个目录（包含多个文件）作为可执行程序</td></tr><tr><td>-i</td><td>表示可执行文件的图标</td></tr><tr><td>-a</td><td>不包含 Unicode 字符集支持</td></tr><tr><td>-d</td><td>产生 debug 版本的可执行文件</td></tr><tr><td>-w</td><td>指定程序运行时不显示命令行窗口（仅对 Windows 有效）</td></tr><tr><td>-c</td><td>指定使用命令行窗口运行程序（仅对 Windows 有效）（默认）</td></tr><tr><td>-o</td><td>指定 spec 文件的生成目录。如果没有指定，则默认使用当前目录来生成 spec 文件</td></tr><tr><td>-p</td><td>设置 Python 导入模块的路径，可使用路径分隔符（Windows 使用分号，Linux 使用冒号）来分隔多个路径</td></tr><tr><td>-n</td><td>指定项目（产生的 spec）名字，如果省略该选项，那么第一个脚本的主文件名将作为 spec 的名字</td></tr></tbody></table><h2 id="五、问题" tabindex="-1"><a class="header-anchor" href="#五、问题" aria-hidden="true">#</a> 五、问题</h2><p>问题描述：python打包exe后<strong>缺少模块</strong>，报错<code>ModuleNotFoundError</code></p><p>解决办法：</p><ol><li>Pyinstaller会从本地的环境路径下找需要的模块，例如python的包都放在site-packages目录下，因此，Pyinstalled可以直接从该目录下获取需要的模块。如果本地也缺少该模块，先通过pip命令安装。例如：<code>pip install requests</code></li><li>如果你需要的模块不在site-packages，而在你指定的目录下，那打包时你可以通过-p DIR参数指定，其中DIR为你需要的模块路径：<code>pyinstaller -F -w -p DIR app.py</code></li><li>有时候并不是找不到模块，而是代码中有些模块是隐含导入的，这样的话就需要指出这些模块，才能正确的打包，可以在命令行打包时使用参数<code>--hidden-import MODULENAME</code>指定模块名，或者可以在打包后生成的<code>app.spec</code>文件中修改，该文件中有个参数<code>hiddenimports=[]</code>，配置为：<code>hiddenimports=[&#39;cython&#39;,&#39;sklearn&#39;,&#39;sklearn.ensemble&#39;,...]</code>，然后再运行以下命令 <code>pyinstaller app.spec</code></li></ol>`,16),r=[d];function i(l,p){return a(),n("div",null,r)}const h=e(s,[["render",i],["__file","pyinstaller.html.vue"]]);export{h as default};
