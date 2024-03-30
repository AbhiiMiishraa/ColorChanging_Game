var rect=document.querySelector("#center");

rect.addEventListener("mousemove", function(details)
{
    var rectLocation=rect.getBoundingClientRect();
    var rectInside=details.clientX-rectLocation.left;

    if(rectInside<rectLocation.width/2)
    {
        var redcolor=gsap.utils.mapRange(0,rectLocation.width/2,255,0,rectInside);

        gsap.to(rect,{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:Power4,
        })
      
        
    }

    else
    {
        var bluecolor=gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,rectInside);

        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:Power4,
        })
      
    }
});

rect.addEventListener("mouseleave",function()
{
    gsap.to(rect,{
        backgroundColor:"white",
    })
});
