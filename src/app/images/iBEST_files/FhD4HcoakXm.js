;/*FB_PKG_DELIM*/

__d("LSClearAllPublicChatEventStartAndEndTimes",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.resolve(c)}a.__sproc_name__="LSMailboxClearAllPublicChatEventStartAndEndTimesStoredProcedure";e.exports=a}),null);
__d("LSClearAllScreenTimeRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(321).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllScreenTimeRecordsStoredProcedure";e.exports=a}),null);
__d("LSClearAllSupervisionEdgeRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(319).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllSupervisionEdgeRecordsStoredProcedure";e.exports=a}),null);
__d("LSClearAllSupervisionMetadataRecords",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(320).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSFamilyCenterSupervisionClearAllSupervisionMetadataRecordsStoredProcedure";e.exports=a}),null);
__d("LSDeleteAllPublicChatFbEventData",["LSClearAllPublicChatEventStartAndEndTimes"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[];return c.sequence([function(a){return c.storedProcedure(b("LSClearAllPublicChatEventStartAndEndTimes"))},function(a){return c.resolve(d)}])}a.__sproc_name__="LSOmnistoreSettingsDeleteAllPublicChatFbEventDataStoredProcedure";e.exports=a}),null);
__d("LSDeleteThenInsertMessagingPrivacySettings",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.db.table(288).put({userId:a[0],readReceiptsDisabled:a[1],e2eeXmaPreviewsDisabled:a[3]})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsDeleteThenInsertMessagingPrivacySettingsStoredProcedure";e.exports=a}),null);
__d("LSTruncateQuietTime",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(a){return b.forEach(b.db.table(317).fetch(),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}a.__sproc_name__="LSOmnistoreSettingsTruncateQuietTimeStoredProcedure";e.exports=a}),null);