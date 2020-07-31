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
        "Questo non è un nonsense, perché un nonsense non è quello che è: è quello che è che è un nonsense. Se non hai capito questa frase vuol dire che puzzi.",
        " Mi sento come se un camaleonte mi avesse usato per suonare un bidone.",
        "Spuntano dal mare aghi di sale e di pepe, io mi metto a mangiare e un uccello mi chiede di sposarlo.",
        "Siamo pazzi! Arrendetevi!",
        "Yes!",
        "Il metodo partecipativo si propone il ribaltamento della logica assistenziale preesistente senza pregiudicare l'attuale livello delle prestazioni recuperando ovvero rivalutando quale sua premessa indispensabile e condizionante l'adozione di una metodologia differenziata.",
        "L'assetto politico istituzionale auspica un corretto rapporto tra strutture e sovrastrutture senza pregiudicare l'attuale livello delle prestazioni non assumendo mai come implicito nella misura in cui ciò sia fattibile l'adozione di una metodologia differenziata.",
        "l quadro normativo privilegia il superamento di ogni ostacolo o resistenza passiva attraverso i meccanismi della partecipazione potenziando ed incrementando nel contesto di un sistema integrato l'appianamento delle discrepanze e delle disgrazie esistenti."
    ];

    $(".amico").click(selezionaContatto);

    $("#ricerca").keyup(ricerca)

//FUNZIONI

    function ricerca() {
        var testo = $("#ricerca").val().toLowerCase();
        $(".amico").each(function () {
            if ($(this).find("h4").text().toLowerCase().includes(testo)) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })

        // ripartiamo da qui


    }

    function selezionaContatto() {
        $(".amico").removeClass("active");       //rimuovo active
        $(".chat").removeClass("active");
        $(this).addClass("active");               // aggiungo active all' elemento cliccato
        var index = $(this).index();              //trovo l'indice corrispondente all'elemento cliccato
        $(".chat").eq(index).addClass("active");  // aggiungo active alla chat corrispondente all'indice che ho trovato

        var nome = $(".amico.active").find("h4").text(); // salvo il contenuto dell'elemento
        $(".nome-tizio").children("h4").text(nome);      // modifico questo elemento col contenuto appena salvato
        var immagine = $(".amico.active").find("img").attr("src");            //anche per l'immagine
        $(".interlocutore .immagine").children("img").attr("src", immagine);
    }

    function app() {
        var d = new Date();                             //trovo l'orario con ore e minuti
        var ore = piuZero(d.getHours()) + ":" + piuZero(d.getMinutes());
        var valore = $("#msg").val();                   //trovo il valore del contenuto dell'input
        var chat = $(".template .messaggio").clone();   //clono il temeplate
        chat.children(".text").text(valore);            //inserisco il testo e l'orario nei giusti contenitori
        chat.children(".hours").text(ore);
        chat.addClass("inviato");                       //aggiungo la classe giusta
        chat.children(".triangolo").addClass("t-inviato") // Non importante
        $(".chat.active").append(chat);                 //"stampo" il msg nella chat
        $("#msg").val("");                              //resetto lo spazio input dopo l'invio
        $(".chat.active").scrollTop(5000);

        setTimeout(risposta, 1000);

        function risposta() {                                   //risposta
            var tapioca = numeroRandom( 0, (random.length-1));  //risp random
            var supercazzola = (random[tapioca]);               //risp random
            var chat = $(".template .messaggio").clone();
            chat.children(".text").text(supercazzola);
            chat.children(".hours").text(ore);
            chat.addClass("ricevuto");
            chat.children(".triangolo").addClass("t-ricevuto") // Non importante
            $(".chat.active").append(chat);
            $(".chat.active").scrollTop(5000);
            $(".amico.active").find(".scritto p").text(supercazzola);
        }
    }

    function numeroRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }

    function piuZero (i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
    }
// chiusura document.ready
});
