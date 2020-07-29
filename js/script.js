$(document).ready(function(){

// *******CON INVIO********

    var d = new Date();
    var ore = d.getHours() + ":" + d.getMinutes();

    $("#msg").keydown(spedisci);

        function spedisci() {
            if ( event.which == 13 || event.keycode == 13){
// prendo il messaggio scritto nell'input
            var valore = $("#msg").val();
// clono il template
            var chat = $(".template .messaggio").clone();
// lo personalizzo
            chat.append(valore);
            chat.addClass("inviato");
// lo aggiungo al dom
            $(".chat").append(chat);




            // setTimeout(risposta, 1000);
            //
            // function risposta() {
            //     var ok = "ok";
            //     var chat = $(".template .messaggio").clone();
            //     chat.append(ok);
            //     chat.addClass("ricevuto");
            //     $(".chat").append(chat);
            // }
        }
    }// fine if

// ************CON IL CLICK
//     $("#send").click(invia);
//
//     function invia() {
//         var valore = $("#msg").val();
//         var chat = $(".template .messaggio").clone();
//         chat.append(valore);
//         chat.addClass("inviato");
//         $(".chat").append(chat);
// // risposta
//         setTimeout(ricevi, 1000);
//
//         function ricevi() {
//             var ok = "ok";
//             var chat = $(".template .messaggio").clone();
//             chat.append(ok);
//             chat.addClass("ricevuto");
//             $(".chat").append(chat);
//         }
//     }

// chiusura document.ready
});
