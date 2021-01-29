

document.addEventListener("DOMContentLoaded", function (){

    //szukanie/łapanie elementów

    const inputProducts = document.querySelector(" #products");
    const inputOrders = document.querySelector("#orders");
    const inputSelect = document.querySelector(".select__input");
    const selectDropdown = document.querySelector(".select__dropdown");
    const choosePackage = selectDropdown.children;
    const calcSummary = document.querySelector(".calc__summary").children[0]; 
    const li = calcSummary.children;
    const checkboxAccounting = document.querySelector("#accounting");
    const checkboxTerminal = document.querySelector("#terminal");
    const totalPrice = document.querySelector("#total-price");
    

    totalPrice.classList.add("open")
    totalPrice.children[1].innerText=`$0`
    
    //funkcje

    function changeNumberCallback(event){
        let quantity = this.value;
        let i = 1
        if(this.id=="products"){
            i=0
        }
        const spans = li[i].children;
        spans[1].innerText= `${quantity} * $0.5`;
        spans[2].innerText=`$${quantity*0.5} `;
        if(quantity!=0)
        li[i].classList.add("open");
        else{
            li[i].classList.remove("open");
        }
        calculation()
    };

    function showingChoicePackage(event){
        selectDropdown.style.display="block";
    };

    function choicePackage(elements){
            let name = "";
            let cost= "";
        if (this.dataset.value=="basic"){
            inputSelect.innerText="Basic";
            selectDropdown.style.display="none";
            name = "Basic";
            cost= "0";
        }
        if (this.dataset.value=="professional"){
            inputSelect.innerText="Professional";
            selectDropdown.style.display="none";
            name = "Professional";
            cost= "25";
        }
        if (this.dataset.value=="premium"){
            inputSelect.innerText="Premium";
            selectDropdown.style.display="none";
            name = "Premium";
            cost= "60";
        }
        const spans = li[2].children;
            spans[1].innerText= `${name}`;
            spans[2].innerText=`$${cost} `;
            li[2].classList.add("open");
        calculation()  
    };

    function checkMark(event){
        if(this.checked){
            if(this.id=="accounting")
                li[3].classList.add("open");
            else
                li[4].classList.add("open");
        }
        else{
            if(this.id=="accounting")
                li[3].classList.remove("open");
            else
                li[4].classList.remove("open");
        }
        calculation()
    };

    function calculation(){
        let finalPrice=0;
        for (let el of li){
            if(el.classList.contains("open")){
            let innerText= el.children[el.children.length-1].innerText;
            innerText=innerText.slice(1);
            innerText=parseFloat(innerText);
            
            finalPrice=finalPrice+innerText
            }

        }
        totalPrice.children[1].innerText=`$${finalPrice}`
    }

    //słuchanie events

    inputProducts.addEventListener("change", changeNumberCallback);
    inputOrders.addEventListener("change", changeNumberCallback);
    inputSelect.addEventListener("click", showingChoicePackage);
    choosePackage[0].addEventListener("click",choicePackage );
    choosePackage[1].addEventListener("click",choicePackage );
    choosePackage[2].addEventListener("click",choicePackage );
    checkboxAccounting.addEventListener("change",checkMark);
    checkboxTerminal.addEventListener("change",checkMark);
})