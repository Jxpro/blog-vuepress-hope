const e=JSON.parse(`{"key":"v-6db124b0","path":"/System/Linux/command.html","title":"Linux 中的常用指令","lang":"zh-CN","frontmatter":{"title":"Linux 中的常用指令","shortTitle":"常用指令","description":"本文介绍了 tar & gzip、systemctl、su 和 sudo、sed 命令。","category":["Linux"],"tag":["System","Linux"],"date":"2021-10-29T00:00:00.000Z","order":2,"head":[["meta",{"property":"og:url","content":"https://blog.xin127.me/System/Linux/command.html"}],["meta",{"property":"og:site_name","content":"Joker Xin's Blog"}],["meta",{"property":"og:title","content":"Linux 中的常用指令"}],["meta",{"property":"og:description","content":"本文介绍了 tar & gzip、systemctl、su 和 sudo、sed 命令。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Joker Xin"}],["meta",{"property":"article:tag","content":"System"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2021-10-29T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 中的常用指令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-29T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Joker Xin\\",\\"url\\":\\"https://blog.xin127.me\\"}]}"]]},"headers":[{"level":2,"title":"一、tar & gzip","slug":"一、tar-gzip","link":"#一、tar-gzip","children":[]},{"level":2,"title":"二、systemctl","slug":"二、systemctl","link":"#二、systemctl","children":[]},{"level":2,"title":"三、su 和 sudo","slug":"三、su-和-sudo","link":"#三、su-和-sudo","children":[]},{"level":2,"title":"四、sed命令","slug":"四、sed命令","link":"#四、sed命令","children":[{"level":3,"title":"sed命令格式","slug":"sed命令格式","link":"#sed命令格式","children":[]},{"level":3,"title":"sed替换标记","slug":"sed替换标记","link":"#sed替换标记","children":[]},{"level":3,"title":"sed元字符集","slug":"sed元字符集","link":"#sed元字符集","children":[]},{"level":3,"title":"sed用法实例","slug":"sed用法实例","link":"#sed用法实例","children":[]}]}],"readingTime":{"minutes":7.4,"words":2219},"filePathRelative":"System/Linux/command.md","localizedDate":"2021年10月29日","excerpt":"<h1> Linux常用指令</h1>\\n<h2> 一、tar &amp; gzip</h2>\\n<ol>\\n<li>\\n<p>基础概念</p>\\n<ul>\\n<li><strong>打包</strong>：将一堆文件或目录什么的变成一个总的文件。</li>\\n<li><strong>压缩</strong>：将一个大的文件经过某种压缩算法变成一个小文件。</li>\\n</ul>\\n</li>\\n<li>\\n<p><code>tar</code>命令</p>\\n<p>单独使用（<code>man tar</code>可以查看 ）</p>\\n<p>常用参数 ：</p>\\n<ul>\\n<li><strong>-c 打包</strong></li>\\n<li><strong>-x 解包</strong></li>\\n<li><strong>-f 指定包的文件名，用在最后一个参数</strong></li>\\n<li>-v 详细显示处理的文件</li>\\n<li>-r 像压缩归档文件末尾追加文件</li>\\n<li>-u 更新原压缩包中的文件，仅将较新的文件附加到存档中</li>\\n<li>-t 列出存档中文件的目录</li>\\n</ul>\\n</li>\\n<li>\\n<p>为了方便用户在打包解包的同时压缩或解压文件，tar命令提供了一种特殊的功能，就是可以在打包解包的同时调用其他的压缩程序，比如：gzip，bzip2等。</p>\\n<ol>\\n<li>\\n<p>tar 调用 gzip：</p>\\n<p>gzip是GNU组织开发的一个压缩程序</p>\\n<p>.gz结尾的文件就是gzip压缩的结果，与gzip相对的解压程序是gunzip。</p>\\n<p><strong>-z 参数令 tar 使用来调用 gzip</strong></p>\\n</li>\\n<li>\\n<p>tar 调用 bzip2</p>\\n<p>bzip2是一个压缩能力更强的压缩程序</p>\\n<p>.bz2结尾的文件就是bzip2压缩的结果。与bzip2相对的解压程序是bunzip2。</p>\\n<p>tar中使用-j这个参数来调用gzip。</p>\\n</li>\\n</ol>\\n</li>\\n<li>\\n<p><code>gzip</code>命令</p>\\n<p>缺省情况下， gzip 将原始文件名和时间信息保存在压缩后的文件中。</p>\\n<p>gunzip 的功能 与 gzip -d 功能一样。gunzip 将命令行中以.gz, -gz, .z, -z, _z 或 .Z结尾并具有正确标志头的文件解压缩，并以去掉扩展名的解压缩文件替换原文件。</p>\\n<p>gunzip 也能识别扩展名为 .tgz 和 .taz 的文件，并将其分别当作 .tar.gz 和  .tar.Z  的缩写。</p>\\n<p>gunzip 目前能够解压由 gzip, zip, compress, compress -H 以及 pack产生的文件。</p>\\n<p>对输入格式的检测是自动的。</p>\\n<p><strong>常用参数：</strong></p>\\n<ul>\\n<li>-c  将结果写到标准输出，原文件保持不变</li>\\n<li>-d 解压缩</li>\\n<li>-r 递归式地查找指定目录并压缩其中的所有文件或者是解压缩</li>\\n<li>-t 测试，检查压缩文件是否完整</li>\\n<li>-v 对每一个压缩和解压的文件，显示文件名和压缩比</li>\\n<li>-l 列出每个压缩文件的如下项目：\\n<ul>\\n<li>compressed size：压缩文件的长度</li>\\n<li>uncompressed size：压缩前文件的长度</li>\\n<li>ratio：压缩率（如果未知则为0.0%）</li>\\n<li>uncompressed_name：压缩前的文件名\\nTips：对于非gzip 格式的文件，压缩前文件长度显示为 -1，例如由compress压缩的 .Z文件。</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ol>"}`);export{e as data};