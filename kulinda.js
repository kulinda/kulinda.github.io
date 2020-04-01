(function() {
	let pages = [
		[
			["Home", "/"],
		],
		[
			["Dye Browser", "/dyes/"],
			["Mount Adoption", "/mounts/"],
			["GW2 Launcher", "/launcher/"],
			["BuildWars 1.0", "/buildwars/"],
			["BuildWars 1.1", "/buildwars1-1/"],
		],
		[
			["Blog", "/blog/"],
			["Contact", "/contact/"],
		]
	];
	let e_menu = null;
	let e_btn = null;

	function _e(tag, className, ...children) {
		let e = document.createElement(tag);
		if (className)
			e.className = className;
		for (let c of children)
			e.appendChild(c);
		return e;
	}
	function _t(text) {
		return document.createTextNode(text);
	}
	function _a(p, c) {
		p.appendChild(c);
	}

	function init() {
		let e = document.createElement('div');
		e.className = 'kulinda_menu';
		let e_btn = _e('div', 'kulinda_dropdown', _t("Kulinda's GW2 Stuff"));
		_a(e, e_btn);
		document.body.appendChild(e);
		e_btn.addEventListener('click', toggle_menu);

		e_menu = document.createElement('div');
		e_menu.className = 'kulinda_menu_popup';
		for (let category of pages) {
			if (e_menu.children.length > 0) {
				_a(e_menu, _e('div', 'hr', _t('• • •')));
			}
			let ul = _e('ul');
			for (let page of category) {
				let a = _e('a', null, _t(page[0]));
				a.href = page[1];
				if (location.pathname === page[1])
					a.classList.add('active-link');
				_a(ul, _e('li', null, a));
			}
			_a(e_menu, ul);
		}
		e.appendChild(e_menu);
	}

	function toggle_menu(event) {
		event.stopPropagation();
		if (e_menu.classList.contains('open'))
			close_menu();
		else
			open_menu();
	}

	function open_menu() {
		e_menu.classList.add('open');
		document.addEventListener('click', click_outside, true);
	}

	function close_menu() {
		e_menu.classList.remove('open');
		document.removeEventListener('click', click_outside, true);
	}

	function click_outside(event) {
		let e = event.target;
		let found = false;
		while (e) {
			if (e === e_menu) {
				found = true;
				break;
			}
			if (e === e_btn) {
				return;
			}
			e = e.parentNode;
		}
		if (!found) {
			//event.preventDefault();
			close_menu();
		}
	}

	let initialized = false;
	function try_init() {
		if (initialized)
			return;
		if (document.readyState !== 'interactive' && document.readyState !== 'complete')
			return;
		initialized = true;
		init();
	}
	document.addEventListener('readystatechange', try_init);
	try_init();
}());
