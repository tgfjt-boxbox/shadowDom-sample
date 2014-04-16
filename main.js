(function(d) {

	// 車道のホストにするDOMを取得する
	var shadowHost = d.getElementById('talk');

	if (!shadowHost.createShadowRoot) {
		console.log('%c' + 'ShadowDomサポートしてないよ', 'color: green');

		return false;
	}

	// DOMに車道のルートを作る
	var shadowRoot = shadowHost.createShadowRoot();

	// テンプレートから、車道ツリー用のDOMを取得する
	var content = d.querySelector('#shadow').content;
	var shadowTree = content.querySelector('#shadow-element');

	// 車道ルートに車道ツリーをぶちこむ
	shadowRoot.appendChild(shadowTree);

})(document);
