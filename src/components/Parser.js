export default class Parser {
    constructor() {
        this.rules = {
            codeBlock: /((\n\t)(.*))+/g,
            inlineCode: /(`)(.*?)\1/g,
            image: /!\[([^\[]+)\]\(([^\)]+)\)/g,
            link: /\[([^\[]+)\]\(([^\)]+)\)/g,
            heading: /(#+\s+)(.*)/g,
            bold: /(\*{2})(.*?)\1/g,
            italic: /(\*|_)(.*?)\1/g,
            strikethrough: /(\~\~)(.*?)\1/g,
            blockquote: /\n(&gt;|\>)(.*)/g,
            horizontal: /\n((\-{3,})|(={3,}))/g,
            ol: /(\n\s*(\-|\+)\s.*)+/g,
        }
    }

    static highlight(code) {
        return (new Parser()).getResult(code);
    }

    getResult(code) {
        for (const [elem, regex] of Object.entries(this.rules)) {
            code = code.replace(regex,  (full) =>`<span class=${elem}>${full}</span>`)
        }

        return code.trim();
    }
}
