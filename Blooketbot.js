function rea() {
    if (!!document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[0]) {
    let correctV = Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.question.correctAnswers[0];
        for (let i = 0; i < document.getElementsByClassName("styles__answerText___2eIBw-camelCase").length; i++) {
            if (document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[i].innerText == correctV) {
		document.getElementsByClassName("styles__answerText___2eIBw-camelCase")[i].click();
            }
        }
    }
    if (!!document.getElementsByClassName("arts__regularBody___1TM6E-camelCase")[1]) { 
        document.getElementsByClassName("arts__regularBody___1TM6E-camelCase")[1].click(); 
    }
    if (!!document.getElementsByClassName("styles__choice___1aMOz-camelCase")[2]) {
        document.getElementsByClassName("styles__choice___1aMOz-camelCase")[2].click();
    }
    if (!!document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0] && document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0].innerText.includes("Click Anywhere to Go Next")) {
        document.getElementsByClassName("styles__feedbackContainer___7PzgR-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__claimText___PMybv-camelCase")[0] && !document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0]) {
        document.getElementsByClassName("styles__pageButton___3uI22-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0]) {
        document.getElementsByClassName("styles__fishModalButton___2-VaN-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__hookedText___1L1H5-camelCase")[0]) {
        document.getElementsByClassName("styles__pageButton___3uI22-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__button___2OOoS-camelCase")[0]) {
	for (let i = 0; i < document.getElementsByClassName("styles__button___2OOoS-camelCase").length; i++) {
	    if (document.getElementsByClassName("styles__button___2OOoS-camelCase")[i].innerText == Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.correctPassword) {
		document.getElementsByClassName("styles__button___2OOoS-camelCase").click();
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
    if (!!document.getElementsByClassName("styles__wrapper___1GQZ--camelCase styles__button___2VTXx-camelCase styles__button___YXgLa-camelCase")[0]) {
        document.getElementsByClassName("styles__wrapper___1GQZ--camelCase styles__button___2VTXx-camelCase styles__button___YXgLa-camelCase")[0].click();
    }
    if (!!document.getElementsByClassName("styles__rockButton___xdBT4-camelCase")[0]) {
	document.getElementsByClassName("styles__rockButton___xdBT4-camelCase")[0].click();
    }
    if (!!Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.enemies) {
	for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.enemies.length; i++) {
            Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.enemies[i].kill();
        }
    }
}
setInterval(rea, 5);
