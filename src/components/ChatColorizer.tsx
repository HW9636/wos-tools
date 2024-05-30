'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const ChatColorizer: React.FC = () => {
    const [value, setValue] = useState<string>('Enter a message here: ');
    const [formattedContent, setFormattedContent] = useState<string>('');

    const onChange = (content: string) => {
        setValue(content);

        // Convert to chat format, which is similar to HTML, the colored <span> with <color=#xxxxxx>, and the <strong> with <b>
        let html = document.createElement('div');
        html.innerHTML = content;
        html.innerHTML = html.children[0].innerHTML; // remove the <p> tag
        let stack: HTMLElement[] = [html];

        while (stack.length) {
            const node = stack.pop();

            if (node && node.childNodes) {
                node.childNodes.forEach(child => {
                    if (child.nodeType === 1) { // Element node
                        const element = child as HTMLElement;

                        let color: string | undefined = undefined;
                        if (element.style?.color) {
                            color = element.style.color;

                            if (color.startsWith('rgb'))
                                color = '#' + color.match(/\d+/g)!.map(x => (+x).toString(16).padStart(2, '0')).join('');
                        }

                        switch (element.tagName) {
                            case 'P':
                                element.outerHTML = element.innerHTML;
                                break;
                            case 'STRONG':
                                element.outerHTML = `<b>${element.innerHTML}</b>`;
                                break;
                            case 'SPAN':
                                if (!color)
                                    element.outerHTML = element.innerHTML;
                                break;
                            case 'U':
                                element.outerHTML = `<u>${element.innerHTML}</u>`;
                                break;
                            case 'EM':
                                element.outerHTML = `<i>${element.innerHTML}</i>`;
                                break;
                            default:
                                stack.push(element);
                                break;

                        }

                        // This code is so ugly, but it works
                        if (color) {
                            if (element.tagName === 'SPAN')
                                element.outerHTML = `<color color_placeholder=${color}>${element.innerHTML}</color>`;
                            else
                                element.outerHTML = `<color color_placeholder=${color}>${element.outerHTML}</color>`;
                        }
                    }
                });
            }
        }
        let formattedContent = html.innerHTML;
        formattedContent = formattedContent.replace(/ color_placeholder/g, '');
        setFormattedContent(formattedContent);
    };

    const modules = {
        toolbar: [
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }],
            ['clean'],
        ],
    };

    const formats = [
        'size', 'bold', 'italic', 'underline', 'strike', 'color'
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                className="w-full max-w-2xl h-[50vh] p-4 m-4 rounded-lg"
            />
            <textarea
                className="m-4 p-4 w-full max-w-2xl h-[50vh] rounded-lg bg-inherit border border-gray-300 dark:border-neutral-700 dark:bg-neutral-800/30"
                value={formattedContent}
                readOnly
            />
        </div>
    );
};

export default ChatColorizer;
