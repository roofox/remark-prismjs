const visit = require('unist-util-visit');
const Prism = require(`prismjs`);

const highlightCode = (_) => (tree) => {
  visit(tree, `code`, (node) => {
    node.type = 'html';
    node.value = `<pre class="language-${node.lang}"><code class="language-${
      node.lang
    }" data-language="${node.lang}">${Prism.highlight(
      node.value,
      Prism.languages[node.lang],
      node.lang
    )}</code></pre>`;
  });
};

module.exports = highlightCode;
