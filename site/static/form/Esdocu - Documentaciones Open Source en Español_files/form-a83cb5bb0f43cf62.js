(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{3207:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form",function(){return n(9066)}])},5769:function(e,t,n){"use strict";n.d(t,{w:function(){return d}});var r=n(4051),i=n.n(r),a=n(6690),o=n(1720),c=n(1576),s=n.n(c);function l(e,t,n,r,i,a,o){try{var c=e[a](o),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,i)}var u=function(e){var t=e.title,n=void 0===t?"Esdocu DEV News":t,r=(0,o.useRef)(null),c=(0,o.useState)(!1),u=c[0],d=c[1],m=(0,o.useState)(""),p=m[0],f=m[1],g=(0,o.useState)(!1),y=g[0],h=g[1],v=function(){var e,t=(e=i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://esdocu-newsletters.xeodev.workers.dev",{body:JSON.stringify({email:r.current.value}),headers:{"Content-Type":"application/json"},method:"POST"});case 3:return n=e.sent,e.next=6,n.json();case 6:if(!e.sent.error){e.next=11;break}return d(!0),f("\xa1Tu direcci\xf3n de correo electr\xf3nico no es v\xe1lida o ya est\xe1s suscrito!"),e.abrupt("return");case 11:r.current.value="",d(!1),h(!0),f("\xa1\xc9xito! \ud83c\udf89 Ya est\xe1s suscrito.");case 15:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){l(a,r,i,o,c,"next",e)}function c(e){l(a,r,i,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,a.BX)("div",{className:"max-w-md px-3",children:[(0,a.tZ)("div",{className:"pb-1 text-xl font-semibold uppercase text-gray-800 dark:text-gray-100",children:n}),(0,a.tZ)("div",{className:"pb-4 text-base text-gray-800 dark:text-gray-100",children:"Ent\xe9rate de todas las novedades del mundo DEV en un solo correo semanal."}),(0,a.BX)("form",{className:"flex flex-col msm:flex-row",onSubmit:v,children:[(0,a.BX)("div",{className:"w-full",children:[(0,a.tZ)("label",{className:"sr-only",htmlFor:"email-input",children:"Direcci\xf3n de email"}),(0,a.tZ)("input",{autoComplete:"email",className:"w-full rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black msm:w-72",id:"email-input",name:"email",placeholder:y?"Ahora est\xe1s suscrito! \ud83c\udf89":"Ingresa tu email",ref:r,required:!0,type:"email",disabled:y})]}),(0,a.tZ)("div",{className:"mt-2 flex w-full rounded-md shadow-sm msm:mt-0 msm:ml-3",children:(0,a.tZ)("button",{className:"w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 ".concat(y?"cursor-default":"hover:bg-primary-700 dark:hover:bg-primary-400"," focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"),type:"submit",disabled:y,children:y?"\xa1Gracias!":"Suscribirme"})})]}),u&&(0,a.tZ)("div",{className:"w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96",children:p})]})};t.Z=u;var d=function(e){var t=e.title;return(0,a.tZ)("div",{className:"flex items-center justify-center",children:(0,a.tZ)("div",{className:"bg-gray-100 p-6 dark:bg-gray-800 sm:px-14 sm:py-8",children:(0,a.tZ)(u,{title:t})})})}},9829:function(e,t,n){"use strict";n.d(t,{$t:function(){return d},TQ:function(){return u},Uy:function(){return m}});var r=n(6690),i=n(9008),a=n.n(i),o=n(1163),c=n(1576),s=n.n(c),l=function(e){var t=e.title,n=e.description,i=e.ogType,c=e.ogImage,l=e.twImage,u=e.canonicalUrl,d=e.noIndex,m=e.includeAdsense,p=(0,o.useRouter)();return(0,r.BX)(a(),{children:[(0,r.tZ)("title",{children:t}),(0,r.tZ)("meta",{name:"robots",content:d?"follow, noindex":"follow, index"}),(0,r.tZ)("meta",{name:"description",content:n}),(0,r.tZ)("meta",{property:"og:url",content:"".concat(s().siteUrl).concat(p.asPath)}),(0,r.tZ)("meta",{property:"og:type",content:i}),(0,r.tZ)("meta",{property:"og:site_name",content:s().title}),(0,r.tZ)("meta",{property:"og:description",content:n}),(0,r.tZ)("meta",{property:"og:title",content:t}),Array.isArray(c)?c.map((function(e){var t=e.url;return(0,r.tZ)("meta",{property:"og:image",content:t},t)})):(0,r.tZ)("meta",{property:"og:image",content:c},c),(0,r.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.tZ)("meta",{name:"twitter:site",content:s().twitter}),(0,r.tZ)("meta",{name:"twitter:title",content:t}),(0,r.tZ)("meta",{name:"twitter:description",content:n}),(0,r.tZ)("meta",{name:"twitter:image",content:l}),(0,r.tZ)("link",{rel:"canonical",href:u||"".concat(s().siteUrl).concat(p.asPath)}),m&&(0,r.tZ)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5376430835440290",crossOrigin:"anonymous"})]})},u=function(e){var t=e.title,n=e.description,i=e.noIndex,a=void 0!==i&&i,o=e.includeAdsense,c=void 0!==o&&o,u=s().siteUrl+s().socialBanner,d=s().siteUrl+s().socialBanner;return(0,r.tZ)(l,{title:t,description:n,ogType:"website",ogImage:u,twImage:d,noIndex:a,includeAdsense:c})},d=function(e){var t=e.title,n=e.description,i=e.noIndex,c=void 0!==i&&i,u=e.includeAdsense,d=void 0!==u&&u,m=s().siteUrl+s().socialBanner,p=s().siteUrl+s().socialBanner,f=(0,o.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:t,description:n,ogType:"website",ogImage:m,twImage:p,noIndex:c,includeAdsense:d}),(0,r.tZ)(a(),{children:(0,r.tZ)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(n," - RSS feed"),href:"".concat(s().siteUrl).concat(f.asPath,"/feed.xml")})})]})},m=function(e){var t=e.authorDetails,n=e.title,i=e.summary,o=e.date,c=e.lastmod,u=e.url,d=e.images,m=void 0===d?[]:d,p=e.canonicalUrl,f=new Date(o).toISOString(),g=new Date(c||o).toISOString(),y=(0===m.length?[s().socialBanner]:"string"===typeof m?[m]:m).map((function(e){return{"@type":"ImageObject",url:"".concat(s().siteUrl).concat(e)}})),h={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":u},headline:n,image:y,datePublished:f,dateModified:g,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:s().author},publisher:{"@type":"Organization",name:s().author,logo:{"@type":"ImageObject",url:"".concat(s().siteUrl).concat(s().siteLogo)}},description:i},v=y[0].url;return(0,r.BX)(r.HY,{children:[(0,r.tZ)(l,{title:n,description:i,ogType:"article",ogImage:y,twImage:v,canonicalUrl:p,noIndex:!1,includeAdsense:!0}),(0,r.BX)(a(),{children:[o&&(0,r.tZ)("meta",{property:"article:published_time",content:f}),c&&(0,r.tZ)("meta",{property:"article:modified_time",content:g}),(0,r.tZ)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(h,null,2)}})]})]})}},9066:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return s},default:function(){return l}});var r=n(6690),i=n(9829),a=n(1576),o=n.n(a),c=n(5769),s=!0;function l(){return(0,r.BX)(r.HY,{children:[(0,r.tZ)(i.TQ,{title:o().title,description:o().description,noIndex:!0}),""!==o().newsletter.provider&&(0,r.tZ)("div",{className:"flex items-center justify-center pt-4",children:(0,r.tZ)(c.Z,{})})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[888,179],(function(){return t=3207,e(e.s=t);var t}));var t=e.O();_N_E=t}]);