var loser = false;

window.onload=function () {
	$("end").onmouseover=gameover;
	$("start").onclick=start;
	edges=$$("div#maze div.boundary");
	len=edges.length;
	for (var i=0 ;i<len; i++){
		edges[i].onmouseover=touched;
	}

}

function touched () {
	loser=true;
	$("status").textContent="You Lose";
	for (var i = 0; i<edges.length; i++) {
		edges[i].addClassName("youlose");
	}
}

function start () {
	loser=false;
	$("status").textContent = "Find the end!";
	for (var i = 0; i < edges.length; i++) {
		edges[i].removeClassName("youlose");

	};
}

function gameover() {
    if (!loser) {
        $("status").textContent = "You win! :]";
    }
}
