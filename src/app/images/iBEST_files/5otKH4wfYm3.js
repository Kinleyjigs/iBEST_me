;/*FB_PKG_DELIM*/

__d("IGDBaseButton.react",["BaseButton.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={root:{userSelect:"x87ps6o",":active_opacity":"x1d5wrs8",$$css:!0},rootDisabled:{opacity:"xuzhngd",pointerEvents:"x47corl",$$css:!0}};b=j.forwardRef(a);function a(a,b){var d=i(8),e=a.children,f=a.disabled;a=a.onClick;var g=f===!0&&k.rootDisabled,h;d[0]!==g?(h=[k.root,g],d[0]=g,d[1]=h):h=d[1];d[2]!==f||d[3]!==a||d[4]!==b||d[5]!==h||d[6]!==e?(g=j.jsx(c("BaseButton.react"),{disabled:f,onClick:a,ref:b,xstyle:h,children:e}),d[2]=f,d[3]=a,d[4]=b,d[5]=h,d[6]=e,d[7]=g):g=d[7];return g}e=b;g["default"]=e}),98);
__d("IGDInboxLayout.react",["fbt","BaseRow.react","BaseRowItem.react","PolarisNavigationLayoutContext","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l={container:{display:"x78zum5",flexGrow:"x1iyjqo2",height:"x5yr21d",minHeight:"x1t2pt76",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},containerWithBottomNavigation:{maxHeight:"x1k6qp8s",$$css:!0},leftRail:{backgroundColor:"xvbhtw8",$$css:!0}};function a(a){var b=j(5);a=a.children;var e=d("PolarisNavigationLayoutContext").usePolarisNavigationLayoutContext();e=e.navigationPosition;e=e==="bottom"?l.containerWithBottomNavigation:!1;var f;b[0]!==e?(f=[l.container,e],b[0]=e,b[1]=f):f=b[1];b[2]!==f||b[3]!==a?(e=k.jsx(c("BaseRow.react"),{align:"start",testid:void 0,xstyle:f,children:a}),b[2]=f,b[3]=a,b[4]=e):e=b[4];return e}function b(a){var b=j(3);a=a.children;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=h._("__JHASH__iS2CKvy7M7j__JHASH__"),b[0]=d):d=b[0];b[1]!==a?(d=k.jsx(c("BaseRowItem.react"),{"aria-label":d,role:"navigation",xstyle:l.leftRail,children:a}),b[1]=a,b[2]=d):d=b[2];return d}function e(a){var b=j(3);a=a.children;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d="xvbhtw8 x78zum5 xdt5ytf x1iyjqo2 x1t2pt76 xeuugli x1n2onr6 x1ja2u2z",b[0]=d):d=b[0];b[1]!==a?(d=k.jsx(c("BaseRowItem.react"),{expanding:!0,children:k.jsx("div",{className:d,children:a})}),b[1]=a,b[2]=d):d=b[2];return d}g.IGDInboxLayoutContainer=a;g.IGDInboxLayoutLeftColumn=b;g.IGDInboxLayoutContentArea=e}),226);
__d("IGDInboxNullStatePlaceholder.react",["IGDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={button:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",height:"x1qx5ct2",marginTop:"x1sy10c2",width:"x9h7yyr",$$css:!0},iconGlimmer:{borderTopStartRadius:"x11rfzx0",borderTopEndRadius:"x1l9up10",borderBottomEndRadius:"xutqcms",borderBottomStartRadius:"x89lhf",height:"xjp8j0k",width:"x13oubkp",$$css:!0},subtitleGlimmer:{borderTopStartRadius:"x13zp6kq",borderTopEndRadius:"x1mcfq15",borderBottomEndRadius:"xrosliz",borderBottomStartRadius:"x1wb7cse",height:"x6w4g8m",marginTop:"xw7yly9",maxWidth:"xxc7z9f",width:"xh8yej3",$$css:!0},titleGlimmer:{borderTopStartRadius:"xoph9oq",borderTopEndRadius:"x134dblt",borderBottomEndRadius:"x6y81sa",borderBottomStartRadius:"x15qh7tp",height:"x158ke7r",marginTop:"x1sy10c2",width:"x1oysuqx",$$css:!0}};function a(){var a=i(1);if(a[0]===Symbol["for"]("react.memo_cache_sentinel")){var b;b=j.jsxs("div",{className:"x6s0dn4 xvbhtw8 x78zum5 xdt5ytf x5yr21d xl56j7k xh8yej3",children:[j.jsx(b=c("IGDSGlimmer.react"),{index:1,xstyle:k.iconGlimmer}),j.jsx(b,{index:1,xstyle:k.titleGlimmer}),j.jsx(b,{index:1,xstyle:k.subtitleGlimmer}),j.jsx(b,{index:1,xstyle:k.button})]});a[0]=b}else b=a[0];return b}g["default"]=a}),98);
__d("IGDInboxRootPlaceholder.react",["IGDInboxLayout.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(8),c=a.contentArea;a=a.leftColumn;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e="x1dr59a3 xh8yej3",b[0]=e):e=b[0];var f;b[1]!==a?(f=j.jsx(d("IGDInboxLayout.react").IGDInboxLayoutLeftColumn,{children:a}),b[1]=a,b[2]=f):f=b[2];b[3]!==c?(a=j.jsx(d("IGDInboxLayout.react").IGDInboxLayoutContentArea,{children:c}),b[3]=c,b[4]=a):a=b[4];b[5]!==f||b[6]!==a?(c=j.jsx("div",{className:e,children:j.jsxs(d("IGDInboxLayout.react").IGDInboxLayoutContainer,{children:[f,a]})}),b[5]=f,b[6]=a,b[7]=c):c=b[7];return c}g["default"]=a}),98);
__d("IGDInboxTrayQuery$Parameters",["IGDInboxTrayQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("IGDInboxTrayQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"IGDInboxTrayQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("IGDInboxTray.entrypoint",["IGDInboxTrayQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{queryReference:{parameters:c("IGDInboxTrayQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("IGDInboxTray.react").__setRef("IGDInboxTray.entrypoint")};g["default"]=a}),98);
__d("IGDMessageRequestLeftRailLayout.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={desktopRoot:{minWidth:"xwqvltr",$$css:!0},mobileRoot:{borderEndWidth:"xcfux6l",height:"x1dr59a3",$$css:!0},root:{backgroundColor:"xvbhtw8",height:"x5yr21d",outline:"x1a2a7pz",overflowX:"x14aock7",overflowY:"x1rife3k",position:"x1n2onr6",width:"xh8yej3",$$css:!0}};function a(a){var b=j(9),d=a.children;a=a.isMobile;d=d;a=(a=a)!=null?a:!1;a=a?l.mobileRoot:l.desktopRoot;var e;b[0]!==a?(e=(h||(h=c("stylex")))(l.root,a),b[0]=a,b[1]=e):e=b[1];var f;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a="x78zum5 x5yr21d xh8yej3",f="xopu45v xu3j5b3 xm81vs4 x1afcbsf x78zum5 xdt5ytf x1us19tq x1n2onr6 xh8yej3",b[2]=a,b[3]=f):(a=b[2],f=b[3]);b[4]!==d?(a=k.jsx("div",{className:a,children:k.jsx("div",{className:f,children:d})}),b[4]=d,b[5]=a):a=b[5];b[6]!==e||b[7]!==a?(f=k.jsx("div",{className:e,children:a}),b[6]=e,b[7]=a,b[8]=f):f=b[8];return f}var m={desktopWidth:{maxWidth:"x1dc814f",$$css:!0},infoBox:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",justifyContent:"xl56j7k",paddingTop:"xyinxu5",paddingEnd:"xxbr6pl",paddingBottom:"x1g2khh7",paddingStart:"xbbxn1n",textAlign:"x2b8uid",$$css:!0},mobileWidth:{width:"x1qsaak8",$$css:!0}};function b(a){var b=j(5),d=a.children;a=a.isMobile;d=d;a=(a=a)!=null?a:!1;a=a?m.mobileWidth:m.desktopWidth;var e;b[0]!==a?(e=(h||(h=c("stylex")))(m.infoBox,a),b[0]=a,b[1]=e):e=b[1];b[2]!==e||b[3]!==d?(a=k.jsx("div",{className:e,children:d}),b[2]=e,b[3]=d,b[4]=a):a=b[4];return a}function e(a){var b=j(3);a=a.children;a=a;var c;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(c="x6s0dn4 xvbhtw8 x78zum5 xl56j7k xyamay9 x4uap5 x1l90r2v xkhd6sd x2b8uid xh8yej3",b[0]=c):c=b[0];b[1]!==a?(c=k.jsx("div",{className:c,children:a}),b[1]=a,b[2]=c):c=b[2];return c}g.Container=a;g.InfoBox=b;g.Footer=e}),98);
__d("PolarisDirectInboxContainer.react",["CometPlaceholder.react","IGDInboxLeftColumnPlaceholder.react","IGDInboxNullStatePlaceholder.react","IGDInboxRootPlaceholder.react","IGDIsCompactModeContext.react","PolarisNotificationsScreen.react","cr:3797","deferredLoadComponent","react","requireDeferredForDisplay"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;b("cr:3797");var k=c("deferredLoadComponent")(c("requireDeferredForDisplay")("PolarisDirectInbox.react").__setRef("PolarisDirectInboxContainer.react"));function a(a){var b=i(6);a=a.inboxTrayEntrypoint;var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("IGDInboxRootPlaceholder.react"),{contentArea:j.jsx(c("IGDInboxNullStatePlaceholder.react"),{}),leftColumn:j.jsx(d("IGDInboxLeftColumnPlaceholder.react").IGDInboxLeftColumnPlaceholder,{})}),b[0]=e):e=b[0];e=e;b[1]!==a?(e=j.jsx(c("CometPlaceholder.react"),{fallback:e,children:j.jsx(k,{inboxTrayEntrypoint:a,placeholder:e})}),b[1]=a,b[2]=e):e=b[2];b[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=j.jsx(c("PolarisNotificationsScreen.react"),{}),b[3]=a):a=b[3];b[4]!==e?(a=j.jsxs(d("IGDIsCompactModeContext.react").IGDIsCompactModeContextProvider,{children:[e,a]}),b[4]=e,b[5]=a):a=b[5];return a}g["default"]=a}),98);
__d("PolarisDirectInboxQPInterstitialQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"7495362107146916",metadata:{},name:"PolarisDirectInboxQPInterstitialQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisDirectInboxRootQuery_instagramRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7933559856772658"}),null);
__d("PolarisDirectInboxRootQuery$Parameters",["PolarisDirectInboxRootQuery_instagramRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("PolarisDirectInboxRootQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisDirectInboxRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisDirectInboxRoot.entrypoint",["IGDInboxTray.entrypoint","JSResourceForInteraction","NestedRelayEntryPointBuilderUtils","PolarisDirectInboxQPInterstitialQuery$Parameters","PolarisDirectInboxRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{entryPoints:{inboxTrayEntrypoint:d("NestedRelayEntryPointBuilderUtils").NestedRelayEntryPoint({entryPoint:b("IGDInboxTray.entrypoint"),entryPointParams:{}})},queries:{directInboxRootQueryRef:{parameters:c("PolarisDirectInboxRootQuery$Parameters"),variables:{}},qpInterstitialQueryRef:{parameters:c("PolarisDirectInboxQPInterstitialQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("PolarisDirectInboxRoot.react").__setRef("PolarisDirectInboxRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisDirectInboxRootQuery.graphql",["PolarisDirectInboxRootQuery_instagramRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a={fragment:{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"PolarisDirectInboxRootQuery",selections:[{alias:null,args:null,concreteType:"XDTGetIGDAutomaticPreviewsDisabledResponse",kind:"LinkedField",name:"xdt_get_igd_automatic_previews_disabled",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PolarisAutomaticPreviewsDisabledContextProviderFragment"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[],kind:"Operation",name:"PolarisDirectInboxRootQuery",selections:[{alias:null,args:null,concreteType:"XDTGetIGDAutomaticPreviewsDisabledResponse",kind:"LinkedField",name:"xdt_get_igd_automatic_previews_disabled",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"disabled",storageKey:null}],storageKey:null}]},params:{id:b("PolarisDirectInboxRootQuery_instagramRelayOperation"),metadata:{is_distillery:!0},name:"PolarisDirectInboxRootQuery",operationKind:"query",text:null}};b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("PolarisDirectInboxRoot.react",["CometErrorBoundary.react","CometPlaceholder.react","CometRelay","PolarisAutomaticPreviewsDisabledContext.react","PolarisDirectInboxContainer.react","PolarisDirectInboxRootQuery.graphql","cr:174","deferredLoadComponent","react","requireDeferred","withPolarisShell.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;b("cr:174");var l=c("deferredLoadComponent")(c("requireDeferred")("PolarisDirectInboxQPInterstitial.react").__setRef("PolarisDirectInboxRoot.react"));function a(a){var e=j(8),f=a.entryPoints;a=a.queries;f=f.inboxTrayEntrypoint;var g=a.directInboxRootQueryRef;a=a.qpInterstitialQueryRef;g=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("PolarisDirectInboxRootQuery.graphql"),g);var i;e[0]!==f?(i=k.jsx(c("PolarisDirectInboxContainer.react"),{inboxTrayEntrypoint:f}),e[0]=f,e[1]=i):i=e[1];e[2]!==a?(f=k.jsx(c("CometErrorBoundary.react"),{children:k.jsx(c("CometPlaceholder.react"),{fallback:null,children:k.jsx(l,{queryRef:a})})}),e[2]=a,e[3]=f):f=e[3];e[4]!==g.xdt_get_igd_automatic_previews_disabled||e[5]!==i||e[6]!==f?(a=k.jsxs(d("PolarisAutomaticPreviewsDisabledContext.react").PolarisAutomaticPreviewsDisabledContextProvider,{responseFragment:g.xdt_get_igd_automatic_previews_disabled,children:[i,f]}),e[4]=g.xdt_get_igd_automatic_previews_disabled,e[5]=i,e[6]=f,e[7]=a):a=e[7];return a}e=c("withPolarisShell.react")(a);g["default"]=e}),98);
__d("PolarisDirectMessageRequestRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisDirectMessageRequestRoot.react").__setRef("PolarisDirectMessageRequestRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisMetaVerifiedUpdateRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisMetaVerifiedUpdateRoot.react").__setRef("PolarisMetaVerifiedUpdateRoot.entrypoint")};g["default"]=a}),98);
__d("translatedServerString",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a}f["default"]=a}),66);