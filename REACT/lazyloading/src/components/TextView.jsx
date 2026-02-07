import React, { memo } from 'react';

const TextView = memo(({ theme, fontSize }) => {
    return (
        <div
            className={`mt-8 p-6 rounded-lg transition-all duration-300 shadow-xl border ${theme === 'dark'
                    ? 'bg-neutral-900 text-gray-300 border-neutral-700'
                    : 'bg-white text-gray-800 border-gray-200'
                }`}
            style={{ fontSize: `${fontSize}px` }}
        >
            <h2 className="text-2xl font-bold mb-4 border-b pb-2 border-current opacity-70">
                Chapter 1: The Beginning
            </h2>
            <p className="mb-4 leading-relaxed">
                It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.
            </p>
            <p className="mb-4 leading-relaxed">
                The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features. Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours.
            </p>
            <div className="mt-6 text-sm opacity-50 font-mono border-t pt-4 border-dashed border-current">
                Current Settings: {theme.toUpperCase()} MODE | {fontSize}PX FONT
            </div>
        </div>
    );
});

export default TextView;
