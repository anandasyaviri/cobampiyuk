﻿window.globalProvideData('slide', '{"title":"Menurut mu, manakah yang perlu dipelajari terlebih dahulu untuk dapat memahami pembelajaran tentang Pemrograman Komptuter? Urutkan sesuai pengetahuan kalian :)","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":7,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5v3IoLBl1hD","lmsId":"Slide7","width":1280,"height":720,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6NWDct1AJrI","actionGroups":{"ReviewInt_6YorT9UqtI7":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6YorT9UqtI7","typea":"var","valueb":"5nC1UKrX7M3","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5nC1UKrX7M3.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6YorT9UqtI7"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5nC1UKrX7M3.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6YorT9UqtI7"}]}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_6YorT9UqtI7"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6YorT9UqtI7":{"kind":"actiongroup","actions":[]},"AnsweredInt_6YorT9UqtI7":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6YorT9UqtI7"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]},{"kind":"set_enabled","objRef":{"type":"string","value":"list_6YorT9UqtI7"},"enabled":{"type":"boolean","value":false}}]},"DisableChoices_6YorT9UqtI7":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"list_6YorT9UqtI7"},"enabled":{"type":"boolean","value":false}}]},"6YorT9UqtI7_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"62ow3AlcuaM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6YorT9UqtI7"}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_6NWDct1AJrI":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5k6Dzt2a3VV"}}]},"NavigationRestrictionPreviousSlide_6NWDct1AJrI":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TimelineCompleted_6NWDct1AJrI","typea":"var","valueb":false,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6YorT9UqtI7","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"enable_window_control","name":"next","enable":false,"affectTabStop":false},{"kind":"enable_window_control","name":"swiperight","enable":false,"affectTabStop":false}]},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5qHBU1G3sGx","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5qHBU1G3sGx","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6YorT9UqtI7","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6YorT9UqtI7"}],"elseActions":[{"kind":"exe_actiongroup","id":"6YorT9UqtI7_CheckAnswered"}]},{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":false}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6YorT9UqtI7","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6YorT9UqtI7","typea":"var","valueb":"5nC1UKrX7M3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5nC1UKrX7M3"},"completed_slide_ref":{"type":"string","value":"_player.5fC2SOTC2nq.6UZZ59W6UyO"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6YorT9UqtI7","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6YorT9UqtI7","typea":"var","valueb":"5nC1UKrX7M3","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5nC1UKrX7M3"},"completed_slide_ref":{"type":"string","value":"_player.5fC2SOTC2nq.6UZZ59W6UyO"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6NWDct1AJrI"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6NWDct1AJrI"}]},{"kind":"ontimelinecomplete","actions":[{"kind":"adjustvar","variable":"_player.TimelineCompleted_6NWDct1AJrI","operator":"set","value":{"type":"boolean","value":true}},{"kind":"enable_window_control","name":"next","enable":true,"affectTabStop":false},{"kind":"enable_window_control","name":"swiperight","enable":true,"affectTabStop":false}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"list_6YorT9UqtI7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Zs2VQ5GzII"}},{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"6nKuMg1JViu"}},{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5iCpQKZFur1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iCpQKZFur1.5iJp8odrFlr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5iCpQKZFur1.6eMYXsSRWPe"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5dAs9sc2DEu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qwJ7ySH2Ps"}}]}]},"objects":[{"kind":"sequencectrl","rtl":false,"shapemaskId":"","xPos":64,"yPos":272,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":204,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"number_text","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0x000000","alpha":100,"stop":0}]}},{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xB7FDFF","alpha":100,"stop":0},{"kind":"color","rgb":"0xA1EDEF","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"itemlist":[{"kind":"item","itemdata":"choices.choice_6a1GBeimuRh","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6a1GBeimuRh","type":"vectortext","altText":"Mempelajari sistem komputer","lmstext":"Mempelajari sistem komputer","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":189,"bottom":26,"altText":"Mempelajari sistem komputer","lmstext":"Mempelajari sistem komputer","pngfb":false,"pr":{"l":"Lib","i":105}}}},{"kind":"item","itemdata":"choices.choice_6e2aljEXpOt","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6e2aljEXpOt","type":"vectortext","altText":"Mempelajari konsep dasar algoritma","lmstext":"Mempelajari konsep dasar algoritma","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":230,"bottom":26,"altText":"Mempelajari konsep dasar algoritma","lmstext":"Mempelajari konsep dasar algoritma","pngfb":false,"pr":{"l":"Lib","i":106}}}},{"kind":"item","itemdata":"choices.choice_6Borpl1WCOI","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6Borpl1WCOI","type":"vectortext","altText":"Mempelajari konsep dasar pemrograman","lmstext":"Mempelajari konsep dasar pemrograman","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":257,"bottom":26,"altText":"Mempelajari konsep dasar pemrograman","lmstext":"Mempelajari konsep dasar pemrograman","pngfb":false,"pr":{"l":"Lib","i":107}}}},{"kind":"item","itemdata":"choices.choice_645Uozrx3Ak","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_645Uozrx3Ak","type":"vectortext","altText":"Mempelajari bahasa pemrograman","lmstext":"Mempelajari bahasa pemrograman","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":219,"bottom":26,"altText":"Mempelajari bahasa pemrograman","lmstext":"Mempelajari bahasa pemrograman","pngfb":false,"pr":{"l":"Lib","i":108}}}},{"kind":"item","itemdata":"choices.choice_5cMrspzfVaq","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5cMrspzfVaq","type":"vectortext","altText":"Mempelajari cara menulis kode program","lmstext":"Mempelajari cara menulis kode program","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":254,"bottom":26,"altText":"Mempelajari cara menulis kode program","lmstext":"Mempelajari cara menulis kode program","pngfb":false,"pr":{"l":"Lib","i":109}}}},{"kind":"item","itemdata":"choices.choice_5s7Kz5KFK2q","hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5s7Kz5KFK2q","type":"vectortext","altText":"Mengasah kemampuan dengan bermain game pemrograman","lmstext":"Mengasah kemampuan dengan bermain game pemrograman","xPos":20,"yPos":13,"xAccOffset":0,"yAccOffset":0,"width":1058,"height":52,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":380,"bottom":26,"altText":"Mengasah kemampuan dengan bermain game pemrograman","lmstext":"Mengasah kemampuan dengan bermain game pemrograman","pngfb":false,"pr":{"l":"Lib","i":110}}}}]},"width":1152,"height":408,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-2,"top":-2,"right":1154,"bottom":410,"altText":"Ranking Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":104}}},"id":"list_6YorT9UqtI7"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Zs2VQ5GzII_-1358718719","id":"01","linkId":"txt__default_6Zs2VQ5GzII","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":1132,"height":91,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Menurut mu, manakah yang perlu dipelajari terlebih dahulu untuk dapat memahami pembelajaran tentang Pemrograman Komptuter? Urutkan sesuai pengetahuan kalian :)","style":{"fontFamily":"\\"Tekton Pro Cond CharsetC76ADDFE\\",\\"Tekton Pro Cond\\",\\"Tekton Pro\\"","fontSize":28,"ascent":33.488,"descent":11.536,"leading":0,"underlinePosition":-2.8,"underlineThickness":1.867,"xHeight":16.8}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":159,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":1050,"bottom":96,"pngfb":false,"pr":{"l":"Lib","i":112}}}],"shapemaskId":"","xPos":64,"yPos":157,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":50.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1152,"bottom":101,"altText":"Menurut mu, manakah yang perlu dipelajari terlebih dahulu untuk dapat memahami pembelajaran tentang Pemrograman Komptuter? Urutkan sesuai pengetahuan kalian :)","pngfb":false,"pr":{"l":"Lib","i":111}},"html5data":{"xPos":0,"yPos":0,"width":1152,"height":101,"strokewidth":0}},"width":1152,"height":101,"resume":true,"useHandCursor":true,"id":"6Zs2VQ5GzII"},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":5,"id":"01","url":"story_content/5mxCFnlVMuj.png","type":"normal","altText":"Picture 21.png","width":490,"height":113,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":1021,"yPos":8,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":122.5,"rotateYPos":28,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":245,"bottom":56,"altText":"Picture 21.png","pngfb":false,"pr":{"l":"Lib","i":3}},"html5data":{"xPos":0,"yPos":0,"width":245,"height":56,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":500,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":500,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"$RawXPos","y":"$RawYPos","dx":"-1271","dy":"0"},"anchorb":{"x":"$RawXPos","y":"$RawYPos","dx":"0","dy":"0"}}],"duration":500,"easing":"cubic","easingdir":"easeout"}}]}],"width":245,"height":56,"resume":true,"useHandCursor":true,"id":"6nKuMg1JViu"},{"kind":"objgroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":6,"id":"01","url":"story_content/6J9hf3vltYX.png","type":"normal","altText":"Picture 20.png","width":850,"height":144,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":8,"yPos":71,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":212.5,"rotateYPos":5.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":425,"bottom":11,"altText":"Picture 20.png","pngfb":false,"pr":{"l":"Lib","i":100}},"html5data":{"xPos":0,"yPos":0,"width":425,"height":11,"strokewidth":0}},"width":425,"height":11,"resume":true,"useHandCursor":true,"id":"5iJp8odrFlr"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"txt__default_6eMYXsSRWPe","type":"richvartext","xPos":3,"yPos":3,"xAccOffset":0,"yAccOffset":0,"width":419,"height":61,"device":true,"valign":"center","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"%_player.username%","style":{"fontFamily":"\\"Tekton Pro Cond CharsetC76ADDFE\\",\\"Tekton Pro Cond\\",\\"Tekton Pro\\"","fontSize":32,"ascent":38.272,"descent":13.184,"leading":0,"underlinePosition":-3.2,"underlineThickness":2.133,"xHeight":19.2}}],"style":{"flowDirection":"leftToRight","justification":"center","lineSpacing":20,"tagType":"P"},"runs":[{"idx":0,"len":18,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"}}],"shapemaskId":"","xPos":8,"yPos":8,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":212.5,"rotateYPos":33.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":426,"bottom":68,"altText":"%_player.username%","pngfb":false,"pr":{"l":"Lib","i":101}},"html5data":{"xPos":0,"yPos":0,"width":426,"height":68,"strokewidth":0}},"width":425,"height":67,"resume":true,"useHandCursor":true,"id":"6eMYXsSRWPe"}],"accType":"text","altText":"Group 33 1","shapemaskId":"","xPos":-48,"yPos":32,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":220.5,"rotateYPos":45,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"animations":[{"kind":"animation","id":"Entrance","duration":500,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":500,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"$RawXPos","y":"$RawYPos","dx":"-398","dy":"0"},"anchorb":{"x":"$RawXPos","y":"$RawYPos","dx":"0","dy":"0"}}],"duration":500,"easing":"cubic","easingdir":"easeout"}}]}],"width":441,"height":90,"resume":true,"useHandCursor":true,"id":"5iCpQKZFur1"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5dAs9sc2DEu_-369618954","id":"01","linkId":"txt__default_5dAs9sc2DEu","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":229,"height":53,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Berlatih Soal ","style":{"fontFamily":"\\"Hobo Std Charset0_v8ciP47F125BF\\",\\"Hobo Std\\"","fontSize":28,"ascent":41.104,"descent":11.76,"leading":0,"underlinePosition":-2.8,"underlineThickness":1.867,"xHeight":23.893}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":14,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":21.333,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#FFFFFF","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":239,"bottom":58,"pngfb":false,"pr":{"l":"Lib","i":114}}}],"shapemaskId":"","xPos":720,"yPos":88,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":124,"rotateYPos":31,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":250,"bottom":64,"altText":"Berlatih Soal ","pngfb":false,"pr":{"l":"Lib","i":113}},"html5data":{"xPos":-1,"yPos":-1,"width":251,"height":65,"strokewidth":1}},"width":249,"height":63,"resume":true,"useHandCursor":true,"id":"5dAs9sc2DEu"},{"kind":"stategroup","objects":[{"kind":"expandinglabel","animationtype":"full","showclosebutton":false,"contentheight":0,"borderwidth":1,"arrowxpos":250,"arrowypos":218,"shapemaskId":"","xPos":-236,"yPos":-204,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"border","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0x262626","alpha":100,"stop":0}]}},{"kind":"color","name":"bg","fill":{"type":"linear","rotation":0,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}}],"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":40}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":250,"height":200,"resume":false,"useHandCursor":true,"id":"6qwJ7ySH2Ps_expandinglabel","events":[{"kind":"onclickoutside","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$Expanded","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"object_action","command":"hidecomplete","objRef":{"type":"string","value":"_this"}}]}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":29,"bottom":29,"altText":"Marker","pngfb":false,"pr":{"l":"Lib","i":115}},"html5data":{"xPos":-1,"yPos":-1,"width":30,"height":30,"strokewidth":1}},"markerType":"pulse","width":28,"height":28,"resume":true,"useHandCursor":true,"id":"6qwJ7ySH2Ps"}],"actionstates":[{"kind":"state","name":"_default","actions":[{"kind":"setobjstate","stateRef":{"type":"string","value":"_default"},"objRef":{"type":"string","value":"6qwJ7ySH2Ps"}}],"clickdef":[{"kind":"objref","type":"string","value":"6qwJ7ySH2Ps"}]}],"shapemaskId":"","xPos":1224,"yPos":400,"tabIndex":15,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":14,"rotateYPos":14,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"width":28,"height":28,"resume":true,"useHandCursor":true,"id":"6qwJ7ySH2Ps","actionGroups":{"_show":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qwJ7ySH2Ps_expandinglabel"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qwJ7ySH2Ps"}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"togglecontent","objRef":{"type":"string","value":"6qwJ7ySH2Ps_expandinglabel"}},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5fC2SOTC2nq.5k6Dzt2a3VV"}}]},{"kind":"onrollover","actions":[{"kind":"bringtofront","value":{"type":"string","value":"_this"}},{"kind":"object_action","command":"showtitle","objRef":{"type":"string","value":"6qwJ7ySH2Ps_expandinglabel"}}]},{"kind":"onrollout","actions":[{"kind":"object_action","command":"hidetitle","objRef":{"type":"string","value":"6qwJ7ySH2Ps_expandinglabel"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_show"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6YorT9UqtI7_CorrectReview","id":"01","linkId":"6YorT9UqtI7_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":682,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":117}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":116}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6YorT9UqtI7_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6YorT9UqtI7_IncorrectReview","id":"01","linkId":"6YorT9UqtI7_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":691,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":119}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":118}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6YorT9UqtI7_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5v3IoLBl1hD","duration":500,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":500,"alpha":{"path":[{"kind":"segment","start":"0","dstart":"0","end":"100","dend":"0"}],"duration":500,"easing":"linear","easingdir":"easein"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');