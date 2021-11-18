(window["webpackJsonpcity-form-widget"]=window["webpackJsonpcity-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"City successfully saved","dataDeleted":"City successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"city":{"deleteDialog":{"title":"Delete city","description":"Are you sure?"},"notFound":"City not found","deleted":"City deleted","id":"ID","name":"entities.city.name"}}}')},138:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"City salvato/a con successo","dataDeleted":"City eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"city":{"deleteDialog":{"title":"Elimina city","description":"Sei sicuro/a?"},"notFound":"City non trovato/a","deleted":"City eliminato/a","id":"ID","name":"entit\xe0.city.name"}}}')},161:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(8),r=n(12),o=n(6),c=n(11),s=n(79),l=n(40),u=n(0),d=n.n(u),f=n(13),p=n.n(f),h=n(127),b=n.n(h),m=n(331),v=n(335),y=n(329),O=n(149),k=n(18),g=d.a.createContext(null),E=n(59),j=n(92),w=n(39),C={en:n(137),it:n(138)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.city.".concat(n))})}}};E.b(t)}(P)},U=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},F={tableAdd:"city.table.add",tableSelect:"city.table.select"},N={create:"city.form.create",update:"city.form.update",errorCreate:"city.form.errorCreate",errorUpdate:"city.form.errorUpdate"},A=n(15),R=n.n(A),T=n(26),M=n(20),z=n(4),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(150));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,i;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(i=Object(r.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=i.props,a=n.forwardedRef,r=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},r,{ref:a,keycloak:t}))},i}return Object(c.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return d.a.createElement(g.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},q=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},K=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/cities","/").concat(n),i=V({},q(),{method:"GET"}),e.abrupt("return",K(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/cities"),i=V({},q(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/cities"),i=V({},q(),{method:"PUT",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat("api/cities","/").concat(n),i=V({},q(),{method:"DELETE"}),e.abrupt("return",K(a,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Z=n(3),$=n(334),_=n(321),ee=n(317),te=n(5),ne=n(322),ae=n(140),ie=n.n(ae),re=n(141),oe=n.n(re),ce=n(139),se=n.n(ce),le=n(142),ue=n.n(le),de={success:se.a,error:ie.a,info:oe.a},fe={success:3e3,error:null,info:5e3},pe=function e(t){var n=t.className,a=t.classes,i=t.status,r=t.message,o=t.onClose,c=!!r,s=i||e.INFO,l=de[s],u=fe[s],f=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object(Z.a)(a.icon,a.iconStatus)}),r);return d.a.createElement($.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(_.a,{className:Object(Z.a)(a[s],n),message:f,action:[d.a.createElement(ne.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(ue.a,{className:a.icon}))]}))};pe.SUCCESS="success",pe.ERROR="error",pe.defaultProps={message:null,className:"",status:pe.INFO="info",onClose:function(){}};var he=Object(te.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:ee.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(pe),be=(L.a.shape({id:L.a.number,name:L.a.string}),L.a.shape({name:L.a.string}),L.a.shape({name:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({name:L.a.oneOfType([L.a.string,L.a.shape()])}),n(148)),me=n(151),ve=n(327),ye=n(328),Oe=n(330),ke=n(333),ge=n(326),Ee=n(324),je=n(325),we=n(323),Ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,i=n.description,r=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(we.a,{id:"confirmation-dialog-title"},a),d.a.createElement(Ee.a,null,d.a.createElement(je.a,{id:"confirmation-dialog-description"},i)),d.a.createElement(ge.a,null,d.a.createElement(ve.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(ve.a,{onClick:this.confirm,color:"primary"},r))))}}]),t}(u.PureComponent);Ce.CONFIRM="CONFIRM",Ce.DISCARD="DISCARD";var Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ce.CONFIRM:n(a)}}},{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.values,i=t.touched,r=t.errors,o=t.handleChange,c=t.handleBlur,s=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,f=t.isSubmitting,p=t.t;return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),s(e)},className:n.root,"data-testid":"city-form"},d.a.createElement(ye.a,{container:!0,spacing:2},d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(Oe.a,{id:"city-name",error:r.name&&i.name,helperText:(e="name",r[e]&&i[e]?r[e]:""),className:n.textField,onChange:o,onBlur:c,value:a.name,name:"name",label:p("entities.city.name")})),l&&d.a.createElement(Ce,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:p("entities.city.deleteDialog.title"),description:p("entities.city.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ve.a,{onClick:t,disabled:f},p("common.delete"))}}),d.a.createElement(ve.a,{onClick:u,disabled:f,"data-testid":"cancel-btn"},p("common.cancel")),d.a.createElement(ve.a,{type:"submit",color:"primary",disabled:f,"data-testid":"submit-btn"},p("common.save"))))}}]),t}(u.PureComponent);Se.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var De={name:""},Pe={mapPropsToValues:function(e){return e.city||De},enableReinitialize:!0,validationSchema:E.a().shape({name:E.c()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"CityForm"},xe=Object(me.a)(Object(te.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(be.a)(Pe))(Se),Ue=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,i=n.initialized&&n.authenticated,r=e.keycloak.authenticated!==i,o=a&&a!==e.id;i&&(o||r)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t,n,a,i,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,i=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,G(i,a);case 6:r=e.sent,this.setState((function(){return{city:r}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,i,r,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,i=n.onUpdate,r=n.keycloak,o=n.serviceUrl,!(r.initialized&&r.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,i(c),this.setState({city:c,notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,i,r,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,i=n.onDelete,r=n.keycloak,o=n.serviceUrl,!(r.initialized&&r.authenticated)){e.next=13;break}return e.prev=3,e.next=6,X(o,t.id);case 6:i(t),this.setState({city:null,notificationMessage:a("common.dataDeleted"),notificationStatus:he.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:he.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,i=t.t,r=this.state,o=r.notificationMessage,c=r.notificationStatus,s=r.city;return e="undefined"===typeof s?i("entities.city.notFound"):null===s?i("entities.city.deleted"):d.a.createElement(xe,{city:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},i("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(he,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ue.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Fe=H(Object(w.b)()(Ue)),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,i,r,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,i=n.onCreate,r=n.keycloak,o=n.serviceUrl,!(r.initialized&&r.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Y(o,t);case 6:c=e.sent,i(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:he.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:he.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,i=this.state,r=i.notificationMessage,o=i.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(xe,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(he,{status:o,message:r,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ne.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ae=H(Object(w.b)()(Ne));function Re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Re(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Re(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){return window&&window.entando&&window.entando.keycloak&&Te({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},ze={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Le=function(e){function t(){var e,n;Object(a.a)(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Me(),n.onCreate=U(N.create),n.onCancelEditing=U(N.cancelEditing),n.onDelete=U(N.delete),n.onUpdate=U(N.update),n.onErrorCreate=U(N.errorCreate),n.onErrorUpdate=U(N.errorUpdate),n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(ze).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===ze.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(k.b)(Te({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Te({},Me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Te({},Me(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=F.tableAdd,a=F.cancelEditing,i=F.create,r=F.edit,o=F.delete,c=F.tableSelect,s=F.update,l=ze.id;switch(t.type){case n:e.setAttribute(l,"");break;case r:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case i:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(ze.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(F),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(ze.serviceUrl)||"";if("true"===this.getAttribute(ze.hidden))p.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(ze.locale);x(t);var n=this.getAttribute(ze.id),a=n?d.a.createElement(Fe,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ae,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);p.a.render(d.a.createElement(g.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(y.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(ze)}}]),t}(Object(s.a)(HTMLElement));customElements.define("city-form",Le)}},[[161,1,2]]]);
//# sourceMappingURL=main.89a18743.chunk.js.map