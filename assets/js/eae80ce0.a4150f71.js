"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9642],{8267:(e,n,o)=>{o.r(n),o.d(n,{CH:()=>d,assets:()=>a,chCodeConfig:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=o(4848),s=o(8453),i=o(4754);const r={title:"Authentication",sidebar_position:0,slug:"/configuration-authentication"},c=void 0,l={id:"Configuration/configuration-authentication",title:"Authentication",description:"This page may contain outdated information. It will be updated as soon as possible.",source:"@site/docs/Configuration/configuration-authentication.md",sourceDirName:"Configuration",slug:"/configuration-authentication",permalink:"/configuration-authentication",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Authentication",sidebar_position:0,slug:"/configuration-authentication"},sidebar:"defaultSidebar",previous:{title:"Project & General Settings",permalink:"/settings-project-general-settings"},next:{title:"API Keys",permalink:"/configuration-api-keys"}},a={},d={annotations:i.hk,InlineCode:i.R0,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Sign Up and Sign In",id:"f480dac5d2094d75a433de0b8e195641",level:2},{value:"Environment Variables",id:"3ed7cae6f5324ba0ac14783cf2a6cc07",level:2},{value:"LANGFLOW_AUTO_LOGIN",id:"8b10059e0fbc44f3bc8ce63fe7692e7e",level:3},{value:"LANGFLOW_SUPERUSER and LANGFLOW_SUPERUSER_PASSWORD",id:"a61a651a0fc7443a82cec93c07a14503",level:3},{value:"LANGFLOW_SECRET_KEY",id:"977aea34e6174c58bd76107990d62a1f",level:3},{value:"LANGFLOW_NEW_USER_IS_ACTIVE",id:"c8f5df9283be4e20be51e14518f5272e",level:3},{value:"Manage superusers with the CLI",id:"3b0c36a5cc0f4acc95c884d3de858d46",level:2},{value:"Sign in",id:"736ebb8c854b4c268d5e748c119a08ea",level:2},{value:"Profile settings",id:"dd5926e12471448d99bd6849d2149dc8",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return d||f("CH",!1),d.Code||f("CH.Code",!0),d.InlineCode||f("CH.InlineCode",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"This page may contain outdated information. It will be updated as soon as possible."})}),"\n",(0,t.jsx)(n.h2,{id:"f480dac5d2094d75a433de0b8e195641",children:"Sign Up and Sign In"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"The login functionality in Langflow serves to authenticate users and protect sensitive routes in the application. Starting from version 0.5, Langflow introduces an enhanced login mechanism that is governed by a few environment variables. This allows new secure features."}),"\n",(0,t.jsx)(n.h2,{id:"3ed7cae6f5324ba0ac14783cf2a6cc07",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"The following environment variables are crucial in configuring the login settings:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"}),": Determines whether Langflow should automatically log users in. Default is ",(0,t.jsx)(n.code,{children:"True"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER"}),": The username of the superuser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER_PASSWORD"}),": The password for the superuser."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SECRET_KEY"}),": A key used for encrypting the superuser's password."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_NEW_USER_IS_ACTIVE",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_NEW_USER_IS_ACTIVE"}),": Determines whether new users are automatically activated. Default is ",(0,t.jsx)(n.code,{children:"False"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["All of these variables can be passed to the CLI command ",(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"langflow run",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"langflow run"})," through the ",(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"--",props:{style:{color:"#FF7B72"}}},{content:"env",props:{style:{color:"#C9D1D9"}}},{content:"-",props:{style:{color:"#FF7B72"}}},{content:"file",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"--env-file"})," option. For example:"]}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"--env-file ",props:{style:{color:"#79C0FF"}}},{content:".env",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"It is critical not to expose these environment variables in your code repository. Always set them securely in your deployment environment, for example, using Docker secrets, Kubernetes ConfigMaps/Secrets, or dedicated secure environment configuration systems like AWS Secrets Manager."})}),"\n",(0,t.jsx)(n.h3,{id:"8b10059e0fbc44f3bc8ce63fe7692e7e",children:(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, this variable is set to ",(0,t.jsx)(n.code,{children:"True"}),". When enabled (",(0,t.jsx)(n.code,{children:"True"}),"), Langflow operates as it did in versions prior to 0.5\u2014automatic login without requiring explicit user authentication."]}),"\n",(0,t.jsx)(n.p,{children:"To disable automatic login and enforce user authentication:"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_AUTO_LOGIN",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"False",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsxs)(n.h3,{id:"a61a651a0fc7443a82cec93c07a14503",children:[(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER"})," and ",(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SUPERUSER_PASSWORD"})]}),"\n",(0,t.jsxs)(n.p,{children:["These environment variables are only relevant when ",(0,t.jsx)(n.code,{children:"LANGFLOW_AUTO_LOGIN"})," is set to ",(0,t.jsx)(n.code,{children:"False"}),". They specify the username and password for the superuser, which is essential for administrative tasks."]}),"\n",(0,t.jsx)(n.p,{children:"To create a superuser manually:"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"admin",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SUPERUSER_PASSWORD",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"securepassword",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsxs)(n.p,{children:["You can also use the CLI command ",(0,t.jsx)(n.code,{children:"langflow superuser"})," to set up a superuser interactively."]}),"\n",(0,t.jsx)(n.h3,{id:"977aea34e6174c58bd76107990d62a1f",children:(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_SECRET_KEY",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_SECRET_KEY"})}),"\n",(0,t.jsx)(n.p,{children:"This environment variable holds a secret key used for encrypting the superuser's password. Make sure to set this to a secure, randomly generated string."}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"export",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_SECRET_KEY",props:{style:{color:"#C9D1D9"}}},{content:"=",props:{style:{color:"#FF7B72"}}},{content:"randomly_generated_secure_key",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsx)(n.h3,{id:"c8f5df9283be4e20be51e14518f5272e",children:(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_NEW_USER_IS_ACTIVE",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_NEW_USER_IS_ACTIVE"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, this variable is set to ",(0,t.jsx)(n.code,{children:"False"}),". When enabled (",(0,t.jsx)(n.code,{children:"True"}),"), new users are automatically activated and can log in without requiring explicit activation by the superuser."]}),"\n",(0,t.jsx)(n.h2,{id:"3b0c36a5cc0f4acc95c884d3de858d46",children:"Manage superusers with the CLI"}),"\n",(0,t.jsx)(n.p,{children:"Langflow provides a command-line utility for managing superusers:"}),"\n",(0,t.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"langflow ",props:{style:{color:"#FFA657"}}},{content:"superuser",props:{style:{color:"#A5D6FF"}}}]}],lang:"shell"},annotations:[]}]}),"\n",(0,t.jsx)(n.p,{children:"This command prompts you to enter the username and password for the superuser, unless they are already set using environment variables."}),"\n",(0,t.jsx)(n.h2,{id:"736ebb8c854b4c268d5e748c119a08ea",children:"Sign in"}),"\n",(0,t.jsxs)(n.p,{children:["With ",(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN",props:{style:{color:"#79C0FF"}}}]}],lang:"jsx"},children:"LANGFLOW_AUTO_LOGIN"})," set to ",(0,t.jsx)(d.InlineCode,{codeConfig:h,code:{lines:[{tokens:[{content:"False",props:{style:{color:"#C9D1D9"}}}]}],lang:"jsx"},children:"False"}),", Langflow requires users to sign up before they can log in. The sign-up page is the default landing page when a user visits Langflow for the first time."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9098).A+"",width:"584",height:"832"})}),"\n",(0,t.jsx)(n.h2,{id:"dd5926e12471448d99bd6849d2149dc8",children:"Profile settings"}),"\n",(0,t.jsx)(n.p,{children:"Once signed in, you can change your profile settings by clicking on the profile icon in the top right corner of the Langflow dashboard. This opens a dropdown menu with the following options:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Admin Page"}),": Opens the admin page, which is only accessible to the superuser."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Profile Settings"}),": Opens the profile settings page."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Sign Out"}),": Logs the user out."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(9718).A+"",width:"404",height:"381"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Profile Settings"})," to change your password and your profile picture."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(7550).A+"",width:"2079",height:"721"})}),"\n",(0,t.jsxs)(n.p,{children:["Select ",(0,t.jsx)(n.strong,{children:"Admin Page"})," to manage users and groups as the superuser."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:o(7697).A+"",width:"2190",height:"1540"})})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},9098:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/1009571828-8840dd6a62739230e43b0a557518b5ff.png"},7550:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/1813063533-a712786cbca2cf05bc6778154e53ffad.png"},7697:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/383358552-b5376c867c0f56e5572991427f902303.png"},9718:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/563306242-e3f3830c789f4c5c23e6794c29c0d71d.png"}}]);