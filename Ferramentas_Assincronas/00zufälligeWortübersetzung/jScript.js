"use strict"

const worte = ["Ansicht", "Beurteilung", "Voraussetzung", "Zusammenhang", "Verhalten ", "Bedingung", "Einfluss ", "Verantwortung", "Erkenntnis", "Fähigkeit", "Bewerbung", "Vorstellungsgespräch", "Arbeitsvertrag", "Kündigung", "Gehalt", "Praktikum", "Weiterbildung", "Lebenslauf", "Zeugnis", "Berufserfahrung", "Mietvertrag", "Nachbar", "Haushalt", "Mülltrennung", "Einkaufsliste", "Rechnung", "Versicherung", "Verkehrsmittel", "Lieferung", "Vereinbarung"]

const übersetzungen = [ "opinião, opinion", "julgamento, assessment", "pré-requisito, prerequisite", "contexto, context", "comportamento, behavior", "condição, condition", "influência, influence", "responsabilidade, responsibility", "conhecimento, insight", "capacidade, ability", "candidatura, application", "entrevista de emprego, job interview", "contrato de trabalho, employment contract", "demissão, termination", "salário, salary", "estágio, internship", "formação contínua, further education", "currículo, résumé", "certificado, certificate", "experiência profissional, work experience", "contrato de aluguel, rental contract", "vizinho, neighbor", "tarefas domésticas, household", "separação do lixo, waste separation", "lista de compras, shopping list", "conta, bill", "seguro, insurance", "meio de transporte, means of transportation", "entrega, delivery", "acordo, agreement"];

const sätze = [
    "Meiner Ansicht nach sollte man mehr auf die Umwelt achten.", 
    "Die Beurteilung der Leistung erfolgt durch den Lehrer am Ende des Kurses.", 
    "Eine gute Sprachkenntnis ist die wichtigste Voraussetzung für diesen Job.", 
    "In diesem Zusammenhang ist es wichtig, die Geschichte zu verstehen.", 
    "Sein Verhalten gegenüber den Kollegen war unprofessionell.", 
    "Du darfst mitkommen, aber nur unter einer Bedingung.", 
    "Die Werbung hat einen großen Einfluss auf unser Kaufverhalten.", 
    "Eltern tragen die Verantwortung für ihre Kinder.", 
    "Nach dem Gespräch kam er zu einer wichtigen Erkenntnis.", 
    "Teamarbeit ist eine wichtige Fähigkeit im Berufsleben.", 
    "Ich habe meine Bewerbung gestern an die Firma geschickt.", 
    "Morgen habe ich mein erstes Vorstellungsgespräch – ich bin nervös!", 
    "Bevor ich anfangen kann, muss ich den Arbeitsvertrag unterschreiben.", 
    "Nach der Kündigung suchte er sofort eine neue Stelle.", 
    "Das Gehalt wird am Ende des Monats überwiesen.", 
    "Während meines Studiums habe ich ein sechsmonatiges Praktikum gemacht.", 
    "Viele Mitarbeiter nehmen an einer Weiterbildung teil, um neue Fähigkeiten zu lernen.", 
    "Bitte senden Sie Ihren Lebenslauf und ein Motivationsschreiben per E-Mail.", 
    "Ohne ein gutes Zeugnis wird es schwer, einen Platz an der Uni zu bekommen.", 
    "Für diese Stelle benötigen Sie mindestens drei Jahre Berufserfahrung.", 
    "Bevor wir einziehen konnten, haben wir den Mietvertrag gelesen und unterschrieben.", 
    "Unser neuer Nachbar hat uns gleich zum Kaffee eingeladen.", 
    "Im Haushalt teilen wir uns die Aufgaben gerecht auf.", 
    "In Deutschland ist Mülltrennung sehr wichtig – Papier, Plastik, Bio...", 
    "Ich schreibe schnell eine Einkaufsliste, bevor ich in den Supermarkt gehe.", 
    "Die Rechnung für das Abendessen war höher als erwartet.", 
    "Ohne Versicherung darf man in Deutschland kein Auto fahren.", 
    "In großen Städten sind öffentliche Verkehrsmittel sehr beliebt.", 
    "Die Lieferung des Pakets dauert normalerweise zwei bis drei Werktage.", 
    "Wir haben eine klare Vereinbarung getroffen: Ich koche, du spülst ab."
];

