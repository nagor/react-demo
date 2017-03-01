// https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10#.z9c5xvymo

/***********************************************************
 * functional.js
 ***********************************************************/

// composes functions right tto left
const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

// composes functions left to right
const pipe = (...functions) => data =>
    functions.reduce((value, func) => func(value), data)

const set = prop => obj => value =>
    (obj[prop] = value, obj)

const map = f => x =>
    Array.prototype.map.call(x, f)

const join = seperator => list =>
    Array.prototype.join.call(list, seperator)

/***********************************************************
 * dom.js
 ***********************************************************/
const setInnerHtml = set('innerHTML')

/***********************************************************
 * html.js
 ***********************************************************/
const encodeAttribute = (x = '') =>
    x.replace(/"/g, '&quot;')

const toAttributeString = (x = {}) =>
    compose(
        join(' '),
        map(attr => `${encodeAttribute(attr)}="${encodeAttribute(x[attr])}"`),
        Object.keys
    )(x)

const tagAttributes = x => (contents = '') =>
    `<${x.tag}${x.attr ? ' ' : ''}${toAttributeString(x.attr)}>${contents}</${x.tag}>`

const tag = x =>
    typeof x === 'string'
        ? tagAttributes({ tag: x })
        : tagAttributes(x)

// list-group
const listGroupTag = tag({ tag: 'ul', attr: { class: 'list-group' } })
const listGroupItem = tag({ tag: 'li', attr: { class: 'list-group-item' } })
const listGroupItems = list =>
    list.map(listGroupItem)
        .join('')
const listGroup = compose(listGroupTag, listGroupItems)

// panel
const panelTag = tag({ tag: 'div', attr: { class: 'panel panel-default' } })
const panelBody = tag({ tag: 'div', attr: { class: 'panel-body' } })
const basicPanel = compose(panelTag, panelBody)

const listGroupPanel = compose(basicPanel, listGroup)

/***********************************************************
 * main.js
 ***********************************************************/
const content = { innerHTML: '' }
const main = e =>
    compose(setInnerHtml(e), listGroupPanel)

const list = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
]

describe('functional compositon', () => {
    require('should');
    it('can write list in DOM', () => {
        main(content)(list);
        content.innerHTML.should.be.exactly(
            '<div class="panel panel-default"><div class="panel-body"><ul class="list-group"><li class="list-group-item">Cras justo odio</li><li class="list-group-item">Dapibus ac facilisis in</li><li class="list-group-item">Morbi leo risus</li><li class="list-group-item">Porta ac consectetur ac</li><li class="list-group-item">Vestibulum at eros</li></ul></div></div>'
        );
    });
});
