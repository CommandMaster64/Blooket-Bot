var things = [];
var others = [];
function thing() {
    setTimeout(function () { thing(); rea(); },5);
}
function rea() {
	if (!!document.getElementsByClassName("styles__questionText___2MlSZ-camelCase")[0]) {
        if (things.includes(document.getElementsByClassName("styles__questionText___2MlSZ-camelCase")[0].innerText)) {
            for (let e = 0; e < things.length; e += 2) {
                if (document.getElementsByClassName("styles__questionText___2MlSZ-camelCase")[0].innerText == things[e]) { 
                    for (let i = 0; i < document.getElementsByClassName("styles__answerText___2eIBw-camelCase").length; i++) {
                        if (document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[i].innerText == things[e+1]) { 
                            document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[i].click();
                            return undefined;
                        }
                    } 
                }
            }
        }else {
            things[things.length] = document.getElementsByClassName("styles__questionText___2MlSZ-camelCase")[0].innerText;
            things[things.length] = document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[0].innerText;
            document.getElementsByClassName("styles__answerTextContainer___3YgCT-camelCase")[0].click();
            setTimeout(function () { if (document.getElementsByClassName("styles__header___2daxi-camelCase")[0].innerText == "INCORRECT") { things[things.length-1] = document.getElementsByClassName("styles__correctAnswers___2G7Wf-camelCase")[0].innerText.replace("Correct Answer:\n", ""); } }, 800);
        }
	}
    if (!!document.getElementsByClassName("arts__regularBody___1TM6E-camelCase")[1]) { 
        document.getElementsByClassName("arts__regularBody___1TM6E-camelCase")[1].click(); 
    }else {
        if (!!document.getElementsByClassName("styles__choice___1aMOz-camelCase")[2]) {
            document.getElementsByClassName("styles__choice___1aMOz-camelCase")[2].click();
        }else {
            if (!!document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0] && document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0].innerText.includes("Click Anywhere to Go Next")) {
                document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0].click();
            }else {
                if (!!document.getElementsByClassName("styles__claimText___PMybv-camelCase")[0] && !document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0]) {
                    document.getElementsByClassName("styles__pageButton___3uI22-camelCase")[0].click();
                }else {
                    if (!!document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0]) {
                        document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0].click();
                    }else {
                        if (!!document.getElementsByClassName("styles__hookedText___1L1H5-camelCase")[0]) {
                            document.getElementsByClassName("styles__pageButton___3uI22-camelCase")[0].click();
                        }
                    }
                }
            }
        }
    }
    if (!!document.getElementsByClassName("styles__button___2OOoS-camelCase")[0]) {
	//hacking passwords
        if (!others.includes(document.getElementsByClassName("styles__introHeader___Dzfym-camelCase")[0].innerText.replace("HACKING ", ""))) {
            let num = Math.floor(Math.random() * document.getElementsByClassName("styles__button___2OOoS-camelCase").length);
            document.getElementsByClassName("styles__button___2OOoS-camelCase")[num].click();
            setTimeout(function () { if (document.getElementsByClassName("styles__introHeader___Dzfym-camelCase")[1].innerText == "CORRECT") { others[others.length] = document.getElementsByClassName("styles__introHeader___Dzfym-camelCase")[0].innerText.replace("HACKING ", ""); others[others.length] = document.getElementsByClassName("styles__button___2OOoS-camelCase")[num].innerText; } },50);
        }else {
            for (let i = 0; i < others.length; i += 2) {
                if (document.getElementsByClassName("styles__introHeader___Dzfym-camelCase")[0].innerText.replace("HACKING ", "") == others[i]) {
                    for (let e = 0; e < document.getElementsByClassName("styles__button___2OOoS-camelCase").length; e++) {
                        if (document.getElementsByClassName("styles__button___2OOoS-camelCase")[e].innerText == others[i+1]) {
                            document.getElementsByClassName("styles__button___2OOoS-camelCase")[e].click();
                        }
                    }
                }
            }
        }
    }
    if (!!document.getElementsByClassName("styles__container___3uQN5-camelCase")[0]) {
        for (let i = 0; i < document.getElementsByClassName("styles__plateHover___1RzQy-camelCase").length; i++) {
            document.getElementsByClassName("styles__plateHover___1RzQy-camelCase")[i].click();
            document.getElementsByClassName("styles__container___3uQN5-camelCase")[0].click();
        }
    }
    if (!!document.getElementById("restock")) {
        document.getElementById("restock").click();
    }
    if (!!document.getElementsByClassName("styles__reportShopButton___2AvJR-camelCase")[0]) {
        document.getElementsByClassName("styles__reportShopButton___2AvJR-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__shopContainer___3p5cY-camelCase")[0]) {
        for (let i = 0; i < document.getElementsByClassName("styles__itemContainer___34Xyx-camelCase").length; i++) {
            document.getElementsByClassName("styles__itemContainer___34Xyx-camelCase")[i].click();
        }
        document.getElementsByClassName("styles__nextDayButton___8lSty-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0]) {
        document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__blookChoice___1kAAj-camelCase")[1]) {
        document.getElementsByClassName("styles__blookChoice___1kAAj-camelCase")[1].click();
    }
    if (!!document.getElementsByClassName("styles__skipButton___3Ppa_-camelCase")[0]) {
        document.getElementsByClassName("styles__skipButton___3Ppa_-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__remindButton___1gTTO-camelCase")[0]) {
        document.getElementsByClassName("styles__remindButton___1gTTO-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__factoryUpgrade___Jyl9m-camelCase")[0]) {
        for (let i = 0; i < document.getElementsByClassName("styles__factoryUpgrade___Jyl9m-camelCase").length; i++) {
            document.getElementsByClassName("styles__factoryUpgrade___Jyl9m-camelCase")[i].click();
        }
    }
    if (!!document.getElementsByClassName("styles__modalButton___3J0_3-camelCase")[0]) {
        document.getElementsByClassName("styles__modalButton___3J0_3-camelCase")[0].click();
    }
}
thing();
