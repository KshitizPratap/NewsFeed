(this.webpackJsonpkalpas=this.webpackJsonpkalpas||[]).push([[0],{11:function(e,t,A){e.exports={ToggleContainer:"Toggle_ToggleContainer__3XGNq",ToggleButton:"Toggle_ToggleButton__1QAej",NoDisplay:"Toggle_NoDisplay__1b1Om"}},12:function(e,t,A){e.exports={FeedbackForm:"FeedbackForm_FeedbackForm__1KcO_",InputContainer:"FeedbackForm_InputContainer__1d-CF",Address:"FeedbackForm_Address__3bOqu"}},15:function(e,t,A){e.exports={Container:"name_Container__2vFKg",Heading:"name_Heading__11M94"}},16:function(e,t,A){e.exports={FeedbackContainer:"feedback_FeedbackContainer__9qL6J",ListeningContainer:"feedback_ListeningContainer__1BhbQ",BGGreen:"feedback_BGGreen__1FGM6",BGRed:"feedback_BGRed__37aRT"}},17:function(e,t,A){e.exports={Backdrop:"Backdrop_Backdrop__1LrzZ",NoDisplay:"Backdrop_NoDisplay__2gFJk"}},18:function(e,t,A){e.exports={NewsContainer:"NewsFeed_NewsContainer__dOppy",News:"NewsFeed_News__bU3R2"}},28:function(e,t,A){e.exports={Container:"sidebar_Container__1Tv-Y"}},29:function(e,t,A){e.exports={Container:"App_Container__2OXMp"}},3:function(e,t,A){e.exports={MainContainer:"NewsItemsList_MainContainer__GFcw2",NoDisplay:"NewsItemsList_NoDisplay__1jKZz",Container:"NewsItemsList_Container__1k2aL",ImgContainer:"NewsItemsList_ImgContainer__rbN1a"}},35:function(e,t,A){},4:function(e,t,A){e.exports={Maincontainer:"NewsItemsCard_Maincontainer__13HSe",Container:"NewsItemsCard_Container__2-cuN",ImgContainer:"NewsItemsCard_ImgContainer__3Jhjf",NoDisplay:"NewsItemsCard_NoDisplay__2Q3LK"}},55:function(e,t,A){"use strict";A.r(t);var n=A(1),s=A.n(n),a=A(27),r=A.n(a),o=(A(35),A(7)),i=A(8),c=A(10),j=A(9),l=A(28),d=A.n(l),P=A(15),H=A.n(P),k=A.p+"static/media/profile.c78fe6a8.jpg",D=A(0),Q=function(){return Object(D.jsxs)("div",{className:H.a.Container,children:[Object(D.jsx)("img",{src:k}),Object(D.jsxs)("div",{className:H.a.Heading,children:[Object(D.jsx)("h4",{children:"Hi Reader,"}),Object(D.jsx)("p",{children:"Here's your news"})]})]})},g=A(11),h=A.n(g),u=function(e){return Object(D.jsxs)("div",{className:e.show?h.a.NoDisplay:h.a.ToggleContainer,children:[Object(D.jsx)("h2",{children:"View Toggle"}),Object(D.jsxs)("div",{className:h.a.ToggleButton,children:[Object(D.jsx)("p",{onClick:function(){return e.ToggleHandler(1)},style:{backgroundColor:e.toggle?"transparent":"rgb(16, 18, 48)",color:e.toggle?"rgb(16, 18, 48)":"white"},children:"Card"}),Object(D.jsx)("p",{style:{backgroundColor:e.toggle?"rgb(16, 18, 48)":"transparent",color:e.toggle?"white":"rgb(16, 18, 48)"},onClick:function(){return e.ToggleHandler(2)},children:"List"})]})]})},b=A(16),w=A.n(b),G=function(e){return Object(D.jsxs)("div",{className:w.a.FeedbackContainer,children:[Object(D.jsx)("h2",{children:"Have a Feedback?"}),Object(D.jsx)("div",{className:w.a.ListeningContainer,style:{backgroundColor:e.show?"rgb(16, 18, 48)":"rgb(173, 222, 245)"},onClick:e.ModalHandler,children:Object(D.jsx)("p",{style:{color:e.show?"white":"rgb(16, 18, 48)"},children:"We're Listening!"})})]})},m=A(12),f=A.n(m),p=function(e){return Object(D.jsxs)("div",{className:f.a.FeedbackForm,style:{transform:e.show?"translateX(350px)":"translateX(-200px)"},children:[Object(D.jsx)("h2",{children:"Thank you so much taking the time!"}),Object(D.jsx)("h5",{children:"Please provide the below details!"}),Object(D.jsxs)("div",{className:f.a.InputContainer,children:[Object(D.jsx)("p",{children:"First Name:"}),Object(D.jsx)("input",{type:"text",placeholder:" John"}),Object(D.jsx)("p",{children:"Last Name:"}),Object(D.jsx)("input",{type:"text",placeholder:" Doe"}),Object(D.jsx)("p",{children:"Address:"}),Object(D.jsx)("input",{className:f.a.Address,type:"text",placeholder:" Enter your full postal address"}),Object(D.jsx)("p",{children:"Country:"}),Object(D.jsx)("input",{type:"search"}),Object(D.jsx)("p",{children:"Email Address:"}),Object(D.jsx)("input",{type:"email"}),Object(D.jsx)("p",{children:"Phone Number:"}),Object(D.jsx)("input",{type:"tel"})]})]})},v=A(17),x=A.n(v),C=function(e){var t=x.a.Backdrop;return!1===e.show&&(t=x.a.NoDisplay),Object(D.jsx)("div",{className:t,onClick:e.BackDropHandler})},O=function(e){return Object(D.jsxs)("div",{children:[Object(D.jsx)(C,{show:e.show,BackDropHandler:e.BackDropHandler}),Object(D.jsxs)("div",{className:d.a.Container,children:[Object(D.jsx)(Q,{}),Object(D.jsx)(u,{show:e.show,ToggleHandler:function(t){return e.ToggleHandler(t)},toggle:e.toggle}),Object(D.jsx)(G,{show:e.show,ModalHandler:e.ModalHandler})]}),Object(D.jsx)(p,{show:e.show})]})},N=A(29),y=A.n(N),F=A(13),L=A(18),I=A.n(L),B=A(30),M=A.n(B).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),T=A(3),K=A.n(T),W="data:image/png;base64,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",X=function(e){return Object(D.jsxs)("div",{className:e.show?K.a.MainContainer:K.a.NoDisplay,children:[Object(D.jsxs)("div",{className:K.a.Container,children:[Object(D.jsx)("h5",{children:e.newsItemList.title}),Object(D.jsx)("p",{children:e.newsItemList.body})]}),Object(D.jsx)("div",{className:K.a.ImgContainer,onClick:e.ItemHandler,children:Object(D.jsx)("img",{src:W})})]})},J=A(4),S=A.n(J),z=function(e){var t=null;t=e.newsItemList.title.length>15?e.newsItemList.title.slice(0,15)+"...":e.newsItemList.title;var A=e.newsItemList.body.slice(0,60)+"...";return Object(D.jsxs)("div",{className:e.show?S.a.Maincontainer:S.a.NoDisplay,children:[Object(D.jsx)("div",{onClick:e.ItemHandler,className:S.a.ImgContainer,children:Object(D.jsx)("img",{src:W})}),Object(D.jsxs)("div",{className:S.a.Container,children:[Object(D.jsx)("h5",{children:t}),Object(D.jsx)("p",{children:A})]})]})},R=function(e){Object(c.a)(A,e);var t=Object(j.a)(A);function A(){var e;Object(o.a)(this,A);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={news:[],toShow:[],start:0,update:!1},e.ItemHandler=function(t){var A=Object(F.a)(e.state.toShow);A[t]=!1,e.setState({toShow:A})},e.fetchMore=function(t){t.target.scrollHeight-t.target.scrollTop<=t.target.clientHeight&&e.setState({update:!0})},e}return Object(i.a)(A,[{key:"componentDidUpdate",value:function(){var e=this;console.log("[Start] "+this.state.start),this.state.update&&M.get("/posts?_start="+this.state.start+"&_limit=20").then((function(t){var A=e.state.start+20,n=[].concat(Object(F.a)(e.state.news),Object(F.a)(t.data));e.setState({news:n,update:!1,start:A})}))}},{key:"componentDidMount",value:function(){var e=this;M.get("/posts?_start="+this.state.start+"&_limit=20").then((function(t){var A=e.state.start+20;e.setState({news:t.data,start:A})})),this.setState({toShow:Array(101).fill(!0)})}},{key:"render",value:function(){var e=this;console.log(this.state.news);var t=null;return t=this.props.toggle?this.state.news.map((function(t){return Object(D.jsx)(X,{newsItemList:t,ItemHandler:function(){return e.ItemHandler(t.id)},show:e.state.toShow[t.id]},t.id)})):this.state.news.map((function(t){return Object(D.jsx)(z,{newsItemList:t,show:e.state.toShow[t.id],ItemHandler:function(){return e.ItemHandler(t.id)}},t.id)})),Object(D.jsxs)("div",{className:I.a.NewsContainer,onScroll:this.fetchMore,children:[Object(D.jsx)("h1",{children:"Here's your news"}),Object(D.jsx)("div",{className:I.a.News,children:t})]})}}]),A}(n.Component),q=R,Y=function(e){Object(c.a)(A,e);var t=Object(j.a)(A);function A(){var e;Object(o.a)(this,A);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={show:!1,toggle:!1},e.ModalHandler=function(){var t=e.state.show;e.setState({show:!t})},e.BackDropHandler=function(){e.setState({show:!1})},e.toggleHandler=function(t){var A=e.state.toggle;2===t&&!1===A?e.setState({toggle:!0}):1===t&&!0===A&&e.setState({toggle:!1})},e}return Object(i.a)(A,[{key:"render",value:function(){var e=this;return Object(D.jsxs)("div",{className:y.a.Container,children:[Object(D.jsx)(O,{show:this.state.show,BackDropHandler:function(){return e.BackDropHandler()},ModalHandler:function(){return e.ModalHandler()},ToggleHandler:function(t){return e.toggleHandler(t)},toggle:this.state.toggle}),Object(D.jsx)(q,{toggle:this.state.toggle})]})}}]),A}(n.Component),V=Y,_=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,56)).then((function(t){var A=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;A(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(D.jsx)(s.a.StrictMode,{children:Object(D.jsx)(V,{})}),document.getElementById("root")),_()}},[[55,1,2]]]);
//# sourceMappingURL=main.324a6227.chunk.js.map