import{j as s,a as o}from"./jsx-runtime-670450c2.js";import{r as f}from"./index-f1f749bf.js";import{u as g,a as x,f as v,T as y,P as k,s as T,M as b}from"./TaskList.stories-e70c2b3a.js";import{a as u}from"./index-cb54f540.js";import{w as E,a as I,b as S,f as c}from"./index-ccb202f3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";import"./Task.stories-0780c0f0.js";import"./index-96c5f47c.js";import"./index-1e115b9c.js";import"./index-078d3f98.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";function w(){const a=g(),{error:e}=x(t=>t.taskbox);return f.useEffect(()=>{a(v())},[]),e?s("div",{className:"page lists-show",children:o("div",{className:"wrapper-message",children:[s("span",{className:"icon-face-sad"}),s("p",{className:"title-message",children:"On no!"}),s("p",{className:"subtitle-message",children:"Something went wrong"})]})}):o("div",{className:"page lists-show",children:[s("nav",{children:s("h1",{className:"title-page",children:"Taskbox"})}),s(y,{})]})}w.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};const A={component:w,title:"InboxScreen",decorators:[a=>s(k,{store:T,children:a()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.json(b.tasks)))]}},play:async({canvasElement:a})=>{const e=E(a);await I(await e.findByTestId("loading")),await S(async()=>{await c.click(e.getByLabelText("pinTask-1")),await c.click(e.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(a,e,t)=>e(t.status(403)))]}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    await waitFor(async () => {
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get("https://jsonplaceholder.typicode.com/todos?userId=1", (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const C=["Default","Error"];export{r as Default,n as Error,C as __namedExportsOrder,A as default};
//# sourceMappingURL=InboxScreen.stories-f98c56c5.js.map
