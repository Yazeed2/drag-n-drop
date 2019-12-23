//onmouse down in body
var elementCoords = ''

$( "h1" ).mousedown((e)=>{
    elementCoords = showCoords(e)
    
})
$('body').click((e)=>{
    let coords = showCoords(e)
    let y = elementCoords[1] - coords[1]
    let x = elementCoords[0] - coords[0]
    $( "h1" ).css({'position': 'fixed','right': x, 'top': y
    } )
})

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    console.log(coords);
    
    return([x,y])
    
}