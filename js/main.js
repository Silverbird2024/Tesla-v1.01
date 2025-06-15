var NeoApp=angular.module("NeoApp",["ngAnimate","ngRoute","ngSanitize","ngTouch","ui.bootstrap"],function($interpolateProvider){$interpolateProvider.startSymbol("[");$interpolateProvider.endSymbol("]");});NeoApp.config(["$routeProvider",function($routeProvider,$scope,$rootScope){$routeProvider.when("/Home",{templateUrl:"Home",controller:"Home_Ctrl"});$routeProvider.when("/Home2",{templateUrl:"Home2",controller:"Home2_Ctrl"});$routeProvider.when("/Work01",{templateUrl:"Work01",controller:"Work01_Ctrl"});$routeProvider.when("/RulesMatter",{templateUrl:"RulesMatter",controller:"RulesMatter_Ctrl"});$routeProvider.when("/ADHDhelper",{templateUrl:"ADHDhelper",controller:"ADHDhelper_Ctrl"});$routeProvider.when("/Time-Pa",{templateUrl:"Time-Pa",controller:"Time-Pa_Ctrl"});$routeProvider.when("/Rulz",{templateUrl:"Rulz",controller:"Rulz_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy01",{templateUrl:"WorkDoNotEnjoy01",controller:"WorkDoNotEnjoy01_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy02",{templateUrl:"WorkDoNotEnjoy02",controller:"WorkDoNotEnjoy02_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy03",{templateUrl:"WorkDoNotEnjoy03",controller:"WorkDoNotEnjoy03_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy04",{templateUrl:"WorkDoNotEnjoy04",controller:"WorkDoNotEnjoy04_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy05",{templateUrl:"WorkDoNotEnjoy05",controller:"WorkDoNotEnjoy05_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy06",{templateUrl:"WorkDoNotEnjoy06",controller:"WorkDoNotEnjoy06_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy07",{templateUrl:"WorkDoNotEnjoy07",controller:"WorkDoNotEnjoy07_Ctrl"});$routeProvider.when("/WorkDoNotEnjoy08",{templateUrl:"WorkDoNotEnjoy08",controller:"WorkDoNotEnjoy08_Ctrl"});$routeProvider.when("/WorkCWD-adjust",{templateUrl:"WorkCWD-adjust",controller:"WorkCWD-adjust_Ctrl"});$routeProvider.when("/Dailysheet",{templateUrl:"Dailysheet",controller:"Dailysheet_Ctrl"});$routeProvider.when("/adh00",{templateUrl:"adh00",controller:"adh00_Ctrl"});$routeProvider.when("/adh01",{templateUrl:"adh01",controller:"adh01_Ctrl"});$routeProvider.when("/adh02",{templateUrl:"adh02",controller:"adh02_Ctrl"});$routeProvider.when("/adh03",{templateUrl:"adh03",controller:"adh03_Ctrl"});$routeProvider.when("/adh04",{templateUrl:"adh04",controller:"adh04_Ctrl"});$routeProvider.when("/adh05",{templateUrl:"adh05",controller:"adh05_Ctrl"});$routeProvider.when("/adh06",{templateUrl:"adh06",controller:"adh06_Ctrl"});$routeProvider.when("/adh07",{templateUrl:"adh07",controller:"adh07_Ctrl"});$routeProvider.when("/adh08",{templateUrl:"adh08",controller:"adh08_Ctrl"});$routeProvider.when("/adh09",{templateUrl:"adh09",controller:"adh09_Ctrl"});$routeProvider.when("/adh10",{templateUrl:"adh10",controller:"adh10_Ctrl"});$routeProvider.when("/adh11",{templateUrl:"adh11",controller:"adh11_Ctrl"});$routeProvider.when("/adh12",{templateUrl:"adh12",controller:"adh12_Ctrl"});$routeProvider.when("/adh13",{templateUrl:"adh13",controller:"adh13_Ctrl"});$routeProvider.when("/adh14",{templateUrl:"adh14",controller:"adh14_Ctrl"});$routeProvider.when("/adh15",{templateUrl:"adh15",controller:"adh15_Ctrl"});$routeProvider.when("/adh16",{templateUrl:"adh16",controller:"adh16_Ctrl"});$routeProvider.when("/Debtclock",{templateUrl:"Debtclock",controller:"Debtclock_Ctrl"});$routeProvider.when("/RanMain",{templateUrl:"RanMain",controller:"RanMain_Ctrl"});$routeProvider.when("/Dreamboard",{templateUrl:"Dreamboard",controller:"Dreamboard_Ctrl"});$routeProvider.when("/Dreamboard01",{templateUrl:"Dreamboard01",controller:"Dreamboard01_Ctrl"});$routeProvider.when("/Dreamboard02",{templateUrl:"Dreamboard02",controller:"Dreamboard02_Ctrl"});$routeProvider.when("/Dreamboard03",{templateUrl:"Dreamboard03",controller:"Dreamboard03_Ctrl"});$routeProvider.when("/Dreamboard04",{templateUrl:"Dreamboard04",controller:"Dreamboard04_Ctrl"});$routeProvider.when("/Dreamboard05",{templateUrl:"Dreamboard05",controller:"Dreamboard05_Ctrl"});$routeProvider.when("/Dreamboard06",{templateUrl:"Dreamboard06",controller:"Dreamboard06_Ctrl"});$routeProvider.when("/Dreamboard07",{templateUrl:"Dreamboard07",controller:"Dreamboard07_Ctrl"});$routeProvider.when("/Dreamboard08",{templateUrl:"Dreamboard08",controller:"Dreamboard08_Ctrl"});$routeProvider.when("/Dreamboard09",{templateUrl:"Dreamboard09",controller:"Dreamboard09_Ctrl"});$routeProvider.when("/Dreamboard10",{templateUrl:"Dreamboard10",controller:"Dreamboard10_Ctrl"});$routeProvider.when("/Dreamboard11",{templateUrl:"Dreamboard11",controller:"Dreamboard11_Ctrl"});$routeProvider.when("/Dreamboard12",{templateUrl:"Dreamboard12",controller:"Dreamboard12_Ctrl"});$routeProvider.when("/Dreamboard13",{templateUrl:"Dreamboard13",controller:"Dreamboard13_Ctrl"});$routeProvider.when("/Dreamboard14",{templateUrl:"Dreamboard14",controller:"Dreamboard14_Ctrl"});$routeProvider.when("/Dreamboard15",{templateUrl:"Dreamboard15",controller:"Dreamboard15_Ctrl"});$routeProvider.when("/Dreamboard16",{templateUrl:"Dreamboard16",controller:"Dreamboard16_Ctrl"});$routeProvider.when("/Dreamboard17",{templateUrl:"Dreamboard17",controller:"Dreamboard17_Ctrl"});$routeProvider.when("/Dreamboard18",{templateUrl:"Dreamboard18",controller:"Dreamboard18_Ctrl"});$routeProvider.when("/Dreamboard19",{templateUrl:"Dreamboard19",controller:"Dreamboard19_Ctrl"});$routeProvider.when("/Dreamboard20",{templateUrl:"Dreamboard20",controller:"Dreamboard20_Ctrl"});$routeProvider.when("/Dreamboard21",{templateUrl:"Dreamboard21",controller:"Dreamboard21_Ctrl"});$routeProvider.when("/Debtclockinput",{templateUrl:"Debtclockinput",controller:"Debtclockinput_Ctrl"});$routeProvider.when("/Permanace",{templateUrl:"Permanace",controller:"Permanace_Ctrl"});$routeProvider.when("/Page02",{templateUrl:"Page02",controller:"Page02_Ctrl"});$routeProvider.when("/Milesrecorder",{templateUrl:"Milesrecorder",controller:"Milesrecorder_Ctrl"});$routeProvider.when("/map",{templateUrl:"map",controller:"map_Ctrl"});$routeProvider.when("/Random",{templateUrl:"Random",controller:"Random_Ctrl"});$routeProvider.when("/Random01",{templateUrl:"Random01",controller:"Random01_Ctrl"});$routeProvider.when("/Random02",{templateUrl:"Random02",controller:"Random02_Ctrl"});$routeProvider.when("/Random03",{templateUrl:"Random03",controller:"Random03_Ctrl"});$routeProvider.when("/Random04",{templateUrl:"Random04",controller:"Random04_Ctrl"});$routeProvider.when("/Random05",{templateUrl:"Random05",controller:"Random05_Ctrl"});$routeProvider.when("/Random06",{templateUrl:"Random06",controller:"Random06_Ctrl"});$routeProvider.when("/Random07",{templateUrl:"Random07",controller:"Random07_Ctrl"});$routeProvider.when("/Random08",{templateUrl:"Random08",controller:"Random08_Ctrl"});$routeProvider.when("/Random09",{templateUrl:"Random09",controller:"Random09_Ctrl"});$routeProvider.when("/Random10",{templateUrl:"Random10",controller:"Random10_Ctrl"});$routeProvider.when("/Random11",{templateUrl:"Random11",controller:"Random11_Ctrl"});$routeProvider.when("/Random12",{templateUrl:"Random12",controller:"Random12_Ctrl"});$routeProvider.when("/Random13",{templateUrl:"Random13",controller:"Random13_Ctrl"});$routeProvider.when("/Random14",{templateUrl:"Random14",controller:"Random14_Ctrl"});$routeProvider.when("/Random15",{templateUrl:"Random15",controller:"Random15_Ctrl"});$routeProvider.when("/Random16",{templateUrl:"Random16",controller:"Random16_Ctrl"});$routeProvider.when("/Random17",{templateUrl:"Random17",controller:"Random17_Ctrl"});$routeProvider.when("/Random18",{templateUrl:"Random18",controller:"Random18_Ctrl"});$routeProvider.when("/Random19",{templateUrl:"Random19",controller:"Random19_Ctrl"});$routeProvider.when("/Random20",{templateUrl:"Random20",controller:"Random20_Ctrl"});$routeProvider.when("/Random21",{templateUrl:"Random21",controller:"Random21_Ctrl"});$routeProvider.when("/Random22",{templateUrl:"Random22",controller:"Random22_Ctrl"});$routeProvider.when("/Random23",{templateUrl:"Random23",controller:"Random23_Ctrl"});$routeProvider.when("/Random24",{templateUrl:"Random24",controller:"Random24_Ctrl"});$routeProvider.when("/Random25",{templateUrl:"Random25",controller:"Random25_Ctrl"});$routeProvider.otherwise({redirectTo:"/Home"});}]);NeoApp.filter("checkmark",function(){return function(input){return input?"\u2713":"\u2718";};});NeoApp.filter("element",function(){return function(input,idx1,idx2){idx1=idx1||0;if(input&&input.constructor===Array){if(idx2){return input[idx1,idx2];}else{return input[idx1];};};return"";};});NeoApp.filter("string",function(){return function(input){if(input&&input.constructor===Array)return input.toString();if(input)return input;return"";};});NeoApp.filter("default",function(){return function(input,defValue){if(!input)return defValue;return input;};});NeoApp.filter("trustUrl",function($sce){return function(url){return $sce.trustAsResourceUrl(url);};});NeoApp.filter('bool',function(){return function(input,valueTrue,valueFalse){return input!==true?valueFalse:valueTrue;};});NeoApp.filter('splitLt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(0,p):str;};});NeoApp.filter('splitRt',function(){return function(str,delimeter){var p=str.indexOf(delimeter);return(p>-1)?str.substring(p+1):str;};});NeoApp.controller("NeoApp_CoreCtrl",function($scope,$rootScope,$location,$route,$modal,$window,$timeout,$interval,$http,$filter,$compile,$animate){$App=$rootScope;$App.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPg=newUrl.substr(newUrl.lastIndexOf("/")+1);var oldPg=oldUrl.substr(oldUrl.lastIndexOf("/")+1);if(newPg=="!"){event.preventDefault();};if(newPg=="Home"){$timeout($scope.Home_pageenter);};if(newPg=="Home2"){$timeout($scope.Home2_pageenter);};if(oldPg=="adh00"){$scope.adh00_pageexit();};if(oldPg=="adh01"){$scope.adh01_pageexit();};if(oldPg=="adh02"){$scope.adh02_pageexit();};if(oldPg=="adh03"){$scope.adh03_pageexit();};if(oldPg=="adh04"){$scope.adh04_pageexit();};if(oldPg=="adh05"){$scope.adh05_pageexit();};if(oldPg=="adh06"){$scope.adh06_pageexit();};if(oldPg=="adh07"){$scope.adh07_pageexit();};if(oldPg=="adh08"){$scope.adh08_pageexit();};if(oldPg=="adh09"){$scope.adh09_pageexit();};if(oldPg=="adh10"){$scope.adh10_pageexit();};if(oldPg=="adh11"){$scope.adh11_pageexit();};if(oldPg=="adh12"){$scope.adh12_pageexit();};if(oldPg=="adh13"){$scope.adh13_pageexit();};if(oldPg=="adh14"){$scope.adh14_pageexit();};if(oldPg=="adh15"){$scope.adh15_pageexit();};if(oldPg=="adh16"){$scope.adh16_pageexit();};if(oldPg=="Dreamboard01"){$scope.Dreamboard01_pageexit();};if(oldPg=="Dreamboard02"){$scope.Dreamboard02_pageexit();};if(oldPg=="Dreamboard03"){$scope.Dreamboard03_pageexit();};if(oldPg=="Dreamboard04"){$scope.Dreamboard04_pageexit();};if(oldPg=="Dreamboard05"){$scope.Dreamboard05_pageexit();};if(oldPg=="Dreamboard06"){$scope.Dreamboard06_pageexit();};if(oldPg=="Dreamboard07"){$scope.Dreamboard07_pageexit();};if(oldPg=="Dreamboard08"){$scope.Dreamboard08_pageexit();};if(oldPg=="Dreamboard09"){$scope.Dreamboard09_pageexit();};if(oldPg=="Dreamboard10"){$scope.Dreamboard10_pageexit();};if(oldPg=="Dreamboard11"){$scope.Dreamboard11_pageexit();};if(oldPg=="Dreamboard12"){$scope.Dreamboard12_pageexit();};if(oldPg=="Dreamboard13"){$scope.Dreamboard13_pageexit();};if(oldPg=="Dreamboard14"){$scope.Dreamboard14_pageexit();};if(oldPg=="Dreamboard15"){$scope.Dreamboard15_pageexit();};if(oldPg=="Dreamboard16"){$scope.Dreamboard16_pageexit();};if(oldPg=="Dreamboard17"){$scope.Dreamboard17_pageexit();};if(oldPg=="Dreamboard18"){$scope.Dreamboard18_pageexit();};if(oldPg=="Dreamboard19"){$scope.Dreamboard19_pageexit();};if(oldPg=="Dreamboard20"){$scope.Dreamboard20_pageexit();};if(oldPg=="Dreamboard21"){$scope.Dreamboard21_pageexit();};if(oldPg=="Milesrecorder"){$scope.Milesrecorder_pageexit();};if(oldPg=="Random01"){$scope.Random01_pageexit();};if(oldPg=="Random02"){$scope.Random02_pageexit();};if(oldPg=="Random03"){$scope.Random03_pageexit();};if(oldPg=="Random04"){$scope.Random04_pageexit();};if(oldPg=="Random05"){$scope.Random05_pageexit();};if(oldPg=="Random06"){$scope.Random06_pageexit();};if(oldPg=="Random07"){$scope.Random07_pageexit();};if(oldPg=="Random08"){$scope.Random08_pageexit();};if(oldPg=="Random09"){$scope.Random09_pageexit();};if(oldPg=="Random10"){$scope.Random10_pageexit();};if(oldPg=="Random11"){$scope.Random11_pageexit();};if(oldPg=="Random12"){$scope.Random12_pageexit();};if(oldPg=="Random13"){$scope.Random13_pageexit();};if(oldPg=="Random14"){$scope.Random14_pageexit();};if(oldPg=="Random15"){$scope.Random15_pageexit();};if(oldPg=="Random16"){$scope.Random16_pageexit();};if(oldPg=="Random17"){$scope.Random17_pageexit();};if(oldPg=="Random18"){$scope.Random18_pageexit();};if(oldPg=="Random19"){$scope.Random19_pageexit();};if(oldPg=="Random20"){$scope.Random20_pageexit();};if(oldPg=="Random21"){$scope.Random21_pageexit();};if(oldPg=="Random22"){$scope.Random22_pageexit();};if(oldPg=="Random23"){$scope.Random23_pageexit();};if(oldPg=="Random24"){$scope.Random24_pageexit();};if(oldPg=="Random25"){$scope.Random25_pageexit();};});
$scope.SetError=function(msg){throw msg;};$scope.Refresh=function(){$timeout(angular.noop);};$scope.AddFont=function(fontName,fontPath){neotempstyle=document.createElement("style");var position=fontPath.lastIndexOf("/");if(position!=-1){position++;}else{position=0;}var extPosition=fontPath.lastIndexOf(".");extPosition++;var extension=fontPath.substr(extPosition);if(extension=="ttf"){extension="truetype";}if(window.location.href.indexOf("file://")!=-1){neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("'+fontPath+'") format("'+extension+'");}';}else{fontPath=fontPath.substr(position);neotempstyle.textContent='@font-face{font-family: "'+fontName+'";src: url("./fonts/'+fontPath+'") format("'+extension+'");}';}document.head.append(neotempstyle);};$scope.GetOrientation=function(){if($window.orientation){if(Math.abs(window.orientation)===90){return"Landscape";}else{return"Portrait";}}else{if($window.innerWidth>=$window.innerHeight){return"Landscape";}else{return"Portrait";}}};$scope.GotoPageNum=function(pgNum){if(pgNum>0&&pgNum<=$App.NAB.PageList.length){if($App.NAB.PageEnterEffect[pgNum-1]){$App.NAB._pageEffect=" animate enter-"+$App.NAB.PageEnterEffect[pgNum-1]+" exit-"+($App.NAB.PageExitEffect[pgNum-1]||"fadeOut");}else{$App.NAB._pageEffect="";}$timeout(function(){$location.path('/'+$App.NAB.PageList[pgNum-1]);});}else{$scope.SetError('Invalid page.');}};$scope.GotoPage=function(pgId){$scope.GotoPageNum($App.NAB.PageList.indexOf(pgId)+1);};$scope.GotoFirstPage=function(){$scope.GotoPageNum(1);};$scope.GotoLastPage=function(){$scope.GotoPageNum($App.NAB.PageList.length);};$scope.GotoNextPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum<$App.NAB.PageList.length){$scope.GotoPageNum(pgNum+1);return true;}return false;};$scope.GotoPrevPage=function(){var pgNum=$App.NAB.PageNumber;if(pgNum>1){$scope.GotoPageNum(pgNum-1);return true;}return false;};function makeSVG(tag,attrs){var el=document.createElementNS('http://www.w3.org/2000/svg',tag);for(var k in attrs)el.setAttribute(k,attrs[k]);return el;};function addSvgNode(objId,svgNode){if(document.getElementById(objId).tagName=="svg"){document.getElementById(objId).appendChild(svgNode);}else{document.getElementById(objId).getElementsByTagName('svg')[0].appendChild(svgNode);}};$scope.DrawCircle=function DrawCircle(objId,svgName,cx,cy,circleRadio,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('circle',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'r':circleRadio,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawEllipse=function DrawEllipse(objId,svgName,cx,cy,rx,ry,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('ellipse',{'id':svgName,'VisualNEOWebName':svgName,'cx':cx,'cy':cy,'rx':rx,'ry':ry,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawRect=function DrawRect(objId,svgName,posx,posy,width,height,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('rect',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'width':width,'height':height,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolygon=function DrawPolygon(objId,svgName,points,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('polygon',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPath=function DrawPath(objId,svgName,path,strokeColor,strokeWidth,fillColor){$App[svgName]=makeSVG('path',{'id':svgName,'VisualNEOWebName':svgName,'d':path,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':fillColor});addSvgNode(objId,$App[svgName]);};$scope.DrawPolyLine=function DrawPolyLine(objId,svgName,points,strokeColor,strokeWidth){$App[svgName]=makeSVG('polyline',{'id':svgName,'VisualNEOWebName':svgName,'points':points,'stroke':strokeColor,'stroke-width':strokeWidth,'fill':'none'});addSvgNode(objId,$App[svgName]);};$scope.DrawLine=function DrawLine(objId,svgName,x1,y1,x2,y2,strokeColor,strokeWidth){$App[svgName]=makeSVG('line',{'id':svgName,'VisualNEOWebName':svgName,'x1':x1,'y1':y1,'x2':x2,'y2':y2,'stroke':strokeColor,'stroke-width':strokeWidth});addSvgNode(objId,$App[svgName]);};$scope.DrawImage=function DrawImage(objId,svgName,fileName,x,y,width,height){$App[svgName]=makeSVG('image',{'id':svgName,'VisualNEOWebName':svgName,'x':x,'y':y,'width':width,'height':height,'xlink:href':''});$App[svgName].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",""+fileName+"");addSvgNode(objId,$App[svgName]);};$scope.DrawText=function DrawText(objId,svgName,theText,posx,posy,fillColor,fontSize,fontFamily,angle){$App[svgName]=makeSVG('text',{'id':svgName,'VisualNEOWebName':svgName,'x':posx,'y':posy,'stroke-width':0,'fill':fillColor,'font-size':fontSize,'font-family':fontFamily,'transform':'rotate('+angle+' '+posx+' '+posy+')'});$App[svgName].textContent=theText;addSvgNode(objId,$App[svgName]);};$scope.DrawClear=function DrawClear(objId){var n=0;$("#"+objId).children().each(function(){if(n!=0){$(this).remove();}n++;});};$scope.OnMouseEvent=function(objId,eventName,subroutine){if(eventName=="contextmenu"){if($App.NAB[objId]){$App.NAB[objId].on(eventName,function(e){e.preventDefault();subroutine;return;});}$("#"+objId).on(eventName,function(e){e.preventDefault();subroutine;return;});}if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnMouseEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.OnTouchEvent=function(objId,eventName,subroutine){if($App.NAB[objId]){$App.NAB[objId].on(eventName,subroutine);return;}$("#"+objId).on(eventName,subroutine);};$scope.RemoveOnTouchEvent=function(objId,eventName){if($App.NAB[objId]){$App.NAB[objId].off(eventName);return;}$("#"+objId).off(eventName);};$scope.ShowObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].show(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate enter-'+effect;}$timeout(function(){var name=objId+'_hidden';if($App.NAB[name])delete $App.NAB[name];});};$scope.HideObject=function(objId,effect,speed){if($App.NAB[objId]){$App.NAB[objId].hide(speed);return;}if(!effect||effect.toLowerCase()=='none'){$App.NAB[objId+'_effect']='';}else{if(speed)effect=effect+' speed-'+speed*50;$App.NAB[objId+'_effect']='animate exit-'+effect;}$timeout(function(){$App.NAB[objId+'_hidden']=true;});};$scope.DisableObject=function(objId,value){var name=objId+'_disabled';if(value){$App.NAB[name]=value;}else{if($App.NAB[name])delete $App.NAB[name];}};$scope.ClipObjectPolygon=function(objId,polygonId){var points=$("#"+polygonId).html();points=points.replace('<polygon vector-effect="non-scaling-stroke" points="',"");points=points.replace('"></polygon>','');coords=points.split(",");var puntos="";for(i=0;i<coords.length;i=i+2){if(i!=coords.length-2){puntos=puntos+coords[i]+"px "+coords[i+1]+"px,";}else{puntos=puntos+coords[i]+"px "+coords[i+1]+"px";}}$("#"+objId).css("clip-path","polygon("+puntos+")");};$scope.ClipObjectPath=function(objId,shape){if(shape=="circle"){$("#"+objId).css("clip-path","circle(50% at 50% 50%)");}else if(shape=="triangle"){$("#"+objId).css("clip-path","polygon(50% 0%, 0% 100%, 100% 100%)");}else if(shape=="rhombus"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)");}else if(shape=="pentagon"){$("#"+objId).css("clip-path","polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)");}else{$("#"+objId).css("clip-path",shape);}};$scope.SetObjectStyle=function(objId,selector,value){if($App.NAB[objId]){$App.NAB[objId].css(selector,value);return;}if($App[objId]){$("#"+objId).css(selector,value);return;}var name=objId+'_style';if(!$App.NAB[name])$App.NAB[name]={};if(value&&value.length>0){$App.NAB[name][selector]=value;}else{if($App.NAB[name][selector])delete $App.NAB[name][selector];if(jQuery.isEmptyObject($App.NAB[name]))delete $App.NAB[name];}};$scope.ClearObjectStyles=function(objId){var name=objId+'_style';if($App.NAB[name])delete $App.NAB[name];};$scope.GetObjectInfo=function(objId,info){if($App.NAB[objId]){return $App.NAB[objId].css(info);}return $("#"+objId).css(info);};$scope.GetObjectXY=function(objId,xvar,yvar){var rect=document.getElementById($App.NAB.PageID).getBoundingClientRect();$App.PageLeft=rect.left;$App.PageTop=rect.top;var objeto=document.getElementById(objId).getBoundingClientRect();$App[xvar]=objeto.x-$App.PageLeft;$App[yvar]=objeto.y-$App.PageTop;};$scope.SetObjectHTML=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].html(code);return;}var e=document.getElementById(objId);e.innerHTML=code;$compile(e)($scope);};$scope.GetObjectHTML=function(objId){if($App.NAB[objId]){return $App.NAB[objId].html();;}return document.getElementById(objId).innerHTML;};$scope.SetObjectAttribute=function(objId,AttrName,AttrValue){var element=$("#"+objId);if(AttrName==="src"){AttrName="ng-src";}var pendingChanges=$App.NAB['pendingChanges']||{};pendingChanges[objId]=pendingChanges[objId]||[];pendingChanges[objId].push({AttrName,AttrValue});$App.NAB['pendingChanges']=pendingChanges;$scope.applyPendingChanges();};$scope.applyPendingChanges=function(){var pendingChanges=$App.NAB['pendingChanges'];if(!pendingChanges||jQuery.isEmptyObject(pendingChanges)){return;}Object.keys(pendingChanges).forEach(function(objId){var element=$("#"+objId);if(element.length>0){pendingChanges[objId].forEach(function(change){element.attr(change.AttrName,change.AttrValue);$compile(element)($scope);});}});};$scope.GetObjectAttribute=function(objId,AttrName){if($App.NAB[objId]){return $App.NAB[objId].attr(AttrName);}return $("#"+objId).attr(AttrName);};$scope.SetObjectText=function(objId,code){if($App.NAB[objId]){$App.NAB[objId].text(code);return;}var e=document.getElementById(objId);e.innerText=code;$compile(e)($scope);};$scope.GetObjectText=function(objId){if($App.NAB[objId]){return $App.NAB[objId].text();}return document.getElementById(objId).innerText;};$scope.DuplicateObject=function(objId,objName,containerId){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");var e=document.getElementById(containerId);$compile(e)($scope);};$scope.DuplicateObjectEx=function(objId,objName,containerId,objStyle){if($App.NAB[objName]){$App.NAB[objName].remove();delete $App.NAB[objName];}else{$("#"+objName).remove();delete $App.NAB[objName];}if($App.NAB[objId]){$App.NAB[objName]=$App.NAB[objId].clone().appendTo("#"+containerId);}else if($App[objId]){$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id","");}else{$App.NAB[objName]=$("#"+objId).clone().appendTo("#"+containerId);$App.NAB[objName].attr("id",objName);$App.NAB[objName].atyle=document.getElementById(objId).style;}$App.NAB[objName].attr("VisualNEOWebName",objName);$App.NAB[objName].attr("ng-style","NAB."+objName+"_style");$App.NAB[objName].attr("ng-hide","NAB."+objName+"_hidden");$App.NAB[objName].attr("ng-disabled","NAB."+objName+"_disabled");$App.NAB[objName].attr("style",objStyle);var e=document.getElementById(containerId);$compile(e)($scope);};$scope.AnimateObjectCSS=function(objId,cssData,duration,delay,easing,callbackfn){if($App.NAB[objId]){$App.NAB[objId].delay(delay).animate(cssData,duration,easing,callbackfn);}else{$("#"+objId).delay(delay).animate(cssData,duration,easing,callbackfn);}};$scope.SetObjectCSS=function(objId,cssData){if($App.NAB[objId]){$App.NAB[objId].css(cssData);}else{$("#"+objId).css(cssData);}};$scope.CheckCollision=function(objId1,objId2){var x1=$("#"+objId1).offset().left;var y1=$("#"+objId1).offset().top;var h1=$("#"+objId1).outerHeight(true);var w1=$("#"+objId1).outerWidth(true);var b1=y1+h1;var r1=x1+w1;var x2=$("#"+objId2).offset().left;var y2=$("#"+objId2).offset().top;var h2=$("#"+objId2).outerHeight(true);var w2=$("#"+objId2).outerWidth(true);var b2=y2+h2;var r2=x2+w2;if(b1<y2||y1>b2||r1<x2||x1>r2){return false;}else{return true;}};$scope.CheckFullCollision=function(objId1,objId2){var r1=document.getElementById(rectone);var r2=document.getElementById(recttwo);var r1bb=r1.getBoundingClientRect();var r2bb=r2.getBoundingClientRect();var r1x=r1bb.x;var r1w=r1bb.width;var r1y=r1bb.y;var r1h=r1bb.height;var r2x=r2bb.x;var r2w=r2bb.width;var r2y=r2bb.y;var r2h=r2bb.height;if(r1x+1>=r2x&&r1y+1>=r2y&&r1x+r1w-1<=r2x+r2w&&r1y+r1h-1<=r2y+r2h){return true;}else{return false;}};function fixUnit(s){var t=s.toString();var parts=t.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);return(parts[2])?t:parts[1]+'px';}$scope.SetObjectBounds=function(objId,l,t,w,h){if($App.NAB[objId]){var e=$App.NAB[objId];}else{var e=document.getElementById(objId);}if(w){w=fixUnit(w);e.style.width=w;$scope.SetObjectStyle(objId,'width',w);};if(h){h=fixUnit(h);e.style.height=h;$scope.SetObjectStyle(objId,'height',h);};if(l){l=fixUnit(l);e.style.left=l;$scope.SetObjectStyle(objId,'left',l);};if(t){t=fixUnit(t);e.style.top=t;$scope.SetObjectStyle(objId,'top',t);};};$scope.MoveObject=function(objId,left,top){if($App.NAB[objId]){$App.NAB[objId].css("left",left);$App.NAB[objId].css("top",top);}else{$scope.SetObjectBounds(objId,left,top);}};$scope.ObjectToFront=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().appendTo(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().appendTo(theParent);}};$scope.ObjectToBack=function(objId){if($App.NAB[objId]){theParent=$App.NAB[objId].parent();$App.NAB[objId].detach().prependTo(theParent);}else if($("#"+objId).parent().prop("tagName")=="svg"){theParent=$("#"+objId).parent().children().first();$("#"+objId).detach().insertAfter(theParent);}else{theParent=$("#"+objId).parent();$("#"+objId).detach().prependTo(theParent);}};$scope.SizeObject=function(objId,width,height){if($App.NAB[objId]){w=fixUnit(width);h=fixUnit(height);$App.NAB[objId].css("width",w);$App.NAB[objId].css("height",h);}else{$scope.SetObjectBounds(objId,null,null,width,height);}};$scope.RotateObject=function(objId,deg){if($App.NAB[objId]){$App.NAB[objId].css("webkitTransform","rotate("+deg+"deg)");$App.NAB[objId].css("mozTransform","rotate("+deg+"deg)");$App.NAB[objId].css("msTransform","rotate("+deg+"deg)");$App.NAB[objId].css("oTransform","rotate("+deg+"deg)");$App.NAB[objId].css("transform","rotate("+deg+"deg)");}else{var e=document.getElementById(objId);e.style.webkitTransform='rotate('+deg+'deg)';e.style.mozTransform='rotate('+deg+'deg)';e.style.msTransform='rotate('+deg+'deg)';e.style.oTransform='rotate('+deg+'deg)';e.style.transform='rotate('+deg+'deg)';};};$scope.ListBoxSort=function(objId){if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};$("#"+objId+" option").filter(function(){return!this.value||$.trim(this.value).length==0||$.trim(this.text).length==0;}).remove();var options=$("#"+objId+" option");var arr=options.map(function(_,o){return{t:$(o).text(),v:o.value};}).get();arr.sort(function(o1,o2){return o1.t>o2.t?1:o1.t<o2.t?-1:0;});options.each(function(i,o){o.value=arr[i].v;$(o).text(arr[i].t);});if($("#"+objId).children("option:selected").text()==""){$("#"+objId).children("option:selected").remove();};};$scope.ListBoxMoveItem=function(listID,direction){var listbox=document.getElementById(listID);var selIndex=listbox.selectedIndex;if(-1==selIndex){return;}var increment=-1;if(direction=='up'){if(selIndex==1){return;}else{increment=-1;}}else{increment=1;}if((selIndex+increment)<0||(selIndex+increment)>(listbox.options.length-1)){return;}var selValue=listbox.options[selIndex].value;var selText=listbox.options[selIndex].text;listbox.options[selIndex].value=listbox.options[selIndex+increment].value
listbox.options[selIndex].text=listbox.options[selIndex+increment].text
listbox.options[selIndex+increment].value=selValue;listbox.options[selIndex+increment].text=selText;listbox.selectedIndex=selIndex+increment;};$scope.OpenDialog=function(dlgId){var modalInstance=$modal.open({templateUrl:dlgId,controller:dlgId+'_Ctrl',scope:$scope,size:'sm',backdrop:'static',animation:true});};$scope.AlertBox=function(dlgTitle,dlgMsg,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-primary" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.AlertBoxEx=function(dlgTitle,dlgMsg,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var dlgKind=dlgKind||"primary";if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+'<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialog();">OK</button>'+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn!=undefined){modalInstance.result.then(function(){callbackFn()},function(){callbackFn()});}};$scope.MessageBoxEx=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,theWidth,theHeight,theColor,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}if(theWidth<150){theWidth=150;}if(theHeight<200){theHeight=200;}var modalBodyMaxHeight=theHeight-140;var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-custom" style="color:#fff;background:'+theColor+';" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" style="width:'+theWidth+'px;height:'+theHeight+'px;" ng-class="modal-sm">'+'<div class="modal-content">'+'<div style="background:'+theColor+';" class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div style="overflow:auto;max-height:'+modalBodyMaxHeight+'px" class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.MessageBox=function(dlgTitle,dlgMsg,dlgButtons,dlgKind,callbackFn){detect1=dlgMsg.toLowerCase().search("<script");detect2=dlgMsg.toLowerCase().search("javascript:");detect3=dlgMsg.toLowerCase().search("onclick");detect4=dlgMsg.toLowerCase().search("onmouse");if(detect1!=-1||detect2!=-1||detect3!=-1||detect4!=-1){return;}var idx;var btns=dlgButtons.split("|");var btnsHTML='';for(idx=0;idx<btns.length;idx++){btnsHTML+='<button class="btn btn-primary" ng-click="CloseDialogBtn('+idx.toString()+');">'+btns[idx]+'</button>';}var dlgKind=dlgKind||"primary";var modalInstance=$modal.open({template:'<div class="modal-dialog" ng-class="modal-sm">'+'<div class="modal-content">'+'<div class="modal-header bg-'+dlgKind+'">'+'<h4 class="modal-title">'+dlgTitle+'</h4>'+'</div>'+'<div class="modal-body">'+'<p>'+dlgMsg+'</p>'+'</div>'+'<div class="modal-footer">'+btnsHTML+'</div>'+'</div>'+'</div>',controller:'App_DlgCtrl',scope:$scope,size:'sm',backdrop:'static'});if(callbackFn){modalInstance.result.then(function(value){callbackFn(value+1)},function(){callbackFn(0)});}};$scope.SerializeForm=function(formId){var form=document.getElementById(formId);if(!form||form.nodeName!=="FORM")return;var i,j,s,field,m,q=[];for(i=0;i<form.elements.length;i++){field=form.elements[i];if(field.name==="")continue;switch(field.nodeName){case'INPUT':switch(field.type){case'text':case'hidden':case'password':case'number':q.push(field.name+"="+encodeURIComponent(field.value));break;case'checkbox':if(angular.isElement(field)){m=angular.element(field).controller('ngModel');if(m){q.push(field.name+"="+encodeURIComponent(m.$modelValue));break;}}q.push(field.name+"="+encodeURIComponent(field.checked));break;case'radio':if(field.checked){q.push(field.name+"="+encodeURIComponent(field.value));}break;case'file':break;}break;case'TEXTAREA':q.push(field.name+"="+encodeURIComponent(field.value));break;case'SELECT':switch(field.type){case'select-one':q.push(field.name+"="+encodeURIComponent(field.value));break;case'select-multiple':s='';for(j=field.options.length-1;j>=0;j=j-1){if(field.options[j].selected){s+=','+encodeURIComponent(field.options[j].value);}}if(s.length>0)q.push(field.name+"="+s.substr(1));break;}break;}}return q.join("&");};$scope.SubmitForm=function(form,url,method,submitFn,successFn,failFn){var ok=true;if(submitFn){ok=submitFn();}if(ok&&form&&url&&method){var f=$scope.SerializeForm(form);$http({method:method,url:url,data:f,responseType:"text",headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(function(response){if(successFn)successFn(response.data,response.status);},function(response){if(failFn)failFn(response.data,response.status);});}};$scope.FormSubmit=function(formulario,url){var neoApp=angular.element(document.getElementById("ng-view")).scope();var fnsubmit=neoApp[formulario+"_submit"];var fnsuccess=neoApp[formulario+"_success"];var fnfail=neoApp[formulario+"_fail"];neoApp.SubmitForm(formulario,url,'POST',fnsubmit,fnsuccess,fnfail);};$scope.FormReset=function(formulario){$("#"+formulario).trigger("reset");};$scope.SetCompVar=function(varname,varvalue){varname2="";vararray=varname.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname2]=varvalue;};$scope.GetCompVar=function(varname,composedvar){varname2="";vararray=composedvar.split("[");for(n=0;n<vararray.length;n++){vararray[n]=vararray[n].replace("]","");if($App[vararray[n]]!=undefined){varname2=varname2+$App[vararray[n]];}else{varname2=varname2+vararray[n];};};$App[varname]=$App[varname2];};$scope.ArraySuffle=function(array,newArray){for(n=0;n<array.length;n++){newArray[n]=array[n];}var currentIndex=newArray.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=newArray[currentIndex];newArray[currentIndex]=newArray[randomIndex];newArray[randomIndex]=temporaryValue;}};$scope.ArrayCopy=function(a,start,len){if(a&&start>-1&&len>0)return a.slice(start,start+len);return[]};$scope.LoadGoogleFont=function(fontName){$("head").append("<link href='https://fonts.googleapis.com/css?family="+fontName+"' rel='stylesheet' type='text/css'>");};$scope.LocalFileToVar=function(inputFileName,resultVar,tipo){$App.NAB.temp=resultVar;var realInputFileName=$("#"+inputFileName).prop("for");var files=$('#'+realInputFileName).prop("files");for(var i=0,f;f=files[i];i++){var reader=new FileReader();reader.onload=(function(theFile,resultVar,callBackFunction){return function(e,resultVar){varName=$App.NAB.temp;$App[varName]=e.target.result;};})(f);if(tipo=="text"){reader.readAsText(f);}else if(tipo=="binary"){reader.readAsBinaryString(f);}else if(tipo=="base64"){reader.readAsDataURL(f);}else{reader.readAsArrayBuffer(f);}};};$scope.SvgToBase64=function(theContainer,theWidth,theHeight,theType,theQuality,resultVar,callbackFn){var tagName=$("#"+theContainer).prop("tagName").toLowerCase();if(tagName=="svg"){var svg=document.getElementById(theContainer);}else{var svg=document.querySelector("#"+theContainer+" svg");}var svgToBase64PngTemp=svg.outerHTML;tempWidth=svg.getAttribute("width");if(tempWidth==null){tempWidth=theWidth;}tempHeight=svg.getAttribute("height");if(tempHeight==null){tempHeight=theHeight;}svg.setAttribute("width",theWidth);svg.setAttribute("height",theHeight);var svgData=new XMLSerializer().serializeToString(svg);var canvas=document.createElement("canvas");canvas.width=theWidth;canvas.height=theHeight;var ctx=canvas.getContext("2d");var img=document.createElement("img");img.setAttribute("src","data:image/svg+xml;base64,"+btoa(svgData));img.onload=function(){ctx.drawImage(img,0,0);svg.setAttribute("width",tempWidth);svg.setAttribute("height",tempHeight);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL("image/jpeg",theQuality);if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}else{$App[resultVar]=canvas.toDataURL("image/png");if(callbackFn!=""&&callbackFn!=null&&callbackFn!=undefined){callbackFn();}}};};$scope.ImgToBase64=function(theImg,theType,theQuality,resultVar){var img=document.querySelector("#"+theImg);const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=img.naturalWidth;canvas.height=img.naturalHeight;ctx.drawImage(img,0,0);if(theType=="jpg"){$App[resultVar]=canvas.toDataURL('image/jpeg',theQuality);}else{$App[resultVar]=canvas.toDataURL('image/png');}};$scope.Base64ToLocalFile=function(dataurl,filename){var arr=dataurl.split(','),mime=arr[0].match(/:(.*?);/)[1],bstr=atob(arr[1]),n=bstr.length,u8arr=new Uint8Array(n);while(n--){u8arr[n]=bstr.charCodeAt(n);}theFile=new File([u8arr],filename,{type:mime});saveAs(theFile,filename);};$scope.ResizeDesktopWindow=function(theWidth,theHeight){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){window.resizeTo(theWidth,theHeight);}};$scope.FitAppToScreen=function(coverScreen,verticalAlign,horizontalAlign){$scope.AppPosition(verticalAlign,horizontalAlign);var ha=horizontalAlign.toUpperCase();var va=verticalAlign.toUpperCase();if(va=="MIDDLE"){va="CENTER"};fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]});fit(document.getElementById("ng-app"),{x:0,y:0,width:window.innerWidth,height:window.innerHeight},{cover:coverScreen,hAlign:fit[ha],vAlign:fit[va]},function(transform){$App.NAB.AppScale=transform.scale});};$scope.IsInstalled=function(){if(window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true){return true;}else{return false;}};$scope.CenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px");$("body").css("bottom","0px");$("body").css("left","0px");$("body").css("right","0px");$("body").css("margin","auto");$("body").css("margin","auto");};$scope.TopCenterApp=function(){$("body").css("position","absolute");$("body").css("top","0px!important");$("body").css("left","0px");$("body").css("right","0px");$("body").css("bottom","auto");$("body").css("margin","auto");};$scope.ScaleApp=function(thezoom){$App.NAB.AppScale=thezoom;$("#ng-app").css("transform-origin","50% 50%");$("#ng-app").css("transform","scale("+thezoom+","+thezoom+")");};$scope.AppPosition=function(vertical,horizontal){$('body').css("position","absolute");if(vertical=="top"){$('body').css("top","0px");$('body').css("bottom","auto");}else if(vertical=="bottom"){$('body').css("bottom","0px");$('body').css("top","auto");}else{$('body').css("bottom","0px");$('body').css("top","0px");}if(horizontal=="left"){$('body').css("left","0px");$('body').css("right","auto");}else if(horizontal=="right"){$('body').css("left","auto");$('body').css("right","0px");}else{$('body').css("left","0px");$('body').css("right","0px");}$('body').css("margin","auto");};$scope.SetResponsivePages=function(plarge,pmedium,psmall,pxsmall){if(matchMedia){const largedisp=window.matchMedia("(min-width: 1025px)");const mediumdisp=window.matchMedia("(min-width: 768px) and (max-width: 1024px)");const smalldisp=window.matchMedia("(min-width: 481px) and (max-width: 767px)");const verysmalldisp=window.matchMedia("(min-width: 320px) and (max-width: 480px)");funciones=angular.element(document.getElementById("ng-view")).scope();$("body").css("width","100%");$("body").css("height","100%");$("body").css("overflow-x","hidden");$("body").css("overflow-y","auto");largedisp.addListener(WidthChangeLarge);WidthChangeLarge(largedisp);mediumdisp.addListener(WidthChangeMedium);WidthChangeMedium(mediumdisp);smalldisp.addListener(WidthChangeSmall);WidthChangeSmall(smalldisp);verysmalldisp.addListener(WidthChangeVerySmall);WidthChangeVerySmall(verysmalldisp);function WidthChangeLarge(largedisp){if(largedisp.matches){funciones.GotoPage(plarge);}};function WidthChangeMedium(mediumdisp){if(mediumdisp.matches){funciones.GotoPage(pmedium);}};function WidthChangeSmall(smalldisp){if(smalldisp.matches){funciones.GotoPage(psmall);}};function WidthChangeVerySmall(verysmalldisp){if(verysmalldisp.matches){funciones.GotoPage(pxsmall);}};}};$scope.AppBackgroundColor=function(thecolor){$("html").css("background",thecolor);};$scope.AppBackgroundImage=function(imagen){ruta=$("#"+imagen).attr('src');$("html").css('background-image','url('+ruta+' )');$("html").css('background-repeat','no-repeat');$("html").css('background-position','center center');$("html").css('background-attachment','fixed');$("html").css("-webkit-background-size","cover");$("html").css("-moz-background-size","cover");$("html").css("-o-background-size","cover");$("html").css("background-size","cover");};$scope.ObjDisableSelection=function(objectname){$("#"+objectname).css("-webkit-touch-callout","none");$("#"+objectname).css("-webkit-user-select","none");$("#"+objectname).css("-khtml-user-select","none");$("#"+objectname).css("-moz-user-select","none");$("#"+objectname).css("-ms-user-select","none");$("#"+objectname).css("user-select","none");};$scope.DisableSelection=function(){$("*").css("-webkit-touch-callout","none");$("*").css("-webkit-user-select","none");$("*").css("-khtml-user-select","none");$("*").css("-moz-user-select","none");$("*").css("-ms-user-select","none");$("*").css("user-select","none");};$scope.GetUrlParameter=function(param){url=window.location.href;var queryString=url?url.split('?')[1]:window.location.search.slice(1);var obj={};if(queryString){queryString=queryString.split('#')[0];var arr=queryString.split('&');for(var i=0;i<arr.length;i++){var a=arr[i].split('=');var paramName=a[0];var paramValue=typeof(a[1])==='undefined'?true:a[1];if(typeof paramValue==='string')paramValue=paramValue;if(paramName.match(/\[(\d+)?\]$/)){var key=paramName.replace(/\[(\d+)?\]/,'');if(!obj[key])obj[key]=[];if(paramName.match(/\[\d+\]$/)){var index=/\[(\d+)\]/.exec(paramName)[1];obj[key][index]=paramValue;}else{obj[key].push(paramValue);}}else{if(!obj[paramName]){obj[paramName]=paramValue;}else if(obj[paramName]&&typeof obj[paramName]==='string'){obj[paramName]=[obj[paramName]];obj[paramName].push(paramValue);}else{obj[paramName].push(paramValue);}}}}return obj[param];};$scope.csvToJSON=function(mycsv,separator,jsonObject){var lines=$App[mycsv].split("\n");var result=[];var headers=lines[0].split(separator);for(var i=1;i<lines.length;i++){var obj={};var currentline=lines[i].split(separator);for(var j=0;j<headers.length;j++){obj[headers[j]]=currentline[j];}result.push(obj);}$App[jsonObject]=result;};$scope.CheckInternetConnection=function(url,timeout,successFn,errorFn){$.ajax({url:url,timeout:timeout,cache:false,success:function(){if(successFn!=undefined){successFn();}},error:function(){if(errorFn!=undefined){errorFn();}},});};$scope.SetRelativePosition=function(objectname,vertical,horizontal){$("#"+objectname).css("position","absolute");if(vertical=="top"){$("#"+objectname).css("top","0px");$("#"+objectname).css("bottom","auto");}else if(vertical=="bottom"){$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","auto");}else{$("#"+objectname).css("bottom","0px");$("#"+objectname).css("top","0px");}if(horizontal=="left"){$("#"+objectname).css("left","0px");$("#"+objectname).css("right","auto");}else if(horizontal=="right"){$("#"+objectname).css("left","auto");$("#"+objectname).css("right","0px");}else{$("#"+objectname).css("left","0px");$("#"+objectname).css("right","0px");}$("#"+objectname).css("margin","auto");};$scope.WatchVar=function(varName,fn){if($App.NAB.$Watches[varName]){if($App.NAB.$Watches[varName].deRegFn)$App.NAB.$Watches[varName].deRegFn();delete $App.NAB.$Watches[varName];};if(fn){$App.NAB.$Watches[varName]={id:varName,deRegFn:undefined};$App.NAB.$Watches[varName].deRegFn=$scope.$watch(varName,function(newVal,oldVal){if(oldVal!==newVal)fn(newVal,oldVal);});};};$scope.TimerStart=function(objId,ms){if($App.NAB.$Timers[objId]){if(!angular.isDefined($App.NAB.$Timers[objId].promise)){$App.NAB.$Timers[objId].stime=Date.now();$App.NAB.$Timers[objId].promise=$interval($App.NAB.$Timers[objId].fn,ms||1000);}}else throw'A timer named "'+objId+'" does not exist.';};$scope.TimerStop=function(objId){if($App.NAB.$Timers[objId]){if(angular.isDefined($App.NAB.$Timers[objId].promise)){$interval.cancel($App.NAB.$Timers[objId].promise);$App.NAB.$Timers[objId].promise=undefined;}}else throw'A timer named "'+objId+'" does not exist.';};$scope._DeleteSound=function(sname){if($App.NAB.$Audio[sname]){$App.NAB.$Audio[sname].player.pause();delete $App.NAB.$Audio[sname].player;delete $App.NAB.$Audio[sname];return true;}return false;};$scope.PlaySound=function(fname,loop){var sname=ExtractFileName(fname).toLowerCase();if($App.NAB.$Audio[sname])throw'A sound named "'+sname+'" is already playing.';var devicePlatform=(typeof device!=='undefined'&&device.platform)?device.platform:null;if(typeof Audio!=="undefined"&&devicePlatform===null){obj={id:sname,kind:"audio",player:new Audio(fname)};obj.player.addEventListener("ended",function(){$scope._DeleteSound(sname);});}else if(devicePlatform){if(devicePlatform==='Android'){if(!IsUrl(fname))fname='/android_asset/www/'+fname;}obj={id:sname,kind:"media",player:new Media(fname,function onSuccess(){$scope._DeleteSound(sname);},function onError(e){console.log("Error playing sound: "+JSON.stringify(e));$scope._DeleteSound(sname);})};}else throw'Sound API unavailable.';$App.NAB.$Audio[sname]=obj;if(obj.kind==="audio"){obj.player.loop=loop;obj.player.play();}else obj.player.play({numberOfLoops:loop});};$scope.StopSound=function(fname){if(!fname||fname.length===0){for(var id in $App.NAB.$Audio)$scope._DeleteSound(id);}else{var sname=ExtractFileName(fname).toLowerCase();if(!$scope._DeleteSound(sname))throw'There is no playing sound named "'+sname+'"';}};$scope.CreateVideoPlayer=function(objId,fname,controls,autoplay,looping,muted){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}if(muted){addmuted="muted";}else{addmuted="";}htmlstring='<video id="'+objId+'Video" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+' '+addmuted+'><source src="'+fname+'" type="video/mp4"></video>';$("#"+objId).html(htmlstring);};$scope.OnVideoEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Video"]){$App.NAB[objId+"Video"].on(eventName,subroutine);return;}$("#"+objId+"Video").on(eventName,subroutine);};$scope.CreateAudioPlayer=function(objId,fname,controls,autoplay,looping){var sname=ExtractFileName(fname).toLowerCase();if(controls){addcontrols="controls";}else{addcontrols="";}if(autoplay){addautoplay="autoplay";}else{addautoplay="";}if(looping){addloop="loop";}else{addloop="";}htmlstring='<audio id="'+objId+'Audio" width="100%" height="100%" '+addcontrols+' '+addautoplay+' '+addloop+'><source src="'+fname+'" type="audio/mp3"></audio>';$("#"+objId).html(htmlstring);};$scope.OnAudioEvent=function(objId,eventName,subroutine){if($App.NAB[objId+"Audio"]){$App.NAB[objId+"Audio"].on(eventName,subroutine);return;}$("#"+objId+"Audio").on(eventName,subroutine);};$scope.SoundBeep=function(){var snd=new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");snd.play();};var fit=function(){"use strict";function t(t){return t.toUpperCase()}function e(t){return"number"==typeof t&&!isNaN(t)}function n(){return(new Date).getTime()}function i(t,e){for(var n=[],i=0,r=t.length;r>i;i++)n[i]=e(t[i]);return n}function r(t,e){for(var n in e)n in t||(t[n]=e[n]);return t}function o(e){if(!d)for(var n,i=H(C.body),r=w,o=0,a=T.length;a>o&&(d=T[o],n=d+r,!(n in i))&&(d=d.replace(/^(\w)/,t),n=d+r,!(n in i));o++);return d+e}function a(t){var e=H(t),n=e[o(w)].replace(/[a-z()]/gi,"").split(",");if(n.length<6)return[1,0,0,1,0,0];for(var i=0;6>i;i++)n[i]=parseFloat(n[i]);return n}function f(t,e){var n=a(e);n[0]=t.scale,n[3]=t.scale,n[4]+=t.tx,n[5]+=t.ty;var r=i(n,function(t){return t.toFixed(6)});e.style[o(m)]="0 0",e.style[o(w)]="matrix("+r.join(",")+")"}function s(t,e){var n=H(e),i=parseFloat(n.left)||0,r=parseFloat(n.top)||0;"static"===n.position&&(e.style.position="relative"),e.style.left=i+t.tx+b,e.style.top=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function l(t,e){var n=H(e),i=parseFloat(n.marginLeft)||0,r=parseFloat(n.marginTop)||0;e.style.marginLeft=i+t.tx+b,e.style.marginTop=r+t.ty+b,e.style.height=t.height+b,e.style.width=t.width+b}function h(t,e){e.height*=t.scale,e.width*=t.scale,e.x+=t.tx,e.y+=t.ty}function u(t){if(t.nodeType&&1==t.nodeType){var n=t.getBoundingClientRect();t={height:t.offsetHeight,width:t.offsetWidth,x:n.left,y:n.top}}return!e(t.x)&&e(t.left)&&(t.x=t.left),!e(t.y)&&e(t.top)&&(t.y=t.top),t}function c(){var t=n(),e=t-y;if(x>=e)clearInterval(v),v=setTimeout(c,x-e);else{for(var i=0,r=M.length;r>i;i++)M[i]();y=t}}function g(t,e,n,i,r){var o=u(t),a=u(e),s=0===o.width?R:o.width,l=0===o.height?P:o.height,c=0===a.width?I:a.width,g=0===a.height?P:a.height;R=s,B=l,I=c,P=g;var p=c/s,d=g/l,y=s/l,v=c/g,x=n.cover?d:p,m=n.cover?p:d,w=y>=v?x:m,T=s*w,O=l*w,F=n.hAlign==E?.5*(T-c):n.hAlign==L?T-c:0,b=n.vAlign==E?.5*(O-g):n.vAlign==A?O-g:0;return r=r||{},r.tx=a.x-F-o.x,r.ty=a.y-b-o.y,r.x=a.x-F-o.x*w,r.y=a.y-b-o.y*w,r.height=o.height*w,r.width=o.width*w,r.scale=w,i?i(r,t):n.apply&&(i="undefined"!=typeof HTMLElement&&t instanceof HTMLElement?f:h)(r,t),r}function p(t,e,n,i){if(!t||!e)throw"You must supply a target and a container";"function"==typeof n&&(i=n,n={}),n=r(n||{},N);var o=g(t,e,n,i);return n.watch&&(M.length||(z.addEventListener?(z.addEventListener("resize",c),z.addEventListener("orientationchange",c)):(z.attachEvent("onresize",c),z.attachEvent("onorientationchange",c))),o.trigger=function(){g(t,e,n,i,o)},o.on=function(t){var e=M.indexOf(o.trigger);~e||M.push(o.trigger),t||o.trigger()},o.off=function(){var t=M.indexOf(o.trigger);~t&&M.splice(t,1)},o.on(!0)),o}var d,y,v,x=50,m="TransformOrigin",w="Transform",T="moz ms o webkit".split(" "),E="center",A="bottom",L="right",O="left",F="top",b="px",z=window||self,C=document,H=z.getComputedStyle,M=[],N={hAlign:E,vAlign:E,watch:!1,cover:!1,apply:!0};Array.prototype.indexOf||(Array.prototype.indexOf=function(t){for(var e=0;e<this.length;++e)if(this[e]==t)return e;return-1});var R,B,I,P;return r(p,{watching:M,defaults:N,cssTransform:f,cssPosition:s,cssMargin:l,CENTER:E,BOTTOM:A,RIGHT:L,LEFT:O,TOP:F})}();"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=fit),exports.fit=fit);(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],function($){return factory($)})}else if(typeof module==="object"&&typeof module.exports==="object"){exports=factory(require("jquery"))}else{factory(jQuery)}})(function($){$.easing.jswing=$.easing.swing;var pow=Math.pow,sqrt=Math.sqrt,sin=Math.sin,cos=Math.cos,PI=Math.PI,c1=1.70158,c2=c1*1.525,c3=c1+1,c4=2*PI/3,c5=2*PI/4.5;function bounceOut(x){var n1=7.5625,d1=2.75;if(x<1/d1){return n1*x*x}else if(x<2/d1){return n1*(x-=1.5/d1)*x+.75}else if(x<2.5/d1){return n1*(x-=2.25/d1)*x+.9375}else{return n1*(x-=2.625/d1)*x+.984375}}$.extend($.easing,{def:"easeOutQuad",swing:function(x){return $.easing[$.easing.def](x)},easeInQuad:function(x){return x*x},easeOutQuad:function(x){return 1-(1-x)*(1-x)},easeInOutQuad:function(x){return x<.5?2*x*x:1-pow(-2*x+2,2)/2},easeInCubic:function(x){return x*x*x},easeOutCubic:function(x){return 1-pow(1-x,3)},easeInOutCubic:function(x){return x<.5?4*x*x*x:1-pow(-2*x+2,3)/2},easeInQuart:function(x){return x*x*x*x},easeOutQuart:function(x){return 1-pow(1-x,4)},easeInOutQuart:function(x){return x<.5?8*x*x*x*x:1-pow(-2*x+2,4)/2},easeInQuint:function(x){return x*x*x*x*x},easeOutQuint:function(x){return 1-pow(1-x,5)},easeInOutQuint:function(x){return x<.5?16*x*x*x*x*x:1-pow(-2*x+2,5)/2},easeInSine:function(x){return 1-cos(x*PI/2)},easeOutSine:function(x){return sin(x*PI/2)},easeInOutSine:function(x){return-(cos(PI*x)-1)/2},easeInExpo:function(x){return x===0?0:pow(2,10*x-10)},easeOutExpo:function(x){return x===1?1:1-pow(2,-10*x)},easeInOutExpo:function(x){return x===0?0:x===1?1:x<.5?pow(2,20*x-10)/2:(2-pow(2,-20*x+10))/2},easeInCirc:function(x){return 1-sqrt(1-pow(x,2))},easeOutCirc:function(x){return sqrt(1-pow(x-1,2))},easeInOutCirc:function(x){return x<.5?(1-sqrt(1-pow(2*x,2)))/2:(sqrt(1-pow(-2*x+2,2))+1)/2},easeInElastic:function(x){return x===0?0:x===1?1:-pow(2,10*x-10)*sin((x*10-10.75)*c4)},easeOutElastic:function(x){return x===0?0:x===1?1:pow(2,-10*x)*sin((x*10-.75)*c4)+1},easeInOutElastic:function(x){return x===0?0:x===1?1:x<.5?-(pow(2,20*x-10)*sin((20*x-11.125)*c5))/2:pow(2,-20*x+10)*sin((20*x-11.125)*c5)/2+1},easeInBack:function(x){return c3*x*x*x-c1*x*x},easeOutBack:function(x){return 1+c3*pow(x-1,3)+c1*pow(x-1,2)},easeInOutBack:function(x){return x<.5?pow(2*x,2)*((c2+1)*2*x-c2)/2:(pow(2*x-2,2)*((c2+1)*(x*2-2)+c2)+2)/2},easeInBounce:function(x){return 1-bounceOut(1-x)},easeOutBounce:bounceOut,easeInOutBounce:function(x){return x<.5?(1-bounceOut(1-2*x))/2:(1+bounceOut(2*x-1))/2}})});function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});$scope.EnterFullScreen=function(){$(document).fullScreen(true);};$scope.ExitFullScreen=function(){$(document).fullScreen(false);};$scope.ObjectEnterFullScreen=function(ObjId){$("#"+ObjId).fullScreen(true);};$scope.ObjectExitFullScreen=function(ObjId){$("#"+ObjId).fullScreen(false);};var neoscript;$scope.AppOnKeyDown=function(callbackFn){$("body").keydown(function(evt){callbackFn(evt.which);});};(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Depricated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;return b.open("HEAD",a,!1),b.send(),200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||"object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}};f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});$scope.VarToFile=function(datavar,filename){var blob=new Blob([datavar],{type:"text/plain;charset=utf-8"});saveAs(blob,filename);};!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.mexp=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./postfix_evaluator.js");d.prototype.formulaEval=function(){"use strict";for(var a,b,c,d=[],e=this.value,f=0;f<e.length;f++)1===e[f].type||3===e[f].type?d.push({value:3===e[f].type?e[f].show:e[f].value,type:1}):13===e[f].type?d.push({value:e[f].show,type:1}):0===e[f].type?d[d.length-1]={value:e[f].show+("-"!=e[f].show?"(":"")+d[d.length-1].value+("-"!=e[f].show?")":""),type:0}:7===e[f].type?d[d.length-1]={value:(1!=d[d.length-1].type?"(":"")+d[d.length-1].value+(1!=d[d.length-1].type?")":"")+e[f].show,type:7}:10===e[f].type?(a=d.pop(),b=d.pop(),"P"===e[f].show||"C"===e[f].show?d.push({value:"<sup>"+b.value+"</sup>"+e[f].show+"<sub>"+a.value+"</sub>",type:10}):d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+"<sup>"+a.value+"</sup>",type:1})):2===e[f].type||9===e[f].type?(a=d.pop(),b=d.pop(),d.push({value:(1!=b.type?"(":"")+b.value+(1!=b.type?")":"")+e[f].show+(1!=a.type?"(":"")+a.value+(1!=a.type?")":""),type:e[f].type})):12===e[f].type&&(a=d.pop(),b=d.pop(),c=d.pop(),d.push({value:e[f].show+"("+c.value+","+b.value+","+a.value+")",type:12}));return d[0].value},b.exports=d},{"./postfix_evaluator.js":5}],2:[function(a,b,c){function d(a,b){for(var c=0;c<a.length;c++)a[c]+=b;return a}function e(a,b,c,d){for(var e=0;e<d;e++)if(a[c+e]!==b[e])return!1;return!0}var f=a("./math_function.js"),g=["sin","cos","tan","pi","(",")","P","C","asin","acos","atan","7","8","9","int","cosh","acosh","ln","^","root","4","5","6","/","!","tanh","atanh","Mod","1","2","3","*","sinh","asinh","e","log","0",".","+","-",",","Sigma","n","Pi","pow"],h=["sin","cos","tan","&pi;","(",")","P","C","asin","acos","atan","7","8","9","Int","cosh","acosh"," ln","^","root","4","5","6","&divide;","!","tanh","atanh"," Mod ","1","2","3","&times;","sinh","asinh","e"," log","0",".","+","-",",","&Sigma;","n","&Pi;","pow"],i=[f.math.sin,f.math.cos,f.math.tan,"PI","(",")",f.math.P,f.math.C,f.math.asin,f.math.acos,f.math.atan,"7","8","9",Math.floor,f.math.cosh,f.math.acosh,Math.log,Math.pow,Math.sqrt,"4","5","6",f.math.div,f.math.fact,f.math.tanh,f.math.atanh,f.math.mod,"1","2","3",f.math.mul,f.math.sinh,f.math.asinh,"E",f.math.log,"0",".",f.math.add,f.math.sub,",",f.math.sigma,"n",f.math.Pi,Math.pow],j={0:11,1:0,2:3,3:0,4:0,5:0,6:0,7:11,8:11,9:1,10:10,11:0,12:11,13:0},k=[0,0,0,3,4,5,10,10,0,0,0,1,1,1,0,0,0,0,10,0,1,1,1,2,7,0,0,2,1,1,1,2,0,0,3,0,1,6,9,9,11,12,13,12,8],l={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,9:!0,12:!0,13:!0},m={0:!0,1:!0,2:!0,3:!0,4:!0,5:!0,6:!0,7:!0,8:!0,9:!0,10:!0,11:!0,12:!0,13:!0},n={0:!0,3:!0,4:!0,8:!0,12:!0,13:!0},o={},p={0:!0,1:!0,3:!0,4:!0,6:!0,8:!0,12:!0,13:!0},q={1:!0},r=[[],["1","2","3","7","8","9","4","5","6","+","-","*","/","(",")","^","!","P","C","e","0",".",",","n"],["pi","ln","Pi"],["sin","cos","tan","Del","int","Mod","log","pow"],["asin","acos","atan","cosh","root","tanh","sinh"],["acosh","atanh","asinh","Sigma"]];f.addToken=function(a){for(var b=0;b<a.length;b++){var c=a[b].token.length,d=-1;if(c<r.length)for(var e=0;e<r[c].length;e++)if(a[b].token===r[c][e]){d=g.indexOf(r[c][e]);break}d===-1?(g.push(a[b].token),k.push(a[b].type),r.length<=a[b].token.length&&(r[a[b].token.length]=[]),r[a[b].token.length].push(a[b].token),i.push(a[b].value),h.push(a[b].show)):(g[d]=a[b].token,k[d]=a[b].type,i[d]=a[b].value,h[d]=a[b].show)}},f.lex=function(a,b){"use strict";var c,s,t,u,v={value:f.math.changeSign,type:0,pre:21,show:"-"},w={value:")",show:")",type:5,pre:0},x={value:"(",type:4,pre:0,show:"("},y=[x],z=[],A=a,B=0,C=l,D=0,E=o,F="";"undefined"!=typeof b&&f.addToken(b);var G={};for(s=0;s<A.length;s++)if(" "!==A[s]){for(c="",t=A.length-s>r.length-2?r.length-1:A.length-s;t>0;t--)for(u=0;u<r[t].length;u++)e(A,r[t][u],s,t)&&(c=r[t][u],u=r[t].length,t=0);if(s+=c.length-1,""===c)throw new f.Exception("Can't understand after "+A.slice(s));var H,I=g.indexOf(c),J=c,K=k[I],L=i[I],M=j[K],N=h[I],O=y[y.length-1];for(H=z.length;H--&&0===z[H];)if([0,2,3,5,9,11,12,13].indexOf(K)!==-1){if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);y.push(w),C=m,E=p,d(z,-1).pop()}if(C[K]!==!0)throw new f.Exception(c+" is not allowed after "+F);if(E[K]===!0&&(K=2,L=f.math.mul,N="&times;",M=3,s-=c.length),G={value:L,type:K,pre:M,show:N},0===K)C=l,E=o,d(z,2).push(2),y.push(G),y.push(x);else if(1===K)1===O.type?(O.value+=L,d(z,1)):y.push(G),C=m,E=n;else if(2===K)C=l,E=o,d(z,2),y.push(G);else if(3===K)y.push(G),C=m,E=p;else if(4===K)B+=z.length,z=[],D++,C=l,E=o,y.push(G);else if(5===K){if(!D)throw new f.Exception("Closing parenthesis are more than opening one, wait What!!!");for(;B--;)y.push(w);B=0,D--,C=m,E=p,y.push(G)}else if(6===K){if(O.hasDec)throw new f.Exception("Two decimals are not allowed in one number");1!==O.type&&(O={value:0,type:1,pre:0},y.push(O),d(z,-1)),C=q,d(z,1),E=o,O.value+=L,O.hasDec=!0}else 7===K&&(C=m,E=p,d(z,1),y.push(G));8===K?(C=l,E=o,d(z,4).push(4),y.push(G),y.push(x)):9===K?(9===O.type?O.value===f.math.add?(O.value=L,O.show=N,d(z,1)):O.value===f.math.sub&&"-"===N&&(O.value=f.math.add,O.show="+",d(z,1)):5!==O.type&&7!==O.type&&1!==O.type&&3!==O.type&&13!==O.type?"-"===J&&(C=l,E=o,d(z,2).push(2),y.push(v),y.push(x)):(y.push(G),d(z,2)),C=l,E=o):10===K?(C=l,E=o,d(z,2),y.push(G)):11===K?(C=l,E=o,y.push(G)):12===K?(C=l,E=o,d(z,6).push(6),y.push(G),y.push(x)):13===K&&(C=m,E=p,y.push(G)),d(z,-1),F=c}for(H=z.length;H--&&0===z[H];)y.push(w),d(z,-1).pop();if(C[5]!==!0)throw new f.Exception("complete the expression");for(;D--;)y.push(w);return y.push(w),new f(y)},b.exports=f},{"./math_function.js":3}],3:[function(a,b,c){var d=function(a){this.value=a};d.math={isDegree:!0,acos:function(a){return d.math.isDegree?180/Math.PI*Math.acos(a):Math.acos(a)},add:function(a,b){return a+b},asin:function(a){return d.math.isDegree?180/Math.PI*Math.asin(a):Math.asin(a)},atan:function(a){return d.math.isDegree?180/Math.PI*Math.atan(a):Math.atan(a)},acosh:function(a){return Math.log(a+Math.sqrt(a*a-1))},asinh:function(a){return Math.log(a+Math.sqrt(a*a+1))},atanh:function(a){return Math.log((1+a)/(1-a))},C:function(a,b){var c=1,e=a-b,f=b;f<e&&(f=e,e=b);for(var g=f+1;g<=a;g++)c*=g;return c/d.math.fact(e)},changeSign:function(a){return-a},cos:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.cos(a)},cosh:function(a){return(Math.pow(Math.E,a)+Math.pow(Math.E,-1*a))/2},div:function(a,b){return a/b},fact:function(a){if(a%1!==0)return"NaN";for(var b=1,c=2;c<=a;c++)b*=c;return b},inverse:function(a){return 1/a},log:function(a){return Math.log(a)/Math.log(10)},mod:function(a,b){return a%b},mul:function(a,b){return a*b},P:function(a,b){for(var c=1,d=Math.floor(a)-Math.floor(b)+1;d<=Math.floor(a);d++)c*=d;return c},Pi:function(a,b,c){for(var d=1,e=a;e<=b;e++)d*=Number(c.postfixEval({n:e}));return d},pow10x:function(a){for(var b=1;a--;)b*=10;return b},sigma:function(a,b,c){for(var d=0,e=a;e<=b;e++)d+=Number(c.postfixEval({n:e}));return d},sin:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.sin(a)},sinh:function(a){return(Math.pow(Math.E,a)-Math.pow(Math.E,-1*a))/2},sub:function(a,b){return a-b},tan:function(a){return d.math.isDegree&&(a=d.math.toRadian(a)),Math.tan(a)},tanh:function(a){return d.sinha(a)/d.cosha(a)},toRadian:function(a){return a*Math.PI/180}},d.Exception=function(a){this.message=a},b.exports=d},{}],4:[function(a,b,c){var d=a("./lexer.js");d.prototype.toPostfix=function(){"use strict";for(var a,b,c,e,f,g=[],h=[{value:"(",type:4,pre:0}],i=this.value,j=1;j<i.length;j++)if(1===i[j].type||3===i[j].type||13===i[j].type)1===i[j].type&&(i[j].value=Number(i[j].value)),g.push(i[j]);else if(4===i[j].type)h.push(i[j]);else if(5===i[j].type)for(;4!==(b=h.pop()).type;)g.push(b);else if(11===i[j].type){for(;4!==(b=h.pop()).type;)g.push(b);h.push(b)}else{a=i[j],e=a.pre,f=h[h.length-1],c=f.pre;var k="Math.pow"==f.value&&"Math.pow"==a.value;if(e>c)h.push(a);else{for(;c>=e&&!k||k&&e<c;)b=h.pop(),f=h[h.length-1],g.push(b),c=f.pre,k="Math.pow"==a.value&&"Math.pow"==f.value;h.push(a)}}return new d(g)},b.exports=d},{"./lexer.js":2}],5:[function(a,b,c){var d=a("./postfix.js");d.prototype.postfixEval=function(a){"use strict";a=a||{},a.PI=Math.PI,a.E=Math.E;for(var b,c,e,f=[],g=this.value,h="undefined"!=typeof a.n,i=0;i<g.length;i++)1===g[i].type?f.push({value:g[i].value,type:1}):3===g[i].type?f.push({value:a[g[i].value],type:1}):0===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):7===g[i].type?"undefined"==typeof f[f.length-1].type?f[f.length-1].value.push(g[i]):f[f.length-1].value=g[i].value(f[f.length-1].value):8===g[i].type?(b=f.pop(),c=f.pop(),f.push({type:1,value:g[i].value(c.value,b.value)})):10===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(c.value=c.concat(b),c.value.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):2===g[i].type||9===g[i].type?(b=f.pop(),c=f.pop(),"undefined"==typeof c.type?(console.log(c),c=c.concat(b),c.push(g[i]),f.push(c)):"undefined"==typeof b.type?(b.unshift(c),b.push(g[i]),f.push(b)):f.push({type:1,value:g[i].value(c.value,b.value)})):12===g[i].type?(b=f.pop(),"undefined"!=typeof b.type&&(b=[b]),c=f.pop(),e=f.pop(),f.push({type:1,value:g[i].value(e.value,c.value,new d(b))})):13===g[i].type&&(h?f.push({value:a[g[i].value],type:3}):f.push([g[i]]));if(f.length>1)throw new d.exception("Uncaught Syntax error");return f[0].value>1e15?"Infinity":parseFloat(f[0].value.toFixed(15))},d.eval=function(a,b,c){return"undefined"==typeof b?this.lex(a).toPostfix().postfixEval():"undefined"==typeof c?"undefined"!=typeof b.length?this.lex(a,b).toPostfix().postfixEval():this.lex(a).toPostfix().postfixEval(b):this.lex(a,b).toPostfix().postfixEval(c)},b.exports=d},{"./postfix.js":4}]},{},[1])(1)});$scope.Calculate=function(formula,decimals){var numero=mexp.eval(formula);if(decimals!=-1){potencia=Math.pow(10,decimals);numero=Math.round(numero*potencia)/potencia;}return numero;};$(document).mousemove(function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.pageX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.pageY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;var sx=((evt.pageX+$(window).scrollLeft())/$App.NAB.AppScale);var sy=((evt.pageY+$(window).scrollTop())/$App.NAB.AppScale);$App.NAB.MouseX=Math.round(x);$App.NAB.MouseY=Math.round(y);$App.NAB.MouseScreenX=Math.round(sx);$App.NAB.MouseScreenY=Math.round(sy);});$(document).on("touchmove",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});$(document).on("touchstart",function(evt){if($App.NAB.AppScale==0){$App.NAB.AppScale=1;}var x=((evt.touches[0].clientX-$('body').offset().left)+$(window).scrollLeft())/$App.NAB.AppScale;var y=((evt.touches[0].clientY-$('body').offset().top)+$(window).scrollTop())/$App.NAB.AppScale;$App.NAB.TouchX=Math.round(x);$App.NAB.TouchY=Math.round(y);});
$App.NAB={PageList:["Home","Home2","Work01","RulesMatter","ADHDhelper","Time-Pa","Rulz","WorkDoNotEnjoy01","WorkDoNotEnjoy02","WorkDoNotEnjoy03","WorkDoNotEnjoy04","WorkDoNotEnjoy05","WorkDoNotEnjoy06","WorkDoNotEnjoy07","WorkDoNotEnjoy08","WorkCWD-adjust","Dailysheet","adh00","adh01","adh02","adh03","adh04","adh05","adh06","adh07","adh08","adh09","adh10","adh11","adh12","adh13","adh14","adh15","adh16","Debtclock","RanMain","Dreamboard","Dreamboard01","Dreamboard02","Dreamboard03","Dreamboard04","Dreamboard05","Dreamboard06","Dreamboard07","Dreamboard08","Dreamboard09","Dreamboard10","Dreamboard11","Dreamboard12","Dreamboard13","Dreamboard14","Dreamboard15","Dreamboard16","Dreamboard17","Dreamboard18","Dreamboard19","Dreamboard20","Dreamboard21","Debtclockinput","Permanace","Page02","Milesrecorder","map","Random","Random01","Random02","Random03","Random04","Random05","Random06","Random07","Random08","Random09","Random10","Random11","Random12","Random13","Random14","Random15","Random16","Random17","Random18","Random19","Random20","Random21","Random22","Random23","Random24","Random25"],PageEnterEffect:["fadeIn","fadeIn","","","","","","","","","","","","","","","","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn","fadeIn"],PageCount:89,_pageEffect:" animate fadeIn",PageExitEffect:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],PageNumber:1,AppScale:1,PageID:"",Hour:"",Hour24:"",Minute:"",Second:"",Time:"",Time24:"",DateShort:"",DateLong:"",DateFull:"",Month:"",MonthNum:"",WeekNum:"",Day:"",DayNum:"",Year:"",ClientWidth:$window.innerWidth,ClientHeight:$window.innerHeight,WindowWidth:$window.outerWidth,WindowHeight:$window.outerHeight,Orientation:$scope.GetOrientation(),OperatingSystem:"",$Watches:{},$Timers:{},$Audio:{}};$scope.__doUpdate=function(){var Now=new Date();$App.NAB.Hour=$filter("date")(Now,"h");$App.NAB.Hour24=$filter("date")(Now,"H");$App.NAB.Minute=$filter("date")(Now,"mm");$App.NAB.Second=$filter("date")(Now,"ss");$App.NAB.Time=$filter("date")(Now,"mediumTime");$App.NAB.Time24=$filter("date")(Now,"H:mm:ss");$App.NAB.DateShort=$filter("date")(Now,"shortDate");$App.NAB.DateLong=$filter("date")(Now,"longDate");$App.NAB.DateFull=$filter("date")(Now,"fullDate");$App.NAB.Month=$filter("date")(Now,"MMMM");$App.NAB.MonthNum=$filter("date")(Now,"M");$App.NAB.WeekNum=$filter("date")(Now,"w");$App.NAB.Day=$filter("date")(Now,"EEEE");$App.NAB.DayNum=$filter("date")(Now,"d");$App.NAB.Year=$filter("date")(Now,"yyyy");};$scope.__doOrientationChange=function(){$App.NAB.Orientation=$scope.GetOrientation();};$scope.__doResize=function(){$App.NAB.ClientWidth=$window.innerWidth;$App.NAB.ClientHeight=$window.innerHeight;$App.NAB.WindowWidth=$window.outerWidth;$App.NAB.WindowHeight=$window.outerHeight;};$scope.__init=function(){angular.element($window).bind("orientationchange.app",function(){$timeout($scope.__doOrientationChange);});angular.element($window).bind("resize.app",function(){$timeout($scope.__doResize);});$interval($scope.__doUpdate,1000);$App.NAB.OperatingSystem=GetPlatform();$scope.__doUpdate();};
$scope.Home_pageenter = function() {$App.googleSheet4 = "https://docs.google.com/spreadsheets/d/1lXLoLWrxYaoSRLpICBRa6GmlA10GDkWaZ6RVwayZ83Y/edit?usp=sharingadd #gid=X";
$App.goto01 = localStorage.getItem("goto01");
$App.goto02 = localStorage.getItem("goto02");
$App.goto03 = localStorage.getItem("goto03");
$App.goto04 = localStorage.getItem("goto04");
$App.goto05 = localStorage.getItem("goto05");
$App.goto06 = localStorage.getItem("goto06");
$App.love01 = localStorage.getItem("love01");
$App.love02 = localStorage.getItem("love02");
$App.love03 = localStorage.getItem("love03");
$App.love04 = localStorage.getItem("love04");
$App.love05 = localStorage.getItem("love05");
$App.love06 = localStorage.getItem("love06");
$App.H01 = localStorage.getItem("H01");
$App.H02 = localStorage.getItem("H02");
$App.H03 = localStorage.getItem("H03");
$App.H04 = localStorage.getItem("H04");
$App.H05 = localStorage.getItem("H05");
$App.H06 = localStorage.getItem("H06");
$App.db01 = localStorage.getItem("db01");
$App.db01b = localStorage.getItem("db01b");
$App.db02 = localStorage.getItem("db02");
$App.db02b = localStorage.getItem("db02b");
$App.db03 = localStorage.getItem("db03");
$App.db03b = localStorage.getItem("db03b");
$App.db04 = localStorage.getItem("db04");
$App.db04b = localStorage.getItem("db04b");
$App.db05 = localStorage.getItem("db05");
$App.db05b = localStorage.getItem("db05b");
$App.db06 = localStorage.getItem("db06");
$App.db06b = localStorage.getItem("db06b");
$App.db07 = localStorage.getItem("db07");
$App.db07b = localStorage.getItem("db07b");
$App.db08 = localStorage.getItem("db08");
$App.db08b = localStorage.getItem("db08b");
$App.db09 = localStorage.getItem("db09");
$App.db09b = localStorage.getItem("db09b");
$App.db10 = localStorage.getItem("db10");
$App.db10b = localStorage.getItem("db10b");
$App.db11 = localStorage.getItem("db11");
$App.db11b = localStorage.getItem("db11b");
$App.db12 = localStorage.getItem("db12");
$App.db12b = localStorage.getItem("db12b");
$App.db13 = localStorage.getItem("db13");
$App.db13b = localStorage.getItem("db13b");
$App.db14 = localStorage.getItem("db14");
$App.db12b = localStorage.getItem("db12b");
$App.db15 = localStorage.getItem("db15");
$App.db15b = localStorage.getItem("db15b");
$App.db16 = localStorage.getItem("db16");
$App.db16b = localStorage.getItem("db16b");
$App.db17 = localStorage.getItem("db17");
$App.db17b = localStorage.getItem("db17b");
$App.db18 = localStorage.getItem("db18");
$App.db18b = localStorage.getItem("db18b");
$App.db19 = localStorage.getItem("db19");
$App.db19b = localStorage.getItem("db19b");
$App.db20 = localStorage.getItem("db20");
$App.db20b = localStorage.getItem("db20b");
$App.db21 = localStorage.getItem("db21");
$App.db21b = localStorage.getItem("db21b");
$App.db22 = localStorage.getItem("db22");
$App.db22b = localStorage.getItem("db22b");
$App.db23 = localStorage.getItem("db23");
$App.db23b = localStorage.getItem("db123");
$App.db24 = localStorage.getItem("db24");
$App.db24b = localStorage.getItem("db24b");
neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random26","a",26,null);

neoGSheetsLoadCell($App.googleSheet4,"Random27","a",27,null);

neoGSheetsLoadCell($App.googleSheet4,"Random28","a",28,null);

neoGSheetsLoadCell($App.googleSheet4,"Random29","a",29,null);

neoGSheetsLoadCell($App.googleSheet4,"Random30","a",30,null);

neoGSheetsLoadCell($App.googleSheet4,"Random31","a",31,null);

neoGSheetsLoadCell($App.googleSheet4,"Random32","a",32,null);

neoGSheetsLoadCell($App.googleSheet4,"Random33","a",33,null);

neoGSheetsLoadCell($App.googleSheet4,"Random34","a",34,null);

neoGSheetsLoadCell($App.googleSheet4,"Random35","a",35,null);

neoGSheetsLoadCell($App.googleSheet4,"Random36","a",36,null);

neoGSheetsLoadCell($App.googleSheet4,"Random37","a",37,null);

neoGSheetsLoadCell($App.googleSheet4,"Random38","a",38,null);

neoGSheetsLoadCell($App.googleSheet4,"Random39","a",39,null);

neoGSheetsLoadCell($App.googleSheet4,"Random40","a",40,null);

neoGSheetsLoadCell($App.googleSheet4,"Random41","a",41,null);

neoGSheetsLoadCell($App.googleSheet4,"Random42","a",42,null);

neoGSheetsLoadCell($App.googleSheet4,"Random43","a",43,null);

neoGSheetsLoadCell($App.googleSheet4,"Random44","a",44,null);

neoGSheetsLoadCell($App.googleSheet4,"Random45","a",45,null);

neoGSheetsLoadCell($App.googleSheet4,"Random46","a",46,null);

neoGSheetsLoadCell($App.googleSheet4,"Random47","a",47,null);

neoGSheetsLoadCell($App.googleSheet4,"Random48","a",48,null);

neoGSheetsLoadCell($App.googleSheet4,"Random49","a",49,null);

neoGSheetsLoadCell($App.googleSheet4,"Random50","a",50,null);

neoGSheetsLoadCell($App.googleSheet4,"Random51","a",51,null);

neoGSheetsLoadCell($App.googleSheet4,"Random52","a",52,null);

neoGSheetsLoadCell($App.googleSheet4,"Random53","a",53,null);

neoGSheetsLoadCell($App.googleSheet4,"Random54","a",54,null);

neoGSheetsLoadCell($App.googleSheet4,"Random55","a",55,null);

neoGSheetsLoadCell($App.googleSheet4,"Random56","a",56,null);

neoGSheetsLoadCell($App.googleSheet4,"Random57","a",57,null);

neoGSheetsLoadCell($App.googleSheet4,"Random58","a",58,null);

neoGSheetsLoadCell($App.googleSheet4,"Random59","a",59,null);

neoGSheetsLoadCell($App.googleSheet4,"Random60","a",60,null);

neoGSheetsLoadCell($App.googleSheet4,"Random61","a",61,null);

neoGSheetsLoadCell($App.googleSheet4,"Random62","a",62,null);

neoGSheetsLoadCell($App.googleSheet4,"Random63","a",63,null);

neoGSheetsLoadCell($App.googleSheet4,"Random64","a",64,null);

neoGSheetsLoadCell($App.googleSheet4,"Random65","a",65,null);

neoGSheetsLoadCell($App.googleSheet4,"Random66","a",66,null);

neoGSheetsLoadCell($App.googleSheet4,"Random67","a",67,null);

neoGSheetsLoadCell($App.googleSheet4,"Random68","a",68,null);

neoGSheetsLoadCell($App.googleSheet4,"Random69","a",69,null);

neoGSheetsLoadCell($App.googleSheet4,"Random70","a",70,null);

neoGSheetsLoadCell($App.googleSheet4,"Random71","a",71,null);

neoGSheetsLoadCell($App.googleSheet4,"Random72","a",72,null);

neoGSheetsLoadCell($App.googleSheet4,"Random73","a",73,null);

neoGSheetsLoadCell($App.googleSheet4,"Random74","a",74,null);

neoGSheetsLoadCell($App.googleSheet4,"Random75","a",75,null);

neoGSheetsLoadCell($App.googleSheet4,"Random76","a",76,null);

neoGSheetsLoadCell($App.googleSheet4,"Random77","a",77,null);

neoGSheetsLoadCell($App.googleSheet4,"Random78","a",78,null);

neoGSheetsLoadCell($App.googleSheet4,"Random79","a",79,null);

neoGSheetsLoadCell($App.googleSheet4,"Random80","a",80,null);

neoGSheetsLoadCell($App.googleSheet4,"Random81","a",81,null);

neoGSheetsLoadCell($App.googleSheet4,"Random82","a",82,null);

neoGSheetsLoadCell($App.googleSheet4,"Random83","a",83,null);

neoGSheetsLoadCell($App.googleSheet4,"Random84","a",84,null);

neoGSheetsLoadCell($App.googleSheet4,"Random85","a",85,null);

neoGSheetsLoadCell($App.googleSheet4,"Random86","a",86,null);

neoGSheetsLoadCell($App.googleSheet4,"Random87","a",87,null);

neoGSheetsLoadCell($App.googleSheet4,"Random88","a",88,null);

neoGSheetsLoadCell($App.googleSheet4,"Random89","a",89,null);

neoGSheetsLoadCell($App.googleSheet4,"Random90","a",90,null);

neoGSheetsLoadCell($App.googleSheet4,"Random91","a",91,null);

neoGSheetsLoadCell($App.googleSheet4,"Random92","a",92,null);

neoGSheetsLoadCell($App.googleSheet4,"Random93","a",93,null);

neoGSheetsLoadCell($App.googleSheet4,"Random94","a",94,null);

neoGSheetsLoadCell($App.googleSheet4,"Random95","a",95,null);

neoGSheetsLoadCell($App.googleSheet4,"Random96","a",96,null);

neoGSheetsLoadCell($App.googleSheet4,"Random97","a",97,null);

neoGSheetsLoadCell($App.googleSheet4,"Random98","a",98,null);

neoGSheetsLoadCell($App.googleSheet4,"Random99","a",99,null);

neoGSheetsLoadCell($App.googleSheet4,"Random100","a",100,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random26","a",26,null);

neoGSheetsLoadCell($App.googleSheet4,"Random27","a",27,null);

neoGSheetsLoadCell($App.googleSheet4,"Random28","a",28,null);

neoGSheetsLoadCell($App.googleSheet4,"Random29","a",29,null);

neoGSheetsLoadCell($App.googleSheet4,"Random30","a",30,null);

neoGSheetsLoadCell($App.googleSheet4,"Random31","a",31,null);

neoGSheetsLoadCell($App.googleSheet4,"Random32","a",32,null);

neoGSheetsLoadCell($App.googleSheet4,"Random33","a",33,null);

neoGSheetsLoadCell($App.googleSheet4,"Random34","a",34,null);

neoGSheetsLoadCell($App.googleSheet4,"Random35","a",35,null);

neoGSheetsLoadCell($App.googleSheet4,"Random36","a",36,null);

neoGSheetsLoadCell($App.googleSheet4,"Random37","a",37,null);

neoGSheetsLoadCell($App.googleSheet4,"Random38","a",38,null);

neoGSheetsLoadCell($App.googleSheet4,"Random39","a",39,null);

neoGSheetsLoadCell($App.googleSheet4,"Random40","a",40,null);

neoGSheetsLoadCell($App.googleSheet4,"Random41","a",41,null);

neoGSheetsLoadCell($App.googleSheet4,"Random42","a",42,null);

neoGSheetsLoadCell($App.googleSheet4,"Random43","a",43,null);

neoGSheetsLoadCell($App.googleSheet4,"Random44","a",44,null);

neoGSheetsLoadCell($App.googleSheet4,"Random45","a",45,null);

neoGSheetsLoadCell($App.googleSheet4,"Random46","a",46,null);

neoGSheetsLoadCell($App.googleSheet4,"Random47","a",47,null);

neoGSheetsLoadCell($App.googleSheet4,"Random48","a",48,null);

neoGSheetsLoadCell($App.googleSheet4,"Random49","a",49,null);

neoGSheetsLoadCell($App.googleSheet4,"Random50","a",50,null);

neoGSheetsLoadCell($App.googleSheet4,"Random51","a",51,null);

neoGSheetsLoadCell($App.googleSheet4,"Random52","a",52,null);

neoGSheetsLoadCell($App.googleSheet4,"Random53","a",53,null);

neoGSheetsLoadCell($App.googleSheet4,"Random54","a",54,null);

neoGSheetsLoadCell($App.googleSheet4,"Random55","a",55,null);

neoGSheetsLoadCell($App.googleSheet4,"Random56","a",56,null);

neoGSheetsLoadCell($App.googleSheet4,"Random57","a",57,null);

neoGSheetsLoadCell($App.googleSheet4,"Random58","a",58,null);

neoGSheetsLoadCell($App.googleSheet4,"Random59","a",59,null);

neoGSheetsLoadCell($App.googleSheet4,"Random60","a",60,null);

neoGSheetsLoadCell($App.googleSheet4,"Random61","a",61,null);

neoGSheetsLoadCell($App.googleSheet4,"Random62","a",62,null);

neoGSheetsLoadCell($App.googleSheet4,"Random63","a",63,null);

neoGSheetsLoadCell($App.googleSheet4,"Random64","a",64,null);

neoGSheetsLoadCell($App.googleSheet4,"Random65","a",65,null);

neoGSheetsLoadCell($App.googleSheet4,"Random66","a",66,null);

neoGSheetsLoadCell($App.googleSheet4,"Random67","a",67,null);

neoGSheetsLoadCell($App.googleSheet4,"Random68","a",68,null);

neoGSheetsLoadCell($App.googleSheet4,"Random69","a",69,null);

neoGSheetsLoadCell($App.googleSheet4,"Random70","a",70,null);

neoGSheetsLoadCell($App.googleSheet4,"Random71","a",71,null);

neoGSheetsLoadCell($App.googleSheet4,"Random72","a",72,null);

neoGSheetsLoadCell($App.googleSheet4,"Random73","a",73,null);

neoGSheetsLoadCell($App.googleSheet4,"Random74","a",74,null);

neoGSheetsLoadCell($App.googleSheet4,"Random75","a",75,null);

neoGSheetsLoadCell($App.googleSheet4,"Random76","a",76,null);

neoGSheetsLoadCell($App.googleSheet4,"Random77","a",77,null);

neoGSheetsLoadCell($App.googleSheet4,"Random78","a",78,null);

neoGSheetsLoadCell($App.googleSheet4,"Random79","a",79,null);

neoGSheetsLoadCell($App.googleSheet4,"Random80","a",80,null);

neoGSheetsLoadCell($App.googleSheet4,"Random81","a",81,null);

neoGSheetsLoadCell($App.googleSheet4,"Random82","a",82,null);

neoGSheetsLoadCell($App.googleSheet4,"Random83","a",83,null);

neoGSheetsLoadCell($App.googleSheet4,"Random84","a",84,null);

neoGSheetsLoadCell($App.googleSheet4,"Random85","a",85,null);

neoGSheetsLoadCell($App.googleSheet4,"Random86","a",86,null);

neoGSheetsLoadCell($App.googleSheet4,"Random87","a",87,null);

neoGSheetsLoadCell($App.googleSheet4,"Random88","a",88,null);

neoGSheetsLoadCell($App.googleSheet4,"Random89","a",89,null);

neoGSheetsLoadCell($App.googleSheet4,"Random90","a",90,null);

neoGSheetsLoadCell($App.googleSheet4,"Random91","a",91,null);

neoGSheetsLoadCell($App.googleSheet4,"Random92","a",92,null);

neoGSheetsLoadCell($App.googleSheet4,"Random93","a",93,null);

neoGSheetsLoadCell($App.googleSheet4,"Random94","a",94,null);

neoGSheetsLoadCell($App.googleSheet4,"Random95","a",95,null);

neoGSheetsLoadCell($App.googleSheet4,"Random96","a",96,null);

neoGSheetsLoadCell($App.googleSheet4,"Random97","a",97,null);

neoGSheetsLoadCell($App.googleSheet4,"Random98","a",98,null);

neoGSheetsLoadCell($App.googleSheet4,"Random99","a",99,null);

neoGSheetsLoadCell($App.googleSheet4,"Random100","a",100,null);

$App.Rannotes01 = localStorage.getItem("Rannotes01");
$App.Random01b = localStorage.getItem("Random01b");
$App.Random02b = localStorage.getItem("Random02b");
$App.Random03b = localStorage.getItem("Random03b");
$App.Random04b = localStorage.getItem("Random04b");
$App.Random05b = localStorage.getItem("Random05b");
$App.Random06b = localStorage.getItem("Random06b");
$App.Random07b = localStorage.getItem("Random07b");
$App.Random08b = localStorage.getItem("Random08b");
$App.Random09b = localStorage.getItem("Random09b");
$App.Random10b = localStorage.getItem("Random10b");
$App.Random11b = localStorage.getItem("Random11b");
$App.Random12b = localStorage.getItem("Random12b");
$App.Random13b = localStorage.getItem("Random13b");
$App.Random14b = localStorage.getItem("Random14b");
$App.Random15b = localStorage.getItem("Random15b");
$App.Random16b = localStorage.getItem("Random16b");
$App.Random17b = localStorage.getItem("Random17b");
$App.Random18b = localStorage.getItem("Random18b");
$App.Random19b = localStorage.getItem("Random19b");
$App.Random20b = localStorage.getItem("Random20b");
$App.Random21b = localStorage.getItem("Random21b");
$App.Random22b = localStorage.getItem("Random22b");
$App.Random32b = localStorage.getItem("Random23b");
$App.Random24b = localStorage.getItem("Random24b");
$App.Random25b = localStorage.getItem("Random25b");
$App.Random26b = localStorage.getItem("Random26b");
$App.Random27b = localStorage.getItem("Random27b");
$App.Random28b = localStorage.getItem("Random28b");
$App.Random29b = localStorage.getItem("Random29b");
$App.Random30b = localStorage.getItem("Random30b");
$App.Random31b = localStorage.getItem("Random31b");
$App.Random32b = localStorage.getItem("Random32b");
$App.Random33b = localStorage.getItem("Random33b");
$App.Random34b = localStorage.getItem("Random34b");
$App.Random35b = localStorage.getItem("Random35b");
$App.Random36b = localStorage.getItem("Random36b");
$App.Random37b = localStorage.getItem("Random37b");
$App.Random38b = localStorage.getItem("Random38b");
$App.Random39b = localStorage.getItem("Random39b");
$App.Random40b = localStorage.getItem("Random40b");
$App.Random41b = localStorage.getItem("Random41b");
$App.Random42b = localStorage.getItem("Random42b");
$App.Random43b = localStorage.getItem("Random43b");
$App.Random44b = localStorage.getItem("Random44b");
$App.Random45b = localStorage.getItem("Random45b");
$App.Random46b = localStorage.getItem("Random46b");
$App.Random47b = localStorage.getItem("Random47b");
$App.Random48b = localStorage.getItem("Random48b");
$App.Random49b = localStorage.getItem("Random49b");
$App.Random50b = localStorage.getItem("Random50b");
$App.Random51b = localStorage.getItem("Random51b");
$App.Random52b = localStorage.getItem("Random52b");
$App.Random53b = localStorage.getItem("Random53b");
$App.Random54b = localStorage.getItem("Random54b");
$App.Random55b = localStorage.getItem("Random55b");
$App.Random56b = localStorage.getItem("Random56b");
$App.Random57b = localStorage.getItem("Random57b");
$App.Random58b = localStorage.getItem("Random58b");
$App.Random59b = localStorage.getItem("Random59b");
$App.Random60b = localStorage.getItem("Random60b");
$App.Random61b = localStorage.getItem("Random61b");
$App.Random62b = localStorage.getItem("Random62b");
$App.Random63b = localStorage.getItem("Random63b");
$App.Random64b = localStorage.getItem("Random64b");
$App.Random65b = localStorage.getItem("Random65b");
$App.Random66b = localStorage.getItem("Random66b");
$App.Random67b = localStorage.getItem("Random67b");
$App.Random68b = localStorage.getItem("Random68b");
$App.Random69b = localStorage.getItem("Random69b");
$App.Random70b = localStorage.getItem("Random70b");
$App.Random71b = localStorage.getItem("Random71b");
$App.Random72b = localStorage.getItem("Random72b");
$App.Random73b = localStorage.getItem("Random73b");
$App.Random74b = localStorage.getItem("Random74b");
$App.Random75b = localStorage.getItem("Random75b");
$App.Random76b = localStorage.getItem("Random76b");
$App.Random77b = localStorage.getItem("Random77b");
$App.Random78b = localStorage.getItem("Random78b");
$App.Random79b = localStorage.getItem("Random79b");
$App.Random80b = localStorage.getItem("Random80b");
$App.Random81b = localStorage.getItem("Random81b");
$App.Random82b = localStorage.getItem("Random82b");
$App.Random83b = localStorage.getItem("Random83b");
$App.Random84b = localStorage.getItem("Random84b");
$App.Random85b = localStorage.getItem("Random85b");
$App.Random86b = localStorage.getItem("Random86b");
$App.Random87b = localStorage.getItem("Random87b");
$App.Random88b = localStorage.getItem("Random88b");
$App.Random89b = localStorage.getItem("Random89b");
$App.Random90b = localStorage.getItem("Random90b");
$App.Random91b = localStorage.getItem("Random91b");
$App.Random92b = localStorage.getItem("Random92b");
$App.Random93b = localStorage.getItem("Random93b");
$App.Random94b = localStorage.getItem("Random94b");
$App.Random95b = localStorage.getItem("Random95b");
$App.Random96b = localStorage.getItem("Random96b");
$App.Random97b = localStorage.getItem("Random97b");
$App.Random98b = localStorage.getItem("Random98b");
$App.Random99b = localStorage.getItem("Random99b");
$App.Random100b = localStorage.getItem("Random100b");
$App.entropy = localStorage.getItem("entropy");
$App.tesla = localStorage.getItem("tesla");
$App.brick = localStorage.getItem("brick");
$App.printer = localStorage.getItem("printer");
$App.health = localStorage.getItem("health");
$App.thunder = localStorage.getItem("thunder");
$App.fish = localStorage.getItem("fish");
$App.ds01 = localStorage.getItem("ds01");
$App.ds02 = localStorage.getItem("ds02");
$App.ds03 = localStorage.getItem("ds03");
$App.ds04 = localStorage.getItem("ds04");
$App.ds05 = localStorage.getItem("ds05");
$App.ds06 = localStorage.getItem("ds06");
$App.ds07 = localStorage.getItem("ds07");
$App.ds08 = localStorage.getItem("ds08");
$App.ds09 = localStorage.getItem("ds09");
$App.ds10 = localStorage.getItem("ds10");
$App.ds11 = localStorage.getItem("ds11");
$App.ds12 = localStorage.getItem("ds12");
$App.ds13 = localStorage.getItem("ds13");
$App.ds14 = localStorage.getItem("ds14");
$App.ds15 = localStorage.getItem("ds15");
$App.ds16 = localStorage.getItem("ds16");
$App.ds17 = localStorage.getItem("ds17");
$App.ds18 = localStorage.getItem("ds18");
$App.ds19 = localStorage.getItem("ds19");
$App.ds01a = localStorage.getItem("ds01a");
$App.ds02a = localStorage.getItem("ds02a");
$App.ds03a = localStorage.getItem("ds03a");
$App.ds04a = localStorage.getItem("ds04a");
$App.ds05a = localStorage.getItem("ds05a");
$App.ds06a = localStorage.getItem("ds06a");
$App.ds07a = localStorage.getItem("ds07a");
$App.ds08a = localStorage.getItem("ds08a");
$App.ds09a = localStorage.getItem("ds09a");
$App.ds10a = localStorage.getItem("ds10a");
$App.ds11a = localStorage.getItem("ds11a");
$App.ds12a = localStorage.getItem("ds12a");
$App.ds13a = localStorage.getItem("ds13a");
$App.ds14a = localStorage.getItem("ds14a");
$App.ds15a = localStorage.getItem("ds15a");
$App.ds16a = localStorage.getItem("ds16a");
$App.ds17a = localStorage.getItem("ds17a");
$App.ds18a = localStorage.getItem("ds18a");
$App.ds19a = localStorage.getItem("ds19a");
$App.workrep = localStorage.getItem("workrep");
$App.printerrep = localStorage.getItem("printerrep");
$App.thunderrep = localStorage.getItem("thunderrep");
$App.teslarep = localStorage.getItem("teslarep");
$App.brickrep = localStorage.getItem("brickrep");
$App.entropyrep = localStorage.getItem("entropyrep");
$App.teslarep = localStorage.getItem("teslarep");
$App.fishrep = localStorage.getItem("fishrep");
$App.healthrep = localStorage.getItem("healthrep");
$App.entropypc = localStorage.getItem("entropypc");
$App.teslapc = localStorage.getItem("teslapc");
$App.brickpc = localStorage.getItem("brickpc");
$App.printerpc = localStorage.getItem("printerpc");
$App.healthpc = localStorage.getItem("healthpc");
$App.thunderpc = localStorage.getItem("thunderpc");
$App.fishpc = localStorage.getItem("fishpc");
$App.na1 = localStorage.getItem("na1");
$App.na2 = localStorage.getItem("na2");
$App.na3 = localStorage.getItem("na3");
$App.na4 = localStorage.getItem("na4");
$App.flash12 = localStorage.getItem("flash12");
$App.workpc = localStorage.getItem("workpc");
$App.work = localStorage.getItem("work");
$App.reset00 = localStorage.getItem("reset00");
$App.reset01 = localStorage.getItem("reset01");
$App.reset02 = localStorage.getItem("reset02");
$App.reset03 = localStorage.getItem("reset03");
$App.start = "02/23/25";
$App.end = $App.NAB.DateShort;
$App.diff = dtDateDiff( $App.end, $App.start, "mm/dd/yyyy" );
$App.feb25week1aa = localStorage.getItem("feb25week1aa");
$App.Thisweek = localStorage.getItem("Thisweek");
$App.md1 = localStorage.getItem("md1");
$App.mv1a = localStorage.getItem("mv1a");
$App.mv1aa = localStorage.getItem("mv1aa");
$App.mv1aaa = localStorage.getItem("mv1aaa");
$App.mv1b = localStorage.getItem("mv1b");
$App.mv1bb = localStorage.getItem("mv1bb");
$App.mv1bbb = localStorage.getItem("mv1bbb");
$App.mv1c = localStorage.getItem("mv1c");
$App.mv1cc = localStorage.getItem("mv1cc");
$App.mv1ccc = localStorage.getItem("mv1ccc");
$App.mv1d = localStorage.getItem("mv1d");
$App.mv1dd = localStorage.getItem("mv1dd");
$App.mv1ddd = localStorage.getItem("mv1ddd");
$App.mv1e = localStorage.getItem("mv1e");
$App.mv1ee = localStorage.getItem("mv1ee");
$App.mv1eee = localStorage.getItem("mv1eee");
$App.DC = localStorage.getItem("DC");
$App.Prayer1main = localStorage.getItem("Prayer1main");
$App.Permanence2 = localStorage.getItem("Permanence2");
$App.Permanence3 = localStorage.getItem("Permanence3");};
$scope.Home2_pageenter = function() {$App.googleSheet4 = "https://docs.google.com/spreadsheets/d/1lXLoLWrxYaoSRLpICBRa6GmlA10GDkWaZ6RVwayZ83Y/edit?usp=sharingadd #gid=X";
$App.goto01 = localStorage.getItem("goto01");
$App.goto02 = localStorage.getItem("goto02");
$App.goto03 = localStorage.getItem("goto03");
$App.goto04 = localStorage.getItem("goto04");
$App.goto05 = localStorage.getItem("goto05");
$App.goto06 = localStorage.getItem("goto06");
$App.love01 = localStorage.getItem("love01");
$App.love02 = localStorage.getItem("love02");
$App.love03 = localStorage.getItem("love03");
$App.love04 = localStorage.getItem("love04");
$App.love05 = localStorage.getItem("love05");
$App.love06 = localStorage.getItem("love06");
$App.H01 = localStorage.getItem("H01");
$App.H02 = localStorage.getItem("H02");
$App.H03 = localStorage.getItem("H03");
$App.H04 = localStorage.getItem("H04");
$App.H05 = localStorage.getItem("H05");
$App.H06 = localStorage.getItem("H06");
$App.db01 = localStorage.getItem("db01");
$App.db01b = localStorage.getItem("db01b");
$App.db02 = localStorage.getItem("db02");
$App.db02b = localStorage.getItem("db02b");
$App.db03 = localStorage.getItem("db03");
$App.db03b = localStorage.getItem("db03b");
$App.db04 = localStorage.getItem("db04");
$App.db04b = localStorage.getItem("db04b");
$App.db05 = localStorage.getItem("db05");
$App.db05b = localStorage.getItem("db05b");
$App.db06 = localStorage.getItem("db06");
$App.db06b = localStorage.getItem("db06b");
$App.db07 = localStorage.getItem("db07");
$App.db07b = localStorage.getItem("db07b");
$App.db08 = localStorage.getItem("db08");
$App.db08b = localStorage.getItem("db08b");
$App.db09 = localStorage.getItem("db09");
$App.db09b = localStorage.getItem("db09b");
$App.db10 = localStorage.getItem("db10");
$App.db10b = localStorage.getItem("db10b");
$App.db11 = localStorage.getItem("db11");
$App.db11b = localStorage.getItem("db11b");
$App.db12 = localStorage.getItem("db12");
$App.db12b = localStorage.getItem("db12b");
$App.db13 = localStorage.getItem("db13");
$App.db13b = localStorage.getItem("db13b");
$App.db14 = localStorage.getItem("db14");
$App.db12b = localStorage.getItem("db12b");
$App.db15 = localStorage.getItem("db15");
$App.db15b = localStorage.getItem("db15b");
$App.db16 = localStorage.getItem("db16");
$App.db16b = localStorage.getItem("db16b");
$App.db17 = localStorage.getItem("db17");
$App.db17b = localStorage.getItem("db17b");
$App.db18 = localStorage.getItem("db18");
$App.db18b = localStorage.getItem("db18b");
$App.db19 = localStorage.getItem("db19");
$App.db19b = localStorage.getItem("db19b");
$App.db20 = localStorage.getItem("db20");
$App.db20b = localStorage.getItem("db20b");
$App.db21 = localStorage.getItem("db21");
$App.db21b = localStorage.getItem("db21b");
$App.db22 = localStorage.getItem("db22");
$App.db22b = localStorage.getItem("db22b");
$App.db23 = localStorage.getItem("db23");
$App.db23b = localStorage.getItem("db123");
$App.db24 = localStorage.getItem("db24");
$App.db24b = localStorage.getItem("db24b");
neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random26","a",26,null);

neoGSheetsLoadCell($App.googleSheet4,"Random27","a",27,null);

neoGSheetsLoadCell($App.googleSheet4,"Random28","a",28,null);

neoGSheetsLoadCell($App.googleSheet4,"Random29","a",29,null);

neoGSheetsLoadCell($App.googleSheet4,"Random30","a",30,null);

neoGSheetsLoadCell($App.googleSheet4,"Random31","a",31,null);

neoGSheetsLoadCell($App.googleSheet4,"Random32","a",32,null);

neoGSheetsLoadCell($App.googleSheet4,"Random33","a",33,null);

neoGSheetsLoadCell($App.googleSheet4,"Random34","a",34,null);

neoGSheetsLoadCell($App.googleSheet4,"Random35","a",35,null);

neoGSheetsLoadCell($App.googleSheet4,"Random36","a",36,null);

neoGSheetsLoadCell($App.googleSheet4,"Random37","a",37,null);

neoGSheetsLoadCell($App.googleSheet4,"Random38","a",38,null);

neoGSheetsLoadCell($App.googleSheet4,"Random39","a",39,null);

neoGSheetsLoadCell($App.googleSheet4,"Random40","a",40,null);

neoGSheetsLoadCell($App.googleSheet4,"Random41","a",41,null);

neoGSheetsLoadCell($App.googleSheet4,"Random42","a",42,null);

neoGSheetsLoadCell($App.googleSheet4,"Random43","a",43,null);

neoGSheetsLoadCell($App.googleSheet4,"Random44","a",44,null);

neoGSheetsLoadCell($App.googleSheet4,"Random45","a",45,null);

neoGSheetsLoadCell($App.googleSheet4,"Random46","a",46,null);

neoGSheetsLoadCell($App.googleSheet4,"Random47","a",47,null);

neoGSheetsLoadCell($App.googleSheet4,"Random48","a",48,null);

neoGSheetsLoadCell($App.googleSheet4,"Random49","a",49,null);

neoGSheetsLoadCell($App.googleSheet4,"Random50","a",50,null);

neoGSheetsLoadCell($App.googleSheet4,"Random51","a",51,null);

neoGSheetsLoadCell($App.googleSheet4,"Random52","a",52,null);

neoGSheetsLoadCell($App.googleSheet4,"Random53","a",53,null);

neoGSheetsLoadCell($App.googleSheet4,"Random54","a",54,null);

neoGSheetsLoadCell($App.googleSheet4,"Random55","a",55,null);

neoGSheetsLoadCell($App.googleSheet4,"Random56","a",56,null);

neoGSheetsLoadCell($App.googleSheet4,"Random57","a",57,null);

neoGSheetsLoadCell($App.googleSheet4,"Random58","a",58,null);

neoGSheetsLoadCell($App.googleSheet4,"Random59","a",59,null);

neoGSheetsLoadCell($App.googleSheet4,"Random60","a",60,null);

neoGSheetsLoadCell($App.googleSheet4,"Random61","a",61,null);

neoGSheetsLoadCell($App.googleSheet4,"Random62","a",62,null);

neoGSheetsLoadCell($App.googleSheet4,"Random63","a",63,null);

neoGSheetsLoadCell($App.googleSheet4,"Random64","a",64,null);

neoGSheetsLoadCell($App.googleSheet4,"Random65","a",65,null);

neoGSheetsLoadCell($App.googleSheet4,"Random66","a",66,null);

neoGSheetsLoadCell($App.googleSheet4,"Random67","a",67,null);

neoGSheetsLoadCell($App.googleSheet4,"Random68","a",68,null);

neoGSheetsLoadCell($App.googleSheet4,"Random69","a",69,null);

neoGSheetsLoadCell($App.googleSheet4,"Random70","a",70,null);

neoGSheetsLoadCell($App.googleSheet4,"Random71","a",71,null);

neoGSheetsLoadCell($App.googleSheet4,"Random72","a",72,null);

neoGSheetsLoadCell($App.googleSheet4,"Random73","a",73,null);

neoGSheetsLoadCell($App.googleSheet4,"Random74","a",74,null);

neoGSheetsLoadCell($App.googleSheet4,"Random75","a",75,null);

neoGSheetsLoadCell($App.googleSheet4,"Random76","a",76,null);

neoGSheetsLoadCell($App.googleSheet4,"Random77","a",77,null);

neoGSheetsLoadCell($App.googleSheet4,"Random78","a",78,null);

neoGSheetsLoadCell($App.googleSheet4,"Random79","a",79,null);

neoGSheetsLoadCell($App.googleSheet4,"Random80","a",80,null);

neoGSheetsLoadCell($App.googleSheet4,"Random81","a",81,null);

neoGSheetsLoadCell($App.googleSheet4,"Random82","a",82,null);

neoGSheetsLoadCell($App.googleSheet4,"Random83","a",83,null);

neoGSheetsLoadCell($App.googleSheet4,"Random84","a",84,null);

neoGSheetsLoadCell($App.googleSheet4,"Random85","a",85,null);

neoGSheetsLoadCell($App.googleSheet4,"Random86","a",86,null);

neoGSheetsLoadCell($App.googleSheet4,"Random87","a",87,null);

neoGSheetsLoadCell($App.googleSheet4,"Random88","a",88,null);

neoGSheetsLoadCell($App.googleSheet4,"Random89","a",89,null);

neoGSheetsLoadCell($App.googleSheet4,"Random90","a",90,null);

neoGSheetsLoadCell($App.googleSheet4,"Random91","a",91,null);

neoGSheetsLoadCell($App.googleSheet4,"Random92","a",92,null);

neoGSheetsLoadCell($App.googleSheet4,"Random93","a",93,null);

neoGSheetsLoadCell($App.googleSheet4,"Random94","a",94,null);

neoGSheetsLoadCell($App.googleSheet4,"Random95","a",95,null);

neoGSheetsLoadCell($App.googleSheet4,"Random96","a",96,null);

neoGSheetsLoadCell($App.googleSheet4,"Random97","a",97,null);

neoGSheetsLoadCell($App.googleSheet4,"Random98","a",98,null);

neoGSheetsLoadCell($App.googleSheet4,"Random99","a",99,null);

neoGSheetsLoadCell($App.googleSheet4,"Random100","a",100,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random26","a",26,null);

neoGSheetsLoadCell($App.googleSheet4,"Random27","a",27,null);

neoGSheetsLoadCell($App.googleSheet4,"Random28","a",28,null);

neoGSheetsLoadCell($App.googleSheet4,"Random29","a",29,null);

neoGSheetsLoadCell($App.googleSheet4,"Random30","a",30,null);

neoGSheetsLoadCell($App.googleSheet4,"Random31","a",31,null);

neoGSheetsLoadCell($App.googleSheet4,"Random32","a",32,null);

neoGSheetsLoadCell($App.googleSheet4,"Random33","a",33,null);

neoGSheetsLoadCell($App.googleSheet4,"Random34","a",34,null);

neoGSheetsLoadCell($App.googleSheet4,"Random35","a",35,null);

neoGSheetsLoadCell($App.googleSheet4,"Random36","a",36,null);

neoGSheetsLoadCell($App.googleSheet4,"Random37","a",37,null);

neoGSheetsLoadCell($App.googleSheet4,"Random38","a",38,null);

neoGSheetsLoadCell($App.googleSheet4,"Random39","a",39,null);

neoGSheetsLoadCell($App.googleSheet4,"Random40","a",40,null);

neoGSheetsLoadCell($App.googleSheet4,"Random41","a",41,null);

neoGSheetsLoadCell($App.googleSheet4,"Random42","a",42,null);

neoGSheetsLoadCell($App.googleSheet4,"Random43","a",43,null);

neoGSheetsLoadCell($App.googleSheet4,"Random44","a",44,null);

neoGSheetsLoadCell($App.googleSheet4,"Random45","a",45,null);

neoGSheetsLoadCell($App.googleSheet4,"Random46","a",46,null);

neoGSheetsLoadCell($App.googleSheet4,"Random47","a",47,null);

neoGSheetsLoadCell($App.googleSheet4,"Random48","a",48,null);

neoGSheetsLoadCell($App.googleSheet4,"Random49","a",49,null);

neoGSheetsLoadCell($App.googleSheet4,"Random50","a",50,null);

neoGSheetsLoadCell($App.googleSheet4,"Random51","a",51,null);

neoGSheetsLoadCell($App.googleSheet4,"Random52","a",52,null);

neoGSheetsLoadCell($App.googleSheet4,"Random53","a",53,null);

neoGSheetsLoadCell($App.googleSheet4,"Random54","a",54,null);

neoGSheetsLoadCell($App.googleSheet4,"Random55","a",55,null);

neoGSheetsLoadCell($App.googleSheet4,"Random56","a",56,null);

neoGSheetsLoadCell($App.googleSheet4,"Random57","a",57,null);

neoGSheetsLoadCell($App.googleSheet4,"Random58","a",58,null);

neoGSheetsLoadCell($App.googleSheet4,"Random59","a",59,null);

neoGSheetsLoadCell($App.googleSheet4,"Random60","a",60,null);

neoGSheetsLoadCell($App.googleSheet4,"Random61","a",61,null);

neoGSheetsLoadCell($App.googleSheet4,"Random62","a",62,null);

neoGSheetsLoadCell($App.googleSheet4,"Random63","a",63,null);

neoGSheetsLoadCell($App.googleSheet4,"Random64","a",64,null);

neoGSheetsLoadCell($App.googleSheet4,"Random65","a",65,null);

neoGSheetsLoadCell($App.googleSheet4,"Random66","a",66,null);

neoGSheetsLoadCell($App.googleSheet4,"Random67","a",67,null);

neoGSheetsLoadCell($App.googleSheet4,"Random68","a",68,null);

neoGSheetsLoadCell($App.googleSheet4,"Random69","a",69,null);

neoGSheetsLoadCell($App.googleSheet4,"Random70","a",70,null);

neoGSheetsLoadCell($App.googleSheet4,"Random71","a",71,null);

neoGSheetsLoadCell($App.googleSheet4,"Random72","a",72,null);

neoGSheetsLoadCell($App.googleSheet4,"Random73","a",73,null);

neoGSheetsLoadCell($App.googleSheet4,"Random74","a",74,null);

neoGSheetsLoadCell($App.googleSheet4,"Random75","a",75,null);

neoGSheetsLoadCell($App.googleSheet4,"Random76","a",76,null);

neoGSheetsLoadCell($App.googleSheet4,"Random77","a",77,null);

neoGSheetsLoadCell($App.googleSheet4,"Random78","a",78,null);

neoGSheetsLoadCell($App.googleSheet4,"Random79","a",79,null);

neoGSheetsLoadCell($App.googleSheet4,"Random80","a",80,null);

neoGSheetsLoadCell($App.googleSheet4,"Random81","a",81,null);

neoGSheetsLoadCell($App.googleSheet4,"Random82","a",82,null);

neoGSheetsLoadCell($App.googleSheet4,"Random83","a",83,null);

neoGSheetsLoadCell($App.googleSheet4,"Random84","a",84,null);

neoGSheetsLoadCell($App.googleSheet4,"Random85","a",85,null);

neoGSheetsLoadCell($App.googleSheet4,"Random86","a",86,null);

neoGSheetsLoadCell($App.googleSheet4,"Random87","a",87,null);

neoGSheetsLoadCell($App.googleSheet4,"Random88","a",88,null);

neoGSheetsLoadCell($App.googleSheet4,"Random89","a",89,null);

neoGSheetsLoadCell($App.googleSheet4,"Random90","a",90,null);

neoGSheetsLoadCell($App.googleSheet4,"Random91","a",91,null);

neoGSheetsLoadCell($App.googleSheet4,"Random92","a",92,null);

neoGSheetsLoadCell($App.googleSheet4,"Random93","a",93,null);

neoGSheetsLoadCell($App.googleSheet4,"Random94","a",94,null);

neoGSheetsLoadCell($App.googleSheet4,"Random95","a",95,null);

neoGSheetsLoadCell($App.googleSheet4,"Random96","a",96,null);

neoGSheetsLoadCell($App.googleSheet4,"Random97","a",97,null);

neoGSheetsLoadCell($App.googleSheet4,"Random98","a",98,null);

neoGSheetsLoadCell($App.googleSheet4,"Random99","a",99,null);

neoGSheetsLoadCell($App.googleSheet4,"Random100","a",100,null);

$App.Rannotes01 = localStorage.getItem("Rannotes01");
$App.Random01b = localStorage.getItem("Random01b");
$App.Random02b = localStorage.getItem("Random02b");
$App.Random03b = localStorage.getItem("Random03b");
$App.Random04b = localStorage.getItem("Random04b");
$App.Random05b = localStorage.getItem("Random05b");
$App.Random06b = localStorage.getItem("Random06b");
$App.Random07b = localStorage.getItem("Random07b");
$App.Random08b = localStorage.getItem("Random08b");
$App.Random09b = localStorage.getItem("Random09b");
$App.Random10b = localStorage.getItem("Random10b");
$App.Random11b = localStorage.getItem("Random11b");
$App.Random12b = localStorage.getItem("Random12b");
$App.Random13b = localStorage.getItem("Random13b");
$App.Random14b = localStorage.getItem("Random14b");
$App.Random15b = localStorage.getItem("Random15b");
$App.Random16b = localStorage.getItem("Random16b");
$App.Random17b = localStorage.getItem("Random17b");
$App.Random18b = localStorage.getItem("Random18b");
$App.Random19b = localStorage.getItem("Random19b");
$App.Random20b = localStorage.getItem("Random20b");
$App.Random21b = localStorage.getItem("Random21b");
$App.Random22b = localStorage.getItem("Random22b");
$App.Random32b = localStorage.getItem("Random23b");
$App.Random24b = localStorage.getItem("Random24b");
$App.Random25b = localStorage.getItem("Random25b");
$App.Random26b = localStorage.getItem("Random26b");
$App.Random27b = localStorage.getItem("Random27b");
$App.Random28b = localStorage.getItem("Random28b");
$App.Random29b = localStorage.getItem("Random29b");
$App.Random30b = localStorage.getItem("Random30b");
$App.Random31b = localStorage.getItem("Random31b");
$App.Random32b = localStorage.getItem("Random32b");
$App.Random33b = localStorage.getItem("Random33b");
$App.Random34b = localStorage.getItem("Random34b");
$App.Random35b = localStorage.getItem("Random35b");
$App.Random36b = localStorage.getItem("Random36b");
$App.Random37b = localStorage.getItem("Random37b");
$App.Random38b = localStorage.getItem("Random38b");
$App.Random39b = localStorage.getItem("Random39b");
$App.Random40b = localStorage.getItem("Random40b");
$App.Random41b = localStorage.getItem("Random41b");
$App.Random42b = localStorage.getItem("Random42b");
$App.Random43b = localStorage.getItem("Random43b");
$App.Random44b = localStorage.getItem("Random44b");
$App.Random45b = localStorage.getItem("Random45b");
$App.Random46b = localStorage.getItem("Random46b");
$App.Random47b = localStorage.getItem("Random47b");
$App.Random48b = localStorage.getItem("Random48b");
$App.Random49b = localStorage.getItem("Random49b");
$App.Random50b = localStorage.getItem("Random50b");
$App.Random51b = localStorage.getItem("Random51b");
$App.Random52b = localStorage.getItem("Random52b");
$App.Random53b = localStorage.getItem("Random53b");
$App.Random54b = localStorage.getItem("Random54b");
$App.Random55b = localStorage.getItem("Random55b");
$App.Random56b = localStorage.getItem("Random56b");
$App.Random57b = localStorage.getItem("Random57b");
$App.Random58b = localStorage.getItem("Random58b");
$App.Random59b = localStorage.getItem("Random59b");
$App.Random60b = localStorage.getItem("Random60b");
$App.Random61b = localStorage.getItem("Random61b");
$App.Random62b = localStorage.getItem("Random62b");
$App.Random63b = localStorage.getItem("Random63b");
$App.Random64b = localStorage.getItem("Random64b");
$App.Random65b = localStorage.getItem("Random65b");
$App.Random66b = localStorage.getItem("Random66b");
$App.Random67b = localStorage.getItem("Random67b");
$App.Random68b = localStorage.getItem("Random68b");
$App.Random69b = localStorage.getItem("Random69b");
$App.Random70b = localStorage.getItem("Random70b");
$App.Random71b = localStorage.getItem("Random71b");
$App.Random72b = localStorage.getItem("Random72b");
$App.Random73b = localStorage.getItem("Random73b");
$App.Random74b = localStorage.getItem("Random74b");
$App.Random75b = localStorage.getItem("Random75b");
$App.Random76b = localStorage.getItem("Random76b");
$App.Random77b = localStorage.getItem("Random77b");
$App.Random78b = localStorage.getItem("Random78b");
$App.Random79b = localStorage.getItem("Random79b");
$App.Random80b = localStorage.getItem("Random80b");
$App.Random81b = localStorage.getItem("Random81b");
$App.Random82b = localStorage.getItem("Random82b");
$App.Random83b = localStorage.getItem("Random83b");
$App.Random84b = localStorage.getItem("Random84b");
$App.Random85b = localStorage.getItem("Random85b");
$App.Random86b = localStorage.getItem("Random86b");
$App.Random87b = localStorage.getItem("Random87b");
$App.Random88b = localStorage.getItem("Random88b");
$App.Random89b = localStorage.getItem("Random89b");
$App.Random90b = localStorage.getItem("Random90b");
$App.Random91b = localStorage.getItem("Random91b");
$App.Random92b = localStorage.getItem("Random92b");
$App.Random93b = localStorage.getItem("Random93b");
$App.Random94b = localStorage.getItem("Random94b");
$App.Random95b = localStorage.getItem("Random95b");
$App.Random96b = localStorage.getItem("Random96b");
$App.Random97b = localStorage.getItem("Random97b");
$App.Random98b = localStorage.getItem("Random98b");
$App.Random99b = localStorage.getItem("Random99b");
$App.Random100b = localStorage.getItem("Random100b");
$App.entropy = localStorage.getItem("entropy");
$App.tesla = localStorage.getItem("tesla");
$App.brick = localStorage.getItem("brick");
$App.printer = localStorage.getItem("printer");
$App.health = localStorage.getItem("health");
$App.thunder = localStorage.getItem("thunder");
$App.fish = localStorage.getItem("fish");
$App.ds01 = localStorage.getItem("ds01");
$App.ds02 = localStorage.getItem("ds02");
$App.ds03 = localStorage.getItem("ds03");
$App.ds04 = localStorage.getItem("ds04");
$App.ds05 = localStorage.getItem("ds05");
$App.ds06 = localStorage.getItem("ds06");
$App.ds07 = localStorage.getItem("ds07");
$App.ds08 = localStorage.getItem("ds08");
$App.ds09 = localStorage.getItem("ds09");
$App.ds10 = localStorage.getItem("ds10");
$App.ds11 = localStorage.getItem("ds11");
$App.ds12 = localStorage.getItem("ds12");
$App.ds13 = localStorage.getItem("ds13");
$App.ds14 = localStorage.getItem("ds14");
$App.ds15 = localStorage.getItem("ds15");
$App.ds16 = localStorage.getItem("ds16");
$App.ds17 = localStorage.getItem("ds17");
$App.ds18 = localStorage.getItem("ds18");
$App.ds19 = localStorage.getItem("ds19");
$App.ds01a = localStorage.getItem("ds01a");
$App.ds02a = localStorage.getItem("ds02a");
$App.ds03a = localStorage.getItem("ds03a");
$App.ds04a = localStorage.getItem("ds04a");
$App.ds05a = localStorage.getItem("ds05a");
$App.ds06a = localStorage.getItem("ds06a");
$App.ds07a = localStorage.getItem("ds07a");
$App.ds08a = localStorage.getItem("ds08a");
$App.ds09a = localStorage.getItem("ds09a");
$App.ds10a = localStorage.getItem("ds10a");
$App.ds11a = localStorage.getItem("ds11a");
$App.ds12a = localStorage.getItem("ds12a");
$App.ds13a = localStorage.getItem("ds13a");
$App.ds14a = localStorage.getItem("ds14a");
$App.ds15a = localStorage.getItem("ds15a");
$App.ds16a = localStorage.getItem("ds16a");
$App.ds17a = localStorage.getItem("ds17a");
$App.ds18a = localStorage.getItem("ds18a");
$App.ds19a = localStorage.getItem("ds19a");
$App.workrep = localStorage.getItem("workrep");
$App.printerrep = localStorage.getItem("printerrep");
$App.thunderrep = localStorage.getItem("thunderrep");
$App.teslarep = localStorage.getItem("teslarep");
$App.brickrep = localStorage.getItem("brickrep");
$App.entropyrep = localStorage.getItem("entropyrep");
$App.teslarep = localStorage.getItem("teslarep");
$App.fishrep = localStorage.getItem("fishrep");
$App.healthrep = localStorage.getItem("healthrep");
$App.entropypc = localStorage.getItem("entropypc");
$App.teslapc = localStorage.getItem("teslapc");
$App.brickpc = localStorage.getItem("brickpc");
$App.printerpc = localStorage.getItem("printerpc");
$App.healthpc = localStorage.getItem("healthpc");
$App.thunderpc = localStorage.getItem("thunderpc");
$App.fishpc = localStorage.getItem("fishpc");
$App.na1 = localStorage.getItem("na1");
$App.na2 = localStorage.getItem("na2");
$App.na3 = localStorage.getItem("na3");
$App.na4 = localStorage.getItem("na4");
$App.flash12 = localStorage.getItem("flash12");
$App.workpc = localStorage.getItem("workpc");
$App.work = localStorage.getItem("work");
$App.reset00 = localStorage.getItem("reset00");
$App.reset01 = localStorage.getItem("reset01");
$App.reset02 = localStorage.getItem("reset02");
$App.reset03 = localStorage.getItem("reset03");
$App.start = "02/23/25";
$App.end = $App.NAB.DateShort;
$App.diff = dtDateDiff( $App.end, $App.start, "mm/dd/yyyy" );
$App.feb25week1aa = localStorage.getItem("feb25week1aa");
$App.Thisweek = localStorage.getItem("Thisweek");
$App.md1 = localStorage.getItem("md1");
$App.mv1a = localStorage.getItem("mv1a");
$App.mv1aa = localStorage.getItem("mv1aa");
$App.mv1aaa = localStorage.getItem("mv1aaa");
$App.mv1b = localStorage.getItem("mv1b");
$App.mv1bb = localStorage.getItem("mv1bb");
$App.mv1bbb = localStorage.getItem("mv1bbb");
$App.mv1c = localStorage.getItem("mv1c");
$App.mv1cc = localStorage.getItem("mv1cc");
$App.mv1ccc = localStorage.getItem("mv1ccc");
$App.mv1d = localStorage.getItem("mv1d");
$App.mv1dd = localStorage.getItem("mv1dd");
$App.mv1ddd = localStorage.getItem("mv1ddd");
$App.mv1e = localStorage.getItem("mv1e");
$App.mv1ee = localStorage.getItem("mv1ee");
$App.mv1eee = localStorage.getItem("mv1eee");
$App.DC = localStorage.getItem("DC");
$App.Prayer1main = localStorage.getItem("Prayer1main");
$App.Permanence2 = localStorage.getItem("Permanence2");
$App.Permanence3 = localStorage.getItem("Permanence3");};
$scope.adh00_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh01_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh02_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh03_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh04_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh05_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh06_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh07_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh08_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh09_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh10_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh11_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh12_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh13_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh14_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh15_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.adh16_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard01_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard02_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard03_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard04_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard05_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard06_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard07_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard08_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard09_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard10_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard11_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard12_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard13_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard14_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard15_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard16_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard17_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard18_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard19_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard20_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Dreamboard21_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Milesrecorder_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Random01_pageexit = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.Random02_pageexit = function() {localStorage.setItem("Random02b",$App.Random02b);};
$scope.Random03_pageexit = function() {localStorage.setItem("Random03b",$App.Random03b);};
$scope.Random04_pageexit = function() {localStorage.setItem("Random04b",$App.Random04b);};
$scope.Random05_pageexit = function() {localStorage.setItem("Random05b",$App.Random05b);};
$scope.Random06_pageexit = function() {localStorage.setItem("Random06b",$App.Random06b);};
$scope.Random07_pageexit = function() {localStorage.setItem("Random07b",$App.Random07b);};
$scope.Random08_pageexit = function() {localStorage.setItem("Random08b",$App.Random08b);};
$scope.Random09_pageexit = function() {localStorage.setItem("Random09b",$App.Random09b);};
$scope.Random10_pageexit = function() {localStorage.setItem("Random10b",$App.Random10b);};
$scope.Random11_pageexit = function() {localStorage.setItem("Random11b",$App.Random11b);};
$scope.Random12_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random13_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random14_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random15_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random16_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random17_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random18_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random19_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random20_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random21_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random22_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random23_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random24_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.Random25_pageexit = function() {localStorage.setItem("Random12b",$App.Random12b);};
angular.element(document).ready( function(){
$scope.__init();
neo = angular.element(document.getElementById("ng-view")).scope();neo.Refresh();});
});NeoApp.controller("App_DlgCtrl",function($scope,$rootScope,$modalInstance,$filter,$window,$animate){$scope.CloseDialog=function(){$modalInstance.close();};$scope.CloseDialogBtn=function(btnNum){$modalInstance.close(btnNum);};});
function debounce(func,wait,immediate){var timeout;return function(){var context=this,args=arguments;var later=function(){timeout=null;if(!immediate)func.apply(context,args);};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)func.apply(context,args);};};NeoApp.directive('timer',function(){return{restrict:'E',replace:false,transclude:false,link:function(scope,element,attributes){if(attributes.autostop){scope.$on('$destroy',function(){scope.$parent.TimerStop(attributes.id);});};if(attributes.autostart)scope.$parent.TimerStart(attributes.id,attributes.interval);}};});NeoApp.directive('slider',['$window',function($window){return{restrict:'E',replace:true,transclude:true,require:'?ngModel',scope:{value:"=ngModel",min:"=",max:"=",disabled:'=ngDisabled',onChange:"&",onChanging:"&"},compile:function(element,attributes){element.addClass('neoapp-slider');var html='';if(attributes.trackimage){html+='<img class="track-img" src="'+attributes.trackimage+'"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='/>';}else{html+='<div class="track"';if(attributes.trackheight)html+=' style="height:'+attributes.trackheight+'"';html+='><div class="track-left';if(attributes.kind)html+=' track-left-'+attributes.kind;html+='"></div>';};html+='</div><button class="thumb';if(attributes.thumbimage)html+=' thumb-img';if(attributes.kind)html+=' thumb-'+attributes.kind;html+='"';if(attributes.thumbwidth||attributes.thumbimage){html+=' style="';if(attributes.thumbwidth)html+='width:'+attributes.thumbwidth;if(attributes.thumbwidth&&attributes.thumbimage)html+=';';if(attributes.thumbimage)html+="background-image:url('"+attributes.thumbimage+"')";html+='"';};html+=' ng-style="NAB.'+attributes.id+'_style"';html+=' ng-transclude></button>';element.html(html);return linkFn;}};function linkFn($scope,element,attributes,ngModel){var mouseDown=false,track=attributes.trackimage?element.find('.track-img'):element.find('.track'),thumb=element.find('.thumb'),trackLeft=element.find('.track-left'),elemLeft,vMin=isNaN(parseFloat($scope.min))?0:parseFloat($scope.min),vMax=isNaN(parseFloat($scope.max))?100:parseFloat($scope.max),xOffs,dbOnChanging=($scope.onChanging)?debounce(function(){$scope.onChanging();},100):null;if(vMax<=vMin)vMax=vMin+1;var value=isNaN(parseFloat($scope.value))?vMin:parseFloat($scope.value);function positionThumb(){var basePos=((value-vMin)/(vMax-vMin))*(track.width()-thumb.innerWidth());thumb.css('left',basePos);if(trackLeft)trackLeft.css('width',basePos);};function updateValue(){if(ngModel&&!isNaN(parseFloat($scope.value))){var v=$scope.value;value=Math.max(vMin,Math.min(Math.floor(v),vMax));$scope.value=value;}else{value=Math.max(vMin,Math.min(Math.floor(value),vMax));};positionThumb();};function mouseCoords(event){if(event.type=='touchstart'||event.type=='touchmove'||event.type=='touchend'||event.type=='touchcancel'){var touch=event.originalEvent.touches[0]||event.originalEvent.changedTouches[0];return{x:touch.pageX,y:touch.pageY};}else{return{x:event.pageX,y:event.pageY};};};thumb.on('mousedown touchstart',function(event){if(!element.attr('disabled')){mouseDown=true;elemLeft=element.position().left;xOffs=mouseCoords(event).x-thumb.position().left-elemLeft;$(document).one('mouseup touchend ontouchcancel',function(event){if($scope.onChange)$scope.onChange();mouseDown=false;return false;});return false;};});element.on('mousemove touchmove',function(event){if(mouseDown){var xPos=mouseCoords(event).x-elemLeft-xOffs;var v=((xPos/(track.width()-thumb.innerWidth()))*(vMax-vMin))+vMin;v=Math.max(vMin,Math.min(Math.floor(v),vMax));if(value!=v){value=v;positionThumb();if(ngModel){$scope.value=value;if($scope.onChanging)$scope.onChanging();$scope.$apply();};if($scope.onChanging)dbOnChanging();};return false;};});angular.element($window).on('resize.'+element.id,function(){positionThumb();});if(ngModel){$scope.$watch('value',function(){if(!mouseDown){updateValue();};});};if(angular.isObject($scope.max)){$scope.$watch('max',function(){vMax=+$scope.max||100;updateValue();});};if(angular.isObject($scope.min)){$scope.$watch('min',function(){vMin=+$scope.min||0;updateValue();});};$scope.$watch('disabled',function(newVal){element.find('*').attr('disabled',newVal||false);});$scope.$on('$destroy',function(){angular.element($window).off('resize.'+element.id);});};}]);
NeoApp.controller("Home_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 1;
$App.NAB.PageID = "Home";
$scope.PushButton456_click = function() {$scope.GotoPage( "MainBoard" );};
$scope.PushButton459_click = function() {$scope.GotoPage( "Dailysheet" );
$App.ds01 = localStorage.getItem("DS01");
$App.ds02 = localStorage.getItem("DS02");
$App.ds03 = localStorage.getItem("DS03");
$App.ds04 = localStorage.getItem("DS04");
$App.ds05 = localStorage.getItem("DS05");
$App.ds06 = localStorage.getItem("DS06");
$App.ds07 = localStorage.getItem("DS07");
$App.ds08 = localStorage.getItem("DS08");
$App.ds09 = localStorage.getItem("DS09");
$App.ds10 = localStorage.getItem("DS10");
$App.ds11 = localStorage.getItem("DS11");
$App.ds12 = localStorage.getItem("DS12");
$App.ds13 = localStorage.getItem("DS13");
$App.DS06d = localStorage.getItem("DS06d");
$App.End01 = localStorage.getItem("End01");
$App.DS07d = localStorage.getItem("DS07d");
$App.End02 = localStorage.getItem("End02");
$App.DS08d = localStorage.getItem("DS08d");
$App.End03 = localStorage.getItem("End03");
$App.DS09d = localStorage.getItem("DS09d");
$App.End04 = localStorage.getItem("End04");
$App.DS10d = localStorage.getItem("DS10d");
$App.End05 = localStorage.getItem("End05");
$App.DS11d = localStorage.getItem("DS11d");
$App.End06 = localStorage.getItem("End06");
$App.DS12d = localStorage.getItem("DS12d");
$App.End07 = localStorage.getItem("Endo7");
$App.DS13d = localStorage.getItem("DS13d");
$App.End08 = localStorage.getItem("End08");
$App.start01 = $App.DS06d;
$App.start02 = $App.DS07d;
$App.start03 = $App.DS08d;
$App.start04 = $App.DS09d;
$App.start05 = $App.DS10d;
$App.start06 = $App.DS11d;
$App.start07 = $App.DS12d;
$App.start08 = $App.DS13d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
$App.r11ts = 15;
$App.r41ts = 10;
$scope.GotoPage( "Dailysheet" );
$App.start01 = $App.DS06d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
if ($App.End01 == 0) {
$App.End01 = "Due Today";
} else {
};
$App.start01 = $App.DS06d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
if ($App.End01 == 0) {
$App.End01 = "Due Today";
} else {
};
if ($App.DS06d < $App.NAB.DateShort+"0") {
$App.OverDue01 = "LATE";
$scope.SetObjectStyle("PushButton223","background-color","Red");
} else {
$App.OverDue01 = "Safe";
$scope.SetObjectStyle("PushButton223","background-color","Lime");
};
localStorage.setItem("DS06d",$App.DS06d);
$App.start02 = $App.DS07d;
$App.End02 = $App.NAB.DateShort;
$App.End02 = dtDateDiff( $App.NAB.DateShort+" ", $App.start02, "mm/dd/yyyy" );
if ($App.End02 == 0) {
$App.End02 = "Due Today";
} else {
};
if ($App.DS07d < $App.NAB.DateShort+"0") {
$App.OverDue02 = "LATE";
$scope.SetObjectStyle("PushButton224","background-color","Red");
} else {
$App.OverDue02 = "Safe";
$scope.SetObjectStyle("PushButton224","background-color","Lime");
};
localStorage.setItem("DS07d",$App.DS07d);
$App.start03 = $App.DS08d;
$App.End03 = $App.NAB.DateShort;
$App.End03 = dtDateDiff( $App.NAB.DateShort+" ", $App.start03, "mm/dd/yyyy" );
if ($App.End03 == 0) {
$App.End03 = "Due Today";
} else {
};
if ($App.DS08d < $App.NAB.DateShort+"0") {
$App.OverDue03 = "LATE";
$scope.SetObjectStyle("PushButton225","background-color","Red");
} else {
$App.OverDue03 = "Safe";
$scope.SetObjectStyle("PushButton225","background-color","Lime");
};
localStorage.setItem("DS08d",$App.DS08d);
if ($App.DS09d < $App.NAB.DateShort+"0") {
$App.OverDue04 = "LATE";
} else {
$App.OverDue04 = "Safe";
};
localStorage.setItem("DS09d",$App.DS09d);
$App.start04 = $App.DS09d;
$App.End04 = $App.NAB.DateShort;
$App.End04 = dtDateDiff( $App.NAB.DateShort+" ", $App.start04, "mm/dd/yyyy" );
if ($App.End04 == 0) {
$App.End04 = "Due Today";
} else {
};
if ($App.DS09d < $App.NAB.DateShort+"0") {
$App.OverDue04 = "LATE";
$scope.SetObjectStyle("PushButton226","background-color","Red");
} else {
$App.OverDue04 = "Safe";
$scope.SetObjectStyle("PushButton226","background-color","Lime");
};
localStorage.setItem("DS09d",$App.DS09d);
$App.start05 = $App.DS10d;
$App.End05 = $App.NAB.DateShort;
$App.End05 = dtDateDiff( $App.NAB.DateShort+" ", $App.start05, "mm/dd/yyyy" );
if ($App.End05 == 0) {
$App.End05 = "Due Today";
} else {
};
if ($App.DS10d < $App.NAB.DateShort+"0") {
$App.OverDue05 = "LATE";
$scope.SetObjectStyle("PushButton227","background-color","Red");
} else {
$App.OverDue05 = "Safe";
$scope.SetObjectStyle("PushButton227","background-color","Lime");
};
localStorage.setItem("DS10d",$App.DS10d);
$App.start06 = $App.DS11d;
$App.End06 = $App.NAB.DateShort;
$App.End06 = dtDateDiff( $App.NAB.DateShort+" ", $App.start06, "mm/dd/yyyy" );
if ($App.End06 == 0) {
$App.End06 = "Due Today";
} else {
};
if ($App.DS11d < $App.NAB.DateShort+"0") {
$App.OverDue06 = "LATE";
$scope.SetObjectStyle("PushButton228","background-color","Red");
} else {
$App.OverDue06 = "Safe";
$scope.SetObjectStyle("PushButton228","background-color","Lime");
};
localStorage.setItem("DS11d",$App.DS11d);
$App.start07 = $App.DS12d;
$App.End07 = $App.NAB.DateShort;
$App.End07 = dtDateDiff( $App.NAB.DateShort+" ", $App.start07, "mm/dd/yyyy" );
if ($App.End07 == 0) {
$App.End07 = "Due Today";
} else {
};
if ($App.DS12d < $App.NAB.DateShort+"0") {
$App.OverDue07 = "LATE";
$scope.SetObjectStyle("PushButton229","background-color","Red");
} else {
$App.OverDue07 = "Safe";
$scope.SetObjectStyle("PushButton229","background-color","Lime");
};
localStorage.setItem("DS12d",$App.DS12d);
$App.start08 = $App.DS13d;
$App.End08 = $App.NAB.DateShort;
$App.End08 = dtDateDiff( $App.NAB.DateShort+" ", $App.start08, "mm/dd/yyyy" );
if ($App.End08 == 0) {
$App.End08 = "Due Today";
} else {
};
if ($App.DS13d < $App.NAB.DateShort+"0") {
$App.OverDue08 = "LATE";
$scope.SetObjectStyle("PushButton230","background-color","Red");
} else {
$App.OverDue08 = "Safe";
$scope.SetObjectStyle("PushButton230","background-color","Lime");
};
localStorage.setItem("DS13d",$App.DS13d);};
$scope.PushButton460_click = function() {$scope.GotoPage( "Save" );};
$scope.PushButton466_click = function() {$App.googleSheet2 = "https://docs.google.com/spreadsheets/d/1tFxfBTW6Uj_-e6pTtBpBDNvrOlFQx7yWiOYxdxFA9pA/edit?usp=sharingadd #gid=X";
neoGSheetsLoadCell($App.googleSheet,"Prayer1main","a",1,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1a","a",2,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1aa","a",3,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1aa","a",4,null);

neoGSheetsLoadCell($App.googleSheet,"ledgend","a",5,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1b","a",6,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1acp","a",7,null);

neoGSheetsLoadCell($App.googleSheet,"feb25week1acph","a",8,null);

neoGSheetsLoadCell($App.googleSheet,"thoughts","a",9,null);
};
$scope.PushButton1_click = function() {window.open("https://docs.google.com/spreadsheets/d/1xsijrJmqCkGSYY4xLQMs-NY8f_V3n5cq0cml9u8AI4E/edit?gid=0&range=A1", "_blank");};
$scope.PushButton58_click = function() {window.open("https://docs.google.com/spreadsheets/d/1tFxfBTW6Uj_-e6pTtBpBDNvrOlFQx7yWiOYxdxFA9pA/edit?", "_blank");};
$scope.PushButton464_click = function() {window.open("https://docs.google.com/spreadsheets/d/1lXLoLWrxYaoSRLpICBRa6GmlA10GDkWaZ6RVwayZ83Y/edit?usp=sharing", "_blank");};
$scope.PushButton584_click = function() {$App.wain01 = localStorage.getItem("wain01");
$App.wain01a = localStorage.getItem("wain01a");
$App.wain02 = localStorage.getItem("wain02");
$App.wain02a = localStorage.getItem("wain02a");
$App.wain03 = localStorage.getItem("wain03");
$App.wain03a = localStorage.getItem("wain03a");
$App.wain04 = localStorage.getItem("wain04");
$App.wain04a = localStorage.getItem("wain04a");
$App.wain05 = localStorage.getItem("wain05");
$App.wain05a = localStorage.getItem("wain05a");
$App.wain06 = localStorage.getItem("wain06");
$App.wain06a = localStorage.getItem("wain06a");
$App.wain07 = localStorage.getItem("wain07");
$App.wain07a = localStorage.getItem("wain07a");
$App.wain08 = localStorage.getItem("wain08");
$App.wain08a = localStorage.getItem("wain08a");
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.select = "select";
$App.wain = $App.select;
$scope.GotoPage( "map" );};
$scope.Headline5_click = function() {$scope.GotoPage( "Debtclock" );};
$scope.Headline6_click = function() {$scope.GotoPage( "Permanace" );};
$scope.PushButton468_click = function() {$scope.GotoPage( "Random" );};
$scope.PushButton8_click = function() {$App.r1t = 15;
$App.r2t = 15;
$App.r3t = 15;
$App.r4t = 15;
$App.r5t = 15;
$App.r6t = 15;
$App.r7t = 15;
$App.r8t = 15;
$App.r9t = 15;
$App.r10t = 15;
$App.r11t = 15;
$App.r12t = 15;
$App.ta13 = 15;
$App.ta14 = 15;
$App.ta15 = 15;
$App.ta16 = 15;
$App.ta17 = 15;
$App.ta18 = 15;
$App.ta19 = 15;
$App.ta20 = 15;
$App.ta21 = 15;
$App.ta22 = 15;
$App.ta23 = 15;
$App.ta24 = 15;
$App.ta25 = 15;
$scope.GotoPage( "Dreamboard" );};
$scope.PushButton105_click = function() {$App.ad01 = localStorage.getItem("ad01");
$App.ad02 = localStorage.getItem("ad02");
$App.ad03 = localStorage.getItem("ad03");
$App.ad04 = localStorage.getItem("ad04");
$App.ad05 = localStorage.getItem("ad05");
$App.ad06 = localStorage.getItem("ad06");
$App.ad07 = localStorage.getItem("ad07");
$App.ad08 = localStorage.getItem("ad08");
$App.ad09 = localStorage.getItem("ad09");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad01b = localStorage.getItem("ad01b");
$App.ad02b = localStorage.getItem("ad02b");
$App.ad03b = localStorage.getItem("ad03b");
$App.ad04b = localStorage.getItem("ad04b");
$App.ad05b = localStorage.getItem("ad05b");
$App.ad06b = localStorage.getItem("ad06b");
$App.ad07b = localStorage.getItem("ad07b");
$App.ad08b = localStorage.getItem("ad08b");
$App.ad09b = localStorage.getItem("ad09b");
$App.ad10b = localStorage.getItem("ad10b");
$App.ad11b = localStorage.getItem("ad011");
$App.ad12b = localStorage.getItem("ad12b");
$App.ad13b = localStorage.getItem("ad13b");
$App.ad14b = localStorage.getItem("ad14b");
$App.ad15b = localStorage.getItem("ad15b");
$App.ad16b = localStorage.getItem("ad16b");
$scope.GotoPage( "adh00" );};
$scope.PushButton458_click = function() {window.document.location.reload();
$App.Reloaded = $App.NAB.DateLong+"--"+$App.NAB.Time;
localStorage.setItem("Reloaded",$App.Reloaded);
$App.Reloaded = localStorage.getItem("Reloaded");};
$scope.PushButton575_click = function() {window.open("https://docs.google.com/spreadsheets/d/1yQixLKy9LaRJnrrYnUyBbO8sUEhYKiy48MERr7E4yXI/edit?usp=sharing", "_blank");};
$scope.PushButton461_click = function() {$App.googleSheet = "https://docs.google.com/spreadsheets/d/1xsijrJmqCkGSYY4xLQMs-NY8f_V3n5cq0cml9u8AI4E/edit?usp=sharingadd #gid=X";
$App.p1t = 15;
$App.p1tz = 15;
neoGSheetsLoadCell($App.googleSheet,"Prayer1main","a",1,null);

$App.thoughts = localStorage.getItem("Thoughts");
$scope.GotoPage( "Page02" );};
$scope.PushButton231_click = function() {$scope.GotoPage( "Home2" );};
$scope.Headline32_click = function() {$App.wdne01 = localStorage.getItem("wdne01");
$App.wdnem01 = localStorage.getItem("wdnem01");
$App.wdnemc01 = localStorage.getItem("wdnemc01");
$App.wdne02 = localStorage.getItem("wdne02");
$App.wdnem02 = localStorage.getItem("wdnem02");
$App.wdnemc02 = localStorage.getItem("wdnemc02");
$App.wdne03 = localStorage.getItem("wdne03");
$App.wdnem03 = localStorage.getItem("wdnem03");
$App.wdnemc03 = localStorage.getItem("wdnemc03");
$App.wdne04 = localStorage.getItem("wdne04");
$App.wdnem04 = localStorage.getItem("wdnem04");
$App.wdnemc04 = localStorage.getItem("wdnemc04");
$App.wdne05 = localStorage.getItem("wdne05");
$App.wdnem05 = localStorage.getItem("wdnem05");
$App.wdnemc05 = localStorage.getItem("wdnemc05");
$App.wdne06 = localStorage.getItem("wdne06");
$App.wdnem06 = localStorage.getItem("wdnem06");
$App.wdnemc06 = localStorage.getItem("wdnemc06");
$App.wdne07 = localStorage.getItem("wdne07");
$App.wdnem07 = localStorage.getItem("wdnem07");
$App.wdnemc07 = localStorage.getItem("wdnemc07");
$App.wdne08 = localStorage.getItem("wdne08");
$App.wdnem08 = localStorage.getItem("wdnem08");
$App.wdnemc08 = localStorage.getItem("wdnemc08");
$App.wdnee01 = localStorage.getItem("wdnee01");
$scope.GotoPage( "Work01" );};
$scope.Headline33_click = function() {$App.adhdhelpernotes = localStorage.getItem("adhdhelpernotes");
$scope.GotoPage( "ADHDhelper" );};
$scope.Headline42_click = function() {$App.TimePanotes = localStorage.getItem("TimePanotes");
$scope.GotoPage( "Time-Pa" );};
$scope.Headline43_click = function() {$scope.GotoPage( "RulesMatter" );};
$scope.PushButton233_click = function() {$App.rulz01 = localStorage.getItem("rulz01");
$scope.GotoPage( "Rulz" );};
});
NeoApp.controller("Home2_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 2;
$App.NAB.PageID = "Home2";
$scope.Image59_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton232_click = function() {$scope.GotoPage( "Dailysheet" );
$App.ds01 = localStorage.getItem("DS01");
$App.ds02 = localStorage.getItem("DS02");
$App.ds03 = localStorage.getItem("DS03");
$App.ds04 = localStorage.getItem("DS04");
$App.ds05 = localStorage.getItem("DS05");
$App.ds06 = localStorage.getItem("DS06");
$App.ds07 = localStorage.getItem("DS07");
$App.ds08 = localStorage.getItem("DS08");
$App.ds09 = localStorage.getItem("DS09");
$App.ds10 = localStorage.getItem("DS10");
$App.ds11 = localStorage.getItem("DS11");
$App.ds12 = localStorage.getItem("DS12");
$App.ds13 = localStorage.getItem("DS13");
$App.DS06d = localStorage.getItem("DS06d");
$App.End01 = localStorage.getItem("End01");
$App.DS07d = localStorage.getItem("DS07d");
$App.End02 = localStorage.getItem("End02");
$App.DS08d = localStorage.getItem("DS08d");
$App.End03 = localStorage.getItem("End03");
$App.DS09d = localStorage.getItem("DS09d");
$App.End04 = localStorage.getItem("End04");
$App.DS10d = localStorage.getItem("DS10d");
$App.End05 = localStorage.getItem("End05");
$App.DS11d = localStorage.getItem("DS11d");
$App.End06 = localStorage.getItem("End06");
$App.DS12d = localStorage.getItem("DS12d");
$App.End07 = localStorage.getItem("Endo7");
$App.DS13d = localStorage.getItem("DS13d");
$App.End08 = localStorage.getItem("End08");
$App.start01 = $App.DS06d;
$App.start02 = $App.DS07d;
$App.start03 = $App.DS08d;
$App.start04 = $App.DS09d;
$App.start05 = $App.DS10d;
$App.start06 = $App.DS11d;
$App.start07 = $App.DS12d;
$App.start08 = $App.DS13d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
$App.r11ts = 15;
$App.r41ts = 10;
$scope.GotoPage( "Dailysheet" );
$App.start01 = $App.DS06d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
if ($App.End01 == 0) {
$App.End01 = "Due Today";
} else {
};
$App.start01 = $App.DS06d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
if ($App.End01 == 0) {
$App.End01 = "Due Today";
} else {
};
if ($App.DS06d < $App.NAB.DateShort+"0") {
$App.OverDue01 = "LATE";
$scope.SetObjectStyle("PushButton223","background-color","Red");
} else {
$App.OverDue01 = "Safe";
$scope.SetObjectStyle("PushButton223","background-color","Lime");
};
localStorage.setItem("DS06d",$App.DS06d);
$App.start02 = $App.DS07d;
$App.End02 = $App.NAB.DateShort;
$App.End02 = dtDateDiff( $App.NAB.DateShort+" ", $App.start02, "mm/dd/yyyy" );
if ($App.End02 == 0) {
$App.End02 = "Due Today";
} else {
};
if ($App.DS07d < $App.NAB.DateShort+"0") {
$App.OverDue02 = "LATE";
$scope.SetObjectStyle("PushButton224","background-color","Red");
} else {
$App.OverDue02 = "Safe";
$scope.SetObjectStyle("PushButton224","background-color","Lime");
};
localStorage.setItem("DS07d",$App.DS07d);
$App.start03 = $App.DS08d;
$App.End03 = $App.NAB.DateShort;
$App.End03 = dtDateDiff( $App.NAB.DateShort+" ", $App.start03, "mm/dd/yyyy" );
if ($App.End03 == 0) {
$App.End03 = "Due Today";
} else {
};
if ($App.DS08d < $App.NAB.DateShort+"0") {
$App.OverDue03 = "LATE";
$scope.SetObjectStyle("PushButton225","background-color","Red");
} else {
$App.OverDue03 = "Safe";
$scope.SetObjectStyle("PushButton225","background-color","Lime");
};
localStorage.setItem("DS08d",$App.DS08d);
if ($App.DS09d < $App.NAB.DateShort+"0") {
$App.OverDue04 = "LATE";
} else {
$App.OverDue04 = "Safe";
};
localStorage.setItem("DS09d",$App.DS09d);
$App.start04 = $App.DS09d;
$App.End04 = $App.NAB.DateShort;
$App.End04 = dtDateDiff( $App.NAB.DateShort+" ", $App.start04, "mm/dd/yyyy" );
if ($App.End04 == 0) {
$App.End04 = "Due Today";
} else {
};
if ($App.DS09d < $App.NAB.DateShort+"0") {
$App.OverDue04 = "LATE";
$scope.SetObjectStyle("PushButton226","background-color","Red");
} else {
$App.OverDue04 = "Safe";
$scope.SetObjectStyle("PushButton226","background-color","Lime");
};
localStorage.setItem("DS09d",$App.DS09d);
$App.start05 = $App.DS10d;
$App.End05 = $App.NAB.DateShort;
$App.End05 = dtDateDiff( $App.NAB.DateShort+" ", $App.start05, "mm/dd/yyyy" );
if ($App.End05 == 0) {
$App.End05 = "Due Today";
} else {
};
if ($App.DS10d < $App.NAB.DateShort+"0") {
$App.OverDue05 = "LATE";
$scope.SetObjectStyle("PushButton227","background-color","Red");
} else {
$App.OverDue05 = "Safe";
$scope.SetObjectStyle("PushButton227","background-color","Lime");
};
localStorage.setItem("DS10d",$App.DS10d);
$App.start06 = $App.DS11d;
$App.End06 = $App.NAB.DateShort;
$App.End06 = dtDateDiff( $App.NAB.DateShort+" ", $App.start06, "mm/dd/yyyy" );
if ($App.End06 == 0) {
$App.End06 = "Due Today";
} else {
};
if ($App.DS11d < $App.NAB.DateShort+"0") {
$App.OverDue06 = "LATE";
$scope.SetObjectStyle("PushButton228","background-color","Red");
} else {
$App.OverDue06 = "Safe";
$scope.SetObjectStyle("PushButton228","background-color","Lime");
};
localStorage.setItem("DS11d",$App.DS11d);
$App.start07 = $App.DS12d;
$App.End07 = $App.NAB.DateShort;
$App.End07 = dtDateDiff( $App.NAB.DateShort+" ", $App.start07, "mm/dd/yyyy" );
if ($App.End07 == 0) {
$App.End07 = "Due Today";
} else {
};
if ($App.DS12d < $App.NAB.DateShort+"0") {
$App.OverDue07 = "LATE";
$scope.SetObjectStyle("PushButton229","background-color","Red");
} else {
$App.OverDue07 = "Safe";
$scope.SetObjectStyle("PushButton229","background-color","Lime");
};
localStorage.setItem("DS12d",$App.DS12d);
$App.start08 = $App.DS13d;
$App.End08 = $App.NAB.DateShort;
$App.End08 = dtDateDiff( $App.NAB.DateShort+" ", $App.start08, "mm/dd/yyyy" );
if ($App.End08 == 0) {
$App.End08 = "Due Today";
} else {
};
if ($App.DS13d < $App.NAB.DateShort+"0") {
$App.OverDue08 = "LATE";
$scope.SetObjectStyle("PushButton230","background-color","Red");
} else {
$App.OverDue08 = "Safe";
$scope.SetObjectStyle("PushButton230","background-color","Lime");
};
localStorage.setItem("DS13d",$App.DS13d);};
$scope.Headline253_click = function() {$scope.GotoPage( "Debtclock" );};
$scope.Headline256_click = function() {$scope.GotoPage( "Permanace" );};
$scope.Headline259_click = function() {$scope.GotoPage( "Dreamboard01" );};
$scope.Headline261_click = function() {$scope.GotoPage( "Dreamboard02" );};
$scope.Headline262_click = function() {$scope.GotoPage( "Dreamboard03" );};
$scope.Headline263_click = function() {$scope.GotoPage( "Dreamboard04" );};
$scope.Headline264_click = function() {$scope.GotoPage( "Dreamboard05" );};
$scope.Headline265_click = function() {$scope.GotoPage( "Dreamboard06" );};
$scope.Headline266_click = function() {$scope.GotoPage( "Dreamboard07" );};
$scope.Headline267_click = function() {$scope.GotoPage( "Dreamboard08" );};
$scope.Headline268_click = function() {$scope.GotoPage( "Dreamboard09" );};
$scope.Headline269_click = function() {$scope.GotoPage( "Dreamboard10" );};
$scope.Headline270_click = function() {$scope.GotoPage( "Dreamboard11" );};
$scope.Headline271_click = function() {$scope.GotoPage( "Dreamboard12" );};
$scope.Headline272_click = function() {$scope.GotoPage( "Dreamboard13" );};
$scope.Headline273_click = function() {$scope.GotoPage( "Dreamboard14" );};
$scope.Headline274_click = function() {$scope.GotoPage( "Dreamboard15" );};
$scope.Headline275_click = function() {$scope.GotoPage( "Dreamboard16" );};
$scope.Headline276_click = function() {$scope.GotoPage( "Dreamboard17" );};
$scope.Headline277_click = function() {$scope.GotoPage( "Dreamboard18" );};
$scope.Headline278_click = function() {$scope.GotoPage( "Dreamboard19" );};
$scope.Headline279_click = function() {$scope.GotoPage( "Dreamboard20" );};
$scope.Headline280_click = function() {$scope.GotoPage( "Dreamboard21" );};
$scope.Headline281_click = function() {$scope.GotoPage( "Dreamboard22" );};
$scope.Headline282_click = function() {$scope.GotoPage( "Dreamboard23" );};
$scope.Headline283_click = function() {$scope.GotoPage( "Dreamboard24" );};
$scope.PushButton239_click = function() {$scope.GotoPage( "Random" );};
$scope.PushButton240_click = function() {$App.r1t = 15;
$App.r2t = 15;
$App.r3t = 15;
$App.r4t = 15;
$App.r5t = 15;
$App.r6t = 15;
$App.r7t = 15;
$App.r8t = 15;
$App.r9t = 15;
$App.r10t = 15;
$App.r11t = 15;
$App.r12t = 15;
$App.ta13 = 15;
$App.ta14 = 15;
$App.ta15 = 15;
$App.ta16 = 15;
$App.ta17 = 15;
$App.ta18 = 15;
$App.ta19 = 15;
$App.ta20 = 15;
$App.ta21 = 15;
$App.ta22 = 15;
$App.ta23 = 15;
$App.ta24 = 15;
$App.ta25 = 15;
$scope.GotoPage( "Dreamboard" );};
$scope.PushButton241_click = function() {$App.ad01 = localStorage.getItem("ad01");
$App.ad02 = localStorage.getItem("ad02");
$App.ad03 = localStorage.getItem("ad03");
$App.ad04 = localStorage.getItem("ad04");
$App.ad05 = localStorage.getItem("ad05");
$App.ad06 = localStorage.getItem("ad06");
$App.ad07 = localStorage.getItem("ad07");
$App.ad08 = localStorage.getItem("ad08");
$App.ad09 = localStorage.getItem("ad09");
$App.ad10 = localStorage.getItem("ad10");
$App.ad11 = localStorage.getItem("ad11");
$App.ad12 = localStorage.getItem("ad12");
$App.ad13 = localStorage.getItem("ad13");
$App.ad14 = localStorage.getItem("ad14");
$App.ad15 = localStorage.getItem("ad15");
$App.ad16 = localStorage.getItem("ad16");
$App.ad01b = localStorage.getItem("ad01b");
$App.ad02b = localStorage.getItem("ad02b");
$App.ad03b = localStorage.getItem("ad03b");
$App.ad04b = localStorage.getItem("ad04b");
$App.ad05b = localStorage.getItem("ad05b");
$App.ad06b = localStorage.getItem("ad06b");
$App.ad07b = localStorage.getItem("ad07b");
$App.ad08b = localStorage.getItem("ad08b");
$App.ad09b = localStorage.getItem("ad09b");
$App.ad10b = localStorage.getItem("ad10b");
$App.ad11b = localStorage.getItem("ad011");
$App.ad12b = localStorage.getItem("ad12b");
$App.ad13b = localStorage.getItem("ad13b");
$App.ad14b = localStorage.getItem("ad14b");
$App.ad15b = localStorage.getItem("ad15b");
$App.ad16b = localStorage.getItem("ad16b");
$scope.GotoPage( "adh00" );};
$scope.PushButton244_click = function() {$App.googleSheet = "https://docs.google.com/spreadsheets/d/1xsijrJmqCkGSYY4xLQMs-NY8f_V3n5cq0cml9u8AI4E/edit?usp=sharingadd #gid=X";
$App.p1t = 15;
$App.p1tz = 15;
neoGSheetsLoadCell($App.googleSheet,"Prayer1main","a",1,null);

$App.thoughts = localStorage.getItem("Thoughts");
$scope.GotoPage( "Page02" );};
$scope.Headline284_click = function() {$App.wdne01 = localStorage.getItem("wdne01");
$App.wdnem01 = localStorage.getItem("wdnem01");
$App.wdnemc01 = localStorage.getItem("wdnemc01");
$App.wdne02 = localStorage.getItem("wdne02");
$App.wdnem02 = localStorage.getItem("wdnem02");
$App.wdnemc02 = localStorage.getItem("wdnemc02");
$App.wdne03 = localStorage.getItem("wdne03");
$App.wdnem03 = localStorage.getItem("wdnem03");
$App.wdnemc03 = localStorage.getItem("wdnemc03");
$App.wdne04 = localStorage.getItem("wdne04");
$App.wdnem04 = localStorage.getItem("wdnem04");
$App.wdnemc04 = localStorage.getItem("wdnemc04");
$App.wdne05 = localStorage.getItem("wdne05");
$App.wdnem05 = localStorage.getItem("wdnem05");
$App.wdnemc05 = localStorage.getItem("wdnemc05");
$App.wdne06 = localStorage.getItem("wdne06");
$App.wdnem06 = localStorage.getItem("wdnem06");
$App.wdnemc06 = localStorage.getItem("wdnemc06");
$App.wdne07 = localStorage.getItem("wdne07");
$App.wdnem07 = localStorage.getItem("wdnem07");
$App.wdnemc07 = localStorage.getItem("wdnemc07");
$App.wdne08 = localStorage.getItem("wdne08");
$App.wdnem08 = localStorage.getItem("wdnem08");
$App.wdnemc08 = localStorage.getItem("wdnemc08");
$App.wdnee01 = localStorage.getItem("wdnee01");
$scope.GotoPage( "Work01" );};
$scope.Headline251_click = function() {$App.adhdhelpernotes = localStorage.getItem("adhdhelpernotes");
$scope.GotoPage( "ADHDhelper" );};
$scope.Headline252_click = function() {$App.TimePanotes = localStorage.getItem("TimePanotes");
$scope.GotoPage( "Time-Pa" );};
$scope.Headline285_click = function() {$scope.GotoPage( "RulesMatter" );};
});
NeoApp.controller("Work01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 3;
$App.NAB.PageID = "Work01";
$scope.Headline154_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline163_click = function() {$scope.GotoPage( "WorkCWD-adjust" );};
$scope.Headline164_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
});
NeoApp.controller("RulesMatter_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 4;
$App.NAB.PageID = "RulesMatter";
$scope.Headline289_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline293_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline292_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline294_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline295_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline296_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline297_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline298_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
$scope.Headline299_click = function() {$scope.GotoPage( "WorkDoNotEnjoy01" );};
});
NeoApp.controller("ADHDhelper_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 5;
$App.NAB.PageID = "ADHDhelper";
$scope.Headline302_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea139_change = function() {localStorage.setItem("adhdhelpernotes",$App.adhdhelpernotes);};
});
NeoApp.controller("Time-Pa_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 6;
$App.NAB.PageID = "Time-Pa";
$scope.Headline307_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea140_change = function() {localStorage.setItem("TimePanotes",$App.TimePanotes);};
});
NeoApp.controller("Rulz_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 7;
$App.NAB.PageID = "Rulz";
$scope.Headline46_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea141_change = function() {localStorage.setItem("rulz01",$App.rulz01);};
});
NeoApp.controller("WorkDoNotEnjoy01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 8;
$App.NAB.PageID = "WorkDoNotEnjoy01";
$scope.Headline168_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea113_change = function() {localStorage.setItem("wdne01",$App.wdne01);};
$scope.TextArea114_change = function() {localStorage.setItem("wdnem01",$App.wdnem01);};
$scope.TextArea115_change = function() {localStorage.setItem("wdnemc01",$App.wdnemc01);};
$scope.Headline173_click = function() {localStorage.setItem("wdnemc01","Keep Trying");
$App.wdnemc01 = "Keep Trying?";};
$scope.Pager1_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager1_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 9;
$App.NAB.PageID = "WorkDoNotEnjoy02";
$scope.Headline177_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea116_change = function() {localStorage.setItem("wdne02",$App.wdne02);};
$scope.TextArea117_change = function() {localStorage.setItem("wdnem02",$App.wdnem02);};
$scope.TextArea118_change = function() {localStorage.setItem("wdnemc02",$App.wdnemc02);};
$scope.Headline182_click = function() {localStorage.setItem("wdnemc02","Keep Trying");
$App.wdnemc02 = "Keep Trying?";};
$scope.Pager2_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager2_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 10;
$App.NAB.PageID = "WorkDoNotEnjoy03";
$scope.Headline186_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea119_change = function() {localStorage.setItem("wdne03",$App.wdne03);};
$scope.TextArea120_change = function() {localStorage.setItem("wdnem03",$App.wdnem03);};
$scope.TextArea121_change = function() {localStorage.setItem("wdnemc03",$App.wdnemc03);};
$scope.Headline191_click = function() {localStorage.setItem("wdnemc03","Keep Trying");
$App.wdnemc03 = "Keep Trying?";};
$scope.Pager3_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager3_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 11;
$App.NAB.PageID = "WorkDoNotEnjoy04";
$scope.Headline195_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea122_change = function() {localStorage.setItem("wdne04",$App.wdne04);};
$scope.TextArea123_change = function() {localStorage.setItem("wdnem04",$App.wdnem04);};
$scope.TextArea124_change = function() {localStorage.setItem("wdnemc04",$App.wdnemc04);};
$scope.Headline200_click = function() {localStorage.setItem("wdnemc04","Keep Trying");
$App.wdnemc04 = "Keep Trying?";};
$scope.Pager4_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager4_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 12;
$App.NAB.PageID = "WorkDoNotEnjoy05";
$scope.Headline204_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea125_change = function() {localStorage.setItem("wdne05",$App.wdne05);};
$scope.TextArea126_change = function() {localStorage.setItem("wdnem05",$App.wdnem05);};
$scope.TextArea127_change = function() {localStorage.setItem("wdnemc05",$App.wdnemc05);};
$scope.Headline209_click = function() {localStorage.setItem("wdnemc05","Keep Trying");
$App.wdnemc05 = "Keep Trying?";};
$scope.Pager5_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager5_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 13;
$App.NAB.PageID = "WorkDoNotEnjoy06";
$scope.Headline213_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea128_change = function() {localStorage.setItem("wdne06",$App.wdne06);};
$scope.TextArea129_change = function() {localStorage.setItem("wdnem06",$App.wdnem06);};
$scope.TextArea132_change = function() {localStorage.setItem("wdnemc06",$App.wdnemc06);};
$scope.Headline218_click = function() {localStorage.setItem("wdnemc06","Keep Trying");
$App.wdnemc06 = "Keep Trying?";};
$scope.Pager6_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager6_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 14;
$App.NAB.PageID = "WorkDoNotEnjoy07";
$scope.Headline222_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea133_change = function() {localStorage.setItem("wdne07",$App.wdne07);};
$scope.TextArea134_change = function() {localStorage.setItem("wdnem07",$App.wdnem07);};
$scope.TextArea135_change = function() {localStorage.setItem("wdnemc07",$App.wdnemc07);};
$scope.Headline227_click = function() {localStorage.setItem("wdnemc07","Keep Trying");
$App.wdnemc07 = "Keep Trying?";};
$scope.Pager7_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager7_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkDoNotEnjoy08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 15;
$App.NAB.PageID = "WorkDoNotEnjoy08";
$scope.Headline231_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea136_change = function() {localStorage.setItem("wdne08",$App.wdne08);};
$scope.TextArea137_change = function() {localStorage.setItem("wdnem08",$App.wdnem08);};
$scope.TextArea138_change = function() {localStorage.setItem("wdnemc08",$App.wdnemc08);};
$scope.Headline236_click = function() {localStorage.setItem("wdnemc08","Keep Trying");
$App.wdnemc08 = "Keep Trying?";};
$scope.Pager8_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager8_nextclick = function() {$scope.GotoNextPage();};
});
NeoApp.controller("WorkCWD-adjust_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 16;
$App.NAB.PageID = "WorkCWD-adjust";
$scope.Headline244_click = function() {$App.cwd = "Dont saw of the Branch you are sat on Just Yet! ";
localStorage.setItem("cwd",$App.cwd);
$scope.GotoPage( "WorkCurrent01" );};
$scope.Headline247_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline248_click = function() {$App.cwd = "Get ready to move the chess pieces!";
localStorage.setItem("cwd",$App.cwd);
$scope.GotoPage( "WorkCurrent01" );};
$scope.Headline249_click = function() {$App.cwd = "Freeze like a rabbit in the headlights!";
localStorage.setItem("cwd",$App.cwd);
$scope.GotoPage( "WorkCurrent01" );};
});
NeoApp.controller("Dailysheet_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 17;
$App.NAB.PageID = "Dailysheet";
$scope.PushButton277_click = function() {neoTalkCancelSpeech();};
$scope.PushButton278_click = function() {neoTalkSpeak($App.feb25week1a, "uk", 1, .9);};
$scope.DS1S_change = function() {localStorage.setItem("DS01",$App.ds01);};
$scope.TextArea85_change = function() {localStorage.setItem("DS02",$App.ds02);};
$scope.DS1Strew_click = function() {$App.r11ts = $scope.Calculate($App.r11ts+"-1",-1);
$scope.SetObjectStyle("DS1S","font-size",$App.r11ts+"pt");};
$scope.PushButton570_click = function() {$App.r11ts = $scope.Calculate($App.r11ts+"+1",-1);
$scope.SetObjectStyle("DS1S","font-size",$App.r11ts+"pt");};
$scope.Image79_click = function() {$scope.GotoPage( "Home" );};
$scope.DS4S_change = function() {localStorage.setItem("DS04",$App.ds04);};
$scope.PushButton579_click = function() {$App.r41ts = $scope.Calculate($App.r41ts+"-1",-1);
$scope.SetObjectStyle("DS4S","font-size",$App.r41ts+"pt");};
$scope.PushButton462_click = function() {$App.r41ts = $scope.Calculate($App.r41ts+"+1",-1);
$scope.SetObjectStyle("DS4S","font-size",$App.r41ts+"pt");};
$scope.PushButton196_click = function() {$scope.MoveObject("Container1","","30pt");};
$scope.PushButton197_click = function() {$scope.MoveObject("Container1","","474pt");};
$scope.TextArea105_change = function() {localStorage.setItem("DS05",$App.ds05);};
$scope.Container2_click = function() {$scope.HideObject("Container1","",0);};
$scope.Container3_click = function() {$scope.ShowObject("Container1","",0);};
$scope.TextArea18_change = function() {localStorage.setItem("Thisweek",$App.Thisweek);};
$scope.Headline130_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea86_change = function() {localStorage.setItem("DS06",$App.ds06);};
$scope.TextArea106_change = function() {$App.start05 = $App.DS10d;
$App.End05 = $App.NAB.DateShort;
$App.End05 = dtDateDiff( $App.NAB.DateShort+" ", $App.start05, "mm/dd/yyyy" );
if ($App.End05 == 0) {
$App.End05 = "Due Today";
} else {
};
if ($App.DS10d < $App.NAB.DateShort+"0") {
$App.OverDue05 = "LATE";
$scope.SetObjectStyle("PushButton227","background-color","Red");
} else {
$App.OverDue05 = "Safe";
$scope.SetObjectStyle("PushButton227","background-color","Lime");
};
localStorage.setItem("DS10d",$App.DS10d);};
$scope.TextArea107_change = function() {localStorage.setItem("DS08",$App.ds08);};
$scope.TextArea108_change = function() {$App.start06 = $App.DS11d;
$App.End06 = $App.NAB.DateShort;
$App.End06 = dtDateDiff( $App.NAB.DateShort+" ", $App.start06, "mm/dd/yyyy" );
if ($App.End06 == 0) {
$App.End06 = "Due Today";
} else {
};
if ($App.DS11d < $App.NAB.DateShort+"0") {
$App.OverDue06 = "LATE";
$scope.SetObjectStyle("PushButton228","background-color","Red");
} else {
$App.OverDue06 = "Safe";
$scope.SetObjectStyle("PushButton228","background-color","Lime");
};
localStorage.setItem("DS11d",$App.DS11d);};
$scope.TextArea109_change = function() {localStorage.setItem("DS11",$App.ds11);};
$scope.TextArea110_change = function() {$App.start03 = $App.DS08d;
$App.End03 = $App.NAB.DateShort;
$App.End03 = dtDateDiff( $App.NAB.DateShort+" ", $App.start03, "mm/dd/yyyy" );
if ($App.End03 == 0) {
$App.End03 = "Due Today";
} else {
};
if ($App.DS08d < $App.NAB.DateShort+"0") {
$App.OverDue03 = "LATE";
$scope.SetObjectStyle("PushButton225","background-color","Red");
} else {
$App.OverDue03 = "Safe";
$scope.SetObjectStyle("PushButton225","background-color","Lime");
};
localStorage.setItem("DS08d",$App.DS08d);};
$scope.TextArea111_change = function() {localStorage.setItem("DS09",$App.ds09);};
$scope.TextArea112_change = function() {$App.start04 = $App.DS09d;
$App.End04 = $App.NAB.DateShort;
$App.End04 = dtDateDiff( $App.NAB.DateShort+" ", $App.start04, "mm/dd/yyyy" );
if ($App.End04 == 0) {
$App.End04 = "Due Today";
} else {
};
if ($App.DS09d < $App.NAB.DateShort+"0") {
$App.OverDue04 = "LATE";
$scope.SetObjectStyle("PushButton226","background-color","Red");
} else {
$App.OverDue04 = "Safe";
$scope.SetObjectStyle("PushButton226","background-color","Lime");
};
localStorage.setItem("DS09d",$App.DS09d);};
$scope.TextArea96_change = function() {localStorage.setItem("DS10",$App.ds10);};
$scope.TextArea97_change = function() {$App.start07 = $App.DS12d;
$App.End07 = $App.NAB.DateShort;
$App.End07 = dtDateDiff( $App.NAB.DateShort+" ", $App.start07, "mm/dd/yyyy" );
if ($App.End07 == 0) {
$App.End07 = "Due Today";
} else {
};
if ($App.DS12d < $App.NAB.DateShort+"0") {
$App.OverDue07 = "LATE";
$scope.SetObjectStyle("PushButton229","background-color","Red");
} else {
$App.OverDue07 = "Safe";
$scope.SetObjectStyle("PushButton229","background-color","Lime");
};
localStorage.setItem("DS12d",$App.DS12d);};
$scope.TextArea98_change = function() {localStorage.setItem("DS12",$App.ds12);};
$scope.TextArea99_change = function() {localStorage.setItem("DS13",$App.ds13);};
$scope.TextArea100_change = function() {$App.start08 = $App.DS13d;
$App.End08 = $App.NAB.DateShort;
$App.End08 = dtDateDiff( $App.NAB.DateShort+" ", $App.start08, "mm/dd/yyyy" );
if ($App.End08 == 0) {
$App.End08 = "Due Today";
} else {
};
if ($App.DS13d < $App.NAB.DateShort+"0") {
$App.OverDue08 = "LATE";
$scope.SetObjectStyle("PushButton230","background-color","Red");
} else {
$App.OverDue08 = "Safe";
$scope.SetObjectStyle("PushButton230","background-color","Lime");
};
localStorage.setItem("DS13d",$App.DS13d);};
$scope.TextArea101_change = function() {localStorage.setItem("DS07",$App.ds07);};
$scope.TextArea102_change = function() {$App.start01 = $App.DS06d;
$App.End01 = $App.NAB.DateShort;
$App.End01 = dtDateDiff( $App.NAB.DateShort+" ", $App.start01, "mm/dd/yyyy" );
if ($App.End01 == 0) {
$App.End01 = "Due Today";
} else {
};
if ($App.DS06d < $App.NAB.DateShort+"0") {
$App.OverDue01 = "LATE";
$scope.SetObjectStyle("PushButton223","background-color","Red");
} else {
$App.OverDue01 = "Safe";
$scope.SetObjectStyle("PushButton223","background-color","Lime");
};
localStorage.setItem("DS06d",$App.DS06d);};
$scope.TextArea104_change = function() {$App.start02 = $App.DS07d;
$App.End02 = $App.NAB.DateShort;
$App.End02 = dtDateDiff( $App.NAB.DateShort+" ", $App.start02, "mm/dd/yyyy" );
if ($App.End02 == 0) {
$App.End02 = "Due Today";
} else {
};
if ($App.DS07d < $App.NAB.DateShort+"0") {
$App.OverDue02 = "LATE";
$scope.SetObjectStyle("PushButton224","background-color","Red");
} else {
$App.OverDue02 = "Safe";
$scope.SetObjectStyle("PushButton224","background-color","Lime");
};
localStorage.setItem("DS07d",$App.DS07d);};
});
NeoApp.controller("adh00_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 18;
$App.NAB.PageID = "adh00";
$scope.PushButton97_click = function() {localStorage.setItem("ad01",$App.ad01);
localStorage.setItem("ad02",$App.ad02);
localStorage.setItem("ad03",$App.ad03);
localStorage.setItem("ad04",$App.ad04);
localStorage.setItem("ad05",$App.ad05);
localStorage.setItem("ad06",$App.ad06);
localStorage.setItem("ad07",$App.ad07);
localStorage.setItem("ad08",$App.ad08);
localStorage.setItem("ad09",$App.ad09);
localStorage.setItem("ad10",$App.ad10);
localStorage.setItem("ad11",$App.ad11);
localStorage.setItem("ad12",$App.ad12);
localStorage.setItem("ad13",$App.ad13);
localStorage.setItem("ad14",$App.ad14);
localStorage.setItem("ad15",$App.ad15);
localStorage.setItem("ad16",$App.ad16);
$scope.GotoPage( "Home" );};
$scope.PushButton98_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.PushButton99_click = function() {neoTalkSpeak($App.db01b, "uk", 1, .9);};
$scope.PushButton100_click = function() {neoTalkCancelSpeech();};
$scope.TextArea44_change = function() {localStorage.setItem("ad01",$App.ad01);};
$scope.TextArea43_change = function() {localStorage.setItem("ad02",$App.ad02);};
$scope.TextArea45_change = function() {localStorage.setItem("ad03",$App.ad03);};
$scope.TextArea46_change = function() {localStorage.setItem("ad04",$App.ad04);};
$scope.PushButton106_click = function() {$scope.GotoPrevPage();};
$scope.PushButton107_click = function() {$scope.GotoNextPage();};
$scope.TextArea57_change = function() {localStorage.setItem("ad05",$App.ad05);};
$scope.TextArea58_change = function() {localStorage.setItem("ad06",$App.ad06);};
$scope.TextArea59_change = function() {localStorage.setItem("ad07",$App.ad07);};
$scope.TextArea60_change = function() {localStorage.setItem("ad08",$App.ad08);};
$scope.TextArea61_change = function() {localStorage.setItem("ad09",$App.ad09);};
$scope.TextArea62_change = function() {localStorage.setItem("ad10",$App.ad10);};
$scope.TextArea77_change = function() {localStorage.setItem("ad11",$App.ad11);};
$scope.TextArea78_change = function() {localStorage.setItem("ad12",$App.ad12);};
$scope.PushButton178_click = function() {$scope.GotoPage( "adh01" );};
$scope.PushButton179_click = function() {$scope.GotoPage( "adh02" );};
$scope.PushButton180_click = function() {$scope.GotoPage( "adh03" );};
$scope.PushButton181_click = function() {$scope.GotoPage( "adh04" );};
$scope.PushButton182_click = function() {$scope.GotoPage( "adh05" );};
$scope.PushButton183_click = function() {$scope.GotoPage( "adh06" );};
$scope.PushButton184_click = function() {$scope.GotoPage( "adh07" );};
$scope.PushButton185_click = function() {$scope.GotoPage( "adh08" );};
$scope.PushButton186_click = function() {$scope.GotoPage( "adh09" );};
$scope.PushButton187_click = function() {$scope.GotoPage( "adh10" );};
$scope.PushButton188_click = function() {$scope.GotoPage( "adh11" );};
$scope.PushButton189_click = function() {$scope.GotoPage( "adh12" );};
$scope.TextArea79_change = function() {localStorage.setItem("ad13",$App.ad13);};
$scope.TextArea80_change = function() {localStorage.setItem("ad14",$App.ad14);};
$scope.PushButton190_click = function() {$scope.GotoPage( "adh13" );};
$scope.PushButton191_click = function() {$scope.GotoPage( "adh14" );};
$scope.TextArea81_change = function() {localStorage.setItem("ad15",$App.ad15);};
$scope.TextArea82_change = function() {localStorage.setItem("ad16",$App.ad16);};
$scope.PushButton192_click = function() {$scope.GotoPage( "adh15" );};
$scope.PushButton193_click = function() {$scope.GotoPage( "adh16" );};
});
NeoApp.controller("adh01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 19;
$App.NAB.PageID = "adh01";
$scope.PushButton101_click = function() {localStorage.setItem("ad01",$App.ad01);
localStorage.setItem("ad01b",$App.ad01b);
$scope.GotoPage( "Home" );};
$scope.PushButton102_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea47_change = function() {localStorage.setItem("ad01b",$App.ad01b);};
$scope.PushButton103_click = function() {neoTalkSpeak($App.ad01b, "uk", 1, .9);};
$scope.PushButton104_click = function() {neoTalkCancelSpeech();};
$scope.TextArea48_change = function() {localStorage.setItem("ad01",$App.ad01);};
$scope.PushButton108_click = function() {$scope.GotoPrevPage();};
$scope.PushButton109_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 20;
$App.NAB.PageID = "adh02";
$scope.PushButton110_click = function() {localStorage.setItem("ad02",$App.ad02);
localStorage.setItem("ad02b",$App.ad02b);
$scope.GotoPage( "Home" );};
$scope.PushButton111_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea49_change = function() {localStorage.setItem("ad02b",$App.ad02b);};
$scope.PushButton112_click = function() {neoTalkSpeak($App.ad02b, "uk", 1, .9);};
$scope.PushButton113_click = function() {neoTalkCancelSpeech();};
$scope.TextArea50_change = function() {localStorage.setItem("ad02",$App.ad02);};
$scope.PushButton114_click = function() {$scope.GotoPrevPage();};
$scope.PushButton115_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 21;
$App.NAB.PageID = "adh03";
$scope.PushButton116_click = function() {localStorage.setItem("ad03",$App.ad03);
localStorage.setItem("ad03b",$App.ad03b);
$scope.GotoPage( "Home" );};
$scope.PushButton117_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea51_change = function() {localStorage.setItem("ad03b",$App.ad03b);};
$scope.PushButton118_click = function() {neoTalkSpeak($App.ad03b, "uk", 1, .9);};
$scope.PushButton119_click = function() {neoTalkCancelSpeech();};
$scope.TextArea52_change = function() {localStorage.setItem("ad03",$App.ad03);};
$scope.PushButton120_click = function() {$scope.GotoPrevPage();};
$scope.PushButton121_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 22;
$App.NAB.PageID = "adh04";
$scope.PushButton122_click = function() {localStorage.setItem("ad04",$App.ad04);
localStorage.setItem("ad04b",$App.ad04b);
$scope.GotoPage( "Home" );};
$scope.PushButton123_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea53_change = function() {localStorage.setItem("ad04b",$App.ad04b);};
$scope.PushButton124_click = function() {neoTalkSpeak($App.ad04b, "uk", 1, .9);};
$scope.PushButton125_click = function() {neoTalkCancelSpeech();};
$scope.TextArea54_change = function() {localStorage.setItem("ad04",$App.ad04);};
$scope.PushButton126_click = function() {$scope.GotoPrevPage();};
$scope.PushButton127_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 23;
$App.NAB.PageID = "adh05";
$scope.PushButton128_click = function() {localStorage.setItem("ad05",$App.ad05);
localStorage.setItem("ad05b",$App.ad05b);
$scope.GotoPage( "Home" );};
$scope.PushButton129_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea55_change = function() {localStorage.setItem("ad05b",$App.ad05b);};
$scope.PushButton130_click = function() {neoTalkSpeak($App.ad05b, "uk", 1, .9);};
$scope.PushButton131_click = function() {neoTalkCancelSpeech();};
$scope.TextArea56_change = function() {localStorage.setItem("ad05",$App.ad05);};
$scope.PushButton132_click = function() {$scope.GotoPrevPage();};
$scope.PushButton133_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 24;
$App.NAB.PageID = "adh06";
$scope.PushButton134_click = function() {localStorage.setItem("ad06",$App.ad06);
localStorage.setItem("ad06b",$App.ad06b);
$scope.GotoPage( "Home" );};
$scope.PushButton135_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea63_change = function() {localStorage.setItem("ad06b",$App.ad06b);};
$scope.PushButton136_click = function() {neoTalkSpeak($App.ad06b, "uk", 1, .9);};
$scope.PushButton137_click = function() {neoTalkCancelSpeech();};
$scope.TextArea64_change = function() {localStorage.setItem("ad06",$App.ad06);};
$scope.PushButton138_click = function() {$scope.GotoPrevPage();};
$scope.PushButton139_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 25;
$App.NAB.PageID = "adh07";
$scope.PushButton140_click = function() {localStorage.setItem("ad07",$App.ad07);
localStorage.setItem("ad07b",$App.ad07b);
$scope.GotoPage( "Home" );};
$scope.PushButton141_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea65_change = function() {localStorage.setItem("ad07b",$App.ad07b);};
$scope.PushButton142_click = function() {neoTalkSpeak($App.ad07b, "uk", 1, .9);};
$scope.PushButton143_click = function() {neoTalkCancelSpeech();};
$scope.TextArea66_change = function() {localStorage.setItem("ad07",$App.ad07);};
$scope.PushButton144_click = function() {$scope.GotoPrevPage();};
$scope.PushButton145_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 26;
$App.NAB.PageID = "adh08";
$scope.PushButton146_click = function() {localStorage.setItem("ad08",$App.ad08);
localStorage.setItem("ad08b",$App.ad08b);
$scope.GotoPage( "Home" );};
$scope.PushButton147_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea67_change = function() {localStorage.setItem("ad08b",$App.ad08b);};
$scope.PushButton148_click = function() {neoTalkSpeak($App.ad08b, "uk", 1, .9);};
$scope.PushButton149_click = function() {neoTalkCancelSpeech();};
$scope.TextArea68_change = function() {localStorage.setItem("ad08",$App.ad08);};
$scope.PushButton150_click = function() {$scope.GotoPrevPage();};
$scope.PushButton151_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh09_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 27;
$App.NAB.PageID = "adh09";
$scope.PushButton152_click = function() {localStorage.setItem("ad09",$App.ad09);
localStorage.setItem("ad09b",$App.ad09b);
$scope.GotoPage( "Home" );};
$scope.PushButton153_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea69_change = function() {localStorage.setItem("ad09b",$App.ad09b);};
$scope.PushButton154_click = function() {neoTalkSpeak($App.ad09b, "uk", 1, .9);};
$scope.PushButton155_click = function() {neoTalkCancelSpeech();};
$scope.TextArea70_change = function() {localStorage.setItem("ad09",$App.ad09);};
$scope.PushButton156_click = function() {$scope.GotoPrevPage();};
$scope.PushButton157_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 28;
$App.NAB.PageID = "adh10";
$scope.PushButton158_click = function() {localStorage.setItem("ad10",$App.ad10);
localStorage.setItem("ad10b",$App.ad10b);
$scope.GotoPage( "Home" );};
$scope.PushButton159_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea71_change = function() {localStorage.setItem("ad10b",$App.ad10b);};
$scope.PushButton160_click = function() {neoTalkSpeak($App.ad10b, "uk", 1, .9);};
$scope.PushButton161_click = function() {neoTalkCancelSpeech();};
$scope.TextArea72_change = function() {localStorage.setItem("ad10",$App.ad10);};
$scope.PushButton162_click = function() {$scope.GotoPrevPage();};
$scope.PushButton163_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 29;
$App.NAB.PageID = "adh11";
$scope.PushButton164_click = function() {localStorage.setItem("ad11",$App.ad11);
localStorage.setItem("ad11b",$App.ad11b);
$scope.GotoPage( "Home" );};
$scope.PushButton165_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea73_change = function() {localStorage.setItem("ad11b",$App.ad11b);};
$scope.PushButton166_click = function() {neoTalkSpeak($App.ad11b, "uk", 1, .9);};
$scope.PushButton167_click = function() {neoTalkCancelSpeech();};
$scope.TextArea74_change = function() {localStorage.setItem("ad11",$App.ad11);};
$scope.PushButton168_click = function() {$scope.GotoPrevPage();};
$scope.PushButton169_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh12_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 30;
$App.NAB.PageID = "adh12";
$scope.PushButton194_click = function() {localStorage.setItem("ad12",$App.ad12);
localStorage.setItem("ad12b",$App.ad12b);
$scope.GotoPage( "Home" );};
$scope.PushButton195_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea83_change = function() {localStorage.setItem("ad12b",$App.ad12b);};
$scope.PushButton198_click = function() {neoTalkSpeak($App.ad12b, "uk", 1, .9);};
$scope.PushButton199_click = function() {neoTalkCancelSpeech();};
$scope.TextArea84_change = function() {localStorage.setItem("ad12",$App.ad12);};
$scope.PushButton200_click = function() {$scope.GotoPrevPage();};
$scope.PushButton201_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh13_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 31;
$App.NAB.PageID = "adh13";
$scope.PushButton170_click = function() {localStorage.setItem("ad13",$App.ad13);
localStorage.setItem("ad13b",$App.ad13b);
$scope.GotoPage( "Home" );};
$scope.PushButton171_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea75_change = function() {localStorage.setItem("ad13b",$App.ad13b);};
$scope.PushButton173_click = function() {neoTalkSpeak($App.ad13b, "uk", 1, .9);};
$scope.PushButton175_click = function() {neoTalkCancelSpeech();};
$scope.TextArea76_change = function() {localStorage.setItem("ad13",$App.ad13);};
$scope.PushButton176_click = function() {$scope.GotoPrevPage();};
$scope.PushButton177_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh14_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 32;
$App.NAB.PageID = "adh14";
$scope.PushButton202_click = function() {localStorage.setItem("ad14",$App.ad14);
localStorage.setItem("ad14b",$App.ad14b);
$scope.GotoPage( "Home" );};
$scope.PushButton203_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea87_change = function() {localStorage.setItem("ad14b",$App.ad14b);};
$scope.PushButton204_click = function() {neoTalkSpeak($App.ad14b, "uk", 1, .9);};
$scope.PushButton205_click = function() {neoTalkCancelSpeech();};
$scope.TextArea88_change = function() {localStorage.setItem("ad14",$App.ad14);};
$scope.PushButton206_click = function() {$scope.GotoPrevPage();};
$scope.PushButton209_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh15_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 33;
$App.NAB.PageID = "adh15";
$scope.PushButton211_click = function() {localStorage.setItem("ad15",$App.ad15);
localStorage.setItem("ad15b",$App.ad15b);
$scope.GotoPage( "Home" );};
$scope.PushButton212_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea91_change = function() {localStorage.setItem("ad15b",$App.ad15b);};
$scope.PushButton213_click = function() {neoTalkSpeak($App.ad15b, "uk", 1, .9);};
$scope.PushButton214_click = function() {neoTalkCancelSpeech();};
$scope.TextArea92_change = function() {localStorage.setItem("ad15",$App.ad15);};
$scope.PushButton215_click = function() {$scope.GotoPrevPage();};
$scope.PushButton216_click = function() {$scope.GotoNextPage();};
});
NeoApp.controller("adh16_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 34;
$App.NAB.PageID = "adh16";
$scope.PushButton217_click = function() {localStorage.setItem("ad16",$App.ad16);
localStorage.setItem("ad16b",$App.ad16b);
$scope.GotoPage( "Home" );};
$scope.PushButton218_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea93_change = function() {localStorage.setItem("ad16b",$App.ad16b);};
$scope.PushButton219_click = function() {neoTalkSpeak($App.ad16b, "uk", 1, .9);};
$scope.PushButton220_click = function() {neoTalkCancelSpeech();};
$scope.TextArea95_change = function() {localStorage.setItem("ad16",$App.ad16);};
$scope.PushButton221_click = function() {$scope.GotoPrevPage();};
$scope.PushButton222_click = function() {$scope.GotoNextPage();};
$scope.Container4_click = function() {window.open("https://1drv.ms/x/c/469a0daef3bc98bf/ESQ5ilIOzjdFszXaWLAxY1MBr-JnoV6usiTfTWIyciUEjQ?e=1MHFQy", "_blank");};
});
NeoApp.controller("Debtclock_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 35;
$App.NAB.PageID = "Debtclock";
$scope.PushButton7_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton4_click = function() {$scope.GotoPage( "Debtclockinput" );};
});
NeoApp.controller("RanMain_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 36;
$App.NAB.PageID = "RanMain";
$scope.PushButton9_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton11_click = function() {$App.googleSheet4 = "https://docs.google.com/spreadsheets/d/1lXLoLWrxYaoSRLpICBRa6GmlA10GDkWaZ6RVwayZ83Y/edit?usp=sharingadd #gid=X";
$scope.ShowObject("R1","",0);
$scope.ShowObject("R2","",0);
$scope.HideObject("R3","",0);
$scope.HideObject("R4","",0);
$scope.HideObject("stressred","",0);
$App.Random01c = localStorage.getItem("Random01c");
$App.Random02c = localStorage.getItem("Random02c");
$App.Random03c = localStorage.getItem("Random03c");
$App.Random04c = localStorage.getItem("Random04c");
$App.Random05c = localStorage.getItem("Random05c");
$App.Random06c = localStorage.getItem("Random06c");
$App.Random07c = localStorage.getItem("Random07c");
$App.Random08c = localStorage.getItem("Random08c");
$App.Random09c = localStorage.getItem("Random09c");
$App.Random10c = localStorage.getItem("Random10c");
$App.Random11c = localStorage.getItem("Random11c");
$App.Random12c = localStorage.getItem("Random12c");
$App.Random13c = localStorage.getItem("Random13c");
$App.Random14c = localStorage.getItem("Random14c");
$App.Random15c = localStorage.getItem("Random15c");
$App.Random16c = localStorage.getItem("Random16c");
$App.Random17c = localStorage.getItem("Random17c");
$App.Random18c = localStorage.getItem("Random18c");
$App.Random19c = localStorage.getItem("Random19c");
$App.Random20c = localStorage.getItem("Random20c");
$App.Random21c = localStorage.getItem("Random21c");
$App.Random22c = localStorage.getItem("Random22c");
$App.Random23c = localStorage.getItem("Random23c");
$App.Random24c = localStorage.getItem("Random24c");
$App.Random25c = localStorage.getItem("Random25c");
$App.Random26c = localStorage.getItem("Random26c");
$App.r1t = 15;
$App.r2t = 15;
$App.r3t = 15;
$App.r4t = 15;
$App.r5t = 15;
$App.r6t = 15;
$App.r7t = 15;
$App.r8t = 15;
$App.r9t = 15;
$App.r10t = 15;
$App.r11t = 15;
$App.r12t = 15;
$App.ta13 = 15;
$App.ta14 = 15;
$App.ta15 = 15;
$App.ta16 = 15;
$App.ta17 = 15;
$App.ta18 = 15;
$App.ta19 = 15;
$App.ta20 = 15;
$App.ta21 = 15;
$App.ta22 = 15;
$App.ta23 = 15;
$App.ta24 = 15;
$App.ta25 = 15;
$App.ta26 = 15;
$App.ta27 = 15;
$App.ta28 = 15;
$App.ta29 = 15;
$App.ta30 = 15;
$App.ta31 = 15;
$App.ta32 = 15;
$App.ta33 = 15;
$App.ta34 = 15;
$App.ta35 = 15;
$App.ta36 = 15;
$App.ta37 = 15;
$App.ta38 = 15;
$App.ta39 = 15;
$App.ta40 = 15;
$App.ta41 = 15;
$App.ta42 = 15;
$App.ta43 = 15;
$App.ta44 = 15;
$App.ta45 = 15;
$App.ta46 = 15;
$App.ta47 = 15;
$App.ta48 = 15;
$App.ta49 = 15;
$App.ta50 = 15;
$App.ta51 = 15;
$App.ta52 = 15;
$App.ta53 = 15;
$App.ta54 = 15;
$App.ta55 = 15;
$App.ta56 = 15;
$App.ta57 = 15;
$App.ta58 = 15;
$App.ta59 = 15;
$App.ta60 = 15;
$App.ta61 = 15;
$App.ta62 = 15;
$App.ta63 = 15;
$App.ta64 = 15;
$App.ta65 = 15;
$App.ta66 = 15;
$App.ta67 = 15;
$App.ta68 = 15;
$App.ta69 = 15;
$App.ta70 = 15;
$App.ta71 = 15;
$App.ta72 = 15;
$App.ta73 = 15;
$App.ta74 = 15;
$App.ta75 = 15;
$App.ta76 = 15;
$App.ta77 = 15;
$App.ta78 = 15;
$App.ta79 = 15;
$App.ta80 = 15;
$App.ta81 = 15;
$App.ta82 = 15;
$App.ta83 = 15;
$App.ta84 = 15;
$App.ta85 = 15;
$App.ta86 = 15;
$App.ta87 = 15;
$App.ta88 = 15;
$App.ta89 = 15;
$App.ta90 = 15;
$App.ta91 = 15;
$App.ta92 = 15;
$App.ta93 = 15;
$App.ta94 = 15;
$App.ta95 = 15;
$App.ta96 = 15;
$App.ta97 = 15;
$App.ta98 = 15;
$App.ta99 = 15;
$App.ta100 = 15;
$scope.GotoPage( "Random" );};
$scope.Image14_click = function() {$scope.GotoPage( $App.goto01 );};
$scope.Image15_click = function() {$App.love01 = "";
$App.love02 = "";
$App.love03 = "";
$App.love04 = "";
$App.love05 = "";
$App.love06 = "";
localStorage.setItem("love01",$App.love01);
localStorage.setItem("love02",$App.love02);
localStorage.setItem("love03",$App.love03);
localStorage.setItem("love04",$App.love04);
localStorage.setItem("love05",$App.love05);
localStorage.setItem("love06",$App.love06);
$App.H01 = "";
$App.H02 = "";
$App.H03 = "";
$App.H04 = "";
$App.H05 = "";
$App.H06 = "";
localStorage.setItem("H01",$App.H01);
localStorage.setItem("H02",$App.H02);
localStorage.setItem("H03",$App.H03);
localStorage.setItem("H04",$App.H04);
localStorage.setItem("H05",$App.H05);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
$scope.Image16_click = function() {$scope.GotoPage( $App.goto02 );};
$scope.Image17_click = function() {$scope.GotoPage( $App.goto06 );};
$scope.Image18_click = function() {$scope.GotoPage( $App.goto05 );};
$scope.Image19_click = function() {$scope.GotoPage( $App.goto03 );};
$scope.Image20_click = function() {$scope.GotoPage( $App.goto04 );};
});
NeoApp.controller("Dreamboard_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 37;
$App.NAB.PageID = "Dreamboard";
$scope.PushButton5_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline4_click = function() {$scope.GotoPage( "Dreamboard01" );};
$scope.Headline13_click = function() {$scope.GotoPage( "Dreamboard03" );};
$scope.Headline14_click = function() {$scope.GotoPage( "Dreamboard09" );};
$scope.Headline15_click = function() {$scope.GotoPage( "Dreamboard08" );};
$scope.Headline16_click = function() {$scope.GotoPage( "Dreamboard04" );};
$scope.Headline18_click = function() {$scope.GotoPage( "Dreamboard06" );};
$scope.Headline19_click = function() {$scope.GotoPage( "Dreamboard07" );};
$scope.Headline20_click = function() {$scope.GotoPage( "Dreamboard05" );};
$scope.Headline21_click = function() {$scope.GotoPage( "Dreamboard13" );};
$scope.Headline22_click = function() {$scope.GotoPage( "Dreamboard14" );};
$scope.Headline23_click = function() {$scope.GotoPage( "Dreamboard15" );};
$scope.Headline24_click = function() {$scope.GotoPage( "Dreamboard10" );};
$scope.Headline25_click = function() {$scope.GotoPage( "Dreamboard11" );};
$scope.Headline26_click = function() {$scope.GotoPage( "Dreamboard12" );};
$scope.Headline27_click = function() {$scope.GotoPage( "Dreamboard16" );};
$scope.Headline28_click = function() {$scope.GotoPage( "Dreamboard17" );};
$scope.Headline29_click = function() {$scope.GotoPage( "Dreamboard19" );};
$scope.Headline30_click = function() {$scope.GotoPage( "Dreamboard18" );};
$scope.Headline31_click = function() {$scope.GotoPage( "Dreamboard20" );};
$scope.Headline17_click = function() {$scope.GotoPage( "Dreamboard02" );};
$scope.Headline108_click = function() {$scope.GotoPage( "Dreamboard21" );};
});
NeoApp.controller("Dreamboard01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 38;
$App.NAB.PageID = "Dreamboard01";
$scope.PushButton10_click = function() {localStorage.setItem("db01",$App.db01);
localStorage.setItem("db01b",$App.db01b);
$scope.GotoPage( "Home" );};
$scope.PushButton12_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.dbo1b_change = function() {localStorage.setItem("db01b",$App.db01b);};
$scope.PushButton13_click = function() {neoTalkSpeak($App.db01b, "uk", 1, .9);};
$scope.PushButton14_click = function() {neoTalkCancelSpeech();};
$scope.dbo1_change = function() {localStorage.setItem("db01",$App.db01);};
});
NeoApp.controller("Dreamboard02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 39;
$App.NAB.PageID = "Dreamboard02";
$scope.PushButton15_click = function() {localStorage.setItem("db02",$App.db02);
localStorage.setItem("db02b",$App.db02b);
$scope.GotoPage( "Home" );};
$scope.PushButton16_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea1_change = function() {localStorage.setItem("db02b",$App.db02b);};
$scope.PushButton17_click = function() {neoTalkSpeak($App.db02b, "uk", 1, .9);};
$scope.PushButton18_click = function() {neoTalkCancelSpeech();};
$scope.TextArea2_change = function() {localStorage.setItem("db02",$App.db02);};
});
NeoApp.controller("Dreamboard03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 40;
$App.NAB.PageID = "Dreamboard03";
$scope.PushButton19_click = function() {localStorage.setItem("db03",$App.db03);
localStorage.setItem("db03b",$App.db03b);
$scope.GotoPage( "Home" );};
$scope.PushButton20_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea3_change = function() {localStorage.setItem("db03b",$App.db03b);};
$scope.PushButton21_click = function() {neoTalkSpeak($App.db03b, "uk", 1, .9);};
$scope.PushButton22_click = function() {neoTalkCancelSpeech();};
$scope.TextArea5_change = function() {localStorage.setItem("db03",$App.db03);};
});
NeoApp.controller("Dreamboard04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 41;
$App.NAB.PageID = "Dreamboard04";
$scope.PushButton23_click = function() {localStorage.setItem("db04",$App.db04);
localStorage.setItem("db04b",$App.db04b);
$scope.GotoPage( "Home" );};
$scope.PushButton24_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea6_change = function() {localStorage.setItem("db04b",$App.db04b);};
$scope.PushButton25_click = function() {neoTalkSpeak($App.db04b, "uk", 1, .9);};
$scope.PushButton26_click = function() {neoTalkCancelSpeech();};
$scope.TextArea7_change = function() {localStorage.setItem("db04",$App.db04);};
});
NeoApp.controller("Dreamboard05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 42;
$App.NAB.PageID = "Dreamboard05";
$scope.PushButton27_click = function() {localStorage.setItem("db05",$App.db05);
localStorage.setItem("db05b",$App.db05b);
$scope.GotoPage( "Home" );};
$scope.PushButton28_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea8_change = function() {localStorage.setItem("db05b",$App.db05b);};
$scope.PushButton29_click = function() {neoTalkSpeak($App.db05b, "uk", 1, .9);};
$scope.PushButton30_click = function() {neoTalkCancelSpeech();};
$scope.TextArea9_change = function() {localStorage.setItem("db05",$App.db05);};
});
NeoApp.controller("Dreamboard06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 43;
$App.NAB.PageID = "Dreamboard06";
$scope.PushButton31_click = function() {localStorage.setItem("db06",$App.db06);
localStorage.setItem("db06b",$App.db06b);
$scope.GotoPage( "Home" );};
$scope.PushButton32_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea10_change = function() {localStorage.setItem("db06b",$App.db06b);};
$scope.PushButton33_click = function() {neoTalkSpeak($App.db06b, "uk", 1, .9);};
$scope.PushButton34_click = function() {neoTalkCancelSpeech();};
$scope.TextArea11_change = function() {localStorage.setItem("db06",$App.db06);};
});
NeoApp.controller("Dreamboard07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 44;
$App.NAB.PageID = "Dreamboard07";
$scope.PushButton35_click = function() {localStorage.setItem("db07",$App.db07);
localStorage.setItem("db07b",$App.db07b);
$scope.GotoPage( "Home" );};
$scope.PushButton36_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea12_change = function() {localStorage.setItem("db07b",$App.db07b);};
$scope.PushButton37_click = function() {neoTalkSpeak($App.db07b, "uk", 1, .9);};
$scope.PushButton38_click = function() {neoTalkCancelSpeech();};
$scope.TextArea13_change = function() {localStorage.setItem("db07",$App.db07);};
});
NeoApp.controller("Dreamboard08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 45;
$App.NAB.PageID = "Dreamboard08";
$scope.PushButton39_click = function() {localStorage.setItem("db08",$App.db08);
localStorage.setItem("db08b",$App.db08b);
$scope.GotoPage( "Home" );};
$scope.PushButton40_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea14_change = function() {localStorage.setItem("db08b",$App.db08b);};
$scope.PushButton41_click = function() {neoTalkSpeak($App.db08b, "uk", 1, .9);};
$scope.PushButton42_click = function() {neoTalkCancelSpeech();};
$scope.TextArea15_change = function() {localStorage.setItem("db08",$App.db08);};
});
NeoApp.controller("Dreamboard09_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 46;
$App.NAB.PageID = "Dreamboard09";
$scope.PushButton43_click = function() {localStorage.setItem("db09",$App.db09);
localStorage.setItem("db09b",$App.db09b);
$scope.GotoPage( "Home" );};
$scope.PushButton44_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea16_change = function() {localStorage.setItem("db09b",$App.db09b);};
$scope.PushButton45_click = function() {neoTalkSpeak($App.db09b, "uk", 1, .9);};
$scope.PushButton46_click = function() {neoTalkCancelSpeech();};
$scope.TextArea17_change = function() {localStorage.setItem("db09",$App.db09);};
});
NeoApp.controller("Dreamboard10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 47;
$App.NAB.PageID = "Dreamboard10";
$scope.PushButton47_click = function() {localStorage.setItem("db10",$App.db10);
localStorage.setItem("db10b",$App.db10b);
$scope.GotoPage( "Home" );};
$scope.PushButton48_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea19_change = function() {localStorage.setItem("db10b",$App.db10b);};
$scope.PushButton49_click = function() {neoTalkSpeak($App.db10b, "uk", 1, .9);};
$scope.PushButton50_click = function() {neoTalkCancelSpeech();};
$scope.TextArea20_change = function() {localStorage.setItem("db10",$App.db10);};
});
NeoApp.controller("Dreamboard11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 48;
$App.NAB.PageID = "Dreamboard11";
$scope.PushButton51_click = function() {localStorage.setItem("db11",$App.db11);
localStorage.setItem("db11b",$App.db11b);
$scope.GotoPage( "Home" );};
$scope.PushButton52_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea21_change = function() {localStorage.setItem("db11b",$App.db11b);};
$scope.PushButton53_click = function() {neoTalkSpeak($App.db11b, "uk", 1, .9);};
$scope.PushButton54_click = function() {neoTalkCancelSpeech();};
$scope.TextArea22_change = function() {localStorage.setItem("db11",$App.db11);};
});
NeoApp.controller("Dreamboard12_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 49;
$App.NAB.PageID = "Dreamboard12";
$scope.PushButton55_click = function() {localStorage.setItem("db12",$App.db12);
localStorage.setItem("db12b",$App.db12b);
$scope.GotoPage( "Home" );};
$scope.PushButton56_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea23_change = function() {localStorage.setItem("db12b",$App.db12b);};
$scope.PushButton57_click = function() {neoTalkSpeak($App.db12b, "uk", 1, .9);};
$scope.PushButton59_click = function() {neoTalkCancelSpeech();};
$scope.TextArea24_change = function() {localStorage.setItem("db12",$App.db12);};
});
NeoApp.controller("Dreamboard13_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 50;
$App.NAB.PageID = "Dreamboard13";
$scope.PushButton60_click = function() {localStorage.setItem("db13",$App.db13);
localStorage.setItem("db13b",$App.db13b);
$scope.GotoPage( "Home" );};
$scope.PushButton61_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea25_change = function() {localStorage.setItem("db13b",$App.db13b);};
$scope.PushButton62_click = function() {neoTalkSpeak($App.db13b, "uk", 1, .9);};
$scope.PushButton63_click = function() {neoTalkCancelSpeech();};
$scope.TextArea26_change = function() {localStorage.setItem("db13",$App.db13);};
});
NeoApp.controller("Dreamboard14_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 51;
$App.NAB.PageID = "Dreamboard14";
$scope.PushButton64_click = function() {localStorage.setItem("db14",$App.db14);
localStorage.setItem("db14b",$App.db14b);
$scope.GotoPage( "Home" );};
$scope.PushButton65_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea27_change = function() {localStorage.setItem("db14b",$App.db14b);};
$scope.PushButton66_click = function() {neoTalkSpeak($App.db14b, "uk", 1, .9);};
$scope.PushButton67_click = function() {neoTalkCancelSpeech();};
$scope.TextArea28_change = function() {localStorage.setItem("db14",$App.db14);};
});
NeoApp.controller("Dreamboard15_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 52;
$App.NAB.PageID = "Dreamboard15";
$scope.PushButton68_click = function() {localStorage.setItem("db15",$App.db15);
localStorage.setItem("db15b",$App.db15b);
$scope.GotoPage( "Home" );};
$scope.PushButton69_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea29_change = function() {localStorage.setItem("db15b",$App.db15b);};
$scope.PushButton70_click = function() {neoTalkSpeak($App.db15b, "uk", 1, .9);};
$scope.PushButton71_click = function() {neoTalkCancelSpeech();};
$scope.TextArea30_change = function() {localStorage.setItem("db15",$App.db15);};
});
NeoApp.controller("Dreamboard16_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 53;
$App.NAB.PageID = "Dreamboard16";
$scope.PushButton72_click = function() {localStorage.setItem("db16",$App.db16);
localStorage.setItem("db16b",$App.db16b);
$scope.GotoPage( "Home" );};
$scope.PushButton73_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea31_change = function() {localStorage.setItem("db16b",$App.db16b);};
$scope.PushButton74_click = function() {neoTalkSpeak($App.db16b, "uk", 1, .9);};
$scope.PushButton75_click = function() {neoTalkCancelSpeech();};
$scope.TextArea32_change = function() {localStorage.setItem("db16",$App.db16);};
});
NeoApp.controller("Dreamboard17_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 54;
$App.NAB.PageID = "Dreamboard17";
$scope.PushButton76_click = function() {localStorage.setItem("db17",$App.db17);
localStorage.setItem("db17b",$App.db17b);
$scope.GotoPage( "Home" );};
$scope.PushButton77_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea33_change = function() {localStorage.setItem("db17b",$App.db17b);};
$scope.PushButton78_click = function() {neoTalkSpeak($App.db17b, "uk", 1, .9);};
$scope.PushButton79_click = function() {neoTalkCancelSpeech();};
$scope.TextArea34_change = function() {localStorage.setItem("db17",$App.db17);};
});
NeoApp.controller("Dreamboard18_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 55;
$App.NAB.PageID = "Dreamboard18";
$scope.PushButton81_click = function() {localStorage.setItem("db18",$App.db18);
localStorage.setItem("db18b",$App.db18b);
$scope.GotoPage( "Home" );};
$scope.PushButton82_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea35_change = function() {localStorage.setItem("db18b",$App.db18b);};
$scope.PushButton83_click = function() {neoTalkSpeak($App.db18b, "uk", 1, .9);};
$scope.PushButton84_click = function() {neoTalkCancelSpeech();};
$scope.TextArea36_change = function() {localStorage.setItem("db18",$App.db18);};
});
NeoApp.controller("Dreamboard19_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 56;
$App.NAB.PageID = "Dreamboard19";
$scope.PushButton85_click = function() {localStorage.setItem("db19",$App.db19);
localStorage.setItem("db19b",$App.db19b);
$scope.GotoPage( "Home" );};
$scope.PushButton86_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea37_change = function() {localStorage.setItem("db19b",$App.db19b);};
$scope.PushButton87_click = function() {neoTalkSpeak($App.db19b, "uk", 1, .9);};
$scope.PushButton88_click = function() {neoTalkCancelSpeech();};
$scope.TextArea38_change = function() {localStorage.setItem("db19",$App.db19);};
});
NeoApp.controller("Dreamboard20_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 57;
$App.NAB.PageID = "Dreamboard20";
$scope.PushButton89_click = function() {localStorage.setItem("db20",$App.db20);
localStorage.setItem("db20b",$App.db20b);
$scope.GotoPage( "Home" );};
$scope.PushButton90_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea39_change = function() {localStorage.setItem("db20b",$App.db20b);};
$scope.PushButton91_click = function() {neoTalkSpeak($App.db20b, "uk", 1, .9);};
$scope.PushButton92_click = function() {neoTalkCancelSpeech();};
$scope.TextArea40_change = function() {localStorage.setItem("db20",$App.db20);};
});
NeoApp.controller("Dreamboard21_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 58;
$App.NAB.PageID = "Dreamboard21";
$scope.PushButton93_click = function() {localStorage.setItem("db21",$App.db21);
localStorage.setItem("db21b",$App.db21b);
$scope.GotoPage( "Home" );};
$scope.PushButton94_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea41_change = function() {localStorage.setItem("db21b",$App.db21b);};
$scope.PushButton95_click = function() {neoTalkSpeak($App.db21b, "uk", 1, .9);};
$scope.PushButton96_click = function() {neoTalkCancelSpeech();};
$scope.TextArea42_change = function() {localStorage.setItem("db21",$App.db21);};
});
NeoApp.controller("Debtclockinput_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 59;
$App.NAB.PageID = "Debtclockinput";
$scope.PushButton2_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton3_click = function() {$scope.GotoPage( "Debtclock" );};
});
NeoApp.controller("Permanace_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 60;
$App.NAB.PageID = "Permanace";
$scope.TextArea90_change = function() {localStorage.setItem("Permanence2",$App.Permanence2);};
$scope.TextArea103_change = function() {localStorage.setItem("Permanence3",$App.Permanence3);};
$scope.PushButton172_click = function() {neoTalkSpeak($App.Permanence3, "uk", 1, .9);};
$scope.PushButton174_click = function() {neoTalkCancelSpeech();};
$scope.PushButton273_click = function() {neoTalkSpeak($App.Permanence2, "uk", 1, .9);};
$scope.PushButton455_click = function() {neoTalkCancelSpeech();};
$scope.PushButton463_click = function() {$scope.GotoPage( "Home" );};
});
NeoApp.controller("Page02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 61;
$App.NAB.PageID = "Page02";
$scope.PushButton208_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea94_change = function() {localStorage.setItem("Prayer1main",$App.Prayer1main);};
$scope.Headline544_click = function() {$App.Prayer1main = localStorage.getItem("Prayer1mainR");};
$scope.PushButton207_click = function() {neoTalkSpeak($App.Prayer1main, "uk", 1, .9);};
$scope.PushButton210_click = function() {neoTalkCancelSpeech();};
$scope.PushButton284_click = function() {$scope.GotoPage( "Page2a" );
$App.Prayer1main1 = localStorage.getItem("Prayer1main1");
$App.Prayer1main2 = localStorage.getItem("Prayer1main2");
$App.Prayer1main3 = localStorage.getItem("Prayer1main3");
$App.Prayer1main4 = localStorage.getItem("Prayer1main4");
$App.Prayer1main5 = localStorage.getItem("Prayer1main5");};
$scope.PushButton544_click = function() {$App.p1t = $scope.Calculate($App.p1t+"-1",-1);
$scope.SetObjectStyle("TextArea94","font-size",$App.p1t+"pt");};
$scope.PushButton545_click = function() {$App.p1t = $scope.Calculate($App.p1t+"+1",-1);
$scope.SetObjectStyle("TextArea94","font-size",$App.p1t+"pt");};
$scope.PushButton6_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton612_click = function() {neoTalkPauseSpeech();};
$scope.PushButton613_click = function() {neoTalkSpeak($App.thoughts, "uk", 1, .9);};
$scope.PushButton614_click = function() {neoTalkCancelSpeech();};
$scope.PushButton615_click = function() {$App.p1tz = $scope.Calculate($App.p1tz+"-1",-1);
$scope.SetObjectStyle("TextArea130","font-size",$App.p1tz+"pt");};
$scope.PushButton616_click = function() {$App.p1tz = $scope.Calculate($App.p1tz+"+1",-1);
$scope.SetObjectStyle("TextArea130","font-size",$App.p1tz+"pt");};
$scope.TextArea130_change = function() {localStorage.setItem("Thoughts",$App.thoughts);};
$scope.Image3_click = function() {$scope.GotoPage( $App.goto01 );};
$scope.Image4_click = function() {$scope.GotoPage( $App.goto02 );};
$scope.Image5_click = function() {$scope.GotoPage( $App.goto03 );};
$scope.Image6_click = function() {$scope.GotoPage( $App.goto04 );};
$scope.Image7_click = function() {$scope.GotoPage( $App.goto05 );};
$scope.Image8_click = function() {$scope.GotoPage( $App.goto06 );};
});
NeoApp.controller("Milesrecorder_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 62;
$App.NAB.PageID = "Milesrecorder";
$scope.PushButton571_click = function() {$scope.GotoPage( "Home" );};
$scope.PushButton572_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.PushButton573_click = function() {neoTalkSpeak($App.Random01b, "uk", 1, .9);};
$scope.PushButton574_click = function() {neoTalkCancelSpeech();};
$scope.Pager21_prevclick = function() {$scope.GotoPrevPage();};
$scope.Pager21_nextclick = function() {$scope.GotoNextPage();};
$scope.PushButton576_click = function() {$App.r1t = $scope.Calculate($App.r1t+"-1",-1);
$scope.SetObjectStyle("ranbox01","font-size",$App.r1t+"pt");};
$scope.PushButton577_click = function() {$App.r1t = $scope.Calculate($App.r1t+"+1",-1);
$scope.SetObjectStyle("ranbox01","font-size",$App.r1t+"pt");};
$scope.PushButton578_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);
};
$scope.Container32_click = function() {window.open("https://docs.google.com/spreadsheets/d/e/2PACX-1vSYts-qj-irPddyFTvamyPshcSGuJ1h5RchqBkkgIKPER458MPMGLEQdzjK6f8KotOU5Q-hfSRDpBtZ/pubhtml", "_blank");};
});
NeoApp.controller("map_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 63;
$App.NAB.PageID = "map";
$scope.TextArea4_change = function() {localStorage.setItem("wain01a",$App.wain01a);};
$scope.TextInput113_change = function() {localStorage.setItem("wain01",$App.wain01);};
$scope.Headline417_click = function() {$scope.ShowObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain01;};
$scope.PushButton581_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.PushButton582_click = function() {neoTalkSpeak($App.Prayer1main, "uk", 1, .9);};
$scope.PushButton583_click = function() {neoTalkCancelSpeech();};
$scope.PushButton585_click = function() {$App.p1t = $scope.Calculate($App.p1t+"-1",-1);
$scope.SetObjectStyle("TextArea94","font-size",$App.p1t+"pt");};
$scope.PushButton586_click = function() {$App.p1t = $scope.Calculate($App.p1t+"+1",-1);
$scope.SetObjectStyle("TextArea94","font-size",$App.p1t+"pt");};
$scope.TextArea185_change = function() {localStorage.setItem("wain02a",$App.wain02a);};
$scope.TextInput114_change = function() {localStorage.setItem("wain02",$App.wain02);};
$scope.Headline414_click = function() {$scope.ShowObject("clock02","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain02;};
$scope.Headline416_click = function() {$scope.ShowObject("clock03","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain03;};
$scope.Headline418_click = function() {$scope.ShowObject("clock04","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain04;};
$scope.Headline419_click = function() {$scope.ShowObject("clock05","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain05;};
$scope.TextArea186_change = function() {localStorage.setItem("wain03a",$App.wain03a);};
$scope.TextInput115_change = function() {localStorage.setItem("wain03",$App.wain03);};
$scope.TextArea187_change = function() {localStorage.setItem("wain05a",$App.wain05a);};
$scope.TextInput116_change = function() {localStorage.setItem("wain05",$App.wain05);};
$scope.TextArea188_change = function() {localStorage.setItem("wain04a",$App.wain04a);};
$scope.TextInput117_change = function() {localStorage.setItem("wain04",$App.wain04);};
$scope.PushButton587_click = function() {$scope.GotoPage( "Home" );};
$scope.TextArea89_change = function() {localStorage.setItem("wain06a",$App.wain06a);};
$scope.TextInput118_change = function() {localStorage.setItem("wain06",$App.wain06);};
$scope.TextArea189_change = function() {localStorage.setItem("wain08a",$App.wain08a);};
$scope.TextInput119_change = function() {localStorage.setItem("wain08",$App.wain08);};
$scope.TextArea190_change = function() {localStorage.setItem("wain07a",$App.wain07a);};
$scope.TextInput120_change = function() {localStorage.setItem("wain07",$App.wain07);};
$scope.Headline427_click = function() {$scope.ShowObject("clock06","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain06;};
$scope.Headline428_click = function() {$scope.ShowObject("clock07","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock08","none",0);
$App.wain = $App.wain07;};
$scope.Headline429_click = function() {$scope.ShowObject("clock08","none",0);
$scope.HideObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$App.wain = $App.wain08;};
$scope.Headline430_click = function() {$scope.ShowObject("clock01","none",0);
$scope.HideObject("clock02","none",0);
$scope.HideObject("clock03","none",0);
$scope.HideObject("clock04","none",0);
$scope.HideObject("clock05","none",0);
$scope.HideObject("clock06","none",0);
$scope.HideObject("clock07","none",0);
$scope.HideObject("clock08","none",0);};
});
NeoApp.controller("Random_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 64;
$App.NAB.PageID = "Random";
$scope.PushButton540_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea131_change = function() {localStorage.setItem("Rannotes01",$App.Rannotes01);};
$scope.PushButton541_click = function() {neoTalkSpeak($App.Rannotes01, "uk", 1, .9);};
$scope.PushButton542_click = function() {neoTalkCancelSpeech();};
$scope.PushButton546_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);
};
$scope.PushButton80_click = function() {$App.ta131 = $scope.Calculate($App.ta131+"-1",-1);
$scope.SetObjectStyle("TextArea131","font-size",$App.ta131+"pt");};
$scope.PushButton580_click = function() {$App.ta131 = $scope.Calculate($App.ta131+"+1",-1);
$scope.SetObjectStyle("TextArea131","font-size",$App.ta131+"pt");};
$scope.PushButton588_click = function() {$scope.GotoPage( "Random02" );};
$scope.PushButton589_click = function() {$scope.GotoPage( "Random01" );};
$scope.PushButton590_click = function() {$scope.GotoPage( "Random04" );};
$scope.PushButton591_click = function() {$scope.GotoPage( "Random03" );};
$scope.PushButton592_click = function() {$scope.GotoPage( "Random06" );};
$scope.PushButton593_click = function() {$scope.GotoPage( "Random05" );};
$scope.PushButton594_click = function() {$scope.GotoPage( "Random08" );};
$scope.PushButton595_click = function() {$scope.GotoPage( "Random07" );};
$scope.PushButton596_click = function() {$scope.GotoPage( "Random10" );};
$scope.PushButton597_click = function() {$scope.GotoPage( "Random09" );};
$scope.PushButton599_click = function() {$scope.GotoPage( "Random11" );};
$scope.PushButton598_click = function() {$scope.GotoPage( "Random12" );};
$scope.PushButton624_click = function() {$scope.GotoPage( "Random13" );};
$scope.PushButton626_click = function() {$scope.GotoPage( "Random14" );};
$scope.PushButton627_click = function() {$scope.GotoPage( "Random15" );};
$scope.PushButton676_click = function() {$scope.GotoPage( "Random16" );};
$scope.PushButton677_click = function() {$scope.GotoPage( "Random17" );};
$scope.PushButton678_click = function() {$scope.GotoPage( "Random18" );};
$scope.PushButton679_click = function() {$scope.GotoPage( "Random19" );};
$scope.PushButton680_click = function() {$scope.GotoPage( "Random20" );};
$scope.PushButton604_click = function() {$scope.GotoPage( "Random21" );};
$scope.PushButton605_click = function() {$scope.GotoPage( "Random22" );};
$scope.PushButton606_click = function() {$scope.GotoPage( "Random23" );};
$scope.PushButton607_click = function() {$scope.GotoPage( "Random24" );};
$scope.PushButton608_click = function() {$scope.GotoPage( "Random25" );};
$scope.PushButton609_click = function() {$scope.GotoPage( "Random26" );};
$scope.PushButton610_click = function() {$scope.GotoPage( "Random27" );};
$scope.PushButton611_click = function() {$scope.GotoPage( "Random28" );};
$scope.PushButton625_click = function() {$scope.GotoPage( "Random29" );};
$scope.PushButton635_click = function() {$scope.GotoPage( "Random30" );};
$scope.PushButton643_click = function() {$scope.ShowObject("R1","",0);
$scope.ShowObject("R2","",0);
$scope.HideObject("R3","",0);
$scope.HideObject("R4","",0);
$scope.HideObject("stressred","",0);
$scope.ShowObject("stressgreen","",0);};
$scope.PushButton651_click = function() {$scope.ShowObject("R3","",0);
$scope.ShowObject("R4","",0);
$scope.HideObject("R1","",0);
$scope.HideObject("R2","",0);
$scope.ShowObject("stressred","",0);
$scope.HideObject("stressgreen","",0);};
$scope.PushButton539_click = function() {$scope.GotoPage( "Home" );};
$scope.Headline403_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random26","a",26,null);

neoGSheetsLoadCell($App.googleSheet4,"Random27","a",27,null);

neoGSheetsLoadCell($App.googleSheet4,"Random28","a",28,null);

neoGSheetsLoadCell($App.googleSheet4,"Random29","a",29,null);

neoGSheetsLoadCell($App.googleSheet4,"Random30","a",30,null);

neoGSheetsLoadCell($App.googleSheet4,"Random31","a",31,null);

neoGSheetsLoadCell($App.googleSheet4,"Random32","a",32,null);

neoGSheetsLoadCell($App.googleSheet4,"Random33","a",33,null);

neoGSheetsLoadCell($App.googleSheet4,"Random34","a",34,null);

neoGSheetsLoadCell($App.googleSheet4,"Random35","a",35,null);

neoGSheetsLoadCell($App.googleSheet4,"Random36","a",36,null);

neoGSheetsLoadCell($App.googleSheet4,"Random37","a",37,null);

neoGSheetsLoadCell($App.googleSheet4,"Random38","a",38,null);

neoGSheetsLoadCell($App.googleSheet4,"Random39","a",39,null);

neoGSheetsLoadCell($App.googleSheet4,"Random40","a",40,null);

neoGSheetsLoadCell($App.googleSheet4,"Random41","a",41,null);

neoGSheetsLoadCell($App.googleSheet4,"Random42","a",42,null);

neoGSheetsLoadCell($App.googleSheet4,"Random43","a",43,null);

neoGSheetsLoadCell($App.googleSheet4,"Random44","a",44,null);

neoGSheetsLoadCell($App.googleSheet4,"Random45","a",45,null);

neoGSheetsLoadCell($App.googleSheet4,"Random46","a",46,null);

neoGSheetsLoadCell($App.googleSheet4,"Random47","a",47,null);

neoGSheetsLoadCell($App.googleSheet4,"Random48","a",48,null);

neoGSheetsLoadCell($App.googleSheet4,"Random49","a",49,null);

neoGSheetsLoadCell($App.googleSheet4,"Random50","a",50,null);

neoGSheetsLoadCell($App.googleSheet4,"Random51","a",51,null);

neoGSheetsLoadCell($App.googleSheet4,"Random52","a",52,null);

neoGSheetsLoadCell($App.googleSheet4,"Random53","a",53,null);

neoGSheetsLoadCell($App.googleSheet4,"Random54","a",54,null);

neoGSheetsLoadCell($App.googleSheet4,"Random55","a",55,null);

neoGSheetsLoadCell($App.googleSheet4,"Random56","a",56,null);

neoGSheetsLoadCell($App.googleSheet4,"Random57","a",57,null);

neoGSheetsLoadCell($App.googleSheet4,"Random58","a",58,null);

neoGSheetsLoadCell($App.googleSheet4,"Random59","a",59,null);

neoGSheetsLoadCell($App.googleSheet4,"Random60","a",60,null);

neoGSheetsLoadCell($App.googleSheet4,"Random61","a",61,null);

neoGSheetsLoadCell($App.googleSheet4,"Random62","a",62,null);

neoGSheetsLoadCell($App.googleSheet4,"Random63","a",63,null);

neoGSheetsLoadCell($App.googleSheet4,"Random64","a",64,null);

neoGSheetsLoadCell($App.googleSheet4,"Random65","a",65,null);

neoGSheetsLoadCell($App.googleSheet4,"Random66","a",66,null);

neoGSheetsLoadCell($App.googleSheet4,"Random67","a",67,null);

neoGSheetsLoadCell($App.googleSheet4,"Random68","a",68,null);

neoGSheetsLoadCell($App.googleSheet4,"Random69","a",69,null);

neoGSheetsLoadCell($App.googleSheet4,"Random70","a",70,null);

neoGSheetsLoadCell($App.googleSheet4,"Random71","a",71,null);

neoGSheetsLoadCell($App.googleSheet4,"Random72","a",72,null);

neoGSheetsLoadCell($App.googleSheet4,"Random73","a",73,null);

neoGSheetsLoadCell($App.googleSheet4,"Random74","a",74,null);

neoGSheetsLoadCell($App.googleSheet4,"Random75","a",75,null);

neoGSheetsLoadCell($App.googleSheet4,"Random76","a",76,null);

neoGSheetsLoadCell($App.googleSheet4,"Random77","a",77,null);

neoGSheetsLoadCell($App.googleSheet4,"Random78","a",78,null);

neoGSheetsLoadCell($App.googleSheet4,"Random79","a",79,null);

neoGSheetsLoadCell($App.googleSheet4,"Random80","a",80,null);

neoGSheetsLoadCell($App.googleSheet4,"Random81","a",81,null);

neoGSheetsLoadCell($App.googleSheet4,"Random82","a",82,null);

neoGSheetsLoadCell($App.googleSheet4,"Random83","a",83,null);

neoGSheetsLoadCell($App.googleSheet4,"Random84","a",84,null);

neoGSheetsLoadCell($App.googleSheet4,"Random85","a",85,null);

neoGSheetsLoadCell($App.googleSheet4,"Random86","a",86,null);

neoGSheetsLoadCell($App.googleSheet4,"Random87","a",87,null);

neoGSheetsLoadCell($App.googleSheet4,"Random88","a",88,null);

neoGSheetsLoadCell($App.googleSheet4,"Random89","a",89,null);

neoGSheetsLoadCell($App.googleSheet4,"Random90","a",90,null);

neoGSheetsLoadCell($App.googleSheet4,"Random91","a",91,null);

neoGSheetsLoadCell($App.googleSheet4,"Random92","a",92,null);

neoGSheetsLoadCell($App.googleSheet4,"Random93","a",93,null);

neoGSheetsLoadCell($App.googleSheet4,"Random94","a",94,null);

neoGSheetsLoadCell($App.googleSheet4,"Random95","a",95,null);

neoGSheetsLoadCell($App.googleSheet4,"Random96","a",96,null);

neoGSheetsLoadCell($App.googleSheet4,"Random97","a",97,null);

neoGSheetsLoadCell($App.googleSheet4,"Random98","a",98,null);

neoGSheetsLoadCell($App.googleSheet4,"Random99","a",99,null);

neoGSheetsLoadCell($App.googleSheet4,"Random100","a",100,null);

$App.Rannotes01 = localStorage.getItem("Rannotes01");
$App.Random01b = localStorage.getItem("Random01b");
$App.Random02b = localStorage.getItem("Random02b");
$App.Random03b = localStorage.getItem("Random03b");
$App.Random04b = localStorage.getItem("Random04b");
$App.Random05b = localStorage.getItem("Random05b");
$App.Random06b = localStorage.getItem("Random06b");
$App.Random07b = localStorage.getItem("Random07b");
$App.Random08b = localStorage.getItem("Random08b");
$App.Random09b = localStorage.getItem("Random09b");
$App.Random10b = localStorage.getItem("Random10b");
$App.Random11b = localStorage.getItem("Random11b");
$App.Random12b = localStorage.getItem("Random12b");
$App.Random13b = localStorage.getItem("Random13b");
$App.Random14b = localStorage.getItem("Random14b");
$App.Random15b = localStorage.getItem("Random15b");
$App.Random16b = localStorage.getItem("Random16b");
$App.Random17b = localStorage.getItem("Random17b");
$App.Random18b = localStorage.getItem("Random18b");
$App.Random19b = localStorage.getItem("Random19b");
$App.Random20b = localStorage.getItem("Random20b");
$App.Random21b = localStorage.getItem("Random21b");
$App.Random22b = localStorage.getItem("Random22b");
$App.Random32b = localStorage.getItem("Random23b");
$App.Random24b = localStorage.getItem("Random24b");
$App.Random25b = localStorage.getItem("Random25b");
$App.Random26b = localStorage.getItem("Random26b");
$App.Random27b = localStorage.getItem("Random27b");
$App.Random28b = localStorage.getItem("Random28b");
$App.Random29b = localStorage.getItem("Random29b");
$App.Random30b = localStorage.getItem("Random30b");
$App.Random31b = localStorage.getItem("Random31b");
$App.Random32b = localStorage.getItem("Random32b");
$App.Random33b = localStorage.getItem("Random33b");
$App.Random34b = localStorage.getItem("Random34b");
$App.Random35b = localStorage.getItem("Random35b");
$App.Random36b = localStorage.getItem("Random36b");
$App.Random37b = localStorage.getItem("Random37b");
$App.Random38b = localStorage.getItem("Random38b");
$App.Random39b = localStorage.getItem("Random39b");
$App.Random40b = localStorage.getItem("Random40b");
$App.Random41b = localStorage.getItem("Random41b");
$App.Random42b = localStorage.getItem("Random42b");
$App.Random43b = localStorage.getItem("Random43b");
$App.Random44b = localStorage.getItem("Random44b");
$App.Random45b = localStorage.getItem("Random45b");
$App.Random46b = localStorage.getItem("Random46b");
$App.Random47b = localStorage.getItem("Random47b");
$App.Random48b = localStorage.getItem("Random48b");
$App.Random49b = localStorage.getItem("Random49b");
$App.Random50b = localStorage.getItem("Random50b");
$App.Random51b = localStorage.getItem("Random51b");
$App.Random52b = localStorage.getItem("Random52b");
$App.Random53b = localStorage.getItem("Random53b");
$App.Random54b = localStorage.getItem("Random54b");
$App.Random55b = localStorage.getItem("Random55b");
$App.Random56b = localStorage.getItem("Random56b");
$App.Random57b = localStorage.getItem("Random57b");
$App.Random58b = localStorage.getItem("Random58b");
$App.Random59b = localStorage.getItem("Random59b");
$App.Random60b = localStorage.getItem("Random60b");
$App.Random61b = localStorage.getItem("Random61b");
$App.Random62b = localStorage.getItem("Random62b");
$App.Random63b = localStorage.getItem("Random63b");
$App.Random64b = localStorage.getItem("Random64b");
$App.Random65b = localStorage.getItem("Random65b");
$App.Random66b = localStorage.getItem("Random66b");
$App.Random67b = localStorage.getItem("Random67b");
$App.Random68b = localStorage.getItem("Random68b");
$App.Random69b = localStorage.getItem("Random69b");
$App.Random70b = localStorage.getItem("Random70b");
$App.Random71b = localStorage.getItem("Random71b");
$App.Random72b = localStorage.getItem("Random72b");
$App.Random73b = localStorage.getItem("Random73b");
$App.Random74b = localStorage.getItem("Random74b");
$App.Random75b = localStorage.getItem("Random75b");
$App.Random76b = localStorage.getItem("Random76b");
$App.Random77b = localStorage.getItem("Random77b");
$App.Random78b = localStorage.getItem("Random78b");
$App.Random79b = localStorage.getItem("Random79b");
$App.Random80b = localStorage.getItem("Random80b");
$App.Random81b = localStorage.getItem("Random81b");
$App.Random82b = localStorage.getItem("Random82b");
$App.Random83b = localStorage.getItem("Random83b");
$App.Random84b = localStorage.getItem("Random84b");
$App.Random85b = localStorage.getItem("Random85b");
$App.Random86b = localStorage.getItem("Random86b");
$App.Random87b = localStorage.getItem("Random87b");
$App.Random88b = localStorage.getItem("Random88b");
$App.Random89b = localStorage.getItem("Random89b");
$App.Random90b = localStorage.getItem("Random90b");
$App.Random91b = localStorage.getItem("Random91b");
$App.Random92b = localStorage.getItem("Random92b");
$App.Random93b = localStorage.getItem("Random93b");
$App.Random94b = localStorage.getItem("Random94b");
$App.Random95b = localStorage.getItem("Random95b");
$App.Random96b = localStorage.getItem("Random96b");
$App.Random97b = localStorage.getItem("Random97b");
$App.Random98b = localStorage.getItem("Random98b");
$App.Random99b = localStorage.getItem("Random99b");
$App.Random100b = localStorage.getItem("Random100b");};
$scope.PushButton523_click = function() {$App.Loaddb = "Load Pass 1";
neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01c","e",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02b","b",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02c","e",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03b","b",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03c","e",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04b","b",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04c","e",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05b","b",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05c","e",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06b","b",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06c","e",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07b","b",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07c","e",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08b","b",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08c","e",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09b","b",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09c","e",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10b","b",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10c","e",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11b","b",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11c","e",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12b","b",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12c","e",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13b","b",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13c","e",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14b","b",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14c","e",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15b","b",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15c","e",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16b","b",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16c","e",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17b","b",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","e",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18b","b",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18c","e",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19b","b",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19c","e",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20b","b",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20c","e",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21b","b",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21c","e",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22b","b",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22c","e",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23b","b",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23c","e",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24b","b",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24c","e",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25b","b",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25c","e",25,null);

localStorage.setItem("Random01",$App.Random01);
localStorage.setItem("Random01b",$App.Random01b);
localStorage.setItem("Random01c",$App.Random01c);
localStorage.setItem("Random02",$App.Random02);
localStorage.setItem("Random02b",$App.Random02b);
localStorage.setItem("Random02c",$App.Random02c);
localStorage.setItem("Random03",$App.Random03);
localStorage.setItem("Random03b",$App.Random03b);
localStorage.setItem("Random03c",$App.Random03c);
localStorage.setItem("Random04",$App.Random04);
localStorage.setItem("Random04b",$App.Random04b);
localStorage.setItem("Random04c",$App.Random04c);
localStorage.setItem("Random05",$App.Random05);
localStorage.setItem("Random05b",$App.Random05b);
localStorage.setItem("Random05c",$App.Random05c);
localStorage.setItem("Random06",$App.Random06);
localStorage.setItem("Random06b",$App.Random06b);
localStorage.setItem("Random06c",$App.Random06c);
localStorage.setItem("Random07",$App.Random07);
localStorage.setItem("Random07b",$App.Random07b);
localStorage.setItem("Random07c",$App.Random07c);
localStorage.setItem("Random08",$App.Random08);
localStorage.setItem("Random08b",$App.Random08b);
localStorage.setItem("Random08c",$App.Random08c);
localStorage.setItem("Random09",$App.Random09);
localStorage.setItem("Random09b",$App.Random09b);
localStorage.setItem("Random09c",$App.Random09c);
localStorage.setItem("Random10",$App.Random10);
localStorage.setItem("Random10b",$App.Random10b);
localStorage.setItem("Random10c",$App.Random10c);
localStorage.setItem("Random11",$App.Random11);
localStorage.setItem("Random11b",$App.Random11b);
localStorage.setItem("Random11c",$App.Random11c);
localStorage.setItem("Random12",$App.Random12);
localStorage.setItem("Random12b",$App.Random12b);
localStorage.setItem("Random12c",$App.Random12c);
localStorage.setItem("Random13",$App.Random13);
localStorage.setItem("Random13b",$App.Random13b);
localStorage.setItem("Random13c",$App.Random13c);
localStorage.setItem("Random14",$App.Random14);
localStorage.setItem("Random14b",$App.Random14b);
localStorage.setItem("Random14c",$App.Random14c);
localStorage.setItem("Random15",$App.Random15);
localStorage.setItem("Random15b",$App.Random15b);
localStorage.setItem("Random15c",$App.Random15c);
localStorage.setItem("Random16",$App.Random16);
localStorage.setItem("Random16b",$App.Random16b);
localStorage.setItem("Random16c",$App.Random16c);
localStorage.setItem("Random17",$App.Random17);
localStorage.setItem("Random17b",$App.Random17b);
localStorage.setItem("Random17c",$App.Random17c);
localStorage.setItem("Random18",$App.Random18);
localStorage.setItem("Random18b",$App.Random18b);
localStorage.setItem("Random18c",$App.Random18c);
localStorage.setItem("Random19",$App.Random19);
localStorage.setItem("Random19b",$App.Random19b);
localStorage.setItem("Random19c",$App.Random19c);
localStorage.setItem("Random20",$App.Random20);
localStorage.setItem("Random20b",$App.Random20b);
localStorage.setItem("Random20c",$App.Random20c);
localStorage.setItem("Random21",$App.Random21);
localStorage.setItem("Random21b",$App.Random21b);
localStorage.setItem("Random21c",$App.Random21c);
localStorage.setItem("Random22",$App.Random22);
localStorage.setItem("Random22b",$App.Random22b);
localStorage.setItem("Random22c",$App.Random22c);
localStorage.setItem("Random23",$App.Random23);
localStorage.setItem("Random23b",$App.Random23b);
localStorage.setItem("Random23c",$App.Random23c);
localStorage.setItem("Random24",$App.Random24);
localStorage.setItem("Random24b",$App.Random24b);
localStorage.setItem("Random24c",$App.Random24c);
localStorage.setItem("Random25",$App.Random25);
localStorage.setItem("Random25b",$App.Random25b);
localStorage.setItem("Random25c",$App.Random25c);
$App.Loaddb = "Load Pass 2";
neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01c","e",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02b","b",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02c","e",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03b","b",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03c","e",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04b","b",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04c","e",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05b","b",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05c","e",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06b","b",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06c","e",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07b","b",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07c","e",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08b","b",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08c","e",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09b","b",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09c","e",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10b","b",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10c","e",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11b","b",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11c","e",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12b","b",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12c","e",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13b","b",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13c","e",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14b","b",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14c","e",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15b","b",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15c","e",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16b","b",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16c","e",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17b","b",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","e",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18b","b",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18c","e",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19b","b",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19c","e",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20b","b",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20c","e",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21b","b",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21c","e",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22b","b",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22c","e",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23b","b",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23c","e",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24b","b",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24c","e",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25b","b",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25c","e",25,null);

localStorage.setItem("Random01",$App.Random01);
localStorage.setItem("Random01b",$App.Random01b);
localStorage.setItem("Random01c",$App.Random01c);
localStorage.setItem("Random02",$App.Random02);
localStorage.setItem("Random02b",$App.Random02b);
localStorage.setItem("Random02c",$App.Random02c);
localStorage.setItem("Random03",$App.Random03);
localStorage.setItem("Random03b",$App.Random03b);
localStorage.setItem("Random03c",$App.Random03c);
localStorage.setItem("Random04",$App.Random04);
localStorage.setItem("Random04b",$App.Random04b);
localStorage.setItem("Random04c",$App.Random04c);
localStorage.setItem("Random05",$App.Random05);
localStorage.setItem("Random05b",$App.Random05b);
localStorage.setItem("Random05c",$App.Random05c);
localStorage.setItem("Random06",$App.Random06);
localStorage.setItem("Random06b",$App.Random06b);
localStorage.setItem("Random06c",$App.Random06c);
localStorage.setItem("Random07",$App.Random07);
localStorage.setItem("Random07b",$App.Random07b);
localStorage.setItem("Random07c",$App.Random07c);
localStorage.setItem("Random08",$App.Random08);
localStorage.setItem("Random08b",$App.Random08b);
localStorage.setItem("Random08c",$App.Random08c);
localStorage.setItem("Random09",$App.Random09);
localStorage.setItem("Random09b",$App.Random09b);
localStorage.setItem("Random09c",$App.Random09c);
localStorage.setItem("Random10",$App.Random10);
localStorage.setItem("Random10b",$App.Random10b);
localStorage.setItem("Random10c",$App.Random10c);
localStorage.setItem("Random11",$App.Random11);
localStorage.setItem("Random11b",$App.Random11b);
localStorage.setItem("Random11c",$App.Random11c);
localStorage.setItem("Random12",$App.Random12);
localStorage.setItem("Random12b",$App.Random12b);
localStorage.setItem("Random12c",$App.Random12c);
localStorage.setItem("Random13",$App.Random13);
localStorage.setItem("Random13b",$App.Random13b);
localStorage.setItem("Random13c",$App.Random13c);
localStorage.setItem("Random14",$App.Random14);
localStorage.setItem("Random14b",$App.Random14b);
localStorage.setItem("Random14c",$App.Random14c);
localStorage.setItem("Random15",$App.Random15);
localStorage.setItem("Random15b",$App.Random15b);
localStorage.setItem("Random15c",$App.Random15c);
localStorage.setItem("Random16",$App.Random16);
localStorage.setItem("Random16b",$App.Random16b);
localStorage.setItem("Random16c",$App.Random16c);
localStorage.setItem("Random17",$App.Random17);
localStorage.setItem("Random17b",$App.Random17b);
localStorage.setItem("Random17c",$App.Random17c);
localStorage.setItem("Random18",$App.Random18);
localStorage.setItem("Random18b",$App.Random18b);
localStorage.setItem("Random18c",$App.Random18c);
localStorage.setItem("Random19",$App.Random19);
localStorage.setItem("Random19b",$App.Random19b);
localStorage.setItem("Random19c",$App.Random19c);
localStorage.setItem("Random20",$App.Random20);
localStorage.setItem("Random20b",$App.Random20b);
localStorage.setItem("Random20c",$App.Random20c);
localStorage.setItem("Random21",$App.Random21);
localStorage.setItem("Random21b",$App.Random21b);
localStorage.setItem("Random21c",$App.Random21c);
localStorage.setItem("Random22",$App.Random22);
localStorage.setItem("Random22b",$App.Random22b);
localStorage.setItem("Random22c",$App.Random22c);
localStorage.setItem("Random23",$App.Random23);
localStorage.setItem("Random23b",$App.Random23b);
localStorage.setItem("Random23c",$App.Random23c);
localStorage.setItem("Random24",$App.Random24);
localStorage.setItem("Random24b",$App.Random24b);
localStorage.setItem("Random24c",$App.Random24c);
localStorage.setItem("Random25",$App.Random25);
localStorage.setItem("Random25b",$App.Random25b);
localStorage.setItem("Random25c",$App.Random25c);
$App.Loaddb = "Load Pass 3";
neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01c","e",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02b","b",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02c","e",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03b","b",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03c","e",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04b","b",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04c","e",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05b","b",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05c","e",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06b","b",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06c","e",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07b","b",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07c","e",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08b","b",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08c","e",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09b","b",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09c","e",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10b","b",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10c","e",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11b","b",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11c","e",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12b","b",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12c","e",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13b","b",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13c","e",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14b","b",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14c","e",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15b","b",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15c","e",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16b","b",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16c","e",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17b","b",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17","e",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18b","b",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18c","e",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19b","b",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19c","e",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20b","b",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20c","e",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21b","b",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21c","e",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22b","b",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22c","e",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23b","b",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23c","e",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24b","b",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24c","e",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25b","b",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25c","e",25,null);

localStorage.setItem("Random01",$App.Random01);
localStorage.setItem("Random01b",$App.Random01b);
localStorage.setItem("Random01c",$App.Random01c);
localStorage.setItem("Random02",$App.Random02);
localStorage.setItem("Random02b",$App.Random02b);
localStorage.setItem("Random02c",$App.Random02c);
localStorage.setItem("Random03",$App.Random03);
localStorage.setItem("Random03b",$App.Random03b);
localStorage.setItem("Random03c",$App.Random03c);
localStorage.setItem("Random04",$App.Random04);
localStorage.setItem("Random04b",$App.Random04b);
localStorage.setItem("Random04c",$App.Random04c);
localStorage.setItem("Random05",$App.Random05);
localStorage.setItem("Random05b",$App.Random05b);
localStorage.setItem("Random05c",$App.Random05c);
localStorage.setItem("Random06",$App.Random06);
localStorage.setItem("Random06b",$App.Random06b);
localStorage.setItem("Random06c",$App.Random06c);
localStorage.setItem("Random07",$App.Random07);
localStorage.setItem("Random07b",$App.Random07b);
localStorage.setItem("Random07c",$App.Random07c);
localStorage.setItem("Random08",$App.Random08);
localStorage.setItem("Random08b",$App.Random08b);
localStorage.setItem("Random08c",$App.Random08c);
localStorage.setItem("Random09",$App.Random09);
localStorage.setItem("Random09b",$App.Random09b);
localStorage.setItem("Random09c",$App.Random09c);
localStorage.setItem("Random10",$App.Random10);
localStorage.setItem("Random10b",$App.Random10b);
localStorage.setItem("Random10c",$App.Random10c);
localStorage.setItem("Random11",$App.Random11);
localStorage.setItem("Random11b",$App.Random11b);
localStorage.setItem("Random11c",$App.Random11c);
localStorage.setItem("Random12",$App.Random12);
localStorage.setItem("Random12b",$App.Random12b);
localStorage.setItem("Random12c",$App.Random12c);
localStorage.setItem("Random13",$App.Random13);
localStorage.setItem("Random13b",$App.Random13b);
localStorage.setItem("Random13c",$App.Random13c);
localStorage.setItem("Random14",$App.Random14);
localStorage.setItem("Random14b",$App.Random14b);
localStorage.setItem("Random14c",$App.Random14c);
localStorage.setItem("Random15",$App.Random15);
localStorage.setItem("Random15b",$App.Random15b);
localStorage.setItem("Random15c",$App.Random15c);
localStorage.setItem("Random16",$App.Random16);
localStorage.setItem("Random16b",$App.Random16b);
localStorage.setItem("Random16c",$App.Random16c);
localStorage.setItem("Random17",$App.Random17);
localStorage.setItem("Random17b",$App.Random17b);
localStorage.setItem("Random17c",$App.Random17c);
localStorage.setItem("Random18",$App.Random18);
localStorage.setItem("Random18b",$App.Random18b);
localStorage.setItem("Random18c",$App.Random18c);
localStorage.setItem("Random19",$App.Random19);
localStorage.setItem("Random19b",$App.Random19b);
localStorage.setItem("Random19c",$App.Random19c);
localStorage.setItem("Random20",$App.Random20);
localStorage.setItem("Random20b",$App.Random20b);
localStorage.setItem("Random20c",$App.Random20c);
localStorage.setItem("Random21",$App.Random21);
localStorage.setItem("Random21b",$App.Random21b);
localStorage.setItem("Random21c",$App.Random21c);
localStorage.setItem("Random22",$App.Random22);
localStorage.setItem("Random22b",$App.Random22b);
localStorage.setItem("Random22c",$App.Random22c);
localStorage.setItem("Random23",$App.Random23);
localStorage.setItem("Random23b",$App.Random23b);
localStorage.setItem("Random23c",$App.Random23c);
localStorage.setItem("Random24",$App.Random24);
localStorage.setItem("Random24b",$App.Random24b);
localStorage.setItem("Random24c",$App.Random24c);
localStorage.setItem("Random25",$App.Random25);
localStorage.setItem("Random25b",$App.Random25b);
localStorage.setItem("Random25c",$App.Random25c);
$App.Loaddb = "Complete";};
});
NeoApp.controller("Random01_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 65;
$App.NAB.PageID = "Random01";
$scope.PushButton471_click = function() {localStorage.setItem("Random01",$App.Random01);
localStorage.setItem("Random01b",$App.Random01b);
localStorage.setItem("Random01c",$App.Random01c);
$scope.GotoPage( "Home" );};
$scope.PushButton472_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox01_change = function() {localStorage.setItem("Random01b",$App.Random01b);};
$scope.PushButton473_click = function() {neoTalkSpeak($App.Random01b, "uk", 1, .9);};
$scope.PushButton474_click = function() {neoTalkCancelSpeech();};
$scope.PushButton529_click = function() {$App.r1t = $scope.Calculate($App.r1t+"-1",-1);
$scope.SetObjectStyle("ranbox01","font-size",$App.r1t+"pt");};
$scope.PushButton530_click = function() {$App.r1t = $scope.Calculate($App.r1t+"+1",-1);
$scope.SetObjectStyle("ranbox01","font-size",$App.r1t+"pt");};
$scope.PushButton532_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random01","a",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01b","b",1,null);

neoGSheetsLoadCell($App.googleSheet4,"Random01c","e",1,null);
};
$scope.TextArea201_change = function() {localStorage.setItem("Random01c",$App.Random01c);};
$scope.Image110_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline459_click = function() {$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random01;
$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.Random01);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline460_click = function() {$App.goto02 = "Random01";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random01;
$App.love02 = $App.Random01;
localStorage.setItem("love02",$App.Random01);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline467_click = function() {$App.goto03 = "Random01";
localStorage.setItem("goto03",$App.goto03);
$App.H03 = $App.Random01;
$App.love03 = $App.Random01;
localStorage.setItem("love03",$App.Random01);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline470_click = function() {$App.goto04 = "Random01";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random01;
$App.love04 = $App.Random01;
localStorage.setItem("love04",$App.Random01);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline477_click = function() {$App.goto05 = "Random01";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random01;
$App.love05 = $App.Random01;
localStorage.setItem("love05",$App.Random01);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline478_click = function() {$App.goto06 = "Random01";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random01;
$App.love06 = $App.Random01;
localStorage.setItem("love06",$App.Random01);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random02_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 66;
$App.NAB.PageID = "Random02";
$scope.PushButton465_click = function() {localStorage.setItem("Random02b",$App.Random02b);
$scope.GotoPage( "Home" );};
$scope.PushButton467_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox02_change = function() {localStorage.setItem("Random02b",$App.Random02b);};
$scope.PushButton469_click = function() {neoTalkSpeak($App.Random02b, "uk", 1, .9);};
$scope.PushButton470_click = function() {neoTalkCancelSpeech();};
$scope.PushButton527_click = function() {$App.r2t = $scope.Calculate($App.r2t+"-1",-1);
$scope.SetObjectStyle("ranbox02","font-size",$App.r2t+"pt");};
$scope.PushButton528_click = function() {$App.r2t = $scope.Calculate($App.r2t+"+1",-1);
$scope.SetObjectStyle("ranbox02","font-size",$App.r2t+"pt");};
$scope.PushButton531_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random02","a",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02b","b",2,null);

neoGSheetsLoadCell($App.googleSheet4,"Random02c","e",2,null);
};
$scope.TextArea202_change = function() {localStorage.setItem("Random02c",$App.Random02c);};
$scope.Image116_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline462_click = function() {$App.goto01 = "Random02";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random02;
$App.love01 = $App.Random02;
localStorage.setItem("love01",$App.Random02);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline464_click = function() {$App.goto02 = "Random02";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random02;
$App.love02 = $App.Random02;
localStorage.setItem("love02",$App.Random02);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline465_click = function() {$App.goto03 = "Random02";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random02;
$App.love03 = $App.Random02;
localStorage.setItem("love03",$App.Random02);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline466_click = function() {$App.goto04 = "Random02";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random02;
$App.love04 = $App.Random02;
localStorage.setItem("love04",$App.Random02);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline469_click = function() {$App.goto05 = "Random02";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random02;
$App.love05 = $App.Random02;
localStorage.setItem("love05",$App.Random02);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline471_click = function() {$App.goto06 = "Random02";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random02;
$App.love06 = $App.Random02;
localStorage.setItem("love06",$App.Random02);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random03_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 67;
$App.NAB.PageID = "Random03";
$scope.PushButton475_click = function() {localStorage.setItem("Random03b",$App.Random03b);
$scope.GotoPage( "Home" );};
$scope.PushButton476_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox03_change = function() {localStorage.setItem("Random03b",$App.Random03b);};
$scope.PushButton477_click = function() {neoTalkSpeak($App.Random03b, "uk", 1, .9);};
$scope.PushButton478_click = function() {neoTalkCancelSpeech();};
$scope.PushButton533_click = function() {$App.r3t = $scope.Calculate($App.r3t+"-1",-1);
$scope.SetObjectStyle("ranbox03","font-size",$App.r3t+"pt");};
$scope.PushButton534_click = function() {$App.r3t = $scope.Calculate($App.r3t+"+1",-1);
$scope.SetObjectStyle("ranbox03","font-size",$App.r3t+"pt");};
$scope.PushButton535_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random03","a",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03b","b",3,null);

neoGSheetsLoadCell($App.googleSheet4,"Random03c","e",3,null);
};
$scope.TextArea203_change = function() {localStorage.setItem("Random03c",$App.Random03c);};
$scope.Image129_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline475_click = function() {$App.goto01 = "Random03";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random03;
$App.love01 = $App.Random03;
localStorage.setItem("love01",$App.Random03);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline479_click = function() {$App.goto02 = "Random03";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random03;
$App.love02 = $App.Random03;
localStorage.setItem("love02",$App.Random03);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline480_click = function() {$App.goto03 = "Random03";
localStorage.setItem("goto03",$App.goto03);
$App.H03 = $App.Random03;
$App.love03 = $App.Random03;
localStorage.setItem("love03",$App.Random03);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline481_click = function() {$App.goto04 = "Random03";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random03;
$App.love04 = $App.Random03;
localStorage.setItem("love04",$App.Random03);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline482_click = function() {$App.goto05 = "Random03";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random03;
$App.love05 = $App.Random03;
localStorage.setItem("love05",$App.Random03);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline483_click = function() {$App.goto06 = "Random03";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random03;
$App.love06 = $App.Random03;
localStorage.setItem("love06",$App.Random03);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random04_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 68;
$App.NAB.PageID = "Random04";
$scope.PushButton479_click = function() {localStorage.setItem("Random04b",$App.Random04b);
localStorage.setItem("Random04c",$App.Random04c);
$scope.GotoPage( "Home" );};
$scope.PushButton480_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox04_change = function() {localStorage.setItem("Random04b",$App.Random04b);};
$scope.PushButton481_click = function() {neoTalkSpeak($App.Random04b, "uk", 1, .9);};
$scope.PushButton482_click = function() {neoTalkCancelSpeech();};
$scope.PushButton536_click = function() {$App.r4t = $scope.Calculate($App.r4t+"-1",-1);
$scope.SetObjectStyle("ranbox04","font-size",$App.r4t+"pt");};
$scope.PushButton537_click = function() {$App.r4t = $scope.Calculate($App.r4t+"+1",-1);
$scope.SetObjectStyle("ranbox04","font-size",$App.r4t+"pt");};
$scope.PushButton538_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random04","a",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04b","b",4,null);

neoGSheetsLoadCell($App.googleSheet4,"Random04c","e",4,null);
};
$scope.TextArea204_change = function() {localStorage.setItem("Random04c",$App.Random04c);};
$scope.Image136_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline485_click = function() {$App.goto01 = "Random04";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random04;
$App.love01 = $App.Random04;
localStorage.setItem("love01",$App.Random04);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline486_click = function() {$App.goto02 = "Random04";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random04;
$App.love02 = $App.Random04;
localStorage.setItem("love02",$App.Random04);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline487_click = function() {$App.goto03 = "Random04";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random04;
$App.love03 = $App.Random04;
localStorage.setItem("love03",$App.Random04);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline488_click = function() {$App.goto04 = "Random04";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random04;
$App.love04 = $App.Random04;
localStorage.setItem("love04",$App.Random04);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline489_click = function() {$App.goto05 = "Random04";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random04;
$App.love05 = $App.Random04;
localStorage.setItem("love05",$App.Random04);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline490_click = function() {$App.goto06 = "Random04";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random04;
$App.love06 = $App.Random04;
localStorage.setItem("love06",$App.Random04);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random05_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 69;
$App.NAB.PageID = "Random05";
$scope.PushButton483_click = function() {localStorage.setItem("Random05",$App.Random05);
localStorage.setItem("Random05b",$App.Random05b);
localStorage.setItem("Random05c",$App.Random05c);
$scope.GotoPage( "Home" );};
$scope.PushButton484_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox05_change = function() {localStorage.setItem("Random05b",$App.Random05b);};
$scope.PushButton485_click = function() {neoTalkSpeak($App.Random05b, "uk", 1, .9);};
$scope.PushButton486_click = function() {neoTalkCancelSpeech();};
$scope.PushButton488_click = function() {$App.r5t = $scope.Calculate($App.r5t+"-1",-1);
$scope.SetObjectStyle("ranbox05","font-size",$App.r5t+"pt");};
$scope.PushButton489_click = function() {$App.r5t = $scope.Calculate($App.r5t+"+1",-1);
$scope.SetObjectStyle("ranbox05","font-size",$App.r5t+"pt");};
$scope.PushButton490_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random05","a",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05b","b",5,null);

neoGSheetsLoadCell($App.googleSheet4,"Random05c","e",5,null);
};
$scope.TextArea205_change = function() {localStorage.setItem("Random05c",$App.Random05c);};
$scope.Image143_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline492_click = function() {$App.goto01 = "Random05";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random05;
$App.love01 = $App.Random05;
localStorage.setItem("love01",$App.Random05);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline493_click = function() {$App.goto02 = "Random05";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random05;
$App.love02 = $App.Random05;
localStorage.setItem("love02",$App.Random05);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline494_click = function() {$App.goto03 = "Random05";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random05;
$App.love03 = $App.Random05;
localStorage.setItem("love03",$App.Random05);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline495_click = function() {$App.goto04 = "Random05";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random05;
$App.love04 = $App.Random05;
localStorage.setItem("love04",$App.Random05);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline496_click = function() {$App.goto05 = "Random05";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random05;
$App.love05 = $App.Random05;
localStorage.setItem("love05",$App.Random05);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline497_click = function() {$App.goto06 = "Random05";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random05;
$App.love06 = $App.Random05;
localStorage.setItem("love06",$App.Random05);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random06_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 70;
$App.NAB.PageID = "Random06";
$scope.PushButton491_click = function() {localStorage.setItem("Random06",$App.Random06);
localStorage.setItem("Random06b",$App.Random06b);
localStorage.setItem("Random06c",$App.Random06c);
$scope.GotoPage( "Home" );};
$scope.PushButton492_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox06_change = function() {localStorage.setItem("Random06b",$App.Random06b);};
$scope.PushButton493_click = function() {neoTalkSpeak($App.Random06b, "uk", 1, .9);};
$scope.PushButton494_click = function() {neoTalkCancelSpeech();};
$scope.PushButton496_click = function() {$App.r6t = $scope.Calculate($App.r6t+"-1",-1);
$scope.SetObjectStyle("ranbox05","font-size",$App.r6t+"pt");};
$scope.PushButton497_click = function() {$App.r6t = $scope.Calculate($App.r6t+"+1",-1);
$scope.SetObjectStyle("ranbox06","font-size",$App.r6t+"pt");};
$scope.PushButton498_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random06","a",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06b","b",6,null);

neoGSheetsLoadCell($App.googleSheet4,"Random06c","e",6,null);
};
$scope.TextArea206_change = function() {localStorage.setItem("Random06c",$App.Random06c);};
$scope.Image150_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline499_click = function() {$App.goto01 = "Random06";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random06;
$App.love01 = $App.Random06;
localStorage.setItem("love01",$App.Random06);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline500_click = function() {$App.goto02 = "Random06";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random06;
$App.love02 = $App.Random06;
localStorage.setItem("love02",$App.Random06);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline501_click = function() {$App.goto03 = "Random06";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random06;
$App.love03 = $App.Random06;
localStorage.setItem("love03",$App.Random06);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline502_click = function() {$App.goto04 = "Random06";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random06;
$App.love04 = $App.Random06;
localStorage.setItem("love04",$App.Random06);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline503_click = function() {$App.goto05 = "Random06";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random06;
$App.love05 = $App.Random06;
localStorage.setItem("love05",$App.Random06);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline504_click = function() {$App.goto06 = "Random06";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random06;
$App.love06 = $App.Random06;
localStorage.setItem("love06",$App.Random06);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random07_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 71;
$App.NAB.PageID = "Random07";
$scope.PushButton499_click = function() {localStorage.setItem("Random07",$App.Random07);
localStorage.setItem("Random07b",$App.Random07b);
localStorage.setItem("Random07c",$App.Random07c);
$scope.GotoPage( "Home" );};
$scope.PushButton500_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox07_change = function() {localStorage.setItem("Random07b",$App.Random07b);};
$scope.PushButton501_click = function() {neoTalkSpeak($App.Random07b, "uk", 1, .9);};
$scope.PushButton502_click = function() {neoTalkCancelSpeech();};
$scope.PushButton504_click = function() {$App.r7t = $scope.Calculate($App.r7t+"-1",-1);
$scope.SetObjectStyle("ranbox07","font-size",$App.r7t+"pt");};
$scope.PushButton505_click = function() {$App.r4t = $scope.Calculate($App.r4t+"+1",-1);
$scope.SetObjectStyle("ranbox04","font-size",$App.r4t+"pt");};
$scope.PushButton506_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random07","a",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07b","b",7,null);

neoGSheetsLoadCell($App.googleSheet4,"Random07c","e",7,null);
};
$scope.TextArea207_change = function() {localStorage.setItem("Random07c",$App.Random07c);};
$scope.Image157_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline506_click = function() {$App.goto01 = "Random07";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random07;
$App.love01 = $App.Random07;
localStorage.setItem("love01",$App.Random07);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline507_click = function() {$App.goto02 = "Random07";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random07;
$App.love02 = $App.Random07;
localStorage.setItem("love02",$App.Random07);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline508_click = function() {$App.goto03 = "Random07";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random07;
$App.love03 = $App.Random07;
localStorage.setItem("love03",$App.Random07);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline509_click = function() {$App.goto04 = "Random07";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random07;
$App.love04 = $App.Random07;
localStorage.setItem("love04",$App.Random07);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline510_click = function() {$App.goto05 = "Random07";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random07;
$App.love05 = $App.Random07;
localStorage.setItem("love05",$App.Random07);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline511_click = function() {$App.goto06 = "Random07";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random07;
$App.love06 = $App.Random07;
localStorage.setItem("love06",$App.Random07);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random08_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 72;
$App.NAB.PageID = "Random08";
$scope.PushButton507_click = function() {localStorage.setItem("Random08",$App.Random08);
localStorage.setItem("Random08b",$App.Random08b);
localStorage.setItem("Random08c",$App.Random08c);
$scope.GotoPage( "Home" );};
$scope.PushButton508_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox08_change = function() {localStorage.setItem("Random08b",$App.Random08b);};
$scope.PushButton509_click = function() {neoTalkSpeak($App.Random08b, "uk", 1, .9);};
$scope.PushButton510_click = function() {neoTalkCancelSpeech();};
$scope.PushButton512_click = function() {$App.r8t = $scope.Calculate($App.r8t+"-1",-1);
$scope.SetObjectStyle("ranbox08","font-size",$App.r8t+"pt");};
$scope.PushButton513_click = function() {$App.r8t = $scope.Calculate($App.r8t+"+1",-1);
$scope.SetObjectStyle("ranbox08","font-size",$App.r8t+"pt");};
$scope.PushButton514_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random08","a",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08b","b",8,null);

neoGSheetsLoadCell($App.googleSheet4,"Random08c","e",8,null);
};
$scope.TextArea208_change = function() {localStorage.setItem("Random08c",$App.Random08c);};
$scope.Image164_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline513_click = function() {$App.goto01 = "Random08";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random08;
$App.love01 = $App.Random08;
localStorage.setItem("love01",$App.Random08);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline514_click = function() {$App.goto02 = "Random08";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random08;
$App.love02 = $App.Random08;
localStorage.setItem("love02",$App.Random08);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline515_click = function() {$App.goto03 = "Random08";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random08;
$App.love03 = $App.Random08;
localStorage.setItem("love03",$App.Random08);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline516_click = function() {$App.goto04 = "Random08";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random08;
$App.love04 = $App.Random08;
localStorage.setItem("love04",$App.Random08);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline517_click = function() {$App.goto05 = "Random08";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random08;
$App.love05 = $App.Random08;
localStorage.setItem("love05",$App.Random08);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline518_click = function() {$App.goto06 = "Random08";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random08;
$App.love06 = $App.Random08;
localStorage.setItem("love06",$App.Random08);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random09_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 73;
$App.NAB.PageID = "Random09";
$scope.PushButton515_click = function() {localStorage.setItem("Random09",$App.Random09);
localStorage.setItem("Random09b",$App.Random09b);
localStorage.setItem("Random09c",$App.Random09c);
$scope.GotoPage( "Home" );};
$scope.PushButton520_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox09_change = function() {localStorage.setItem("Random09b",$App.Random09b);};
$scope.PushButton521_click = function() {neoTalkSpeak($App.Random04b, "uk", 1, .9);};
$scope.PushButton522_click = function() {neoTalkCancelSpeech();};
$scope.PushButton524_click = function() {$App.r4t = $scope.Calculate($App.r4t+"-1",-1);
$scope.SetObjectStyle("ranbox04","font-size",$App.r4t+"pt");};
$scope.PushButton525_click = function() {$App.r4t = $scope.Calculate($App.r4t+"+1",-1);
$scope.SetObjectStyle("ranbox04","font-size",$App.r4t+"pt");};
$scope.PushButton526_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random09","a",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09b","b",9,null);

neoGSheetsLoadCell($App.googleSheet4,"Random09c","e",9,null);
};
$scope.TextArea209_change = function() {localStorage.setItem("Random09c",$App.Random09c);};
$scope.Image171_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline520_click = function() {$App.goto01 = "Random09";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random09;
$App.love01 = $App.Random09;
localStorage.setItem("love01",$App.Random09);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline521_click = function() {$App.goto02 = "Random09";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random09;
$App.love02 = $App.Random09;
localStorage.setItem("love02",$App.Random09);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline522_click = function() {$App.goto03 = "Random09";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random09;
$App.love03 = $App.Random09;
localStorage.setItem("love03",$App.Random09);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline523_click = function() {$App.goto04 = "Random09";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random09;
$App.love04 = $App.Random09;
localStorage.setItem("love04",$App.Random09);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline524_click = function() {$App.goto05 = "Random09";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random09;
$App.love05 = $App.Random09;
localStorage.setItem("love05",$App.Random09);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline525_click = function() {$App.goto06 = "Random09";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random09;
$App.love06 = $App.Random09;
localStorage.setItem("love06",$App.Random09);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random10_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 74;
$App.NAB.PageID = "Random10";
$scope.PushButton543_click = function() {localStorage.setItem("Random10",$App.Random10);
localStorage.setItem("Random10b",$App.Random10b);
localStorage.setItem("Random10c",$App.Random10c);
$scope.GotoPage( "Home" );};
$scope.PushButton547_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox10_change = function() {localStorage.setItem("Random10b",$App.Random10b);};
$scope.PushButton548_click = function() {neoTalkSpeak($App.Random10b, "uk", 1, .9);};
$scope.PushButton549_click = function() {neoTalkCancelSpeech();};
$scope.PushButton551_click = function() {$App.r10t = $scope.Calculate($App.r10t+"-1",-1);
$scope.SetObjectStyle("ranbox10","font-size",$App.r10t+"pt");};
$scope.PushButton552_click = function() {$App.r10t = $scope.Calculate($App.r10t+"+1",-1);
$scope.SetObjectStyle("ranbox10","font-size",$App.r10t+"pt");};
$scope.PushButton553_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random10","a",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10b","b",10,null);

neoGSheetsLoadCell($App.googleSheet4,"Random10c","e",10,null);
};
$scope.TextArea210_change = function() {localStorage.setItem("Random10c",$App.Random19c);};
$scope.Image178_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline527_click = function() {$App.goto01 = "Random10";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random10;
$App.love01 = $App.Random10;
localStorage.setItem("love01",$App.Random10);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline528_click = function() {$App.goto02 = "Random10";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random10;
$App.love02 = $App.Random10;
localStorage.setItem("love02",$App.Random10);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline529_click = function() {$App.goto03 = "Random10";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random10;
$App.love03 = $App.Random10;
localStorage.setItem("love03",$App.Random10);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline530_click = function() {$App.goto04 = "Random10";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random10;
$App.love04 = $App.Random10;
localStorage.setItem("love04",$App.Random10);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline531_click = function() {$App.goto05 = "Random10";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random10;
$App.love05 = $App.Random10;
localStorage.setItem("love05",$App.Random10);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline532_click = function() {$App.goto06 = "Random10";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random10;
$App.love06 = $App.Random10;
localStorage.setItem("love06",$App.Random10);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random11_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 75;
$App.NAB.PageID = "Random11";
$scope.PushButton554_click = function() {localStorage.setItem("Random11",$App.Random11);
localStorage.setItem("Random11b",$App.Random11b);
localStorage.setItem("Random11c",$App.Random11c);
$scope.GotoPage( "Home" );};
$scope.PushButton555_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox11_change = function() {localStorage.setItem("Random11b",$App.Random11b);};
$scope.PushButton556_click = function() {neoTalkSpeak($App.Random11b, "uk", 1, .9);};
$scope.PushButton557_click = function() {neoTalkCancelSpeech();};
$scope.PushButton559_click = function() {$App.r11t = $scope.Calculate($App.r11t+"-1",-1);
$scope.SetObjectStyle("ranbox11","font-size",$App.r11t+"pt");};
$scope.PushButton560_click = function() {$App.r11t = $scope.Calculate($App.r11t+"+1",-1);
$scope.SetObjectStyle("ranbox11","font-size",$App.r11t+"pt");};
$scope.PushButton561_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random11","a",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11b","b",11,null);

neoGSheetsLoadCell($App.googleSheet4,"Random11c","e",11,null);
};
$scope.TextArea211_change = function() {localStorage.setItem("Random11c",$App.Random11c);};
$scope.Image185_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline534_click = function() {$App.goto01 = "Random11";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random11;
$App.love01 = $App.Random11;
localStorage.setItem("love01",$App.Random11);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline535_click = function() {$App.goto02 = "Random11";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random11;
$App.love02 = $App.Random11;
localStorage.setItem("love02",$App.Random11);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline536_click = function() {$App.goto03 = "Random11";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random11;
$App.love03 = $App.Random11;
localStorage.setItem("love03",$App.Random11);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline537_click = function() {$App.goto04 = "Random11";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random11;
$App.love04 = $App.Random11;
localStorage.setItem("love04",$App.Random11);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline538_click = function() {$App.goto05 = "Random11";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random11;
$App.love05 = $App.Random11;
localStorage.setItem("love05",$App.Random11);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline539_click = function() {$App.goto06 = "Random11";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random11;
$App.love06 = $App.Random11;
localStorage.setItem("love06",$App.Random11);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random12_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 76;
$App.NAB.PageID = "Random12";
$scope.PushButton562_click = function() {localStorage.setItem("Random12",$App.Random12);
localStorage.setItem("Random12b",$App.Random12b);
localStorage.setItem("Random12c",$App.Random12c);
$scope.GotoPage( "Home" );};
$scope.PushButton563_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.ranbox12_change = function() {localStorage.setItem("Random12b",$App.Random12b);};
$scope.PushButton564_click = function() {neoTalkSpeak($App.Random12b, "uk", 1, .9);};
$scope.PushButton565_click = function() {neoTalkCancelSpeech();};
$scope.PushButton567_click = function() {$App.r12t = $scope.Calculate($App.r12t+"-1",-1);
$scope.SetObjectStyle("ranbox12","font-size",$App.r12t+"pt");};
$scope.PushButton568_click = function() {$App.r12t = $scope.Calculate($App.r12t+"+1",-1);
$scope.SetObjectStyle("ranbox12","font-size",$App.r12t+"pt");};
$scope.PushButton569_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random12","a",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12b","b",12,null);

neoGSheetsLoadCell($App.googleSheet4,"Random12c","e",12,null);
};
$scope.TextArea212_change = function() {localStorage.setItem("Random12c",$App.Random12c);};
$scope.Image192_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline541_click = function() {$App.goto01 = "Random12";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random12;
$App.love01 = $App.Random12;
localStorage.setItem("love01",$App.Random12);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline542_click = function() {$App.goto02 = "Random12";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random12;
$App.love02 = $App.Random12;
localStorage.setItem("love02",$App.Random12);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline543_click = function() {$App.goto03 = "Random12";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random12;
$App.love03 = $App.Random12;
localStorage.setItem("love03",$App.Random12);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline545_click = function() {$App.goto04 = "Random12";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random12;
$App.love04 = $App.Random12;
localStorage.setItem("love04",$App.Random12);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline546_click = function() {$App.goto05 = "Random12";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random12;
$App.love05 = $App.Random12;
localStorage.setItem("love05",$App.Random12);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline547_click = function() {$App.goto06 = "Random12";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random12;
$App.love06 = $App.Random12;
localStorage.setItem("love06",$App.Random12);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random13_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 77;
$App.NAB.PageID = "Random13";
$scope.PushButton617_click = function() {localStorage.setItem("Random13",$App.Random13);
localStorage.setItem("Random13b",$App.Random13b);
localStorage.setItem("Random13c",$App.Random13c);
$scope.GotoPage( "Home" );};
$scope.PushButton618_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea191_change = function() {localStorage.setItem("Random13b",$App.Random13b);};
$scope.PushButton619_click = function() {neoTalkSpeak($App.Random13b, "uk", 1, .9);};
$scope.PushButton620_click = function() {neoTalkCancelSpeech();};
$scope.PushButton621_click = function() {$App.r13t = $scope.Calculate($App.r13t+"-1",-1);
$scope.SetObjectStyle("ranbox13","font-size",$App.r13t+"pt");};
$scope.PushButton622_click = function() {$App.r12t = $scope.Calculate($App.r13t+"+1",-1);
$scope.SetObjectStyle("ranbox13","font-size",$App.r13t+"pt");};
$scope.PushButton623_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random13","a",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13b","b",13,null);

neoGSheetsLoadCell($App.googleSheet4,"Random13c","e",13,null);
};
$scope.TextArea213_change = function() {localStorage.setItem("Random13c",$App.Random13c);};
$scope.Image276_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline626_click = function() {$App.goto01 = "Random13";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random13;
$App.love01 = $App.Random13;
localStorage.setItem("love01",$App.Random13);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline627_click = function() {$App.goto02 = "Random13";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random13;
$App.love02 = $App.Random13;
localStorage.setItem("love02",$App.Random13);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline628_click = function() {$App.goto03 = "Random13";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random13;
$App.love03 = $App.Random13;
localStorage.setItem("love03",$App.Random13);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline629_click = function() {$App.goto04 = "Random13";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random13;
$App.love04 = $App.Random13;
localStorage.setItem("love04",$App.Random13);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline630_click = function() {$App.goto05 = "Random13";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random13;
$App.love05 = $App.Random13;
localStorage.setItem("love05",$App.Random13);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline631_click = function() {$App.goto06 = "Random13";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random13;
$App.love06 = $App.Random13;
localStorage.setItem("love06",$App.Random13);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random14_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 78;
$App.NAB.PageID = "Random14";
$scope.PushButton628_click = function() {localStorage.setItem("Random14",$App.Random14);
localStorage.setItem("Random14b",$App.Random14b);
localStorage.setItem("Random14c",$App.Random14c);
$scope.GotoPage( "Home" );};
$scope.PushButton629_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea192_change = function() {localStorage.setItem("Random14b",$App.Random14b);};
$scope.PushButton630_click = function() {neoTalkSpeak($App.Random13b, "uk", 1, .9);};
$scope.PushButton631_click = function() {neoTalkCancelSpeech();};
$scope.PushButton632_click = function() {$App.r14t = $scope.Calculate($App.r14t+"-1",-1);
$scope.SetObjectStyle("ranbox14","font-size",$App.r14t+"pt");};
$scope.PushButton633_click = function() {$App.r14t = $scope.Calculate($App.r14t+"+1",-1);
$scope.SetObjectStyle("ranbox14","font-size",$App.r14t+"pt");};
$scope.PushButton634_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random14","a",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14b","b",14,null);

neoGSheetsLoadCell($App.googleSheet4,"Random14c","e",14,null);
};
$scope.TextArea214_change = function() {localStorage.setItem("Random14c",$App.Random14c);};
$scope.Image269_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline619_click = function() {$App.goto01 = "Random14";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random14;
$App.love01 = $App.Random14;
localStorage.setItem("love01",$App.Random14);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline620_click = function() {$App.goto02 = "Random14";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random14;
$App.love02 = $App.Random14;
localStorage.setItem("love02",$App.Random14);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline621_click = function() {$App.goto03 = "Random14";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random14;
$App.love03 = $App.Random14;
localStorage.setItem("love03",$App.Random14);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline622_click = function() {$App.goto04 = "Random14";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random14;
$App.love04 = $App.Random14;
localStorage.setItem("love04",$App.Random14);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline623_click = function() {$App.goto05 = "Random14";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random14;
$App.love05 = $App.Random14;
localStorage.setItem("love05",$App.Random14);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline624_click = function() {$App.goto06 = "Random14";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random14;
$App.love06 = $App.Random14;
localStorage.setItem("love06",$App.Random14);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random15_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 79;
$App.NAB.PageID = "Random15";
$scope.PushButton636_click = function() {localStorage.setItem("Random15",$App.Random15);
localStorage.setItem("Random15b",$App.Random15b);
localStorage.setItem("Random15c",$App.Random15c);
$scope.GotoPage( "Home" );};
$scope.PushButton637_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea193_change = function() {localStorage.setItem("Random15b",$App.Random15b);};
$scope.PushButton638_click = function() {neoTalkSpeak($App.Random15b, "uk", 1, .9);};
$scope.PushButton639_click = function() {neoTalkCancelSpeech();};
$scope.PushButton640_click = function() {$App.r15t = $scope.Calculate($App.r15t+"-1",-1);
$scope.SetObjectStyle("ranbox15","font-size",$App.r15t+"pt");};
$scope.PushButton641_click = function() {$App.r15t = $scope.Calculate($App.r15t+"+1",-1);
$scope.SetObjectStyle("ranbox15","font-size",$App.r15t+"pt");};
$scope.PushButton642_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random15","a",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15b","b",15,null);

neoGSheetsLoadCell($App.googleSheet4,"Random15c","e",15,null);
};
$scope.TextArea215_change = function() {localStorage.setItem("Random15c",$App.Random15c);};
$scope.Image262_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline612_click = function() {$App.goto01 = "Random15";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random15;
$App.love01 = $App.Random15;
localStorage.setItem("love01",$App.Random15);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline613_click = function() {$App.goto02 = "Random15";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random15;
$App.love02 = $App.Random15;
localStorage.setItem("love02",$App.Random15);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline614_click = function() {$App.goto03 = "Random15";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random15;
$App.love03 = $App.Random15;
localStorage.setItem("love03",$App.Random15);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline615_click = function() {$App.goto04 = "Random15";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random15;
$App.love04 = $App.Random15;
localStorage.setItem("love04",$App.Random15);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline616_click = function() {$App.goto05 = "Random15";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random15;
$App.love05 = $App.Random15;
localStorage.setItem("love05",$App.Random15);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline617_click = function() {$App.goto06 = "Random15";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random15;
$App.love06 = $App.Random15;
localStorage.setItem("love06",$App.Random15);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random16_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 80;
$App.NAB.PageID = "Random16";
$scope.PushButton644_click = function() {localStorage.setItem("Random16",$App.Random16);
localStorage.setItem("Random16b",$App.Random16b);
localStorage.setItem("Random16c",$App.Random16c);
$scope.GotoPage( "Home" );};
$scope.PushButton645_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea194_change = function() {localStorage.setItem("Random16b",$App.Random16b);};
$scope.PushButton646_click = function() {neoTalkSpeak($App.Random16b, "uk", 1, .9);};
$scope.PushButton647_click = function() {neoTalkCancelSpeech();};
$scope.PushButton648_click = function() {$App.r16t = $scope.Calculate($App.r16t+"-1",-1);
$scope.SetObjectStyle("ranbox16","font-size",$App.r16t+"pt");};
$scope.PushButton649_click = function() {$App.r16t = $scope.Calculate($App.r16t+"+1",-1);
$scope.SetObjectStyle("ranbox16","font-size",$App.r16t+"pt");};
$scope.PushButton650_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random16","a",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16b","b",16,null);

neoGSheetsLoadCell($App.googleSheet4,"Random16c","e",16,null);
};
$scope.TextArea216_change = function() {localStorage.setItem("Random16c",$App.Random16c);};
$scope.Image255_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline605_click = function() {$App.goto01 = "Random16";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random16;
$App.love01 = $App.Random16;
localStorage.setItem("love01",$App.Random16);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline606_click = function() {$App.goto02 = "Random16";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random16;
$App.love02 = $App.Random16;
localStorage.setItem("love02",$App.Random16);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline607_click = function() {$App.goto03 = "Random16";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random16;
$App.love03 = $App.Random16;
localStorage.setItem("love03",$App.Random16);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline608_click = function() {$App.goto04 = "Random16";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random16;
$App.love04 = $App.Random16;
localStorage.setItem("love04",$App.Random16);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline609_click = function() {$App.goto05 = "Random16";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random16;
$App.love05 = $App.Random16;
localStorage.setItem("love05",$App.Random16);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline610_click = function() {$App.goto06 = "Random16";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random16;
$App.love06 = $App.Random16;
localStorage.setItem("love06",$App.Random16);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random17_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 81;
$App.NAB.PageID = "Random17";
$scope.PushButton652_click = function() {localStorage.setItem("Random17",$App.Random17);
localStorage.setItem("Random17b",$App.Random17b);
localStorage.setItem("Random17c",$App.Random17c);
$scope.GotoPage( "Home" );};
$scope.PushButton653_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea195_change = function() {localStorage.setItem("Random17b",$App.Random17b);};
$scope.PushButton654_click = function() {neoTalkSpeak($App.Random17b, "uk", 1, .9);};
$scope.PushButton655_click = function() {neoTalkCancelSpeech();};
$scope.PushButton656_click = function() {$App.r17t = $scope.Calculate($App.r17t+"-1",-1);
$scope.SetObjectStyle("ranbox17","font-size",$App.r17t+"pt");};
$scope.PushButton657_click = function() {$App.r17t = $scope.Calculate($App.r17t+"+1",-1);
$scope.SetObjectStyle("ranbox17","font-size",$App.r17t+"pt");};
$scope.PushButton658_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random17","a",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17b","b",17,null);

neoGSheetsLoadCell($App.googleSheet4,"Random17c","e",17,null);
};
$scope.TextArea217_change = function() {localStorage.setItem("Random17c",$App.Random17c);};
$scope.Image248_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline598_click = function() {$App.goto01 = "Random17";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random17;
$App.love01 = $App.Random17;
localStorage.setItem("love01",$App.Random17);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline599_click = function() {$App.goto02 = "Random17";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random17;
$App.love02 = $App.Random17;
localStorage.setItem("love02",$App.Random17);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline600_click = function() {$App.goto03 = "Random17";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random17;
$App.love03 = $App.Random17;
localStorage.setItem("love03",$App.Random17);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline601_click = function() {$App.goto04 = "Random17";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random17;
$App.love04 = $App.Random17;
localStorage.setItem("love04",$App.Random17);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline602_click = function() {$App.goto05 = "Random17";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random17;
$App.love05 = $App.Random17;
localStorage.setItem("love05",$App.Random17);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline603_click = function() {$App.goto06 = "Random17";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random17;
$App.love06 = $App.Random17;
localStorage.setItem("love06",$App.Random17);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random18_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 82;
$App.NAB.PageID = "Random18";
$scope.PushButton660_click = function() {localStorage.setItem("Random18",$App.Random18);
localStorage.setItem("Random18b",$App.Random18b);
localStorage.setItem("Random18c",$App.Random18c);
$scope.GotoPage( "Home" );};
$scope.PushButton661_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea196_change = function() {localStorage.setItem("Random18b",$App.Random18b);};
$scope.PushButton662_click = function() {neoTalkSpeak($App.Random18b, "uk", 1, .9);};
$scope.PushButton663_click = function() {neoTalkCancelSpeech();};
$scope.PushButton664_click = function() {$App.r18t = $scope.Calculate($App.r18t+"-1",-1);
$scope.SetObjectStyle("ranbox18","font-size",$App.r18t+"pt");};
$scope.PushButton665_click = function() {$App.r18t = $scope.Calculate($App.r18t+"+1",-1);
$scope.SetObjectStyle("ranbox18","font-size",$App.r18t+"pt");};
$scope.PushButton666_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random18","a",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18b","b",18,null);

neoGSheetsLoadCell($App.googleSheet4,"Random18c","e",18,null);
};
$scope.TextArea218_change = function() {localStorage.setItem("Random05c",$App.Random05c);};
$scope.Image241_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline591_click = function() {$App.goto01 = "Random18";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random18;
$App.love01 = $App.Random18;
localStorage.setItem("love01",$App.Random18);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline592_click = function() {$App.goto02 = "Random18";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random18;
$App.love02 = $App.Random18;
localStorage.setItem("love02",$App.Random18);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline593_click = function() {$App.goto03 = "Random18";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random18;
$App.love03 = $App.Random18;
localStorage.setItem("love03",$App.Random18);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline594_click = function() {$App.goto04 = "Random18";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random18;
$App.love04 = $App.Random18;
localStorage.setItem("love04",$App.Random18);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline595_click = function() {$App.goto05 = "Random18";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random18;
$App.love05 = $App.Random18;
localStorage.setItem("love05",$App.Random18);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline596_click = function() {$App.goto06 = "Random18";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random18;
$App.love06 = $App.Random18;
localStorage.setItem("love06",$App.Random18);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random19_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 83;
$App.NAB.PageID = "Random19";
$scope.PushButton668_click = function() {localStorage.setItem("Random19",$App.Random19);
localStorage.setItem("Random19b",$App.Random19b);
localStorage.setItem("Random19c",$App.Random19c);
$scope.GotoPage( "Home" );};
$scope.PushButton669_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea197_change = function() {localStorage.setItem("Random19b",$App.Random19b);};
$scope.PushButton670_click = function() {neoTalkSpeak($App.Random19b, "uk", 1, .9);};
$scope.PushButton671_click = function() {neoTalkCancelSpeech();};
$scope.PushButton672_click = function() {$App.r19t = $scope.Calculate($App.r19t+"-1",-1);
$scope.SetObjectStyle("ranbox19","font-size",$App.r19t+"pt");};
$scope.PushButton673_click = function() {$App.r19t = $scope.Calculate($App.r19t+"+1",-1);
$scope.SetObjectStyle("ranbox19","font-size",$App.r19t+"pt");};
$scope.PushButton674_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random19","a",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19b","b",19,null);

neoGSheetsLoadCell($App.googleSheet4,"Random19c","e",19,null);
};
$scope.TextArea219_change = function() {localStorage.setItem("Random19c",$App.Random19c);};
$scope.Image234_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline584_click = function() {$App.goto01 = "Random19";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random19;
$App.love01 = $App.Random19;
localStorage.setItem("love01",$App.Random19);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline585_click = function() {$App.goto02 = "Random19";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random19;
$App.love02 = $App.Random19;
localStorage.setItem("love02",$App.Random19);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline586_click = function() {$App.goto03 = "Random19";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random19;
$App.love03 = $App.Random19;
localStorage.setItem("love03",$App.Random19);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline587_click = function() {$App.goto04 = "Random19";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random19;
$App.love04 = $App.Random19;
localStorage.setItem("love04",$App.Random19);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline588_click = function() {$App.goto05 = "Random19";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random19;
$App.love05 = $App.Random19;
localStorage.setItem("love05",$App.Random19);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline589_click = function() {$App.goto06 = "Random19";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random19;
$App.love06 = $App.Random19;
localStorage.setItem("love06",$App.Random19);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random20_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 84;
$App.NAB.PageID = "Random20";
$scope.PushButton681_click = function() {localStorage.setItem("Random20b",$App.Random20b);
localStorage.setItem("Random20c",$App.Random20c);
localStorage.setItem("Random20",$App.Random20);
$scope.GotoPage( "Home" );};
$scope.PushButton682_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea198_change = function() {localStorage.setItem("Random20b",$App.Random20b);};
$scope.PushButton683_click = function() {neoTalkSpeak($App.Random20b, "uk", 1, .9);};
$scope.PushButton684_click = function() {neoTalkCancelSpeech();};
$scope.PushButton685_click = function() {$App.r20t = $scope.Calculate($App.r20t+"-1",-1);
$scope.SetObjectStyle("ranbox20","font-size",$App.r20t+"pt");};
$scope.PushButton686_click = function() {$App.r20t = $scope.Calculate($App.r20t+"+1",-1);
$scope.SetObjectStyle("ranbox20","font-size",$App.r20t+"pt");};
$scope.PushButton687_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random20","a",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20b","b",20,null);

neoGSheetsLoadCell($App.googleSheet4,"Random20c","e",20,null);
};
$scope.TextArea220_change = function() {localStorage.setItem("Random20c",$App.Random20c);};
$scope.Image227_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline577_click = function() {$App.goto01 = "Random20";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random20;
$App.love01 = $App.Random20;
localStorage.setItem("love01",$App.Random20);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline578_click = function() {$App.goto02 = "Random20";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random20;
$App.love02 = $App.Random20;
localStorage.setItem("love02",$App.Random20);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline579_click = function() {$App.goto03 = "Random20";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random20;
$App.love03 = $App.Random20;
localStorage.setItem("love03",$App.Random20);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline580_click = function() {$App.goto04 = "Random20";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random20;
$App.love04 = $App.Random20;
localStorage.setItem("love04",$App.Random20);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline581_click = function() {$App.goto05 = "Random20";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random20;
$App.love05 = $App.Random20;
localStorage.setItem("love05",$App.Random20);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline582_click = function() {$App.goto06 = "Random20";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random20;
$App.love06 = $App.Random20;
localStorage.setItem("love06",$App.Random20);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random21_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 85;
$App.NAB.PageID = "Random21";
$scope.PushButton487_click = function() {localStorage.setItem("Random21b",$App.Random21b);
localStorage.setItem("Random21c",$App.Random21c);
localStorage.setItem("Random21",$App.Random21);
$scope.GotoPage( "Home" );};
$scope.PushButton495_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea199_change = function() {localStorage.setItem("Random21b",$App.Random21b);};
$scope.PushButton503_click = function() {neoTalkSpeak($App.Random21b, "uk", 1, .9);};
$scope.PushButton511_click = function() {neoTalkCancelSpeech();};
$scope.PushButton516_click = function() {$App.r21t = $scope.Calculate($App.r21t+"-1",-1);
$scope.SetObjectStyle("ranbox21","font-size",$App.r21t+"pt");};
$scope.PushButton517_click = function() {$App.r21t = $scope.Calculate($App.r21t+"+1",-1);
$scope.SetObjectStyle("ranbox21","font-size",$App.r21t+"pt");};
$scope.PushButton518_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random21","a",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21b","b",21,null);

neoGSheetsLoadCell($App.googleSheet4,"Random21c","e",21,null);
};
$scope.TextArea221_change = function() {localStorage.setItem("Random05c",$App.Random05c);};
$scope.Image220_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline570_click = function() {$App.goto01 = "Random21";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random21;
$App.love01 = $App.Random21;
localStorage.setItem("love01",$App.Random21);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline571_click = function() {$App.goto02 = "Random21";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random21;
$App.love02 = $App.Random21;
localStorage.setItem("love02",$App.Random21);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline572_click = function() {$App.goto03 = "Random21";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random21;
$App.love03 = $App.Random21;
localStorage.setItem("love03",$App.Random21);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline573_click = function() {$App.goto04 = "Random21";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random21;
$App.love04 = $App.Random21;
localStorage.setItem("love04",$App.Random21);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline574_click = function() {$App.goto05 = "Random21";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random21;
$App.love05 = $App.Random21;
localStorage.setItem("love05",$App.Random21);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline575_click = function() {$App.goto06 = "Random21";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random21;
$App.love06 = $App.Random21;
localStorage.setItem("love06",$App.Random21);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random22_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 86;
$App.NAB.PageID = "Random22";
$scope.PushButton519_click = function() {localStorage.setItem("Random22b",$App.Random22b);
localStorage.setItem("Random22c",$App.Random22c);
localStorage.setItem("Random22",$App.Random22);
$scope.GotoPage( "Home" );};
$scope.PushButton558_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea200_change = function() {localStorage.setItem("Random22b",$App.Random22b);};
$scope.PushButton566_click = function() {neoTalkSpeak($App.Random22b, "uk", 1, .9);};
$scope.PushButton600_click = function() {neoTalkCancelSpeech();};
$scope.PushButton601_click = function() {$App.r22t = $scope.Calculate($App.r22t+"-1",-1);
$scope.SetObjectStyle("ranbox22","font-size",$App.r22t+"pt");};
$scope.PushButton602_click = function() {$App.r22t = $scope.Calculate($App.r22t+"+1",-1);
$scope.SetObjectStyle("ranbox22","font-size",$App.r22t+"pt");};
$scope.PushButton603_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random22","a",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22b","b",22,null);

neoGSheetsLoadCell($App.googleSheet4,"Random22c","e",22,null);
};
$scope.TextArea222_change = function() {localStorage.setItem("Random22c",$App.Random22c);};
$scope.Image213_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline563_click = function() {$App.goto01 = "Random22";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random22;
$App.love01 = $App.Random22;
localStorage.setItem("love01",$App.Random22);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline564_click = function() {$App.goto02 = "Random22";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random22;
$App.love02 = $App.Random22;
localStorage.setItem("love02",$App.Random22);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline565_click = function() {$App.goto03 = "Random22";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random22;
$App.love03 = $App.Random22;
localStorage.setItem("love03",$App.Random22);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline566_click = function() {$App.goto04 = "Random22";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random22;
$App.love04 = $App.Random22;
localStorage.setItem("love04",$App.Random22);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline567_click = function() {$App.goto05 = "Random22";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random22;
$App.love05 = $App.Random22;
localStorage.setItem("love05",$App.Random22);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline568_click = function() {$App.goto06 = "Random22";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random22;
$App.love06 = $App.Random22;
localStorage.setItem("love06",$App.Random22);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random23_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 87;
$App.NAB.PageID = "Random23";
$scope.PushButton550_click = function() {localStorage.setItem("Random23b",$App.Random23b);
localStorage.setItem("Random23c",$App.Random23c);
localStorage.setItem("Random23",$App.Random23);
$scope.GotoPage( "Home" );};
$scope.PushButton659_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea223_change = function() {localStorage.setItem("Random23b",$App.Random23b);};
$scope.PushButton667_click = function() {neoTalkSpeak($App.Random23b, "uk", 1, .9);};
$scope.PushButton675_click = function() {neoTalkCancelSpeech();};
$scope.PushButton688_click = function() {$App.r23t = $scope.Calculate($App.r23t+"-1",-1);
$scope.SetObjectStyle("ranbox23","font-size",$App.r23t+"pt");};
$scope.PushButton689_click = function() {$App.r23t = $scope.Calculate($App.r23t+"+1",-1);
$scope.SetObjectStyle("ranbox23","font-size",$App.r23t+"pt");};
$scope.PushButton690_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random23","a",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23b","b",23,null);

neoGSheetsLoadCell($App.googleSheet4,"Random23c","e",23,null);
};
$scope.TextArea224_change = function() {localStorage.setItem("Random23c",$App.Random23c);};
$scope.Image206_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline556_click = function() {$App.goto01 = "Random23";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random23;
$App.love01 = $App.Random23;
localStorage.setItem("love01",$App.Random23);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline557_click = function() {$App.goto02 = "Random23";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random23;
$App.love02 = $App.Random23;
localStorage.setItem("love02",$App.Random23);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline558_click = function() {$App.goto03 = "Random23";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random23;
$App.love03 = $App.Random23;
localStorage.setItem("love03",$App.Random23);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline559_click = function() {$App.goto04 = "Random23";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random23;
$App.love04 = $App.Random23;
localStorage.setItem("love04",$App.Random23);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline560_click = function() {$App.goto05 = "Random23";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random23;
$App.love05 = $App.Random23;
localStorage.setItem("love05",$App.Random23);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline561_click = function() {$App.goto06 = "Random23";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random23;
$App.love06 = $App.Random23;
localStorage.setItem("love06",$App.Random23);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random24_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 88;
$App.NAB.PageID = "Random24";
$scope.PushButton691_click = function() {localStorage.setItem("Random24",$App.Random24);
localStorage.setItem("Random24b",$App.Random24b);
localStorage.setItem("Random24c",$App.Random24c);
$scope.GotoPage( "Home" );};
$scope.PushButton692_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea225_change = function() {localStorage.setItem("Random24b",$App.Random24b);};
$scope.PushButton693_click = function() {neoTalkSpeak($App.Random24b, "uk", 1, .9);};
$scope.PushButton694_click = function() {neoTalkCancelSpeech();};
$scope.PushButton695_click = function() {$App.r24t = $scope.Calculate($App.r24t+"-1",-1);
$scope.SetObjectStyle("ranbox24","font-size",$App.r24t+"pt");};
$scope.PushButton696_click = function() {$App.r24t = $scope.Calculate($App.r24t+"+1",-1);
$scope.SetObjectStyle("ranbox24","font-size",$App.r24t+"pt");};
$scope.PushButton697_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random24","a",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24b","b",24,null);

neoGSheetsLoadCell($App.googleSheet4,"Random24c","e",24,null);
};
$scope.TextArea226_change = function() {localStorage.setItem("Random24c",$App.Random24c);};
$scope.Image199_click = function() {$App.love01 = $App.Random01;
localStorage.setItem("love01",$App.love01);
$App.goto01 = "Random01";
localStorage.setItem("goto01",$App.goto01);};
$scope.Headline549_click = function() {$App.goto01 = "Random24";
localStorage.setItem("goto01",$App.goto01);
$App.H01 = $App.Random24;
$App.love01 = $App.Random24;
localStorage.setItem("love01",$App.Random24);
localStorage.setItem("H01",$App.H01);
$scope.GotoPage( "Home" );};
$scope.Headline550_click = function() {$App.goto02 = "Random24";
localStorage.setItem("goto02",$App.goto02);
$App.H02 = $App.Random24;
$App.love02 = $App.Random24;
localStorage.setItem("love02",$App.Random24);
localStorage.setItem("H02",$App.H02);
$scope.GotoPage( "Home" );};
$scope.Headline551_click = function() {$App.goto03 = "Random24";
localStorage.setItem("goto02",$App.goto02);
$App.H03 = $App.Random24;
$App.love03 = $App.Random24;
localStorage.setItem("love03",$App.Random24);
localStorage.setItem("H03",$App.H03);
$scope.GotoPage( "Home" );};
$scope.Headline552_click = function() {$App.goto04 = "Random24";
localStorage.setItem("goto04",$App.goto04);
$App.H04 = $App.Random24;
$App.love04 = $App.Random24;
localStorage.setItem("love04",$App.Random24);
localStorage.setItem("H04",$App.H04);
$scope.GotoPage( "Home" );};
$scope.Headline553_click = function() {$App.goto05 = "Random24";
localStorage.setItem("goto05",$App.goto05);
$App.H05 = $App.Random24;
$App.love05 = $App.Random24;
localStorage.setItem("love05",$App.Random24);
localStorage.setItem("H05",$App.H05);
$scope.GotoPage( "Home" );};
$scope.Headline554_click = function() {$App.goto06 = "Random24";
localStorage.setItem("goto06",$App.goto06);
$App.H06 = $App.Random24;
$App.love06 = $App.Random24;
localStorage.setItem("love06",$App.Random24);
localStorage.setItem("H06",$App.H06);
$scope.GotoPage( "Home" );};
});
NeoApp.controller("Random25_Ctrl", function($scope,$rootScope,$route,$timeout,$filter,$window,$animate) {
$App.NAB.PageNumber = 89;
$App.NAB.PageID = "Random25";
$scope.PushButton698_click = function() {localStorage.setItem("Random22b",$App.Random22b);
$scope.GotoPage( "Home" );};
$scope.PushButton699_click = function() {neoTalkPauseSpeech();
$scope.ObjectToBack("PushButton208");};
$scope.TextArea227_change = function() {localStorage.setItem("Random25b",$App.Random25b);};
$scope.PushButton700_click = function() {neoTalkSpeak($App.Random25b, "uk", 1, .9);};
$scope.PushButton701_click = function() {neoTalkCancelSpeech();};
$scope.PushButton702_click = function() {$App.r25t = $scope.Calculate($App.r25t+"-1",-1);
$scope.SetObjectStyle("ranbox25","font-size",$App.r25t+"pt");};
$scope.PushButton703_click = function() {$App.r25t = $scope.Calculate($App.r25t+"+1",-1);
$scope.SetObjectStyle("ranbox25","font-size",$App.r25t+"pt");};
$scope.PushButton704_click = function() {neoGSheetsLoadCell($App.googleSheet4,"Random25","a",25,null);

neoGSheetsLoadCell($App.googleSheet4,"Random25b","b",25,null);
};
$scope.TextArea228_change = function() {localStorage.setItem("Random25c",$App.Random25c);};
});
NeoApp.controller("NewDialog_Ctrl", function($scope,$rootScope,$modalInstance,$filter,$window) {
 $scope.CloseDialog = function() {
  $modalInstance.close();
 };
});
function neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine){$App[theArray]=new Array();sheetrock({url:gsheets,query:sqlquery,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoad error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=0;n<response.rows.length;n++){$App[theArray][n]=new Object();for(i=0;i<response.rows[n].cellsArray.length;i++){etiqueta=response.rows[n].labels[i];$App[theArray][n][etiqueta]=response.rows[n].cellsArray[i];}}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadColumn(gsheets,theArray,columnLetter,subroutine){$App[theArray]=new Array();columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadColumn error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{for(n=1;n<response.rows.length;n++){$App[theArray][n-1]=response.rows[n].cellsArray[0];}if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadCell(gsheets,myVar,columnLetter,rowNumber,subroutine){rowNumber--;columnLetter=columnLetter.toUpperCase();sheetrock({url:gsheets,query:"select "+columnLetter,fetchSize:0,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadCell error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{$App[myVar]=response.rows[rowNumber].cellsArray[0];if(subroutine){subroutine(error,options,response);}}}});};function neoGSheetsLoadAsTable(objId,gsheets,sqlquery,subroutine){$('#'+objId).html('<table id="'+objId+'neoGSheets" class="table table-striped"></table>');$('#'+objId+'neoGSheets').sheetrock({url:gsheets,fetchSize:0,reset:true,query:sqlquery,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadAsTable error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else if(subroutine){subroutine(error,options,response);}}});};function neoGSheetsLoadByName(gsheets,theArray,fieldPrefix,sqlquery,subroutine){console.log("neoGSheetsLoadByName - ");sheetrock({url:gsheets,query:"select *",fetchSize:1,reset:true,callback:function(error,options,response){if(error!=null){console.log("neoGSheetsLoadByName error: "+error,options,response);if(subroutine){subroutine(error,options,response);}}else{columnIDStr1="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";columnIDStr2="AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ,";columnIDStr3="BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ";columnIDStr=columnIDStr1+columnIDStr2+columnIDStr3;columnIDArray=columnIDStr.split(",");for(i=0;i<response.rows[0].cellsArray.length;i++){columnID=columnIDArray[i];fieldName=response.rows[0].labels[i];console.log("neoGSheetsLoadByName column for field "+fieldName+" is "+columnID);var regexstring=fieldPrefix+fieldName;var regexp=new RegExp(regexstring,"g");sqlquery=sqlquery.replace(regexp,columnID);}console.log("neoGSheetsLoadByName sqlquery: "+sqlquery);neoGSheetsLoad(gsheets,theArray,sqlquery,subroutine);}}});};
function dtLocalDate(year,month,day,locale){var today=new Date(year,month-1,day,12,30,30,30);returnvar=today.toLocaleDateString(locale);return returnvar;};function dtGetDate(){var d=new Date();return d.getDate();};function dtGetDay(){var d=new Date();return d.getDay()+1;};function dtGetYear(){var d=new Date();return d.getFullYear();};function dtDayNumToName(num){var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return days[num];};function dtGetDayName(){var d=new Date();return dtDayNumToName(d.getDay());};function dtGetMonthNum(){var d=new Date();return d.getMonth()+1;};function dtMonthNumToName(num){var days=["January","February","March","April","May","June","July","August","September","October","November","December"];return days[num];};function dtGetMonthName(){var d=new Date();return dtMonthNumToName(d.getMonth());};function stringToDate(_date,_format,_delimiter){var formatLowerCase=_format.toLowerCase();var formatItems=formatLowerCase.split(_delimiter);var dateItems=_date.split(_delimiter);var monthIndex=formatItems.indexOf("mm");var dayIndex=formatItems.indexOf("dd");var yearIndex=formatItems.indexOf("yyyy");var month=parseInt(dateItems[monthIndex]);month-=1;var formatedDate=new Date(dateItems[yearIndex],month,dateItems[dayIndex]);return formatedDate;};function dtDateDiff(d1,d2,format){var msDay=60*60*24*1000;var date1=stringToDate(d1,format,'/');var date2=stringToDate(d2,format,'/');return Math.abs(Math.floor((date2-date1)/msDay));};
function neoTalkSpeak(text,voice='default',rate=1,pitch=1){speechSynthesis.cancel();var utterance=new SpeechSynthesisUtterance(text);if(voice!=='default'&&voice!==''&&voice!=undefined){utterance.voice=speechSynthesis.getVoices().find(v=>v.name===voice);}else{utterance.voice=speechSynthesis.getVoices()[0];}utterance.rate=rate;utterance.pitch=pitch;speechSynthesis.speak(utterance);}function neoTalkPauseSpeech(){speechSynthesis.pause();}function neoTalkResumeSpeech(){speechSynthesis.resume();}function neoTalkCancelSpeech(){speechSynthesis.cancel();}function neoTalkGetVoices(returnVar){var voices=speechSynthesis.getVoices();if(voices.length===0){speechSynthesis.onvoiceschanged=function(){neoTalkGetVoices(returnVar);};}else{if($App[returnVar]===undefined){$App[returnVar]=[];}voices.forEach(voice=>{$App[returnVar].push(voice.name);});}}function neoTalkStartRecognition(returnVar,continuous,lang,callBack){if(lang==""){lang='en-US';}window.SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;$App.recognition=new SpeechRecognition();$App.recognition.continuous=continuous;$App.recognition.lang=lang;$App.recognition.onresult=function(event){var lastResultIndex=event.results.length-1;var result=event.results[lastResultIndex][0];var transcript=result.transcript;var confidence=result.confidence;$App[returnVar]=transcript;if(callBack!=null){callBack();}};$App.recognition.onerror=function(event){console.error('Speech recognition error',event.error);};$App.recognition.start();}function neoTalkStopRecognition(){if($App.recognition){$App.recognition.stop();}}async function neoTalkAudioRecord(saveToVariable=null,callbackSubroutine=null){if($App.audioRecorder&&$App.audioRecorder.state!=="inactive"){$App.audioRecorder.stop();$App.audioRecorder.stream.getTracks().forEach(track=>track.stop());}try{const audioStream=await navigator.mediaDevices.getUserMedia({audio:true});$App.audioRecorder=new MediaRecorder(audioStream);$App.audioRecorder.start();$App.audioRecordedChunks=[];$App.audioRecorder.ondataavailable=(event)=>{if(event.data.size>0){$App.audioRecordedChunks.push(event.data);}};$App.audioRecorder.onstop=async()=>{console.log("Audio recorder has been stopped.");audioStream.getTracks().forEach(track=>track.stop());if(saveToVariable){const blob=new Blob($App.audioRecordedChunks,{type:'audio/webm'});const base64String=await blobToBase64(blob);$App[saveToVariable]=base64String;if(callbackSubroutine){callbackSubroutine();}console.log(`Audio recording saved to variable ${saveToVariable}as Base64.`);}};audioStream.getTracks().forEach(track=>track.onended=()=>{console.log("Audio stream track ended.");if($App.audioRecorder&&$App.audioRecorder.state==="recording"){$App.audioRecorder.stop();}});}catch(error){console.error("Error accessing audio devices:",error);}}function neoTalkAudioStopRecording(){if($App.audioRecorder&&$App.audioRecorder.state!=="inactive"){$App.audioRecorder.stop();}else{console.log("No active audio recording found.");}}function neoTalkAudioDownload(fileName,variableName){const base64Data=$App[variableName];if(base64Data){const blob=base64ToBlob(base64Data);const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download=fileName+".webm";document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);console.log("Audio recording saved.");}else{console.log(`No recorded data found in variable ${variableName}.`);}}function blobToBase64(blob){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onloadend=()=>resolve(reader.result);reader.onerror=(error)=>reject(error);reader.readAsDataURL(blob);});}function base64ToBlob(base64){const binaryString=atob(base64.split(',')[1]);const arrayBuffer=new ArrayBuffer(binaryString.length);const uint8Array=new Uint8Array(arrayBuffer);for(let i=0;i<binaryString.length;i++){uint8Array[i]=binaryString.charCodeAt(i);}return new Blob([uint8Array],{type:'audio/webm'});}function neoTalkAudioPlay(variableName){if($App[variableName]){const audio=new Audio($App[variableName]);audio.play();}else{console.log("No recorded audio to play.");}}
