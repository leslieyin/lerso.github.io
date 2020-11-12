		document.oncontextmenu = function (event){
		if(window.event){
		event = window.event;
		}try{
		var the = event.srcElement;
		if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
		return false;
		}
		return true;
		}catch (e){
		return false;
		}
		}
		
		document.onkeydown = function(){

	    if(window.event && window.event.keyCode == 123) {
	        event.keyCode=0;
	        event.returnValue=false;
	    }
	    if(window.event && window.event.keyCode == 13) {
	        window.event.keyCode = 505;
	    }
       if(event.shiftKey) 
		   event.returnValue=false;
		}
	
 if (top.location != self.location)top.location=self.location; 
if(event.ctrlKey){
window.close();}
function clear(){
Source=document.body.firstChild.data;
document.open();
document.close();
document.body.innerHTML=Source;
}
document.writeln("<noscript>");
document.writeln("<iframescr=\"*.htm\"></iframe£¾");
document.writeln("</noscript>");