import { lib, game, ui, get, ai, _status } from '../../../noname.js'

export async function precontent(config, pack) {
	if (!game.utils) {
		game.utils = {};
	}
	game.utils.giveMarkToOthers = (player) => {
		const list = game.filterPlayer();
		for (let i = 0; i < list.length; i++) {
			if (list[i] != player) {
				list[i].addMark('zongkui_mark', 1);
				player.line(list[i], 'green');
			}
		}
	}

	game.utils.initAllCharacters = () => {
		let list = [];
		if (_status.connectMode) list = get.charactersOL();
		else {
			for (const i in lib.character) {
				if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
				list.push(i);
			}
		}
		game.countPlayer2(function (current) {
			list.remove(current.name);
			list.remove(current.name1);
			list.remove(current.name2);
			if (current.storage.rehuashen && current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
		});
		_status.characterlist = list;
	}

	game.utils.checkUnforcedSkill = (skill) => {
		const info = get.info(skill);
		if (!info || !get.is.locked(skill) || info.charlotte || info.persevereSkill || info.hiddenSkill || info.juexingji || info.limited || (info.unique && !info.gainable)) return false;
		return true;
	}
}
