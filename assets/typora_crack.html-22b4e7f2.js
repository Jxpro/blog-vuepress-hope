import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c,a,b as n,d as e,e as p}from"./app-5e6e2e94.js";const i={},l=a("h1",{id:"破解-typora-验证",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#破解-typora-验证","aria-hidden":"true"},"#"),n(" 破解 Typora 验证")],-1),d={href:"https://github.com/Mas0nShi/typoraCracker/blob/master/README_CN.md",target:"_blank",rel:"noopener noreferrer"},u=a("strong",null,"Github",-1),m=a("p",null,[n("测试版本："),a("strong",null,"Typora v 1.0.3")],-1),k=a("h2",{id:"一、下载工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#一、下载工具","aria-hidden":"true"},"#"),n(" 一、下载工具")],-1),b={href:"https://github.com/Mas0nShi/typoraCracker.git",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/Jxpro/MD-Repo/raw/main/typoraCracker-master.zip",target:"_blank",rel:"noopener noreferrer"},_=p(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> python typora.py <span class="token parameter variable">--help</span>
usage: typora.py <span class="token punctuation">[</span>-h<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u<span class="token punctuation">]</span> <span class="token punctuation">[</span>-f<span class="token punctuation">]</span> asarPath dirPath

<span class="token punctuation">[</span>extract and decryption / pack and encryption<span class="token punctuation">]</span> app.asar <span class="token function">file</span> from <span class="token punctuation">[</span>Typora<span class="token punctuation">]</span>.

positional arguments:
  asarPath    app.asar <span class="token function">file</span> path/dir <span class="token punctuation">[</span>input/ouput<span class="token punctuation">]</span>
  dirPath     as tmp and out directory.

optional arguments:
  -h, <span class="token parameter variable">--help</span>  show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
  <span class="token parameter variable">-u</span>          pack <span class="token operator">&amp;</span> encryption <span class="token punctuation">(</span>default: extract <span class="token operator">&amp;</span> decryption<span class="token punctuation">)</span>
  <span class="token parameter variable">-f</span>          enabled prettify/compress <span class="token punctuation">(</span>default: disabled<span class="token punctuation">)</span>

If you have any questions, please contact <span class="token punctuation">[</span> MasonShi@88.com <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、破解" tabindex="-1"><a class="header-anchor" href="#二、破解" aria-hidden="true">#</a> 二、破解</h2><p><strong>解压并解密</strong><code>app.asar</code>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token punctuation">{</span>installRoot<span class="token punctuation">}</span>/Typora/resources/app.asar workstation/outfile/
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将<code>workstation/outfile/dec_app/License.js</code><strong>替换</strong>为<code>example/patch/License.js</code></p><p>重新<strong>加密并打包</strong>文件：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token parameter variable">-u</span> workstation/outfile/dec_app workstation/outappasar
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>生成合格的<strong>许可证</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">node</span> example/keygen.js
LMCHMW-4DGF5Z-T4PP4Z-S6343H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>workstation/outappasar/app.asar</code><strong>替换</strong><code>{installRoot}/Typora/resources/app.asar</code></p><p>然后启动<code>Typora</code>输入密钥即可</p><h2 id="三、注意的坑" tabindex="-1"><a class="header-anchor" href="#三、注意的坑" aria-hidden="true">#</a> 三、注意的坑</h2><h3 id="_3-1-路径最好加引号" tabindex="-1"><a class="header-anchor" href="#_3-1-路径最好加引号" aria-hidden="true">#</a> 3.1 路径最好加引号</h3><p>错误命令：<code>python typora.py C:/Program Files/Typora/resources/app.asar workstation/outfile/</code></p>`,14),h={href:"http://typora.py",target:"_blank",rel:"noopener noreferrer"},y=p(`<p>因为<code>C:/Program Files/</code>路径中含有空格，所以需要加上引号：</p><p><code>python typora.py &quot;C:/Program Files/Typora/resources/app.asar&quot; &quot;workstation/outfile/&quot;</code></p><h3 id="_3-2-需手动创建文件夹" tabindex="-1"><a class="header-anchor" href="#_3-2-需手动创建文件夹" aria-hidden="true">#</a> 3.2 需手动创建文件夹</h3><p>执行下面命令时：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token parameter variable">-u</span> workstation/outfile/dec_app workstation/outappasar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>报错：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2021</span>-12-04 <span class="token number">14</span>:35:46.711 <span class="token operator">|</span> ERROR    <span class="token operator">|</span> __main__:packWenc:103 - plz input Directory <span class="token keyword">for</span> app.asar
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>:
  File <span class="token string">&quot;typora.py&quot;</span>, line <span class="token number">151</span>, <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
  File <span class="token string">&quot;typora.py&quot;</span>, line <span class="token number">146</span>, <span class="token keyword">in</span> main
    args.mode<span class="token punctuation">(</span>args.asarPath, args.dirPath, args.format<span class="token punctuation">)</span>
  File <span class="token string">&quot;typora.py&quot;</span>, line <span class="token number">104</span>, <span class="token keyword">in</span> packWenc
    raise NotADirectoryError
NotADirectoryError
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：<code>workstation/outappasar</code><strong>目录未创建</strong>，需要指定一个已创建的目录或创建指定目录</p><h3 id="_3-3-app-asar的位置" tabindex="-1"><a class="header-anchor" href="#_3-3-app-asar的位置" aria-hidden="true">#</a> 3.3 app.asar的位置</h3><p>执行下面命令时：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token punctuation">{</span>installRoot<span class="token punctuation">}</span>/Typora/resources/app.asar workstation/outfile/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>后面的<code>workstation/outfile/</code>可自行指定。但是<code>app.asar</code>文件<strong>必须位于</strong><code>{installRoot}/Typora/resources/app.asar</code>下，不然解压后的文件会缺少<code>main.node</code>文件，导致打包后<code>Typora</code>启动报错！！！</p><p>指定安装目录下的app.asar输出如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token string">&quot;C:/Program Files/Typora/resources/app.asar&quot;</span> <span class="token string">&quot;workstation/outfile/&quot;</span>
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.030 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:56 - extract asar file: C:/Program Files/Typora/resources/app.asar
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.093 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:59 - extract ended.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.108 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:61 - <span class="token builtin class-name">read</span> Directory: workstation/outfile/tmp_app
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.124 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:66 - <span class="token builtin class-name">set</span> Directory: workstation/outfile<span class="token punctuation">\\</span>dec_app
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.530 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: FilesOp.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.546 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: FilesOp.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.640 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: License.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.655 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: License.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.780 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: main.node
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.795 <span class="token operator">|</span> DEBUG    <span class="token operator">|</span> __main__:extractWdec:78 - skip file: main.node
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.812 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: main.node
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.936 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: menu.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:22.952 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: menu.js
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:23.327 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:main:147 - Done<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定当前目录下的app.asar文件输出如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ python typora.py <span class="token string">&quot;./app.asar&quot;</span> <span class="token string">&quot;workstation/outfile/local&quot;</span>
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.323 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:56 - extract asar file: ./app.asar
Couldn&#39;t copy <span class="token function">file</span> .<span class="token punctuation">\\</span>main.node, no extracted directory
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.369 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:59 - extract ended.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.400 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:61 - <span class="token builtin class-name">read</span> Directory: workstation/outfile/local<span class="token punctuation">\\</span>tmp_app
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.416 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:66 - <span class="token builtin class-name">set</span> Directory: workstation/outfile/local<span class="token punctuation">\\</span>dec_app
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.963 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: FilesOp.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:36.978 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: FilesOp.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:37.088 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: License.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:37.104 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: License.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:37.197 <span class="token operator">|</span> INFO     <span class="token operator">|</span> __main__:extractWdec:73 - <span class="token function">open</span> file: menu.js
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:37.213 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:extractWdec:81 - decrypt and save file: menu.js
<span class="token punctuation">..</span>.
<span class="token number">2021</span>-12-04 <span class="token number">14</span>:37:37.635 <span class="token operator">|</span> SUCCESS  <span class="token operator">|</span> __main__:main:147 - Done<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在第三行其实已经指明了错误：<strong>Couldn&#39;t copy file .\\main.node, no extracted directory</strong></p></blockquote>`,17);function g(f,x){const s=o("ExternalLinkIcon");return r(),c("div",null,[l,a("p",null,[n("参考教程："),a("a",d,[u,e(s)])]),m,k,a("p",null,[n("破解工具："),a("a",b,[n("typora Cracker"),e(s)]),n(" | "),a("a",v,[n("备用地址"),e(s)])]),_,a("p",null,[n("错误提示："),a("strong",null,[a("a",h,[n("typora.py"),e(s)]),n(": error: unrecognized arguments: workstation/outfile/")])]),y])}const F=t(i,[["render",g],["__file","typora_crack.html.vue"]]);export{F as default};
