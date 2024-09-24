"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[3110],{601:(e,n,t)=>{t.r(n),t.d(n,{CH:()=>d,assets:()=>c,chCodeConfig:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(4848),s=t(8453),i=t(4754);const r={title:"Notion Conversational Agent",sidebar_position:2,slug:"/integrations/notion/notion-agent-conversational"},a=void 0,l={id:"Integrations/Notion/notion-agent-conversational",title:"Notion Conversational Agent",description:"The Notion Conversational Agent is an AI-powered assistant that interacts with your Notion workspace through natural language conversations. This flow  performs Notion-related tasks like creating pages, searching for information, and managing content, all through a chat interface.",source:"@site/docs/Integrations/Notion/notion-agent-conversational.md",sourceDirName:"Integrations/Notion",slug:"/integrations/notion/notion-agent-conversational",permalink:"/integrations/notion/notion-agent-conversational",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Notion Conversational Agent",sidebar_position:2,slug:"/integrations/notion/notion-agent-conversational"},sidebar:"defaultSidebar",previous:{title:"Notion Meeting Notes Agent",permalink:"/integrations/notion/notion-agent-meeting-notes"},next:{title:"AssemblyAI",permalink:"/integrations-assemblyai"}},c={},d={annotations:i.hk,Code:i.Cy},h={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Flow Components",id:"flow-components",level:2},{value:"Input and Output",id:"input-and-output",level:3},{value:"Language Model",id:"language-model",level:3},{value:"Agent and Tools",id:"agent-and-tools",level:3},{value:"Memory and Prompt",id:"memory-and-prompt",level:3},{value:"Run the Conversational Notion Agent",id:"run-the-conversational-notion-agent",level:2},{value:"Example Interactions",id:"example-interactions",level:2},{value:"Customization",id:"customization",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function g(e){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return d||m("CH",!1),d.Code||m("CH.Code",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,o.jsx)(n.p,{children:"The Notion Conversational Agent is an AI-powered assistant that interacts with your Notion workspace through natural language conversations. This flow  performs Notion-related tasks like creating pages, searching for information, and managing content, all through a chat interface."}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/integrations/notion/setup",children:"Notion App"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.notion.so/my-integrations",children:"Notion account and API key"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://platform.openai.com/account/api-keys",children:"OpenAI API key"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(4821).A+"",children:"Download Flow Conversation Agent Flow"}),"(Download link)"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Notion Components Toolkit",src:t(7790).A+"",width:"1188",height:"793"})}),"\n",(0,o.jsx)(n.h2,{id:"flow-components",children:"Flow Components"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"input-and-output",children:"Input and Output"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chat Input"}),": Accepts user queries and commands"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chat Output"}),": Displays the agent's responses"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"language-model",children:"Language Model"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"OpenAI Model"}),": Processes user input and generates responses"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"agent-and-tools",children:"Agent and Tools"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Tool Calling Agent"}),": Coordinates the use of various Notion tools based on user input"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Toolkit"}),": Combines multiple Notion-specific tools into a single toolkit"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Notion Tools"}),": Various components for interacting with Notion, including:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"List Users"}),"\n",(0,o.jsx)(n.li,{children:"List Database Properties"}),"\n",(0,o.jsx)(n.li,{children:"List Pages"}),"\n",(0,o.jsx)(n.li,{children:"Page Content Viewer"}),"\n",(0,o.jsx)(n.li,{children:"Create Page"}),"\n",(0,o.jsx)(n.li,{children:"Update Page Property"}),"\n",(0,o.jsx)(n.li,{children:"Add Content to Page"}),"\n",(0,o.jsx)(n.li,{children:"Search"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"memory-and-prompt",children:"Memory and Prompt"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chat Memory"}),": Stores conversation history"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Prompt"}),": Provides system instructions and context for the agent"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Current Date"}),": Supplies the current date and time for context"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"run-the-conversational-notion-agent",children:"Run the Conversational Notion Agent"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Open Langflow and create a new project."}),"\n",(0,o.jsxs)(n.li,{children:["Add the components listed above to your flow canvas, or Download the ",(0,o.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(4821).A+"",children:"Conversation Agent Flow"}),"(Download link) and ",(0,o.jsx)(n.strong,{children:"Import"})," the JSON file into Langflow."]}),"\n",(0,o.jsx)(n.li,{children:"Connect the components as shown in the flow diagram."}),"\n",(0,o.jsx)(n.li,{children:"Input the Notion and OpenAI API keys in their respective components."}),"\n",(0,o.jsx)(n.li,{children:'To start the flow, click the "Play" button in Langflow.'}),"\n",(0,o.jsxs)(n.li,{children:["In the chat interface, enter a Notion-related request or question. For example:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'"Create a new page in my task database"'}),"\n",(0,o.jsx)(n.li,{children:'"Search for pages about project management"'}),"\n",(0,o.jsx)(n.li,{children:'"List all users in my Notion workspace"'}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"The agent will process your request, use the appropriate Notion tools, and provide a response."}),"\n",(0,o.jsx)(n.li,{children:"Continue the conversation, asking follow-up questions or giving new commands as needed."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"example-interactions",children:"Example Interactions"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(d.Code,{codeConfig:h,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"User: List all the users in my Notion workspace.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Agent: Certainly! I'll use the Notion User List tool to retrieve that information for you. One moment please.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"[Agent uses the Notion User List tool]",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Here's a list of users in your Notion workspace:",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"1. John Doe (john@example.com)",props:{}}]},{tokens:[{content:"2. Jane Smith (jane@example.com)",props:{}}]},{tokens:[{content:"3. Alex Johnson (alex@example.com)",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Is there anything specific you'd like to know about these users or any other Notion-related task I can help you with?",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:'User: Create a new page in my Projects database with the title "Website Redesign".',props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Agent: Certainly! I'd be happy to create a new page in your Projects database with the title \"Website Redesign\". I'll use the Notion Page Creator tool to do this. First, let me check the properties of your Projects database to ensure we include all necessary information.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"[Agent uses the Notion Database Properties tool]",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"I've retrieved the properties for your Projects database. Now, I'll create the new page with the title \"Website Redesign\". One moment please.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"[Agent uses the Notion Page Creator tool]",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:'Great news! I\'ve successfully created a new page in your Projects database with the title "Website Redesign". Here are the details:',props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"- Title: Website Redesign",props:{}}]},{tokens:[{content:"- Page ID: [page_id_here]",props:{}}]},{tokens:[{content:"- URL: [page_url_here]",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Is there any additional information you'd like me to add to this new project page, such as a description, due date, or assigned team members?",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:'User: Yes, please add a description: "Redesign company website to improve user experience and modernize the look."',props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"Agent: Certainly! I'd be happy to add that description to the \"Website Redesign\" project page. I'll use the Add Content to Page tool to update the page with this information.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"[Agent uses the Add Content to Page tool]",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"I've successfully added the description to your \"Website Redesign\" project page. Here's a summary of what I've done:",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:'1. Located the "Website Redesign" page using the page ID from our previous interaction.',props:{}}]},{tokens:[{content:"2. Added the following content to the page:",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"   Description: Redesign company website to improve user experience and modernize the look.",props:{}}]},{tokens:[{content:"",props:{}}]},{tokens:[{content:"The description has been added as a new text block on the page. Is there anything else you'd like me to add or modify on this project page?",props:{}}]},{tokens:[{content:"",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,o.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"The flow can be customized to meet your team's specific needs."}),"\n",(0,o.jsx)(n.p,{children:"Customize this flow by:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Adjusting the system prompt to change the agent's behavior or knowledge base."}),"\n",(0,o.jsx)(n.li,{children:"Adding or removing Notion tools based on your specific needs."}),"\n",(0,o.jsx)(n.li,{children:"Modifying the OpenAI model parameters (e.g., temperature) to adjust the agent's response style."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"If you encounter issues:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Ensure all API keys are correctly set and have the necessary permissions."}),"\n",(0,o.jsx)(n.li,{children:"Check that your Notion integration has access to the relevant pages and databases."}),"\n",(0,o.jsx)(n.li,{children:"Verify that all components are properly connected in the flow."}),"\n",(0,o.jsx)(n.li,{children:"Review the Langflow logs for any error messages."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For more advanced usage and integration options, refer to the ",(0,o.jsx)(n.a,{href:"https://developers.notion.com/",children:"Notion API documentation"})," and ",(0,o.jsx)(n.a,{href:"/",children:"Langflow documentation"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4821:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/files/Conversational_Notion_Agent-2edcce5da4095a29ef9fa9faa62f8ee0.json"},7790:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/notion_conversational_agent_tools-6952705eb98e10bd4a67b74500a6189d.png"}}]);