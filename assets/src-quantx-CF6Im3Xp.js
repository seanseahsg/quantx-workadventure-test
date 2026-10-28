import{b as n}from"./init-BlUxmPhL.js";console.info("[QuantX] map script started");let r;function a(){r!==void 0&&(r.close(),r=void 0)}function t(o,e){a(),r=WA.ui.openPopup(o,e,[{label:"OK",className:"primary",callback:()=>a()}])}WA.onInit().then(()=>{console.info("[QuantX] Scripting API ready");const o=WA.player.name||"trader";t("welcomePopup",`Welcome to Quant X Club, ${o}!

North-west: LECTURE HALL (weekly lecture)
North-east: 3 BREAKOUT ROOMS
South-east: the ARENA (coming soon)

Walk into a room and press SPACE to join its video call.`),WA.room.area.onLeave("lobby").subscribe(a),WA.room.area.onEnter("stage").subscribe(()=>t("stagePopup","You are on the STAGE. Lecturers: present from here and share your screen in the Lecture Hall call.")),WA.room.area.onLeave("stage").subscribe(a),WA.room.area.onEnter("arenaSign").subscribe(()=>t("arenaPopup",`ARENA - coming soon!
Trading battles / quiz duels will happen here. (placeholder)`)),WA.room.area.onLeave("arenaSign").subscribe(a);for(const e of["breakout1","breakout2","breakout3"])WA.room.area.onEnter(e).subscribe(()=>WA.ui.displayActionMessage({message:`${e.replace("breakout","Breakout Room ")} - press SPACE to join the group call`,callback:()=>{},type:"message"}));n().then(()=>console.info("[QuantX] Scripting API Extra ready")).catch(e=>console.error(e))}).catch(o=>console.error(o));
//# sourceMappingURL=src-quantx-CF6Im3Xp.js.map
