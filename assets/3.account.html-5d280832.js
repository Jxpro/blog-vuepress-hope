import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as r}from"./app-5e6e2e94.js";const l={},t=r('<h1 id="以太坊账户" tabindex="-1"><a class="header-anchor" href="#以太坊账户" aria-hidden="true">#</a> 以太坊账户</h1><h2 id="一、从utxo谈起" tabindex="-1"><a class="header-anchor" href="#一、从utxo谈起" aria-hidden="true">#</a> 一、从UTXO谈起</h2><ul><li>比特币在基于<code>UTXO</code>的结构中存储有关用户余额的数据：系统的整个状态就是一组UTXO的集合，每个UTXO都有一个所有者和一个面值（就像不同的硬币），而交易会<strong>花费若干个输入的UTXO，并根据规则创建若干个新的UTXO</strong>：</li><li>每个引用的输入<strong>必须有效且尚未花费</strong>；对于一个交易，必须包含有与每个输入的所有者匹配的签名；总输入必须大于等于总输出值</li><li>所以，系统中用户的余额（balance）是用户具有私钥的 UTXO 的总值</li></ul><h2 id="二、以太坊的做法" tabindex="-1"><a class="header-anchor" href="#二、以太坊的做法" aria-hidden="true">#</a> 二、以太坊的做法</h2><ul><li>以太坊的“状态”，就是系统中所有帐户的列表</li><li>每个账户都包括了一个<strong>余额</strong>（balance），和以太坊特殊定义的<strong>数据</strong>（代码和内部存储）</li><li>如果发送帐户有足够的余额来支付，则交易有效；在这种情况下发送帐户先扣款，而收款帐户将记入这笔收入</li><li>如果接收帐户有相关代码，则代码会自动运行，并且它的内部存储也可能被更改，或者代码还可能向其他帐户发送额外的消息，这就会导致进一步的借贷资金关系</li></ul><h2 id="三、utxo的优点" tabindex="-1"><a class="header-anchor" href="#三、utxo的优点" aria-hidden="true">#</a> 三、UTXO的优点</h2><ul><li>更高程度的<strong>隐私性</strong>：如果用户为他们收到的每笔交易使用新地址，那么通常很难将帐户相互链接。这很大程度上适用于货币，但不太适用于任意dapps，因为dapps通常涉及跟踪和用户绑定的复杂状态，可能不存在像货币那样简单的用户状态划分方案。</li><li>潜在的<strong>可扩展性</strong>：UTXO在理论上更符合可扩展性要求。因为我们只需要依赖拥有 UTXO 的那些人去维护基于Merkle树的所有权证明就够了，即使包括所有者在内的每个人都决定忘记该数据，那么也只有所有者受到对应UTXO的损失，不影响接下来的交易。而在帐户模式中，如果每个人都丢失了与帐户相对应的Merkle树的部分，那将会使得和该帐户有关的消息完全无法处理，包括发币给它。</li></ul><h2 id="四、以太坊账户模式优点" tabindex="-1"><a class="header-anchor" href="#四、以太坊账户模式优点" aria-hidden="true">#</a> 四、以太坊账户模式优点</h2><ul><li>可以<strong>节省大量空间</strong>：不将 UTXOs 分开存储，而是合为一个账户；每个交易只需要一个输入、一个签名并产生一个输出。</li><li>更好的<strong>可替代性</strong>：货币本质上都是同质化、可替代的；UTXO的设计使得货币从来源分成了“可花费”和“不可花费”两类，这在实际应用中很难有对应的模型。</li><li>更加<strong>简单</strong>：更容易编码和理解，特别是设计复杂脚本的时候。UTXO 在脚本逻辑复杂时更令人费解。</li><li>便于维护<strong>持久轻节点</strong>：只要沿着特定方向扫描状态树，轻节点可以很容易地随时访问账户相关的所有数据。而UTXO的每个交易都会使得状态引用发生改变，这对轻节点来说长时间运行Dapp会有很大压力。</li></ul><h2 id="五、比特币和以太坊的对比" tabindex="-1"><a class="header-anchor" href="#五、比特币和以太坊的对比" aria-hidden="true">#</a> 五、比特币和以太坊的对比</h2><figure><img src="https://raw.githubusercontent.com/Jxpro/PicBed/master/md/2021/11/2021-11-27-101255.png" alt="image-20211127101253571" tabindex="0" loading="lazy"><figcaption>image-20211127101253571</figcaption></figure><h2 id="六、以太坊账户类型" tabindex="-1"><a class="header-anchor" href="#六、以太坊账户类型" aria-hidden="true">#</a> 六、以太坊账户类型</h2><h3 id="_6-1-eoa-外部账户-用户账户-普通账户" tabindex="-1"><a class="header-anchor" href="#_6-1-eoa-外部账户-用户账户-普通账户" aria-hidden="true">#</a> 6.1 EOA（外部账户/用户账户/普通账户）</h3><ul><li>有对应的以太币余额</li><li>可发送交易（转币或触发合约代码）</li><li>由用户私钥控制</li><li>没有关联代码</li></ul><h3 id="_6-2-合约账户" tabindex="-1"><a class="header-anchor" href="#_6-2-合约账户" aria-hidden="true">#</a> 6.2 合约账户</h3><ul><li>有对应的以太币余额</li><li>可发送交易（转币或触发合约代码）</li><li>由用户私钥控制</li><li>没有关联代码</li></ul>',16),n=[t];function o(h,d){return i(),e("div",null,n)}const u=a(l,[["render",o],["__file","3.account.html.vue"]]);export{u as default};
