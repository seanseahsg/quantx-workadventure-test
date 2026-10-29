import{b as c}from"./init-BlUxmPhL.js";console.info("[QuantX] map script started");let a;function r(){a!==void 0&&(a.close(),a=void 0)}function n(e,o){r(),a=WA.ui.openPopup(e,o,[{label:"OK",className:"primary",callback:()=>r()}])}function t(e,o,s){WA.room.area.onEnter(e).subscribe(()=>n(o,s)),WA.room.area.onLeave(e).subscribe(r)}const i=`DIRECTORY - Quant X Club

↖ LECTURE HALL (north-west): weekly lecture. Go through the door marked ▲ LECTURE.
↗ BREAKOUT ROOMS 1-3 (north-east): cross the Arena and use the doors marked ▲ ROOM 1/2/3.
↘ ARENA (south-east, grass): coming soon.
● You are in the LOBBY (south-west).`,u=`How to get around:
• Move: arrow keys or W A S D (or click a spot)
• Walk next to people to start a video/voice chat
• In the Lecture Hall or a Breakout Room, press SPACE to join its video call
• Signposts show directions. Click 'Map guide' (top bar) any time.`;function l(){const e=new URL("guide.html",WA.room.mapURL).toString();try{WA.ui.modal.openModal({title:"Map guide",src:e,allow:null,allowApi:!1,position:"center"})}catch(o){console.error(o),WA.nav.openCoWebSite(e)}}WA.onInit().then(()=>{console.info("[QuantX] Scripting API ready");const e=WA.player.name||"trader";n("welcomePopup",`Welcome to Quant X Club, ${e}!

`+u+`

The DIRECTORY board just south of you lists every room.`),WA.room.area.onLeave("lobby").subscribe(r),t("directorySign","directoryPopup",i),t("postLobby","postLobbyPopup",`↑ LECTURE HALL: door just north-east of here (▲ LECTURE)
↘ ARENA and BREAKOUT ROOMS: head south-east through the gap in the wall`),t("postGap","postGapPopup",`→ ARENA: through the gap just east of here
↗ BREAKOUT ROOMS 1-3: cross the Arena and go north
↖ LECTURE HALL: back north-west`),t("postArena","postArenaPopup",`↑ BREAKOUT ROOMS: doors ▲ ROOM 1 (left), ROOM 2 (right of here), ROOM 3 (far right)
← LOBBY & LECTURE HALL: go west through the gap at the bottom-left`),t("arenaSign","arenaPopup",`ARENA - coming soon!
Trading battles and quiz duels will happen here. (placeholder)`),t("stage","stagePopup","You are on the STAGE. Lecturers: present from here and share your screen in the Lecture Hall call.");for(const o of["breakout1","breakout2","breakout3"])WA.room.area.onEnter(o).subscribe(()=>WA.ui.displayActionMessage({message:`${o.replace("breakout","Breakout Room ")}: press SPACE to join the group call`,callback:()=>{},type:"message"}));try{WA.ui.actionBar.addButton({id:"qxc-map-guide",label:"Map guide",callback:()=>l()})}catch(o){console.error("[QuantX] could not add action bar button",o)}c().then(()=>console.info("[QuantX] Scripting API Extra ready")).catch(o=>console.error(o))}).catch(e=>console.error(e));
//# sourceMappingURL=src-quantx-DdYLXKOL.js.map
