	  var ele=document.getElementById('container');
	  <!-- html2canvas(document.getElementById('container')).then(function(canvas) -->
	  <!-- { -->
	  <!-- var ctx=canvas.getContext('2d');// set the image quality -->
	  <!-- ctx.webkitImageSmoothingEnabled=true; -->
	  <!-- ctx.mozImageSmoothingEnables=true; -->
	  <!-- ctx.imageSmoothingEnabled=true; -->
	  <!-- ctx.imageSmoothingQuality="high"; -->
	  <!-- //ctx.drawImage(,0,0);//this gives good img quality -->
	  <!-- var canvasDataURL=canvas.toDataURL("image/png",1.0);//quality you can inc -->
	  <!-- var width=canvas.width; -->
	  <!-- var height=canvas.height; -->
	  <!-- var pdf=new jsPDF(); -->
	  <!-- pdf.addImage(canvasDataURL,'PNG',0,0,(width*.2625),(height*.27),undefined,'FAST'); -->
	  
	  <!-- pdf.save('test.pdf'); -->
	  <!-- }); -->
	 
	  
         function generatepdf(){
		 var doc=new jsPDF();
		 doc.text(20,20,'Hello World');
		 doc.text(20,30,'javascript to download');
		 doc.save('doc.pdf');
		 }
		 
		 function convert(){
		 var doc=new jsPDF();
		 var elementHTML=$('#container').html();
		 var specialElementHandlers={
		 '#element':function(element,renderer){
		 return true;
		 }
		 };
		 doc.fromHTML(elementHTML,15,15,{
		 'width':170,
		 'elementHandlers':specialElementHandlers
		 });
		 doc.save('doc-sam.pdf');
		 }
		 function toPrint(){
		 var data=document.getElementById('container');
		 print();
		 }
		 function printDiv(divName) {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}

	
	
	 