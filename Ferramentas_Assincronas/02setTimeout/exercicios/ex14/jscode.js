"use strict"

const worte = ["Ansicht", "Beurteilung", "Voraussetzung", "Zusammenhang", "Verhalten ", "Bedingung", "Einfluss ", "Verantwortung", "Erkenntnis", "Fähigkeit", "Bewerbung", "Vorstellungsgespräch", "Arbeitsvertrag", "Kündigung", "Gehalt", "Praktikum", "Weiterbildung", "Lebenslauf", "Zeugnis", "Berufserfahrung", "Mietvertrag", "Nachbar", "Haushalt", "Mülltrennung", "Einkaufsliste", "Rechnung", "Versicherung", "Verkehrsmittel", "Lieferung", "Vereinbarung"]

const übersetzungen = [ "opinião, opinion", "julgamento, assessment", "pré-requisito, prerequisite", "contexto, context", "comportamento, behavior", "condição, condition", "influência, influence", "responsabilidade, responsibility", "conhecimento, insight", "capacidade, ability", "candidatura, application", "entrevista de emprego, job interview", "contrato de trabalho, employment contract", "demissão, termination", "salário, salary", "estágio, internship", "formação contínua, further education", "currículo, résumé", "certificado, certificate", "experiência profissional, work experience", "contrato de aluguel, rental contract", "vizinho, neighbor", "tarefas domésticas, household", "separação do lixo, waste separation", "lista de compras, shopping list", "conta, bill", "seguro, insurance", "meio de transporte, means of transportation", "entrega, delivery", "acordo, agreement"];

const sätze = ["Meiner Ansicht nach sollte man mehr auf die Umwelt achten.", "Die Beurteilung der Leistung erfolgt durch den Lehrer am Ende des Kurses.", "Eine gute Sprachkenntnis ist die wichtigste Voraussetzung für diesen Job.", "In diesem Zusammenhang ist es wichtig, die Geschichte zu verstehen.", "Sein Verhalten gegenüber den Kollegen war unprofessionell.", "Du darfst mitkommen, aber nur unter einer Bedingung.", "Die Werbung hat einen großen Einfluss auf unser Kaufverhalten.", "Eltern tragen die Verantwortung für ihre Kinder.", "Nach dem Gespräch kam er zu einer wichtigen Erkenntnis.", "Teamarbeit ist eine wichtige Fähigkeit im Berufsleben.", "Ich habe meine Bewerbung gestern an die Firma geschickt.", "Morgen habe ich mein erstes Vorstellungsgespräch – ich bin nervös!", "Bevor ich anfangen kann, muss ich den Arbeitsvertrag unterschreiben.", "Nach der Kündigung suchte er sofort eine neue Stelle.", "Das Gehalt wird am Ende des Monats überwiesen.", "Während meines Studiums habe ich ein sechsmonatiges Praktikum gemacht.", "Viele Mitarbeiter nehmen an einer Weiterbildung teil, um neue Fähigkeiten zu lernen.", "Bitte senden Sie Ihren Lebenslauf und ein Motivationsschreiben per E-Mail.", "Ohne ein gutes Zeugnis wird es schwer, einen Platz an der Uni zu bekommen.", "Für diese Stelle benötigen Sie mindestens drei Jahre Berufserfahrung.", "Bevor wir einziehen konnten, haben wir den Mietvertrag gelesen und unterschrieben.", "Unser neuer Nachbar hat uns gleich zum Kaffee eingeladen.", "Im Haushalt teilen wir uns die Aufgaben gerecht auf.", "In Deutschland ist Mülltrennung sehr wichtig – Papier, Plastik, Bio...", "Ich schreibe schnell eine Einkaufsliste, bevor ich in den Supermarkt gehe.", "Die Rechnung für das Abendessen war höher als erwartet.", "Ohne Versicherung darf man in Deutschland kein Auto fahren.", "In großen Städten sind öffentliche Verkehrsmittel sehr beliebt.", "Die Lieferung des Pakets dauert normalerweise zwei bis drei Werktage.", "Wir haben eine klare Vereinbarung getroffen: Ich koche, du spülst ab."]

let richtig = []
let fehler = []

let index = Math.floor(Math.random()*sätze.length)//gera o índice do elemento-frase do array (tanto faz ser sätze.length ou worte.length já que ambos tem a mesma quantidade de elementos)
let getippterText, miniArray, palavra, word, ausgewählteSprache

function portugues(){
    document.querySelector(".satz").textContent = sätze[index]
    document.querySelector(".satz").style.left = '50%'
    document.querySelector(".frage").textContent = `Qual é a tradução de "${worte[index]}"?`
    document.querySelector(".kastenfrage").style.backgroundColor = 'white'
    document.querySelector(".antwortSenden").textContent = 'Enviar'

    miniArray = übersetzungen[index].split(",")
    palavra = miniArray[0].trim().toLowerCase()

    richtig = []
    fehler = []

    ausgewählteSprache = 'Portuguiesisch'
}

function english(){
    document.querySelector(".satz").textContent = sätze[index]
    document.querySelector(".satz").style.left = '50%'
    document.querySelector(".frage").textContent = `What is the translation of "${worte[index]}"?`
    document.querySelector(".kastenfrage").style.backgroundColor = 'white'
    document.querySelector(".antwortSenden").textContent = 'Send'

    miniArray = übersetzungen[index].split(",")
    palavra = ''
    word = miniArray[1].trim().toLowerCase()
    
    richtig = []
    fehler = []

    ausgewählteSprache = 'Englisch'
}

function schicken(){
    //continuar gerando palavras com suas frases aleatórias até restar mais nenhuma já exibida do array worte
    setTimeout(()=>{
        do{
            index = Math.floor(Math.random()*worte.length) 
        }while(richtig.includes(worte[index])||fehler.includes(worte[index]))
            document.querySelector(".satz").textContent = sätze[index]
            document.querySelector(".satz").style.left = '50%'
            document.querySelector(".kastenfrage").style.backgroundColor = 'white'
            document.querySelector(".textEinfügen").value = ''
            if(palavra=''){
                document.querySelector(".frage").textContent = `What is the translation of "${worte[index]}"?`
            }else{
                document.querySelector(".frage").textContent = `Qual é a tradução de "${worte[index]}"?`
            }
    }, 2000)
}