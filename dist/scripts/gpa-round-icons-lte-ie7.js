/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'GPA-Round-Icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'gpa-icon-web-access' : '&#xe000;',
			'gpa-icon-warehouse' : '&#xe001;',
			'gpa-icon-trucking-companies' : '&#xe002;',
			'gpa-icon-tool' : '&#xe003;',
			'gpa-icon-time' : '&#xe004;',
			'gpa-icon-terminal' : '&#xe005;',
			'gpa-icon-sustainability' : '&#xe006;',
			'gpa-icon-services' : '&#xe007;',
			'gpa-icon-security' : '&#xe008;',
			'gpa-icon-rpg' : '&#xe009;',
			'gpa-icon-reefer' : '&#xe00a;',
			'gpa-icon-rail-access' : '&#xe00b;',
			'gpa-icon-purchasing' : '&#xe00c;',
			'gpa-icon-play-button' : '&#xe00d;',
			'gpa-icon-overnight' : '&#xe00e;',
			'gpa-icon-locations' : '&#xe00f;',
			'gpa-icon-interstate' : '&#xe010;',
			'gpa-icon-i16-and-i95' : '&#xe011;',
			'gpa-icon-heart-health' : '&#xe012;',
			'gpa-icon-healthcare' : '&#xe013;',
			'gpa-icon-georgia' : '&#xe014;',
			'gpa-icon-flexibility' : '&#xe015;',
			'gpa-icon-first-aid' : '&#xe016;',
			'gpa-icon-economics' : '&#xe017;',
			'gpa-icon-downloads' : '&#xe018;',
			'gpa-icon-disc' : '&#xe019;',
			'gpa-icon-customer-service' : '&#xe01a;',
			'gpa-icon-cranes' : '&#xe01b;',
			'gpa-icon-cost-effective' : '&#xe01c;',
			'gpa-icon-class-1-rail' : '&#xe01d;',
			'gpa-icon-carrier-weights' : '&#xe01e;',
			'gpa-icon-berth-space' : '&#xe01f;',
			'gpa-icon-48-hours' : '&#xe020;',
			'gpa-icon-30-miles' : '&#xe021;',
			'gpa-icon-24-7-access' : '&#xe022;',
			'gpa-icon-3-day' : '&#xe023;',
			'gpa-icon-2-day' : '&#xe024;',
			'gpa-ring-icon-economics' : '&#xe025;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};