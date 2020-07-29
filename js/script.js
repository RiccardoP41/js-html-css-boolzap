$(document).ready(function(){

    $("#msg").keydown(function(){
        if ( event.which == 13 || event.keycode == 13){
            app();
        }
    });

    $("#send").click(app);

//FUNZIONI
    function app() {
        var d = new Date();                             //trovo l'orario con ore e minuti
        var ore = d.getHours() + ":" + d.getMinutes();
        var valore = $("#msg").val();                   //trovo il valore del contenuto dell'input
        var chat = $(".template .messaggio").clone();   //clono il temeplate
        chat.children(".text").text(valore);            //inserisco il testo e l'orario nei giusti contenitori
        chat.children(".hours").text(ore);
        chat.addClass("inviato");                       //aggiungo la classe giusta
        $(".chat").append(chat);                        //"stampo" il msg nella chat
        $("#msg").val("");                              //resetto lo spazio input dopo l'invio

        setTimeout(risposta, 1000);

        function risposta() {                                   //risposta
            var ok = "ok";
            var chat = $(".template .messaggio").clone();
            chat.children(".text").text(ok);
            chat.children(".hours").text(ore);
            chat.addClass("ricevuto");
            $(".chat").append(chat);
        }
    }

// chiusura document.ready
});
