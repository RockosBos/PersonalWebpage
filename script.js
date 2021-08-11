function startAnimations(){
    $("card").click(() => {
        $(this).show("slide", { direction: "left" }, 1000);
    })
    console.log("Hello There");
}