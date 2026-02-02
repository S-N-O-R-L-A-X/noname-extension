const fs = require('fs');
const path = require('path');

function rename(fileName, inputs, oldStr, newStr) {
	// 读取文件内容
	let content = fs.readFileSync(fileName, 'utf-8');
	// 遍历inputs数组
	inputs.forEach(str => {
		// 在文件内容中查找完全匹配的字符串
		const reg = new RegExp(str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
		content = content.replace(reg, match => {
			// 只在匹配的字符串里替换oldStr为newStr
			return match.split(oldStr).join(newStr);
		});
	});
	// 写回文件
	fs.writeFileSync(fileName, content, 'utf-8');
}
