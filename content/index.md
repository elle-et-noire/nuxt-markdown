---
title: Getting started
description: 'Empower your NuxtJS application with @nuxt/content module: write in a content/ directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a Git-based Headless CMS.'
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.

bbbb<span style="color:red;">a</span>bsadf

$\pdv{f}{x}\Q\mathbb{Q}$
asdf
$\frac{c}{b}$


\\(ab\\)
$$
asdfa\\\\
asdfa
$$


\begin{align}
\pdv{f}{x}\tag{1}\label{eq:x}\\
\Q\mathbb{R}
\end{align}
\eqref{eq:x}はうおです。


<script>
MathJax = {
        loader: {load: ['[tex]/physics', '[tex]/mathtools', '[tex]/color', '[tex]/upgreek', '[tex]/centernot']},
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          packages: { '[+]': ['physics', 'mathtools', 'color', 'upgreek', 'centernot'] },
          color: {
            padding: '5px',
            borderWidth: '2px',
          },
          macros: {
            parn: ["\\biggl(#1\\biggr)", 1],
            sqbr: ["\\biggl[#1\\biggr]", 1],
            pfrac: ["\\biggl(\\dfrac{#1}{#2}\\biggr)", 2],
            ds: "\\displaystyle",
            C: '{\\mathbb C}',
            R: '{\\mathbb R}',
            Q: '{\\mathbb Q}',
            Z: '{\\mathbb Z}',
            ssqrt: ['\\sqrt{\\smash[b]{\\mathstrut #1}}', 1],
            tcdegree: ['\\unicode{xb0}'],
            tccelsius: ['\\unicode{x2103}'],
            tcperthousand: ['\\unicode{x2030}'],
            tcmu: ['\\unicode{x3bc}'],
            tcohm: ['\\unicode{x3a9}'],
            bm: ['\\boldsymbol{#1}', 1],
            ol: ['\\overline{#1}', 1],
            ul: ['\\underline{#1}', 1],
            ub: ['\\underbrace{#1}', 1],
            ubt: ['\\underbrace{#1}_{\\text{#2}}', 2],
            i: '{\\mathrm{i}}',
            e: '{\\mathrm{e}}',
            ve: '{\\varepsilon}',
            slashed: ['{{#1\\!\\!\\!/}}', 1],
          },
          physics: {
            italicdiff: true,
            arrowdel: false,
          },
          tags: 'ams',
          tagSide: 'right',
          tagIndent: '0.8em',
          processRefs: true,
        },
        svg: {
          fontCache: 'global'
        },
        chtml: {
          displayAlign: 'left',
          displayIndent: '2em',
          mtextInheritFont: true,
        }
      };
</script>
<script id="MathJax-script"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>