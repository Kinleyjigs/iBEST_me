;/*FB_PKG_DELIM*/

__d("CometContextualMessage.react",["fbt","ix","CometRow.react","CometRowItem.react","FDSIcon.react","FDSTextPairing.react","FbtResultBase","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=(k||(k=d("react"))).c,m=k,n={root:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",overflowX:"x6ikm8r",overflowY:"x10wlt62",paddingTop:"x1iorvi4",paddingEnd:"x150jy0e",paddingStart:"x1e558r4",paddingBottom:"x1l90r2v",$$css:!0}},o={highlight:{backgroundColor:"xwnonoy",$$css:!0},"highlight-bg":{backgroundColor:"xfmpgtx",$$css:!0},primary:{backgroundColor:"x1jx94hy",$$css:!0},secondary:{backgroundColor:"xlhe6ec",$$css:!0}};b=m.forwardRef(a);function a(a,b){var e=l(32),f;e[0]!==a?(f=babelHelpers["extends"]({},a),e[0]=a,e[1]=f):f=e[1];a=f;var g=a.addOnPrimary,k=a.addOnSecondary,p=a.body,q=a.headline,r=a.headlineLineLimit,s=a.icon,t=a.level,u=a.meta,v=a.testid;a=a.type;t=t===void 0?3:t;a=a===void 0?"primary":a;var w=f.onClose!=null?f.onClose:null;f=f.headlineAriaLabel!=null?f.headlineAriaLabel:typeof q==="string"||q instanceof c("FbtResultBase")?q:null;var x=o[a],y;e[2]!==x?(y=(j||(j=c("stylex")))(n.root,x),e[2]=x,e[3]=y):y=e[3];e[4]!==s?(x=s!=null?m.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:m.jsx("div",{className:"x1rdy4ex",children:s})}):null,e[4]=s,e[5]=x):x=e[5];s=a==="highlight"?"white":"secondary";var z=a==="highlight"?"white":"primary";r=(r=r)!=null?r:2;var A;e[6]!==p||e[7]!==s||e[8]!==q||e[9]!==z||e[10]!==r||e[11]!==t?(A=m.jsx(c("CometRowItem.react"),{expanding:!0,children:m.jsx(c("FDSTextPairing.react"),{body:p,bodyColor:s,headline:q,headlineColor:z,headlineLineLimit:r,isSemanticHeading:!0,level:t})}),e[6]=p,e[7]=s,e[8]=q,e[9]=z,e[10]=r,e[11]=t,e[12]=A):A=e[12];e[13]!==w||e[14]!==f||e[15]!==a?(p=w!=null?m.jsx(c("CometRowItem.react"),{verticalAlign:"top",children:m.jsx("div",{className:"xcud41i x9otpla",children:m.jsx(c("FDSIcon.react"),{"aria-label":f!=null?h._("__JHASH__jdA38No1bHZ__JHASH__",[h._param("card name",f)]):h._("__JHASH__PfdWOKkgwGk__JHASH__"),color:a==="highlight"?"white":"secondary",icon:d("fbicon")._(i("478232"),16),onPress:w,size:16,testid:void 0})})}):null,e[13]=w,e[14]=f,e[15]=a,e[16]=p):p=e[16];e[17]!==x||e[18]!==A||e[19]!==p?(s=m.jsxs(c("CometRow.react"),{verticalAlign:"center",children:[x,A,p]}),e[17]=x,e[18]=A,e[19]=p,e[20]=s):s=e[20];e[21]!==u||e[22]!==t?(q=u!=null&&m.jsx(c("CometRow.react"),{paddingTop:12,children:m.jsx(c("CometRowItem.react"),{children:m.jsx(c("FDSTextPairing.react"),{level:t,meta:u})})}),e[21]=u,e[22]=t,e[23]=q):q=e[23];e[24]!==y||e[25]!==v||e[26]!==b||e[27]!==s||e[28]!==g||e[29]!==k||e[30]!==q?(z=m.jsxs("div",{className:y,"data-testid":void 0,ref:b,children:[s,g,k,q]}),e[24]=y,e[25]=v,e[26]=b,e[27]=s,e[28]=g,e[29]=k,e[30]=q,e[31]=z):z=e[31];return z}e=b;g["default"]=e}),226);
__d("Lexical",["cr:370"],(function(a,b,c,d,e,f){e.exports=b("cr:370")}),null);
__d("CometLexicalContentEditableCommands",["Lexical"],(function(a,b,c,d,e,f,g){"use strict";a=d("Lexical").createCommand();g.COMET_LEXICAL_ARIA_COMMAND=a}),98);
__d("CometLexicalEmojiNode",["Lexical"],(function(a,b,c,d,e,f,g){"use strict";var h=9;b=16;c=20;var i=16,j=function(b){babelHelpers.inheritsLoose(a,b);a.getType=function(){return"emoji"};a.clone=function(b){return new a(b.__text,b.__rawText,b.__src,b.__size,b.__key)};a.importJSON=function(a){a=k(a.text,a.rawText,a.src,a.size);return a};var c=a.prototype;c.exportJSON=function(){return babelHelpers["extends"]({},b.prototype.exportJSON.call(this),{rawText:this.__rawText,size:this.__size,src:this.__src,type:"emoji"})};function a(a,c,d,e,f){e===void 0&&(e=i);a=b.call(this,a,f)||this;a.__src=d;a.__rawText=c;a.__size=e;return a}c.getRawText=function(){var a=this.getLatest();return a.__rawText};c.createDOM=function(){var a=this.__text,b=this.__size,c=this.__src,d=document.createElement("span"),e=document.createElement("span"),f=d.style;f.cursor="default";d.className="x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xcwd3tp xat24cr x39eecv x2b8uid";d.setAttribute("data-testid","emoji");c!=null&&(f.backgroundImage="url("+c+")",f.backgroundSize=b+"px "+b+"px");a!==this.__rawText&&(d.style.width="calc("+b+"px + 0.3em)",d.style.height=b+"px",d.className="x1xsqp64 xiy17q3 x1o6pynw x19co3pv xdj266r xcwd3tp xat24cr x39eecv x2b8uid x1rg5ohu x6ikm8r x10wlt62 xmziwt1 xuxw1ft",d.setAttribute("spellcheck","false"),e.style.fontFamily='Courier, "Courier New", Menlo, Monaco, monospace',e.style.fontSize="15px",e.style.letterSpacing=b/(h*a.length)-1+"ch");e.textContent=a;e.className="xexx8yu xn5pp95 x18d9i69 x2fxd7x x3jgonx x1bhl96m";d.appendChild(e);return d};c.updateDOM=function(a,b){a=b.firstChild;if(a==null)return!0;var c=this.__text;a.textContent!==c&&(a.textContent=c);b.style.backgroundSize=this.__size+"px "+this.__size+"px";return!1};c.setSize=function(a){var b=this.getWritable();b.__size=a};c.selectionTransform=function(a,b){var c=this.__text;if(c===this.__rawText||!d("Lexical").$isRangeSelection(a)||a.is(b))return;a=a.focus;var e=b.focus,f=c.length,g=b.isCollapsed();if(e.offset===0||e.offset===c.length||a.is(e))return;a.isBefore(e)?e.set(e.key,f,"text"):e.set(e.key,0,"text");g&&b.anchor.set(e.key,e.offset,"text")};return a}(d("Lexical").TextNode);function a(a){return a instanceof j}function k(a,b,c,d){return new j(a,b,c,d).setMode("token")}g.UFI_EMOJI_SIZE=b;g.COMPOSER_EMOJI_SIZE_LARGE=c;g.COMPOSER_EMOJI_SIZE_SMALL=i;g.EmojiNode=j;g.$isEmojiNode=a;g.$createEmojiNode=k}),98);
__d("CometLexicalEntityTextNode",["Lexical","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var d=a.prototype;d.getEntity=function(){throw c("unrecoverableViolation")("CometLexicalEntityTextNode does not implement getEntity","ufi2")};return a}(d("Lexical").TextNode);function a(a){return a instanceof h}g.CometLexicalEntityTextNode=h;g.isCometLexicalEntityTextNode=a}),98);
__d("CometLexicalGenericEntityNode",["CometLexicalEntityTextNode"],(function(a,b,c,d,e,f,g){"use strict";var h=function(b){babelHelpers.inheritsLoose(a,b);a.getType=function(){return"actor"};a.clone=function(b){var c;return new a({id:b.__id,text:b.__text,type:b.__entityType,uri:(c=b.__uri)!=null?c:void 0},b.__key)};a.importJSON=function(a){return i({id:a.id,text:a.text,type:a.entityType,uri:(a=a.uri)!=null?a:void 0})};var c=a.prototype;c.exportJSON=function(){return babelHelpers["extends"]({},b.prototype.exportJSON.call(this),{entityType:this.__entityType,id:this.__id,type:"actor",uri:this.__uri})};function a(a,c){var d="",e="Actor",f=void 0,g="";a!==void 0&&(d=a.id,e=a.type,f=a.uri,g=a.text);a=b.call(this,g,c)||this;a.__id=d;a.__entityType=e;a.__uri=f;return a}c.createDOM=function(a){a=b.prototype.createDOM.call(this,a);a.className="xv78j7m";a.spellcheck=!1;return a};c.getEntity=function(){var a=this.__uri!=null?{uri:this.__uri}:null;return babelHelpers["extends"]({__UFI__:!0,id:this.__id,isWeak:!1,type:this.__entityType},a)};c.getEntityType=function(){return this.__entityType};c.getID=function(){return this.__id};return a}(d("CometLexicalEntityTextNode").CometLexicalEntityTextNode);function i(a){return new h(a).setMode("segmented").toggleDirectionless()}function a(a){return a instanceof h}g.CometLexicalGenericEntityNode=h;g.$createCometLexicalGenericEntityNode=i;g.$isCometLexicalGenericEntityNode=a}),98);
__d("CometLexicalPlaceholder.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={placeholder:{color:"xi81zsa",start:"x17qophe",overflowX:"x6ikm8r",overflowY:"x10wlt62",pointerEvents:"x47corl",position:"x10l6tqk",textOverflow:"xlyipyv",top:"x13vifvy",userSelect:"x87ps6o",whiteSpace:"xuxw1ft",width:"xh8yej3",$$css:!0}};function a(a){var b=j(5),d=a.children;a=a.xstyle;var e;b[0]!==a?(e=(h||(h=c("stylex")))(l.placeholder,a),b[0]=a,b[1]=e):e=b[1];b[2]!==d||b[3]!==e?(a=k.jsx("div",{children:d,className:e}),b[2]=d,b[3]=e,b[4]=a):a=b[4];return a}g["default"]=a}),98);
__d("CometSearchMatchedTermsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={matches:[]};c=a.createContext(b);g["default"]=c}),98);
__d("CometUFICommentScrollOptionsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={behavior:"smooth",verticalAlign:"center"};c=a.createContext({scrollAnchorOptions:babelHelpers["extends"]({},b),scrollIntoViewOptions:babelHelpers["extends"]({},b)});g["default"]=c}),98);
__d("CometUFICommentsAPIConnectionCountUpdater",["FBLogger","isStringNullOrEmpty"],(function(a,b,c,d,e,f,g){"use strict";function h(a){var b=a.feedbackId,d=a.feedLocation,e=a.focusCommentID,f=a.modifier,g=a.selectedIntentToken,h=a.store,i=a.topLevelFeedbackId;a=a.totalCommentCountModifier;var j=b;c("isStringNullOrEmpty")(i)||(j=i);var k=f;a!=null&&a!==0&&(k=a);function l(a){c("FBLogger")("ufi2").addMetadata("UFI","FEEDBACK_TARGET_ID",j||"UNKNOWN").addMetadata("UFI","RAW_DATA","comment_feedback_id;"+(b||"UNKNOWN")+", comments_count_modifier;"+k+", conn_count_modifier;"+f).warn(a)}i=h.get(b);if(i==null){l("could not find feedback record");return}a=h.get(j);if(a==null){l("could not find top level feedback record");return}if(j!==b){l=a==null?void 0:(h=a.getLinkedRecord("comment_rendering_instance",{scenario:"WWW_FEED_TOTAL_COUNT_SCENARIO_V1"}))==null?void 0:h.getLinkedRecord("comments");h=Number((h=l==null?void 0:l.getValue("total_count"))!=null?h:0);h=Math.max(0,h+k);l==null?void 0:l.setValue(h,"total_count")}h=(l=a.getLinkedRecord("comment_rendering_instance_for_feed_location",{focused_comment_id:e,intent_token:g,location:d}))!=null?l:a.getLinkedRecord("comment_rendering_instance_for_feed_location",{focused_comment_id:e,location:d});g=h==null?void 0:h.getLinkedRecord("comments");l=Number(g==null?void 0:g.getValue("count"));a=Number(g==null?void 0:g.getValue("total_count"));g==null?void 0:g.setValue(l+f,"count");g==null?void 0:g.setValue(a+k,"total_count");e=i==null?void 0:i.getLinkedRecord("replies");d=Number(e==null?void 0:e.getValue("count"));e==null?void 0:e.setValue(d+f,"count");l=(h=i.getLinkedRecord("parent_object_ent"))==null?void 0:h.getLinkedRecord("parent_feedback");g=l==null?void 0:l.getLinkedRecord("replies");a=Number(g==null?void 0:g.getValue("count"));g==null?void 0:g.setValue(a+f,"count")}h.decrement=function(a){return h(babelHelpers["extends"]({},a,{modifier:-1}))};h.increment=function(a){return h(babelHelpers["extends"]({},a,{modifier:1}))};a=h;g["default"]=a}),98);
__d("CometUFIComposerPreviewArea.react",["ix","TetraCircleButton.react","fbicon","react","useTriggerAccessibilityAlert"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.c;function a(a){var b=k(27),e,f,g,i,l,m,n;b[0]!==a?(g=a.children,i=a.isDisabled,l=a.label,e=a.onRemove,f=a.removeAnnouncement,n=a.testid,m=babelHelpers.objectWithoutPropertiesLoose(a,["children","isDisabled","label","onRemove","removeAnnouncement","testid"]),b[0]=a,b[1]=e,b[2]=f,b[3]=g,b[4]=i,b[5]=l,b[6]=m,b[7]=n):(e=b[1],f=b[2],g=b[3],i=b[4],l=b[5],m=b[6],n=b[7]);var o=c("useTriggerAccessibilityAlert")();b[8]!==e||b[9]!==f||b[10]!==o?(a=function(){e(),f!=null&&o(f)},b[8]=e,b[9]=f,b[10]=o,b[11]=a):a=b[11];a=a;var p;b[12]===Symbol["for"]("react.memo_cache_sentinel")?(p="x1qjc9v5 x2bj2ny x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1q0g3np x1iyjqo2 xs83m0k xat24cr x11i5rnm x1mh8g0r x1xmf6yo x16suv20 xeuugli x1y1aw1k xwib8y2 x4uap5 xkhd6sd x1n2onr6 x1ja2u2z",b[12]=p):p=b[12];var q;b[13]===Symbol["for"]("react.memo_cache_sentinel")?(q="x193iq5w xurb0ha x1sxyh0",b[13]=q):q=b[13];b[14]!==g?(q=j.jsx("div",{className:q,children:g}),b[14]=g,b[15]=q):q=b[15];b[16]===Symbol["for"]("react.memo_cache_sentinel")?(g="x1sxyh0",b[16]=g):g=b[16];var r;b[17]===Symbol["for"]("react.memo_cache_sentinel")?(r=d("fbicon")._(h("478231"),12),b[17]=r):r=b[17];b[18]!==i||b[19]!==l||b[20]!==a?(g=j.jsx("div",{className:g,children:j.jsx(c("TetraCircleButton.react"),{disabled:i,icon:r,label:l,onPress:a,size:24,testid:void 0})}),b[18]=i,b[19]=l,b[20]=a,b[21]=g):g=b[21];b[22]!==m||b[23]!==n||b[24]!==q||b[25]!==g?(r=j.jsxs("div",babelHelpers["extends"]({},m,{className:p,"data-testid":void 0,children:[q,g]})),b[22]=m,b[23]=n,b[24]=q,b[25]=g,b[26]=r):r=b[26];return r}g["default"]=a}),98);
__d("CometUFIConversationGuideContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({addGiphyStickerToComposer:function(){},addStickerToComposer:function(){},getIsComposerEmpty:function(){return!1},onComposerEmptyStateChange:function(){},setAddGiphyStickerToComposer:function(){},setAddStickerToComposer:function(){},setGetIsComposerEmpty:function(){},setOnComposerEmptyStateChange:function(){},setWriteToComposer:function(){},unsetAddGiphyStickerToComposer:function(){},unsetAddStickerToComposer:function(){},unsetOnComposerEmptyStateChange:function(){},unsetWriteToComposer:function(){},writeToComposer:function(){}});g["default"]=b}),98);
__d("CometUFIConversationGuideLoggingContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({callerID:"",defaultValue:!0,guideShown:null,sessionID:null,setGuideShown:function(){}});g["default"]=b}),98);
__d("ConversationGuideSuggestionSelectedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2132");b=d("FalcoLoggerInternal").create("conversation_guide_suggestion_selected",a);e=b;g["default"]=e}),98);
__d("ConversationGuideSuggestionVpvFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2133");b=d("FalcoLoggerInternal").create("conversation_guide_suggestion_vpv",a);e=b;g["default"]=e}),98);
__d("CometUFIConversationGuideUtils",["ConversationGuideSuggestionSelectedFalcoEvent","ConversationGuideSuggestionVpvFalcoEvent","FBLogger","XPlatReactEnvironment"],(function(a,b,c,d,e,f,g){"use strict";e=d("XPlatReactEnvironment").isWeb()?"comet_above_composer":"fbvr_above_composer";var h={surface:"comment_composer"};function a(a){c("ConversationGuideSuggestionSelectedFalcoEvent").log(function(){return i(a)})}function b(a){c("ConversationGuideSuggestionVpvFalcoEvent").log(function(){return i(a)})}function i(a){var b=a.callerID,d=a.feedbackID,e=a.id,f=a.index,g=a.sessionID;a=a.suggestionType;if(g==null){var i=c("FBLogger")("conversation_guide");i.mustfix("Logged Comet Conversation Guide event without specifying session ID")}return babelHelpers["extends"]({caller_id:b,feedback_id:d,session_id:g,suggestion_id:e,suggestion_index:f.toString(),suggestion_type:a},h)}g.CALLER_ID=e;g.COMMON_LOGGING_VALUES=h;g.logSuggestionSelected=a;g.logSuggestionImpression=b}),98);
__d("CometUFIModernCommentListContextProvider",["react","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));e=h;var j=e.useContext;e.useMemo;var k=e.c,l=i.createContext({canViewerComment:!1,connectionID:null,editingCommentID:null,feedbackSource:1,feedLocation:"NEWSFEED",focusCommentID:null,handleCreateCommentProps:{onCommit:function(){},setError:function(){},setLocallyComposedCommentIds:function(){}},isInline:!1,isLiveVODCommentList:!1,locallyComposedCommentIds:new Set(),onComposerFocusCallback:function(){},onEditCommentError:function(){},onTranslateAllClick:function(){},realtimeCommentIds:new Set(),renderedTranslationCommentID:null,selectedIntentToken:null,setEditingCommentID:function(){},setRenderedTranslationCommentID:function(){},shouldDisplayInReverse:!1,shouldRequestTranslationForAllComments:!1,storyRenderLocation:"permalink",threadingEnabled:!1,topLevelFeedbackID:null,useDefaultActor:!1});function a(a){var b,d,e,f,g,h,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A=k(27),B=a.children,C=a.connectionID,D=a.contextValues;a=a.depth;var E=j(l);if(a===0&&D==null)throw c("unrecoverableViolation")("CometUFIModernCommentListContextProvider: no context value provided for depth 0 comment list.`","modern-ufi");if(a>0&&D!=null)throw c("unrecoverableViolation")("Depth "+a+" list passed a nonnull context value, but this should only happen at depth 0","modern-ufi");D==null?void 0:D.canViewerComment;D==null?void 0:D.editingCommentID;D==null?void 0:D.feedLocation;D==null?void 0:D.feedbackSource;D==null?void 0:D.focusCommentID;D==null?void 0:D.handleCreateCommentProps;D==null?void 0:D.isLiveVODCommentList;D==null?void 0:D.locallyComposedCommentIds;D==null?void 0:D.onComposerFocusCallback;D==null?void 0:D.onEditCommentError;D==null?void 0:D.onTranslateAllClick;D==null?void 0:D.realtimeCommentIds;D==null?void 0:D.renderedTranslationCommentID;D==null?void 0:D.selectedIntentToken;D==null?void 0:D.setEditingCommentID;D==null?void 0:D.setRenderedTranslationCommentID;D==null?void 0:D.shouldDisplayInReverse;D==null?void 0:D.shouldRequestTranslationForAllComments;D==null?void 0:D.storyRenderLocation;D==null?void 0:D.threadingEnabled;D==null?void 0:D.topLevelFeedbackID;D==null?void 0:D.useDefaultActor;a=(a=D==null?void 0:D.canViewerComment)!=null?a:E.canViewerComment;C=(C=C)!=null?C:E.connectionID;b=(b=D==null?void 0:D.editingCommentID)!=null?b:E.editingCommentID;d=(d=D==null?void 0:D.feedbackSource)!=null?d:E.feedbackSource;e=(e=D==null?void 0:D.feedLocation)!=null?e:E.feedLocation;f=(f=D==null?void 0:D.focusCommentID)!=null?f:E.focusCommentID;g=(g=D==null?void 0:D.handleCreateCommentProps)!=null?g:E.handleCreateCommentProps;h=(h=D==null?void 0:D.isLiveVODCommentList)!=null?h:E.isLiveVODCommentList;m=(m=D==null?void 0:D.locallyComposedCommentIds)!=null?m:E.locallyComposedCommentIds;n=(n=D==null?void 0:D.onComposerFocusCallback)!=null?n:E.onComposerFocusCallback;o=(o=D==null?void 0:D.onEditCommentError)!=null?o:E.onEditCommentError;p=(p=D==null?void 0:D.onTranslateAllClick)!=null?p:E.onTranslateAllClick;q=(q=D==null?void 0:D.realtimeCommentIds)!=null?q:E.realtimeCommentIds;r=(r=D==null?void 0:D.renderedTranslationCommentID)!=null?r:E.renderedTranslationCommentID;s=(s=D==null?void 0:D.selectedIntentToken)!=null?s:E.selectedIntentToken;t=(t=D==null?void 0:D.setEditingCommentID)!=null?t:E.setEditingCommentID;u=(u=D==null?void 0:D.setRenderedTranslationCommentID)!=null?u:E.setRenderedTranslationCommentID;v=(v=D==null?void 0:D.shouldDisplayInReverse)!=null?v:E.shouldDisplayInReverse;w=(w=D==null?void 0:D.shouldRequestTranslationForAllComments)!=null?w:E.shouldRequestTranslationForAllComments;x=(x=D==null?void 0:D.storyRenderLocation)!=null?x:E.storyRenderLocation;y=(y=D==null?void 0:D.threadingEnabled)!=null?y:E.threadingEnabled;z=(z=D==null?void 0:D.topLevelFeedbackID)!=null?z:E.topLevelFeedbackID;D=(D=D==null?void 0:D.useDefaultActor)!=null?D:E.useDefaultActor;A[0]!==a||A[1]!==C||A[2]!==b||A[3]!==d||A[4]!==e||A[5]!==f||A[6]!==g||A[7]!==h||A[8]!==m||A[9]!==n||A[10]!==o||A[11]!==p||A[12]!==q||A[13]!==r||A[14]!==s||A[15]!==t||A[16]!==u||A[17]!==v||A[18]!==w||A[19]!==x||A[20]!==y||A[21]!==z||A[22]!==D?(E={canViewerComment:a,connectionID:C,editingCommentID:b,feedbackSource:d,feedLocation:e,focusCommentID:f,handleCreateCommentProps:g,isLiveVODCommentList:h,locallyComposedCommentIds:m,onComposerFocusCallback:n,onEditCommentError:o,onTranslateAllClick:p,realtimeCommentIds:q,renderedTranslationCommentID:r,selectedIntentToken:s,setEditingCommentID:t,setRenderedTranslationCommentID:u,shouldDisplayInReverse:v,shouldRequestTranslationForAllComments:w,storyRenderLocation:x,threadingEnabled:y,topLevelFeedbackID:z,useDefaultActor:D},A[0]=a,A[1]=C,A[2]=b,A[3]=d,A[4]=e,A[5]=f,A[6]=g,A[7]=h,A[8]=m,A[9]=n,A[10]=o,A[11]=p,A[12]=q,A[13]=r,A[14]=s,A[15]=t,A[16]=u,A[17]=v,A[18]=w,A[19]=x,A[20]=y,A[21]=z,A[22]=D,A[23]=E):E=A[23];a=E;C=a;A[24]!==C||A[25]!==B?(b=i.jsx(l.Provider,{value:C,children:B}),A[24]=C,A[25]=B,A[26]=b):b=A[26];return b}function b(){return j(l)}g.CometUFIModernCommentListContext=l;g.CometUFIModernCommentListContextProvider=a;g.useCometUFIModernCommentListContext=b}),98);
__d("TrustedTypesNoOpPolicy_DO_NOT_USE",["TrustedTypes","TrustedTypesUtils"],(function(a,b,c,d,e,f,g){"use strict";a={createScriptURL:d("TrustedTypesUtils").noop,createHTML:d("TrustedTypesUtils").noop,createScript:d("TrustedTypesUtils").noop};b=c("TrustedTypes").createPolicy("noop-do-not-use",a);e=b;g["default"]=e}),98);
__d("TrustedTypesLinkTagHTMLPolicy",["TrustedTypes","err"],(function(a,b,c,d,e,f,g){"use strict";a={createHTML:function(a){if(a==="<link />")return a;throw c("err")("Violating Trusted Type policies. Only works for '<link />' strings.")}};b=c("TrustedTypes").createPolicy("link-tag-html",a);d=b;g["default"]=d}),98);
__d("getMarkupWrap",["invariant","ExecutionEnvironment","TrustedTypesLinkTagHTMLPolicy"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k={};b=[1,'<select multiple="true">',"</select>"];d=[1,"<table>","</table>"];e=[3,"<table><tbody><tr>","</tr></tbody></table>"];var l=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],m={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:b,option:b,caption:d,colgroup:d,tbody:d,tfoot:d,thead:d,td:e,th:e};f=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];f.forEach(function(a){m[a]=l,k[a]=!0});function a(a){a=a;!j&&h(0,144);Object.prototype.hasOwnProperty.call(m,a)||(a="*");Object.prototype.hasOwnProperty.call(k,a)||(a==="*"?j.innerHTML=c("TrustedTypesLinkTagHTMLPolicy").createHTML("<link />"):j.innerHTML="<"+a+"></"+a+">",k[a]=!j.firstChild);return k[a]?m[a]:null}g["default"]=a}),98);
__d("createNodesFromMarkup",["invariant","ExecutionEnvironment","TrustedTypesNoOpPolicy_DO_NOT_USE","getMarkupWrap"],(function(a,b,c,d,e,f,g,h){var i,j=(i||c("ExecutionEnvironment")).canUseDOM?document.createElement("div"):null,k=/^\s*<(\w+)/;function l(a){a=a.match(k);return a&&a[1].toLowerCase()}function a(a,b){var d=j;!j&&h(0,5001);var e=l(a);e=e&&c("getMarkupWrap")(e);if(e){d.innerHTML=e[1]+a+e[2];e=e[0];while(e--)d=d.lastChild}else d.innerHTML=c("TrustedTypesNoOpPolicy_DO_NOT_USE").createHTML(a);e=d.getElementsByTagName("script");e.length&&(b||h(0,5002),Array.from(e).forEach(b));a=Array.from(d.childNodes);while(d.lastChild)d.removeChild(d.lastChild);return a}g["default"]=a}),98);
__d("evalGlobal",[],(function(a,b,c,d,e,f){function a(a){if(typeof a!=="string")throw new TypeError("JS sent to evalGlobal is not a string. Only strings are permitted.");if(!a)return;var b=document.createElement("script");try{b.appendChild(document.createTextNode(a))}catch(c){b.text=a}a=document.getElementsByTagName("head")[0]||document.documentElement;a.appendChild(b);a.removeChild(b)}f["default"]=a}),66);
__d("HTML",["invariant","Bootloader","FBLogger","createNodesFromMarkup","emptyFunction","evalGlobal"],(function(a,b,c,d,e,f,g){var h=/(<(\w+)[^>]*?)\/>/g,i={abbr:!0,area:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0};a=function(){"use strict";function a(c){c&&typeof c.__html==="string"&&(c=c.__html);if(!(this instanceof a))return c instanceof a?c:new a(c);if(c){var d=typeof c;d==="string"||g(0,277,d)}this._markup=c||"";this._defer=!1;this._nodes=null;this._inlineJS=b("emptyFunction");this._rootNode=null;this._hasInlineJs=!1}var c=a.prototype;c.toString=function(){return this._markup};c.getContent=function(){return this._markup};c.getNodes=function(){this._fillCache();return this._nodes};c.getRootNode=function(){this._rootNode&&g(0,278);var a=this.getNodes();if(a.length===1)this._rootNode=a[0];else{var b=document.createDocumentFragment();for(var c=0;c<a.length;c++)b.appendChild(a[c]);this._rootNode=b}return this._rootNode};c.getAction=function(){var a=this;this._fillCache();var b=function(){a._inlineJS()};return this._defer?function(){setTimeout(b,0)}:b};c._fillCache=function(){if(this._nodes!==null)return;if(!this._markup){this._nodes=[];return}var a=this._markup.replace(h,function(a,b,c){return i[c.toLowerCase()]?a:b+"></"+c+">"}),c=null;a=b("createNodesFromMarkup")(a,function(a){b("FBLogger")("staticresources").warn("HTML: encountered script node while parsing, hasSrc=%s, type=%s",Boolean(a.src),a.type==null||a.type===""?"<unknown>":a.type),a.type!=="application/ld+json"&&a.type!=="application/json"&&(c=c||[],c.push(a.src?b("Bootloader").requestJSResource_UNSAFE_NEEDS_REVIEW_BY_SECURITY_AND_XFN.bind(b("Bootloader"),a.src):b("evalGlobal").bind(null,a.innerHTML)),a.parentNode.removeChild(a))});c&&(this._hasInlineJs=!0,this._inlineJS=function(){for(var a=0;a<c.length;a++)c[a]()});this._nodes=a};c.setDeferred=function(a){this._defer=!!a;return this};c.hasInlineJs=function(){return this._hasInlineJs};a.isHTML=function(b){return!!b&&(b instanceof a||b.__html!==void 0)};a.replaceJSONWrapper=function(b){return b&&b.__html!==void 0?new a(b.__html):b};return a}();e.exports=a}),null);
__d("LexicalComposerContext",["cr:509"],(function(a,b,c,d,e,f){e.exports=b("cr:509")}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @generated
 * @noflow
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalComposerContext.prod",["react"],(function $module_LexicalComposerContext_prod(global,require,requireDynamic,requireLazy,module,exports){

'use strict';var _require_closure_react;var d=_require_closure_react||(_require_closure_react=require("react")),e;function f(a){var c=new URLSearchParams();c.append("code",a);for(var b=1;b<arguments.length;b++){c.append("v",arguments[b]);}throw Error("Minified Lexical error #"+a+"; visit https://lexical.dev/docs/error?"+c+" for the full message or "+"use the non-minified dev environment for full errors and additional helpful warnings.");}e=f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f["default"]:f;var g=d.createContext(null);
exports.LexicalComposerContext=g;exports.createLexicalComposerContext=function(a,c){var b=null;null!=a&&(b=a[1]);return{getTheme:function getTheme(){return null!=c?c:null!=b?b.getTheme():null;}};};exports.useLexicalComposerContext=function(){var a=d.useContext(g);null==a&&e(8);return a;};}),null);
__d("LexicalHashtag",["cr:2139"],(function(a,b,c,d,e,f){e.exports=b("cr:2139")}),null);
__d("LexicalLink",["cr:2905"],(function(a,b,c,d,e,f){e.exports=b("cr:2905")}),null);
__d("LexicalText",["cr:2181"],(function(a,b,c,d,e,f){e.exports=b("cr:2181")}),null);
__d("LexicalUtils",["cr:2774"],(function(a,b,c,d,e,f){e.exports=b("cr:2774")}),null);
__d("MLCCharacterLimitCountPlugin.react",["LexicalComposerContext","LexicalText","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useEffect,j=function(a){return a.length};function a(a){var b=a.editor__DEPRECATED,c=a.limit,e=a.onChange;a=a.strlen;var f=a===void 0?j:a,g;if(b)g=b;else{a=d("LexicalComposerContext").useLexicalComposerContext();g=a[0]}i(function(){var a=g.getEditorState().read(function(){return c-f(d("LexicalText").$rootTextContent())});e(a);return g.registerTextContentListener(function(a){a=c-f(a);e(a)})},[g,c,e,f]);return null}g["default"]=a}),98);
__d("MLCInstrumentationCommands",["Lexical"],(function(a,b,c,d,e,f,g){"use strict";b=(a=d("Lexical")).createCommand();c=a.createCommand();e=a.createCommand();f=a.createCommand();g.COMMIT_COMMAND=b;g.INTERACTION_INSTRUMENTATION_READY=c;g.DOCUMENT_COMMAND=e;g.PLUGIN_EVENT_COMMAND=f}),98);
__d("MLCKeyBindingUtil",["UserAgent"],(function(a,b,c,d,e,f,g){"use strict";var h=c("UserAgent").isPlatform("Mac OS X");b=String.fromCodePoint(h?8984:8963);function a(a){return a!==null&&(h?a.metaKey:a.ctrlKey)}g.COMMAND_UNICODE=b;g.hasCommandModifier=a}),98);
__d("OptimisticLoadingTypeEnum",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({PENDING:"PENDING",SHOW_ANIMATION:"SHOW_ANIMATION",SHOW_LOADER:"SHOW_LOADER",SHOW_POST_PREVIEW:"SHOW_POST_PREVIEW",SHOW_PROGRESS_BAR:"SHOW_PROGRESS_BAR"});f["default"]=a}),66);
__d("UFI2ScaleRect",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return i(a,!0)}function b(a){return i(a,!1)}function i(a,b){var c=a.gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero,d=a.maxHeight,e=a.maxWidth,f=a.srcHeight;a=a.srcWidth;!1===c&&(f>0||h(0,5272,f),a>0||h(0,5273,a));d>0||h(0,5274,d);e>0||h(0,5275,e);f=c&&f===0?d:f;c=c&&a===0?e:a;a=e/c;e=d/f;d=b?Math.min(a,e):Math.min(a,e,1);return{height:Math.round(f*d),width:Math.round(c*d)}}g.scaleToContain=a;g.shrinkToContain=b}),98);
__d("cometIsMimeTypeForMedia",["FBLogger","UFICommentFileInputAcceptValues"],(function(a,b,c,d,e,f,g){"use strict";var h={file:null,photo:null,video:null},i={"image/gif":"video","image/webp":"video"};function j(a){return a.split(",").map(function(a){return a.trim()}).map(function(a){return a.replace(/\/\*$/,"/")})}function k(a,b,d){h[a]==null&&(h[a]=j(d));d=h[a];if(d==null)throw c("FBLogger")("ufi2").mustfixThrow("CometIsMimeTypeForMedia prefixes can't be null");var e=i[b];return e!=null?e===a:d.some(function(a){return b.startsWith(a)})}function a(a){return k("photo",a,d("UFICommentFileInputAcceptValues").photos)}function b(a){return k("video",a,d("UFICommentFileInputAcceptValues").videos)}function e(a){return k("file",a,d("UFICommentFileInputAcceptValues").files)}g.mimeTypeAcceptStringToArray=j;g.isMimeTypeForPhoto=a;g.isMimeTypeForVideo=b;g.isMimeTypeForFile=e}),98);
__d("compactArray",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=[];for(var c=0;c<a.length;++c){var d=a[c];d!=null&&b.push(d)}return b}f["default"]=a}),66);
__d("nodeIsInConnection",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){a=a.getLinkedRecords("edges");if(a==null){c&&c("Connection contains no edges field.");return!1}var d=!1;b=b.getDataID();if(b==null){c&&c("Search node has no ID.");return!1}for(var e=a,f=Array.isArray(e),g=0,e=f?e:e[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(f){if(g>=e.length)break;h=e[g++]}else{g=e.next();if(g.done)break;h=g.value}h=h;var i=h&&h.getLinkedRecord("node");if(i==null){c&&c("Edge at index "+a.indexOf(h)+" has no node.");continue}if(i.getDataID()===b){d=!0;break}}return d}f["default"]=a}),66);
__d("edgeIsInConnection",["nodeIsInConnection"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){b=b.getLinkedRecord("node");if(b==null){d&&d("Search edge has no node.");return!1}return c("nodeIsInConnection")(a,b,d)}g["default"]=a}),98);
__d("goUriOnNewWindow",["goURIOnWindow"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=window.open("","_blank");return b==null?!1:c("goURIOnWindow")(b,a)}g["default"]=a}),98);
__d("lengthInUTF8Bytes",[],(function(a,b,c,d,e,f){"use strict";function g(a){var b=new TextEncoder();return b.encode(a).length}function h(a){var b=encodeURIComponent(a).match(/%[89ABab]/g);return a.length+(b?b.length:0)}a=function(){if(typeof TextEncoder==="undefined")return h;else return g}();f["default"]=a}),66);
__d("useCometLexicalDragAndDrop",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.c;function a(a,b){var c=j(8),d=b.onDragEnter,e=b.onDragLeave,f=b.onDragOver,g=b.onDrop,h=b.onPaste,k;c[0]!==a||c[1]!==d||c[2]!==e||c[3]!==f||c[4]!==g||c[5]!==h?(b=function(){if(a!=null)return a.registerRootListener(function(a,b){b!=null&&(d&&b.removeEventListener("dragenter",d),e&&b.removeEventListener("dragleave",e),f&&b.removeEventListener("dragover",f),g&&b.removeEventListener("drop",g,!0),h&&b.removeEventListener("paste",h,!0)),a!==null&&(d&&a.addEventListener("dragenter",d),e&&a.addEventListener("dragleave",e),f&&a.addEventListener("dragover",f),g&&a.addEventListener("drop",g,!0),h&&a.addEventListener("paste",h,!0))})},k=[a,d,e,f,g,h],c[0]=a,c[1]=d,c[2]=e,c[3]=f,c[4]=g,c[5]=h,c[6]=b,c[7]=k):(b=c[6],k=c[7]);i(b,k)}g["default"]=a}),98);
__d("useCometLexicalFileDragAndDrop",["react","useCometLexicalDragAndDrop"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.useRef,j=b.c;function a(a){var b=j(26),d=a.editor,e=a.isMimeTypeAcceptable,f=a.onHover;a=a.onSubmit;var g=f===void 0?l:f,h=a===void 0?k:a,m=i(0);b[0]!==e?(f=function(a){return Array.from(a).filter(e)},b[0]=e,b[1]=f):f=b[1];var n=f;b[2]!==g||b[3]!==n?(a=function(a){m.current=m.current+1;var b=a.dataTransfer;if(b==null)return g([],!0);b=n(b.items);b.length>0&&a.preventDefault();return g(b,!0)},b[2]=g,b[3]=n,b[4]=a):a=b[4];f=a;b[5]!==g?(a=function(a){m.current=m.current-1;if(m.current===0)return g([],!1)},b[5]=g,b[6]=a):a=b[6];a=a;var o;b[7]!==g||b[8]!==n?(o=function(a){var b=a.dataTransfer;if(b==null)return g([],!0);b=n(b.items);b.length>0&&a.preventDefault();return g(b,!0)},b[7]=g,b[8]=n,b[9]=o):o=b[9];o=o;var p;b[10]!==n||b[11]!==h?(p=function(a,b){b=n(b.items);b=b.map(function(a){return a.getAsFile()}).filter(Boolean);if(b.length>0){a.stopPropagation();a.preventDefault();return h(b)}else return h([])},b[10]=n,b[11]=h,b[12]=p):p=b[12];var q=p;b[13]!==g||b[14]!==q||b[15]!==h?(p=function(a){var b=a.dataTransfer;m.current=0;g([],!1);if(b!=null)return q(a,b);else return h([])},b[13]=g,b[14]=q,b[15]=h,b[16]=p):p=b[16];p=p;var r;b[17]!==h||b[18]!==q?(r=function(a){var b=a.clipboardData;if(b==null)return h([]);var c=b.types;c=c.includes("text/plain")&&c.includes("text/html")||c.includes("text/rtf");return c?h([]):q(a,b)},b[17]=h,b[18]=q,b[19]=r):r=b[19];r=r;var s;b[20]!==f||b[21]!==a||b[22]!==o||b[23]!==p||b[24]!==r?(s={onDragEnter:f,onDragLeave:a,onDragOver:o,onDrop:p,onPaste:r},b[20]=f,b[21]=a,b[22]=o,b[23]=p,b[24]=r,b[25]=s):s=b[25];c("useCometLexicalDragAndDrop")(d,s)}function k(){}function l(){}g["default"]=a}),98);
__d("useDeferredModuleOnReady",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useState,k=b.c;function a(b){var c=k(6),d;c[0]!==b?(d=function(){return b.getModuleIfRequireable()},c[0]=b,c[1]=d):d=c[1];d=j(d);var a=d[0],e=d[1],g;c[2]!==a||c[3]!==b?(d=function(){if(a!=null)return;var c=b.onReady(function(a){e(function(){return a})});return function(){c.remove()}},g=[b,a],c[2]=a,c[3]=b,c[4]=d,c[5]=g):(d=c[4],g=c[5]);i(d,g);return a}g["default"]=a}),98);