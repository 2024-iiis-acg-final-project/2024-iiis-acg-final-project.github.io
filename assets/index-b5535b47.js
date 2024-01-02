(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="158",Ih=0,Ta=1,Dh=2,bc=1,Nh=2,Tn=3,Cn=0,Gt=1,Bt=2,Vn=0,Hi=1,ba=2,wa=3,Aa=4,Uh=5,oi=100,Oh=101,zh=102,Ra=103,Ca=104,Fh=200,Bh=201,kh=202,Hh=203,Uo=204,Oo=205,Gh=206,Vh=207,Wh=208,Xh=209,qh=210,jh=211,Yh=212,Kh=213,Zh=214,Jh=0,$h=1,Qh=2,br=3,eu=4,tu=5,nu=6,iu=7,wc=0,su=1,ru=2,Wn=0,ou=1,au=2,lu=3,cu=4,hu=5,La="attached",uu="detached",Ac=300,ji=301,Yi=302,zo=303,Fo=304,Or=306,Ht=1e3,$t=1001,wr=1002,Tt=1003,Bo=1004,Mr=1005,Ft=1006,Rc=1007,fi=1008,Xn=1009,fu=1010,du=1011,na=1012,Cc=1013,Gn=1014,An=1015,Ls=1016,Lc=1017,Pc=1018,ci=1020,pu=1021,Qt=1023,mu=1024,gu=1025,hi=1026,Ki=1027,_u=1028,Ic=1029,yu=1030,Dc=1031,Nc=1033,Yr=33776,Kr=33777,Zr=33778,Jr=33779,Pa=35840,Ia=35841,Da=35842,Na=35843,xu=36196,Ua=37492,Oa=37496,za=37808,Fa=37809,Ba=37810,ka=37811,Ha=37812,Ga=37813,Va=37814,Wa=37815,Xa=37816,qa=37817,ja=37818,Ya=37819,Ka=37820,Za=37821,$r=36492,Ja=36494,$a=36495,vu=36283,Qa=36284,el=36285,tl=36286,Ps=2300,Zi=2301,Qr=2302,nl=2400,il=2401,sl=2402,Mu=2500,Su=0,Uc=1,ko=2,Oc=3e3,ui=3001,Eu=3200,Tu=3201,zc=0,bu=1,en="",dt="srgb",Ct="srgb-linear",ia="display-p3",zr="display-p3-linear",Ar="linear",ot="srgb",Rr="rec709",Cr="p3",_i=7680,rl=519,wu=512,Au=513,Ru=514,Cu=515,Lu=516,Pu=517,Iu=518,Du=519,Ho=35044,ol="300 es",Go=1035,Rn=2e3,Lr=2001;class is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let al=1234567;const Es=Math.PI/180,Ji=180/Math.PI;function tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[s&255]+Lt[s>>8&255]+Lt[s>>16&255]+Lt[s>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function sa(s,e){return(s%e+e)%e}function Nu(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Uu(s,e,t){return s!==e?(t-s)/(e-s):0}function Ts(s,e,t){return(1-t)*s+t*e}function Ou(s,e,t,n){return Ts(s,e,1-Math.exp(-t*n))}function zu(s,e=1){return e-Math.abs(sa(s,e*2)-e)}function Fu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Bu(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ku(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Hu(s,e){return s+Math.random()*(e-s)}function Gu(s){return s*(.5-Math.random())}function Vu(s){s!==void 0&&(al=s);let e=al+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wu(s){return s*Es}function Xu(s){return s*Ji}function Vo(s){return(s&s-1)===0&&s!==0}function Fc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Pr(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qu(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),h=r((e+n)/2),l=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*l,c*u,c*f,a*h);break;case"YZY":s.set(c*f,a*l,c*u,a*h);break;case"ZXZ":s.set(c*u,c*f,a*l,a*h);break;case"XZX":s.set(a*l,c*g,c*p,a*h);break;case"YXY":s.set(c*p,a*l,c*g,a*h);break;case"ZYZ":s.set(c*g,c*p,a*l,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function cn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ju={DEG2RAD:Es,RAD2DEG:Ji,generateUUID:tn,clamp:bt,euclideanModulo:sa,mapLinear:Nu,inverseLerp:Uu,lerp:Ts,damp:Ou,pingpong:zu,smoothstep:Fu,smootherstep:Bu,randInt:ku,randFloat:Hu,randFloatSpread:Gu,seededRandom:Vu,degToRad:Wu,radToDeg:Xu,isPowerOfTwo:Vo,ceilPowerOfTwo:Fc,floorPowerOfTwo:Pr,setQuaternionFromProperEuler:qu,normalize:tt,denormalize:cn};class ce{constructor(e=0,t=0){ce.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,r,o,a,c,h){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h)}set(e,t,n,i,r,o,a,c,h){const l=this.elements;return l[0]=e,l[1]=i,l[2]=a,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=o,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],h=n[1],l=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],y=i[1],x=i[4],v=i[7],b=i[2],C=i[5],R=i[8];return r[0]=o*_+a*y+c*b,r[3]=o*m+a*x+c*C,r[6]=o*d+a*v+c*R,r[1]=h*_+l*y+u*b,r[4]=h*m+l*x+u*C,r[7]=h*d+l*v+u*R,r[2]=f*_+p*y+g*b,r[5]=f*m+p*x+g*C,r[8]=f*d+p*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8];return t*o*l-t*a*h-n*r*l+n*a*c+i*r*h-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=l*o-a*h,f=a*c-l*r,p=h*r-o*c,g=t*u+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*h-l*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(l*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-h*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*o+h*a)+o+e,-i*h,i*c,-i*(-h*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(eo.makeScale(e,t)),this}rotate(e){return this.premultiply(eo.makeRotation(-e)),this}translate(e,t){return this.premultiply(eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Ge;function Bc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yu(){const s=Is("canvas");return s.style.display="block",s}const ll={};function bs(s){s in ll||(ll[s]=!0,console.warn(s))}const cl=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),hl=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[Ct]:{transfer:Ar,primaries:Rr,toReference:s=>s,fromReference:s=>s},[dt]:{transfer:ot,primaries:Rr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[zr]:{transfer:Ar,primaries:Cr,toReference:s=>s.applyMatrix3(hl),fromReference:s=>s.applyMatrix3(cl)},[ia]:{transfer:ot,primaries:Cr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(hl),fromReference:s=>s.applyMatrix3(cl).convertLinearToSRGB()}},Ku=new Set([Ct,zr]),$e={enabled:!0,_workingColorSpace:Ct,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ku.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Vs[e].toReference,i=Vs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Vs[s].primaries},getTransfer:function(s){return s===en?Ar:Vs[s].transfer}};function Gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function to(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class kc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{yi===void 0&&(yi=Is("canvas")),yi.width=e.width,yi.height=e.height;const n=yi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Gi(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gi(t[n]/255)*255):t[n]=Gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zu=0;class Hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(no(i[o].image)):r.push(no(i[o]))}else r=no(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function no(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0;class At extends is{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=$t,i=$t,r=Ft,o=fi,a=Qt,c=Xn,h=At.DEFAULT_ANISOTROPY,l=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=tn(),this.name="",this.source=new Hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===ui?dt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ht:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ht:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===dt?ui:Oc}set encoding(e){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ui?dt:en}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=Ac;At.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],l=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(l-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(l+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(h+1)/2,v=(p+1)/2,b=(d+1)/2,C=(l+f)/4,R=(u+_)/4,U=(g+m)/4;return x>v&&x>b?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=C/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=U/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=U/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-l)*(f-l));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-l)/y,this.w=Math.acos((h+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $u extends is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ui?dt:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new At(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends $u{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Gc extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qu extends At{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ye{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],h=n[i+1],l=n[i+2],u=n[i+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||h!==p||l!==g){let m=1-a;const d=c*f+h*p+l*g+u*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const b=Math.sqrt(x),C=Math.atan2(b,d*y);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const v=a*y;if(c=c*m+f*v,h=h*m+p*v,l=l*m+g*v,u=u*m+_*v,m===1-a){const b=1/Math.sqrt(c*c+h*h+l*l+u*u);c*=b,h*=b,l*=b,u*=b}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],h=n[i+2],l=n[i+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+l*u+c*p-h*f,e[t+1]=c*g+l*f+h*u-a*p,e[t+2]=h*g+l*p+a*f-c*u,e[t+3]=l*g-a*u-c*f-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,h=a(n/2),l=a(i/2),u=a(r/2),f=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"YXZ":this._x=f*l*u+h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"ZXY":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u-f*p*g;break;case"ZYX":this._x=f*l*u-h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u+f*p*g;break;case"YZX":this._x=f*l*u+h*p*g,this._y=h*p*u+f*l*g,this._z=h*l*g-f*p*u,this._w=h*l*u-f*p*g;break;case"XZY":this._x=f*l*u-h*p*g,this._y=h*p*u-f*l*g,this._z=h*l*g+f*p*u,this._w=h*l*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],h=t[2],l=t[6],u=t[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(l-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+h)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-h)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+o*a+i*h-r*c,this._y=i*l+o*c+r*a-n*h,this._z=r*l+o*h+n*c-i*a,this._w=o*l-n*a-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),l=Math.atan2(h,a),u=Math.sin((1-t)*l)/h,f=Math.sin(t*l)/h;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(e=0,t=0,n=0){A.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,h=2*(o*i-a*n),l=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+c*h+o*u-a*l,this.y=n+c*l+a*h-r*u,this.z=i+c*u+r*l-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new A,ul=new Ye;class Ln{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,nn):nn.fromBufferAttribute(r,o),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),Xs.subVectors(this.max,hs),xi.subVectors(e.a,hs),vi.subVectors(e.b,hs),Mi.subVectors(e.c,hs),Nn.subVectors(vi,xi),Un.subVectors(Mi,vi),Jn.subVectors(xi,Mi);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-Jn.y,Jn.x,0];return!so(t,xi,vi,Mi,Xs)||(t=[1,0,0,0,1,0,0,0,1],!so(t,xi,vi,Mi,Xs))?!1:(qs.crossVectors(Nn,Un),t=[qs.x,qs.y,qs.z],so(t,xi,vi,Mi,Xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new A,new A,new A,new A,new A,new A,new A,new A],nn=new A,Ws=new Ln,xi=new A,vi=new A,Mi=new A,Nn=new A,Un=new A,Jn=new A,hs=new A,Xs=new A,qs=new A,$n=new A;function so(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){$n.fromArray(s,r);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),c=e.dot($n),h=t.dot($n),l=n.dot($n);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>a)return!1}return!0}const ef=new Ln,us=new A,ro=new A;class dn{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const t=us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(ro)),this.expandByPoint(us.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new A,oo=new A,js=new A,On=new A,ao=new A,Ys=new A,lo=new A;class zs{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xn.copy(this.origin).addScaledVector(this.direction,t),xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oo.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),On.copy(this.origin).sub(oo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(js),a=On.dot(this.direction),c=-On.dot(js),h=On.lengthSq(),l=Math.abs(1-o*o);let u,f,p,g;if(l>0)if(u=o*c-a,f=o*a-c,g=r*l,u>=0)if(f>=-g)if(f<=g){const _=1/l;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*c)+h}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+h):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+h):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+f*(f+2*c)+h);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oo).addScaledVector(js,f),p}intersectSphere(e,t){xn.subVectors(e.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const h=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,f=this.origin;return h>=0?(n=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(n=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),l>=0?(r=(e.min.y-f.y)*l,o=(e.max.y-f.y)*l):(r=(e.max.y-f.y)*l,o=(e.min.y-f.y)*l),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xn)!==null}intersectTriangle(e,t,n,i,r){ao.subVectors(t,e),Ys.subVectors(n,e),lo.crossVectors(ao,Ys);let o=this.direction.dot(lo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,e);const c=a*this.direction.dot(Ys.crossVectors(On,Ys));if(c<0)return null;const h=a*this.direction.dot(ao.cross(On));if(h<0||c+h>o)return null;const l=-a*On.dot(lo);return l<0?null:this.at(l/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,o,a,c,h,l,u,f,p,g,_,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,h,l,u,f,p,g,_,m)}set(e,t,n,i,r,o,a,c,h,l,u,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=h,d[6]=l,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Si.setFromMatrixColumn(e,0).length(),r=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=-c*u,t[8]=h,t[1]=p+g*h,t[5]=f-_*h,t[9]=-a*c,t[2]=_-f*h,t[6]=g+p*h,t[10]=o*c}else if(e.order==="YXZ"){const f=c*l,p=c*u,g=h*l,_=h*u;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*h,t[1]=o*u,t[5]=o*l,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*l,p=c*u,g=h*l,_=h*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*l,t[9]=_-f*a,t[2]=-o*h,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=c*l,t[4]=g*h-p,t[8]=f*h+_,t[1]=c*u,t[5]=_*h+f,t[9]=p*h-g,t[2]=-h,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=_-f*u,t[8]=g*u+p,t[1]=u,t[5]=o*l,t[9]=-a*l,t[2]=-h*l,t[6]=p*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=c*l,t[4]=-u,t[8]=h*l,t[1]=f*u+_,t[5]=o*l,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*l,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){const i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),zn.crossVectors(n,qt),zn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),zn.crossVectors(n,qt)),zn.normalize(),Ks.crossVectors(qt,zn),i[0]=zn.x,i[4]=Ks.x,i[8]=qt.x,i[1]=zn.y,i[5]=Ks.y,i[9]=qt.y,i[2]=zn.z,i[6]=Ks.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],h=n[12],l=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],x=n[7],v=n[11],b=n[15],C=i[0],R=i[4],U=i[8],S=i[12],w=i[1],G=i[5],Z=i[9],$=i[13],I=i[2],H=i[6],q=i[10],W=i[14],ne=i[3],K=i[7],j=i[11],D=i[15];return r[0]=o*C+a*w+c*I+h*ne,r[4]=o*R+a*G+c*H+h*K,r[8]=o*U+a*Z+c*q+h*j,r[12]=o*S+a*$+c*W+h*D,r[1]=l*C+u*w+f*I+p*ne,r[5]=l*R+u*G+f*H+p*K,r[9]=l*U+u*Z+f*q+p*j,r[13]=l*S+u*$+f*W+p*D,r[2]=g*C+_*w+m*I+d*ne,r[6]=g*R+_*G+m*H+d*K,r[10]=g*U+_*Z+m*q+d*j,r[14]=g*S+_*$+m*W+d*D,r[3]=y*C+x*w+v*I+b*ne,r[7]=y*R+x*G+v*H+b*K,r[11]=y*U+x*Z+v*q+b*j,r[15]=y*S+x*$+v*W+b*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],h=e[13],l=e[2],u=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*u-i*h*u-r*a*f+n*h*f+i*a*p-n*c*p)+_*(+t*c*p-t*h*f+r*o*f-i*o*p+i*h*l-r*c*l)+m*(+t*h*u-t*a*p-r*o*u+n*o*p+r*a*l-n*h*l)+d*(-i*a*l-t*c*u+t*a*f+i*o*u-n*o*f+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],h=e[7],l=e[8],u=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=u*m*h-_*f*h+_*c*p-a*m*p-u*c*d+a*f*d,x=g*f*h-l*m*h-g*c*p+o*m*p+l*c*d-o*f*d,v=l*_*h-g*u*h+g*a*p-o*_*p-l*a*d+o*u*d,b=g*u*c-l*_*c-g*a*f+o*_*f+l*a*m-o*u*m,C=t*y+n*x+i*v+r*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=y*R,e[1]=(_*f*r-u*m*r-_*i*p+n*m*p+u*i*d-n*f*d)*R,e[2]=(a*m*r-_*c*r+_*i*h-n*m*h-a*i*d+n*c*d)*R,e[3]=(u*c*r-a*f*r-u*i*h+n*f*h+a*i*p-n*c*p)*R,e[4]=x*R,e[5]=(l*m*r-g*f*r+g*i*p-t*m*p-l*i*d+t*f*d)*R,e[6]=(g*c*r-o*m*r-g*i*h+t*m*h+o*i*d-t*c*d)*R,e[7]=(o*f*r-l*c*r+l*i*h-t*f*h-o*i*p+t*c*p)*R,e[8]=v*R,e[9]=(g*u*r-l*_*r-g*n*p+t*_*p+l*n*d-t*u*d)*R,e[10]=(o*_*r-g*a*r+g*n*h-t*_*h-o*n*d+t*a*d)*R,e[11]=(l*a*r-o*u*r-l*n*h+t*u*h+o*n*p-t*a*p)*R,e[12]=b*R,e[13]=(l*_*i-g*u*i+g*n*f-t*_*f-l*n*m+t*u*m)*R,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*i-l*a*i+l*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,h=r*o,l=r*a;return this.set(h*o+n,h*a-i*c,h*c+i*a,0,h*a+i*c,l*a+n,l*c-i*o,0,h*c-i*a,l*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,h=r+r,l=o+o,u=a+a,f=r*h,p=r*l,g=r*u,_=o*l,m=o*u,d=a*u,y=c*h,x=c*l,v=c*u,b=n.x,C=n.y,R=n.z;return i[0]=(1-(_+d))*b,i[1]=(p+v)*b,i[2]=(g-x)*b,i[3]=0,i[4]=(p-v)*C,i[5]=(1-(f+d))*C,i[6]=(m+y)*C,i[7]=0,i[8]=(g+x)*R,i[9]=(m-y)*R,i[10]=(1-(f+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Si.set(i[0],i[1],i[2]).length();const o=Si.set(i[4],i[5],i[6]).length(),a=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],sn.copy(this);const h=1/r,l=1/o,u=1/a;return sn.elements[0]*=h,sn.elements[1]*=h,sn.elements[2]*=h,sn.elements[4]*=l,sn.elements[5]*=l,sn.elements[6]*=l,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,t.setFromRotationMatrix(sn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Rn){const c=this.elements,h=2*r/(t-e),l=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let p,g;if(a===Rn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Rn){const c=this.elements,h=1/(t-e),l=1/(n-i),u=1/(o-r),f=(t+e)*h,p=(n+i)*l;let g,_;if(a===Rn)g=(o+r)*u,_=-2*u;else if(a===Lr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new A,sn=new He,tf=new A(0,0,0),nf=new A(1,1,1),zn=new A,Ks=new A,qt=new A,fl=new He,dl=new Ye;class pn{constructor(e=0,t=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],h=i[5],l=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const pl=new A,Ei=new Ye,vn=new He,Zs=new A,fs=new A,rf=new A,of=new Ye,ml=new A(1,0,0),gl=new A(0,1,0),_l=new A(0,0,1),af={type:"added"},lf={type:"removed"};class at extends is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new A,t=new pn,n=new Ye,i=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new Ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(ml,e)}rotateY(e){return this.rotateOnAxis(gl,e)}rotateZ(e){return this.rotateOnAxis(_l,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ml,e)}translateY(e){return this.translateOnAxis(gl,e)}translateZ(e){return this.translateOnAxis(_l,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zs.copy(e):Zs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(fs,Zs,this.up):vn.lookAt(Zs,fs,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(vn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(af)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const u=c[h];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),h=o(e.textures),l=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const h in a){const l=a[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new A(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new A,Mn=new A,co=new A,Sn=new A,Ti=new A,bi=new A,yl=new A,ho=new A,uo=new A,fo=new A;let Js=!1;class on{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){rn.subVectors(i,t),Mn.subVectors(n,t),co.subVectors(e,t);const o=rn.dot(rn),a=rn.dot(Mn),c=rn.dot(co),h=Mn.dot(Mn),l=Mn.dot(co),u=o*h-a*a;if(u===0)return r.set(-2,-1,-1);const f=1/u,p=(h*c-a*l)*f,g=(o*l-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Sn),Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,i,r,o,a,c){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Sn),c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Mn.subVectors(e,t),rn.cross(Mn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),rn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Js===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Js=!0),on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ti.subVectors(i,n),bi.subVectors(r,n),ho.subVectors(e,n);const c=Ti.dot(ho),h=bi.dot(ho);if(c<=0&&h<=0)return t.copy(n);uo.subVectors(e,i);const l=Ti.dot(uo),u=bi.dot(uo);if(l>=0&&u<=l)return t.copy(i);const f=c*u-l*h;if(f<=0&&c>=0&&l<=0)return o=c/(c-l),t.copy(n).addScaledVector(Ti,o);fo.subVectors(e,r);const p=Ti.dot(fo),g=bi.dot(fo);if(g>=0&&p<=g)return t.copy(r);const _=p*h-c*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),t.copy(n).addScaledVector(bi,a);const m=l*g-p*u;if(m<=0&&u-l>=0&&p-g>=0)return yl.subVectors(r,i),a=(u-l)/(u-l+(p-g)),t.copy(i).addScaledVector(yl,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(Ti,o).addScaledVector(bi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function po(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=sa(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=po(o,r,e+1/3),this.g=po(o,r,e),this.b=po(o,r,e-1/3)}return $e.toWorkingColorSpace(this,i),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const n=Vc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return $e.fromWorkingColorSpace(Pt.copy(this),e),Math.round(bt(Pt.r*255,0,255))*65536+Math.round(bt(Pt.g*255,0,255))*256+Math.round(bt(Pt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,r=Pt.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,h;const l=(a+o)/2;if(a===o)c=0,h=0;else{const u=o-a;switch(h=l<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=dt){$e.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL($s);const n=Ts(Fn.h,$s.h,t),i=Ts(Fn.s,$s.s,t),r=Ts(Fn.l,$s.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new De;De.NAMES=Vc;let cf=0;class fn extends is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=Hi,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Oo,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==Oo&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class it extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new A,Qs=new ce;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ho,this.updateRange={offset:0,count:-1},this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Wc extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hf=0;const Zt=new He,mo=new at,wi=new A,jt=new Ln,ds=new Ln,Et=new A;class Yt extends is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Xc:Wc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Vt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(jt.min,ds.min),jt.expandByPoint(Et),Et.addVectors(jt.max,ds.max),jt.expandByPoint(Et)):(jt.expandByPoint(ds.min),jt.expandByPoint(ds.max))}jt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Et.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let h=0,l=a.count;h<l;h++)Et.fromBufferAttribute(a,h),c&&(wi.fromBufferAttribute(e,h),Et.add(wi)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],l=[];for(let w=0;w<a;w++)h[w]=new A,l[w]=new A;const u=new A,f=new A,p=new A,g=new ce,_=new ce,m=new ce,d=new A,y=new A;function x(w,G,Z){u.fromArray(i,w*3),f.fromArray(i,G*3),p.fromArray(i,Z*3),g.fromArray(o,w*2),_.fromArray(o,G*2),m.fromArray(o,Z*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);const $=1/(_.x*m.y-m.x*_.y);isFinite($)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar($),y.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar($),h[w].add(d),h[G].add(d),h[Z].add(d),l[w].add(y),l[G].add(y),l[Z].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let w=0,G=v.length;w<G;++w){const Z=v[w],$=Z.start,I=Z.count;for(let H=$,q=$+I;H<q;H+=3)x(n[H+0],n[H+1],n[H+2])}const b=new A,C=new A,R=new A,U=new A;function S(w){R.fromArray(r,w*3),U.copy(R);const G=h[w];b.copy(G),b.sub(R.multiplyScalar(R.dot(G))).normalize(),C.crossVectors(U,G);const $=C.dot(l[w])<0?-1:1;c[w*4]=b.x,c[w*4+1]=b.y,c[w*4+2]=b.z,c[w*4+3]=$}for(let w=0,G=v.length;w<G;++w){const Z=v[w],$=Z.start,I=Z.count;for(let H=$,q=$+I;H<q;H+=3)S(n[H+0]),S(n[H+1]),S(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new A,r=new A,o=new A,a=new A,c=new A,h=new A,l=new A,u=new A;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),a.add(l),c.add(l),h.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),l.subVectors(o,r),u.subVectors(i,r),l.cross(u),n.setXYZ(f+0,l.x,l.y,l.z),n.setXYZ(f+1,l.x,l.y,l.z),n.setXYZ(f+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,c){const h=a.array,l=a.itemSize,u=a.normalized,f=new h.constructor(c.length*l);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*l;for(let d=0;d<l;d++)f[g++]=h[p++]}return new Rt(f,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=e(c,n);t.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const c=[],h=r[a];for(let l=0,u=h.length;l<u;l++){const f=h[l],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const h=o[a];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let u=0,f=h.length;u<f;u++){const p=h[u];l.push(p.toJSON(e.data))}l.length>0&&(i[c]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],u=r[h];for(let f=0,p=u.length;f<p;f++)l.push(u[f].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,l=o.length;h<l;h++){const u=o[h];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new He,Qn=new zs,er=new dn,vl=new A,Ai=new A,Ri=new A,Ci=new A,go=new A,tr=new A,nr=new ce,ir=new ce,sr=new ce,Ml=new A,Sl=new A,El=new A,rr=new A,or=new A;class Ie extends at{constructor(e=new Yt,t=new it){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){tr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=a[c],u=r[c];l!==0&&(go.fromBufferAttribute(u,e),o?tr.addScaledVector(go,l):tr.addScaledVector(go.sub(t),l))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),Qn.copy(e.ray).recast(e.near),!(er.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(er,vl)===null||Qn.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(xl.copy(r).invert(),Qn.copy(e.ray).applyMatrix4(xl),!(n.boundingBox!==null&&Qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=x;v<b;v+=3){const C=a.getX(v),R=a.getX(v+1),U=a.getX(v+2);i=ar(this,d,e,n,h,l,u,C,R,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=ar(this,o,e,n,h,l,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,b=x;v<b;v+=3){const C=v,R=v+1,U=v+2;i=ar(this,d,e,n,h,l,u,C,R,U),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const y=m,x=m+1,v=m+2;i=ar(this,o,e,n,h,l,u,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function uf(s,e,t,n,i,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Cn,a),c===null)return null;or.copy(a),or.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(or);return h<t.near||h>t.far?null:{distance:h,point:or.clone(),object:s}}function ar(s,e,t,n,i,r,o,a,c,h){s.getVertexPosition(a,Ai),s.getVertexPosition(c,Ri),s.getVertexPosition(h,Ci);const l=uf(s,e,t,n,Ai,Ri,Ci,rr);if(l){i&&(nr.fromBufferAttribute(i,a),ir.fromBufferAttribute(i,c),sr.fromBufferAttribute(i,h),l.uv=on.getInterpolation(rr,Ai,Ri,Ci,nr,ir,sr,new ce)),r&&(nr.fromBufferAttribute(r,a),ir.fromBufferAttribute(r,c),sr.fromBufferAttribute(r,h),l.uv1=on.getInterpolation(rr,Ai,Ri,Ci,nr,ir,sr,new ce),l.uv2=l.uv1),o&&(Ml.fromBufferAttribute(o,a),Sl.fromBufferAttribute(o,c),El.fromBufferAttribute(o,h),l.normal=on.getInterpolation(rr,Ai,Ri,Ci,Ml,Sl,El,new A),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const u={a,b:c,c:h,normal:new A,materialIndex:0};on.getNormal(Ai,Ri,Ci,u.normal),l.face=u}return l}class qn extends Yt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],h=[],l=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Vt(h,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(u,2));function g(_,m,d,y,x,v,b,C,R,U,S){const w=v/R,G=b/U,Z=v/2,$=b/2,I=C/2,H=R+1,q=U+1;let W=0,ne=0;const K=new A;for(let j=0;j<q;j++){const D=j*G-$;for(let B=0;B<H;B++){const he=B*w-Z;K[_]=he*y,K[m]=D*x,K[d]=I,h.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[d]=C>0?1:-1,l.push(K.x,K.y,K.z),u.push(B/R),u.push(1-j/U),W+=1}}for(let j=0;j<U;j++)for(let D=0;D<R;D++){const B=f+D+H*j,he=f+D+H*(j+1),pe=f+(D+1)+H*(j+1),_e=f+(D+1)+H*j;c.push(B,he,_e),c.push(he,pe,_e),ne+=6}a.addGroup(p,ne,S),p+=ne,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=$i(s[t]);for(const i in n)e[i]=n[i]}return e}function ff(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qc(s){return s.getRenderTarget()===null?s.outputColorSpace:$e.workingColorSpace}const df={clone:$i,merge:Ot};var pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=ff(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jc extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class zt extends jc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/h,i*=o.width/c,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Li=-90,Pi=1;class gf extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(Li,Pi,e,t);i.layers=this.layers,this.add(i);const r=new zt(Li,Pi,e,t);r.layers=this.layers,this.add(r);const o=new zt(Li,Pi,e,t);o.layers=this.layers,this.add(o);const a=new zt(Li,Pi,e,t);a.layers=this.layers,this.add(a);const c=new zt(Li,Pi,e,t);c.layers=this.layers,this.add(c);const h=new zt(Li,Pi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const h of t)this.remove(h);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,h,l]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yc extends At{constructor(e,t,n,i,r,o,a,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,n,i,r,o,a,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _f extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ui?dt:en),this.texture=new Yc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new qn(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Vn});r.uniforms.tEquirect.value=t;const o=new Ie(i,r),a=t.minFilter;return t.minFilter===fi&&(t.minFilter=Ft),new gf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const _o=new A,yf=new A,xf=new Ge;class si{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_o.subVectors(n,t).cross(yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xf.getNormalMatrix(e),i=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new dn,lr=new A;class oa{constructor(e=new si,t=new si,n=new si,i=new si,r=new si,o=new si){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],h=i[4],l=i[5],u=i[6],f=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-r,f-h,m-p,v-d).normalize(),n[1].setComponents(c+r,f+h,m+p,v+d).normalize(),n[2].setComponents(c+o,f+l,m+g,v+y).normalize(),n[3].setComponents(c-o,f-l,m-g,v-y).normalize(),n[4].setComponents(c-a,f-u,m-_,v-x).normalize(),t===Rn)n[5].setComponents(c+a,f+u,m+_,v+x).normalize();else if(t===Lr)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(e){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(lr.x=i.normal.x>0?e.max.x:e.min.x,lr.y=i.normal.y>0?e.max.y:e.min.y,lr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kc(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vf(s,e){const t=e.isWebGL2,n=new WeakMap;function i(h,l){const u=h.array,f=h.usage,p=s.createBuffer();s.bindBuffer(l,p),s.bufferData(l,u,f),h.onUploadCallback();let g;if(u instanceof Float32Array)g=s.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=s.SHORT;else if(u instanceof Uint32Array)g=s.UNSIGNED_INT;else if(u instanceof Int32Array)g=s.INT;else if(u instanceof Int8Array)g=s.BYTE;else if(u instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version}}function r(h,l,u){const f=l.array,p=l.updateRange;s.bindBuffer(u,h),p.count===-1?s.bufferSubData(u,0,f):(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),l.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const l=n.get(h);l&&(s.deleteBuffer(l.buffer),n.delete(h))}function c(h,l){if(h.isGLBufferAttribute){const f=n.get(h);(!f||f.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u===void 0?n.set(h,i(h,l)):u.version<h.version&&(r(u.buffer,h,l),u.version=h.version)}return{get:o,remove:a,update:c}}class lt extends Yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),h=a+1,l=c+1,u=e/a,f=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<l;d++){const y=d*f-o;for(let x=0;x<h;x++){const v=x*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){const x=y+h*d,v=y+h*(d+1),b=y+1+h*(d+1),C=y+1+h*d;p.push(x,v,C),p.push(v,b,C)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,If=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Gf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,id=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Yd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$d=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ip=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Mf,alphahash_pars_fragment:Sf,alphamap_fragment:Ef,alphamap_pars_fragment:Tf,alphatest_fragment:bf,alphatest_pars_fragment:wf,aomap_fragment:Af,aomap_pars_fragment:Rf,begin_vertex:Cf,beginnormal_vertex:Lf,bsdfs:Pf,iridescence_fragment:If,bumpmap_pars_fragment:Df,clipping_planes_fragment:Nf,clipping_planes_pars_fragment:Uf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:zf,color_fragment:Ff,color_pars_fragment:Bf,color_pars_vertex:kf,color_vertex:Hf,common:Gf,cube_uv_reflection_fragment:Vf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:jf,emissivemap_pars_fragment:Yf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Qf,envmap_pars_vertex:ed,envmap_physical_pars_fragment:fd,envmap_vertex:td,fog_vertex:nd,fog_pars_vertex:id,fog_fragment:sd,fog_pars_fragment:rd,gradientmap_pars_fragment:od,lightmap_fragment:ad,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:hd,lights_pars_begin:ud,lights_toon_fragment:dd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:yd,lights_fragment_begin:xd,lights_fragment_maps:vd,lights_fragment_end:Md,logdepthbuf_fragment:Sd,logdepthbuf_pars_fragment:Ed,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:bd,map_fragment:wd,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Ld,metalnessmap_pars_fragment:Pd,morphcolor_vertex:Id,morphnormal_vertex:Dd,morphtarget_pars_vertex:Nd,morphtarget_vertex:Ud,normal_fragment_begin:Od,normal_fragment_maps:zd,normal_pars_fragment:Fd,normal_pars_vertex:Bd,normal_vertex:kd,normalmap_pars_fragment:Hd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Vd,clearcoat_pars_fragment:Wd,iridescence_pars_fragment:Xd,opaque_fragment:qd,packing:jd,premultiplied_alpha_fragment:Yd,project_vertex:Kd,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:$d,roughnessmap_pars_fragment:Qd,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:tp,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:op,skinnormal_vertex:ap,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:fp,transmission_pars_fragment:dp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:yp,background_frag:xp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:Sp,cube_frag:Ep,depth_vert:Tp,depth_frag:bp,distanceRGBA_vert:wp,distanceRGBA_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Lp,linedashed_frag:Pp,meshbasic_vert:Ip,meshbasic_frag:Dp,meshlambert_vert:Np,meshlambert_frag:Up,meshmatcap_vert:Op,meshmatcap_frag:zp,meshnormal_vert:Fp,meshnormal_frag:Bp,meshphong_vert:kp,meshphong_frag:Hp,meshphysical_vert:Gp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:jp,shadow_vert:Yp,shadow_frag:Kp,sprite_vert:Zp,sprite_frag:Jp},le={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ln={basic:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ot([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ot([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ot([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new De(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ot([le.points,le.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ot([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ot([le.common,le.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ot([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ot([le.sprite,le.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Ot([le.common,le.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Ot([le.lights,le.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};ln.physical={uniforms:Ot([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const cr={r:0,b:0,g:0};function $p(s,e,t,n,i,r,o){const a=new De(0);let c=r===!0?0:1,h,l,u=null,f=0,p=null;function g(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Or)?(l===void 0&&(l=new Ie(new qn(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:$i(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=$e.getTransfer(x.colorSpace)!==ot,(u!==x||f!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Ie(new lt(2,2),new pi({name:"BackgroundMaterial",uniforms:$i(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=$e.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function _(m,d){m.getRGB(cr,qc(s)),n.buffers.color.setClear(cr.r,cr.g,cr.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function Qp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let h=c,l=!1;function u(I,H,q,W,ne){let K=!1;if(o){const j=_(W,q,H);h!==j&&(h=j,p(h.object)),K=d(I,W,q,ne),K&&y(I,W,q,ne)}else{const j=H.wireframe===!0;(h.geometry!==W.id||h.program!==q.id||h.wireframe!==j)&&(h.geometry=W.id,h.program=q.id,h.wireframe=j,K=!0)}ne!==null&&t.update(ne,s.ELEMENT_ARRAY_BUFFER),(K||l)&&(l=!1,U(I,H,q,W),ne!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?s.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?s.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function _(I,H,q){const W=q.wireframe===!0;let ne=a[I.id];ne===void 0&&(ne={},a[I.id]=ne);let K=ne[H.id];K===void 0&&(K={},ne[H.id]=K);let j=K[W];return j===void 0&&(j=m(f()),K[W]=j),j}function m(I){const H=[],q=[],W=[];for(let ne=0;ne<i;ne++)H[ne]=0,q[ne]=0,W[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:q,attributeDivisors:W,object:I,attributes:{},index:null}}function d(I,H,q,W){const ne=h.attributes,K=H.attributes;let j=0;const D=q.getAttributes();for(const B in D)if(D[B].location>=0){const pe=ne[B];let _e=K[B];if(_e===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(_e=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(_e=I.instanceColor)),pe===void 0||pe.attribute!==_e||_e&&pe.data!==_e.data)return!0;j++}return h.attributesNum!==j||h.index!==W}function y(I,H,q,W){const ne={},K=H.attributes;let j=0;const D=q.getAttributes();for(const B in D)if(D[B].location>=0){let pe=K[B];pe===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor));const _e={};_e.attribute=pe,pe&&pe.data&&(_e.data=pe.data),ne[B]=_e,j++}h.attributes=ne,h.attributesNum=j,h.index=W}function x(){const I=h.newAttributes;for(let H=0,q=I.length;H<q;H++)I[H]=0}function v(I){b(I,0)}function b(I,H){const q=h.newAttributes,W=h.enabledAttributes,ne=h.attributeDivisors;q[I]=1,W[I]===0&&(s.enableVertexAttribArray(I),W[I]=1),ne[I]!==H&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),ne[I]=H)}function C(){const I=h.newAttributes,H=h.enabledAttributes;for(let q=0,W=H.length;q<W;q++)H[q]!==I[q]&&(s.disableVertexAttribArray(q),H[q]=0)}function R(I,H,q,W,ne,K,j){j===!0?s.vertexAttribIPointer(I,H,q,ne,K):s.vertexAttribPointer(I,H,q,W,ne,K)}function U(I,H,q,W){if(n.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const ne=W.attributes,K=q.getAttributes(),j=H.defaultAttributeValues;for(const D in K){const B=K[D];if(B.location>=0){let he=ne[D];if(he===void 0&&(D==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),D==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),he!==void 0){const pe=he.normalized,_e=he.itemSize,Ee=t.get(he);if(Ee===void 0)continue;const Re=Ee.buffer,Te=Ee.type,Ue=Ee.bytesPerElement,Ke=n.isWebGL2===!0&&(Te===s.INT||Te===s.UNSIGNED_INT||he.gpuType===Cc);if(he.isInterleavedBufferAttribute){const be=he.data,L=be.stride,ae=he.offset;if(be.isInstancedInterleavedBuffer){for(let X=0;X<B.locationSize;X++)b(B.location+X,be.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let X=0;X<B.locationSize;X++)v(B.location+X);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let X=0;X<B.locationSize;X++)R(B.location+X,_e/B.locationSize,Te,pe,L*Ue,(ae+_e/B.locationSize*X)*Ue,Ke)}else{if(he.isInstancedBufferAttribute){for(let be=0;be<B.locationSize;be++)b(B.location+be,he.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let be=0;be<B.locationSize;be++)v(B.location+be);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let be=0;be<B.locationSize;be++)R(B.location+be,_e/B.locationSize,Te,pe,_e*Ue,_e/B.locationSize*be*Ue,Ke)}}else if(j!==void 0){const pe=j[D];if(pe!==void 0)switch(pe.length){case 2:s.vertexAttrib2fv(B.location,pe);break;case 3:s.vertexAttrib3fv(B.location,pe);break;case 4:s.vertexAttrib4fv(B.location,pe);break;default:s.vertexAttrib1fv(B.location,pe)}}}}C()}function S(){Z();for(const I in a){const H=a[I];for(const q in H){const W=H[q];for(const ne in W)g(W[ne].object),delete W[ne];delete H[q]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;const H=a[I.id];for(const q in H){const W=H[q];for(const ne in W)g(W[ne].object),delete W[ne];delete H[q]}delete a[I.id]}function G(I){for(const H in a){const q=a[H];if(q[I.id]===void 0)continue;const W=q[I.id];for(const ne in W)g(W[ne].object),delete W[ne];delete q[I.id]}}function Z(){$(),l=!0,h!==c&&(h=c,p(h.object))}function $(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:$,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:v,disableUnusedAttributes:C}}function em(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,l){s.drawArrays(r,h,l),t.update(l,r,1)}function c(h,l,u){if(u===0)return;let f,p;if(i)f=s,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,h,l,u),t.update(l,r,u)}this.setMode=o,this.render=a,this.renderInstances=c}function tm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=o||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,v=o||e.has("OES_texture_float"),b=x&&v,C=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:b,maxSamples:C}}function nm(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new si,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=l(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?l(null):h();else{const y=r?0:n,x=y*4;let v=d.clippingState||null;c.value=v,v=l(g,f,x,p);for(let b=0;b!==x;++b)v[b]=t[b];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function im(s){let e=new WeakMap;function t(o,a){return a===zo?o.mapping=ji:a===Fo&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===zo||a===Fo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const h=new _f(c.height/2);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class aa extends jc{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=l*this.view.offsetY,c=a-l*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,Tl=[.125,.215,.35,.446,.526,.582],ai=20,yo=new aa,bl=new De;let xo=null,vo=0,Mo=0;const ri=(1+Math.sqrt(5))/2,Ii=1/ri,wl=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,ri,Ii),new A(0,ri,-Ii),new A(Ii,0,ri),new A(-Ii,0,ri),new A(ri,Ii,0),new A(-ri,Ii,0)];class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xo,vo,Mo),e.scissorTest=!1,hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xo=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:Ls,format:Qt,colorSpace:Ct,depthBuffer:!1},i=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,e,t)}return i}_compileMaterial(e){const t=new Ie(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,i){const a=new zt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,f=l.toneMapping;l.getClearColor(bl),l.toneMapping=Wn,l.autoClear=!1;const p=new it({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new Ie(new qn,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(bl),_=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(h[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,h[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,h[d]));const x=this._cubeSize;hr(i,y*x,d>2?x:0,x,x),l.setRenderTarget(i),_&&l.render(g,a),l.render(e,a)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=f,l.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ji||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;hr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=wl[(i-1)%wl.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Ie(this._lodPlanes[i],h),f=h.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ai-1),_=r/g,m=isFinite(r)?1+Math.floor(l*_):ai;m>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ai}`);const d=[];let y=0;for(let R=0;R<ai;++R){const U=R/_,S=Math.exp(-U*U/2);d.push(S),R===0?y+=S:R<m&&(y+=2*S)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[i],b=3*v*(i>x-Oi?i-x+Oi:0),C=4*(this._cubeSize-v);hr(t,b,C,3*v,2*v),c.setRenderTarget(t),c.render(u,yo)}}function sm(s){const e=[],t=[],n=[];let i=s;const r=s-Oi+1+Tl.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Oi?c=Tl[o-s+Oi-1]:o===0&&(c=0),n.push(c);const h=1/(a-2),l=-h,u=1+h,f=[l,l,u,l,u,u,l,l,u,u,l,u],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,U=C>2?0:-1,S=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];y.set(S,_*g*C),x.set(f,m*g*C);const w=[C,C,C,C,C,C];v.set(w,d*g*C)}const b=new Yt;b.setAttribute("position",new Rt(y,_)),b.setAttribute("uv",new Rt(x,m)),b.setAttribute("faceIndex",new Rt(v,d)),e.push(b),i>Oi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(s,e,t){const n=new di(s,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rm(s,e,t){const n=new Float32Array(ai),i=new A(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Cl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ll(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:la(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function la(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function om(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===zo||c===Fo,l=c===ji||c===Yi;if(h||l)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Al(s)),u=h?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(h&&u&&u.height>0||l&&u&&i(u)){t===null&&(t=new Al(s));const f=h?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0;const h=6;for(let l=0;l<h;l++)a[l]!==void 0&&c++;return c===h}function r(a){const c=a.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function am(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function lm(s,e,t,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function h(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){const b=y[x+0],C=y[x+1],R=y[x+2];f.push(b,C,C,R,R,b)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const b=x+0,C=x+1,R=x+2;f.push(b,C,C,R,R,b)}}else return;const m=new(Bc(f)?Xc:Wc)(f,1);m.version=_;const d=r.get(u);d&&e.remove(d),r.set(u,m)}function l(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&h(u)}else h(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:l}}function cm(s,e,t,n){const i=n.isWebGL2;let r;function o(f){r=f}let a,c;function h(f){a=f.type,c=f.bytesPerElement}function l(f,p){s.drawElements(r,p,a,f*c),t.update(p,r,1)}function u(f,p,g){if(g===0)return;let _,m;if(i)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,f*c,g),t.update(p,r,g)}this.setMode=o,this.setIndex=h,this.render=l,this.renderInstances=u}function hm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function um(s,e){return s[0]-e[0]}function fm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function dm(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,l,u){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(l);if(m===void 0||m.count!==_){let H=function(){$.dispose(),r.delete(l),l.removeEventListener("dispose",H)};var p=H;m!==void 0&&m.texture.dispose();const x=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,b=l.morphAttributes.color!==void 0,C=l.morphAttributes.position||[],R=l.morphAttributes.normal||[],U=l.morphAttributes.color||[];let S=0;x===!0&&(S=1),v===!0&&(S=2),b===!0&&(S=3);let w=l.attributes.position.count*S,G=1;w>e.maxTextureSize&&(G=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const Z=new Float32Array(w*G*4*_),$=new Gc(Z,w,G,_);$.type=An,$.needsUpdate=!0;const I=S*4;for(let q=0;q<_;q++){const W=C[q],ne=R[q],K=U[q],j=w*G*4*q;for(let D=0;D<W.count;D++){const B=D*I;x===!0&&(o.fromBufferAttribute(W,D),Z[j+B+0]=o.x,Z[j+B+1]=o.y,Z[j+B+2]=o.z,Z[j+B+3]=0),v===!0&&(o.fromBufferAttribute(ne,D),Z[j+B+4]=o.x,Z[j+B+5]=o.y,Z[j+B+6]=o.z,Z[j+B+7]=0),b===!0&&(o.fromBufferAttribute(K,D),Z[j+B+8]=o.x,Z[j+B+9]=o.y,Z[j+B+10]=o.z,Z[j+B+11]=K.itemSize===4?o.w:1)}}m={count:_,texture:$,size:new ce(w,G)},r.set(l,m),l.addEventListener("dispose",H)}let d=0;for(let x=0;x<f.length;x++)d+=f[x];const y=l.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let _=n[l.id];if(_===void 0||_.length!==g){_=[];for(let v=0;v<g;v++)_[v]=[v,0];n[l.id]=_}for(let v=0;v<g;v++){const b=_[v];b[0]=v,b[1]=f[v]}_.sort(fm);for(let v=0;v<8;v++)v<g&&_[v][1]?(a[v][0]=_[v][0],a[v][1]=_[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(um);const m=l.morphAttributes.position,d=l.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const b=a[v],C=b[0],R=b[1];C!==Number.MAX_SAFE_INTEGER&&R?(m&&l.getAttribute("morphTarget"+v)!==m[C]&&l.setAttribute("morphTarget"+v,m[C]),d&&l.getAttribute("morphNormal"+v)!==d[C]&&l.setAttribute("morphNormal"+v,d[C]),i[v]=R,y+=R):(m&&l.hasAttribute("morphTarget"+v)===!0&&l.deleteAttribute("morphTarget"+v),d&&l.hasAttribute("morphNormal"+v)===!0&&l.deleteAttribute("morphNormal"+v),i[v]=0)}const x=l.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function pm(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,u=e.get(c,l);if(i.get(u)!==h&&(e.update(u),i.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return u}function o(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}const Zc=new At,Jc=new Gc,$c=new Qu,Qc=new Yc,Pl=[],Il=[],Dl=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function ss(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Pl[i];if(r===void 0&&(r=new Float32Array(i),Pl[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function vt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Fr(s,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function mm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function gm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function xm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Ul.set(n),s.uniformMatrix2fv(this.addr,!1,Ul),Mt(t,n)}}function vm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Nl.set(n),s.uniformMatrix3fv(this.addr,!1,Nl),Mt(t,n)}}function Mm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Dl.set(n),s.uniformMatrix4fv(this.addr,!1,Dl),Mt(t,n)}}function Sm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function Tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function bm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function wm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function Rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Lm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Zc,i)}function Pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$c,i)}function Im(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qc,i)}function Dm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jc,i)}function Nm(s){switch(s){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return ym;case 35674:return xm;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return bm;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Dm}}function Um(s,e){s.uniform1fv(this.addr,e)}function Om(s,e){const t=ss(e,this.size,2);s.uniform2fv(this.addr,t)}function zm(s,e){const t=ss(e,this.size,3);s.uniform3fv(this.addr,t)}function Fm(s,e){const t=ss(e,this.size,4);s.uniform4fv(this.addr,t)}function Bm(s,e){const t=ss(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function km(s,e){const t=ss(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Hm(s,e){const t=ss(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Gm(s,e){s.uniform1iv(this.addr,e)}function Vm(s,e){s.uniform2iv(this.addr,e)}function Wm(s,e){s.uniform3iv(this.addr,e)}function Xm(s,e){s.uniform4iv(this.addr,e)}function qm(s,e){s.uniform1uiv(this.addr,e)}function jm(s,e){s.uniform2uiv(this.addr,e)}function Ym(s,e){s.uniform3uiv(this.addr,e)}function Km(s,e){s.uniform4uiv(this.addr,e)}function Zm(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zc,r[o])}function Jm(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$c,r[o])}function $m(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Qc,r[o])}function Qm(s,e,t){const n=this.cache,i=e.length,r=Fr(t,i);vt(n,r)||(s.uniform1iv(this.addr,r),Mt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jc,r[o])}function eg(s){switch(s){case 5126:return Um;case 35664:return Om;case 35665:return zm;case 35666:return Fm;case 35674:return Bm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Gm;case 35667:case 35671:return Vm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return jm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Qm}}class tg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Nm(t.type)}}class ng{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=eg(t.type)}}class ig{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function Ol(s,e){s.seq.push(e),s.map[e.id]=e}function sg(s,e,t){const n=s.name,i=n.length;for(So.lastIndex=0;;){const r=So.exec(n),o=So.lastIndex;let a=r[1];const c=r[2]==="]",h=r[3];if(c&&(a=a|0),h===void 0||h==="["&&o+2===i){Ol(t,h===void 0?new tg(a,s,e):new ng(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new ig(a),Ol(t,u)),t=u}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);sg(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function zl(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const rg=37297;let og=0;function ag(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function lg(s){const e=$e.getPrimaries($e.workingColorSpace),t=$e.getPrimaries(s);let n;switch(e===t?n="":e===Cr&&t===Rr?n="LinearDisplayP3ToLinearSRGB":e===Rr&&t===Cr&&(n="LinearSRGBToLinearDisplayP3"),s){case Ct:case zr:return[n,"LinearTransferOETF"];case dt:case ia:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Fl(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ag(s.getShaderSource(e),o)}else return i}function cg(s,e){const t=lg(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hg(s,e){let t;switch(e){case ou:t="Linear";break;case au:t="Reinhard";break;case lu:t="OptimizedCineon";break;case cu:t="ACESFilmic";break;case hu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ug(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ys).join(`
`)}function fg(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ys(s){return s!==""}function Bl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(s){return s.replace(pg,gg)}const mg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function gg(s,e){let t=Be[e];if(t===void 0){const n=mg.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wo(t)}const _g=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(s){return s.replace(_g,yg)}function yg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gl(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Nh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function vg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ji:case Yi:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Sg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case wc:e="ENVMAP_BLENDING_MULTIPLY";break;case su:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function Eg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Tg(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=xg(t),h=vg(t),l=Mg(t),u=Sg(t),f=Eg(t),p=t.isWebGL2?"":ug(t),g=fg(r),_=i.createProgram();let m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ys).join(`
`),d.length>0&&(d+=`
`)):(m=[Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),d=[p,Gl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wn?"#define TONE_MAPPING":"",t.toneMapping!==Wn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Wn?hg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,cg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ys).join(`
`)),o=Wo(o),o=Bl(o,t),o=kl(o,t),a=Wo(a),a=Bl(a,t),a=kl(a,t),o=Hl(o),a=Hl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=y+m+o,v=y+d+a,b=zl(i,i.VERTEX_SHADER,x),C=zl(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(G){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(_).trim(),$=i.getShaderInfoLog(b).trim(),I=i.getShaderInfoLog(C).trim();let H=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,C);else{const W=Fl(i,b,"vertex"),ne=Fl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+W+`
`+ne)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||I==="")&&(q=!1);q&&(G.diagnostics={runnable:H,programLog:Z,vertexShader:{log:$,prefix:m},fragmentShader:{log:I,prefix:d}})}i.deleteShader(b),i.deleteShader(C),U=new Sr(i,_),S=dg(i,_)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(_,rg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=og++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=C,this}let bg=0;class wg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Ag(e),t.set(e,n)),n}}class Ag{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Rg(s,e,t,n,i,r,o){const a=new ra,c=new wg,h=[],l=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,G,Z,$){const I=Z.fog,H=$.geometry,q=S.isMeshStandardMaterial?Z.environment:null,W=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),ne=W&&W.mapping===Or?W.image.height:null,K=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const j=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,D=j!==void 0?j.length:0;let B=0;H.morphAttributes.position!==void 0&&(B=1),H.morphAttributes.normal!==void 0&&(B=2),H.morphAttributes.color!==void 0&&(B=3);let he,pe,_e,Ee;if(K){const gt=ln[K];he=gt.vertexShader,pe=gt.fragmentShader}else he=S.vertexShader,pe=S.fragmentShader,c.update(S),_e=c.getVertexShaderID(S),Ee=c.getFragmentShaderID(S);const Re=s.getRenderTarget(),Te=$.isInstancedMesh===!0,Ue=!!S.map,Ke=!!S.matcap,be=!!W,L=!!S.aoMap,ae=!!S.lightMap,X=!!S.bumpMap,Q=!!S.normalMap,Y=!!S.displacementMap,Me=!!S.emissiveMap,de=!!S.metalnessMap,ye=!!S.roughnessMap,Ne=S.anisotropy>0,Ve=S.clearcoat>0,ut=S.iridescence>0,T=S.sheen>0,M=S.transmission>0,O=Ne&&!!S.anisotropyMap,ee=Ve&&!!S.clearcoatMap,J=Ve&&!!S.clearcoatNormalMap,te=Ve&&!!S.clearcoatRoughnessMap,xe=ut&&!!S.iridescenceMap,re=ut&&!!S.iridescenceThicknessMap,ue=T&&!!S.sheenColorMap,Ce=T&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,ie=!!S.specularColorMap,et=!!S.specularIntensityMap,Oe=M&&!!S.transmissionMap,Le=M&&!!S.thicknessMap,Se=!!S.gradientMap,ge=!!S.alphaMap,je=S.alphaTest>0,P=!!S.alphaHash,fe=!!S.extensions,se=!!H.attributes.uv1,V=!!H.attributes.uv2,oe=!!H.attributes.uv3;let we=Wn;return S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(we=s.toneMapping),{isWebGL2:l,shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:pe,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Te,instancingColor:Te&&$.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ct,map:Ue,matcap:Ke,envMap:be,envMapMode:be&&W.mapping,envMapCubeUVHeight:ne,aoMap:L,lightMap:ae,bumpMap:X,normalMap:Q,displacementMap:f&&Y,emissiveMap:Me,normalMapObjectSpace:Q&&S.normalMapType===bu,normalMapTangentSpace:Q&&S.normalMapType===zc,metalnessMap:de,roughnessMap:ye,anisotropy:Ne,anisotropyMap:O,clearcoat:Ve,clearcoatMap:ee,clearcoatNormalMap:J,clearcoatRoughnessMap:te,iridescence:ut,iridescenceMap:xe,iridescenceThicknessMap:re,sheen:T,sheenColorMap:ue,sheenRoughnessMap:Ce,specularMap:Ze,specularColorMap:ie,specularIntensityMap:et,transmission:M,transmissionMap:Oe,thicknessMap:Le,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Hi,alphaMap:ge,alphaTest:je,alphaHash:P,combine:S.combine,mapUv:Ue&&_(S.map.channel),aoMapUv:L&&_(S.aoMap.channel),lightMapUv:ae&&_(S.lightMap.channel),bumpMapUv:X&&_(S.bumpMap.channel),normalMapUv:Q&&_(S.normalMap.channel),displacementMapUv:Y&&_(S.displacementMap.channel),emissiveMapUv:Me&&_(S.emissiveMap.channel),metalnessMapUv:de&&_(S.metalnessMap.channel),roughnessMapUv:ye&&_(S.roughnessMap.channel),anisotropyMapUv:O&&_(S.anisotropyMap.channel),clearcoatMapUv:ee&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:Ze&&_(S.specularMap.channel),specularColorMapUv:ie&&_(S.specularColorMap.channel),specularIntensityMapUv:et&&_(S.specularIntensityMap.channel),transmissionMapUv:Oe&&_(S.transmissionMap.channel),thicknessMapUv:Le&&_(S.thicknessMap.channel),alphaMapUv:ge&&_(S.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Q||Ne),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:V,vertexUv3s:oe,pointsUvs:$.isPoints===!0&&!!H.attributes.uv&&(Ue||ge),fog:!!I,useFog:S.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:$.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:B,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Bt,flipSided:S.side===Gt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)w.push(G),w.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(y(w,S),x(w,S),w.push(s.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function y(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function x(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function v(S){const w=g[S.type];let G;if(w){const Z=ln[w];G=df.clone(Z.uniforms)}else G=S.uniforms;return G}function b(S,w){let G;for(let Z=0,$=h.length;Z<$;Z++){const I=h[Z];if(I.cacheKey===w){G=I,++G.usedTimes;break}}return G===void 0&&(G=new Tg(s,w,S,r),h.push(G)),G}function C(S){if(--S.usedTimes===0){const w=h.indexOf(S);h[w]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:b,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:U}}function Cg(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Lg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Wl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,g,_,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),e++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function h(u,f){t.length>1&&t.sort(u||Lg),n.length>1&&n.sort(f||Vl),i.length>1&&i.sort(f||Vl)}function l(){for(let u=e,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:l,sort:h}}function Pg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Wl,s.set(n,[o])):i>=r.length?(o=new Wl,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ig(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new De};break;case"SpotLight":t={position:new A,direction:new A,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new A,halfWidth:new A,halfHeight:new A};break}return s[e.id]=t,t}}}function Dg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ng=0;function Ug(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Og(s,e){const t=new Ig,n=Dg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new A);const r=new A,o=new He,a=new He;function c(l,u){let f=0,p=0,g=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,v=0,b=0,C=0,R=0,U=0,S=0;l.sort(Ug);const w=u===!0?Math.PI:1;for(let Z=0,$=l.length;Z<$;Z++){const I=l[Z],H=I.color,q=I.intensity,W=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=H.r*q*w,p+=H.g*q*w,g+=H.b*q*w;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],q);S++}else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){const j=I.shadow,D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[_]=D,i.directionalShadowMap[_]=ne,i.directionalShadowMatrix[_]=I.shadow.matrix,v++}i.directional[_]=K,_++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(H).multiplyScalar(q*w),K.distance=W,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[d]=K;const j=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,j.updateMatrices(I),I.castShadow&&U++),i.spotLightMatrix[d]=j.matrix,I.castShadow){const D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[d]=D,i.spotShadowMap[d]=ne,C++}d++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(H).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=K,y++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*w),K.distance=I.distance,K.decay=I.decay,I.castShadow){const j=I.shadow,D=n.get(I);D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[m]=D,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=I.shadow.matrix,b++}i.point[m]=K,m++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(q*w),K.groundColor.copy(I.groundColor).multiplyScalar(q*w),i.hemi[x]=K,x++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const G=i.hash;(G.directionalLength!==_||G.pointLength!==m||G.spotLength!==d||G.rectAreaLength!==y||G.hemiLength!==x||G.numDirectionalShadows!==v||G.numPointShadows!==b||G.numSpotShadows!==C||G.numSpotMaps!==R||G.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=C+R-U,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=S,G.directionalLength=_,G.pointLength=m,G.spotLength=d,G.rectAreaLength=y,G.hemiLength=x,G.numDirectionalShadows=v,G.numPointShadows=b,G.numSpotShadows=C,G.numSpotMaps=R,G.numLightProbes=S,i.version=Ng++)}function h(l,u){let f=0,p=0,g=0,_=0,m=0;const d=u.matrixWorldInverse;for(let y=0,x=l.length;y<x;y++){const v=l[y];if(v.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),f++}else if(v.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(d),g++}else if(v.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const b=i.point[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){const b=i.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(d),m++}}}return{setup:c,setupView:h,state:i}}function Xl(s,e){const t=new Og(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function c(u){t.setup(n,u)}function h(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a}}function zg(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Xl(s,e),t.set(r,[c])):o>=a.length?(c=new Xl(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Fg extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Eu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bg extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gg(s,e,t){let n=new oa;const i=new ce,r=new ce,o=new nt,a=new Fg({depthPacking:Tu}),c=new Bg,h={},l=t.maxTextureSize,u={[Cn]:Gt,[Gt]:Cn,[Bt]:Bt},f=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:kg,fragmentShader:Hg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Yt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let d=this.type;this.render=function(b,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const U=s.getRenderTarget(),S=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Vn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const Z=d!==Tn&&this.type===Tn,$=d===Tn&&this.type!==Tn;for(let I=0,H=b.length;I<H;I++){const q=b[I],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ne=W.getFrameExtents();if(i.multiply(ne),r.copy(W.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/ne.x),i.x=r.x*ne.x,W.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/ne.y),i.y=r.y*ne.y,W.mapSize.y=r.y)),W.map===null||Z===!0||$===!0){const j=this.type!==Tn?{minFilter:Tt,magFilter:Tt}:{};W.map!==null&&W.map.dispose(),W.map=new di(i.x,i.y,j),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const K=W.getViewportCount();for(let j=0;j<K;j++){const D=W.getViewport(j);o.set(r.x*D.x,r.y*D.y,r.x*D.z,r.y*D.w),G.viewport(o),W.updateMatrices(q,j),n=W.getFrustum(),v(C,R,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Tn&&y(W,R),W.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(U,S,w)};function y(b,C){const R=e.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new di(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(C,null,R,f,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(C,null,R,p,_,null)}function x(b,C,R,U){let S=null;const w=R.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)S=w;else if(S=R.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=S.uuid,Z=C.uuid;let $=h[G];$===void 0&&($={},h[G]=$);let I=$[Z];I===void 0&&(I=S.clone(),$[Z]=I),S=I}if(S.visible=C.visible,S.wireframe=C.wireframe,U===Tn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const G=s.properties.get(S);G.light=R}return S}function v(b,C,R,U,S){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Tn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),$=b.material;if(Array.isArray($)){const I=Z.groups;for(let H=0,q=I.length;H<q;H++){const W=I[H],ne=$[W.materialIndex];if(ne&&ne.visible){const K=x(b,ne,U,S);s.renderBufferDirect(R,null,Z,K,b,W)}}}else if($.visible){const I=x(b,$,U,S);s.renderBufferDirect(R,null,Z,I,b,null)}}const G=b.children;for(let Z=0,$=G.length;Z<$;Z++)v(G[Z],C,R,U,S)}}function Vg(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const fe=new nt;let se=null;const V=new nt(0,0,0,0);return{setMask:function(oe){se!==oe&&!P&&(s.colorMask(oe,oe,oe,oe),se=oe)},setLocked:function(oe){P=oe},setClear:function(oe,we,Je,gt,Kt){Kt===!0&&(oe*=gt,we*=gt,Je*=gt),fe.set(oe,we,Je,gt),V.equals(fe)===!1&&(s.clearColor(oe,we,Je,gt),V.copy(fe))},reset:function(){P=!1,se=null,V.set(-1,0,0,0)}}}function r(){let P=!1,fe=null,se=null,V=null;return{setTest:function(oe){oe?Ue(s.DEPTH_TEST):Ke(s.DEPTH_TEST)},setMask:function(oe){fe!==oe&&!P&&(s.depthMask(oe),fe=oe)},setFunc:function(oe){if(se!==oe){switch(oe){case Jh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case br:s.depthFunc(s.LEQUAL);break;case eu:s.depthFunc(s.EQUAL);break;case tu:s.depthFunc(s.GEQUAL);break;case nu:s.depthFunc(s.GREATER);break;case iu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=oe}},setLocked:function(oe){P=oe},setClear:function(oe){V!==oe&&(s.clearDepth(oe),V=oe)},reset:function(){P=!1,fe=null,se=null,V=null}}}function o(){let P=!1,fe=null,se=null,V=null,oe=null,we=null,Je=null,gt=null,Kt=null;return{setTest:function(rt){P||(rt?Ue(s.STENCIL_TEST):Ke(s.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!P&&(s.stencilMask(rt),fe=rt)},setFunc:function(rt,Dt,an){(se!==rt||V!==Dt||oe!==an)&&(s.stencilFunc(rt,Dt,an),se=rt,V=Dt,oe=an)},setOp:function(rt,Dt,an){(we!==rt||Je!==Dt||gt!==an)&&(s.stencilOp(rt,Dt,an),we=rt,Je=Dt,gt=an)},setLocked:function(rt){P=rt},setClear:function(rt){Kt!==rt&&(s.clearStencil(rt),Kt=rt)},reset:function(){P=!1,fe=null,se=null,V=null,oe=null,we=null,Je=null,gt=null,Kt=null}}}const a=new i,c=new r,h=new o,l=new WeakMap,u=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,b=null,C=null,R=null,U=null,S=new De(0,0,0),w=0,G=!1,Z=null,$=null,I=null,H=null,q=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=K>=2);let D=null,B={};const he=s.getParameter(s.SCISSOR_BOX),pe=s.getParameter(s.VIEWPORT),_e=new nt().fromArray(he),Ee=new nt().fromArray(pe);function Re(P,fe,se,V){const oe=new Uint8Array(4),we=s.createTexture();s.bindTexture(P,we),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<se;Je++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(fe,0,s.RGBA,1,1,V,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(fe+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return we}const Te={};Te[s.TEXTURE_2D]=Re(s.TEXTURE_2D,s.TEXTURE_2D,1),Te[s.TEXTURE_CUBE_MAP]=Re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Te[s.TEXTURE_2D_ARRAY]=Re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Te[s.TEXTURE_3D]=Re(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ue(s.DEPTH_TEST),c.setFunc(br),de(!1),ye(Ta),Ue(s.CULL_FACE),Y(Vn);function Ue(P){f[P]!==!0&&(s.enable(P),f[P]=!0)}function Ke(P){f[P]!==!1&&(s.disable(P),f[P]=!1)}function be(P,fe){return p[P]!==fe?(s.bindFramebuffer(P,fe),p[P]=fe,n&&(P===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=fe),P===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=fe)),!0):!1}function L(P,fe){let se=_,V=!1;if(P)if(se=g.get(fe),se===void 0&&(se=[],g.set(fe,se)),P.isWebGLMultipleRenderTargets){const oe=P.texture;if(se.length!==oe.length||se[0]!==s.COLOR_ATTACHMENT0){for(let we=0,Je=oe.length;we<Je;we++)se[we]=s.COLOR_ATTACHMENT0+we;se.length=oe.length,V=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,V=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,V=!0);V&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function ae(P){return m!==P?(s.useProgram(P),m=P,!0):!1}const X={[oi]:s.FUNC_ADD,[Oh]:s.FUNC_SUBTRACT,[zh]:s.FUNC_REVERSE_SUBTRACT};if(n)X[Ra]=s.MIN,X[Ca]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(X[Ra]=P.MIN_EXT,X[Ca]=P.MAX_EXT)}const Q={[Fh]:s.ZERO,[Bh]:s.ONE,[kh]:s.SRC_COLOR,[Uo]:s.SRC_ALPHA,[qh]:s.SRC_ALPHA_SATURATE,[Wh]:s.DST_COLOR,[Gh]:s.DST_ALPHA,[Hh]:s.ONE_MINUS_SRC_COLOR,[Oo]:s.ONE_MINUS_SRC_ALPHA,[Xh]:s.ONE_MINUS_DST_COLOR,[Vh]:s.ONE_MINUS_DST_ALPHA,[jh]:s.CONSTANT_COLOR,[Yh]:s.ONE_MINUS_CONSTANT_COLOR,[Kh]:s.CONSTANT_ALPHA,[Zh]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(P,fe,se,V,oe,we,Je,gt,Kt,rt){if(P===Vn){d===!0&&(Ke(s.BLEND),d=!1);return}if(d===!1&&(Ue(s.BLEND),d=!0),P!==Uh){if(P!==y||rt!==G){if((x!==oi||C!==oi)&&(s.blendEquation(s.FUNC_ADD),x=oi,C=oi),rt)switch(P){case Hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.ONE,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Aa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Aa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,b=null,R=null,U=null,S.set(0,0,0),w=0,y=P,G=rt}return}oe=oe||fe,we=we||se,Je=Je||V,(fe!==x||oe!==C)&&(s.blendEquationSeparate(X[fe],X[oe]),x=fe,C=oe),(se!==v||V!==b||we!==R||Je!==U)&&(s.blendFuncSeparate(Q[se],Q[V],Q[we],Q[Je]),v=se,b=V,R=we,U=Je),(gt.equals(S)===!1||Kt!==w)&&(s.blendColor(gt.r,gt.g,gt.b,Kt),S.copy(gt),w=Kt),y=P,G=!1}function Me(P,fe){P.side===Bt?Ke(s.CULL_FACE):Ue(s.CULL_FACE);let se=P.side===Gt;fe&&(se=!se),de(se),P.blending===Hi&&P.transparent===!1?Y(Vn):Y(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);const V=P.stencilWrite;h.setTest(V),V&&(h.setMask(P.stencilWriteMask),h.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),h.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ke(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(P){Z!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),Z=P)}function ye(P){P!==Ih?(Ue(s.CULL_FACE),P!==$&&(P===Ta?s.cullFace(s.BACK):P===Dh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ke(s.CULL_FACE),$=P}function Ne(P){P!==I&&(ne&&s.lineWidth(P),I=P)}function Ve(P,fe,se){P?(Ue(s.POLYGON_OFFSET_FILL),(H!==fe||q!==se)&&(s.polygonOffset(fe,se),H=fe,q=se)):Ke(s.POLYGON_OFFSET_FILL)}function ut(P){P?Ue(s.SCISSOR_TEST):Ke(s.SCISSOR_TEST)}function T(P){P===void 0&&(P=s.TEXTURE0+W-1),D!==P&&(s.activeTexture(P),D=P)}function M(P,fe,se){se===void 0&&(D===null?se=s.TEXTURE0+W-1:se=D);let V=B[se];V===void 0&&(V={type:void 0,texture:void 0},B[se]=V),(V.type!==P||V.texture!==fe)&&(D!==se&&(s.activeTexture(se),D=se),s.bindTexture(P,fe||Te[P]),V.type=P,V.texture=fe)}function O(){const P=B[D];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ue(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){_e.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),_e.copy(P))}function Le(P){Ee.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),Ee.copy(P))}function Se(P,fe){let se=u.get(fe);se===void 0&&(se=new WeakMap,u.set(fe,se));let V=se.get(P);V===void 0&&(V=s.getUniformBlockIndex(fe,P.name),se.set(P,V))}function ge(P,fe){const V=u.get(fe).get(P);l.get(fe)!==V&&(s.uniformBlockBinding(fe,V,P.__bindingPointIndex),l.set(fe,V))}function je(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},D=null,B={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,b=null,C=null,R=null,U=null,S=new De(0,0,0),w=0,G=!1,Z=null,$=null,I=null,H=null,q=null,_e.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:Ue,disable:Ke,bindFramebuffer:be,drawBuffers:L,useProgram:ae,setBlending:Y,setMaterial:Me,setFlipSided:de,setCullFace:ye,setLineWidth:Ne,setPolygonOffset:Ve,setScissorTest:ut,activeTexture:T,bindTexture:M,unbindTexture:O,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:ie,texImage3D:et,updateUBOMapping:Se,uniformBlockBinding:ge,texStorage2D:Ce,texStorage3D:Ze,texSubImage2D:te,texSubImage3D:xe,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Oe,viewport:Le,reset:je}}function Wg(s,e,t,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,h=i.maxCubemapSize,l=i.maxTextureSize,u=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,M){return d?new OffscreenCanvas(T,M):Is("canvas")}function x(T,M,O,ee){let J=1;if((T.width>ee||T.height>ee)&&(J=ee/Math.max(T.width,T.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const te=M?Pr:Math.floor,xe=te(J*T.width),re=te(J*T.height);_===void 0&&(_=y(xe,re));const ue=O?y(xe,re):_;return ue.width=xe,ue.height=re,ue.getContext("2d").drawImage(T,0,0,xe,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+xe+"x"+re+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function v(T){return Vo(T.width)&&Vo(T.height)}function b(T){return a?!1:T.wrapS!==$t||T.wrapT!==$t||T.minFilter!==Tt&&T.minFilter!==Ft}function C(T,M){return T.generateMipmaps&&M&&T.minFilter!==Tt&&T.minFilter!==Ft}function R(T){s.generateMipmap(T)}function U(T,M,O,ee,J=!1){if(a===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let te=M;if(M===s.RED&&(O===s.FLOAT&&(te=s.R32F),O===s.HALF_FLOAT&&(te=s.R16F),O===s.UNSIGNED_BYTE&&(te=s.R8)),M===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(te=s.R8UI),O===s.UNSIGNED_SHORT&&(te=s.R16UI),O===s.UNSIGNED_INT&&(te=s.R32UI),O===s.BYTE&&(te=s.R8I),O===s.SHORT&&(te=s.R16I),O===s.INT&&(te=s.R32I)),M===s.RG&&(O===s.FLOAT&&(te=s.RG32F),O===s.HALF_FLOAT&&(te=s.RG16F),O===s.UNSIGNED_BYTE&&(te=s.RG8)),M===s.RGBA){const xe=J?Ar:$e.getTransfer(ee);O===s.FLOAT&&(te=s.RGBA32F),O===s.HALF_FLOAT&&(te=s.RGBA16F),O===s.UNSIGNED_BYTE&&(te=xe===ot?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(T,M,O){return C(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==Tt&&T.minFilter!==Ft?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function w(T){return T===Tt||T===Bo||T===Mr?s.NEAREST:s.LINEAR}function G(T){const M=T.target;M.removeEventListener("dispose",G),$(M),M.isVideoTexture&&g.delete(M)}function Z(T){const M=T.target;M.removeEventListener("dispose",Z),H(M)}function $(T){const M=n.get(T);if(M.__webglInit===void 0)return;const O=T.source,ee=m.get(O);if(ee){const J=ee[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(T),Object.keys(ee).length===0&&m.delete(O)}n.remove(T)}function I(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const O=T.source,ee=m.get(O);delete ee[M.__cacheKey],o.memory.textures--}function H(T){const M=T.texture,O=n.get(T),ee=n.get(M);if(ee.__webglTexture!==void 0&&(s.deleteTexture(ee.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(O.__webglFramebuffer[J]))for(let te=0;te<O.__webglFramebuffer[J].length;te++)s.deleteFramebuffer(O.__webglFramebuffer[J][te]);else s.deleteFramebuffer(O.__webglFramebuffer[J]);O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer[J])}else{if(Array.isArray(O.__webglFramebuffer))for(let J=0;J<O.__webglFramebuffer.length;J++)s.deleteFramebuffer(O.__webglFramebuffer[J]);else s.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&s.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&s.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let J=0;J<O.__webglColorRenderbuffer.length;J++)O.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(O.__webglColorRenderbuffer[J]);O.__webglDepthRenderbuffer&&s.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,te=M.length;J<te;J++){const xe=n.get(M[J]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(T)}let q=0;function W(){q=0}function ne(){const T=q;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),q+=1,T}function K(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function j(T,M){const O=n.get(T);if(T.isVideoTexture&&Ve(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(O,T,M);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+M)}function D(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Ue(O,T,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+M)}function B(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Ue(O,T,M);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+M)}function he(T,M){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Ke(O,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+M)}const pe={[Ht]:s.REPEAT,[$t]:s.CLAMP_TO_EDGE,[wr]:s.MIRRORED_REPEAT},_e={[Tt]:s.NEAREST,[Bo]:s.NEAREST_MIPMAP_NEAREST,[Mr]:s.NEAREST_MIPMAP_LINEAR,[Ft]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},Ee={[wu]:s.NEVER,[Du]:s.ALWAYS,[Au]:s.LESS,[Cu]:s.LEQUAL,[Ru]:s.EQUAL,[Iu]:s.GEQUAL,[Lu]:s.GREATER,[Pu]:s.NOTEQUAL};function Re(T,M,O){if(O?(s.texParameteri(T,s.TEXTURE_WRAP_S,pe[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,pe[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,pe[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,_e[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,_e[M.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==$t||M.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(M.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Tt&&M.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Tt||M.minFilter!==Mr&&M.minFilter!==fi||M.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ls&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Te(T,M){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",G));const ee=M.source;let J=m.get(ee);J===void 0&&(J={},m.set(ee,J));const te=K(M);if(te!==T.__cacheKey){J[te]===void 0&&(J[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[te].usedTimes++;const xe=J[T.__cacheKey];xe!==void 0&&(J[T.__cacheKey].usedTimes--,xe.usedTimes===0&&I(M)),T.__cacheKey=te,T.__webglTexture=J[te].texture}return O}function Ue(T,M,O){let ee=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=s.TEXTURE_3D);const J=Te(T,M),te=M.source;t.bindTexture(ee,T.__webglTexture,s.TEXTURE0+O);const xe=n.get(te);if(te.version!==xe.__version||J===!0){t.activeTexture(s.TEXTURE0+O);const re=$e.getPrimaries($e.workingColorSpace),ue=M.colorSpace===en?null:$e.getPrimaries(M.colorSpace),Ce=M.colorSpace===en||re===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Ze=b(M)&&v(M.image)===!1;let ie=x(M.image,Ze,!1,l);ie=ut(M,ie);const et=v(ie)||a,Oe=r.convert(M.format,M.colorSpace);let Le=r.convert(M.type),Se=U(M.internalFormat,Oe,Le,M.colorSpace,M.isVideoTexture);Re(ee,M,et);let ge;const je=M.mipmaps,P=a&&M.isVideoTexture!==!0,fe=xe.__version===void 0||J===!0,se=S(M,ie,et);if(M.isDepthTexture)Se=s.DEPTH_COMPONENT,a?M.type===An?Se=s.DEPTH_COMPONENT32F:M.type===Gn?Se=s.DEPTH_COMPONENT24:M.type===ci?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:M.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===hi&&Se===s.DEPTH_COMPONENT&&M.type!==na&&M.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Gn,Le=r.convert(M.type)),M.format===Ki&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,M.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ci,Le=r.convert(M.type))),fe&&(P?t.texStorage2D(s.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Se,ie.width,ie.height,0,Oe,Le,null));else if(M.isDataTexture)if(je.length>0&&et){P&&fe&&t.texStorage2D(s.TEXTURE_2D,se,Se,je[0].width,je[0].height);for(let V=0,oe=je.length;V<oe;V++)ge=je[V],P?t.texSubImage2D(s.TEXTURE_2D,V,0,0,ge.width,ge.height,Oe,Le,ge.data):t.texImage2D(s.TEXTURE_2D,V,Se,ge.width,ge.height,0,Oe,Le,ge.data);M.generateMipmaps=!1}else P?(fe&&t.texStorage2D(s.TEXTURE_2D,se,Se,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie.width,ie.height,Oe,Le,ie.data)):t.texImage2D(s.TEXTURE_2D,0,Se,ie.width,ie.height,0,Oe,Le,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){P&&fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Se,je[0].width,je[0].height,ie.depth);for(let V=0,oe=je.length;V<oe;V++)ge=je[V],M.format!==Qt?Oe!==null?P?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ie.depth,Oe,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Se,ge.width,ge.height,ie.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,ge.width,ge.height,ie.depth,Oe,Le,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Se,ge.width,ge.height,ie.depth,0,Oe,Le,ge.data)}else{P&&fe&&t.texStorage2D(s.TEXTURE_2D,se,Se,je[0].width,je[0].height);for(let V=0,oe=je.length;V<oe;V++)ge=je[V],M.format!==Qt?Oe!==null?P?t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,ge.width,ge.height,Oe,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?t.texSubImage2D(s.TEXTURE_2D,V,0,0,ge.width,ge.height,Oe,Le,ge.data):t.texImage2D(s.TEXTURE_2D,V,Se,ge.width,ge.height,0,Oe,Le,ge.data)}else if(M.isDataArrayTexture)P?(fe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Se,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Oe,Le,ie.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,Oe,Le,ie.data);else if(M.isData3DTexture)P?(fe&&t.texStorage3D(s.TEXTURE_3D,se,Se,ie.width,ie.height,ie.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Oe,Le,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,Oe,Le,ie.data);else if(M.isFramebufferTexture){if(fe)if(P)t.texStorage2D(s.TEXTURE_2D,se,Se,ie.width,ie.height);else{let V=ie.width,oe=ie.height;for(let we=0;we<se;we++)t.texImage2D(s.TEXTURE_2D,we,Se,V,oe,0,Oe,Le,null),V>>=1,oe>>=1}}else if(je.length>0&&et){P&&fe&&t.texStorage2D(s.TEXTURE_2D,se,Se,je[0].width,je[0].height);for(let V=0,oe=je.length;V<oe;V++)ge=je[V],P?t.texSubImage2D(s.TEXTURE_2D,V,0,0,Oe,Le,ge):t.texImage2D(s.TEXTURE_2D,V,Se,Oe,Le,ge);M.generateMipmaps=!1}else P?(fe&&t.texStorage2D(s.TEXTURE_2D,se,Se,ie.width,ie.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Le,ie)):t.texImage2D(s.TEXTURE_2D,0,Se,Oe,Le,ie);C(M,et)&&R(ee),xe.__version=te.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Ke(T,M,O){if(M.image.length!==6)return;const ee=Te(T,M),J=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const te=n.get(J);if(J.version!==te.__version||ee===!0){t.activeTexture(s.TEXTURE0+O);const xe=$e.getPrimaries($e.workingColorSpace),re=M.colorSpace===en?null:$e.getPrimaries(M.colorSpace),ue=M.colorSpace===en||xe===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ze=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let V=0;V<6;V++)!Ce&&!Ze?ie[V]=x(M.image[V],!1,!0,h):ie[V]=Ze?M.image[V].image:M.image[V],ie[V]=ut(M,ie[V]);const et=ie[0],Oe=v(et)||a,Le=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),ge=U(M.internalFormat,Le,Se,M.colorSpace),je=a&&M.isVideoTexture!==!0,P=te.__version===void 0||ee===!0;let fe=S(M,et,Oe);Re(s.TEXTURE_CUBE_MAP,M,Oe);let se;if(Ce){je&&P&&t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ge,et.width,et.height);for(let V=0;V<6;V++){se=ie[V].mipmaps;for(let oe=0;oe<se.length;oe++){const we=se[oe];M.format!==Qt?Le!==null?je?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,we.width,we.height,Le,we.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,ge,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,0,0,we.width,we.height,Le,Se,we.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe,ge,we.width,we.height,0,Le,Se,we.data)}}}else{se=M.mipmaps,je&&P&&(se.length>0&&fe++,t.texStorage2D(s.TEXTURE_CUBE_MAP,fe,ge,ie[0].width,ie[0].height));for(let V=0;V<6;V++)if(Ze){je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ie[V].width,ie[V].height,Le,Se,ie[V].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ge,ie[V].width,ie[V].height,0,Le,Se,ie[V].data);for(let oe=0;oe<se.length;oe++){const Je=se[oe].image[V].image;je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,Je.width,Je.height,Le,Se,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,ge,Je.width,Je.height,0,Le,Se,Je.data)}}else{je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Le,Se,ie[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,ge,Le,Se,ie[V]);for(let oe=0;oe<se.length;oe++){const we=se[oe];je?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,0,0,Le,Se,we.image[V]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+V,oe+1,ge,Le,Se,we.image[V])}}}C(M,Oe)&&R(s.TEXTURE_CUBE_MAP),te.__version=J.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function be(T,M,O,ee,J,te){const xe=r.convert(O.format,O.colorSpace),re=r.convert(O.type),ue=U(O.internalFormat,xe,re,O.colorSpace);if(!n.get(M).__hasExternalTextures){const Ze=Math.max(1,M.width>>te),ie=Math.max(1,M.height>>te);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?t.texImage3D(J,te,ue,Ze,ie,M.depth,0,xe,re,null):t.texImage2D(J,te,ue,Ze,ie,0,xe,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ne(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,0,ye(M)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,J,n.get(O).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function L(T,M,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ee=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(O||Ne(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===An?ee=s.DEPTH_COMPONENT32F:J.type===Gn&&(ee=s.DEPTH_COMPONENT24));const te=ye(M);Ne(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ee,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ee,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ee,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const ee=ye(M);O&&Ne(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,M.width,M.height):Ne(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<ee.length;J++){const te=ee[J],xe=r.convert(te.format,te.colorSpace),re=r.convert(te.type),ue=U(te.internalFormat,xe,re,te.colorSpace),Ce=ye(M);O&&Ne(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ue,M.width,M.height):Ne(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ue,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,J=ye(M);if(M.depthTexture.format===hi)Ne(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Ki)Ne(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function X(T){const M=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,T)}else if(O){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=s.createRenderbuffer(),L(M.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),L(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(T,M,O){const ee=n.get(T);M!==void 0&&be(ee.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&X(T)}function Y(T){const M=T.texture,O=n.get(T),ee=n.get(M);T.addEventListener("dispose",Z),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=M.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,te=T.isWebGLMultipleRenderTargets===!0,xe=v(T)||a;if(J){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let ue=0;ue<M.mipmaps.length;ue++)O.__webglFramebuffer[re][ue]=s.createFramebuffer()}else O.__webglFramebuffer[re]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)O.__webglFramebuffer[re]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){const re=T.texture;for(let ue=0,Ce=re.length;ue<Ce;ue++){const Ze=n.get(re[ue]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Ne(T)===!1){const re=te?M:[M];O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ue=0;ue<re.length;ue++){const Ce=re[ue];O.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ue]);const Ze=r.convert(Ce.format,Ce.colorSpace),ie=r.convert(Ce.type),et=U(Ce.internalFormat,Ze,ie,Ce.colorSpace,T.isXRRenderTarget===!0),Oe=ye(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,et,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,O.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),L(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Re(s.TEXTURE_CUBE_MAP,M,xe);for(let re=0;re<6;re++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)be(O.__webglFramebuffer[re][ue],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else be(O.__webglFramebuffer[re],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);C(M,xe)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const re=T.texture;for(let ue=0,Ce=re.length;ue<Ce;ue++){const Ze=re[ue],ie=n.get(Ze);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture),Re(s.TEXTURE_2D,Ze,xe),be(O.__webglFramebuffer,T,Ze,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),C(Ze,xe)&&R(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?re=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,ee.__webglTexture),Re(re,M,xe),a&&M.mipmaps&&M.mipmaps.length>0)for(let ue=0;ue<M.mipmaps.length;ue++)be(O.__webglFramebuffer[ue],T,M,s.COLOR_ATTACHMENT0,re,ue);else be(O.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,re,0);C(M,xe)&&R(re),t.unbindTexture()}T.depthBuffer&&X(T)}function Me(T){const M=v(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,J=O.length;ee<J;ee++){const te=O[ee];if(C(te,M)){const xe=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(te).__webglTexture;t.bindTexture(xe,re),R(xe),t.unbindTexture()}}}function de(T){if(a&&T.samples>0&&Ne(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,ee=T.height;let J=s.COLOR_BUFFER_BIT;const te=[],xe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(T),ue=T.isWebGLMultipleRenderTargets===!0;if(ue)for(let Ce=0;Ce<M.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){te.push(s.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&te.push(xe);const Ze=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ze===!1&&(T.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ue&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ce]),Ze===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xe])),ue){const ie=n.get(M[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,O,ee,0,0,O,ee,J,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<M.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ce]);const Ze=n.get(M[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function ye(T){return Math.min(u,T.samples)}function Ne(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ve(T){const M=o.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function ut(T,M){const O=T.colorSpace,ee=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Go||O!==Ct&&O!==en&&($e.getTransfer(O)===ot?a===!1?e.has("EXT_sRGB")===!0&&ee===Qt?(T.format=Go,T.minFilter=Ft,T.generateMipmaps=!1):M=kc.sRGBToLinear(M):(ee!==Qt||J!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}this.allocateTextureUnit=ne,this.resetTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=he,this.rebindTextures=Q,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ne}function Xg(s,e,t){const n=t.isWebGL2;function i(r,o=en){let a;const c=$e.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===Lc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===fu)return s.BYTE;if(r===du)return s.SHORT;if(r===na)return s.UNSIGNED_SHORT;if(r===Cc)return s.INT;if(r===Gn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===Ls)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pu)return s.ALPHA;if(r===Qt)return s.RGBA;if(r===mu)return s.LUMINANCE;if(r===gu)return s.LUMINANCE_ALPHA;if(r===hi)return s.DEPTH_COMPONENT;if(r===Ki)return s.DEPTH_STENCIL;if(r===Go)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===_u)return s.RED;if(r===Ic)return s.RED_INTEGER;if(r===yu)return s.RG;if(r===Dc)return s.RG_INTEGER;if(r===Nc)return s.RGBA_INTEGER;if(r===Yr||r===Kr||r===Zr||r===Jr)if(c===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Yr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Yr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pa||r===Ia||r===Da||r===Na)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Pa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Da)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Ua||r===Oa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ua)return c===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Oa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===za||r===Fa||r===Ba||r===ka||r===Ha||r===Ga||r===Va||r===Wa||r===Xa||r===qa||r===ja||r===Ya||r===Ka||r===Za)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===za)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ba)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ka)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ha)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ga)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Va)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qa)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ja)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ya)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ka)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Za)return c===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===$r||r===Ja||r===$a)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===$r)return c===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ja)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===$a)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vu||r===Qa||r===el||r===tl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===$r)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qa)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===el)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ci?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class qg extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ct extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jg={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(h,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const l=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],f=l.position.distanceTo(u.position),p=.02,g=.005;h.inputState.pinching&&f>p+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=p-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Yg extends At{constructor(e,t,n,i,r,o,a,c,h,l){if(l=l!==void 0?l:hi,l!==hi&&l!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===hi&&(n=Gn),n===void 0&&l===Ki&&(n=ci),super(null,i,r,o,a,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tt,this.minFilter=c!==void 0?c:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kg extends is{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,h=null,l=null,u=null,f=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const y=[],x=[],v=new zt;v.layers.enable(1),v.viewport=new nt;const b=new zt;b.layers.enable(2),b.viewport=new nt;const C=[v,b],R=new qg;R.layers.enable(1),R.layers.enable(2);let U=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let B=y[D];return B===void 0&&(B=new Eo,y[D]=B),B.getTargetRaySpace()},this.getControllerGrip=function(D){let B=y[D];return B===void 0&&(B=new Eo,y[D]=B),B.getGripSpace()},this.getHand=function(D){let B=y[D];return B===void 0&&(B=new Eo,y[D]=B),B.getHandSpace()};function w(D){const B=x.indexOf(D.inputSource);if(B===-1)return;const he=y[B];he!==void 0&&(he.update(D.inputSource,D.frame,h||o),he.dispatchEvent({type:D.type,data:D.inputSource}))}function G(){i.removeEventListener("select",w),i.removeEventListener("selectstart",w),i.removeEventListener("selectend",w),i.removeEventListener("squeeze",w),i.removeEventListener("squeezestart",w),i.removeEventListener("squeezeend",w),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Z);for(let D=0;D<y.length;D++){const B=x[D];B!==null&&(x[D]=null,y[D].disconnect(B))}U=null,S=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){r=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(D){h=D},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",w),i.addEventListener("selectstart",w),i.addEventListener("selectend",w),i.addEventListener("squeeze",w),i.addEventListener("squeezestart",w),i.addEventListener("squeezeend",w),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Z),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,B),i.updateRenderState({baseLayer:p}),d=new di(p.framebufferWidth,p.framebufferHeight,{format:Qt,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,he=null,pe=null;_.depth&&(pe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=_.stencil?Ki:hi,he=_.stencil?ci:Gn);const _e={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(_e),i.updateRenderState({layers:[f]}),d=new di(f.textureWidth,f.textureHeight,{format:Qt,type:Xn,depthTexture:new Yg(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ee=e.properties.get(d);Ee.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),h=null,o=await i.requestReferenceSpace(a),j.setContext(i),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Z(D){for(let B=0;B<D.removed.length;B++){const he=D.removed[B],pe=x.indexOf(he);pe>=0&&(x[pe]=null,y[pe].disconnect(he))}for(let B=0;B<D.added.length;B++){const he=D.added[B];let pe=x.indexOf(he);if(pe===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=x.length){x.push(he),pe=Ee;break}else if(x[Ee]===null){x[Ee]=he,pe=Ee;break}if(pe===-1)break}const _e=y[pe];_e&&_e.connect(he)}}const $=new A,I=new A;function H(D,B,he){$.setFromMatrixPosition(B.matrixWorld),I.setFromMatrixPosition(he.matrixWorld);const pe=$.distanceTo(I),_e=B.projectionMatrix.elements,Ee=he.projectionMatrix.elements,Re=_e[14]/(_e[10]-1),Te=_e[14]/(_e[10]+1),Ue=(_e[9]+1)/_e[5],Ke=(_e[9]-1)/_e[5],be=(_e[8]-1)/_e[0],L=(Ee[8]+1)/Ee[0],ae=Re*be,X=Re*L,Q=pe/(-be+L),Y=Q*-be;B.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Y),D.translateZ(Q),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const Me=Re+Q,de=Te+Q,ye=ae-Y,Ne=X+(pe-Y),Ve=Ue*Te/de*Me,ut=Ke*Te/de*Me;D.projectionMatrix.makePerspective(ye,Ne,Ve,ut,Me,de),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function q(D,B){B===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(B.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;R.near=b.near=v.near=D.near,R.far=b.far=v.far=D.far,(U!==R.near||S!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),U=R.near,S=R.far);const B=D.parent,he=R.cameras;q(R,B);for(let pe=0;pe<he.length;pe++)q(he[pe],B);he.length===2?H(R,v,b):R.projectionMatrix.copy(v.projectionMatrix),W(D,R,B)};function W(D,B,he){he===null?D.matrix.copy(B.matrixWorld):(D.matrix.copy(he.matrixWorld),D.matrix.invert(),D.matrix.multiply(B.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(B.projectionMatrix),D.projectionMatrixInverse.copy(B.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ji*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(D){c=D,f!==null&&(f.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)};let ne=null;function K(D,B){if(l=B.getViewerPose(h||o),g=B,l!==null){const he=l.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let pe=!1;he.length!==R.cameras.length&&(R.cameras.length=0,pe=!0);for(let _e=0;_e<he.length;_e++){const Ee=he[_e];let Re=null;if(p!==null)Re=p.getViewport(Ee);else{const Ue=u.getViewSubImage(f,Ee);Re=Ue.viewport,_e===0&&(e.setRenderTargetTextures(d,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(d))}let Te=C[_e];Te===void 0&&(Te=new zt,Te.layers.enable(_e),Te.viewport=new nt,C[_e]=Te),Te.matrix.fromArray(Ee.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ee.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Re.x,Re.y,Re.width,Re.height),_e===0&&(R.matrix.copy(Te.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),pe===!0&&R.cameras.push(Te)}}for(let he=0;he<y.length;he++){const pe=x[he],_e=y[he];pe!==null&&_e!==void 0&&_e.update(pe,B,h||o)}ne&&ne(D,B),B.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:B}),g=null}const j=new Kc;j.setAnimationLoop(K),this.setAnimationLoop=function(D){ne=D},this.dispose=function(){}}}function Zg(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,qc(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),l(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,x):d.isSpriteMaterial?h(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Jg(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function h(y,x){let v=i[y.id];v===void 0&&(g(y),v=l(y),i[y.id]=v,y.addEventListener("dispose",m));const b=x.program;n.updateUBOMapping(y,b);const C=e.render.frame;r[y.id]!==C&&(f(y),r[y.id]=C)}function l(y){const x=u();y.__bindingPointIndex=x;const v=s.createBuffer(),b=y.__size,C=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,b,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=i[y.id],v=y.uniforms,b=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let C=0,R=v.length;C<R;C++){const U=v[C];if(p(U,C,b)===!0){const S=U.__offset,w=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let Z=0;Z<w.length;Z++){const $=w[Z],I=_($);typeof $=="number"?(U.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,S+G,U.__data)):$.isMatrix3?(U.__data[0]=$.elements[0],U.__data[1]=$.elements[1],U.__data[2]=$.elements[2],U.__data[3]=$.elements[0],U.__data[4]=$.elements[3],U.__data[5]=$.elements[4],U.__data[6]=$.elements[5],U.__data[7]=$.elements[0],U.__data[8]=$.elements[6],U.__data[9]=$.elements[7],U.__data[10]=$.elements[8],U.__data[11]=$.elements[0]):($.toArray(U.__data,G),G+=I.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,S,U.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,v){const b=y.value;if(v[x]===void 0){if(typeof b=="number")v[x]=b;else{const C=Array.isArray(b)?b:[b],R=[];for(let U=0;U<C.length;U++)R.push(C[U].clone());v[x]=R}return!0}else if(typeof b=="number"){if(v[x]!==b)return v[x]=b,!0}else{const C=Array.isArray(v[x])?v[x]:[v[x]],R=Array.isArray(b)?b:[b];for(let U=0;U<C.length;U++){const S=C[U];if(S.equals(R[U])===!1)return S.copy(R[U]),!0}}return!1}function g(y){const x=y.uniforms;let v=0;const b=16;let C=0;for(let R=0,U=x.length;R<U;R++){const S=x[R],w={boundary:0,storage:0},G=Array.isArray(S.value)?S.value:[S.value];for(let Z=0,$=G.length;Z<$;Z++){const I=G[Z],H=_(I);w.boundary+=H.boundary,w.storage+=H.storage}if(S.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=v,R>0){C=v%b;const Z=b-C;C!==0&&Z-w.boundary<0&&(v+=b-C,S.__offset=v)}v+=w.storage}return C=v%b,C>0&&(v+=b-C),y.__size=v,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:h,dispose:d}}class eh{constructor(e={}){const{canvas:t=Yu(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=Wn,this.toneMappingExposure=1;const x=this;let v=!1,b=0,C=0,R=null,U=-1,S=null;const w=new nt,G=new nt;let Z=null;const $=new De(0);let I=0,H=t.width,q=t.height,W=1,ne=null,K=null;const j=new nt(0,0,H,q),D=new nt(0,0,H,q);let B=!1;const he=new oa;let pe=!1,_e=!1,Ee=null;const Re=new He,Te=new ce,Ue=new A,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return R===null?W:1}let L=n;function ae(E,N){for(let z=0;z<E.length;z++){const F=E[z],k=t.getContext(F,N);if(k!==null)return k}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ta}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",fe,!1),L===null){const N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=ae(N,E),L===null)throw ae(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let X,Q,Y,Me,de,ye,Ne,Ve,ut,T,M,O,ee,J,te,xe,re,ue,Ce,Ze,ie,et,Oe,Le;function Se(){X=new am(L),Q=new tm(L,X,e),X.init(Q),et=new Xg(L,X,Q),Y=new Vg(L,X,Q),Me=new hm(L),de=new Cg,ye=new Wg(L,X,Y,de,Q,et,Me),Ne=new im(x),Ve=new om(x),ut=new vf(L,Q),Oe=new Qp(L,X,ut,Q),T=new lm(L,ut,Me,Oe),M=new pm(L,T,ut,Me),Ce=new dm(L,Q,ye),xe=new nm(de),O=new Rg(x,Ne,Ve,X,Q,Oe,xe),ee=new Zg(x,de),J=new Pg,te=new zg(X,Q),ue=new $p(x,Ne,Ve,Y,M,f,c),re=new Gg(x,M,Q),Le=new Jg(L,Me,Q,Y),Ze=new em(L,X,Me,Q),ie=new cm(L,X,Me,Q),Me.programs=O.programs,x.capabilities=Q,x.extensions=X,x.properties=de,x.renderLists=J,x.shadowMap=re,x.state=Y,x.info=Me}Se();const ge=new Kg(x,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=X.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=X.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(H,q,!1))},this.getSize=function(E){return E.set(H,q)},this.setSize=function(E,N,z=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,q=N,t.width=Math.floor(E*W),t.height=Math.floor(N*W),z===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*W,q*W).floor()},this.setDrawingBufferSize=function(E,N,z){H=E,q=N,W=z,t.width=Math.floor(E*z),t.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,N,z,F){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,N,z,F),Y.viewport(w.copy(j).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(D)},this.setScissor=function(E,N,z,F){E.isVector4?D.set(E.x,E.y,E.z,E.w):D.set(E,N,z,F),Y.scissor(G.copy(D).multiplyScalar(W).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){Y.setScissorTest(B=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(E=!0,N=!0,z=!0){let F=0;if(E){let k=!1;if(R!==null){const me=R.texture.format;k=me===Nc||me===Dc||me===Ic}if(k){const me=R.texture.type,ve=me===Xn||me===Gn||me===na||me===ci||me===Lc||me===Pc,Ae=ue.getClearColor(),Pe=ue.getClearAlpha(),ke=Ae.r,ze=Ae.g,Fe=Ae.b;ve?(p[0]=ke,p[1]=ze,p[2]=Fe,p[3]=Pe,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=ke,g[1]=ze,g[2]=Fe,g[3]=Pe,L.clearBufferiv(L.COLOR,0,g))}else F|=L.COLOR_BUFFER_BIT}N&&(F|=L.DEPTH_BUFFER_BIT),z&&(F|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),J.dispose(),te.dispose(),de.dispose(),Ne.dispose(),Ve.dispose(),M.dispose(),Oe.dispose(),Le.dispose(),O.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Kt),ge.removeEventListener("sessionend",rt),Ee&&(Ee.dispose(),Ee=null),Dt.stop()};function je(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const E=Me.autoReset,N=re.enabled,z=re.autoUpdate,F=re.needsUpdate,k=re.type;Se(),Me.autoReset=E,re.enabled=N,re.autoUpdate=z,re.needsUpdate=F,re.type=k}function fe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function se(E){const N=E.target;N.removeEventListener("dispose",se),V(N)}function V(E){oe(E),de.remove(E)}function oe(E){const N=de.get(E).programs;N!==void 0&&(N.forEach(function(z){O.releaseProgram(z)}),E.isShaderMaterial&&O.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,F,k,me){N===null&&(N=Ke);const ve=k.isMesh&&k.matrixWorld.determinant()<0,Ae=Rh(E,N,z,F,k);Y.setMaterial(F,ve);let Pe=z.index,ke=1;if(F.wireframe===!0){if(Pe=T.getWireframeAttribute(z),Pe===void 0)return;ke=2}const ze=z.drawRange,Fe=z.attributes.position;let pt=ze.start*ke,Wt=(ze.start+ze.count)*ke;me!==null&&(pt=Math.max(pt,me.start*ke),Wt=Math.min(Wt,(me.start+me.count)*ke)),Pe!==null?(pt=Math.max(pt,0),Wt=Math.min(Wt,Pe.count)):Fe!=null&&(pt=Math.max(pt,0),Wt=Math.min(Wt,Fe.count));const St=Wt-pt;if(St<0||St===1/0)return;Oe.setup(k,F,Ae,z,Pe);let _n,ft=Ze;if(Pe!==null&&(_n=ut.get(Pe),ft=ie,ft.setIndex(_n)),k.isMesh)F.wireframe===!0?(Y.setLineWidth(F.wireframeLinewidth*be()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(k.isLine){let We=F.linewidth;We===void 0&&(We=1),Y.setLineWidth(We*be()),k.isLineSegments?ft.setMode(L.LINES):k.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else k.isPoints?ft.setMode(L.POINTS):k.isSprite&&ft.setMode(L.TRIANGLES);if(k.isInstancedMesh)ft.renderInstances(pt,St,k.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Wr=Math.min(z.instanceCount,We);ft.renderInstances(pt,St,Wr)}else ft.render(pt,St)};function we(E,N,z){E.transparent===!0&&E.side===Bt&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,Gs(E,N,z),E.side=Cn,E.needsUpdate=!0,Gs(E,N,z),E.side=Bt):Gs(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),m=te.get(z),m.init(),y.push(m),z.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==z&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(x._useLegacyLights);const F=new Set;return E.traverse(function(k){const me=k.material;if(me)if(Array.isArray(me))for(let ve=0;ve<me.length;ve++){const Ae=me[ve];we(Ae,z,k),F.add(Ae)}else we(me,z,k),F.add(me)}),y.pop(),m=null,F},this.compileAsync=function(E,N,z=null){const F=this.compile(E,N,z);return new Promise(k=>{function me(){if(F.forEach(function(ve){de.get(ve).currentProgram.isReady()&&F.delete(ve)}),F.size===0){k(E);return}setTimeout(me,10)}X.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Je=null;function gt(E){Je&&Je(E)}function Kt(){Dt.stop()}function rt(){Dt.start()}const Dt=new Kc;Dt.setAnimationLoop(gt),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(E){Je=E,ge.setAnimationLoop(E),E===null?Dt.stop():Dt.start()},ge.addEventListener("sessionstart",Kt),ge.addEventListener("sessionend",rt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(N),N=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,R),m=te.get(E,y.length),m.init(),y.push(m),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),he.setFromProjectionMatrix(Re),_e=this.localClippingEnabled,pe=xe.init(this.clippingPlanes,_e),_=J.get(E,d.length),_.init(),d.push(_),an(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ne,K),this.info.render.frame++,pe===!0&&xe.beginShadows();const z=m.state.shadowsArray;if(re.render(z,E,N),pe===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){const F=N.cameras;for(let k=0,me=F.length;k<me;k++){const ve=F[k];ya(_,E,ve,ve.viewport)}}else ya(_,E,N);R!==null&&(ye.updateMultisampleRenderTarget(R),ye.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,N),Oe.resetDefaultState(),U=-1,S=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function an(E,N,z,F){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||he.intersectsSprite(E)){F&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const ve=M.update(E),Ae=E.material;Ae.visible&&_.push(E,ve,Ae,z,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||he.intersectsObject(E))){const ve=M.update(E),Ae=E.material;if(F&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ae)){const Pe=ve.groups;for(let ke=0,ze=Pe.length;ke<ze;ke++){const Fe=Pe[ke],pt=Ae[Fe.materialIndex];pt&&pt.visible&&_.push(E,ve,pt,z,Ue.z,Fe)}}else Ae.visible&&_.push(E,ve,Ae,z,Ue.z,null)}}const me=E.children;for(let ve=0,Ae=me.length;ve<Ae;ve++)an(me[ve],N,z,F)}function ya(E,N,z,F){const k=E.opaque,me=E.transmissive,ve=E.transparent;m.setupLightsView(z),pe===!0&&xe.setGlobalState(x.clippingPlanes,z),me.length>0&&Ah(k,me,N,z),F&&Y.viewport(w.copy(F)),k.length>0&&Hs(k,N,z),me.length>0&&Hs(me,N,z),ve.length>0&&Hs(ve,N,z),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Ah(E,N,z,F){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const me=Q.isWebGL2;Ee===null&&(Ee=new di(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?Ls:Xn,minFilter:fi,samples:me?4:0})),x.getDrawingBufferSize(Te),me?Ee.setSize(Te.x,Te.y):Ee.setSize(Pr(Te.x),Pr(Te.y));const ve=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor($),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Ae=x.toneMapping;x.toneMapping=Wn,Hs(E,z,F),ye.updateMultisampleRenderTarget(Ee),ye.updateRenderTargetMipmap(Ee);let Pe=!1;for(let ke=0,ze=N.length;ke<ze;ke++){const Fe=N[ke],pt=Fe.object,Wt=Fe.geometry,St=Fe.material,_n=Fe.group;if(St.side===Bt&&pt.layers.test(F.layers)){const ft=St.side;St.side=Gt,St.needsUpdate=!0,xa(pt,z,F,Wt,St,_n),St.side=ft,St.needsUpdate=!0,Pe=!0}}Pe===!0&&(ye.updateMultisampleRenderTarget(Ee),ye.updateRenderTargetMipmap(Ee)),x.setRenderTarget(ve),x.setClearColor($,I),x.toneMapping=Ae}function Hs(E,N,z){const F=N.isScene===!0?N.overrideMaterial:null;for(let k=0,me=E.length;k<me;k++){const ve=E[k],Ae=ve.object,Pe=ve.geometry,ke=F===null?ve.material:F,ze=ve.group;Ae.layers.test(z.layers)&&xa(Ae,N,z,Pe,ke,ze)}}function xa(E,N,z,F,k,me){E.onBeforeRender(x,N,z,F,k,me),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,N,z,F,E,me),k.transparent===!0&&k.side===Bt&&k.forceSinglePass===!1?(k.side=Gt,k.needsUpdate=!0,x.renderBufferDirect(z,N,F,k,E,me),k.side=Cn,k.needsUpdate=!0,x.renderBufferDirect(z,N,F,k,E,me),k.side=Bt):x.renderBufferDirect(z,N,F,k,E,me),E.onAfterRender(x,N,z,F,k,me)}function Gs(E,N,z){N.isScene!==!0&&(N=Ke);const F=de.get(E),k=m.state.lights,me=m.state.shadowsArray,ve=k.state.version,Ae=O.getParameters(E,k.state,me,N,z),Pe=O.getProgramCacheKey(Ae);let ke=F.programs;F.environment=E.isMeshStandardMaterial?N.environment:null,F.fog=N.fog,F.envMap=(E.isMeshStandardMaterial?Ve:Ne).get(E.envMap||F.environment),ke===void 0&&(E.addEventListener("dispose",se),ke=new Map,F.programs=ke);let ze=ke.get(Pe);if(ze!==void 0){if(F.currentProgram===ze&&F.lightsStateVersion===ve)return Ma(E,Ae),ze}else Ae.uniforms=O.getUniforms(E),E.onBuild(z,Ae,x),E.onBeforeCompile(Ae,x),ze=O.acquireProgram(Ae,Pe),ke.set(Pe,ze),F.uniforms=Ae.uniforms;const Fe=F.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=xe.uniform),Ma(E,Ae),F.needsLights=Lh(E),F.lightsStateVersion=ve,F.needsLights&&(Fe.ambientLightColor.value=k.state.ambient,Fe.lightProbe.value=k.state.probe,Fe.directionalLights.value=k.state.directional,Fe.directionalLightShadows.value=k.state.directionalShadow,Fe.spotLights.value=k.state.spot,Fe.spotLightShadows.value=k.state.spotShadow,Fe.rectAreaLights.value=k.state.rectArea,Fe.ltc_1.value=k.state.rectAreaLTC1,Fe.ltc_2.value=k.state.rectAreaLTC2,Fe.pointLights.value=k.state.point,Fe.pointLightShadows.value=k.state.pointShadow,Fe.hemisphereLights.value=k.state.hemi,Fe.directionalShadowMap.value=k.state.directionalShadowMap,Fe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Fe.spotShadowMap.value=k.state.spotShadowMap,Fe.spotLightMatrix.value=k.state.spotLightMatrix,Fe.spotLightMap.value=k.state.spotLightMap,Fe.pointShadowMap.value=k.state.pointShadowMap,Fe.pointShadowMatrix.value=k.state.pointShadowMatrix),F.currentProgram=ze,F.uniformsList=null,ze}function va(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Sr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ma(E,N){const z=de.get(E);z.outputColorSpace=N.outputColorSpace,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function Rh(E,N,z,F,k){N.isScene!==!0&&(N=Ke),ye.resetTextureUnits();const me=N.fog,ve=F.isMeshStandardMaterial?N.environment:null,Ae=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ct,Pe=(F.isMeshStandardMaterial?Ve:Ne).get(F.envMap||ve),ke=F.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,ze=!!z.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Fe=!!z.morphAttributes.position,pt=!!z.morphAttributes.normal,Wt=!!z.morphAttributes.color;let St=Wn;F.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=x.toneMapping);const _n=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ft=_n!==void 0?_n.length:0,We=de.get(F),Wr=m.state.lights;if(pe===!0&&(_e===!0||E!==S)){const Xt=E===S&&F.id===U;xe.setState(F,E,Xt)}let _t=!1;F.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Wr.state.version||We.outputColorSpace!==Ae||k.isInstancedMesh&&We.instancing===!1||!k.isInstancedMesh&&We.instancing===!0||k.isSkinnedMesh&&We.skinning===!1||!k.isSkinnedMesh&&We.skinning===!0||k.isInstancedMesh&&We.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&We.instancingColor===!1&&k.instanceColor!==null||We.envMap!==Pe||F.fog===!0&&We.fog!==me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==xe.numPlanes||We.numIntersection!==xe.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==ze||We.morphTargets!==Fe||We.morphNormals!==pt||We.morphColors!==Wt||We.toneMapping!==St||Q.isWebGL2===!0&&We.morphTargetsCount!==ft)&&(_t=!0):(_t=!0,We.__version=F.version);let Kn=We.currentProgram;_t===!0&&(Kn=Gs(F,N,k));let Sa=!1,cs=!1,Xr=!1;const Nt=Kn.getUniforms(),Zn=We.uniforms;if(Y.useProgram(Kn.program)&&(Sa=!0,cs=!0,Xr=!0),F.id!==U&&(U=F.id,cs=!0),Sa||S!==E){Nt.setValue(L,"projectionMatrix",E.projectionMatrix),Nt.setValue(L,"viewMatrix",E.matrixWorldInverse);const Xt=Nt.map.cameraPosition;Xt!==void 0&&Xt.setValue(L,Ue.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&Nt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Nt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,cs=!0,Xr=!0)}if(k.isSkinnedMesh){Nt.setOptional(L,k,"bindMatrix"),Nt.setOptional(L,k,"bindMatrixInverse");const Xt=k.skeleton;Xt&&(Q.floatVertexTextures?(Xt.boneTexture===null&&Xt.computeBoneTexture(),Nt.setValue(L,"boneTexture",Xt.boneTexture,ye),Nt.setValue(L,"boneTextureSize",Xt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const qr=z.morphAttributes;if((qr.position!==void 0||qr.normal!==void 0||qr.color!==void 0&&Q.isWebGL2===!0)&&Ce.update(k,z,Kn),(cs||We.receiveShadow!==k.receiveShadow)&&(We.receiveShadow=k.receiveShadow,Nt.setValue(L,"receiveShadow",k.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Zn.envMap.value=Pe,Zn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),cs&&(Nt.setValue(L,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&Ch(Zn,Xr),me&&F.fog===!0&&ee.refreshFogUniforms(Zn,me),ee.refreshMaterialUniforms(Zn,F,W,q,Ee),Sr.upload(L,va(We),Zn,ye)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Sr.upload(L,va(We),Zn,ye),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Nt.setValue(L,"center",k.center),Nt.setValue(L,"modelViewMatrix",k.modelViewMatrix),Nt.setValue(L,"normalMatrix",k.normalMatrix),Nt.setValue(L,"modelMatrix",k.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Xt=F.uniformsGroups;for(let jr=0,Ph=Xt.length;jr<Ph;jr++)if(Q.isWebGL2){const Ea=Xt[jr];Le.update(Ea,Kn),Le.bind(Ea,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function Ch(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Lh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,z){de.get(E.texture).__webglTexture=N,de.get(E.depthTexture).__webglTexture=z;const F=de.get(E);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=z===void 0,F.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const z=de.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){R=E,b=N,C=z;let F=!0,k=null,me=!1,ve=!1;if(E){const Pe=de.get(E);Pe.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(L.FRAMEBUFFER,null),F=!1):Pe.__webglFramebuffer===void 0?ye.setupRenderTarget(E):Pe.__hasExternalTextures&&ye.rebindTextures(E,de.get(E.texture).__webglTexture,de.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const ze=de.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[N])?k=ze[N][z]:k=ze[N],me=!0):Q.isWebGL2&&E.samples>0&&ye.useMultisampledRTT(E)===!1?k=de.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?k=ze[z]:k=ze,w.copy(E.viewport),G.copy(E.scissor),Z=E.scissorTest}else w.copy(j).multiplyScalar(W).floor(),G.copy(D).multiplyScalar(W).floor(),Z=B;if(Y.bindFramebuffer(L.FRAMEBUFFER,k)&&Q.drawBuffers&&F&&Y.drawBuffers(E,k),Y.viewport(w),Y.scissor(G),Y.setScissorTest(Z),me){const Pe=de.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pe.__webglTexture,z)}else if(ve){const Pe=de.get(E.texture),ke=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,ke)}U=-1},this.readRenderTargetPixels=function(E,N,z,F,k,me,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){Y.bindFramebuffer(L.FRAMEBUFFER,Ae);try{const Pe=E.texture,ke=Pe.format,ze=Pe.type;if(ke!==Qt&&et.convert(ke)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=ze===Ls&&(X.has("EXT_color_buffer_half_float")||Q.isWebGL2&&X.has("EXT_color_buffer_float"));if(ze!==Xn&&et.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===An&&(Q.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-F&&z>=0&&z<=E.height-k&&L.readPixels(N,z,F,k,et.convert(ke),et.convert(ze),me)}finally{const Pe=R!==null?de.get(R).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(E,N,z=0){const F=Math.pow(2,-z),k=Math.floor(N.image.width*F),me=Math.floor(N.image.height*F);ye.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,E.x,E.y,k,me),Y.unbindTexture()},this.copyTextureToTexture=function(E,N,z,F=0){const k=N.image.width,me=N.image.height,ve=et.convert(z.format),Ae=et.convert(z.type);ye.setTexture2D(z,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,E.x,E.y,k,me,ve,Ae,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,F,E.x,E.y,ve,Ae,N.image),F===0&&z.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z,F,k=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,Ae=E.max.z-E.min.z+1,Pe=et.convert(F.format),ke=et.convert(F.type);let ze;if(F.isData3DTexture)ye.setTexture3D(F,0),ze=L.TEXTURE_3D;else if(F.isDataArrayTexture)ye.setTexture2DArray(F,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Fe=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Wt=L.getParameter(L.UNPACK_SKIP_PIXELS),St=L.getParameter(L.UNPACK_SKIP_ROWS),_n=L.getParameter(L.UNPACK_SKIP_IMAGES),ft=z.isCompressedTexture?z.mipmaps[0]:z.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),z.isDataTexture||z.isData3DTexture?L.texSubImage3D(ze,k,N.x,N.y,N.z,me,ve,Ae,Pe,ke,ft.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,k,N.x,N.y,N.z,me,ve,Ae,Pe,ft.data)):L.texSubImage3D(ze,k,N.x,N.y,N.z,me,ve,Ae,Pe,ke,ft),L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Wt),L.pixelStorei(L.UNPACK_SKIP_ROWS,St),L.pixelStorei(L.UNPACK_SKIP_IMAGES,_n),k===0&&F.generateMipmaps&&L.generateMipmap(ze),Y.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?ye.setTextureCube(E,0):E.isData3DTexture?ye.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ye.setTexture2DArray(E,0):ye.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){b=0,C=0,R=null,Y.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ia?"display-p3":"srgb",t.unpackColorSpace=$e.workingColorSpace===zr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===dt?ui:Oc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ui?dt:Ct}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $g extends eh{}$g.prototype.isWebGL1Renderer=!0;class Br extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Qg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ho,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ut=new A;class ca{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ca(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const ql=new A,jl=new nt,Yl=new nt,e_=new A,Kl=new He,ur=new A,To=new dn,Zl=new He,bo=new zs;class t_ extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=La,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ur),this.boundingBox.expandByPoint(ur)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ur),this.boundingSphere.expandByPoint(ur)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(i),e.ray.intersectsSphere(To)!==!1&&(Zl.copy(i).invert(),bo.copy(e.ray).applyMatrix4(Zl),!(this.boundingBox!==null&&bo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===La?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===uu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;jl.fromBufferAttribute(i.attributes.skinIndex,e),Yl.fromBufferAttribute(i.attributes.skinWeight,e),ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Yl.getComponent(r);if(o!==0){const a=jl.getComponent(r);Kl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(e_.copy(ql).applyMatrix4(Kl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class th extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class n_ extends At{constructor(e=null,t=1,n=1,i,r,o,a,c,h=Tt,l=Tt,u,f){super(null,o,a,c,h,l,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jl=new He,i_=new He;class ha{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:i_;Jl.multiplyMatrices(a,t[r]),Jl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ha(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Fc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new n_(t,e,e,Qt,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new th),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Xo extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Di=new He,$l=new He,fr=[],Ql=new Ln,s_=new He,ps=new Ie,ms=new dn;class r_ extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,s_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),Ql.copy(e.boundingBox).applyMatrix4(Di),this.boundingBox.union(Ql)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Di),ms.copy(e.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ps.geometry=this.geometry,ps.material=this.material,ps.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ms.copy(this.boundingSphere),ms.applyMatrix4(n),e.ray.intersectsSphere(ms)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Di),$l.multiplyMatrices(n,Di),ps.matrixWorld=$l,ps.raycast(e,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,t.push(c)}fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nh extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ec=new A,tc=new A,nc=new He,wo=new zs,dr=new dn;class ua extends at{constructor(e=new Yt,t=new nh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ec.fromBufferAttribute(t,i-1),tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(i),dr.radius+=r,e.ray.intersectsSphere(dr)===!1)return;nc.copy(i).invert(),wo.copy(e.ray).applyMatrix4(nc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new A,l=new A,u=new A,f=new A,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=d,v=y-1;x<v;x+=p){const b=g.getX(x),C=g.getX(x+1);if(h.fromBufferAttribute(m,b),l.fromBufferAttribute(m,C),wo.distanceSqToSegment(h,l,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(f);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=d,v=y-1;x<v;x+=p){if(h.fromBufferAttribute(m,x),l.fromBufferAttribute(m,x+1),wo.distanceSqToSegment(h,l,f,u)>c)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const ic=new A,sc=new A;class o_ extends ua{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)ic.fromBufferAttribute(t,i),sc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ic.distanceTo(sc);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a_ extends ua{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ih extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rc=new He,qo=new zs,pr=new dn,mr=new A;class l_ extends at{constructor(e=new Yt,t=new ih){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(i),pr.radius+=r,e.ray.intersectsSphere(pr)===!1)return;rc.copy(i).invert(),qo.copy(e.ray).applyMatrix4(rc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=h.getX(g);mr.fromBufferAttribute(u,m),oc(mr,m,c,i,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)mr.fromBufferAttribute(u,g),oc(mr,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oc(s,e,t,n,i,r,o){const a=qo.distanceSqToPoint(s);if(a<t){const c=new A;qo.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-o,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const l=n[i],f=n[i+1]-l,p=(o-l)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ce:new A);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new A,i=[],r=[],o=[],a=new A,c=new He;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new A)}r[0]=new A,o[0]=new A;let h=Number.MAX_VALUE;const l=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);l<=h&&(h=l,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),f<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(bt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(bt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class fa extends mn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new ce,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const l=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=h-this.aY;c=f*l-p*u+this.aX,h=f*u+p*l+this.aY}return n.set(c,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends fa{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,h){i(o,a,h*(a-r),h*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,h,l,u){let f=(o-r)/h-(a-r)/(h+l)+(a-o)/l,p=(a-o)/l-(c-o)/(l+u)+(c-a)/u;f*=l,p*=l,i(o,a,f,p)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const gr=new A,Ao=new da,Ro=new da,Co=new da;class h_ extends mn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let h,l;this.closed||a>0?h=i[(a-1)%r]:(gr.subVectors(i[0],i[1]).add(i[0]),h=gr);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?l=i[(a+2)%r]:(gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),l=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(l),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ao.initNonuniformCatmullRom(h.x,u.x,f.x,l.x,g,_,m),Ro.initNonuniformCatmullRom(h.y,u.y,f.y,l.y,g,_,m),Co.initNonuniformCatmullRom(h.z,u.z,f.z,l.z,g,_,m)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(h.x,u.x,f.x,l.x,this.tension),Ro.initCatmullRom(h.y,u.y,f.y,l.y,this.tension),Co.initCatmullRom(h.z,u.z,f.z,l.z,this.tension));return n.set(Ao.calc(c),Ro.calc(c),Co.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ac(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function u_(s,e){const t=1-s;return t*t*e}function f_(s,e){return 2*(1-s)*s*e}function d_(s,e){return s*s*e}function ws(s,e,t,n){return u_(s,e)+f_(s,t)+d_(s,n)}function p_(s,e){const t=1-s;return t*t*t*e}function m_(s,e){const t=1-s;return 3*t*t*s*e}function g_(s,e){return 3*(1-s)*s*s*e}function __(s,e){return s*s*s*e}function As(s,e,t,n,i){return p_(s,e)+m_(s,t)+g_(s,n)+__(s,i)}class sh extends mn{constructor(e=new ce,t=new ce,n=new ce,i=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,i.x,r.x,o.x,a.x),As(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class y_ extends mn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(As(e,i.x,r.x,o.x,a.x),As(e,i.y,r.y,o.y,a.y),As(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rh extends mn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class x_ extends mn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oh extends mn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ws(e,i.x,r.x,o.x),ws(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class v_ extends mn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ws(e,i.x,r.x,o.x),ws(e,i.y,r.y,o.y),ws(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ah extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],h=i[o],l=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ac(a,c.x,h.x,l.x,u.x),ac(a,c.y,h.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ce().fromArray(i))}return this}}var jo=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:h_,CubicBezierCurve:sh,CubicBezierCurve3:y_,EllipseCurve:fa,LineCurve:rh,LineCurve3:x_,QuadraticBezierCurve:oh,QuadraticBezierCurve3:v_,SplineCurve:ah});class M_ extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),h=c===0?0:1-o/c;return a.getPointAt(h,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let h=0;h<c.length;h++){const l=c[h];n&&n.equals(l)||(t.push(l),n=l)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new jo[i.type]().fromJSON(i))}return this}}class Yo extends M_{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new rh(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new oh(this.currentPoint.clone(),new ce(e,t),new ce(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new sh(this.currentPoint.clone(),new ce(e,t),new ce(n,i),new ce(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new ah(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+h,t+l,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const h=new fa(e,t,n,i,r,o,a,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Er extends Yo{constructor(e){super(e),this.uuid=tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Yo().fromJSON(i))}return this}}const S_={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=lh(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,h,l,u,f,p;if(n&&(r=A_(s,e,r,t)),s.length>80*t){a=h=s[0],c=l=s[1];for(let g=t;g<i;g+=t)u=s[g],f=s[g+1],u<a&&(a=u),f<c&&(c=f),u>h&&(h=u),f>l&&(l=f);p=Math.max(h-a,l-c),p=p!==0?32767/p:0}return Ds(r,o,t,a,c,p,0),o}};function lh(s,e,t,n,i){let r,o;if(i===F_(s,e,t,n)>0)for(r=e;r<t;r+=n)o=lc(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=lc(r,s[r],s[r+1],o);return o&&kr(o,o.next)&&(Us(o),o=o.next),o}function mi(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||ht(t.prev,t,t.next)===0)){if(Us(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ds(s,e,t,n,i,r,o){if(!s)return;!o&&r&&I_(s,n,i,r);let a=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,r?T_(s,n,i,r):E_(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(h.i/t|0),Us(s),s=h.next,a=h.next;continue}if(s=h,s===a){o?o===1?(s=b_(mi(s),e,t),Ds(s,e,t,n,i,r,2)):o===2&&w_(s,e,t,n,i,r):Ds(mi(s),e,t,n,i,r,1);break}}}function E_(s){const e=s.prev,t=s,n=s.next;if(ht(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,h=n.y,l=i<r?i<o?i:o:r<o?r:o,u=a<c?a<h?a:h:c<h?c:h,f=i>r?i>o?i:o:r>o?r:o,p=a>c?a>h?a:h:c>h?c:h;let g=n.next;for(;g!==e;){if(g.x>=l&&g.x<=f&&g.y>=u&&g.y<=p&&zi(i,a,r,c,o,h,g.x,g.y)&&ht(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function T_(s,e,t,n){const i=s.prev,r=s,o=s.next;if(ht(i,r,o)>=0)return!1;const a=i.x,c=r.x,h=o.x,l=i.y,u=r.y,f=o.y,p=a<c?a<h?a:h:c<h?c:h,g=l<u?l<f?l:f:u<f?u:f,_=a>c?a>h?a:h:c>h?c:h,m=l>u?l>f?l:f:u>f?u:f,d=Ko(p,g,e,t,n),y=Ko(_,m,e,t,n);let x=s.prevZ,v=s.nextZ;for(;x&&x.z>=d&&v&&v.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&zi(a,l,c,u,h,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&zi(a,l,c,u,h,f,v.x,v.y)&&ht(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&zi(a,l,c,u,h,f,x.x,x.y)&&ht(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&zi(a,l,c,u,h,f,v.x,v.y)&&ht(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function b_(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!kr(i,r)&&ch(i,n,n.next,r)&&Ns(i,r)&&Ns(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Us(n),Us(n.next),n=s=r),n=n.next}while(n!==s);return mi(n)}function w_(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&U_(o,a)){let c=hh(o,a);o=mi(o,o.next),c=mi(c,c.next),Ds(o,e,t,n,i,r,0),Ds(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function A_(s,e,t,n){const i=[];let r,o,a,c,h;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,h=lh(s,a,c,n,!1),h===h.next&&(h.steiner=!0),i.push(N_(h));for(i.sort(R_),r=0;r<i.length;r++)t=C_(i[r],t);return t}function R_(s,e){return s.x-e.x}function C_(s,e){const t=L_(s,e);if(!t)return e;const n=hh(t,s);return mi(n,n.next),mi(t,t.next)}function L_(s,e){let t=e,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,c=i.x,h=i.y;let l=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&zi(o<h?r:n,o,c,h,o<h?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Ns(t,s)&&(u<l||u===l&&(t.x>i.x||t.x===i.x&&P_(i,t)))&&(i=t,l=u)),t=t.next;while(t!==a);return i}function P_(s,e){return ht(s.prev,s,e.prev)<0&&ht(e.next,s,s.next)<0}function I_(s,e,t,n){let i=s;do i.z===0&&(i.z=Ko(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,D_(i)}function D_(s){let e,t,n,i,r,o,a,c,h=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<h&&(a++,n=n.nextZ,!!n);e++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,h*=2}while(o>1);return s}function Ko(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function N_(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function zi(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function U_(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!O_(s,e)&&(Ns(s,e)&&Ns(e,s)&&z_(s,e)&&(ht(s.prev,s,e.prev)||ht(s,e.prev,e))||kr(s,e)&&ht(s.prev,s,s.next)>0&&ht(e.prev,e,e.next)>0)}function ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function kr(s,e){return s.x===e.x&&s.y===e.y}function ch(s,e,t,n){const i=yr(ht(s,e,t)),r=yr(ht(s,e,n)),o=yr(ht(t,n,s)),a=yr(ht(t,n,e));return!!(i!==r&&o!==a||i===0&&_r(s,t,e)||r===0&&_r(s,n,e)||o===0&&_r(t,s,n)||a===0&&_r(t,e,n))}function _r(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function yr(s){return s>0?1:s<0?-1:0}function O_(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&ch(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Ns(s,e){return ht(s.prev,s,s.next)<0?ht(s,e,s.next)>=0&&ht(s,s.prev,e)>=0:ht(s,e,s.prev)<0||ht(s,s.next,e)<0}function z_(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function hh(s,e){const t=new Zo(s.i,s.x,s.y),n=new Zo(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lc(s,e,t,n){const i=new Zo(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Us(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zo(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F_(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Vi{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Vi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];cc(e),hc(n,e);let o=e.length;t.forEach(cc);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,hc(n,t[c]);const a=S_.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class pa extends Yt{constructor(e=new Er([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const h=e[a];o(h)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(r,2)),this.computeVertexNormals();function o(a){const c=[],h=t.curveSegments!==void 0?t.curveSegments:12,l=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:B_;let x,v=!1,b,C,R,U;d&&(x=d.getSpacedPoints(l),v=!0,f=!1,b=d.computeFrenetFrames(l,!1),C=new A,R=new A,U=new A),f||(m=0,p=0,g=0,_=0);const S=a.extractPoints(h);let w=S.shape;const G=S.holes;if(!Vi.isClockWise(w)){w=w.reverse();for(let L=0,ae=G.length;L<ae;L++){const X=G[L];Vi.isClockWise(X)&&(G[L]=X.reverse())}}const $=Vi.triangulateShape(w,G),I=w;for(let L=0,ae=G.length;L<ae;L++){const X=G[L];w=w.concat(X)}function H(L,ae,X){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ae,X)}const q=w.length,W=$.length;function ne(L,ae,X){let Q,Y,Me;const de=L.x-ae.x,ye=L.y-ae.y,Ne=X.x-L.x,Ve=X.y-L.y,ut=de*de+ye*ye,T=de*Ve-ye*Ne;if(Math.abs(T)>Number.EPSILON){const M=Math.sqrt(ut),O=Math.sqrt(Ne*Ne+Ve*Ve),ee=ae.x-ye/M,J=ae.y+de/M,te=X.x-Ve/O,xe=X.y+Ne/O,re=((te-ee)*Ve-(xe-J)*Ne)/(de*Ve-ye*Ne);Q=ee+de*re-L.x,Y=J+ye*re-L.y;const ue=Q*Q+Y*Y;if(ue<=2)return new ce(Q,Y);Me=Math.sqrt(ue/2)}else{let M=!1;de>Number.EPSILON?Ne>Number.EPSILON&&(M=!0):de<-Number.EPSILON?Ne<-Number.EPSILON&&(M=!0):Math.sign(ye)===Math.sign(Ve)&&(M=!0),M?(Q=-ye,Y=de,Me=Math.sqrt(ut)):(Q=de,Y=ye,Me=Math.sqrt(ut/2))}return new ce(Q/Me,Y/Me)}const K=[];for(let L=0,ae=I.length,X=ae-1,Q=L+1;L<ae;L++,X++,Q++)X===ae&&(X=0),Q===ae&&(Q=0),K[L]=ne(I[L],I[X],I[Q]);const j=[];let D,B=K.concat();for(let L=0,ae=G.length;L<ae;L++){const X=G[L];D=[];for(let Q=0,Y=X.length,Me=Y-1,de=Q+1;Q<Y;Q++,Me++,de++)Me===Y&&(Me=0),de===Y&&(de=0),D[Q]=ne(X[Q],X[Me],X[de]);j.push(D),B=B.concat(D)}for(let L=0;L<m;L++){const ae=L/m,X=p*Math.cos(ae*Math.PI/2),Q=g*Math.sin(ae*Math.PI/2)+_;for(let Y=0,Me=I.length;Y<Me;Y++){const de=H(I[Y],K[Y],Q);Re(de.x,de.y,-X)}for(let Y=0,Me=G.length;Y<Me;Y++){const de=G[Y];D=j[Y];for(let ye=0,Ne=de.length;ye<Ne;ye++){const Ve=H(de[ye],D[ye],Q);Re(Ve.x,Ve.y,-X)}}}const he=g+_;for(let L=0;L<q;L++){const ae=f?H(w[L],B[L],he):w[L];v?(R.copy(b.normals[0]).multiplyScalar(ae.x),C.copy(b.binormals[0]).multiplyScalar(ae.y),U.copy(x[0]).add(R).add(C),Re(U.x,U.y,U.z)):Re(ae.x,ae.y,0)}for(let L=1;L<=l;L++)for(let ae=0;ae<q;ae++){const X=f?H(w[ae],B[ae],he):w[ae];v?(R.copy(b.normals[L]).multiplyScalar(X.x),C.copy(b.binormals[L]).multiplyScalar(X.y),U.copy(x[L]).add(R).add(C),Re(U.x,U.y,U.z)):Re(X.x,X.y,u/l*L)}for(let L=m-1;L>=0;L--){const ae=L/m,X=p*Math.cos(ae*Math.PI/2),Q=g*Math.sin(ae*Math.PI/2)+_;for(let Y=0,Me=I.length;Y<Me;Y++){const de=H(I[Y],K[Y],Q);Re(de.x,de.y,u+X)}for(let Y=0,Me=G.length;Y<Me;Y++){const de=G[Y];D=j[Y];for(let ye=0,Ne=de.length;ye<Ne;ye++){const Ve=H(de[ye],D[ye],Q);v?Re(Ve.x,Ve.y+x[l-1].y,x[l-1].x+X):Re(Ve.x,Ve.y,u+X)}}}pe(),_e();function pe(){const L=i.length/3;if(f){let ae=0,X=q*ae;for(let Q=0;Q<W;Q++){const Y=$[Q];Te(Y[2]+X,Y[1]+X,Y[0]+X)}ae=l+m*2,X=q*ae;for(let Q=0;Q<W;Q++){const Y=$[Q];Te(Y[0]+X,Y[1]+X,Y[2]+X)}}else{for(let ae=0;ae<W;ae++){const X=$[ae];Te(X[2],X[1],X[0])}for(let ae=0;ae<W;ae++){const X=$[ae];Te(X[0]+q*l,X[1]+q*l,X[2]+q*l)}}n.addGroup(L,i.length/3-L,0)}function _e(){const L=i.length/3;let ae=0;Ee(I,ae),ae+=I.length;for(let X=0,Q=G.length;X<Q;X++){const Y=G[X];Ee(Y,ae),ae+=Y.length}n.addGroup(L,i.length/3-L,1)}function Ee(L,ae){let X=L.length;for(;--X>=0;){const Q=X;let Y=X-1;Y<0&&(Y=L.length-1);for(let Me=0,de=l+m*2;Me<de;Me++){const ye=q*Me,Ne=q*(Me+1),Ve=ae+Q+ye,ut=ae+Y+ye,T=ae+Y+Ne,M=ae+Q+Ne;Ue(Ve,ut,T,M)}}}function Re(L,ae,X){c.push(L),c.push(ae),c.push(X)}function Te(L,ae,X){Ke(L),Ke(ae),Ke(X);const Q=i.length/3,Y=y.generateTopUV(n,i,Q-3,Q-2,Q-1);be(Y[0]),be(Y[1]),be(Y[2])}function Ue(L,ae,X,Q){Ke(L),Ke(ae),Ke(Q),Ke(ae),Ke(X),Ke(Q);const Y=i.length/3,Me=y.generateSideWallUV(n,i,Y-6,Y-3,Y-2,Y-1);be(Me[0]),be(Me[1]),be(Me[3]),be(Me[1]),be(Me[2]),be(Me[3])}function Ke(L){i.push(c[L*3+0]),i.push(c[L*3+1]),i.push(c[L*3+2])}function be(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return k_(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new jo[i.type]().fromJSON(i)),new pa(n,e.options)}}const B_={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],h=e[i*3],l=e[i*3+1];return[new ce(r,o),new ce(a,c),new ce(h,l)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],h=e[n*3],l=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-l)<Math.abs(o-h)?[new ce(o,1-c),new ce(h,1-u),new ce(f,1-g),new ce(_,1-d)]:[new ce(a,1-c),new ce(l,1-u),new ce(p,1-g),new ce(m,1-d)]}};function k_(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Hr extends Yt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let h=0;const l=[],u=new A,f=new A,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const y=[],x=d/n;let v=0;d===0&&o===0?v=.5/t:d===n&&c===Math.PI&&(v=-.5/t);for(let b=0;b<=t;b++){const C=b/t;u.x=-e*Math.cos(i+C*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(C+v,1-x),y.push(h++)}l.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){const x=l[d][y+1],v=l[d][y],b=l[d+1][y],C=l[d+1][y+1];(d!==0||o>0)&&p.push(x,v,C),(d!==n-1||c<Math.PI)&&p.push(v,b,C)}this.setIndex(p),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(_,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xe extends fn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zc,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends Xe{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function xr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function H_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function G_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function uh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class Fs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class V_ extends Fs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case il:r=e,a=2*t-n;break;case sl:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:o=e,c=2*n-t;break;case sl:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const h=(n-t)*.5,l=this.valueSize;this._weightPrev=h/(t-a),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=o*l}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,l=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let b=0;b!==a;++b)r[b]=d*o[l+b]+y*o[h+b]+x*o[c+b]+v*o[u+b];return r}}class W_ extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,h=c-a,l=(n-t)/(i-t),u=1-l;for(let f=0;f!==a;++f)r[f]=o[h+f]*u+o[c+f]*l;return r}}class X_ extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xr(t,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xr(e.times,Array),values:xr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new X_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new V_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return Qr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&H_(i))for(let a=0,c=i.length;a!==c;++a){const h=i[a];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Qr,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const h=e[a],l=e[a+1];if(h!==l&&(a!==1||h!==e[0]))if(i)c=!0;else{const u=a*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,h=0;h!==n;++h)t[c+h]=t[a+h];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Zi;class rs extends gn{}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Ps;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class fh extends gn{}fh.prototype.ValueTypeName="color";class Qi extends gn{}Qi.prototype.ValueTypeName="number";class q_ extends Fs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let h=e*a;for(let l=h+a;h!==l;h+=4)Ye.slerpFlat(r,0,o,h-a,o,h,c);return r}}class gi extends gn{InterpolantFactoryMethodLinear(e){return new q_(this.times,this.values,this.getValueSize(),e)}}gi.prototype.ValueTypeName="quaternion";gi.prototype.DefaultInterpolation=Zi;gi.prototype.InterpolantFactoryMethodSmooth=void 0;class os extends gn{}os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Ps;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;class es extends gn{}es.prototype.ValueTypeName="vector";class j_{constructor(e,t=-1,n,i=Mu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(K_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],h=[];c.push((a+r-1)%r,a,(a+1)%r),h.push(0,1,0);const l=G_(c);c=uc(c,1,l),h=uc(h,1,l),!i&&c[0]===0&&(c.push(r),h.push(h[0])),o.push(new Qi(".morphTargetInfluences["+t[a].name+"]",c,h).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const h=e[a],l=h.name.match(r);if(l&&l.length>1){const u=l[1];let f=i[u];f||(i[u]=f=[]),f.push(h)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,p,g,_){if(p.length!==0){const m=[],d=[];uh(p,m,d,g),m.length!==0&&_.push(new u(f,m,d))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let u=0;u<h.length;u++){const f=h[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)p[f[g].morphTargets[_]]=-1;for(const _ in p){const m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),d.push(x.morphTarget===_?1:0)}i.push(new Qi(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{const p=".bones["+t[u].name+"]";n(es,p+".position",f,"pos",i),n(gi,p+".quaternion",f,"rot",i),n(es,p+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return es;case"color":return fh;case"quaternion":return gi;case"bool":case"boolean":return rs;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function K_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y_(s.type);if(s.times===void 0){const t=[],n=[];uh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ts={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Z_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){a++,r===!1&&i.onStart!==void 0&&i.onStart(l,o,a),r=!0},this.itemEnd=function(l){o++,i.onProgress!==void 0&&i.onProgress(l,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,u){return h.push(l,u),this},this.removeHandler=function(l){const u=h.indexOf(l);return u!==-1&&h.splice(u,2),this},this.getHandler=function(l){for(let u=0,f=h.length;u<f;u+=2){const p=h[u],g=h[u+1];if(p.global&&(p.lastIndex=0),p.test(l))return g}return null}}}const J_=new Z_;class Yn{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yn.DEFAULT_MATERIAL_NAME="__DEFAULT";const En={};class $_ extends Error{constructor(e,t){super(e),this.response=t}}class Gr extends Yn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ts.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:i});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const l=En[e],u=h.body.getReader(),f=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let _=0;const m=new ReadableStream({start(d){y();function y(){u.read().then(({done:x,value:v})=>{if(x)d.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,R=l.length;C<R;C++){const U=l[C];U.onProgress&&U.onProgress(b)}d.enqueue(v),y()}})}}});return new Response(m)}else throw new $_(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,a));case"json":return h.json();default:if(a===void 0)return h.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(f);return h.arrayBuffer().then(g=>p.decode(g))}}}).then(h=>{ts.add(e,h);const l=En[e];delete En[e];for(let u=0,f=l.length;u<f;u++){const p=l[u];p.onLoad&&p.onLoad(h)}}).catch(h=>{const l=En[e];if(l===void 0)throw this.manager.itemError(e),h;delete En[e];for(let u=0,f=l.length;u<f;u++){const p=l[u];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Q_ extends Yn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Is("img");function c(){l(),ts.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(u){l(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){a.removeEventListener("load",c,!1),a.removeEventListener("error",h,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class st extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=new At,o=new Q_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Vr extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Lo=new He,fc=new A,dc=new A;class ma{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dc),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e0 extends ma{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ji*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class t0 extends Vr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new e0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pc=new He,gs=new A,Po=new A;class n0 extends ma{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(gs),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),i.makeTranslation(-gs.x,-gs.y,-gs.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class bn extends Vr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new n0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class i0 extends ma{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wi extends Vr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new i0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rs extends Vr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class s0 extends Yn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ts.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){ts.add(e,c),t&&t(c),r.manager.itemEnd(e)}).catch(function(c){i&&i(c),r.manager.itemError(e),r.manager.itemEnd(e)}),r.manager.itemStart(e)}}let vr;class dh{static getContext(){return vr===void 0&&(vr=new(window.AudioContext||window.webkitAudioContext)),vr}static setContext(e){vr=e}}class Pn extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gr(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{const h=c.slice(0);dh.getContext().decodeAudioData(h,function(u){t(u)},a)}catch(h){a(h)}},n,i);function a(c){i?i(c):console.error(c),r.manager.itemError(e)}}}class r0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=mc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function mc(){return(typeof performance>"u"?Date:performance).now()}const ti=new A,gc=new Ye,o0=new A,ni=new A;class In extends at{constructor(){super(),this.type="AudioListener",this.context=dh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new r0}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ti,gc,o0),ni.set(0,0,-1).applyQuaternion(gc),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ti.x,i),t.positionY.linearRampToValueAtTime(ti.y,i),t.positionZ.linearRampToValueAtTime(ti.z,i),t.forwardX.linearRampToValueAtTime(ni.x,i),t.forwardY.linearRampToValueAtTime(ni.y,i),t.forwardZ.linearRampToValueAtTime(ni.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ti.x,ti.y,ti.z),t.setOrientation(ni.x,ni.y,ni.z,n.x,n.y,n.z)}}class xt extends at{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ga="\\[\\]\\.:\\/",a0=new RegExp("["+ga+"]","g"),_a="[^"+ga+"]",l0="[^"+ga.replace("\\.","")+"]",c0=/((?:WC+[\/:])*)/.source.replace("WC",_a),h0=/(WCOD+)?/.source.replace("WCOD",l0),u0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_a),f0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_a),d0=new RegExp("^"+c0+h0+u0+f0+"$"),p0=["material","materials","bones","map"];class m0{constructor(e,t,n){const i=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(a0,"")}static parseTrackName(e){const t=d0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);p0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const o=e[i];if(o===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=m0;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ir{constructor(e,t,n=0,i=1/0){this.ray=new zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return $o(e,this,n,t),n.sort(_c),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$o(e[i],this,n,t);return n.sort(_c),n}}function _c(s,e){return s.distance-e.distance}function $o(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,o=i.length;r<o;r++)$o(i[r],e,t,!0)}}class g0{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Yo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,o){return this.currentPath.bezierCurveTo(e,t,n,i,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const y=[];for(let x=0,v=d.length;x<v;x++){const b=d[x],C=new Er;C.curves=b.curves,y.push(C)}return y}function n(d,y){const x=y.length;let v=!1;for(let b=x-1,C=0;C<x;b=C++){let R=y[b],U=y[C],S=U.x-R.x,w=U.y-R.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(R=y[C],S=-S,U=y[b],w=-w),d.y<R.y||d.y>U.y)continue;if(d.y===R.y){if(d.x===R.x)return!0}else{const G=w*(d.x-R.x)-S*(d.y-R.y);if(G===0)return!0;if(G<0)continue;v=!v}}else{if(d.y!==R.y)continue;if(U.x<=d.x&&d.x<=R.x||R.x<=d.x&&d.x<=U.x)return!0}}return v}const i=Vi.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,c;const h=[];if(r.length===1)return a=r[0],c=new Er,c.curves=a.curves,h.push(c),h;let l=!i(r[0].getPoints());l=e?!l:l;const u=[],f=[];let p=[],g=0,_;f[g]=void 0,p[g]=[];for(let d=0,y=r.length;d<y;d++)a=r[d],_=a.getPoints(),o=i(_),o=e?!o:o,o?(!l&&f[g]&&g++,f[g]={s:new Er,p:_},f[g].s.curves=a.curves,l&&g++,p[g]=[]):p[g].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let d=!1,y=0;for(let x=0,v=f.length;x<v;x++)u[x]=[];for(let x=0,v=f.length;x<v;x++){const b=p[x];for(let C=0;C<b.length;C++){const R=b[C];let U=!0;for(let S=0;S<f.length;S++)n(R.p,f[S].p)&&(x!==S&&y++,U?(U=!1,u[S].push(R)):d=!0);U&&u[x].push(R)}}y>0&&d===!1&&(p=u)}let m;for(let d=0,y=f.length;d<y;d++){c=f[d].s,h.push(c),m=p[d];for(let x=0,v=m.length;x<v;x++)c.holes.push(m[x].h)}return h}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);class _0 extends Yn{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Gr(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=r.parse(JSON.parse(a));t&&t(c)},n,i)}parse(e){return new y0(e)}}class y0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=x0(e,t,this.data);for(let r=0,o=i.length;r<o;r++)n.push(...i[r].toShapes());return n}}function x0(s,e,t){const n=Array.from(s),i=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,c=0;for(let h=0;h<n.length;h++){const l=n[h];if(l===`
`)a=0,c-=r;else{const u=v0(l,i,a,c,t);a+=u.offsetX,o.push(u.path)}}return o}function v0(s,e,t,n,i){const r=i.glyphs[s]||i.glyphs["?"];if(!r){console.error('THREE.Font: character "'+s+'" does not exists in font family '+i.familyName+".");return}const o=new g0;let a,c,h,l,u,f,p,g;if(r.o){const _=r._cachedOutline||(r._cachedOutline=r.o.split(" "));for(let m=0,d=_.length;m<d;)switch(_[m++]){case"m":a=_[m++]*e+t,c=_[m++]*e+n,o.moveTo(a,c);break;case"l":a=_[m++]*e+t,c=_[m++]*e+n,o.lineTo(a,c);break;case"q":h=_[m++]*e+t,l=_[m++]*e+n,u=_[m++]*e+t,f=_[m++]*e+n,o.quadraticCurveTo(u,f,h,l);break;case"b":h=_[m++]*e+t,l=_[m++]*e+n,u=_[m++]*e+t,f=_[m++]*e+n,p=_[m++]*e+t,g=_[m++]*e+n,o.bezierCurveTo(u,f,p,g,h,l);break}}return{offsetX:r.ha*e,path:o}}class Ni extends pa{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class ph extends Br{constructor(){super();const e=new st().load("./objects/picture/title.png"),t=new it({map:e,alphaTest:0,transparent:!0}),n=new lt(6.06144,1.49184);this.title=new Ie(n,t),this.title.position.set(0,2,0),this.add(this.title);const i=new st().load("./objects/picture/subtitle.png"),r=new it({map:i,alphaTest:0,transparent:!0}),o=new lt(2.81,.505);this.subtitle=new Ie(o,r),this.subtitle.position.set(2,1.2,1.1),this.subtitle.rotation.set(0,0,Math.PI/8),this.add(this.subtitle);const a=new st().load("./objects/picture/press.png"),c=new it({map:a,alphaTest:0,transparent:!0}),h=new lt(4.46,.78);this.press=new Ie(h,c),this.press.position.set(0,-.5,0),this.add(this.press);const l=new st().load("./objects/picture/background2.png"),u=new lt(1280,720),f=new it({map:l,side:Bt});this.backgroundMesh=new Ie(u,f),this.backgroundMesh.position.set(0,0,-250),this.add(this.backgroundMesh)}update(){const e=Date.now()*.001,t=.2,n=.5,i=Math.sin(e*t),r=Math.cos(e*n);this.backgroundMesh.position.set(i*200,r*100,-250);const a=Math.sin(e*2);this.subtitle.position.z=1+a*.1}}let mh="start",gh="none",_h="none",yh=1,xh=!1,vh=!1;function kt(){return mh}function Mh(){return yh}function Os(){return xh}function M0(){return vh}function S0(){return gh}function E0(){return _h}function Fi(s){mh=s}function T0(s){yh=s}function kn(s){xh=s}function b0(s){vh=s}function Xi(s){gh=s}function Dr(s){_h=s}function w0(s){const e=kt();return e=="select"&&s=="ArrowLeft"?-1:e=="select"&&s=="ArrowRight"?1:e=="select"&&s=="ArrowUp"?-3:e=="select"&&s=="ArrowDown"?3:0}function A0(s){const e=kt();return e=="start"&&s==" "||e=="select"&&s==" "||e=="play"&&Os()==!1&&s=="Escape"}function R0(s){const e=kt();return e=="start"&&s==" "?(Fi("select"),!0):e=="select"&&s==" "?(Fi("play"),kn(!1),!0):(e=="play"&&Os()==!1&&s=="Escape"&&kn(!0),!1)}function Ui(){const s=kt();if(s=="start")return new ph;if(s=="end")return new C0(M0());if(s=="play")return new Ry(Mh());if(s=="select")return new Cy}class Sh{constructor(){this.isLocked=!1}async acquire(){for(;this.isLocked;)await new Promise(e=>setTimeout(e,10));this.isLocked=!0}release(){this.isLocked=!1}}class C0 extends Br{constructor(e){if(super(),e==!0){const y=new st().load("./objects/picture/win.png"),x=new it({map:y,alphaTest:0,transparent:!0}),v=new lt(5.41,1.68);this.title=new Ie(v,x),this.title.position.set(0,2,0),this.add(this.title)}else{const y=new st().load("./objects/picture/loss.png"),x=new it({map:y,alphaTest:0,transparent:!0}),v=new lt(5.82,1.65);this.title=new Ie(v,x),this.title.position.set(0,2,0),this.add(this.title)}this.add(new Rs(7829367));const t=new Wi(16777215,1);t.position.set(100,100,100),this.add(t);const n=new st().load("./objects/picture/background2.png"),i=new lt(1280,720),r=new it({map:n,side:Bt});this.backgroundMesh=new Ie(i,r),this.backgroundMesh.position.set(0,0,-250),this.add(this.backgroundMesh),this.retry_text=null;const o=new st().load("./objects/picture/pause-retry.png"),a=new it({map:o,alphaTest:.01,transparent:!0}),c=new lt(1.0275,.21);this.retry_text=new Ie(c,a),this.retry_text.position.set(-.8,-.2,3.5),this.add(this.retry_text),this.exit_text=null;const h=new st().load("./objects/picture/pause-back.png"),l=new it({map:h,alphaTest:.01,transparent:!0}),u=new lt(1.0275,.21);this.exit_text=new Ie(u,l),this.exit_text.position.set(.8,-.2,3.5),this.add(this.exit_text);const f=Ur();this.onMouseMoveHandler=this.onMouseMove.bind(this),f.domElement.addEventListener("mousemove",this.onMouseMoveHandler,!1),this.onMouseClickHandler=this.onMouseClick.bind(this),f.domElement.addEventListener("click",this.onMouseClickHandler,!1);var p=new In,g=new xt(p),_=new xt(p),m=new xt(p),d=new Pn;d.load("./audio/switch.wav",function(y){g.setBuffer(y),g.setLoop(!1),g.setVolume(.5),g.pause()}),this.switch_sound=g,d.load("./audio/check-play.wav",function(y){_.setBuffer(y),_.setLoop(!1),_.setVolume(.5),_.pause()}),this.play_sound=_,d.load("./audio/check-quit.wav",function(y){m.setBuffer(y),m.setLoop(!1),m.setVolume(.5),m.pause()}),this.quit_sound=m,this.last_move="none"}onMouseMove(e){const t={x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1},n=new Ir,i=new A(t.x,t.y,.5),r=Nr();i.unproject(r),n.set(r.position,i.sub(r.position).normalize());const o=[this.retry_text,this.exit_text],a=n.intersectObjects(o);var c="none";if(a.length>0){const h=a[0].object,l=1.2;h===this.retry_text?c="retry":h===this.exit_text&&(c="exit"),h.scale.x!==l&&h.scale.set(l,l,l)}else for(const h of o)h.scale.x!==1&&h.scale.set(1,1,1);c!=this.last_move&&c!="none"&&(this.switch_sound.stop(),this.switch_sound.play()),this.last_move=c}onMouseClick(e){const t={x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1},n=new Ir,i=new A(t.x,t.y,.5),r=Nr();i.unproject(r),n.set(r.position,i.sub(r.position).normalize());const o=[this.retry_text,this.exit_text],a=n.intersectObjects(o);if(a.length>0){const c=a[0].object;c===this.retry_text?(Dr("retry"),this.play_sound.stop(),this.play_sound.play()):c===this.exit_text&&(Dr("exit"),this.quit_sound.stop(),this.quit_sound.play())}}destructor(){const e=Ur();e.domElement.removeEventListener("mousemove",this.onMouseMoveHandler),e.domElement.removeEventListener("click",this.onMouseClickHandler,!1)}update(){const e=Date.now()*.001,t=.2,n=.5,i=Math.sin(e*t),r=Math.cos(e*n);this.backgroundMesh.position.set(i*200,r*100,-250)}}class L0 extends ct{constructor(e){super(),this.name="plane",this.geo="plane",this.parent=e;const t=new st().load("./objects/picture/grassnew1.png");t.wrapS=Ht,t.wrapT=Ht;const n=new Xe({map:t,side:Bt});n.map.repeat.set(20,20),this.ground=new Ie(new lt(100,100,1,1),n),this.ground.rotation.set(-Math.PI/2,0,0),this.ground.position.set(0,-.5,0),this.ground.receiveShadow=!0,this.normal={x:0,y:1,z:0};var i=Math.sqrt(this.normal.x*this.normal.x+this.normal.y*this.normal.y+this.normal.z*this.normal.z);this.normal.x/=i,this.normal.y/=i,this.normal.z/=i,this.ground_coef=-.5,this.obj_type="ground",this.no_collision=!1,e.addToUpdateList(this),this.parent.add(this.ground)}is_intersect(e,t){return Math.abs(e.x*this.normal.x+e.y*this.normal.y+e.z*this.normal.z-this.ground_coef)<=t}cal_min_t(e,t,n){var i=t.x*this.normal.x+t.y*this.normal.y+t.z*this.normal.z;if(Math.abs(i)<1e-6)return 2;var r=-(e.x*this.normal.x+e.y*this.normal.y+e.z*this.normal.z-this.ground_coef+n),o=-(e.x*this.normal.x+e.y*this.normal.y+e.z*this.normal.z-this.ground_coef-n),a=r/i,c=o/i;if(a>c){var h=a;a=c,c=h}return c<.01?2:a<-.01?c:a}update(){}}function P0(s,e){s=="plane"&&new L0(e)}class I0 extends ct{constructor(e,t,n,i){super(),this.parent=e,this.name="launch_pad",this.obj_type="launch_pad",this.geo="none";const r=new Float32Array([-.2,-.2,.2,.2,-.2,.2,.2,-.2,-.2,-.2,-.2,-.2,-.2,.2,.2,.2,.2,.2,.2,.2,-.2,-.2,.2,-.2,-.1,.1,-.2,.1,.1,-.2,.1,-.1,-.2,-.1,-.1,-.2,-.1,.1,-1,.1,.1,-1,.1,-.1,-1,-.1,-.1,-1]),o=new Uint16Array([0,1,5,0,5,4,1,2,6,1,6,5,3,0,4,3,4,7,0,2,1,0,3,2,4,5,6,4,6,7,7,8,11,7,11,3,3,9,10,3,10,2,2,10,9,2,9,6,6,9,8,6,8,7,8,12,11,12,15,11,8,9,12,13,12,9,9,10,14,9,14,13,11,14,10,11,15,14,14,15,13,15,12,13]),a=new Yt;a.setAttribute("position",new Rt(r,3)),a.setIndex(new Rt(o,1)),a.computeVertexNormals(),this.launch_pad=new Ie(a,new Xe({color:16711680})),this.launch_pad.position.set(t,n,i),this.force_render=new Ie(new lt(.1,.05*.6,1,1),new it({color:this.linear_color(.05)})),this.force_render.position.set(t-.5,n+this.force*.6/2,i),this.pad_x=t,this.pad_y=n,this.pad_z=i,this.parent.addToUpdateList(this),this.max_y=Math.PI/4,this.min_y=-Math.PI/4,this.max_x=Math.PI/8*3,this.min_x=0,this.step=.01,this.left_move=!1,this.right_move=!1,this.up_move=!1,this.down_move=!1,this.force=.05,this.max_force=1,this.last_in_press=!1,this.in_press=!1,this.attacking=!1,this.no_collision=!0,this.parent.add(this.launch_pad);var c=new In,h=new xt(c),l=new Pn;l.load("./audio/shoot2.mp3",function(u){h.setBuffer(u),h.setLoop(!1),h.setVolume(.5),h.pause()}),this.shoot_sound=h}linear_color(e){const t=Math.round(255*Math.min(e*2,1))*65536,n=Math.round(255*Math.min((1-e)*2,1))*256;return t+n}update_launch_info(){this.left_move&&(this.launch_pad.rotation.y+=this.step),this.right_move&&(this.launch_pad.rotation.y-=this.step),this.launch_pad.rotation.y<this.min_y&&(this.launch_pad.rotation.y=this.min_y),this.launch_pad.rotation.y>this.max_y&&(this.launch_pad.rotation.y=this.max_y),this.up_move&&(this.launch_pad.rotation.x+=this.step),this.down_move&&(this.launch_pad.rotation.x-=this.step),this.launch_pad.rotation.x<this.min_x&&(this.launch_pad.rotation.x=this.min_x),this.launch_pad.rotation.x>this.max_x&&(this.launch_pad.rotation.x=this.max_x),this.in_press?this.last_in_press==!1?(this.force=.05,this.last_in_press=!0,this.force_render=new Ie(new lt(.1,.05*.6,1,1),new it({color:this.linear_color(.05)})),this.force_render.position.set(this.pad_x-.5,this.pad_y+this.force*.6/2,this.pad_z)):(this.force+=this.step,this.force>this.max_force&&(this.force=this.max_force),this.force_render=new Ie(new lt(.1,this.force*.6,1,1),new it({color:this.linear_color(this.force)})),this.force_render.position.set(this.pad_x-.5,this.pad_y+this.force*.6/2,this.pad_z)):this.last_in_press=!1}unrender_force(){this.parent.remove(this.force_render)}update(){this.parent.remove(this.force_render),this.attacking||this.update_launch_info(),this.parent.add(this.force_render)}update_by_press_key(e){this.attacking||(e=="ArrowLeft"&&(this.left_move=!0),e=="ArrowRight"&&(this.right_move=!0),e=="ArrowUp"&&(this.up_move=!0),e=="ArrowDown"&&(this.down_move=!0),e==" "&&(this.in_press=!0),e=="Enter"&&(this.left_move=!1,this.right_move=!1,this.up_move=!1,this.down_move=!1,this.in_press=!1,this.last_in_press=!1,this.attacking=!0,this.parent.set_first_shell_attack(this.force,this.launch_pad.rotation.x,this.launch_pad.rotation.y,1),this.shoot_sound.stop(),this.shoot_sound.offset=.1,this.shoot_sound.play(),this.force=.05,this.parent.remove(this.force_render),this.force_render=new Ie(new lt(.1,.05*.6,1,1),new it({color:this.linear_color(.05)})),this.force_render.position.set(this.pad_x-.5,this.pad_y+this.force*.6/2,this.pad_z),this.parent.add(this.force_render)))}update_by_release_key(e){this.attacking||(e=="ArrowLeft"&&(this.left_move=!1),e=="ArrowRight"&&(this.right_move=!1),e=="ArrowUp"&&(this.up_move=!1),e=="ArrowDown"&&(this.down_move=!1),e==" "&&(this.in_press=!1))}}function D0(s,e){new I0(e,s.x,s.y,s.z)}function Bi(s,e){return{x:s.y*e.z-s.z*e.y,y:s.z*e.x-s.x*e.z,z:s.x*e.y-s.y*e.x}}function Cs(s,e){return s.x*e.x+s.y*e.y+s.z*e.z}function xs(s,e){return{x:s.x-e.x,y:s.y-e.y,z:s.z-e.z}}function wn(s,e){return{x:s.x+e.x,y:s.y+e.y,z:s.z+e.z}}function It(s,e){return{x:s.x*e,y:s.y*e,z:s.z*e}}function as(s,e,t,n,i,r,o,a,c,h){var l=.9,u={x:(e.x*i+o.x*h)/(i+h),y:(e.y*i+o.y*h)/(i+h),z:(e.z*i+o.z*h)/(i+h)},f={x:(e.x-(e.x-u.x)*2)*l,y:(e.y-(e.y-u.y)*2)*l,z:(e.z-(e.z-u.z)*2)*l},p={x:(o.x-(o.x-u.x)*2)*l,y:(o.y-(o.y-u.y)*2)*l,z:(o.z-(o.z-u.z)*2)*l},g=xs(e,o),_=xs(s,r),m=Math.sqrt(Cs(_,_));_=It(_,1/m);var d=It(_,n),y=It(_,-c),x=Bi(t,d),v=Bi(a,y),b=It(d,Cs(g,d)/n/n),C=It(y,Cs(g,y)/c/c),R=It(wn(t,It(Bi(d,xs(g,wn(C,wn(x,v)))),5/7*h/(i+h)/n/n)),l),U=It(wn(a,It(Bi(y,xs(g,wn(b,wn(x,v)))),5/7*i/(i+h)/c/c)),l);return{new_velocity1:f,new_velocity2:p,new_angle_velocity1:R,new_angle_velocity2:U}}function ls(s,e,t,n){var i=.9,r={x:n.x,y:n.y,z:n.z},o=Cs(s,r);o>0&&(r=It(r,-1)),o=-o;var a=It(wn(s,It(r,2*o)),i),c=It(r,-t),h=wn(Bi(e,c),It(c,Cs(s,c)/t/t)),l=xs(s,h),u=Bi(c,l),f=It(u,5/7/t/t),p=wn(e,f),g=It(p,i);return{new_velocity:a,new_angle_velocity:g}}function wt(s){return s*2e3<3?0:s*2e3}class N0 extends ct{constructor(e,t,n,i,r){super(),this.parent=e,this.name="normal_enemy",this.obj_type="enemy",this.geo="sphere";const o=new st().load("./objects/picture/normal.png");this.normal_material=new Xe({map:o}),this.enemy=new Ie(new Hr(.3,32,32),this.normal_material);const a=new st().load("./objects/picture/shock.png");this.shock_material=new Xe({map:a});const c=new st().load("./objects/picture/hurt.png");this.hurt_material=new Xe({map:c}),this.enemy.position.set(t,n,i),this.enemy.rotation.set(0,-Math.PI/2,0),this.blood=100,this.enemy_id=r,this.velocity={x:0,y:0,z:0},this.angle_velocity={x:0,y:0,z:0},this.radius=.3,this.no_collision=!1,this.mass=10,e.addToUpdateList(this),this.parent.add(this.enemy),this.remove_flag=!1;var h=new In,l=new xt(h),u=new xt(h),f=new Pn;f.load("./audio/hurt.mp3",function(p){l.setBuffer(p),l.setLoop(!1),l.setVolume(.5),l.pause()}),f.load("./audio/score.mp3",function(p){u.setBuffer(p),u.setLoop(!1),u.setVolume(.5),u.pause()}),this.hurt_sound=l,this.score_sound=u,this.sound_stage=3}update(){try{this.blood>0&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.enemy)),this.blood>=60?this.enemy.material=this.normal_material:this.blood>=30?(this.enemy.material=this.shock_material,this.sound_stage==3&&(this.sound_stage=2,this.hurt_sound.offset=.7,this.hurt_sound.play())):(this.enemy.material=this.hurt_material,this.sound_stage==2&&(this.sound_stage=1,this.hurt_sound.offset=.7,this.hurt_sound.play())),this.blood>0?(this.move_step(),this.apply_g(),this.decay_velocity()):(this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.enemy),this.hurt_sound.stop(),this.score_sound.offset=1,this.score_sound.play()),this.no_collision=!0)}catch(e){window.alert("Error:",e)}}get_position(){return this.enemy.position}is_fix(){return!1}move_time(e){this.enemy.position.x+=this.velocity.x*e,this.enemy.position.y+=this.velocity.y*e,this.enemy.position.z+=this.velocity.z*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.enemy.rotation.x,this.enemy.rotation.y,this.enemy.rotation.z,"XYZ"));n.multiply(t),this.enemy.rotation.setFromQuaternion(n,"XYZ"),(this.enemy.position.x<-15||this.enemy.position.x>15||this.enemy.position.y<-100||this.enemy.position.y>100||this.enemy.position.z<-15||this.enemy.position.z>2)&&(this.blood=0)}move_step(){if(!(this.blood<=0)){var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="enemy"&&x.enemy_id==this.enemy_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.enemy.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass),a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*n.mass*(a.x*a.x+a.y*a.y+a.z*a.z);if(this.blood-=wt(c),n.obj_type=="enemy"){var c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal),c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);this.blood-=wt(c),this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="enemy"&&y.enemy_id==this.enemy_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*3e-4/u,y:(this.velocity.y+2*l.y*f)*p+l.y*3e-4/u,z:(this.velocity.z+2*l.z*f)*p+l.z*3e-4/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);this.blood-=wt(c),y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.enemy.position,this.radius)){var l=null;if(y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}is_intersect(e,t){var n=(this.enemy.position.x-e.x)*(this.enemy.position.x-e.x)+(this.enemy.position.y-e.y)*(this.enemy.position.y-e.y)+(this.enemy.position.z-e.z)*(this.enemy.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.enemy.position.x-e.x,y:this.enemy.position.y-e.y,z:this.enemy.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.001/n,this.velocity.y+=t.y*.001/n,this.velocity.z+=t.z*.001/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=-2*(t.x*(this.enemy.position.x-e.x)+t.y*(this.enemy.position.y-e.y)+t.z*(this.enemy.position.z-e.z)),o=(this.enemy.position.x-e.x)*(this.enemy.position.x-e.x)+(this.enemy.position.y-e.y)*(this.enemy.position.y-e.y)+(this.enemy.position.z-e.z)*(this.enemy.position.z-e.z)-(this.radius+n)*(this.radius+n);if(Math.abs(i)<1e-6)return 2;var a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}}class U0 extends ct{constructor(e,t,n,i,r){super(),this.parent=e,this.name="big_enemy",this.obj_type="enemy",this.geo="sphere";const o=new st().load("./objects/picture/king.png");this.normal_material=new Xe({map:o}),this.enemy=new Ie(new Hr(.5,32,32),this.normal_material);const a=new st().load("./objects/picture/shock.png");this.shock_material=new Xe({map:a});const c=new st().load("./objects/picture/hurt.png");this.hurt_material=new Xe({map:c}),this.enemy.position.set(t,n,i),this.enemy.rotation.set(0,-Math.PI/2,0),this.blood=500,this.enemy_id=r,this.velocity={x:0,y:0,z:0},this.angle_velocity={x:0,y:0,z:0},this.radius=.5,this.no_collision=!1,this.mass=30,e.addToUpdateList(this),this.parent.add(this.enemy),this.remove_flag=!1;var h=new In,l=new xt(h),u=new xt(h),f=new Pn;f.load("./audio/hurt.mp3",function(p){l.setBuffer(p),l.setLoop(!1),l.setVolume(.5),l.pause()}),f.load("./audio/score.mp3",function(p){u.setBuffer(p),u.setLoop(!1),u.setVolume(.5),u.pause()}),this.hurt_sound=l,this.score_sound=u,this.sound_stage=3}update(){this.blood>0&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.enemy)),this.blood>=300?this.enemy.material=this.normal_material:this.blood>=150?(this.enemy.material=this.shock_material,this.sound_stage==3&&(this.sound_stage=2,this.hurt_sound.offset=.7,this.hurt_sound.play())):(this.enemy.material=this.hurt_material,this.sound_stage==2&&(this.sound_stage=1,this.hurt_sound.offset=.7,this.hurt_sound.play())),this.blood>0?(this.move_step(),this.apply_g(),this.decay_velocity()):(this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.enemy),this.hurt_sound.stop(),this.score_sound.offset=1,this.score_sound.play()),this.no_collision=!0)}get_position(){return this.enemy.position}is_fix(){return!1}move_time(e){this.enemy.position.x+=this.velocity.x*e,this.enemy.position.y+=this.velocity.y*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.enemy.rotation.x,this.enemy.rotation.y,this.enemy.rotation.z,"XYZ"));n.multiply(t),this.enemy.rotation.setFromQuaternion(n,"XYZ"),(this.enemy.position.x<-15||this.enemy.position.x>15||this.enemy.position.y<-100||this.enemy.position.y>100||this.enemy.position.z<-15||this.enemy.position.z>2)&&(this.blood=0)}move_step(){if(!(this.blood<=0)){var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="enemy"&&x.enemy_id==this.enemy_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.enemy.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass),a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*n.mass*(a.x*a.x+a.y*a.y+a.z*a.z);if(this.blood-=wt(c),n.obj_type=="enemy"){var c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal),c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);this.blood-=wt(c),this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="enemy"&&y.enemy_id==this.enemy_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*5e-4/u,y:(this.velocity.y+2*l.y*f)*p+l.y*5e-4/u,z:(this.velocity.z+2*l.z*f)*p+l.z*5e-4/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);this.blood-=wt(c),y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.enemy.position,this.radius)){var l=null;if(y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}is_intersect(e,t){var n=(this.enemy.position.x-e.x)*(this.enemy.position.x-e.x)+(this.enemy.position.y-e.y)*(this.enemy.position.y-e.y)+(this.enemy.position.z-e.z)*(this.enemy.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.enemy.position.x-e.x,y:this.enemy.position.y-e.y,z:this.enemy.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.002/n,this.velocity.y+=t.y*.002/n,this.velocity.z+=t.z*.002/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=-2*(t.x*(this.enemy.position.x-e.x)+t.y*(this.enemy.position.y-e.y)+t.z*(this.enemy.position.z-e.z)),o=(this.enemy.position.x-e.x)*(this.enemy.position.x-e.x)+(this.enemy.position.y-e.y)*(this.enemy.position.y-e.y)+(this.enemy.position.z-e.z)*(this.enemy.position.z-e.z)-(this.radius+n)*(this.radius+n);if(Math.abs(i)<1e-6)return 2;var a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}}function O0(s,e,t){e.id==0?new N0(s,e.x,e.y,e.z,t):e.id==1&&new U0(s,e.x,e.y,e.z,t)}function yc(s,e){if(e===Su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ko||e===Uc){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ko)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Dn extends Yn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new H0(t)}),this.register(function(t){return new K0(t)}),this.register(function(t){return new Z0(t)}),this.register(function(t){return new J0(t)}),this.register(function(t){return new V0(t)}),this.register(function(t){return new W0(t)}),this.register(function(t){return new X0(t)}),this.register(function(t){return new q0(t)}),this.register(function(t){return new k0(t)}),this.register(function(t){return new j0(t)}),this.register(function(t){return new G0(t)}),this.register(function(t){return new Y0(t)}),this.register(function(t){return new F0(t)}),this.register(function(t){return new $0(t)}),this.register(function(t){return new Q0(t)})}load(e,t,n,i){const r=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Jo.extractUrlBase(e),this.manager.itemStart(e);const a=function(h){i?i(h):console.error(h),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(h){try{r.parse(h,o,function(l){t(l),r.manager.itemEnd(e)},a)}catch(l){a(l)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Eh){try{o[qe.KHR_BINARY_GLTF]=new ey(e)}catch(u){i&&i(u);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new dy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](h);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let l=0;l<r.extensionsUsed.length;++l){const u=r.extensionsUsed[l],f=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:o[u]=new B0;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[u]=new ty(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[u]=new ny;break;case qe.KHR_MESH_QUANTIZATION:o[u]=new iy;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}h.setExtensions(o),h.setPlugins(a),h.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function z0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class F0{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let h;const l=new De(16777215);c.color!==void 0&&l.setRGB(c.color[0],c.color[1],c.color[2],Ct);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":h=new Wi(l),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new bn(l),h.distance=u;break;case"spot":h=new t0(l),h.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,h.angle=c.spot.outerConeAngle,h.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return h.position.set(0,0,0),h.decay=2,Hn(h,c),c.intensity!==void 0&&(h.intensity=c.intensity),h.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(h),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class B0{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return it}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Ct),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(i)}}class k0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class H0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(a,a)}return Promise.all(r)}}class G0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class V0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,dt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class W0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class X0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],Ct),Promise.all(r)}}class q0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class j0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],Ct),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,dt)),Promise.all(r)}}class Y0{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class K0{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Z0{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class J0{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const h=n.options.manager.getHandler(a.uri);h!==null&&(c=h)}return this.detectSupport().then(function(h){if(h)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class $0{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,h=i.byteLength||0,l=i.count,u=i.byteStride,f=new Uint8Array(a,c,h);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(l,u,f,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(l*u);return o.decodeGltfBuffer(new Uint8Array(p),l,u,f,i.mode,i.filter),p})})}else return null}}class Q0{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const h of i.primitives)if(h.mode!==Jt.TRIANGLES&&h.mode!==Jt.TRIANGLE_STRIP&&h.mode!==Jt.TRIANGLE_FAN&&h.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const h in o)a.push(this.parser.getDependency("accessor",o[h]).then(l=>(c[h]=l,c[h])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(h=>{const l=h.pop(),u=l.isGroup?l.children:[l],f=h[0].count,p=[];for(const g of u){const _=new He,m=new A,d=new Ye,y=new A(1,1,1),x=new r_(g.geometry,g.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,d,y));for(const v in c)if(v==="_COLOR_0"){const b=c[v];x.instanceColor=new Xo(b.array,b.itemSize,b.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);at.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return l.isGroup?(l.clear(),l.add(...p),l):p[0]}))}}const Eh="glTF",_s=12,xc={JSON:1313821514,BIN:5130562};class ey{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,_s),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Eh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-_s,r=new DataView(e,_s);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===xc.JSON){const h=new Uint8Array(e,_s+o,a);this.content=n.decode(h)}else if(c===xc.BIN){const h=_s+o;this.body=e.slice(h,h+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ty{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},h={};for(const l in o){const u=Qo[l]||l.toLowerCase();a[u]=o[l]}for(const l in e.attributes){const u=Qo[l]||l.toLowerCase();if(o[l]!==void 0){const f=n.accessors[e.attributes[l]],p=qi[f.componentType];h[u]=p.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(l){return new Promise(function(u){i.decodeDracoFile(l,function(f){for(const p in f.attributes){const g=f.attributes[p],_=c[p];_!==void 0&&(g.normalized=_)}u(f)},a,h)})})}}class ny{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iy{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Th extends Fs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,h=a*3,l=i-t,u=(n-t)/l,f=u*u,p=f*u,g=e*h,_=g-h,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+u;for(let v=0;v!==a;v++){const b=o[_+v+a],C=o[_+v+c]*l,R=o[g+v+a],U=o[g+v]*l;r[v]=y*b+x*C+m*R+d*U}return r}}const sy=new Ye;class ry extends Th{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return sy.fromArray(r).normalize().toArray(r),r}}const Jt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vc={9728:Tt,9729:Ft,9984:Bo,9985:Rc,9986:Mr,9987:fi},Mc={33071:$t,33648:wr,10497:Ht},Io={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Qo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oy={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Ps},Do={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ay(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Xe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),s.DefaultMaterial}function ii(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Hn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ly(s,e,t){let n=!1,i=!1,r=!1;for(let h=0,l=e.length;h<l;h++){const u=e[h];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let h=0,l=e.length;h<l;h++){const u=e[h];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(h){const l=h[0],u=h[1],f=h[2];return n&&(s.morphAttributes.position=l),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function cy(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hy(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+No(t.attributes):e=s.indices+":"+No(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+No(s.targets[n]);return e}function No(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ea(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const fy=new He;class dy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new z0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new st(this.options.manager):this.textureLoader=new s0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ii(r,a,i),Hn(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[h,l]of o.children.entries())r(l,a.children[h])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Jo.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Io[i.type],a=qi[i.componentType],c=i.normalized===!0,h=new a(i.count*o);return Promise.resolve(new Rt(h,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Io[i.type],h=qi[i.componentType],l=h.BYTES_PER_ELEMENT,u=l*c,f=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(p&&p!==u){const d=Math.floor(f/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count;let x=t.cache.get(y);x||(_=new h(a,d*p,i.count*p/l),x=new Qg(_,p/l),t.cache.add(y,x)),m=new ca(x,c,f%p/l,g)}else a===null?_=new h(i.count*c):_=new h(a,f,i.count*c),m=new Rt(_,c,g);if(i.sparse!==void 0){const d=Io.SCALAR,y=qi[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,b=new y(o[1],x,i.sparse.count*d),C=new h(o[2],v,i.sparse.count*c);a!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized));for(let R=0,U=b.length;R<U;R++){const S=b[R];if(m.setX(S,C[R*c]),c>=2&&m.setY(S,C[R*c+1]),c>=3&&m.setZ(S,C[R*c+2]),c>=4&&m.setW(S,C[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const h=this.loadImageSource(t,n).then(function(l){l.flipY=!1,l.name=o.name||a.name||"",l.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(l.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return l.magFilter=vc[f.magFilter]||Ft,l.minFilter=vc[f.minFilter]||fi,l.wrapS=Mc[f.wrapS]||Ht,l.wrapT=Mc[f.wrapT]||Ht,i.associations.set(l,{textures:e}),l}).catch(function(){return null});return this.textureCache[c]=h,h}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",h=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){h=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const l=Promise.resolve(c).then(function(u){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new At(_);m.needsUpdate=!0,f(m)}),t.load(Jo.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return h===!0&&a.revokeObjectURL(c),u.userData.mimeType=o.mimeType||uy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=l,l}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ih,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new nh,fn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Xe}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},h=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),h.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Ct),a.opacity=f[3]}u.baseColorTexture!==void 0&&h.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),h.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const l=r.alphaMode||Do.OPAQUE;if(l===Do.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,l===Do.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==it&&(h.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==it&&(h.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==it){const u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&o!==it&&h.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(h).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Hn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ii(i,u,r),u})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sc(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const h=e[a],l=hy(h),u=i[l];if(u)o.push(u.promise);else{let f;h.extensions&&h.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(h):f=Sc(new Yt,h,t),i[l]={primitive:h,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,h=o.length;c<h;c++){const l=o[c].material===void 0?ay(this.cache):this.getDependency("material",o[c].material);a.push(l)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const h=c.slice(0,c.length-1),l=c[c.length-1],u=[];for(let p=0,g=l.length;p<g;p++){const _=l[p],m=o[p];let d;const y=h[p];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new t_(_,y):new Ie(_,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?d.geometry=yc(d.geometry,Uc):m.mode===Jt.TRIANGLE_FAN&&(d.geometry=yc(d.geometry,ko));else if(m.mode===Jt.LINES)d=new o_(_,y);else if(m.mode===Jt.LINE_STRIP)d=new ua(_,y);else if(m.mode===Jt.LINE_LOOP)d=new a_(_,y);else if(m.mode===Jt.POINTS)d=new l_(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&cy(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Hn(d,r),m.extensions&&ii(i,d,m),t.assignFinalMaterial(d),u.push(d)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&ii(i,u[0],r),u[0];const f=new ct;r.extensions&&ii(i,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=u.length;p<g;p++)f.add(u[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(ju.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new aa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Hn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let h=0,l=o.length;h<l;h++){const u=o[h];if(u){a.push(u);const f=new He;r!==null&&f.fromArray(r.array,h*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new ha(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],h=[],l=[];for(let u=0,f=i.channels.length;u<f;u++){const p=i.channels[u],g=i.samplers[p.sampler],_=p.target,m=_.node,d=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),h.push(g),l.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(h),Promise.all(l)]).then(function(u){const f=u[0],p=u[1],g=u[2],_=u[3],m=u[4],d=[];for(let y=0,x=f.length;y<x;y++){const v=f[y],b=p[y],C=g[y],R=_[y],U=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const S=n._createAnimationTracks(v,b,C,R,U);if(S)for(let w=0;w<S.length;w++)d.push(S[w])}return new j_(r,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,h=i.weights.length;c<h;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let h=0,l=a.length;h<l;h++)o.push(n.getDependency("node",a[h]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(h){const l=h[0],u=h[1],f=h[2];f!==null&&l.traverse(function(p){p.isSkinnedMesh&&p.bind(f,fy)});for(let p=0,g=u.length;p<g;p++)l.add(u[p]);return l})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(h){return i._getNodeRef(i.cameraCache,r.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)}),this.nodeCache[e]=Promise.all(a).then(function(h){let l;if(r.isBone===!0?l=new th:h.length>1?l=new ct:h.length===1?l=h[0]:l=new at,l!==h[0])for(let u=0,f=h.length;u<f;u++)l.add(h[u]);if(r.name&&(l.userData.name=r.name,l.name=o),Hn(l,r),r.extensions&&ii(n,l,r),r.matrix!==void 0){const u=new He;u.fromArray(r.matrix),l.applyMatrix4(u)}else r.translation!==void 0&&l.position.fromArray(r.translation),r.rotation!==void 0&&l.quaternion.fromArray(r.rotation),r.scale!==void 0&&l.scale.fromArray(r.scale);return i.associations.has(l)||i.associations.set(l,{}),i.associations.get(l).nodes=e,l}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ct;n.name&&(r.name=i.createUniqueName(n.name)),Hn(r,n),n.extensions&&ii(t,r,n);const o=n.nodes||[],a=[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let l=0,u=c.length;l<u;l++)r.add(c[l]);const h=l=>{const u=new Map;for(const[f,p]of i.associations)(f instanceof fn||f instanceof At)&&u.set(f,p);return l.traverse(f=>{const p=i.associations.get(f);p!=null&&u.set(f,p)}),u};return i.associations=h(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];Bn[r.path]===Bn.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let h;switch(Bn[r.path]){case Bn.weights:h=Qi;break;case Bn.rotation:h=gi;break;case Bn.position:case Bn.scale:h=es;break;default:switch(n.itemSize){case 1:h=Qi;break;case 2:case 3:default:h=es;break}break}const l=i.interpolation!==void 0?oy[i.interpolation]:Zi,u=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const g=new h(c[f]+"."+Bn[r.path],t.array,u,l);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ea(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof gi?ry:Th;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function py(s,e,t){const n=e.attributes,i=new Ln;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,h=a.max;if(c!==void 0&&h!==void 0){if(i.set(new A(c[0],c[1],c[2]),new A(h[0],h[1],h[2])),a.normalized){const l=ea(qi[a.componentType]);i.min.multiplyScalar(l),i.max.multiplyScalar(l)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new A,c=new A;for(let h=0,l=r.length;h<l;h++){const u=r[h];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const _=ea(qi[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new dn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Sc(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Qo[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return $e.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Hn(s,e),py(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ly(s,e.targets,t):s})}class my extends ct{constructor(e,t){super(),this.parent=e,this.shell_id=t,this.name="normal_shell",this.obj_type="shell",this.geo="sphere",this.velocity={x:0,y:0,z:0},this.angle_velocity={x:0,y:0,z:0},this.no_collision=!1,this.radius=.1,this.small_velocity_period=0,this.mass=10,this.shell=null,this.shell_state="wait",new Dn().load("./objects/models/ball.glb",(function(i){this.shell=i.scene.clone(),this.shell.scale.set(.035,.035,.035),this.parent.add(this.shell),this.parent.addToUpdateList(this)}).bind(this),void 0,function(i){window.alert("An error happened.")}),this.remove_flag=!1}set_position(e,t,n){this.shell.position.set(e,t,n)}velocity_norm(){return Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z)}move_time(e){this.shell.position.x+=this.velocity.x*e,this.shell.position.y+=this.velocity.y*e,this.shell.position.z+=this.velocity.z*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.shell.rotation.x,this.shell.rotation.y,this.shell.rotation.z,"XYZ"));n.multiply(t),this.shell.rotation.setFromQuaternion(n,"XYZ"),(this.shell.position.x<-15||this.shell.position.x>15||this.shell.position.y<-100||this.shell.position.y>100||this.shell.position.z<-15||this.shell.position.z>2)&&(this.shell_state="used")}move_step(){if(this.velocity_norm()<.01&&(this.small_velocity_period+=1),this.small_velocity_period>200){this.shell_state="used";return}var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="shell"&&x.shell_id==this.shell_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.shell.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass);if(n.obj_type=="enemy"){var a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal);this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="shell"&&y.shell_id==this.shell_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*.001/u,y:(this.velocity.y+2*l.y*f)*p+l.y*.001/u,z:(this.velocity.z+2*l.z*f)*p+l.z*.001/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.shell.position,this.radius)){var l=null;if(y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}get_position(){return this.shell.position}is_fix(){return this.shell_state=="wait"}is_intersect(e,t){var n=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.shell.position.x-e.x,y:this.shell.position.y-e.y,z:this.shell.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.001/n,this.velocity.y+=t.y*.001/n,this.velocity.z+=t.z*.001/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=2*(t.x*(this.shell.position.x-e.x)+t.y*(this.shell.position.y-e.y)+t.z*(this.shell.position.z-e.z)),o=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+n)*(this.radius+n),a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}update(){this.shell_state!="used"&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.shell)),this.shell_state=="attacking"&&(this.move_step(),this.apply_g(),this.decay_velocity()),this.shell_state=="used"&&(this.no_collision=!0,this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.shell)))}}class gy extends ct{constructor(e,t,n,i){super(),this.parent=e,this.shell_id=t,this.name="sub_big_shell",this.obj_type="shell",this.geo="sphere",this.velocity={x:i.x,y:i.y,z:i.z},this.angle_velocity={x:0,y:0,z:0},this.no_collision=!1,this.radius=.075,this.small_velocity_period=0,this.mass=10,this.shell_state="attacking",new Dn().load("./objects/models/pokemonball.glb",(function(o){this.shell=o.scene.clone(),this.shell.scale.set(.0018,.0018,.0018),this.shell.position.set(n.x,n.y,n.z),this.parent.add(this.shell),this.parent.addToUpdateList(this)}).bind(this),void 0,function(o){window.alert("An error happened.")}),this.remove_flag=!1}set_position(e,t,n){this.shell.position.set(e,t,n)}velocity_norm(){return Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z)}move_time(e){this.shell.position.x+=this.velocity.x*e,this.shell.position.y+=this.velocity.y*e,this.shell.position.z+=this.velocity.z*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.shell.rotation.x,this.shell.rotation.y,this.shell.rotation.z,"XYZ"));n.multiply(t),this.shell.rotation.setFromQuaternion(n,"XYZ"),(this.shell.position.x<-15||this.shell.position.x>15||this.shell.position.y<-100||this.shell.position.y>100||this.shell.position.z<-15||this.shell.position.z>2)&&(this.shell_state="used")}move_step(){if(this.velocity_norm()<.01&&(this.small_velocity_period+=1),this.small_velocity_period>200){this.shell_state="used";return}var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="shell"&&x.shell_id==this.shell_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.shell.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass);if(n.obj_type=="enemy"){var a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal);this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="shell"&&y.shell_id==this.shell_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*3e-4/u,y:(this.velocity.y+2*l.y*f)*p+l.y*3e-4/u,z:(this.velocity.z+2*l.z*f)*p+l.z*3e-4/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.shell.position,this.radius)){var l=null;if(y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}get_position(){return this.shell.position}is_fix(){return this.shell_state=="wait"}is_intersect(e,t){var n=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.shell.position.x-e.x,y:this.shell.position.y-e.y,z:this.shell.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.001/n,this.velocity.y+=t.y*.001/n,this.velocity.z+=t.z*.001/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=2*(t.x*(this.shell.position.x-e.x)+t.y*(this.shell.position.y-e.y)+t.z*(this.shell.position.z-e.z)),o=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+n)*(this.radius+n),a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}update(){this.shell_state!="used"&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.shell)),this.shell_state=="attacking"&&(this.move_step(),this.apply_g(),this.decay_velocity()),this.shell_state=="used"&&(this.no_collision=!0,this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.shell)))}}class _y extends ct{constructor(e,t){super(),this.parent=e,this.shell_id=t,this.name="big_shell",this.obj_type="shell",this.geo="sphere",this.velocity={x:0,y:0,z:0},this.angle_velocity={x:0,y:0,z:0},this.no_collision=!1,this.radius=.15,this.small_velocity_period=0,this.collision_happened=!1,this.subshell_created=!1,this.mass=30,this.shell_state="wait",new Dn().load("./objects/models/pokemonball.glb",(function(a){this.shell=a.scene.clone(),this.shell.scale.set(.0036,.0036,.0036),this.parent.add(this.shell),this.parent.addToUpdateList(this)}).bind(this),void 0,function(a){window.alert("An error happened.")}),this.remove_flag=!1;var i=new In,r=new xt(i),o=new Pn;o.load("./audio/bomb.mp3",function(a){r.setBuffer(a),r.setLoop(!1),r.setVolume(.5),r.pause()}),this.bomb_sound=r}set_position(e,t,n){this.shell.position.set(e,t,n)}velocity_norm(){return Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z)}move_time(e){this.shell.position.x+=this.velocity.x*e,this.shell.position.y+=this.velocity.y*e,this.shell.position.z+=this.velocity.z*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.shell.rotation.x,this.shell.rotation.y,this.shell.rotation.z,"XYZ"));n.multiply(t),this.shell.rotation.setFromQuaternion(n,"XYZ"),(this.shell.position.x<-15||this.shell.position.x>15||this.shell.position.y<-100||this.shell.position.y>100||this.shell.position.z<-15||this.shell.position.z>2)&&(this.shell_state="used")}move_step(){if(this.velocity_norm()<.01&&(this.small_velocity_period+=1),this.small_velocity_period>200){this.shell_state="used";return}var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="shell"&&x.shell_id==this.shell_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.shell.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,this.collision_happened=!0,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass);if(n.obj_type=="enemy"){var a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal);this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="shell"&&y.shell_id==this.shell_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){this.collision_happened=!0,l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*.001/u,y:(this.velocity.y+2*l.y*f)*p+l.y*.001/u,z:(this.velocity.z+2*l.z*f)*p+l.z*.001/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.shell.position,this.radius)){var l=null;if(this.collision_happened=!0,y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}get_position(){return this.shell.position}is_fix(){return this.shell_state=="wait"}is_intersect(e,t){var n=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.shell.position.x-e.x,y:this.shell.position.y-e.y,z:this.shell.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.001/n,this.velocity.y+=t.y*.001/n,this.velocity.z+=t.z*.001/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=2*(t.x*(this.shell.position.x-e.x)+t.y*(this.shell.position.y-e.y)+t.z*(this.shell.position.z-e.z)),o=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+n)*(this.radius+n),a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}update(){if(this.shell_state!="used"&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.shell)),this.shell_state=="attacking"&&(this.move_step(),this.apply_g(),this.decay_velocity()),this.collision_happened==!0&&(this.shell_state="used",this.subshell_created==!1)){this.bomb_sound.play(),this.subshell_created=!0;var e=Math.floor(Math.random()*3)+3;for(let r=0;r<16&&e!=0;r++){let o=Math.random(),a=Math.random(),c=2*Math.PI*o,h=Math.acos(2*a-1),l=Math.random()/2+.75;var t={x:Math.sin(h)*Math.cos(c)*l,y:Math.sin(h)*Math.sin(c)*l,z:Math.cos(h)*l},n={x:this.get_position().x+t.x*this.radius,y:this.get_position().y+t.y*this.radius,z:this.get_position().z+t.z*this.radius};t.x=t.x*.1+this.velocity.x,t.y=t.y*.1+this.velocity.y,t.z=t.z*.1+this.velocity.z;var i=!1;for(let u of this.parent.update_list)if(u.no_collision!=!0&&u.obj_type=="plane"&&u.is_intersect(n,.075)){i=!0;break}i!=!0&&(new gy(this.parent,this.parent.final_shell_id,n,t),this.parent.final_shell_id+=1,e--)}}this.shell_state=="used"&&(this.no_collision=!0,this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.shell)))}}class yy extends ct{constructor(e,t){super(),this.parent=e,this.shell_id=t,this.name="bomb_shell",this.obj_type="shell",this.geo="sphere",this.velocity={x:0,y:0,z:0},this.angle_velocity={x:0,y:0,z:0},this.no_collision=!1,this.radius=.1,this.small_velocity_period=0,this.mass=10,this.shell_state="wait",new Dn().load("./objects/models/grenade1.glb",(function(a){this.shell=a.scene.clone(),this.shell.scale.set(.001,.001,.001),this.parent.add(this.shell),this.parent.addToUpdateList(this)}).bind(this),void 0,function(a){window.alert("An error happened.")}),this.remove_flag=!1,this.bomb_flag=!1;var i=new In,r=new xt(i),o=new Pn;o.load("./audio/bomb.mp3",function(a){r.setBuffer(a),r.setLoop(!1),r.setVolume(.5),r.pause()}),this.bomb_sound=r}set_position(e,t,n){this.shell.position.set(e,t,n)}velocity_norm(){return Math.sqrt(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z)}move_time(e){this.shell.position.x+=this.velocity.x*e,this.shell.position.y+=this.velocity.y*e,this.shell.position.z+=this.velocity.z*e;var t=new Ye().setFromAxisAngle(new A(1,0,0),this.angle_velocity.x*e).multiply(new Ye().setFromAxisAngle(new A(0,1,0),this.angle_velocity.y*e)).multiply(new Ye().setFromAxisAngle(new A(0,0,1),this.angle_velocity.z*e)),n=new Ye().setFromEuler(new pn(this.shell.rotation.x,this.shell.rotation.y,this.shell.rotation.z,"XYZ"));n.multiply(t),this.shell.rotation.setFromQuaternion(n,"XYZ"),(this.shell.position.x<-15||this.shell.position.x>15||this.shell.position.y<-100||this.shell.position.y>100||this.shell.position.z<-15||this.shell.position.z>2)&&(this.shell_state="used")}move_step(){if(this.velocity_norm()<.01&&(this.small_velocity_period+=1),this.small_velocity_period>200){this.shell_state="used";return}var e=1;for(let y=0;y<4;y++){var t=e,n=null,i=0,r=-1;for(let x of this.parent.update_list){if(i+=1,x.obj_type=="shell"&&x.shell_id==this.shell_id||x.no_collision==!0||x.geo=="cube")continue;let v=x.cal_min_t(this.shell.position,this.velocity,this.radius);v<-.01||v>=e||v<t&&(t=v,n=x,r=i-1)}if(n==null)break;if(this.move_time(t),e-=t,n.geo=="sphere"){var o=as(this.get_position(),this.velocity,this.angle_velocity,this.radius,this.mass,n.get_position(),n.velocity,n.angle_velocity,n.radius,n.mass);if(n.obj_type=="enemy"){var a={x:this.velocity.x-n.velocity.x,y:this.velocity.y-n.velocity.y,z:this.velocity.z-n.velocity.z},c=.5*this.mass*(a.x*a.x+a.y*a.y+a.z*a.z);this.parent.update_list[r].blood-=wt(c)}this.velocity=o.new_velocity1,this.angle_velocity=o.new_angle_velocity1,n.is_fix()==!1&&(this.parent.update_list[r].velocity=o.new_velocity2,this.parent.update_list[r].angle_velocity=o.new_angle_velocity2)}else if(n.geo=="plane"){var h=ls(this.velocity,this.angle_velocity,this.radius,n.normal);this.velocity=h.new_velocity,this.angle_velocity=h.new_angle_velocity}}this.move_time(e);for(let y of this.parent.update_list)if(!(y.obj_type=="shell"&&y.shell_id==this.shell_id)&&y.no_collision!=!0){if(y.obj_type=="wall"){var l=y.get_direction(this.get_position()),u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>this.radius)continue;if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var p=.9,g={x:(this.velocity.x+2*l.x*f)*p+l.x*.001/u,y:(this.velocity.y+2*l.y*f)*p+l.y*.001/u,z:(this.velocity.z+2*l.z*f)*p+l.z*.001/u},c=.5*this.mass*(this.velocity.x*this.velocity.x+this.velocity.y*this.velocity.y+this.velocity.z*this.velocity.z);y.name=="breakable_wall"&&(y.blood-=wt(c)),this.velocity=g}continue}if(y.is_intersect(this.shell.position,this.radius)){var l=null;if(y.geo=="sphere"){var _=y.get_position(),m=this.get_position();l={x:m.x-_.x,y:m.y-_.y,z:m.z-_.z}}else if(y.geo=="plane"){var d=y.normal.x*this.get_position().x+y.normal.y*this.get_position().y+y.normal.z*this.get_position().z-y.ground_coef;l={x:y.normal.x,y:y.normal.y,z:y.normal.z},d<0&&(l.x*=-1,l.y*=-1,l.z*=-1)}else l={x:0,y:0,z:0};var u=Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z);if(u>1e-8){l.x/=u,l.y/=u,l.z/=u;var f=this.velocity.x*l.x+this.velocity.y*l.y+this.velocity.z*l.z;if(f>0)continue;f=-f;var g={x:this.velocity.x+2*l.x*f+l.x*.001/u,y:this.velocity.y+2*l.y*f+l.y*.001/u,z:this.velocity.z+2*l.z*f+l.z*.001/u};this.velocity=g}}}}get_position(){return this.shell.position}is_fix(){return this.shell_state=="wait"}is_intersect(e,t){var n=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+t)*(this.radius+t);return n<0}apply_anti_force_from_position(e){var t={x:this.shell.position.x-e.x,y:this.shell.position.y-e.y,z:this.shell.position.z-e.z},n=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);t.x/=n,t.y/=n,t.z/=n,this.velocity.x+=t.x*.001/n,this.velocity.y+=t.y*.001/n,this.velocity.z+=t.z*.001/n}cal_min_t(e,t,n){var i=t.x*t.x+t.y*t.y+t.z*t.z,r=2*(t.x*(this.shell.position.x-e.x)+t.y*(this.shell.position.y-e.y)+t.z*(this.shell.position.z-e.z)),o=(this.shell.position.x-e.x)*(this.shell.position.x-e.x)+(this.shell.position.y-e.y)*(this.shell.position.y-e.y)+(this.shell.position.z-e.z)*(this.shell.position.z-e.z)-(this.radius+n)*(this.radius+n),a=r*r-4*i*o;if(a<0)return 2;if(Math.abs(a)<1e-6){var c=-r/(2*i);return c<1e-4?2:c}var h=(-r+Math.sqrt(a))/(2*i),l=(-r-Math.sqrt(a))/(2*i);if(h>l){var u=h;h=l,l=u}return l<.01?2:h<-.01?l:h}decay_velocity(){this.velocity.x*=.999,this.velocity.y*=.999,this.velocity.z*=.999,this.angle_velocity.x*=.999,this.angle_velocity.y*=.999,this.angle_velocity.z*=.999}apply_g(){for(let e of this.parent.update_list)if(e.name=="plane"){if(e.is_intersect(this.get_position(),this.radius))return;if(e.is_intersect(this.get_position(),this.radius+.01)){this.velocity.y-=1e-4;return}}this.velocity.y-=.001}update(){if(this.shell_state!="used"&&this.remove_flag==!0&&(this.remove_flag=!1,this.parent.add(this.shell)),this.shell_state=="attacking"&&(this.move_step(),this.apply_g(),this.decay_velocity()),this.shell_state=="used"&&(this.no_collision=!0,this.remove_flag==!1&&(this.remove_flag=!0,this.parent.remove(this.shell)),this.bomb_flag==!1)){this.bomb_sound.play(),this.bomb_flag=!0;for(let n of this.parent.update_list)if(!(n.obj_type=="shell"&&n.shell_id==this.shell_id)&&n.no_collision!=!0){if(n.obj_type=="wall"){if(n.name!="breakable_wall")continue;var e=n.get_direction(this.get_position()),t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);n.blood-=80/t/t;continue}if(n.obj_type=="enemy"||n.obj_type=="shell"&&n.shell_state=="attacking"){var e={x:n.get_position().x-this.get_position().x,y:n.get_position().y-this.get_position().y,z:n.get_position().z-this.get_position().z},t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);n.obj_type=="enemy"&&(n.blood-=10/t/t),e.x/=t,e.y/=t,e.z/=t,n.velocity.x+=e.x/n.mass/t/t,n.velocity.y+=e.y/n.mass/t/t,n.velocity.z+=e.z/n.mass/t/t}}}}}function Tr(s,e,t){e==0&&new my(s,t),e==1&&new _y(s,t),e==2&&new yy(s,t)}class xy extends ct{constructor(e,t,n){super(),this.parent=e,this.name="normal_wall",this.obj_type="wall",this.geo="cube",this.wall_id=t,this.cfg=n,new st().load("./objects/picture/bricknew1.jpg",(function(r){r.wrapS=Ht,r.wrapT=Ht;const o=n.length/5,a=n.hight/5,c=n.width/5,h=[new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()})];h[0].map.repeat.set(c,a),h[1].map.repeat.set(c,a),h[2].map.repeat.set(o,c),h[3].map.repeat.set(o,c),h[4].map.repeat.set(o,a),h[5].map.repeat.set(o,a);const l=new qn(n.length,n.hight,n.width);this.wall=new Ie(l,h),this.wall.position.set(n.x,n.y,n.z),this.parent.add(this.wall)}).bind(this),void 0,function(r){window.alert("An error happened.")}),this.min_x=n.x-n.length/2,this.max_x=n.x+n.length/2,this.min_y=n.y-n.hight/2,this.max_y=n.y+n.hight/2,this.min_z=n.z-n.width/2,this.max_z=n.z+n.width/2,this.no_collision=!1,e.addToUpdateList(this)}get_direction(e){var t=e.x,n=e.y,i=e.z;return t<this.min_x?t=t-this.min_x:t>this.max_x?t=t-this.max_x:t=0,n<this.min_y?n=n-this.min_y:n>this.max_y?n=n-this.max_y:n=0,i<this.min_z?i=i-this.min_z:i>this.max_z?i=i-this.max_z:i=0,{x:t,y:n,z:i}}update(){}}class vy extends ct{constructor(e,t,n){super(),this.parent=e,this.name="breakable_wall",this.obj_type="wall",this.geo="cube",this.wall_id=t,this.blood=150,this.state=1,this.cfg=n;const i=new st;i.load("./objects/picture/wood.jpg",(function(r){r.wrapS=Ht,r.wrapT=Ht;const o=n.length/5,a=n.hight/5,c=n.width/5,h=[new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()})];h[0].map.repeat.set(c,a),h[1].map.repeat.set(c,a),h[2].map.repeat.set(o,c),h[3].map.repeat.set(o,c),h[4].map.repeat.set(o,a),h[5].map.repeat.set(o,a);const l=new qn(n.length,n.hight,n.width);this.wall=new Ie(l,h),this.wall.position.set(n.x,n.y,n.z),this.parent.add(this.wall)}).bind(this),void 0,function(r){window.alert("An error happened.")}),i.load("./objects/picture/breakwood2.jpg",(function(r){r.wrapS=Ht,r.wrapT=Ht;const o=n.length/5,a=n.hight/5,c=n.width/5,h=[new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()}),new Xe({map:r.clone()})];h[0].map.repeat.set(c,a),h[1].map.repeat.set(c,a),h[2].map.repeat.set(o,c),h[3].map.repeat.set(o,c),h[4].map.repeat.set(o,a),h[5].map.repeat.set(o,a);const l=new qn(n.length,n.hight,n.width);this.newwall=new Ie(l,h),this.newwall.position.set(n.x,n.y,n.z)}).bind(this),void 0,function(r){window.alert("An error happened.")}),this.min_x=n.x-n.length/2,this.max_x=n.x+n.length/2,this.min_y=n.y-n.hight/2,this.max_y=n.y+n.hight/2,this.min_z=n.z-n.width/2,this.max_z=n.z+n.width/2,this.no_collision=!1,e.addToUpdateList(this)}get_direction(e){var t=e.x,n=e.y,i=e.z;return t<this.min_x?t=t-this.min_x:t>this.max_x?t=t-this.max_x:t=0,n<this.min_y?n=n-this.min_y:n>this.max_y?n=n-this.max_y:n=0,i<this.min_z?i=i-this.min_z:i>this.max_z?i=i-this.max_z:i=0,{x:t,y:n,z:i}}update(){this.blood<100&&this.state==1&&(this.state==0,this.parent.remove(this.wall),this.parent.add(this.newwall)),this.blood<100&&this.state==0&&(this.state==0,this.parent.remove(this.newwall),this.parent.add(this.newwall)),this.blood<=0&&(this.parent.remove(this.newwall),this.no_collision=!0)}}function My(s,e,t,n){e==0?new xy(s,t,n):e==1&&new vy(s,t,n)}class Sy extends ct{constructor(e,t,n,i,r){super(),this.parent=e,this.name="random_gift",this.obj_type="tool",this.geo="sphere",this.tool_id=t,this.tool=null,new Dn().load("./objects/models/key.glb",(function(a){a.scene.position.set(n,i,r),this.tool=a.scene.clone(),this.tool.scale.set(1,1,1),this.tool.rotation.set(Math.PI/4,0,0),this.parent.addToUpdateList(this),this.parent.add(this.tool)}).bind(this),void 0,function(a){window.alert("An error happened.")}),this.radius=.2,this.used=!1,this.remove_flag=!1,this.no_collision=!0}get_position(){return this.tool.position}update(){if(this.remove_flag==!1&&(this.parent.remove(this.tool),this.remove_flag=!0),this.used==!1){this.tool.rotation.y+=.01;for(let i of this.parent.update_list)if(i.obj_type=="shell"&&i.shell_state=="attacking"){var e={x:i.get_position().x-this.get_position().x,y:i.get_position().y-this.get_position().y,z:i.get_position().z-this.get_position().z},t=Math.sqrt(e.x*e.x+e.y*e.y+e.z*e.z);if(t<this.radius+i.radius){this.used=!0;var n=Math.random();n<.6?(Tr(this.parent,0,this.parent.final_shell_id),this.parent.final_shell_id+=1):n<.9?(Tr(this.parent,1,this.parent.final_shell_id),this.parent.final_shell_id+=1):(Tr(this.parent,2,this.parent.final_shell_id),this.parent.final_shell_id+=1)}}}this.used==!1&&(this.remove_flag=!1,this.parent.add(this.tool))}}function Ey(s,e,t){e.id==0&&new Sy(s,t,e.x,e.y,e.z)}class Ty extends ct{constructor(e,t,n){super(),this.parent=e,this.name="tree",this.obj_type="decoration",this.geo="none",this.cfg=n,this.dec_id=t,this.tree=null,new Dn().load("./objects/models/treePine.glb",(function(r){r.scene.position.set(n.x,n.y,n.z),this.tree=r.scene.clone(),this.tree.scale.set(1.3,1.3,1.3),this.parent.add(this.tree)}).bind(this),void 0,function(r){window.alert("An error happened.")}),this.parent.addToUpdateList(this),this.no_collision=!0}update(){}}class by extends ct{constructor(e,t,n){super(),this.parent=e,this.name="crate",this.obj_type="decoration",this.geo="none",this.cfg=n,this.dec_id=t,this.crate=null,new Dn().load("./objects/models/crate.glb",(function(r){r.scene.position.set(n.x,n.y,n.z),this.crate=r.scene.clone(),this.crate.scale.set(1.3,1.3,1.3),this.parent.add(this.crate)}).bind(this),void 0,function(r){window.alert("An error happened.")}),this.parent.addToUpdateList(this),this.no_collision=!0}update(){}}class wy extends ct{constructor(e,t,n){super(),this.parent=e,this.name="barrel",this.obj_type="decoration",this.geo="none",this.cfg=n,this.dec_id=t,this.barrel=null,new Dn().load("./objects/models/barrel.glb",(function(r){r.scene.position.set(n.x,n.y,n.z),this.barrel=r.scene.clone(),this.barrel.scale.set(1.3,1.3,1.3),this.parent.add(this.barrel)}).bind(this),void 0,function(r){window.alert("An error happened.")}),this.parent.addToUpdateList(this),this.no_collision=!0}update(){}}function Ay(s,e,t,n){e==0&&new Ty(s,t,n),e==1&&new by(s,t,n),e==2&&new wy(s,t,n)}class Ry extends Br{constructor(e){super(),this.update_list=[],this.in_loading=!0,this.object_num=0,this.finish_load_all_object=!1,fetch("./configs/level-"+String(e)+".json").then(h=>h.json()).then(h=>{P0(h.gound_name,this),D0(h.launch_pad,this),this.object_num+=2,this.pad_x=h.launch_pad.x,this.pad_y=h.launch_pad.y,this.pad_z=h.launch_pad.z;var l=0;for(let _ of h.enemy)O0(this,_,l),l+=1,this.object_num+=1;var u=0;for(let _ of h.shell)Tr(this,_,u),u+=1,this.object_num+=1;this.final_shell_id=u;var f=0;for(let _ of h.wall)My(this,_.id,f,_.cfg),f+=1,this.object_num+=1;var p=0;for(let _ of h.tool)Ey(this,_,p),p+=1,this.object_num+=1;var g=0;for(let _ of h.decoration)Ay(this,_.id,g,_.cfg),g+=1,this.object_num+=1;this.in_loading=!1}).then(h=>{console.error("Error:",h)}),this.add_light(),this.debug_cnt=0,this.pause_state=!1,this.ending_clock=-1,this.recheck_clock=-1,this.enemy_move_clock=0,this.success=!1;var t=new In,n=new xt(t),i=new xt(t),r=new xt(t),o=new xt(t),a=new Pn;a.load("./audio/switch.wav",function(h){n.setBuffer(h),n.setLoop(!1),n.setVolume(.5),n.pause()}),this.switch_sound=n,a.load("./audio/check-play.wav",function(h){i.setBuffer(h),i.setLoop(!1),i.setVolume(.5),i.pause()}),this.play_sound=i,a.load("./audio/check-quit.wav",function(h){r.setBuffer(h),r.setLoop(!1),r.setVolume(.5),r.pause()}),this.quit_sound=r,a.load("./audio/pause-loop.mp3",function(h){o.setBuffer(h),o.setLoop(!0),o.setVolume(.5),o.pause()}),this.pause_loop_sound=o,this.last_move="none";const c=new st().load("./objects/picture/sky.jpg");this.background=c}addToUpdateList(e){this.update_list.push(e)}add_light(){this.normal_light_list=[],this.normal_light_list.push(new Rs(7829367));const e=new Wi(16777215,3);e.position.set(100,100,100),this.normal_light_list.push(e);const t=new bn(16777215,1);t.position.set(-1,1,-1),this.normal_light_list.push(t);const n=new bn(16777215,1);n.position.set(-1,1,1),this.normal_light_list.push(n);const i=new bn(16777215,1);i.position.set(1,1,-1),this.normal_light_list.push(i);const r=new bn(16777215,1);r.position.set(1,1,1),this.normal_light_list.push(r);for(let a of this.normal_light_list)this.add(a);this.pause_light_list=[];const o=new Wi(16777215,.1);o.position.set(10,100,20),this.pause_light_list.push(new Rs(7829367)),this.pause_light_list.push(o)}onMouseMove(e){const t={x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1},n=new Ir,i=new A(t.x,t.y,.5),r=Nr();i.unproject(r),n.set(r.position,i.sub(r.position).normalize());const o=[this.continue_text,this.retry_text,this.exit_text],a=n.intersectObjects(o);var c="none";if(a.length>0){const h=a[0].object,l=1.2;h===this.continue_text?c="continue":h===this.retry_text?c="retry":h===this.exit_text&&(c="exit"),h.scale.x!==l&&h.scale.set(l,l,l)}else for(const h of o)h.scale.x!==1&&h.scale.set(1,1,1);c!=this.last_move&&c!="none"&&(this.switch_sound.stop(),this.switch_sound.play()),this.last_move=c}onMouseClick(e){const t={x:e.clientX/window.innerWidth*2-1,y:-(e.clientY/window.innerHeight)*2+1},n=new Ir,i=new A(t.x,t.y,.5),r=Nr();i.unproject(r),n.set(r.position,i.sub(r.position).normalize());const o=[this.continue_text,this.retry_text,this.exit_text],a=n.intersectObjects(o);if(a.length>0){const c=a[0].object;c===this.continue_text?(Xi("continue"),this.play_sound.stop(),this.play_sound.play(),this.pause_loop_sound.stop()):c===this.retry_text?(Xi("retry"),this.play_sound.stop(),this.play_sound.play(),this.pause_loop_sound.stop()):c===this.exit_text&&(Xi("exit"),this.quit_sound.stop(),this.quit_sound.play(),this.pause_loop_sound.stop())}}update_in_pause_state(){if(this.pause_state==!1){this.pause_loop_sound.stop(),this.pause_loop_sound.play(),this.pause_state=!0;for(let u of this.update_list)u.obj_type=="launch_pad"&&u.unrender_force();for(let u of this.normal_light_list)this.remove(u);for(let u of this.pause_light_list)this.add(u);this.continue_text=null;const e=new st().load("./objects/picture/pause-continue.png"),t=new it({map:e,alphaTest:.01,transparent:!0}),n=new lt(1.0275,.21);this.continue_text=new Ie(n,t),this.continue_text.position.set(1,1.926,1.043),this.continue_text.rotation.set(-Math.PI/6,0,0),this.add(this.continue_text),this.retry_text=null;const i=new st().load("./objects/picture/pause-retry.png"),r=new it({map:i,alphaTest:.01,transparent:!0}),o=new lt(1.0275,.21);this.retry_text=new Ie(o,r),this.retry_text.position.set(1,1.637,1.21),this.retry_text.rotation.set(-Math.PI/6,0,0),this.add(this.retry_text),this.exit_text=null;const a=new st().load("./objects/picture/pause-back.png"),c=new it({map:a,alphaTest:.01,transparent:!0}),h=new lt(1.0275,.21);this.exit_text=new Ie(h,c),this.exit_text.position.set(1,1.348,1.377),this.exit_text.rotation.set(-Math.PI/6,0,0),this.add(this.exit_text);const l=Ur();this.onMouseMoveHandler=this.onMouseMove.bind(this),l.domElement.addEventListener("mousemove",this.onMouseMoveHandler,!1),this.onMouseClickHandler=this.onMouseClick.bind(this),l.domElement.addEventListener("click",this.onMouseClickHandler,!1)}}update_in_pause_state_old(){if(this.pause_state==!1){this.pause_state=!0;for(let t of this.update_list)t.obj_type=="launch_pad"&&t.unrender_force();for(let t of this.normal_light_list)this.remove(t);for(let t of this.pause_light_list)this.add(t);const e=new _0;this.continue_text=null,e.load("./style/helvetiker_regular.typeface.json",(function(t){const n="ontinue";var i=new Ni(n,{font:t,size:12,height:1,bevelEnabled:!0,bevelThickness:.5,bevelSize:.3,bevelSegments:.5});i.computeBoundingBox(),i.center();const r=new Xe({color:16777215,emissive:65280,emissiveIntensity:.4}),o=new Xe({color:16777215,emissive:16711680,emissiveIntensity:.8}),a=new Ie(i,r),c=new Ni("C",{font:t,size:12,height:1});c.computeBoundingBox(),c.center();const h=new Ie(c,o);h.position.set(a.position.x-33,a.position.y,a.position.z);const l=new ct;l.add(a),l.add(h);const u=.01;l.scale.set(u,u,u),l.position.set(1,1.926,1.043),l.rotation.set(-Math.PI/6,0,0),this.continue_text=l,this.add(this.continue_text)}).bind(this)),this.continue_text=null,e.load("./style/helvetiker_regular.typeface.json",(function(t){const n="etry";var i=new Ni(n,{font:t,size:12,height:1,bevelEnabled:!0,bevelThickness:.5,bevelSize:.3,bevelSegments:.5});i.computeBoundingBox(),i.center();const r=new Xe({color:16777215,emissive:16742144,emissiveIntensity:.4}),o=new Xe({color:16777215,emissive:16711680,emissiveIntensity:.8}),a=new Ie(i,r),c=new Ni("R",{font:t,size:12,height:1});c.computeBoundingBox(),c.center();const h=new Ie(c,o);h.position.set(a.position.x-20,a.position.y+1.8,a.position.z);const l=new ct;l.add(a),l.add(h);const u=.01;l.scale.set(u,u,u),l.position.set(1,1.637,1.21),l.rotation.set(-Math.PI/6,0,0),this.retry_text=l,this.add(this.retry_text)}).bind(this)),this.exit_text=null,e.load("./style/helvetiker_regular.typeface.json",(function(t){const n="xit";var i=new Ni(n,{font:t,size:12,height:1,bevelEnabled:!0,bevelThickness:.5,bevelSize:.3,bevelSegments:.5});i.computeBoundingBox(),i.center();const r=new Xe({color:16777215,emissive:43775,emissiveIntensity:.4}),o=new Xe({color:16777215,emissive:16711680,emissiveIntensity:.8}),a=new Ie(i,r),c=new Ni("E",{font:t,size:12,height:1});c.computeBoundingBox(),c.center();const h=new Ie(c,o);h.position.set(a.position.x-14,a.position.y-.2,a.position.z);const l=new ct;l.add(a),l.add(h);const u=.01;l.scale.set(u,u,u),l.position.set(1,1.348,1.377),l.rotation.set(-Math.PI/6,0,0),this.exit_text=l,this.add(this.exit_text)}).bind(this))}}remove_pause_state(){this.pause_state=!1;const e=Ur();e.domElement.removeEventListener("mousemove",this.onMouseMoveHandler),e.domElement.removeEventListener("click",this.onMouseClickHandler,!1);for(let t of this.pause_light_list)this.remove(t);for(let t of this.normal_light_list)this.add(t);this.continue_text!=null&&this.remove(this.continue_text),this.retry_text!=null&&this.remove(this.retry_text),this.exit_text!=null&&this.remove(this.exit_text)}check_for_end(){for(let i of this.update_list)if(i.obj_type=="shell"&&i.shell_state=="attacking")return;this.enemy_move_clock>0&&(this.enemy_move_clock-=1);var e=!1;for(let i of this.update_list)if(i.obj_type=="enemy"&&i.blood>0){e=!0;var t=Math.sqrt(i.velocity.x*i.velocity.x+i.velocity.y*i.velocity.y+i.velocity.z*i.velocity.z);if(t>.01){this.enemy_move_clock=100;return}break}if(!(this.enemy_move_clock>0)){if(e==!1){this.recheck_clock==0?(this.success=!0,this.ending_clock=51):this.recheck_clock=100;return}var n=!1;for(let i of this.update_list)i.obj_type=="shell"&&i.shell_state=="wait"&&(n=!0);if(n==!1){this.recheck_clock==0?(this.success=!1,this.ending_clock=51):this.recheck_clock=100;return}}}change_ending_light(){if(this.ending_clock==50)for(let o of this.normal_light_list)this.remove(o);else for(let o of this.ending_light_list)this.remove(o);this.ending_light_list=[],this.ending_light_list.push(new Rs(Math.floor(119*this.ending_clock/50)*65793));const e=new Wi(16777215,3*this.ending_clock/50);e.position.set(100,100,100),this.ending_light_list.push(e);const t=new bn(16777215,1*this.ending_clock/50);t.position.set(-1,1,-1),this.ending_light_list.push(t);const n=new bn(16777215,1*this.ending_clock/50);n.position.set(-1,1,1),this.ending_light_list.push(n);const i=new bn(16777215,1*this.ending_clock/50);i.position.set(1,1,-1),this.ending_light_list.push(i);const r=new bn(16777215,1*this.ending_clock/50);r.position.set(1,1,1),this.ending_light_list.push(r);for(let o of this.ending_light_list)this.add(o)}update(){if(this.pause_state==!0&&this.remove_pause_state(),this.in_loading!=!0){if(this.finish_load_all_object==!1)if(this.update_list.length==this.object_num)this.finish_load_all_object=!0;else return;if(this.recheck_clock>0&&(this.recheck_clock-=1),(this.recheck_clock==-1||this.recheck_clock==0&&this.ending_clock==-1)&&this.check_for_end(),this.ending_clock>0){this.ending_clock-=1,this.change_ending_light();return}var e=!1;for(let n of this.update_list)n.obj_type=="shell"&&n.shell_state=="attacking"&&(e=!0);if(e==!1)for(let n of this.update_list)n.obj_type=="launch_pad"&&(n.attacking=!1);for(let n of this.update_list){if(n.obj_type=="shell"&&n.shell_state=="wait"){var t=this.pad_x+.2+.3*this.get_wait_shell_num(n.shell_id);n.set_position(t,this.pad_y,this.pad_z)}n.update()}}}get_wait_shell_num(e){var t=0;for(let n of this.update_list)n.obj_type=="shell"&&n.shell_state=="wait"&&n.shell_id<=e&&t++;return t}set_first_shell_attack(e,t,n,i){var r={x:0,y:0,z:-1},o=r.y,a=r.z;r.y=o*Math.cos(t)-a*Math.sin(t),r.z=o*Math.sin(t)+a*Math.cos(t),o=r.z,a=r.x,r.z=o*Math.cos(n)-a*Math.sin(n),r.x=o*Math.sin(n)+a*Math.cos(n);for(let c of this.update_list)if(c.obj_type=="shell"&&c.shell_state=="wait"&&this.get_wait_shell_num(c.shell_id)==1){c.shell_state="attacking",c.velocity={x:r.x*e*.1,y:r.y*e*.1,z:r.z*e*.1},c.set_position(this.pad_x+r.x*i,this.pad_y+r.y*i,this.pad_z+r.z*i);break}}is_terminal(){return this.ending_clock==0}set_camera(e){e.position.set(1,2,2),e.rotation.set(-Math.PI/6,0,0)}reset_camera(e){e.position.set(0,0,5),e.rotation.set(0,0,0)}update_by_press_key(e){if(e=="ArrowLeft"||e=="ArrowRight"||e=="ArrowUp"||e=="ArrowDown"||e=="Enter"||e==" ")for(let t of this.update_list)t.name=="launch_pad"&&t.update_by_press_key(e),t.name=="bomb_shell"&&t.shell_state=="attacking"&&e==" "&&(t.shell_state="used")}update_by_release_key(e){if(e=="ArrowLeft"||e=="ArrowRight"||e=="ArrowUp"||e=="ArrowDown"||e=="Enter"||e==" ")for(let t of this.update_list)t.name=="launch_pad"&&t.update_by_release_key(e)}}class Cy extends Br{constructor(){super(),this.cubes=[],this.select_cube=null,this.finish_load_flag=!1;var e=new Dn;e.load("./objects/models/block.glb",(function(_){for(let m=0;m<3;m++)for(let d=0;d<3;d++){const y=_.scene.clone();y.position.set(2*d-2,1.2-m*1.5,0),y.scale.set(.9,.9,.1),this.cubes.push(y)}this.finish_load_flag=!0,this.onLoadComplete()}).bind(this),void 0,function(_){window.alert("An error happened.")}),this.onLoadComplete=function(){for(let _ of this.cubes)this.add(_)},this.set_level_1=function(){this.remove(this.cubes[this.state.track]);const _=this.get_position();this.select_cube.position.set(2*_.y-2,1.2-_.x*1.5,0),this.add(this.select_cube)},this.digital_numbers=[];for(let _=0;_<3;_++)for(let m=0;m<3;m++){const d=_*3+m,y=new st().load("./objects/picture/digital-"+String(d+1)+".png"),x=new it({map:y,alphaTest:0,transparent:!0}),v=new lt(.93*.6,1.52*.6),b=new Ie(v,x);b.position.set(2*m-2,1.6-_*1.5,.05),this.digital_numbers.push(b)}for(let _ of this.digital_numbers)this.add(_);const t=new st().load("./objects/picture/select-level.png"),n=new it({map:t,alphaTest:0,transparent:!0}),i=new lt(8.13,1.2);this.title=new Ie(i,n),this.title.position.set(0,3,0),this.add(this.title);const r=new st().load("./objects/picture/press2.png"),o=new it({map:r,alphaTest:0,transparent:!0}),a=new lt(6.19,.63);this.press=new Ie(a,o),this.press.position.set(0,-2.5,0),this.add(this.press),this.add(new Rs(7829367));const c=new Wi(16777215,5);c.position.set(5,5,5),this.add(c),this.state={track:0},this.state.track=Mh()-1,e.load("./objects/models/blockSnow.glb",(function(_){const m=_.scene.clone();m.scale.set(.9,.9,.1),this.select_cube=m,this.set_level_1()}).bind(this),void 0,function(_){window.alert("An error happened.")});for(let _ of this.cubes)this.add(_);const h=new st().load("./objects/picture/background2.png"),l=new lt(1280,720),u=new it({map:h,side:Bt});this.backgroundMesh=new Ie(l,u),this.backgroundMesh.position.set(0,0,-250),this.add(this.backgroundMesh);var f=new In,p=new xt(f),g=new Pn;g.load("./audio/switch.wav",function(_){p.setBuffer(_),p.setLoop(!1),p.setVolume(.5),p.pause()}),this.switch_sound=p}update(){const e=Date.now()*.001,t=.2,n=.5,i=Math.sin(e*t),r=Math.cos(e*n);this.backgroundMesh.position.set(i*200,r*100,-250)}get_position(){return{x:Math.floor(this.state.track/3),y:this.state.track%3}}update_info(e){this.remove(this.select_cube),this.add(this.cubes[this.state.track]),e==1&&this.state.track%3!=2&&(this.state.track++,this.switch_sound.stop(),this.switch_sound.play()),e==-1&&this.state.track%3!=0&&(this.state.track--,this.switch_sound.stop(),this.switch_sound.play()),e==3&&this.state.track<=5&&(this.state.track+=3,this.switch_sound.stop(),this.switch_sound.play()),e==-3&&this.state.track>=3&&(this.state.track-=3,this.switch_sound.stop(),this.switch_sound.play());const t=this.get_position();this.select_cube.position.set(2*t.y-2,1.2-t.x*1.5,0),this.add(this.select_cube),this.remove(this.cubes[this.state.track]),T0(this.state.track+1)}}var mt=new ph;const hn=new zt(75,window.innerWidth/window.innerHeight,.1,1e3),ns=new eh;ns.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ns.domElement);hn.position.z=5;const Ec=new Sh,ki=new Sh;var Bs=new In,vs=new xt(Bs),li=new xt(Bs),un=new xt(Bs),ks=new Pn;ks.load("./audio/key-press.wav",function(s){vs.setBuffer(s),vs.setLoop(!1),vs.setVolume(.5),vs.pause()});const Tc=vs;ks.load("./audio/angry-bird.mp3",function(s){li.setBuffer(s),li.setLoop(!0),li.setVolume(.5),li.play()});ks.load("./audio/play-bg.mp3",function(s){un.setBuffer(s),un.setLoop(!0),un.setVolume(.5),un.pause()});var Ms=new xt(Bs),Ss=new xt(Bs);ks.load("./audio/end-win.mp3",function(s){Ms.setBuffer(s),Ms.setLoop(!1),Ms.setVolume(.5),Ms.pause()});ks.load("./audio/end-lose.mp3",function(s){Ss.setBuffer(s),Ss.setLoop(!1),Ss.setVolume(.5),Ss.pause()});function Nr(){return hn}function Ur(){return ns}const bh=s=>{if(ki.acquire(),(!Os()||kt()!="play")&&mt.update(),Os()&&kt()=="play"){mt.update_in_pause_state(ns);const e=S0();e=="continue"?(kn(!1),Xi("none"),un.play()):e=="retry"?(kn(!1),Xi("none"),mt.reset_camera(hn),mt=Ui(),un.play()):e=="exit"&&(kn(!1),Fi("select"),Xi("none"),mt.reset_camera(hn),mt=Ui(),un.stop(),li.play())}if(kt()=="end"){const e=E0();e=="retry"?(kn(!1),Fi("play"),Dr("none"),mt=Ui()):e=="exit"&&(kn(!1),Fi("select"),Dr("none"),mt=Ui(),li.play())}kt()=="play"&&(mt.set_camera(hn),mt.is_terminal()&&(mt.reset_camera(hn),Fi("end"),kn(!1),b0(mt.success),un.stop(),mt.success==!0?Ms.play():Ss.play(),mt=Ui())),ns.render(mt,hn),ki.release(),window.requestAnimationFrame(bh)};window.requestAnimationFrame(bh);const wh=()=>{const{innerHeight:s,innerWidth:e}=window;ns.setSize(e,s),hn.aspect=e/s,hn.updateProjectionMatrix()};wh();window.addEventListener("resize",wh,!1);window.addEventListener("keydown",s=>{const e=s.key;if(Ec.acquire(),A0(e)){Tc.stop(),Tc.play(),ki.acquire();const t=kt();R0(e)&&(t=="play"?mt.reset_camera(hn):t=="select"&&kt()=="play"&&(li.stop(),un.play()),mt=Ui()),kt()=="play"&&Os()&&un.stop(),ki.release()}else kt()=="play"&&(e=="Enter"?(ki.acquire(),mt.update_by_press_key(e),ki.release()):mt.update_by_press_key(e)),kt()=="select"&&mt.update_info(w0(e));Ec.release()});window.addEventListener("keyup",s=>{const e=s.key;kt()=="play"&&mt.update_by_release_key(e)});
