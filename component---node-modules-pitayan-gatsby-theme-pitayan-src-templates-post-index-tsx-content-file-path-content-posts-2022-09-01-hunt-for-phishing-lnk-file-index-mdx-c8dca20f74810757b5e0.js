"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[4224],{6651:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=a(1151),i=a(7294);function s(e){const t=Object.assign({h1:"h1",a:"a",span:"span",p:"p",h2:"h2",h3:"h3",br:"br"},(0,n.ah)(),e.components);return i.createElement(i.Fragment,null,i.createElement(t.h1,{id:"webbrowser-based-phishing-technique",style:{position:"relative"}},i.createElement(t.a,{href:"#webbrowser-based-phishing-technique","aria-label":"webbrowser based phishing technique permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Webbrowser based phishing technique"),"\n",i.createElement(t.p,null,"Phishing is one of the most dangerous and ugliest types of attacks out there, because it is based on human interaction, naiveness and error. The only reason for a computer to fail is because someone told it to - meaning errors in code or other related human misconfigurations. MFA fatigue is one ongoing way of exploiting human “weakness” as Kjetil mentioned in his blogpost relating to the Uber breach. I’m going to highlight another,  new technique demonstrated by ",i.createElement(t.a,{href:"https://mrd0x.com/phishing-with-chromium-application-mode/",target:"_blank",rel:"noreferrer"},"mr.d0x"),". And we will dive into some KQL to help you investigate this kind of attack further by hunting for the obvious relating to it."),"\n",i.createElement(t.h2,{id:"phishing-technique-walkthrough",style:{position:"relative"}},i.createElement(t.a,{href:"#phishing-technique-walkthrough","aria-label":"phishing technique walkthrough permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Phishing technique walkthrough"),"\n",i.createElement(t.p,null,"This technique uses Chromium based browsers like Google Chrome or MSEdge as a Desktop applications with local malicious login forms disguised as a trustworthy app. It all takes the form of a shortcut file, lnk, with a tiny script."),"\n",i.createElement(t.p,null,"What makes this phishing technique stealthy is that it hides it self in appearance of a regular Desktop app. Once you open the app it launches a webbrowser in app-mode, which does not have the addressbar at the top - meaning that you have one less way of approving that the site you are directed to is legitimate. You can easily design a fake address bar as well as the logo for the application, hiding everything obvious that resembles an lnk file, just like mr.d0x did in the article above."),"\n",i.createElement(t.h3,{id:"what-is-an-lnk-file",style:{position:"relative"}},i.createElement(t.a,{href:"#what-is-an-lnk-file","aria-label":"what is an lnk file permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"What is an lnk file?"),"\n",i.createElement(t.p,null,"The name kinda gives it away - it links to another file. Normally refered to as a shortcut. The actual file is stored somewhere else, and a shortcut file only points to where the data is stored. What is also worth mentioning about these files is that their extension is not showing, even if you have enabled windows to show extensions."),"\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 239px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 22.594142259414227%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAp0lEQVR42mOwt7NVVlaWk5OVBSJZWWlpaXkFBQVFBWIAw4JNh2ztHAMDgvz9fX28/by9vFRVFOXk5RVhAJ/motIKQ0MjM1NTMzMzI0NjczMzDTBQUVaGIFVVVTUcgGHF9iO2tvYQm729fT083A0M9AODQgL9fIHA28dPX0cb6BAlRSyAwd3TV1tb29DQ0MTUBEiagWxW19c3MAJyDAyMjIw1NTRwWQ4A3xY27ZrESloAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="20221014152629"\n        title=""\n        src="/static/4934eb8319fdb2c4a2f06adee89dd4d6/9a782/20221014152629.png"\n        srcset="/static/4934eb8319fdb2c4a2f06adee89dd4d6/9a782/20221014152629.png 239w"\n        sizes="(max-width: 239px) 100vw, 239px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",i.createElement(t.p,null,"This also lets us masquerade the file as whatever we want. The shortcut symbol may give it away, but this may be replaced by another symbol if you have it in a OneDrive synced folder for instance."),"\n",i.createElement(t.p,null,"The appmode mentioned belongs to Chromium browsers, which is an open source project that a lot of todays modern browsers are based upon."),"\n",i.createElement(t.p,null,"Lets create the payload as shown in the screenshot:",i.createElement(t.br),"\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 355px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 151.26760563380282%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAIAAACjcKk8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAADcUlEQVR42s1V2XLiSBDk/z9mXzdiYicWcYh7DAYhyei+7wthHQg82RLYzK5nYmKfNh2G6payu7oqs+lJTqIajixKiqzIgiQJoqrqTXN5+yWapomiqJcdCaIwStM0y7I4jhGcTqdXoChe78jzvAtuj9qghwX8wN/tdk9Pa9u2kxae607pyX7PIY5b7Blmvd5wLLtarp632yAIoygk5PyYsntmPpsrqpYmSVmWSMzQdZ7jwyBEXBQFVpFEabVaTSaTb08bZEfSLsuiqK9ZXoFT1+fLlaA72PUe4xOHPJ/PZYuqrDDEir2mrv4Ys4O9h5fyYy5Jkqbpb7+BqqqwcyloJqqEcV1XKENZlO9bfYq6rvGUkJFunmVhiNOFmALZ93zf806vBZa4/AR41JKrCkVGqqZlYRYFUxTFNEy0pjvtPc3r20M5SNplSciu42q6pusGaIHnq6KkSlKWHruivXUEEpAVbnF3Zvyjq7btEE2VRTikrcEgmc2S+cIbjUKaPi6X4YTGjDMYWFQfM+lqEVPD44vYQ5F833ccl6x2ys0/v/IUbc2+aeO50B9L1NicrRBr45nw94j/SslDWp8ttS/9ZL0jO3c17IJTEESqnuhmrBmJYaWGhWGk6bFuJoaZmXZqkpnUMMtTDnKpKqplOV0xkjTTTPNFFA+yxL4cGJ5n+BeG49mDoOgaL4rc4XCQZEGWYQTS56xFnp+aywUyRNmTJM0+Q5oR9xzxR97PSZ89zzcMXdM0OAxkWVZwBGSBzkEpDZHLTTDNHRAyIUPbURif63PXvcD3dwzDstx2u+V53vwMBrbS9Y5cRlFc38nQFqzHMHuQWY6zHcf+FyzLwhLEz1Cy67qCKPl+QDpdEmF3cuoUdmlFipw7VXbAkOwMleMrQIeQQByj57Zjw+nwumXZGGJpfKIWeMdxHA9wPTwmO4OMqdFwPJ1MaHoyndD9PqUoqmnoo+FoMBiMx/Rm8wymJIoURQ0oar5Y3M4M8s33dxtc2zojx/f74Hr318clcWld9UF+wONN8uikx5kP8n/A/438fuKP+GfkTsbXzyrW3Rz/KNgP5O5X5m6aLD9mohVtFXfJqs+yy2gBRALPtra1SKyquP1lWUare8kD4jiB59aSu+K1v+in+V6mOQt3G34ooJ+DIMB5m81mOp0ulguO474DEvuZYBLLwvwAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="20221014154415"\n        title=""\n        src="/static/4d5633bc5d8f075a20408c5226124746/ed409/20221014154415.png"\n        srcset="/static/4d5633bc5d8f075a20408c5226124746/ed409/20221014154415.png 355w"\n        sizes="(max-width: 355px) 100vw, 355px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",i.createElement(t.p,null,"Paste this snippet into the “Target” field within the shortcut files properties if you are changing a shorcut already made. If you are creating a new one, paste it into the window that appears through the wizard."),"\n",i.createElement(t.p,null,"“C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe” —app=https://www.amestofortytwo.com/"),"\n",i.createElement(t.p,null,"Here is what the output looks like once you open the file:\n",i.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 767px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 84.35462842242502%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADWUlEQVR42mWT2U9TQRTGb+m+cZeZ2/YuXe4tuLWkSgGVzeCGQcAoYCi0ogjUUlNZgsV9waiIRlJENEZaQcBSKK0goJD44JKY+Or/4xQfBD05OZklX853Mr/BhicSwfD1kvLDwTsxX/Cu1WrhrVYhJ0ew2+25ubucTkde3g6HA1Uxx87yPG+xoOQslj35+Vj/xLdrzxbrvWcia78mVn4aea7oYEVdc/NJj8ddVpqFZ8spEqWCohQUqUSVJIHZTPJca0cH1h++Guy8eKSqts7jq66tNfF8rsvlLik5VFWVt3evnCTUkFIBSgkoNQRamlYBYEIWtuW2BwKY0Wg0mUw2m9UuCqLNBlkW02kxrUai00my9TLUE1BylBQpowgtDQ08R/M8plCEensxcSNsSI1GFQQDxykgVBloFU0rIVAAoIRQjRpCiLY6g4EwGimGkep1XX19mG1TiEjMmGR6nRzXK0lcAygtsgqBGpCooq2KItCVAs/GpJJQd/dfMWprNvOFRfs83rMnGzynGr1NLefPtl041x7wtrSeb/O3tvnb/Z2NTb5T9afr6hsikchfMTKPhm+oP51KLMan5memkzNv5+LTyak372an5hbiqdRsan56bib2Nh6bXJicWlpIbRILIsMwtdU109GJ1fcf1pc/fkim15dWe3t6Hgzc+/75y9ri8nJy4VM6vZZOp97E0onEZrHAsMyJquOx0bHx0eevR54tJua+r68FOgPXroR/fFr9urq8Ph9/Pz62FH2xEn2+kpzdMjPLsseOVD69Pzh0Z+DJwL2Rh4OTo6NNjY3HKo9OjgxHhx9Hnz56NTjw8v7tsVv9s7HxLWIEX3Fxmb8j1NEe6gx0B/yXukKXa46fqD5aeb0n3Be81OUPXmhp9Tf7vNU1kaGhLU+FwiIK1h07nfmFBftLC4vLiorLd+9x7ytwV5SVHygpLXAXOJxOl8sl2sUbN29sEaPmRo5FMCoyMJMyEqdtPLCwWiOtM9EZ1DK0Aq0BYhp19z+QbBDGykgiiyCyKBLL1tsc2/jtAmHmgJVX0hCdo1s5AJhSmcHzH8Igw0hwXELgGT1BSAlyY4FLM2siiySkJIE+CWK7Jxz+3zaHbGsQjJmEmg08tRD+yT8negON2Pb4fL8BCC/07InsCucAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="20221014154259"\n        title=""\n        src="/static/7ea9c1ef38d6fa04feb0712c7098b05e/dff2b/20221014154259.png"\n        srcset="/static/7ea9c1ef38d6fa04feb0712c7098b05e/dff2b/20221014154259.png 767w"\n        sizes="(max-width: 767px) 100vw, 767px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),i.createElement(t.br),"\n","Note the minimalistic web browser view, no address bar, jpg icon, pdf extension. Also - another thing that makes it harder to spot is that Windows Taskbar displays the favicon of the webpage, not the browser icon."),"\n",i.createElement(t.p,null,"Note! This is not a well thought-through attack I’m showing (with jpg icon and pdf extension), it just shows some possibilities."),"\n",i.createElement(t.h3,{id:"kql-query-to-go-hunt-for-this-activity",style:{position:"relative"}},i.createElement(t.a,{href:"#kql-query-to-go-hunt-for-this-activity","aria-label":"kql query to go hunt for this activity permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"KQL-query to go hunt for this activity"),"\n",i.createElement(t.p,null,"Armed with some knowledge on how this exploit works, it’s time to go hunt for it. We know that it runs a command when opened - well, lets look for it. We also know what the command might contain (like browsers), and that it uses appmode (“—app”), it might reach out to the wide web (“http”). Lets limit this to use with only lnk files as well. Use this query as a starting place to dig deeper into your logs."),"\n",i.createElement(t.p,null,"DeviceFileEvents\n| where InitiatingProcessFileName has_any (“msedge”, “chrome”)\n| where InitiatingProcessCommandLine has_any (“—app”, “http”)\n| where FileName endswith “lnk”\n| project\nTimeGenerated,\nDeviceName,\nFileName,\nFolderPath,\nInitiatingProcessFolderPath,\nInitiatingProcessAccountName,\nInitiatingProcessCommandLine,\nPreviousFileName,\nMD5,\nSHA1,\nSHA256"),"\n",i.createElement(t.p,null,"The above query does not give you any answers, it just looks at indicators known to belong to this attack. It’s up to you to investigate the maliciousness of the query output. Correlating between known indicators (file-hashes, IPs…), tactics and behavior will take you far."),"\n",i.createElement(t.p,null,"A wider search option would be to search for related artefacts of this attack by this query (feel free to change what’s inside the quotes or even the tables). This query searches through all tables that starts with “Device” where “—app” is present:"),"\n",i.createElement(t.p,null,"search in (Device*) “—app”"),"\n",i.createElement(t.p,null,"You can do a search for files in the aggregated table “imFileEvent” and see if there is a mismatch between the extension of the filename and the actual filetype. Doing this I also learned that the actual file type is appended to the filename by Sentinel, which means that there will be two file extensions when viewing the logs, if the mentioned technique is being applied. Try finding this by:"),"\n",i.createElement(t.p,null,"let knownFileExts = dynamic([“pdf”, “jpg”, “txt”, “bin”, “exe”]);\nimFileEvent\n| where SourceFileExtension == “lnk”\n| extend splittedFNExt = split(SourceFileName, ”.“)\n| where splittedFNExt[-2] in (knownFileExts)"),"\n",i.createElement(t.p,null,"We are creating a dynamic variable type which we populate with a list of known fileextensions(nowhere complete). And then we limit the result from imFileEvent on the fileextension “lnk” (which we know is added inside the logs) before we split the filename, to compare the possible double fileextension based on the list of fileextensions."),"\n",i.createElement(t.p,null,"Here is a wider, yet powerfull search. Tune it to your need. This looks through every table that starts with “Device” and where any rows has “—app”. Before we shorten it down even more with “lnk” in FileName."),"\n",i.createElement(t.p,null,"search in (Device*) “—app”\n| where FileName has “lnk”"),"\n",i.createElement(t.p,null,"Another approach will be to first look for lnk files that have been downloaded, maybe coming from an email attachment in a phishing mail. Then use the filename of the downloaded lnk file for further investigation through any of the tables we have hightlighted in the query examples provided."),"\n",i.createElement(t.h2,{id:"how-do-i-protect-myself",style:{position:"relative"}},i.createElement(t.a,{href:"#how-do-i-protect-myself","aria-label":"how do i protect myself permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"How do I protect myself?"),"\n",i.createElement(t.p,null,"One case of protection is to investigate, but that is an “after the fact” protection,  to stay up front in case of an attack Microsoft has a great way of protecting you if you enable Web Protection in Defender for endpoint. To quote MS: “Web threat protection stops access to phishing sites, malware vectors, exploit sites, untrusted or low-reputation sites, as well as sites that you have blocked in your custom indicator list.”"),"\n",i.createElement(t.p,null,"Read more about Microsofts Web protection in Defender for Enpoint ",i.createElement(t.a,{href:"https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/web-threat-protection?view=o365-worldwide",target:"_blank",rel:"noreferrer"},"here")),"\n",i.createElement(t.p,null,"If you have any suggestions for improvement of this article, please let me know!"),"\n",i.createElement(t.h3,{id:"resources",style:{position:"relative"}},i.createElement(t.a,{href:"#resources","aria-label":"resources permalink",className:"heading-anchor before"},i.createElement(t.span,{dangerouslySetInnerHTML:{__html:"<span>#</span>"}})),"Resources"),"\n",i.createElement(t.p,null,"https://learn.microsoft.com/en-us/microsoft-365/security/defender/advanced-hunting-devicefileevents-table?view=o365-worldwide",i.createElement(t.br),"\n","https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/web-threat-protection?view=o365-worldwide",i.createElement(t.br),"\n","https://mrd0x.com/phishing-with-chromium-application-mode/"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?i.createElement(t,e,i.createElement(s,e)):s(e)},l=a(1883),r=a(9352),c=a(8032),m=a(7896),h=a(5916),d=a(197),p=a(5911),g=a(8762),u=a(9586),w=a(9951),f=a(9286),b=a(2271),y=a(5437),k=a(5555),E=a(5648),A=a(7660),v=a(8188);const x=e=>{let{image:t}=e;return t?i.createElement(c.G,{className:"gatsby-resp-image-image",image:t,alt:""}):null},N=e=>{let{data:{mdx:{body:t,tableOfContents:a,frontmatter:{author:s,title:o,date:N,categories:I,hero:T,description:q,keywords:M},fields:{slug:F},timeToRead:L,relatedPosts:j}},pageContext:{tableOfContentsLevels:S,previous:V,next:D},children:B}=e;const W=(0,i.useRef)(null),O=(0,c.c)(null==T?void 0:T.medium),{siteUrl:P}=(0,E.$W)(),{href:R}=(0,m.useLocation)(),z=s.map((e=>{let{id:t,yamlId:a,name:n,bio:i,sns:s}=e;return{id:t,yamlId:a,name:n,bio:i,socialUrls:s.filter((e=>"mailto"!=e[0]&&"url"!=e[0])).map((e=>A.$s[e[0]].url+"/"+e[1]))}}));return i.createElement(h.Z,{postDescription:q,pageImage:O.images.fallback.src,pageUrl:""+P+F,postTitle:o,pageTitle:o,keywords:M,date:N,timeToRead:L,authors:z},i.createElement(b.Z,{ref:W}),i.createElement("div",{className:"hidden md:block"},i.createElement(y.Z,{className:"fixed right-[6%] bottom-[6%] flex flex-col justify-center z-50"},i.createElement(w.Z,null))),i.createElement("div",{className:"max-w-lg md:max-w-2xl mx-auto mb-24"},i.createElement("h1",{className:"text-center"},o),i.createElement(d.Z,{className:"block mb-4 text-center",date:N,timeToRead:L}),i.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},i.createElement(f.Z,{data:s}),i.createElement(g.Z,{url:R,title:o,hashtags:I.join(","),description:q,className:"space-x-6 text-xl py-4 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0}))),i.createElement("div",{className:"text-center mb-24"},i.createElement(x,{image:O})),i.createElement("div",{className:"lg:grid lg:grid-cols-9 lg:gaps-5"},i.createElement(g.Z,{url:R,title:o,hashtags:I.join(","),description:q,className:"hidden lg:flex text-xl mt-12 flex-col lg:col-start-1 lg:col-end-3 top-[2rem] sticky self-start max-h-full overflow-y-auto space-y-6",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0}),i.createElement("article",{className:"markdown lg:col-start-3 lg:col-end-8",ref:W},i.createElement(n.Zo,{components:{}},B)),i.createElement(k.Z,{className:"hidden lg:block lg:col-span-2 mt-12 top-[2rem] sticky self-start text-xs font-semibold ml-12 mr-auto mb-6 overflow-y-auto max-h-full",items:a.items,ref:W,levels:S})),i.createElement("div",{className:"my-8 max-w-lg md:max-w-2xl mx-auto"},i.createElement("div",{className:"block sm:flex flex-wrap items-center justify-center sm:justify-between"},i.createElement(u.Z,{className:"my-8 justify-center",categories:I}),i.createElement(g.Z,{url:R,title:o,hashtags:I.join(","),description:q,className:"space-x-6 text-xl my-8 justify-center",twitter:!0,facebook:!0,linkedin:!0,pocket:!0,copy:!0})),i.createElement("div",{className:"flex justify-around flex-wrap text-base mt-12 mb-24"},i.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded mr-auto w-full md:w-[49%]"},i.createElement(l.Link,{to:V.slug,className:"site-link my-2 block"},i.createElement("div",{className:"flex items-start space-x-2"},i.createElement(r.YG0,{className:"block h-6 w-6"}),i.createElement("span",null,V.title)))),i.createElement("div",{className:"p-4 my-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded ml-auto w-full md:w-[49%]"},i.createElement(l.Link,{to:D.slug,className:"site-link my-2 block text-right"},i.createElement("div",{className:"flex items-start space-x-2 justify-end"},i.createElement("span",null,D.title),i.createElement(r.nzV,{className:"block h-6 w-6"}))))),i.createElement("h5",{className:"text-center mb-12"},"Written by"),s.map((e=>{let{bio:t,name:a,initial:n,avatar:s,sns:o,yamlId:l}=e;return i.createElement(p.Z,{className:"p-8 mb-4 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded",key:l,bio:t,name:a,initial:n,avatar:s,sns:o,yamlId:l})}))),i.createElement("div",{className:"my-24 max-w-lg sm:max-w-full mx-auto"},i.createElement("h5",{className:"mb-12 text-center"},"Related Posts"),i.createElement(v.Z,{posts:j,className:"grid sm:grid-cols-3 row-auto auto-cols-auto gap-8"})))};function I(e){return i.createElement(N,e,i.createElement(o,e))}}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-templates-post-index-tsx-content-file-path-content-posts-2022-09-01-hunt-for-phishing-lnk-file-index-mdx-c8dca20f74810757b5e0.js.map