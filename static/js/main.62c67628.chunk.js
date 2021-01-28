(this.webpackJsonpwilddesign=this.webpackJsonpwilddesign||[]).push([[0],{217:function(t,e,a){},218:function(t,e,a){},356:function(t,e,a){"use strict";a.r(e);var n=a(3),s=a(0),o=a.n(s),c=a(25),r=a.n(c),i=(a(217),a(26)),d=(a(218),a(394)),j=a(398),u=a(31),l=a(32),h=a(33),b=a(35),O=a(382),x=a(384),p=a(53),y=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(){return Object(u.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{title:"COVID19 daily dispatch",subheader:"Online fleeing attendant"}),Object(n.jsxs)(x.a,{children:[Object(n.jsx)(p.a,{component:"p",variant:"body2",children:"Too busy for a pneumonia, huh?"}),Object(n.jsx)(p.a,{component:"p",variant:"caption",children:"That's a place just for you! Find out the current whereabouts of Covid19 & stay safe!"})]})]})}}]),a}(o.a.Component),f=a(103),v=a(198),C=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={isIndividualCountriesDataLoaded:!1,chosenCountry:null},n.chooseCountry=n.chooseCountry.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"chooseCountry",value:function(){this.props.chooseCountry(arguments[2])}},{key:"componentDidMount",value:function(){var t=this;fetch("https://api.covid19api.com/summary").then((function(t){return t.json()})).then((function(e){var a=e.Countries.map((function(t){return{country:t.CountryCode.toLowerCase(),value:t.TotalConfirmed}}));t.setState({isIndividualCountriesDataLoaded:!0,individualCountriesData:a})}),(function(e){t.setState({isIndividualCountriesDataLoaded:!0,error:e})}))}},{key:"render",value:function(){var t=this.state,e=t.error,a=t.isIndividualCountriesDataLoaded,s=t.individualCountriesData,o=Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{title:"Total cases by country",subheader:"Worldwide"}),Object(n.jsx)(x.a,{children:Object(n.jsx)(v.a,{color:"blue",size:"lg",data:s,onClickFunction:this.chooseCountry})})]});return e?Object(n.jsxs)("div",{children:["Error: ",e.message]}):a?o:Object(n.jsx)("div",{children:"Loading..."})}}]),a}(o.a.Component),m=a(385),g=a(386),D=a(388),w=a(387),S=a(181),k=a.n(S),L=a(179),I=a.n(L),N=a(180),F=a.n(N),T=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={isWorldDataLoaded:!1,worldData:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=new Date,a=new Date(e);a.setDate(a.getDate()-1),this.date=a.toISOString().slice(0,10);var n="https://covid-api.com/api/reports/total?date="+this.date;fetch(n).then((function(t){return t.json()})).then((function(e){t.setState({isWorldDataLoaded:!0,worldData:e.data})}),(function(e){t.setState({isWorldDataLoaded:!0,error:e})}))}},{key:"render",value:function(){var t=this.state,e=t.error,a=t.isWorldDataLoaded,s=t.worldData;return e?Object(n.jsxs)("div",{children:["Error: ",e.message]}):a?Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{title:"Pandemic today",subheader:"Daily update"}),Object(n.jsx)(x.a,{children:Object(n.jsxs)(m.a,{children:[Object(n.jsxs)(g.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(I.a,{color:"primary"})}),Object(n.jsx)(D.a,{primary:(s.confirmed_diff/1e3).toFixed(1)+"k",secondary:"New cases today"})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(F.a,{color:"error"})}),Object(n.jsx)(D.a,{primary:(s.deaths_diff/1e3).toFixed(1)+"k",secondary:"Dead today"})]}),Object(n.jsxs)(g.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(k.a,{color:"action"})}),Object(n.jsx)(D.a,{primary:(s.recovered_diff/1e3).toFixed(1)+"k",secondary:"Recovered today"})]})]})})]}):Object(n.jsx)("div",{children:"Loading..."})}}]),a}(o.a.Component),P=(a(11),a(390)),W=a(397),E=a(399),M=a(389),U=a(183),_=a.n(U),B=a(184),G=a.n(B),J=a(185),K=a.n(J),Z=a(182),z=a.n(Z),A=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={isCountryChosen:!1,isCountryLoaded:!1,countryCode:null,countryName:null,countryCapital:null},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(t){var e=this;if(null==t.country||t.country!=this.props.country){var a="https://restcountries.eu/rest/v2/alpha/"+this.props.country;fetch(a).then((function(t){return t.json()})).then((function(t){e.setState({isCountryChosen:!0,isCountryLoaded:!0,countryCode:t.alpha2Code,countryName:t.name,countryCapital:t.capital,countryNativeName:t.nativeName})}),(function(t){e.setState({isCountryChosen:!0,error:t})}))}}},{key:"render",value:function(){return this.state.isCountryChosen?Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{avatar:Object(n.jsx)(E.a,{"aria-label":"Country code",children:this.state.countryCode}),action:Object(n.jsx)(M.a,{"aria-label":"settings",children:Object(n.jsx)(z.a,{})}),title:this.state.countryNativeName,subheader:this.state.countryName}),Object(n.jsx)(x.a,{children:Object(n.jsxs)(p.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital city: ",this.state.countryCapital]})}),Object(n.jsxs)(P.a,{disableSpacing:!0,children:[Object(n.jsx)(M.a,{"aria-label":"add to favorites",children:Object(n.jsx)(_.a,{})}),Object(n.jsx)(M.a,{"aria-label":"share",children:Object(n.jsx)(G.a,{})}),Object(n.jsx)(M.a,{"aria-expanded":"","aria-label":"show more",children:Object(n.jsx)(K.a,{})})]}),Object(n.jsx)(W.a,{timeout:"auto",unmountOnExit:!0})]}):Object(n.jsx)("p",{children:"Choose a country on the map!"})}}]),a}(o.a.Component),R=a(395),V=a(196),q=a(197),H=a(112),Q=a(200),X=function(t){Object(h.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(u.a)(this,a),(n=e.call(this,t)).state={isCountryChosen:!1,isCountryLoaded:!1,data:null},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(t){var e=this;if(null==t.country||t.country!==this.props.country){var a=new Date,n=new Date(a);n.setDate(n.getDate()-1);var s=n.toISOString().slice(0,10),o=new Date(a);o.setDate(o.getDate()-15);var c=o.toISOString().slice(0,10),r="https://api.covid19api.com/country/"+this.props.country+"/status/confirmed?from="+c+"T00:00:00Z&to="+s+"T00:00:00Z";fetch(r).then((function(t){return t.json()})).then((function(t){console.log(t);var a=t.map((function(t,e,a){return{nr:t.Date.slice(0,10),total:t.Cases,diff:a[e-1]?t.Cases-a[e-1].Cases:0}}));console.log(a),e.setState({isCountryChosen:!0,isCountryLoaded:!0,data:a})}),(function(t){e.setState({isCountryChosen:!0,data:[],error:t})}))}}},{key:"render",value:function(){return this.state.isCountryChosen?this.state.data.length>16?Object(n.jsx)("p",{children:"Dataset is too big! Choose another country!"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{title:"New Covid19 cases",subheader:"In previous 2 weeks"}),Object(n.jsx)(x.a,{children:Object(n.jsxs)(R.a,{width:730,height:250,data:this.state.data,margin:{top:10,right:30,left:0,bottom:0},children:[Object(n.jsxs)("defs",{children:[Object(n.jsxs)("linearGradient",{id:"colorUv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(n.jsx)("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),Object(n.jsx)("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0})]}),Object(n.jsxs)("linearGradient",{id:"colorPv",x1:"0",y1:"0",x2:"0",y2:"1",children:[Object(n.jsx)("stop",{offset:"5%",stopColor:"blue",stopOpacity:.8}),Object(n.jsx)("stop",{offset:"95%",stopColor:"#82ca9d",stopOpacity:0})]})]}),Object(n.jsx)(V.a,{dataKey:"nr"}),Object(n.jsx)(q.a,{}),Object(n.jsx)(H.a,{}),Object(n.jsx)(Q.a,{type:"monotone",dataKey:"diff",stroke:"#82ca9d",fillOpacity:1,fill:"url(#colorPv)"})]})})]}):Object(n.jsx)("p",{children:"Choose a country on the map first!"})}}]),a}(o.a.Component);var Y=function(){var t=Object(s.useState)(null),e=Object(i.a)(t,2),a=e[0],o=e[1];return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(d.a,{container:!0,spacing:2,justify:"space-around",children:[Object(n.jsx)(d.a,{item:!0,xs:11,children:Object(n.jsxs)(d.a,{container:!0,direction:"row",spacing:2,alignItems:"stretch",justify:"space-around",children:[Object(n.jsx)(d.a,{item:!0,xs:!0,sm:!0,md:!0,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(y,{})})}),Object(n.jsx)(d.a,{item:!0,xs:!0,sm:!0,md:!0,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(T,{})})}),Object(n.jsx)(d.a,{item:!0,xs:!0,sm:!0,md:!0,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(C,{chooseCountry:o})})})]})}),Object(n.jsx)(d.a,{item:!0,xs:11,children:Object(n.jsxs)(d.a,{container:!0,direction:"row",justify:"space-around",alignItems:"stretch",spacing:2,children:[Object(n.jsx)(d.a,{item:!0,xs:!0,sm:!0,md:!0,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(A,{country:a})})}),Object(n.jsx)(d.a,{item:!0,xs:!0,sm:!0,md:!0,children:Object(n.jsx)(j.a,{children:Object(n.jsx)(X,{country:a})})})]})})]})})},$=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,401)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,o=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),o(t),c(t)}))};a(355);r.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(Y,{})}),document.getElementById("root")),$()}},[[356,1,2]]]);
//# sourceMappingURL=main.62c67628.chunk.js.map