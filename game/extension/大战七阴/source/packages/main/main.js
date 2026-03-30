import { lib, game, ui, get, ai, _status } from '../../../../../noname.js'
import { basic } from '../../basic.js';
import { card } from './card.js';
import { characters } from './character.js';
import { skills } from './skill.js';
import { intro } from './characterIntro.js';
import { sort } from './characterSort.js';
import { translation } from './characterTranslation.js';

import { skillTranslation } from './skillTranslation.js';

export const extensionDefaultPackage = async function () {
	const character = await basic.resolve(characters);
	const characterIntro = await basic.resolve(intro);
	const translate = await basic.resolve(translation);
	const characterSort = await basic.resolve(sort);

	const skill = await basic.resolve(skills);
	const skillTranslate = await basic.resolve(skillTranslation);

	return {
		character: { character, characterIntro, characterSort, translate },
		skill: { skill, translate: skillTranslate },
		card: await basic.resolve(card)
	};
}
