// if backspace, hide, if wrong show

let creatures = ["common dolphins","bottlenose dolphins","basking sharks","jellyfish", "whales", "grey seals", "turtles"]
let locations = ["st ives","lands end","penzance","lizard point"]

let searchable = [creatures, locations]

function filterSearch()
{
    let input = document.getElementById("search").value.toLowerCase();
    $(searchable).filter(function() 

    if (!searchable.includes(input))
    {
        console.log("nope nothing matches");
    };
    else
    {
        console.log("does contains!");
    };

    let result = 

}