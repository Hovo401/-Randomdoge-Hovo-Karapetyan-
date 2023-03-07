class List {

    constructor(thisDoc, list = []) {
        this.thisDoc = thisDoc;
        this.list = list;
    }
    Spam(quantity) {
        for (let i = 0; i < quantity; i++) {
            (async () => {
                let x = await fetch("https://random.dog/woof.json");
                let y = await x.text();
                const element = new Block(JSON.parse(y).url)
                this.list.push(element)
                Main.blocksLicks = element

                element.Add_Blok(this.thisDoc)

            })()
        }
    }
    AddNewElements(element) {
        const limit = document.getElementsByClassName('fixed_main')[0].scrollHeight -
            document.getElementsByClassName('fixed_main')[0].offsetHeight;
        let y = element.scrollTop.toFixed();

        if (y == limit && Main.thisListClassName == 'randomList') {
            this.Spam(10);
        }
    }
    Render() {
        this.thisDoc.innerHTML = '';
        for (let el of this.list) {
            (async () => {
                el.Add_Blok(this.thisDoc)
            })()
        }
    }
}
