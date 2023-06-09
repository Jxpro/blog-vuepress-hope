const a=JSON.parse(`{"key":"v-2463fc00","path":"/Blockchain/Fabric/2.demo_test_network.html","title":"Fabric 案例 - Test Network","lang":"zh-CN","frontmatter":{"title":"Fabric 案例 - Test Network","shortTitle":"测试网络","description":"本文介绍了如何使用 Fabric 部署并运行一个测试网络，包括使用 network.sh 来启动测试网络，创建一个通道，在通道启动一个链码，与网络交互等内容。","category":["Fabric"],"tag":["Blockchain","Fabric"],"date":"2021-11-08T00:00:00.000Z","order":2,"head":[["meta",{"property":"og:url","content":"https://blog.xin127.me/Blockchain/Fabric/2.demo_test_network.html"}],["meta",{"property":"og:site_name","content":"Joker Xin's Blog"}],["meta",{"property":"og:title","content":"Fabric 案例 - Test Network"}],["meta",{"property":"og:description","content":"本文介绍了如何使用 Fabric 部署并运行一个测试网络，包括使用 network.sh 来启动测试网络，创建一个通道，在通道启动一个链码，与网络交互等内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Joker Xin"}],["meta",{"property":"article:tag","content":"Blockchain"}],["meta",{"property":"article:tag","content":"Fabric"}],["meta",{"property":"article:published_time","content":"2021-11-08T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Fabric 案例 - Test Network\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-11-08T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Joker Xin\\",\\"url\\":\\"https://blog.xin127.me\\"}]}"]]},"headers":[{"level":2,"title":"一、network.sh 命令帮助","slug":"一、network-sh-命令帮助","link":"#一、network-sh-命令帮助","children":[]},{"level":2,"title":"二、启动测试网络","slug":"二、启动测试网络","link":"#二、启动测试网络","children":[]},{"level":2,"title":"三、创建一个通道","slug":"三、创建一个通道","link":"#三、创建一个通道","children":[]},{"level":2,"title":"四、在通道启动一个链码","slug":"四、在通道启动一个链码","link":"#四、在通道启动一个链码","children":[]},{"level":2,"title":"五、与网络交互","slug":"五、与网络交互","link":"#五、与网络交互","children":[]},{"level":2,"title":"六、幕后发生了什么","slug":"六、幕后发生了什么","link":"#六、幕后发生了什么","children":[]},{"level":2,"title":"七、参考文章","slug":"七、参考文章","link":"#七、参考文章","children":[]}],"readingTime":{"minutes":8.91,"words":2673},"filePathRelative":"Blockchain/Fabric/2.demo_test_network.md","localizedDate":"2021年11月8日","excerpt":"<h1> Fabric案例 - test-network</h1>\\n<h2> 一、<a href=\\"http://network.sh\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">network.sh</a> 命令帮助</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>./network.sh <span class=\\"token parameter variable\\">-h</span>\\n\\n<span class=\\"token comment\\"># 输出结果</span>\\nUsage:\\n  network.sh <span class=\\"token operator\\">&lt;</span>Mode<span class=\\"token operator\\">&gt;</span> <span class=\\"token punctuation\\">[</span>Flags<span class=\\"token punctuation\\">]</span>\\n    Modes:\\n      up - Bring up Fabric orderer and peer nodes. No channel is created\\n      up createChannel - Bring up fabric network with one channel\\n      createChannel - Create and <span class=\\"token function\\">join</span> a channel after the network is created\\n      deployCC - Deploy a chaincode to a channel <span class=\\"token punctuation\\">(</span>defaults to asset-transfer-basic<span class=\\"token punctuation\\">)</span>\\n      down - Bring down the network\\n\\n    Flags:\\n    Used with network.sh up, network.sh createChannel:\\n    <span class=\\"token parameter variable\\">-ca</span> <span class=\\"token operator\\">&lt;</span>use CAs<span class=\\"token operator\\">&gt;</span> -  Use Certificate Authorities to generate network crypto material\\n    <span class=\\"token parameter variable\\">-c</span> <span class=\\"token operator\\">&lt;</span>channel name<span class=\\"token operator\\">&gt;</span> - Name of channel to create <span class=\\"token punctuation\\">(</span>defaults to <span class=\\"token string\\">\\"mychannel\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token parameter variable\\">-s</span> <span class=\\"token operator\\">&lt;</span>dbtype<span class=\\"token operator\\">&gt;</span> - Peer state database to deploy: goleveldb <span class=\\"token punctuation\\">(</span>default<span class=\\"token punctuation\\">)</span> or couchdb\\n    <span class=\\"token parameter variable\\">-r</span> <span class=\\"token operator\\">&lt;</span>max retry<span class=\\"token operator\\">&gt;</span> - CLI <span class=\\"token builtin class-name\\">times</span> out after certain number of attempts <span class=\\"token punctuation\\">(</span>defaults to <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token parameter variable\\">-d</span> <span class=\\"token operator\\">&lt;</span>delay<span class=\\"token operator\\">&gt;</span> - CLI delays <span class=\\"token keyword\\">for</span> a certain number of seconds <span class=\\"token punctuation\\">(</span>defaults to <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token parameter variable\\">-verbose</span> - Verbose mode\\n\\n    Used with network.sh deployCC\\n    <span class=\\"token parameter variable\\">-c</span> <span class=\\"token operator\\">&lt;</span>channel name<span class=\\"token operator\\">&gt;</span> - Name of channel to deploy chaincode to\\n    <span class=\\"token parameter variable\\">-ccn</span> <span class=\\"token operator\\">&lt;</span>name<span class=\\"token operator\\">&gt;</span> - Chaincode name.\\n    <span class=\\"token parameter variable\\">-ccl</span> <span class=\\"token operator\\">&lt;</span>language<span class=\\"token operator\\">&gt;</span> - Programming language of the chaincode to deploy: go, java, javascript, typescript\\n    <span class=\\"token parameter variable\\">-ccv</span> <span class=\\"token operator\\">&lt;</span>version<span class=\\"token operator\\">&gt;</span>  - Chaincode version. <span class=\\"token number\\">1.0</span> <span class=\\"token punctuation\\">(</span>default<span class=\\"token punctuation\\">)</span>, v2, version3.x, etc\\n    <span class=\\"token parameter variable\\">-ccs</span> <span class=\\"token operator\\">&lt;</span>sequence<span class=\\"token operator\\">&gt;</span>  - Chaincode definition sequence. Must be an integer, <span class=\\"token number\\">1</span> <span class=\\"token punctuation\\">(</span>default<span class=\\"token punctuation\\">)</span>, <span class=\\"token number\\">2</span>, <span class=\\"token number\\">3</span>, etc\\n    <span class=\\"token parameter variable\\">-ccp</span> <span class=\\"token operator\\">&lt;</span>path<span class=\\"token operator\\">&gt;</span>  - File path to the chaincode.\\n    <span class=\\"token parameter variable\\">-ccep</span> <span class=\\"token operator\\">&lt;</span>policy<span class=\\"token operator\\">&gt;</span>  - <span class=\\"token punctuation\\">(</span>Optional<span class=\\"token punctuation\\">)</span> Chaincode endorsement policy using signature policy syntax. The default policy requires an endorsement from Org1 and Org2\\n    <span class=\\"token parameter variable\\">-cccg</span> <span class=\\"token operator\\">&lt;</span>collection-config<span class=\\"token operator\\">&gt;</span>  - <span class=\\"token punctuation\\">(</span>Optional<span class=\\"token punctuation\\">)</span> File path to private data collections configuration <span class=\\"token function\\">file</span>\\n    <span class=\\"token parameter variable\\">-cci</span> <span class=\\"token operator\\">&lt;</span>fcn name<span class=\\"token operator\\">&gt;</span>  - <span class=\\"token punctuation\\">(</span>Optional<span class=\\"token punctuation\\">)</span> Name of chaincode initialization function. When a <span class=\\"token keyword\\">function</span> is provided, the execution of init will be requested and the <span class=\\"token keyword\\">function</span> will be invoked.\\n\\n    <span class=\\"token parameter variable\\">-h</span> - Print this message\\n\\n Possible Mode and flag combinations\\n   up <span class=\\"token parameter variable\\">-ca</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-s</span> <span class=\\"token parameter variable\\">-verbose</span>\\n   up createChannel <span class=\\"token parameter variable\\">-ca</span> <span class=\\"token parameter variable\\">-c</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-s</span> <span class=\\"token parameter variable\\">-verbose</span>\\n   createChannel <span class=\\"token parameter variable\\">-c</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-verbose</span>\\n   deployCC <span class=\\"token parameter variable\\">-ccn</span> <span class=\\"token parameter variable\\">-ccl</span> <span class=\\"token parameter variable\\">-ccv</span> <span class=\\"token parameter variable\\">-ccs</span> <span class=\\"token parameter variable\\">-ccp</span> <span class=\\"token parameter variable\\">-cci</span> <span class=\\"token parameter variable\\">-r</span> <span class=\\"token parameter variable\\">-d</span> <span class=\\"token parameter variable\\">-verbose</span>\\n\\n Examples:\\n   network.sh up createChannel <span class=\\"token parameter variable\\">-ca</span> <span class=\\"token parameter variable\\">-c</span> mychannel <span class=\\"token parameter variable\\">-s</span> couchdb\\n   network.sh createChannel <span class=\\"token parameter variable\\">-c</span> channelName\\n   network.sh deployCC <span class=\\"token parameter variable\\">-ccn</span> basic <span class=\\"token parameter variable\\">-ccp</span> <span class=\\"token punctuation\\">..</span>/asset-transfer-basic/chaincode-javascript/ <span class=\\"token parameter variable\\">-ccl</span> javascript\\n   network.sh deployCC <span class=\\"token parameter variable\\">-ccn</span> mychaincode <span class=\\"token parameter variable\\">-ccp</span> ./user/mychaincode <span class=\\"token parameter variable\\">-ccv</span> <span class=\\"token number\\">1</span> <span class=\\"token parameter variable\\">-ccl</span> javascript\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{a as data};