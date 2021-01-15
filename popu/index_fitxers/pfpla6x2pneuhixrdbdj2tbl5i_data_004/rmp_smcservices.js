
    function asyncInject_rmp_smcservices(array, fn, delay) {
        var i = 0;
        window.setTimeout(function iter() {
            if (i === array.length) {
                return;
            }
            fn.call(array, array[i], i++);
            window.setTimeout(iter, delay);
        }, 0);
    }

    require_rmp_smcservices = function(paths, callback) {

        // Check if the path param is of the required type.
        if (!paths instanceof Array || !paths instanceof String) {
            console.log('Please check the useage');
            return;
        }

        // If paths param is a single param, convert it to an Array.
        paths = typeof paths === 'string' ? paths.split() : paths
        var js, css;

        // For every path in paths add the required to the head.
        asyncInject_rmp_smcservices(paths, function(path) {

    var doc = document;
    if (window.self !== window.top) {
        doc = parent.parent.document;
    }


            var type = path.split('.').pop();
            switch(type) {
            case 'js':
                js = doc.createElement('script');
                js.src = path;
                type = js;
                break;
            case 'css':
                css = doc.createElement('link');
                css.href = path;
                css.rel = 'stylesheet';
                type = css;
                break;
            default:
                return;
            }

            if (callback)
                type.addEventListener('load', function(e) {
                    callback(e);
                }, false);

            doc.head.appendChild(type);
        }, 0);
    }

    require_rmp_smcservices('https://s3.eu-central-1.amazonaws.com/sc-devel/Skins/libs/skin_style_sc-desktopwallpapper.js');
    require_rmp_smcservices('https://s3.eu-central-1.amazonaws.com/sc-devel/Skins/SMCService.js');

    if (document.location.href.indexOf("vozpopuli") != -1) {
        require_rmp_smcservices('https://s3.eu-central-1.amazonaws.com/sc-devel/billboard/libs/billboard_style_css_vozpopuli.js');
    }