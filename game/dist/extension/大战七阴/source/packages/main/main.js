import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import { basic } from '../../basic.js';
import { card } from './card.js';
import { character } from './character.js';
import { skill } from './skill.js';
export const extensionDefaultPackage = async function () {
	return {
		character: await basic.resolve(character),
		skill: await basic.resolve(skill),
		card: await basic.resolve(card)
	};
}