const sätze2 = [
  "Diese Ansicht wird von vielen Experten geteilt.",
  "Die Beurteilung basiert auf objektiven Kriterien.",
  "Der Führerschein ist eine Voraussetzung für die Bewerbung.",
  "Es gibt einen direkten Zusammenhang zwischen Ernährung und Gesundheit.",
  "Sein Verhalten in der Krise war vorbildlich.",
  "Die Bedingungen waren schwierig, aber akzeptabel.",
  "Eltern haben großen Einfluss auf die Entwicklung ihrer Kinder.",
  "Jeder muss Verantwortung für sein eigenes Handeln übernehmen.",
  "Diese Erkenntnis kam erst nach jahrelanger Forschung.",
  "Er hat die Fähigkeit, komplexe Probleme schnell zu lösen.",
  "Er hat seine Bewerbung persönlich im Büro abgegeben.",
  "Im Vorstellungsgespräch wurde ich nach meinen Stärken gefragt.",
  "Der Arbeitsvertrag enthält alle wichtigen Bedingungen zur Anstellung.",
  "Die Kündigung kam für ihn völlig überraschend.",
  "Er verhandelt gerade über ein höheres Gehalt.",
  "Im Praktikum konnte sie viel über den Beruf lernen.",
  "Die Firma bietet regelmäßig Weiterbildung für Mitarbeiter an.",
  "Ein tabellarischer Lebenslauf ist in Deutschland üblich.",
  "Mein letztes Zeugnis war besser als erwartet.",
  "Berufserfahrung ist oft wichtiger als ein Studium.",
  "Im Mietvertrag steht, dass Haustiere erlaubt sind.",
  "Unsere Nachbarn feiern oft laut bis spät in die Nacht.",
  "Kinder sollten im Haushalt mithelfen.",
  "Mülltrennung hilft, die Umwelt zu schonen.",
  "Ich habe die Milch vergessen, obwohl sie auf der Einkaufsliste stand.",
  "Ich habe die Rechnung bereits bezahlt.",
  "Die Versicherung deckt den Schaden am Auto vollständig ab.",
  "Welches Verkehrsmittel benutzt du zur Arbeit?",
  "Die Lieferung war schneller als angekündigt.",
  "Unsere Vereinbarung war klar: keine Arbeit am Wochenende."
];

const sätze3 = [
  "Ich bin anderer Ansicht als du.",
  "Seine Beurteilung war fair und nachvollziehbar.",
  "Ohne diese Voraussetzung kannst du nicht teilnehmen.",
  "Der Zusammenhang zwischen den beiden Ereignissen ist noch unklar.",
  "Kinder lernen ihr Verhalten oft durch Beobachtung.",
  "Verträge enthalten oft viele Bedingungen.",
  "Medien üben oft unbewussten Einfluss auf uns aus.",
  "Mit Freiheit kommt auch Verantwortung.",
  "Die Erkenntnis hat seine Einstellung komplett verändert.",
  "Diese Fähigkeit kann man durch Übung verbessern.",
  "Die Bewerbung muss spätestens bis zum 15. eingereicht werden.",
  "Sie war gut vorbereitet und hat das Vorstellungsgespräch mit Bravour bestanden.",
  "Ohne Arbeitsvertrag darfst du nicht offiziell arbeiten.",
  "Sie hat ihre Kündigung selbst eingereicht, um zu reisen.",
  "Das Gehalt reicht kaum zum Leben in der Großstadt.",
  "Ein Praktikum ist oft der erste Schritt in die Arbeitswelt.",
  "Durch die Weiterbildung konnte er sich beruflich verbessern.",
  "Sie hat ihren Lebenslauf aktualisiert und neue Erfahrungen ergänzt.",
  "Der Arbeitgeber möchte das Abschlusszeugnis sehen.",
  "Sie konnte durch verschiedene Jobs viel Berufserfahrung sammeln.",
  "Wir müssen den Mietvertrag mindestens drei Monate vorher kündigen.",
  "Der Nachbar hat mein Paket angenommen, als ich nicht zu Hause war.",
  "Im Haushalt fällt täglich viel Arbeit an.",
  "Bei falscher Mülltrennung gibt es manchmal eine Strafe.",
  "Ohne Einkaufsliste kaufe ich immer zu viel ein.",
  "Könnten Sie mir bitte eine Kopie der Rechnung schicken?",
  "Er hat eine private Krankenversicherung abgeschlossen.",
  "Fahrradfahren ist ein umweltfreundliches Verkehrsmittel.",
  "Wir warten noch immer auf die Lieferung der Möbel.",
  "Die Vereinbarung wurde schriftlich festgehalten."
];


