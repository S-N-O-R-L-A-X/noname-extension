import {lib,game,ui,get,ai,_status} from '../../../noname.js'

export async function precontent(config,pack){
    //在这里编写预启动阶段执行的代码。
    lib.skill._ikun = {
        firstDo:true,
        popup:false,
        forced:true,
        trigger:{
            global:'gameStart',
        },
        filter:function(event,player){
            return !_status.hasKunkun;
        },
        priority:114.51419,
        async content(event,trigger,player){
            _status.hasKunkun = true;
            let top = lib.config.extension_只因你太美_kunkunmode === 'top';
            let path = lib.assetURL+'extension/只因你太美/ikun.mp4';
            let parent = top?document.body:ui.window;
            let style = {
                width:'100%',
                height:'100%',
                left:'0px',
                top:'0px',
                mixBlendMode:'screen',
                pointerEvents:'none',
            };
            if(top){
                style.zIndex = 999;
            }
            let video = document.createElement('video');
            video.src = path;
            video.controls = false;
            video.muted = false;
            video.loop = true;
            video.style.objectFit = 'fill';
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.left = '0px';
            video.style.top = '0px';
            let div = ui.create.div();
            div.appendChild(video);
            Object.keys(style).forEach(key=>div.style[key] = style[key]);
            parent.appendChild(div);
            video.play();
            if (ui.backgroundMusic) {
                ui.backgroundMusic.pause();
            }
        }
    };
}
