(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return c});var a=r(0),n=r.n(a),o=r(197);var c=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){return n.a.createElement(o.d,{title:"Homepage",description:"Description",keywords:["keyword","things"]},n.a.createElement(o.b,null,n.a.createElement(o.a,null,n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."),n.a.createElement(o.a.FullWidth,null,"FULL WIDTH CONTENT GOES HERE"),n.a.createElement(o.a.ScreenWidth,null,"Screen WIDTH CONTENT GOES HERE"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."))))},a}(n.a.PureComponent)},192:function(e,t,r){var a;e.exports=(a=r(195))&&a.default||a},195:function(e,t,r){"use strict";r.r(t);r(19);var a=r(0),n=r.n(a),o=r(87);t.default=function(e){var t=e.location,r=e.pageResources;return r?n.a.createElement(o.a,Object.assign({location:t,pageResources:r},r.json)):null}},196:function(e){e.exports={data:{site:{siteMetadata:{title:"Leroy Wan",description:"GraphQL Everywhere~",author:"@leroywan"}}}}},197:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(61),c=r.n(o),i=(r(192),r(8).default.enqueue,n.a.createContext({}));function u(e){var t=e.staticQueryData,r=e.data,a=e.query,o=e.render,c=r?r.data:t[a]&&t[a].data;return n.a.createElement(n.a.Fragment,null,c&&o(c),!c&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,r=e.query,a=e.render,o=e.children;return n.a.createElement(i.Consumer,null,function(e){return n.a.createElement(u,{data:t,query:r,render:a||o,staticQueryData:e})})};function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.join(" ").trim()}function s(e,t){return""+e+(t.charAt(0).toUpperCase()+t.slice(1))}var m=r(198),d=r.n(m);var h=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.value,r=e.submit,a=e.uppercase,o=e.linkPath,i=void 0===o?"/":o,u=e.fullWidth,l=n.a.createElement(c.a,{className:d.a.Button,to:i},t),s=n.a.createElement("input",{className:d.a.Button,type:"submit",value:t}),m=r?s:l,h=p(d.a.ButtonWrapper,u&&d.a.fullWidth,a&&d.a.uppercase);return n.a.createElement("div",{className:h},m)},a}(n.a.PureComponent);h.Group=function(e){var t=e.children,r=e.spacing,a=e.align,o=p(d.a.ButtonGroup,r&&d.a[s("spacing",r)],a&&d.a[s("align",a)]);return n.a.createElement("div",{className:o},t)};var v=r(199),y=r.n(v);var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.direction,a=e.nowrap,o=p(y.a.Card,r&&y.a[s("direction",r)],a&&y.a.noWrap);return n.a.createElement("div",{className:y.a.CardWrapper},n.a.createElement("div",{className:o},t))},a}(n.a.PureComponent);f.Container=function(e){var t=e.children,r=e.direction,a=e.spacing,o=p(y.a.CardContainer,r&&y.a[s("direction",r)],a&&y.a[s("spacing",a)]);return n.a.createElement("div",{className:o},t)},f.Image=function(e){var t=e.children;return n.a.createElement("div",{className:y.a.CardImageWrapper},t)},f.Content=function(e){var t=e.children;return n.a.createElement("div",{className:y.a.CardContent},t)};var E=r(200),_=r.n(E);var b=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props.children;return n.a.createElement("div",{className:_.a.GridContainer},n.a.createElement("article",{className:_.a.Grid},e))},a}(n.a.PureComponent);b.FullWidth=function(e){var t=e.children;return n.a.createElement("div",{className:_.a.FullWidth},t)},b.ScreenWidth=function(e){var t=e.children;return n.a.createElement("div",{className:_.a.ScreenWidth},t)};var g=b,N=r(201),C=r.n(N);n.a.PureComponent,r(18);var j=r(193),w=r.n(j);var O=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.name,r=e.id,a=e.label,o=e.children,c=a?n.a.createElement("label",{className:w.a.Label,htmlFor:r},a):"";return n.a.createElement("div",{className:w.a.InputContainer},c,n.a.createElement("select",{name:t,id:r,className:w.a.Input+" "+w.a.Select},o))},a}(n.a.PureComponent);var k=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.name,a=e.id,o=e.type,c=void 0===o?"text":o,i=e.placeholder,u=e.label,l=e.textarea,p=u?n.a.createElement("label",{className:w.a.Label,htmlFor:a},u):"",s=n.a.createElement("textarea",{className:w.a.Textarea,id:a,name:r,placeholder:i},t),m=n.a.createElement("input",{className:w.a.Input,id:a,type:c,name:r,placeholder:i},t),d=l?s:m;return n.a.createElement("div",{className:w.a.InputContainer},p,d)},a}(n.a.PureComponent);k.Select=O;var M=r(85),P=r(202),H=r.n(P),W=r(203),S=r.n(W),L=r(204),A=r.n(L),T=r(86);var q=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var o=a.prototype;return o.handleMenuClick=function(){var e=this.props,t=e.dispatch,r=e.hamburgerMenuActive;t(Object(T.b)(!r))},o.render=function(){return n.a.createElement("div",{onClick:this.handleMenuClick.bind(this),className:A.a.HamburgerMenu},n.a.createElement("div",{className:A.a.LineTop}),n.a.createElement("div",{className:A.a.LineBottom}))},a}(n.a.PureComponent);var I=Object(M.b)(function(e){return{hamburgerMenuActive:e.toggleHamburgerMenu.hamburgerMenuActive}},null)(q);var x=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){return n.a.createElement("header",{className:S.a.Header},n.a.createElement(U,{fullHeight:!0},n.a.createElement("div",{className:S.a.HeaderContent},n.a.createElement("div",null,"Header"),n.a.createElement("div",{className:S.a.HamburgerMenuWrapper},n.a.createElement(I,null)))))},a}(n.a.PureComponent);var D=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){return n.a.createElement("div",null,"This is the footer")},a}(n.a.PureComponent);var B=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.hamburgerMenuActive,a=p(H.a.Layout,r&&H.a.hamburgerMenuActive);return n.a.createElement("div",{className:a},n.a.createElement("div",{className:H.a.Header},n.a.createElement(x,null)),n.a.createElement("div",{className:H.a.Content},n.a.createElement("p",null,""+r),t),n.a.createElement("div",{className:H.a.Footer},n.a.createElement(D,null)))},a}(n.a.PureComponent);var F=Object(M.b)(function(e){return{hamburgerMenuActive:e.toggleHamburgerMenu.hamburgerMenuActive}},null)(B),G=r(205),Q=r.n(G);var z=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.ordered,a=e.noBullets,o=void 0!==a&&a,c=e.listStyle,i=p(Q.a.List,o&&Q.a.noBullets,r&&Q.a.ordered);return r?n.a.createElement("ol",{style:{listStyleType:c},className:i},t):n.a.createElement("ul",{style:{listStyleType:c},className:i},t)},a}(n.a.PureComponent);z.Item=function(e){var t=e.children,r=e.icon,a=e.iconSize,o=p(r&&Q.a.ListItemBullet),c=a||"";return n.a.createElement("li",{className:Q.a.ListItem},n.a.createElement("span",{style:{fontSize:c},className:o},r),t)};var R=r(206),J=r.n(R);var U=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.fullHeight,a=p(J.a.MaxContentWidth,r&&J.a.fullHeight);return n.a.createElement("div",{className:a},t)},a}(n.a.PureComponent),K=r(196),V=r(207),X=r.n(V);function Y(e){var t=e.description,r=e.lang,a=e.meta,o=e.keywords,c=e.title;return n.a.createElement(l,{query:Z,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(X.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})},data:K})}Y.defaultProps={lang:"en",meta:[],keywords:[]};var Z="1025518380",$=Y;var ee=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.title,r=e.description,a=e.keywords,o=e.lang,c=e.children;return n.a.createElement("div",null,n.a.createElement($,{title:t,description:r,keywords:a,lang:o}),c)},a}(n.a.PureComponent),te=r(194),re=r.n(te);var ae=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.children,r=e.align,a=p(re.a.TextContainer,r&&re.a[s("align",r)]);return n.a.createElement("div",{className:a},t)},a}(n.a.PureComponent);var ne=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tag,r=e.uppercase,a=e.align,o=e.size;return function(e,t,r){var a,o=p(re.a.Heading,t);switch(r){case"h1":a=n.a.createElement("h1",{className:o},e);break;case"h2":a=n.a.createElement("h2",{className:o},e);break;case"h3":a=n.a.createElement("h3",{className:o},e);break;case"h4":a=n.a.createElement("h4",{className:o},e);break;case"h5":a=n.a.createElement("h5",{className:o},e);break;case"h6":a=n.a.createElement("h6",{className:o},e);break;default:a=n.a.createElement("p",{className:t},e)}return a}(e.children,p(re.a.Text,r&&re.a.uppercase,a&&re.a[s("align",a)],t&&re.a[s("tag",t)],o&&re.a[s("size",o)]),t)},a}(n.a.PureComponent);ne.Container=ae;r.d(t,"a",function(){return g}),r.d(t,"b",function(){return F}),r.d(t,"c",function(){return U}),r.d(t,"d",function(){return ee})}}]);
//# sourceMappingURL=component---src-pages-index-index-page-tsx-dfb069c514e07cb542e5.js.map