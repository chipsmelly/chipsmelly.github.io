document.querySelector("#legal-button").addEventListener("click", function () {
    for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
        if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("legal") === false) {
            document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
        }
    }
} );