import { lib, game, ui, get, ai, _status } from '../../noname.js'
import { content } from './source/content.js'
import { precontent } from './source/precontent.js'
import { config } from './source/config.js'
import { help } from './source/help.js'
import { basic } from './source/basic.js'
import { extensionDefaultPackage } from './source/packages/main/main.js'

export let type = 'extension';

export default async function () {
	const extensionInfo =
		await lib.init.promises.json(`${lib.assetURL}${basic.extensionDirectoryPath}info.json`);
	let extension = {
		name: extensionInfo.name,
		content: content,
		precontent: precontent,
		config: await basic.resolve(config),
		help: await basic.resolve(help),
		package: await basic.resolve(extensionDefaultPackage),
		files: { "character": [], "card": [], "skill": [], "audio": [] }
	};
	Object.keys(extensionInfo)
		.filter(key => key != 'name')
		.forEach(key => extension.package[key] = extensionInfo[key]);

	for (let character_name in extension.package.character.character) {
		const path = 'ext:大战七阴/image/' + character_name + '.jpg';
		//game.js will convert ext to different path in different devices
		extension.package.character.character[character_name][4].push(path);
	}

	for (let card_name in extension.package.card.card) {
		const path = 'ext:大战七阴/image/card/' + card_name + '.jpg';
		//game.js will convert ext to different path in different devices
		extension.package.card.card[card_name].image = path;
	}

	return extension;
}
