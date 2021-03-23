import Reveal from 'reveal.js';
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';

import * as b from "./basics";
import * as mv from "./materialized-views";
import * as s from "./scaling";

hljs.registerLanguage('sql', sql);
hljs.initHighlightingOnLoad();

const specimens = [
  {
    name: 'stream',
    fn: b.stream,
    selector: '#stream'
  },
  {
    name: 'inserts',
    fn: b.inserts,
    selector: '#inserts'
  },
  {
    name: 'transformation',
    fn: b.transformation,
    selector: '#transformation'
  },
  {
    name: 'filtering',
    fn: b.filtering,
    selector: '#filtering'
  },
  {
    name: 'compressed',
    fn: b.compressed,
    selector: '#compressed'
  },
  {
    name: 'rekeying',
    fn: b.rekeying,
    selector: '#rekeying'
  },
  {
    name: 'multi-consumer',
    fn: b.consumers,
    selector: '#multi-consumer'
  },
  {
    name: 'materialized-view',
    fn: mv.materialized_view,
    selector: '#materialized-view'
  },
  {
    name: 'repartitioning',
    fn: mv.repartitioning,
    selector: '#repartitioning'
  },
  {
    name: 'replaying-from-changelog',
    fn: mv.replaying_from_changelog,
    selector: '#replaying-from-changelog'
  },
  {
    name: 'replaying-from-compacted',
    fn: mv.replaying_from_compacted,
    selector: '#replaying-from-compacted'
  },
  {
    name: 'latest',
    fn: mv.latest,
    selector: '#latest'
  },
  {
    name: 'chained',
    fn: mv.chained,
    selector: '#chained'
  },
  {
    name: 'scaling-1x',
    fn: s.one_node,
    selector: '#scaling-1x'
  },
  {
    name: 'scaling-2x',
    fn: s.two_nodes,
    selector: '#scaling-2x'
  },
  {
    name: 'scaling-8x',
    fn: s.eight_nodes,
    selector: '#scaling-8x'
  },
  {
    name: 'scaling-with-state',
    fn: s.materialized_view,
    selector: '#scaling-with-state'
  },
  {
    name: 'high-availability',
    fn: s.high_availability,
    selector: '#high-availability'
  },
];

specimens.forEach(specimen => {
  specimen.rendered = false;
});

let deck = new Reveal({
  hash: true,
  center: false
})


deck.on('slidechanged', event => {
  specimens.forEach(specimen => {
    if ((event.currentSlide.dataset.name == specimen.name) && !specimen.rendered) {
      specimen.fn(specimen.selector);
      specimen.rendered = true;
    }
  });
});


deck.initialize();
