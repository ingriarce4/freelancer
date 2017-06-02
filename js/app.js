/*
 * Archivo principal de JS
 */

 (function main(){
	var boxes = Array.from(document.getElementsByClassName("imagenes"));
	var portafolio = document.getElementById("portafolio");

	var modal, bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal = document.createElement("div");
			modal.classList.add("box-servicios-modal");
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;			
			modal.appendChild(bodyModal);
			
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "https://d30y9cdsu7xlg0.cloudfront.net/png/196863-200.png");
			close.appendChild(img);
			modal.appendChild(close);
			portafolio.appendChild(modal);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
				portafolio.removeChild(modal);
			});
		});		
	});
})();