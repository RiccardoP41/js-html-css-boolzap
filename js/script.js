$(document).ready(function(){

    $("#msg").keydown(function(){
        if ( event.which == 13 || event.keycode == 13){
            app();
        }
    });

    $("#send").click(app);

    var random = [
        "Ok!",
        "Tarapìa tapiòco! Prematurata la supercazzola, o scherziamo?",
        "Antani, come se fosse antani, anche per il direttore, la supercazzola con scappellamento",
        "Questo è un discorso illativo",
        "Qui si riscontra un chiaro intento mitopoietico",
        "Hai scritto molte cose interessanti: potresti fare uno spicilegio",
        "Sono un uomo d’affari, blinda la supercazzola prematurata,tarapia tapioca, tapioca, torapia, dollari, sterline, allaccia scarpa, scarpallaccia, dico d’albergo, ma tu?",
        "No!",
        "Boh...",
        "Forse",
        "Non ne sarei in grado",
        "Blinda la supercazzola con scappellamento a sinistra e a destra come se fossero dei pentoloni.",
        "Quintana, o setta! Intanto, trini la confraternita, pulitina!",
    ];


//FUNZIONI
    function app() {
        var d = new Date();                             //trovo l'orario con ore e minuti
        var ore = d.getHours() + ":" + piuzero(d.getMinutes());
        var valore = $("#msg").val();                   //trovo il valore del contenuto dell'input
        var chat = $(".template .messaggio").clone();   //clono il temeplate
        chat.children(".text").text(valore);            //inserisco il testo e l'orario nei giusti contenitori
        chat.children(".hours").text(ore);
        chat.addClass("inviato");                       //aggiungo la classe giusta
        chat.children(".triangolo").addClass("t-inviato") // Non importante
        $(".chat").append(chat);                        //"stampo" il msg nella chat
        $("#msg").val("");                              //resetto lo spazio input dopo l'invio
        $('.chat').scrollTop(5000);

        setTimeout(risposta, 1000);

        function risposta() {                                   //risposta
            var tapioca = numeroRandom( 0, (random.length-1));  //risp random
            var supercazzola = (random[tapioca]);               //risp random
            var chat = $(".template .messaggio").clone();
            chat.children(".text").text(supercazzola);
            chat.children(".hours").text(ore);
            chat.addClass("ricevuto");
            chat.children(".triangolo").addClass("t-ricevuto") // Non importante
            $(".chat").append(chat);
            $('.chat').scrollTop(5000);
        }
    }

    function numeroRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }

    function piuzero (i){
    if(i < 10){
        i = "0" + 1;
    }
    return i;
    }
// chiusura document.ready
});
