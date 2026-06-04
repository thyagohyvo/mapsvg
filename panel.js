var STATES = {"AC": {"name": "Acre", "region": "Norte", "cx": 63.2, "cy": 310.7, "bbox": {"x0": 0.2, "y0": 255.4, "x1": 128.4, "y1": 337.1}, "host": "srv-ac-01", "ip": "10.0.1.14", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "AL": {"name": "Alagoas", "region": "Nordeste", "cx": 651.9, "cy": 301.8, "bbox": {"x0": 622.0, "y0": 289.9, "x1": 675.6, "y1": 324.1}, "host": "srv-al-01", "ip": "10.0.2.16", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "AM": {"name": "Amazonas", "region": "Norte", "cx": 144.0, "cy": 163.8, "bbox": {"x0": 3.4, "y0": 65.9, "x1": 311.4, "y1": 310.2}, "host": "srv-am-01", "ip": "10.0.1.10", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "AP": {"name": "Amapá", "region": "Norte", "cx": 374.1, "cy": 70.4, "bbox": {"x0": 332.6, "y0": 21.5, "x1": 419.6, "y1": 136.4}, "host": "srv-ap-01", "ip": "10.0.1.13", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "BA": {"name": "Bahia", "region": "Nordeste", "cx": 558.7, "cy": 378.5, "bbox": {"x0": 476.2, "y0": 284.2, "x1": 637.5, "y1": 483.0}, "host": "srv-ba-01", "ip": "10.0.2.18", "status": "warning", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#d29922"}, "CE": {"name": "Ceará", "region": "Nordeste", "cx": 599.1, "cy": 216.2, "bbox": {"x0": 566.6, "y0": 167.8, "x1": 639.1, "y1": 270.5}, "host": "srv-ce-01", "ip": "10.0.2.12", "status": "problem", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#f85149"}, "ES": {"name": "Espírito Santo", "region": "Sudeste", "cx": 575.9, "cy": 513.1, "bbox": {"x0": 558.6, "y0": 473.8, "x1": 597.1, "y1": 542.8}, "host": "srv-es-01", "ip": "10.0.4.11", "status": "ok", "fill": "#1e0e00", "stroke": "#8a3800", "labelColor": "#f08040", "statusColor": "#3fb950"}, "GO": {"name": "Goiás", "region": "Centro-Oeste", "cx": 433.1, "cy": 431.4, "bbox": {"x0": 360.9, "y0": 362.4, "x1": 488.6, "y1": 506.3}, "host": "srv-go-01", "ip": "10.0.3.12", "status": "ok", "fill": "#1e1700", "stroke": "#8a6000", "labelColor": "#f0c040", "statusColor": "#3fb950"}, "MA": {"name": "Maranhão", "region": "Nordeste", "cx": 497.7, "cy": 192.3, "bbox": {"x0": 439.0, "y0": 132.6, "x1": 560.1, "y1": 319.2}, "host": "srv-ma-01", "ip": "10.0.2.10", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "MG": {"name": "Minas Gerais", "region": "Sudeste", "cx": 507.1, "cy": 485.2, "bbox": {"x0": 399.2, "y0": 399.7, "x1": 593.8, "y1": 575.6}, "host": "srv-mg-01", "ip": "10.0.4.10", "status": "ok", "fill": "#1e0e00", "stroke": "#8a3800", "labelColor": "#f08040", "statusColor": "#3fb950"}, "MS": {"name": "Mato Grosso do Sul", "region": "Centro-Oeste", "cx": 323.9, "cy": 522.8, "bbox": {"x0": 275.4, "y0": 459.1, "x1": 401.3, "y1": 598.9}, "host": "srv-ms-01", "ip": "10.0.3.11", "status": "ok", "fill": "#1e1700", "stroke": "#8a6000", "labelColor": "#f0c040", "statusColor": "#3fb950"}, "MT": {"name": "Mato Grosso", "region": "Centro-Oeste", "cx": 304.2, "cy": 404.6, "bbox": {"x0": 215.1, "y0": 260.2, "x1": 413.5, "y1": 476.8}, "host": "srv-mt-01", "ip": "10.0.3.10", "status": "ok", "fill": "#1e1700", "stroke": "#8a6000", "labelColor": "#f0c040", "statusColor": "#3fb950"}, "PA": {"name": "Pará", "region": "Norte", "cx": 382.5, "cy": 130.6, "bbox": {"x0": 262.6, "y0": 58.9, "x1": 485.9, "y1": 310.7}, "host": "srv-pa-01", "ip": "10.0.1.11", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "PB": {"name": "Paraíba", "region": "Nordeste", "cx": 643.8, "cy": 255.6, "bbox": {"x0": 612.8, "y0": 233.4, "x1": 681.9, "y1": 279.5}, "host": "srv-pb-01", "ip": "10.0.2.14", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "PE": {"name": "Pernambuco", "region": "Nordeste", "cx": 631.9, "cy": 278.1, "bbox": {"x0": 567.7, "y0": 189.0, "x1": 723.6, "y1": 303.4}, "host": "srv-pe-01", "ip": "10.0.2.15", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "PI": {"name": "Piauí", "region": "Nordeste", "cx": 537.2, "cy": 255.6, "bbox": {"x0": 487.1, "y0": 166.9, "x1": 584.9, "y1": 332.7}, "host": "srv-pi-01", "ip": "10.0.2.11", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "PR": {"name": "Paraná", "region": "Sul", "cx": 396.7, "cy": 619.8, "bbox": {"x0": 337.1, "y0": 567.4, "x1": 451.8, "y1": 652.5}, "host": "srv-pr-01", "ip": "10.0.5.10", "status": "ok", "fill": "#150d30", "stroke": "#5a1db8", "labelColor": "#b085ff", "statusColor": "#3fb950"}, "RJ": {"name": "Rio de Janeiro", "region": "Sudeste", "cx": 532.2, "cy": 568.1, "bbox": {"x0": 506.3, "y0": 531.9, "x1": 574.7, "y1": 584.7}, "host": "srv-rj-01", "ip": "10.0.4.12", "status": "problem", "fill": "#1e0e00", "stroke": "#8a3800", "labelColor": "#f08040", "statusColor": "#f85149"}, "RN": {"name": "Rio Grande do Norte", "region": "Nordeste", "cx": 648.0, "cy": 232.4, "bbox": {"x0": 616.0, "y0": 209.3, "x1": 678.8, "y1": 252.8}, "host": "srv-rn-01", "ip": "10.0.2.13", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "RO": {"name": "Rondônia", "region": "Norte", "cx": 188.7, "cy": 339.7, "bbox": {"x0": 125.1, "y0": 272.8, "x1": 247.4, "y1": 388.7}, "host": "srv-ro-01", "ip": "10.0.1.15", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "RR": {"name": "Roraima", "region": "Norte", "cx": 218.9, "cy": 52.6, "bbox": {"x0": 159.6, "y0": 4.6, "x1": 262.8, "y1": 143.4}, "host": "srv-rr-01", "ip": "10.0.1.12", "status": "warning", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#d29922"}, "RS": {"name": "Rio Grande do Sul", "region": "Sul", "cx": 362.0, "cy": 723.1, "bbox": {"x0": 284.5, "y0": 659.9, "x1": 422.8, "y1": 795.0}, "host": "srv-rs-01", "ip": "10.0.5.12", "status": "ok", "fill": "#150d30", "stroke": "#5a1db8", "labelColor": "#b085ff", "statusColor": "#3fb950"}, "SC": {"name": "Santa Catarina", "region": "Sul", "cx": 406.6, "cy": 664.4, "bbox": {"x0": 350.7, "y0": 637.1, "x1": 445.9, "y1": 705.8}, "host": "srv-sc-01", "ip": "10.0.5.11", "status": "ok", "fill": "#150d30", "stroke": "#5a1db8", "labelColor": "#b085ff", "statusColor": "#3fb950"}, "SE": {"name": "Sergipe", "region": "Nordeste", "cx": 633.6, "cy": 327.5, "bbox": {"x0": 621.8, "y0": 304.1, "x1": 654.0, "y1": 345.7}, "host": "srv-se-01", "ip": "10.0.2.17", "status": "ok", "fill": "#0d2010", "stroke": "#1a6b1a", "labelColor": "#4dbb4d", "statusColor": "#3fb950"}, "SP": {"name": "São Paulo", "region": "Sudeste", "cx": 462.3, "cy": 575.3, "bbox": {"x0": 363.3, "y0": 512.0, "x1": 518.9, "y1": 624.0}, "host": "srv-sp-01", "ip": "10.0.4.13", "status": "ok", "fill": "#1e0e00", "stroke": "#8a3800", "labelColor": "#f08040", "statusColor": "#3fb950"}, "TO": {"name": "Tocantins", "region": "Norte", "cx": 451.5, "cy": 322.3, "bbox": {"x0": 404.5, "y0": 216.1, "x1": 492.2, "y1": 384.1}, "host": "srv-to-01", "ip": "10.0.1.16", "status": "ok", "fill": "#0d2137", "stroke": "#1565a0", "labelColor": "#4da6ff", "statusColor": "#3fb950"}, "DF": {"name": "Distrito Federal", "region": "Centro-Oeste", "cx": 458.5, "cy": 432.1, "bbox": {"x0": 447.2, "y0": 425.3, "x1": 464.2, "y1": 436.5}, "host": "srv-df-01", "ip": "10.0.3.13", "status": "ok", "fill": "#1e1700", "stroke": "#8a6000", "labelColor": "#f0c040", "statusColor": "#3fb950"}};

var VB_FULL      = '-8 -3 740 811';
var STATUS_COLOR = { ok:'#3fb950', warning:'#d29922', problem:'#f85149' };
var STATUS_LABEL = { ok:'OK', warning:'Warning', problem:'Problem' };

var svg           = htmlNode.querySelector('#mapa');
var wrap          = htmlNode.querySelector('#map-wrap');
var tt            = htmlNode.querySelector('#tooltip');
var infoPanel     = htmlNode.querySelector('#info-panel');
var overviewLayer = htmlNode.querySelector('#overview-nodes');
var zoomLayer     = htmlNode.querySelector('#zoom-nodes');

function svgEl(tag, attrs) {
  var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.keys(attrs).forEach(function(k) { el.setAttribute(k, attrs[k]); });
  return el;
}
function svgTxt(text, attrs) {
  var el = svgEl('text', attrs);
  el.textContent = text;
  return el;
}

function serverIcon(cx, cy, s, color) {
  var g = svgEl('g', {}); g.setAttribute('pointer-events','none');
  var h = s*0.28, w = s, x = cx-w/2, gap = s*0.06, rows = 3;
  var totalH = rows*h+(rows-1)*gap, startY = cy-totalH/2;
  for (var i = 0; i < rows; i++) {
    var ry = startY+i*(h+gap);
    g.appendChild(svgEl('rect',{x:x,y:ry,width:w,height:h,rx:h*0.2,fill:'#1a2535',stroke:color,'stroke-width':'0.3'}));
    g.appendChild(svgEl('circle',{cx:x+w-h*0.35,cy:ry+h/2,r:h*0.2,fill:i===0?color:'#2a3a4a'}));
    g.appendChild(svgEl('rect',{x:x+h*0.25,y:ry+h*0.35,width:w-h*1.2,height:h*0.3,rx:h*0.1,fill:'#2a3a50'}));
  }
  return g;
}

// ── Lê todas as séries ────────────────────────────────────────────────────────
var stateGroups = {};

function parseSerie(serie) {
  if (!serie || !serie.fields) return;
  var fMetric=null, fValue=null, fSigla=null, fGroup=null;
  serie.fields.forEach(function(f) {
    var n = (f.name||'').toLowerCase();
    if      (n==='metric'||n==='host')                    fMetric = f;
    else if (n==='value')                                 fValue  = f;
    else if (n==='state_sigla'||n==='sigla'||n==='state') fSigla  = f;
    else if (n==='group_name'||n==='group'||n==='grupo')  fGroup  = f;
  });
  if (!fMetric) fMetric = serie.fields[0];
  if (!fValue)  fValue  = serie.fields[1];
  if (!fSigla && serie.fields.length > 2) fSigla = serie.fields[2];
  if (!fGroup && serie.fields.length > 3) fGroup = serie.fields[3];
  if (!fMetric || !fValue) return;

  var getV = function(arr,i){ return typeof arr.get==='function'?arr.get(i):arr[i]; };
  var len = (fMetric.values.length!==undefined) ? fMetric.values.length
          : (fMetric.values.toArray ? fMetric.values.toArray().length : 0);

  for (var i = 0; i < len; i++) {
    var hn  = getV(fMetric.values, i);
    var val = getV(fValue.values,  i);
    var sig = fSigla ? String(getV(fSigla.values,i)||'').toUpperCase().trim() : null;
    var grp = fGroup ? String(getV(fGroup.values,i)||'').trim() : 'SEM-GRUPO';
    if (!hn || !sig) continue;
    if (!stateGroups[sig])      stateGroups[sig]      = {};
    if (!stateGroups[sig][grp]) stateGroups[sig][grp] = [];
    var exists = stateGroups[sig][grp].some(function(h){ return h.name===hn; });
    if (!exists) stateGroups[sig][grp].push({
      name:   hn,
      status: (val===1||val==='1') ? 'ok' : 'problem'
    });
  }
}

if (data && data.series && data.series.length > 0) {
  data.series.forEach(function(serie){ parseSerie(serie); });
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function worstStatus(hosts) {
  var order={problem:2,warning:1,ok:0}, worst='ok';
  (hosts||[]).forEach(function(h){
    if((order[h.status]||0)>(order[worst]||0)) worst=h.status;
  });
  return worst;
}

function worstStatusState(sig) {
  var groups=stateGroups[sig]||{}, worst='ok', order={problem:2,warning:1,ok:0};
  Object.keys(groups).forEach(function(g){
    var s=worstStatus(groups[g]);
    if((order[s]||0)>(order[worst]||0)) worst=s;
  });
  return worst;
}

function groupList(sig) {
  return Object.keys(stateGroups[sig]||{}).sort();
}

function groupPositions(sig) {
  var sd=STATES[sig], groups=groupList(sig), count=groups.length, spacing=22;
  var totalW=(count-1)*spacing;
  return groups.map(function(g,i){
    return { group:g, x:sd.cx-totalW/2+i*spacing, y:sd.cy };
  });
}

// ── viewBox ───────────────────────────────────────────────────────────────────
function animateVB(fromStr, toStr, ms, onDone) {
  var f=fromStr.split(' ').map(Number), t=toStr.split(' ').map(Number);
  var steps=28, step=0;
  function ease(x){ return x<0.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2; }
  if (window._zoomTimer) clearInterval(window._zoomTimer);
  window._zoomTimer = setInterval(function(){
    step++;
    var p=ease(step/steps);
    svg.setAttribute('viewBox', f.map(function(v,i){return (v+(t[i]-v)*p).toFixed(1);}).join(' '));
    if(step>=steps){
      clearInterval(window._zoomTimer); window._zoomTimer=null;
      svg.setAttribute('viewBox',toStr);
      if(onDone) onDone();
    }
  }, ms/steps);
}

function stateVB(sig) {
  var b=STATES[sig].bbox, padX=40, padY=80;
  var x=b.x0-padX, y=b.y0-padY, w=(b.x1-b.x0)+padX*2, h=(b.y1-b.y0)+padY*2;
  var min=200;
  if(w<min){x-=(min-w)/2;w=min;} if(h<min){y-=(min-h)/2;h=min;}
  var asp=(wrap.clientWidth||700)/(wrap.clientHeight||450);
  if(w/h>asp){var nh=w/asp;y-=(nh-h)/2;h=nh;} else{var nw=h*asp;x-=(nw-w)/2;w=nw;}
  return [x,y,w,h].map(function(v){return Math.round(v*10)/10;}).join(' ');
}

// ── Dots de overview ──────────────────────────────────────────────────────────
function buildDot(sig) {
  var sd=STATES[sig];
  var hasGroups=Object.keys(stateGroups[sig]||{}).length>0;
  var status=hasGroups?worstStatusState(sig):'ok';
  var sc=STATUS_COLOR[status];
  var g=svgEl('g',{'data-sigla':sig,id:'dot-'+sig});
  var pulse=svgEl('circle',{cx:sd.cx,cy:sd.cy,r:'4',fill:sc,class:'spulse-'+status});
  pulse.setAttribute('pointer-events','none');
  var dot=svgEl('circle',{cx:sd.cx,cy:sd.cy,r:'4',fill:sc,stroke:'#111827','stroke-width':'1'});
  g.appendChild(pulse); g.appendChild(dot);
  return g;
}

// ── Nós de zoom ───────────────────────────────────────────────────────────────
function buildZoomNodes(sig) {
  var container=svgEl('g',{class:'host-node-group',id:'hnode-'+sig,'data-sigla':sig});
  var groups=stateGroups[sig]||{};
  var positions=groupPositions(sig);
  if(positions.length===0) return container;
  var order={problem:2,warning:1,ok:0};

  for(var li=0;li<positions.length-1;li++){
    var p1=positions[li], p2=positions[li+1];
    var st1=worstStatus(groups[p1.group]), st2=worstStatus(groups[p2.group]);
    var ls=(order[st1]||0)>=(order[st2]||0)?st1:st2;
    var line=svgEl('line',{x1:p1.x,y1:p1.y,x2:p2.x,y2:p2.y,
      stroke:STATUS_COLOR[ls],'stroke-width':'0.8',opacity:'0.8'});
    if(ls==='problem') line.setAttribute('stroke-dasharray','2,2');
    else if(ls==='warning') line.setAttribute('stroke-dasharray','4,2');
    line.setAttribute('pointer-events','none');
    container.appendChild(line);
  }

  positions.forEach(function(pos){
    var grpName=pos.group, hosts=groups[grpName]||[];
    var status=worstStatus(hosts), sc=STATUS_COLOR[status];
    var px=pos.x, py=pos.y;
    var ng=svgEl('g',{'data-group':grpName,'data-sig':sig,'data-status':status,style:'cursor:pointer'});
    var pulse=svgEl('circle',{cx:px,cy:py,r:'2',fill:sc,class:'pulse-'+status});
    pulse.setAttribute('pointer-events','none');
    var bg=svgEl('circle',{cx:px,cy:py,r:'3.5',fill:'#0d1117',stroke:sc,'stroke-width':'0.8'});
    var icon=serverIcon(px,py,3,sc);
    var lbg=svgEl('rect',{x:px-14,y:py+5,width:'28',height:'8',rx:'1',fill:'#0d1117',opacity:'0.9'});
    lbg.setAttribute('pointer-events','none');
    var shortGrp=grpName.length>10?grpName.slice(-10):grpName;
    var lbl=svgTxt(shortGrp,{x:px,y:py+11,'text-anchor':'middle',
      'font-size':'3.2',fill:'#e5e7eb','font-family':'monospace','font-weight':'600'});
    lbl.setAttribute('pointer-events','none');
    ng.appendChild(pulse); ng.appendChild(bg); ng.appendChild(icon);
    ng.appendChild(lbg);   ng.appendChild(lbl);
    ng.addEventListener('mouseenter',function(e){showGroupTip(grpName,hosts,status,sig,e);});
    ng.addEventListener('mousemove',  moveTip);
    ng.addEventListener('mouseleave', function(){tt.style.display='none';});
    ng.addEventListener('click',function(e){e.stopPropagation();showGroupInfo(grpName,hosts,sig);});
    container.appendChild(ng);
  });
  return container;
}

// ── Pirâmide SVG ──────────────────────────────────────────────────────────────
function buildTopoSVG(hosts) {
  var W=200, H=150, n=hosts.length;
  var svgNS='http://www.w3.org/2000/svg';
  var s=document.createElementNS(svgNS,'svg');
  s.setAttribute('width',W); s.setAttribute('height',H);
  s.setAttribute('viewBox','0 0 '+W+' '+H);
  s.style.display='block'; s.style.margin='0 auto';

  // Calcula posições em pirâmide
  var positions=[];
  if(n===1){
    positions=[{x:W/2,y:H/2}];
  } else {
    var rows=[], total=0, rn=1;
    while(total<n){ rows.push(rn); total+=rn; rn++; }
    var excess=total-n;
    rows[rows.length-1]-=excess;
    if(rows[rows.length-1]===0) rows.pop();
    var numRows=rows.length;
    for(var ri=0;ri<numRows;ri++){
      var colsInRow=rows[ri];
      var py=H*(0.15+(ri/Math.max(numRows-1,1))*0.68);
      for(var ci=0;ci<colsInRow;ci++){
        var px=W*(0.5+(ci-(colsInRow-1)/2)*(0.65/Math.max(colsInRow-1,1)));
        positions.push({x:px,y:py});
      }
    }
  }

  // Full mesh links
  for(var a=0;a<n;a++){
    for(var b=a+1;b<n;b++){
      var stA=hosts[a].status, stB=hosts[b].status;
      var linkSt=(stA==='problem'||stB==='problem')?'problem'
               :(stA==='warning'||stB==='warning')?'warning':'ok';
      var line=document.createElementNS(svgNS,'line');
      line.setAttribute('x1',positions[a].x); line.setAttribute('y1',positions[a].y);
      line.setAttribute('x2',positions[b].x); line.setAttribute('y2',positions[b].y);
      line.setAttribute('stroke',STATUS_COLOR[linkSt]);
      line.setAttribute('stroke-width','1');
      line.setAttribute('opacity','0.5');
      if(linkSt==='problem') line.setAttribute('stroke-dasharray','3,2');
      s.appendChild(line);
    }
  }

  // Nós
  hosts.forEach(function(host,i){
    var sc=STATUS_COLOR[host.status], px=positions[i].x, py=positions[i].y, r=9;
    var circle=document.createElementNS(svgNS,'circle');
    circle.setAttribute('cx',px); circle.setAttribute('cy',py);
    circle.setAttribute('r',r); circle.setAttribute('fill','#0d1117');
    circle.setAttribute('stroke',sc); circle.setAttribute('stroke-width','1.5');
    s.appendChild(circle);
    var iw=8, ih=6, ix=px-iw/2, iy=py-ih/2;
    for(var row=0;row<3;row++){
      var rowH=1.3, rowY=iy+row*(ih/3);
      var rect=document.createElementNS(svgNS,'rect');
      rect.setAttribute('x',ix); rect.setAttribute('y',rowY);
      rect.setAttribute('width',iw); rect.setAttribute('height',rowH);
      rect.setAttribute('rx','0.3'); rect.setAttribute('fill',row===0?sc:'#2a3a50');
      s.appendChild(rect);
    }
    var led=document.createElementNS(svgNS,'circle');
    led.setAttribute('cx',px+r-2.5); led.setAttribute('cy',py-r+2.5);
    led.setAttribute('r','2.2'); led.setAttribute('fill',sc);
    s.appendChild(led);
    var lbl=document.createElementNS(svgNS,'text');
    lbl.setAttribute('x',px); lbl.setAttribute('y',py+r+7);
    lbl.setAttribute('text-anchor','middle'); lbl.setAttribute('font-size','6');
    lbl.setAttribute('fill',host.status==='problem'?sc:'#9ca3af');
    lbl.setAttribute('font-family','monospace');
    lbl.setAttribute('font-weight',host.status==='problem'?'700':'400');
    lbl.textContent=host.name.length>10?host.name.slice(-10):host.name;
    s.appendChild(lbl);
  });
  return s;
}

function ensureTopoCard() {
  if(htmlNode.querySelector('#topo-card')) return;
  var card=document.createElement('div');
  card.id='topo-card';
  card.style.cssText=[
    'position:absolute','top:8px','right:8px','width:280px',
    'background:#1f2937','border:1px solid #374151',
    'border-radius:8px','padding:11px','display:none','z-index:49'
  ].join(';');
  card.innerHTML=
    '<div id="topo-card-title" style="font-size:11px;font-weight:700;color:#f3f4f6;'
    +'margin-bottom:4px;padding-bottom:5px;border-bottom:1px solid #374151;"></div>'
    +'<div id="topo-card-svg" style="margin-top:6px;"></div>';
  htmlNode.querySelector('#map-wrap').appendChild(card);
}

function showTopoCard(grpName,hosts){
  ensureTopoCard();
  var ip=htmlNode.querySelector('#info-panel');
  var tc=htmlNode.querySelector('#topo-card');
  var ipBottom=(ip.offsetTop||8)+(ip.offsetHeight||200)+8;
  tc.style.top=ipBottom+'px';
  htmlNode.querySelector('#topo-card-title').textContent=grpName+' — Topologia';
  var sc=htmlNode.querySelector('#topo-card-svg');
  sc.innerHTML=''; sc.appendChild(buildTopoSVG(hosts));
  tc.style.display='block';
}

function hideTopoCard(){
  var tc=htmlNode.querySelector('#topo-card');
  if(tc) tc.style.display='none';
}

// ── Cards laterais ────────────────────────────────────────────────────────────
function renderHostList(hosts){
  return hosts.map(function(h){
    var sc=STATUS_COLOR[h.status], txt=h.status==='ok'?'Up (1)':'Down (0)';
    return '<div style="display:flex;justify-content:space-between;align-items:center;'
      +'padding:3px 0;border-bottom:1px solid #1f2937;">'
      +'<span style="color:#d1d5db;font-family:monospace;font-size:10px;">'+h.name+'</span>'
      +'<span style="color:'+sc+';font-size:10px;font-weight:600;margin-left:8px;">'+txt+'</span>'
      +'</div>';
  }).join('');
}

function renderGroupSummary(sig){
  var groups=stateGroups[sig]||{}, grpNames=Object.keys(groups).sort();
  if(grpNames.length===0) return '—';
  return grpNames.map(function(g){
    var hosts=groups[g], status=worstStatus(hosts), sc=STATUS_COLOR[status];
    var okCount=hosts.filter(function(h){return h.status==='ok';}).length;
    return '<div style="display:flex;justify-content:space-between;align-items:center;'
      +'padding:3px 0;border-bottom:1px solid #1f2937;">'
      +'<span style="color:#e5e7eb;font-family:monospace;font-size:10px;font-weight:600;">'+g+'</span>'
      +'<span style="color:'+sc+';font-size:10px;font-weight:600;">'+okCount+'/'+hosts.length+' OK</span>'
      +'</div>';
  }).join('');
}

function showGroupInfo(grpName,hosts,sig){
  var sd=STATES[sig], status=worstStatus(hosts), sc=STATUS_COLOR[status];
  var okCount=hosts.filter(function(h){return h.status==='ok';}).length;
  htmlNode.querySelector('#ip-name').textContent   = grpName;
  htmlNode.querySelector('#ip-region').textContent = sd.name+' — '+hosts.length+' host(s) — '+okCount+' OK';
  htmlNode.querySelector('#ip-host').innerHTML     = renderHostList(hosts);
  htmlNode.querySelector('#ip-ip').textContent     = '—';
  htmlNode.querySelector('#ip-uptime').textContent = '—';
  htmlNode.querySelector('#ip-status-badge').innerHTML =
    '<span class="sdot" style="background:'+sc+'"></span>'
    +'<span style="color:'+sc+'">'+STATUS_LABEL[status]+'</span>';
  infoPanel.style.display='block';
  showTopoCard(grpName,hosts);
}

function showStateInfo(sig){
  var sd=STATES[sig], groups=stateGroups[sig]||{};
  var grpCount=Object.keys(groups).length;
  var status=worstStatusState(sig), sc=STATUS_COLOR[status];
  htmlNode.querySelector('#ip-name').textContent   = sd.name;
  htmlNode.querySelector('#ip-region').textContent = sd.region+' — '+grpCount+' grupo(s)';
  htmlNode.querySelector('#ip-host').innerHTML     = renderGroupSummary(sig);
  htmlNode.querySelector('#ip-ip').textContent     = '—';
  htmlNode.querySelector('#ip-uptime').textContent = '—';
  htmlNode.querySelector('#ip-status-badge').innerHTML =
    '<span class="sdot" style="background:'+sc+'"></span>'
    +'<span style="color:'+sc+'">'+STATUS_LABEL[status]+'</span>';
  infoPanel.style.display='block';
  hideTopoCard();
}

// ── Tooltip ───────────────────────────────────────────────────────────────────
function showGroupTip(grpName,hosts,status,sig,e){
  var sd=STATES[sig];
  var okCount=hosts.filter(function(h){return h.status==='ok';}).length;
  htmlNode.querySelector('#tt-name').textContent   = grpName;
  htmlNode.querySelector('#tt-host').textContent   = okCount+'/'+hosts.length+' hosts OK';
  htmlNode.querySelector('#tt-ip').textContent     = '—';
  htmlNode.querySelector('#tt-region').textContent = sd.name;
  var stEl=htmlNode.querySelector('#tt-status');
  stEl.textContent=STATUS_LABEL[status]; stEl.className='tt-'+status;
  htmlNode.querySelector('#tt-hint-row').style.display='flex';
  tt.style.display='block'; moveTip(e);
}

function showStateTip(sig,e){
  var sd=STATES[sig], groups=stateGroups[sig]||{};
  var grpCount=Object.keys(groups).length;
  var status=grpCount>0?worstStatusState(sig):'ok';
  htmlNode.querySelector('#tt-name').textContent   = sd.name;
  htmlNode.querySelector('#tt-host').textContent   = grpCount>0?grpCount+' grupo(s)':'—';
  htmlNode.querySelector('#tt-ip').textContent     = '—';
  htmlNode.querySelector('#tt-region').textContent = sd.region;
  var stEl=htmlNode.querySelector('#tt-status');
  stEl.textContent=STATUS_LABEL[status]; stEl.className='tt-'+status;
  htmlNode.querySelector('#tt-hint-row').style.display='flex';
  tt.style.display='block'; moveTip(e);
}

function moveTip(e){
  var rect=wrap.getBoundingClientRect();
  var x=e.clientX-rect.left+14, y=e.clientY-rect.top-10;
  if(x+200>rect.width) x=rect.width-205;
  if(y<0) y=5;
  tt.style.left=x+'px'; tt.style.top=y+'px';
}

// ── Zoom ──────────────────────────────────────────────────────────────────────
function zoomIn(sig){
  if(window._currentState===sig) return;
  window._currentState=sig;
  tt.style.display='none'; infoPanel.style.display='none';
  hideTopoCard();

  htmlNode.querySelectorAll('.state-path').forEach(function(p){
    var s=p.getAttribute('data-sigla');
    p.classList.toggle('dimmed',s!==sig); p.classList.toggle('active',s===sig);
  });
  overviewLayer.style.display='none';
  htmlNode.querySelectorAll('.host-node-group').forEach(function(n){
    n.classList.toggle('visible',n.getAttribute('data-sigla')===sig);
  });

  animateVB(svg.getAttribute('viewBox')||VB_FULL,stateVB(sig),500,function(){ showStateInfo(sig); });

  // Busca o botão sempre fresco do DOM
  var btnBack=htmlNode.querySelector('#btn-back');
  if(btnBack) btnBack.style.display='flex';

  var breadcrumb=htmlNode.querySelector('#breadcrumb');
  if(breadcrumb){
    breadcrumb.innerHTML='<span class="bc-link" id="bc-back">Brasil</span>'
      +'<span class="bc-sep"> &#x203A; </span>'
      +'<span class="bc-cur">'+STATES[sig].name+'</span>';
    var bcEl=htmlNode.querySelector('#bc-back');
    if(bcEl) bcEl.addEventListener('click',zoomOut);
  }
}

function zoomOut(){
  if(!window._currentState) return;
  window._currentState=null;
  tt.style.display='none'; infoPanel.style.display='none';
  hideTopoCard();

  htmlNode.querySelectorAll('.state-path').forEach(function(p){p.classList.remove('dimmed','active');});
  htmlNode.querySelectorAll('.host-node-group').forEach(function(n){n.classList.remove('visible');});

  animateVB(svg.getAttribute('viewBox')||VB_FULL,VB_FULL,450,function(){ overviewLayer.style.display=''; });

  var btnBack=htmlNode.querySelector('#btn-back');
  if(btnBack) btnBack.style.display='none';

  var breadcrumb=htmlNode.querySelector('#breadcrumb');
  if(breadcrumb) breadcrumb.innerHTML='<span class="bc-cur">Brasil</span>';
}

// ── Reconstrói layers a cada refresh ──────────────────────────────────────────
overviewLayer.innerHTML='';
zoomLayer.innerHTML='';
Object.keys(STATES).forEach(function(sig){
  overviewLayer.appendChild(buildDot(sig));
  zoomLayer.appendChild(buildZoomNodes(sig));
});

// ── Re-registra listeners ─────────────────────────────────────────────────────
htmlNode.querySelectorAll('.state-path').forEach(function(el){
  var fresh=el.cloneNode(true);
  el.parentNode.replaceChild(fresh,el);
  var sig=fresh.getAttribute('data-sigla');
  fresh.addEventListener('click',      function(){ if(!window._currentState) zoomIn(sig); });
  fresh.addEventListener('mouseenter', function(e){ if(!window._currentState) showStateTip(sig,e); });
  fresh.addEventListener('mousemove',  function(e){ if(!window._currentState) moveTip(e); });
  fresh.addEventListener('mouseleave', function(){ tt.style.display='none'; });
});

htmlNode.querySelectorAll('.host-node-group').forEach(function(el){
  var fresh=el.cloneNode(true);
  el.parentNode.replaceChild(fresh,el);
  var sig=fresh.getAttribute('data-sigla');
  fresh.querySelectorAll('[data-group]').forEach(function(ng){
    var grpName=ng.getAttribute('data-group');
    var status=ng.getAttribute('data-status');
    var hosts=(stateGroups[sig]||{})[grpName]||[];
    ng.addEventListener('mouseenter',function(e){showGroupTip(grpName,hosts,status,sig,e);});
    ng.addEventListener('mousemove', moveTip);
    ng.addEventListener('mouseleave',function(){tt.style.display='none';});
    ng.addEventListener('click',function(e){e.stopPropagation();showGroupInfo(grpName,hosts,sig);});
  });
});

// Botão voltar — re-registra sem clonar para manter referência
var btnBack=htmlNode.querySelector('#btn-back');
if(btnBack){
  var freshBtn=btnBack.cloneNode(true);
  btnBack.parentNode.replaceChild(freshBtn,btnBack);
  freshBtn.addEventListener('click',zoomOut);
  // Mantém visível se já estava em zoom antes do refresh
  if(window._currentState) freshBtn.style.display='flex';
}

document.onkeydown=function(e){if(e.key==='Escape') zoomOut();};