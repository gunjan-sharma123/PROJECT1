/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["shop/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
