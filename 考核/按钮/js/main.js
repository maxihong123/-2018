function showPic(whic){
    var source = whic.getAttribute("href");
    var place= document.getElementById("place");
    place.setAttribute("src",source);
    var text = whic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue =text;
}