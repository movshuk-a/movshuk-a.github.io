
// from section "main"

function we() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let activeTextId = 1;
    
    nextButton.addEventListener("click", () => {
        if (activeTextId === 4) {
            activeTextId = 1;
        } else {
            activeTextId++;
        }
       //activeTextId == 2
       document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId - 1}`).style.opacity = 0;
       //document.getElementById(`text${activeTextId}`).classList.add("active");

       let op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op +=0.05;
            console.log(op);
        }

       document.getElementById(`round${activeTextId == 1 ? 4 : activeTextId - 1}`).classList.remove("round_active");
       document.getElementById(`round${activeTextId}`).classList.add("round_active");


    });

    prevButton.addEventListener("click", () => {
        if (activeTextId === 1) {
            activeTextId = 4;
        } else {
            activeTextId--;
        }
        document.getElementById(`text${activeTextId == 4 ? 1 : activeTextId + 1}`).style.opacity = 0;
        //document.getElementById(`text${activeTextId}`).classList.add("active"); 
        let op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op +=0.05;
            console.log(op);
        }


        document.getElementById(`round${activeTextId == 4 ? 1 : activeTextId + 1}`).classList.remove("round_active");
        document.getElementById(`round${activeTextId}`).classList.add("round_active"); 
    });
};
//------------------------------------------------------------------------------------------------------------------------------




// from section "customers"


function weAll() {
    const backButton = document.getElementById("back");
    const forraderButton = document.getElementById("forrader");
    let aTextId = 1;
    
    forraderButton.addEventListener("click", () => {
        if (aTextId === 4) {
            aTextId = 1;
        } else {
           
            aTextId++;
        }
       
        document.getElementById(`company${aTextId == 1 ? 4 : aTextId - 1}`).classList.remove("company_active");
        document.getElementById(`company${aTextId}`).classList.add("company_active");
       
       
       document.getElementById(`wheel${aTextId == 1 ? 4 : aTextId - 1}`).classList.remove("wheel_active");
       document.getElementById(`wheel${aTextId}`).classList.add("wheel_active");


    });

    backButton.addEventListener("click", () => {
        if (aTextId === 1) {
            aTextId = 4;
        } else {
            aTextId--;
        }
      
        document.getElementById(`company${aTextId == 4 ? 1 : aTextId + 1}`).classList.remove("company_active");
        document.getElementById(`company${aTextId}`).classList.add("company_active");
        
        
        document.getElementById(`wheel${aTextId == 4 ? 1 : aTextId + 1}`).classList.remove("wheel_active");
        document.getElementById(`wheel${aTextId}`).classList.add("wheel_active"); 
    });
};

//--------------------------------------------------------------------------------------------------------------------------------------





// from section "spec"

function forBox() {
    // находим все ячейки
    const boxes = document.getElementsByClassName("six_box");
    console.log(boxes);
    // перебираем ячейки и указываем листенер для каждой
  
    for (let six_box of boxes) {
        console.log(six_box);
  
        // указываем листенер на событие click
        
        six_box.addEventListener("click", () => {
            // код обработки события
            console.log(six_box);
  
            // если в классе у ячейки есть класс active
            if(six_box.className.indexOf("active") !== -1) {
                //удаляем class active
                six_box.classList.remove("active");
  
              } else {
                //очищаем/обнавляем ячейки
                removeIve();
                // добавляем класс active
                six_box.classList.add("active");
  
            }
            
  
        });
    }


};

  
function removeIve() {
    const boxes = document.getElementsByClassName("six_box");
    for (let six_box of boxes) {
        six_box.classList.remove("active");
    }
}
  

//-----------------------------------------------------------------------------------------------------






// from section "cases"

function forCell() {
    // находим все ячейки
    const cells = document.getElementsByClassName("cell");
    console.log(cells);
    // перебираем ячейки и указываем листенер для каждой

    for (let cell of cells) {
        console.log(cell);

        // указываем листенер на событие click
        
        cell.addEventListener("click", () => {
            // код обработки события
            console.log(cell);

            // если в классе у ячейки есть класс active
            if(cell.className.indexOf("active") !== -1) {
                //удаляем class active
                cell.classList.remove("active");

            } else {
                //очищаем/обнавляем ячейки
                removeActive();
                // добавляем класс active
                cell.classList.add("active");

            }
            

        });
    }
    
    
};

 
function removeActive() {
    const cells = document.getElementsByClassName("cell");
    for (let cell of cells) {
        cell.classList.remove("active");
    }
}

//---------------------------------------------------------------------------------------------



function thankS() {
    const behindButton = document.getElementById("behind");
    const aheadButton = document.getElementById("ahead");
    let actTextId = 1;
    
    aheadButton.addEventListener("click", () => {
        if (actTextId === 4) {
            actTextId = 1;
        } else {
            actTextId++;
        }
       
       document.getElementById(`list${actTextId == 1 ? 4 : actTextId -1}`).style.opacity = 0;
       document.getElementById(`listOn${actTextId == 1 ? 4 : actTextId -1}`).style.opacity = 0;
       
       let op = 0;
       while (op <= 1) {
           let _op = op + 0.05;
           setTimeout(() => {
               document.getElementById(`list${actTextId}`).style.opacity = _op;
               document.getElementById(`listOn${actTextId}`).style.opacity = _op;
           }, 60 + _op * 200);

           op +=0.05;
           console.log(op);
       }
       

       document.getElementById(`point${actTextId == 1 ? 4 : actTextId - 1}`).classList.remove("point_active");
       document.getElementById(`point${actTextId}`).classList.add("point_active");


    });

    behindButton.addEventListener("click", () => {
        if (actTextId === 1) {
            actTextId = 4;
        } else {
            actTextId--;
        }
        document.getElementById(`list${actTextId == 4 ? 1 : actTextId + 1}`).style.opacity = 0;
        document.getElementById(`listOn${actTextId == 4 ? 1 : actTextId + 1}`).style.opacity = 0;

        let op = 0;
        while (op <= 1) {
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`list${actTextId}`).style.opacity = _op;
                document.getElementById(`listOn${actTextId}`).style.opacity = _op;
            }, 60 + _op * 200);

            op +=0.05;
            console.log(op);
        }

        document.getElementById(`point${actTextId == 4 ? 1 : actTextId + 1}`).classList.remove("point_active");
        document.getElementById(`point${actTextId}`).classList.add("point_active"); 
    });
};













window.onload = function() {
    we();
    forBox();
    forCell();
    weAll();
    thankS();
};


