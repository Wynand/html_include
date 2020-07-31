function replaceInclude(el){
    console.log(el)
    source = el.getAttribute("src")
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
            el.insertAdjacentHTML('afterend', xmlhttp.responseText)
            el.remove()
        }
    };
    xmlhttp.open("GET",source, true);
    xmlhttp.send();
}

function include(element){
    components = element.getElementsByTagName("include")
    includeStack = []
    for(let i of components){
        includeStack.push(i)
    }
    includeStack.map((el) => replaceInclude(el))
}

window.onload = () => include(document)
