	var list = document.getElementById("list")

	var content = document.getElementById("input1") 
	 


	content.oninput = function() {
		var value = this.value
		list.innerHTML = ""
		if(value != "") {
			var script = document.createElement("script")
	script.src = "https://suggest.taobao.com/sug?code=utf-8&q="+value+"&_ksTS=1511344998546_330&callback=callback&k=1&area=c2c&bucketid=13"
           
           
      
         
           
            document.body.appendChild(script);

		}
	}
	  function callback(data) {

            data.result.forEach((v) => {
                var oLi = document.createElement('li');
                oLi.innerHTML = v;
                 list.appendChild(oLi);
                 oLi.onclick = function(){
                 	
                 	content.value=this.innerHTML; 
                 	list.style.display = "none"
                 }
             
                  
				           
            });
        }
	