function changebgColor(){
            var setColor = Math.floor(Math.random()*16777215).toString(16);
            document.getElementById("bodies").style.backgroundColor= "#" + setColor;
            
            }
            function fn1(){
                        var select = document.getElementById("selectorbox").value;
                        if (select == "1"){
                        
                        document.getElementById("bodies").style.backgroundColor= "blue";
                        }
                        
                             if (select == "2"){
                        
                        document.getElementById("bodies").style.backgroundColor= "grey";
                        }
                             if (select == "3"){
                        
                        document.getElementById("bodies").style.backgroundColor= "green";
                        }
                             if (select == "4"){
                        
                        document.getElementById("bodies").style.backgroundColor= "yellow";
                        }
                        
                             if (select == "5"){
                        
                        document.getElementById("bodies").style.backgroundColor= "lightblue";
                        }
                             if (select == "6"){
                        
                        document.getElementById("bodies").style.backgroundColor= "black";
                        }
                        
                        }
                        function clearcolor(){
                        document.getElementById("bodies").style.backgroundColor="white";
                        }
               