console.log(sätze.length)
console.log(sätze2.length)
console.log(sätze3.length)
console.log(worte.length)


let index = Math.floor(Math.random()*worte.length)

let welchesArray = Math.floor(Math.random()*3)
if(welchesArray==1){
    welchesArray=sätze
}else if(welchesArray==2){
    welchesArray=sätze2
}else{
    welchesArray=sätze3
}

let richtig = []
let fehler = []

let getippterText, ausgewählteSprache, miniArray, palavra, word


console.log(welchesArray)


function portugiesisch(){
    document.querySelector(".frage").textContent = `Qual é a tradução de "${worte[index]}"?`
    document.querySelector(".schicken").textContent = 'Enviar'

    document.querySelector(".portugiesisch").style.opacity = '.5'
    document.querySelector(".englisch").style.opacity = '1'
    ausgewählteSprache = 'portugiesisch'
    miniArray = übersetzungen[index].split(', ')
    palavra = miniArray[0].trim().toLowerCase()


    console.log(ausgewählteSprache)
    console.log(welchesArray)


}
function englisch(){
    document.querySelector(".frage").textContent = `What is the translation of "${worte[index]}"?`
    document.querySelector(".schicken").textContent = 'Send'

    document.querySelector(".englisch").style.opacity = '.5'
    document.querySelector(".portugiesisch").style.opacity = '1'
    ausgewählteSprache = 'englisch'
    miniArray = übersetzungen[index].split(', ')
    word = miniArray[1].trim().toLowerCase()


    console.log(ausgewählteSprache)
    console.log(welchesArray)


}

function schalten(){
    document.querySelector(".satz").textContent = welchesArray[index]
    document.querySelector(".satz").style.opacity = '1'

    richtig = []
    fehler = []
}

function senden(){
    setTimeout(()=>{
        do{
            index = Math.floor(Math.random()*worte.length)
        }while(richtig.includes(worte[index])||fehler.includes(worte[index]))
            document.querySelector(".satz").textContent = welchesArray[index]
            document.querySelector(".satz").style.opacity = '1'
            getippterText = document.querySelector(".textEinfügen").value.trim().toLowerCase()
            miniArray = übersetzungen[index].split(', ')
        if(ausgewählteSprache==='portugiesisch'){
            palavra = miniArray[0].trim().toLowerCase()
            document.querySelector(".frage").textContent = `Qual é a tradução de "${worte[index]}"?`
            if(getippterText===palavra){
                richtig.push(worte[index])
                document.querySelector(".kastenfrage").style.backgroundColor = 'rgb(230, 255, 192)'
                document.querySelector(".frage").textContent = 'Acertou!'
            }else{
                fehler.push(worte[index])
                document.querySelector(".kastenfrage").style.backgroundColor = 'rgb(255, 212, 212)'
                document.querySelector(".frage").textContent = 'Errou!'
            }
        }else{
            word = miniArray[1].trim().toLowerCase()
            document.querySelector(".frage").textContent = `What is the translation of "${worte[index]}"?`
            if(getippterText===word){
                richtig.push(worte[index])
                document.querySelector(".kastenfrage").style.backgroundColor = 'rgb(230, 255, 192)'
                document.querySelector(".frage").textContent = 'Correct!'
            }else{
                fehler.push(worte[index])
                document.querySelector(".kastenfrage").style.backgroundColor = 'rgb(255, 212, 212)'
                document.querySelector(".frage").textContent = 'Wrong!'
            }
        }

        document.querySelector(".textEinfügen").value = ''
        document.querySelector(".kastenfrage").style.backgroundColor = ''


        console.log(richtig)
        console.log(fehler)
    }, 2000)
}