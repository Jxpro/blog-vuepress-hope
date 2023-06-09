import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as t,a as e,b as o,d as r,e as d}from"./app-5e6e2e94.js";const l={},c=d(`<h1 id="docker容器添加对外映射端口" tabindex="-1"><a class="header-anchor" href="#docker容器添加对外映射端口" aria-hidden="true">#</a> docker容器添加对外映射端口</h1><h2 id="一、背景" tabindex="-1"><a class="header-anchor" href="#一、背景" aria-hidden="true">#</a> 一、背景</h2><p>一般在运行容器时，我们都会通过参数<code>-p</code>（使用大写的<code>-P</code>参数则会随机选择宿主机的一个端口进行映射）来指定宿主机和容器<strong>端口的映射</strong>，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it -d --name [container-name] -p 8088:80 [image-name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里是将容器内的80端口映射到宿主机的8088端口</p><p>参数说明</p><ul><li>-d 表示后台运行容器</li><li>-t 为docker分配一个伪终端并绑定到容器的标准输入上</li><li>-i 是让容器的标准输入保持打开状态</li><li>-p 指定映射端口</li></ul><p>在运行容器时指定映射端口运行后，如果想要添加新的端口映射，可以使用以下两种方式：</p><h2 id="二、方法一-重新制作镜像" tabindex="-1"><a class="header-anchor" href="#二、方法一-重新制作镜像" aria-hidden="true">#</a> 二、方法一：重新制作镜像</h2><p>将现有的容器<strong>打包成镜像</strong>，然后在使用新的镜像运行容器时<strong>重新指定要映射的端口</strong></p><p>过程如下：</p><ol><li>停止现有容器<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop container-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>将容器commit成为一个镜像<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> commit container-name new-image-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>用新镜像运行容器<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> container-name <span class="token parameter variable">-p</span> p1:p1 <span class="token parameter variable">-p</span> p2:p2 new-image-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="三、方法二-修改配置文件" tabindex="-1"><a class="header-anchor" href="#三、方法二-修改配置文件" aria-hidden="true">#</a> 三、方法二：修改配置文件</h2><p><strong>修改</strong>要端口映射的容器的<strong>配置文件</strong></p><p>过程如下：</p><ol><li>停止现有容器</li></ol><pre><code>\`\`\`shell
docker stop 容器ID
\`\`\`
</code></pre><ol start="2"><li>停止docker服务，<strong>必须先停止，不然修改不生效</strong><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl stop <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>进入/var/lib/docker/containers 目录下找到与 Id 相同的目录<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /var/lib/docker/containers/容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>修改 hostconfig.json 和 config.v2.json文件： <img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223332.png" alt="img" loading="lazy"></li><li>修改<code>hostconfig.json</code>，在<code>PortBindings</code>后加上要<strong>绑定的端口</strong>，添加端口绑定：<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 表示绑定端口 3306</span>
<span class="token string">&quot;3306/tcp&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;HostIp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,<span class="token string">&quot;HostPort&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3306&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223343.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></li><li>修改<code>config.v2.json</code>在<code>ExposedPorts</code>后加上要<strong>暴露的端口</strong><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 表示暴露端口 3306</span>
<span class="token string">&quot;3306/tcp&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/10/29-223349.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></li><li>改完之后保存启动docker，查看添加的端口是否已映射绑定上</li></ol><pre><code>\`\`\`
systemctl start docker
\`\`\`
</code></pre><h2 id="四、查看端口映射成功" tabindex="-1"><a class="header-anchor" href="#四、查看端口映射成功" aria-hidden="true">#</a> 四、查看端口映射成功</h2><p>在容器外执行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>netstat -an |grep 3306
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有进程存在则表示有映射</p><h2 id="五、参考文章" tabindex="-1"><a class="header-anchor" href="#五、参考文章" aria-hidden="true">#</a> 五、参考文章</h2>`,24),p={href:"https://www.cnblogs.com/zhumengke/articles/13525837.html",target:"_blank",rel:"noopener noreferrer"};function u(m,g){const a=s("ExternalLinkIcon");return i(),t("div",null,[c,e("ul",null,[e("li",null,[e("a",p,[o("docker容器添加对外映射端口"),r(a)])])])])}const b=n(l,[["render",u],["__file","add_port.html.vue"]]);export{b as default};
