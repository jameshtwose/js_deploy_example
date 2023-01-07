const data = ["superfluous", "phlegm", "gerky", "thimble", "chung",
    "shwa", "nippens", "whisk", "orthogonal", "meander"
];


$("#generate").click(function() {
    var words = $("#words");
    words.html("");
    var quantity = $("#quantity")[0].valueAsNumber;
    for (var i = 0; i < quantity; i++) {
        words.append("<p>" + data[i] + "</p>");
    }
})

$("#copy").click(function() {
    var range = document.createRange();
    range.selectNode($("#words")[0]);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
})