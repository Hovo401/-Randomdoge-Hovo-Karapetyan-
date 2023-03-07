class Block {
	constructor(url, like = false) {
		this.url = url;
		this.like = like;
		this.Id = Block.GetId;
	}
	static Id = 0
	static get GetId() {
		return Block.Id++;
	}
	get getBlockDocsById() {
		return document.getElementsByClassName('blockId_' + this.Id)
	}
	Add_Blok(thisDoc) {
		const url = this.url;
		let ret = `
            <div class="block blockId_${this.Id}" >
            <p class="p_text">${url.split('.')[url.split('.').length - 1]}</p>
            <div onclick="(Block.open_this(${this.Id}))" class="div_media">
            <div class="download"><img class="madia_download" src="Image/download.gif" alt=""></div>
            `;

		if (url.indexOf('.mp4') != -1 || url.indexOf('.webm') != -1) {
			ret += `
            <video onloadeddata="Block.Loading_gif_end(this)" class="media" loop onmouseover="Block.Video(this, 'play')" 
			onmouseout="Block.Video(this, 'stop')" loop muted src="${url}" alt="">
            `;
		} else {
			ret += `
            <img onload="Block.Loading_gif_end(this)" class="media hover_zoom" src="${url}" alt="">
            `
		}
		ret += `
        </div>
        <div class="iqons">
                            <div class="Image_Div">
                                <img class="iconLikeimg" onclick='Block.LikeIng(this, ${this.Id})' 
								src="Image/like_${this.like}.png" alt="">
                            </div>
                            
                        </div>
        </div>`;
		thisDoc.innerHTML += ret;
	}
	static open_this(Id) {
		const el = Main.GetBlockById(Id)
		Panel.Open(el.getBlockDocsById[0])
	}
	static LikeIng(img, Id) {
		const el = Main.GetBlockById(Id)
		el.like = !el.like;
		for (let element of el.getBlockDocsById) {
			element.getElementsByClassName('iconLikeimg')[0].src = 'Image/like_' + el.like + '.png'
		}

		let obj = LocalStorage.Like;
		obj.oldMaxId = Main.maxId;
		obj.blocks = Main.blocksLicks;
		LocalStorage.Like = obj;
	}
	static Video(video, comand) {
		if (comand == 'play') {
			video.play();
		} else if (comand == 'stop') {
			video.pause();
		}
	}
	static Loading_gif_end(e) {
		const el = e.parentElement.children[0];
		if (el && el.className == 'download') {
			e.parentElement.removeChild(el)
		}
	}
}