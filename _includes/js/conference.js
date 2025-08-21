// Libraries
//   Bootstrap (Style Framework)
{% include js/lib/jquery-3.5.1.min.js %}
{% include js/lib/popper.min.js %}
{% include js/lib/bootstrap.js %}

//   FontAwesome (Icons)
//     Imported via CSS and webfonts

// Conference
window.conference = {
    config: {
        baseurl: '{{ site.baseurl }}'
    },

    ready: false,
    awaitReady: () => {
        const poll = (resolve) => {
            if(window.conference.ready === true) {
                resolve();
            }
            else {
                setTimeout(() => poll(resolve), 500);
            }
        }
        return new Promise(poll);
    }
};

// Modals ("Popups")
{% include js/modal.js %}

// Live and Streaming
{% if site.conference.live %}
    {%- include js/live.js %}
{% endif %}

// Load configuration and start initialization
{% include js/init.js %}
