'use strict'

const Main = {
	blocks: [],
	arrlist: {
		randomList: new List(document.getElementById('randomList')),
		likesList: new List(document.getElementById('likesList'))
	},
	thisListClassName: 'randomList',
	checkListButton: document.getElementsByClassName('head_button'),


	get blocksLicks() {
		return this.blocks.filter((e) => {
			if (e.like == true) return true
		})
	},
	set blocksLicks(newEl) {
		this.blocks.push(newEl)
	},

	Start: function () {
		this.arrlist.randomList.Spam(8);
	},
	checkList: function (name, thisButton) {
		if (name == 'likesList') {
			this.arrlist.likesList.list = this.blocksLicks
			this.arrlist.likesList.Render();
		}
		if (this.thisListClassName != name) {

			for (let element of this.checkListButton) {
				element.className = element.className.replace('thisON', 'thisOFF')
			};
			thisButton.className = thisButton.className.replace('thisOFF', 'thisON')

			const oldList = this.arrlist[this.thisListClassName].thisDoc;
			const newList = this.arrlist[name].thisDoc;

			oldList.className = oldList.className.replace("display_Block_", "display_None_")
			newList.className = newList.className.replace("display_None_", "display_Block_")

			this.thisListClassName = name;
			this.arrlist[name].render;
		}

	},
	GetBlockById: function (id) {
		return this.blocks.filter((e) => {
			if (e.Id == id) return true
		})[0]
	},
}

LocalStorage.Start()
Main.Start()