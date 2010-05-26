load("envjs/platform/core.js");
load("envjs/platform/rhino.js");
load("envjs/console.js");
load("envjs/dom.js");
load("envjs/event.js");
load("envjs/html.js");
load("envjs/xhr.js");
load("envjs/window.js");
load("envjs/timer.js");
load("envjs/parser.js");

Envjs("test.html", {
	logLevel: Envjs.DEBUG,
        scriptTypes: {
           'text/javascript': true
        }
});

Envjs.wait();
