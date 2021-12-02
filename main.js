(function() {

    const devices = [
        { 
            "name": "light switch 1", 
            "type": "SWITCH", 
            "state": "off"
        },
        { 
            "name": "light switch 2", 
            "type": "SWITCH", 
            "state": "off" 
        },
        { 
            "name": "light switch 3", 
            "type": "SWITCH", 
            "state": "off" 
        },
        { 
            "name": "light switch 4", 
            "type": "SWITCH", 
            "state": "off" 
        },
        { 
            "name": "door lock", 
            "type": "LOCK", 
            "codes": [ "1234", "2345", "3456", "4567" ], 
            "locked": true 
        }, 
        { 
            "name": "hallway dimmer", 
            "type": "DIMMER", 
            "level": 0.85 
        },
        { 
            "name": "hallway dimmer", 
            "type": "DIMMER", 
            "level": 0.85 
        },
        { 
            "name": "thermostat", 
            "type": "THERMO", 
            "temp": 72.0, 
            "mode": "AUTO"
        }
    ];
    
    let draggedElem;

    // Create and attach drag event listeners to all cards.
    function buildCardElements() {
        let column1 = document.getElementById('list1');

        devices.forEach(item => { 
            //construct the card element
            let newNode = document.createElement('div');
            newNode.classList.add('card');
            newNode.setAttribute('draggable', true);

            let titleElem = document.createElement('h1');
            titleElem.classList.add('title-elem');
            titleElem.innerHTML = item.name;

            let typeElem = document.createElement('p');
            typeElem.classList.add('type-elem');
            typeElem.innerHTML = item.type;

            column1.append(newNode);
            newNode.append(titleElem);
            newNode.append(typeElem);
        });

        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('dragstart', (e) => {
                draggedElem = e.target;
            });
        });
    }

    // Create and attach event listeners to all boards.
    function buildBoardElements() {
        const boardList = document.querySelectorAll('.board-list');

        boardList.forEach(list => {
            list.addEventListener('dragenter', (e) => {
                e.preventDefault();
            });
            list.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            list.addEventListener('dragleave', (e) => {
                e.preventDefault();
            });
            list.addEventListener('allowdrop', (e) => {
                e.preventDefault();
            });
            list.addEventListener('drop', drop);
        });
    }

    function drop(e) {
        if (e.target.className == 'board-list') {
            e.target.appendChild(draggedElem);
        } else {
            // target is another card
            e.target.parentElement.appendChild(draggedElem);
        }
    }

    buildCardElements();
    buildBoardElements();
})();