import React, { memo } from 'react';

const TextPreview = memo(({ theme, fontSize }) => {
    return (
        <div
            className={`mt-6 p-8 rounded-lg transition-all duration-300 shadow-xl border ${theme === 'dark'
                    ? 'bg-gray-800 text-gray-100 border-gray-700'
                    : 'bg-white text-gray-900 border-gray-200'
                }`}
            style={{ fontSize: `${fontSize}px` }}
        >
            <h3 className="font-bold mb-4" style={{ fontSize: `${fontSize * 1.5}px` }}>
                Live Preview
            </h3>
            <p className="leading-relaxed mb-4">
                This is a preview of the text settings you are adjusting.
                The component is lazy-loaded to optimize initial page load performance.
            </p>
            <p className="opacity-80">
                Current Theme: <span className="font-mono font-bold capitalize">{theme}</span>
                <br />
                Current Font Size: <span className="font-mono font-bold">{fontSize}px</span>
            </p>
        </div>
    );
});

export default TextPreview;
