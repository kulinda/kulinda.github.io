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
	let e_popup = null;
	let menu_is_open = false;

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
		if (!window.__kulinda_menu_has_button) {
			let e = document.createElement('div');
			e.className = 'kulinda_menu _kulinda_menu';
			let e_btn = _e('div', 'kulinda_dropdown', _t("Kulinda's GW2 Stuff"));
			_a(e, e_btn);
			_a(document.body, e);
		}

		e_popup = document.createElement('div');
		e_popup.className = 'kulinda_menu_popup';
		for (let category of pages) {
			if (e_popup.children.length > 0) {
				_a(e_popup, _e('div', 'hr', _t('• • •')));
			}
			let ul = _e('ul');
			for (let page of category) {
				let a = _e('a', null, _t(page[0]));
				a.href = page[1];
				if (location.pathname === page[1])
					a.classList.add('active-link');
				_a(ul, _e('li', null, a));
			}
			_a(e_popup, ul);
		}
		_a(document.body, e_popup);
		window.addEventListener('click', click_anywhere, true);
	}

	function find_ancestor_by_class(e, className) {
		while (e) {
			if (e.classList && e.classList.contains(className)) {
				return e;
			}
			e = e.parentElement;
		}
		return null;
	}

	function click_anywhere(event) {
		let target = event.target;
		let menu_btn = find_ancestor_by_class(target, '_kulinda_menu');
		// if the menu button was clicked, always toggle
		if (menu_btn) {
			event.stopPropagation();
			toggle_menu(event, menu_btn);
		}
		else if (menu_is_open) {
			// if the menu contents were clicked, do not interfere
			let popup = find_ancestor_by_class(target, 'kulinda_menu_popup');
			if (popup)
				return;
			// any other click closes the menu
			//event.preventDefault();
			close_menu();
		}
	}
	function toggle_menu(event, btn) {
		event.stopPropagation();
		if (menu_is_open)
			close_menu();
		else
			open_menu(btn);
	}

	function open_menu(btn) {
		if (menu_is_open)
			return;
		let rect = btn.getBoundingClientRect();
		menu_is_open = true;
		e_popup.style.left = (rect.left + window.scrollX) + 'px';
		e_popup.style.top = (rect.top + rect.height + window.scrollY + 5) + 'px';
		e_popup.style.width = rect.width + 'px';
		e_popup.classList.add('open');
	}

	function close_menu() {
		if (!menu_is_open)
			return;
		menu_is_open = false;
		e_popup.classList.remove('open');
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
