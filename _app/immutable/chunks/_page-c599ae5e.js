const o=async({params:e,fetch:t})=>({project:await(await t(`/projects/${e.project}.json`)).json()}),a=Object.freeze(Object.defineProperty({__proto__:null,load:o},Symbol.toStringTag,{value:"Module"}));export{a as _,o as l};