function show_downloads(){
    // Shows download links after clicking agreement link.
    var download_fieldset = document.getElementById("download-links");
    download_fieldset.disabled = false;
    download_fieldset.style.display = "block";
    
    // Hides agreement button.
    var agree_button = document.getElementById('agree-button');
    agree_button.style.display = "none";
    
    // Enables fieldset

}

function download_game(){
    var download_button = document.getElementById("download-button");

}

document.getElementById("agree-button").addEventListener("click", show_downloads);
document.getElementById("download-button").addEventListener("click", download_game);
