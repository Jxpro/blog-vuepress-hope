const t=JSON.parse(`{"key":"v-e025a77c","path":"/System/Linux/SMBus_controller.html","title":"VMware 下安装 Ubuntu 报 SMBus 错误","lang":"zh-CN","frontmatter":{"title":"VMware 下安装 Ubuntu 报 SMBus 错误","shortTitle":"SMBus 错误","description":"当在 VMware 上安装 Ubuntu 时，可能会出现 SMBus 错误，如 i2c_piix4 Host SMBus controller not enabled。报错的根源在于 i2c_piix4，可以通过禁用 i2c_piix4 解决此问题。","category":["Linux"],"tag":["System","Linux"],"date":"2022-02-13T00:00:00.000Z","order":7,"head":[["meta",{"property":"og:url","content":"https://blog.xin127.me/System/Linux/SMBus_controller.html"}],["meta",{"property":"og:site_name","content":"Joker Xin's Blog"}],["meta",{"property":"og:title","content":"VMware 下安装 Ubuntu 报 SMBus 错误"}],["meta",{"property":"og:description","content":"当在 VMware 上安装 Ubuntu 时，可能会出现 SMBus 错误，如 i2c_piix4 Host SMBus controller not enabled。报错的根源在于 i2c_piix4，可以通过禁用 i2c_piix4 解决此问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Joker Xin"}],["meta",{"property":"article:tag","content":"System"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-02-13T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"VMware 下安装 Ubuntu 报 SMBus 错误\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-13T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Joker Xin\\",\\"url\\":\\"https://blog.xin127.me\\"}]}"]]},"headers":[],"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"System/Linux/SMBus_controller.md","localizedDate":"2022年2月13日","excerpt":"<h1> VMware 下 安装 Ubuntu 报 SMBus 错误</h1>\\n<p>如果能进入终端则切换到root用户，如果不能则在VMware进入界面时按下shift进入GNU GRUB界面，依次选择：</p>\\n<ol>\\n<li>Advanced options for Ubuntu</li>\\n<li>Ubuntu，with Linux （recovery mode）</li>\\n<li>root</li>\\n</ol>\\n<figure><img src=\\"https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223153.png\\" alt=\\"img\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>img</figcaption></figure>"}`);export{t as data};