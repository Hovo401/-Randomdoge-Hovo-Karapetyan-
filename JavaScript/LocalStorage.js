class LocalStorage {
    static Start() {
        let storage = JSON.parse(localStorage.getItem("blocksLicks"))

        if (storage?.blocks == null || !Array.isArray(storage?.blocks)) {
            localStorage.setItem("blocksLicks", `{"blocks":[]}`);
        } else {
            storage.blocks.forEach(element => {
                Main.blocks.push(new Block(element.url, element.like))
            });

            Main.arrlist.likesList.Render()
        }
    }
    static set Like(obj) {
        localStorage.setItem("blocksLicks", JSON.stringify(obj))
    }
    static get Like() {
        return JSON.parse(localStorage.getItem("blocksLicks"));
    }
}