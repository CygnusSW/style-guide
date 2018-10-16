window.onload = function(){
    
    var nodes = findColorNodes();
    for (var nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++)
    {
        var node = nodes[nodeIndex];
        var hexString = getBackgroundColorOfElement(node);
        node.textContent = node.textContent + " (" + hexString + ")";
    }


}

function findColorNodes()
{
    return document.getElementsByClassName("color-tint");
}

function getBackgroundColorOfElement(node)
{

    var nodeText = node.textContent;
    var elementStyle = node.style;
    var computedStyle = window.getComputedStyle(node, null);
    var bgColor = computedStyle["background-color"];
    return convertRGBToHex(bgColor);
}


///@input 'rgb(ddd,ddd,ddd)'
function convertRGBToHex(rgbString)
{
    // var reg = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/gi
    var vals = rgbString.replace("rgb(", "").replace(")", "").replace(" ", "").split(",");
    return vals.reduce(function(prev, curr){
        let hex = (+curr).toString(16).toUpperCase();
        let hexString = hex.length == 1 ? "0" + hex : hex;
        return prev + hexString;
    }, "#")
}