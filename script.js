let t = document.body.firstElementChild.firstElementChild
console.log(t)
// document.body.firstElementChild -> div (container)
// document.body.firstElementChild.firstElementChild -> table
console.log("----------end----------")

console.log(t.rows)
/* 
HTMLCollection {0: HTMLTableRowElement, 1: HTMLTableRowElement, 2: HTMLTableRowElement, 3: HTMLTableRowElement} */
console.log("----------end----------")

console.log(t.caption)
// <caption>Table of legends</caption>
console.log("----------end----------")

console.log(t.tHead.firstElementChild)
// <tr>...</tr>
console.log("----------end----------")

console.log(t.tFoot)
// null
console.log("----------end----------")

console.log(t.tBodies)
/* 
HTMLCollection {0: HTMLTableSectionElement}
0: HTMLTableSectionElement
__proto__: HTMLCollection */
console.log("----------end----------")

console.log(t.rows[1].rowIndex)
// 1
console.log("----------end----------")

console.log(typeof document)
// object
console.log("----------end----------")

console.log(typeof window)
// object
console.log("----------end----------")