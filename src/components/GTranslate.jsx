import React, {useEffect, useRef} from 'react';

const GTranslate = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (!window.gtranslateSettings) {
            window.gtranslateSettings = {
                default_language: "en",
                languages: ["en", "fr", "it", "es", "ru"],
                wrapper_selector: ".gtranslate_wrapper",
                switcher_horizontal_position: "right",
            };

            const script = document.createElement("script");
            script.src = "https://cdn.gtranslate.net/widgets/latest/fn.js";
            script.defer = true;
            document.body.appendChild(script);
        }

    }, []);

    return (
        <div ref={widgetRef} className="gtranslate_wrapper"></div>
    );
};

export default GTranslate;