var openedByHamburger = false; //definování proměnné; zároveň určení její nepravdy v základu
function toggleActive(){ //funkce pro zobrazení hamburgeru
    openedByHamburger = !openedByHamburger; //vyvrácení nepravdy proměnné (chceme, aby v této funkci proměnná fungovala)
    document.getElementById("hamburger").classList.toggle("active"); //elementu s ID "hamburger" se přepne(toggle) třída na "active"
    document.getElementById("nav").classList.toggle("active");
    document.getElementById("sum").classList.toggle("active");
}

function roll(elementId){ //funkce pro plynulé rolování stránky ke konkrétnímu odkazu v menu
    if(openedByHamburger){ //podmínka - pokud platí definice proměnné z řádku č. 1, provede se funkce toggleActive (jedná se o kontrolu, zda je aktivní hamburger menu - pokud je aktivní, přepne(toggle) se jeho třída zpět)
        toggleActive();     
    }
    var el = document.getElementById(elementId); //definice proměnné "el" - jedná se o element, který je definován při volání funkce (v html)
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
}

window.onscroll = function() { //při scrollování stránky se provedou funkce:
    checkSticky("active");
    highlightMenuItem("n1","firmy","highlight");
    highlightMenuItem("n2","rd","highlight");
    //highlightMenuItem("n3","reference","highlight");
    highlightMenuItem("n4","technologie","highlight");
    highlightMenuItem("n5","kontakt","highlight");
}

function checkSticky(className){ //definice funkce checkSticky
    var cl = document.getElementById("up").classList; //proměnná se jménem "cl" je element s ID "up" a jeho třída
    //scroll nahoru
      if (window.scrollY < 100 && cl.contains(className)) { //pokud okno scrolluje v ose Y o méně než 100px a zároveň má element "up" přiřazenou třídu "active" (viz řádek 18), potom mu tuto třídu odebere
        cl.remove(className);
      }
      //scroll dolů
      if (window.scrollY > 100 && !cl.contains(className)) { //opak uvedeného výše, tzn. pokud okno scrolluje po ose Y o víc než 100px a zároveň element s třídou "up" nemá přiřazenou třídu "active", tuto třídu mu zase přidělí
        cl.add(className);
      }
  }

function highlightMenuItem(menuItemId, elementId, className){
    var cl = document.getElementById(menuItemId).classList;
    if(checkElementInView(elementId)){
      if(!cl.contains(className)){
        cl.add(className);
      }
    }
    else{
      if(cl.contains(className)){
        cl.remove(className);
      }
    }
  }

  function checkElementInView (elementId) {
    var elementTarget = document.getElementById(elementId);
    return window.scrollY > (elementTarget.offsetTop - 10);// + elementTarget.offsetHeight);
  }