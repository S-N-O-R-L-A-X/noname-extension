#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const EXTENSION_DIR = './game/extension';
const UPDATE_JSON_PATH = './game/extension/大战七阴/update.json';
const REPO_OWNER = 'S-N-O-R-L-A-X';
const REPO_NAME = 'noname-extension';

/**
 * 查找最新版本的 zip 文件
 * @returns {string} 最新版本的文件名
 */
function findLatestZipFile() {
  const files = fs.readdirSync(EXTENSION_DIR);
  const zipFiles = files.filter(file => file.startsWith('大战七阴') && file.endsWith('.zip'));
  
  if (zipFiles.length === 0) {
    throw new Error('未找到任何 大战七阴*.zip 文件');
  }
  
  // 按版本号排序
  zipFiles.sort((a, b) => {
    const versionA = a.match(/(\d+\.\d+\.\d+)/)[1];
    const versionB = b.match(/(\d+\.\d+\.\d+)/)[1];
    return versionB.localeCompare(versionA, undefined, { numeric: true });
  });
  
  return zipFiles[0];
}

/**
 * 从 update.json 读取内容
 * @returns {string} content 字段的内容
 */
function readUpdateContent() {
  if (!fs.existsSync(UPDATE_JSON_PATH)) {
    throw new Error(`update.json 文件不存在: ${UPDATE_JSON_PATH}`);
  }
  
  const data = JSON.parse(fs.readFileSync(UPDATE_JSON_PATH, 'utf8'));
  
  if (!data.content || !Array.isArray(data.content)) {
    throw new Error('update.json 中未找到 content 数组');
  }
  
  return data.content.join('\n');
}

/**
 * 创建 GitHub Release
 * @param {string} tagName - release 标签
 * @param {string} releaseName - release 名称
 * @param {string} description - release 描述
 * @param {string} assetPath - 要上传的文件路径
 */
function createRelease(tagName, releaseName, description, assetPath) {
  try {
    // 检查是否已存在该 tag
    try {
      execSync(`gh release view ${tagName} --repo ${REPO_OWNER}/${REPO_NAME}`, { stdio: 'pipe' });
      console.log(`Release ${tagName} 已存在，跳过创建`);
      return;
    } catch (e) {
      // release 不存在，继续创建
    }
    
    console.log(`正在创建 release: ${tagName}`);
    console.log(`发布名称: ${releaseName}`);
    console.log(`描述: ${description}`);
    console.log(`上传文件: ${assetPath}`);
    
    // 创建 release 并上传文件
    const command = `gh release create "${tagName}" "${assetPath}" --repo ${REPO_OWNER}/${REPO_NAME} --title "${releaseName}" --notes "${description.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"`;
    
    execSync(command, { stdio: 'inherit' });
    
    console.log(`\n✅ Release ${tagName} 创建成功！`);
  } catch (error) {
    console.error(`❌ 创建 release 失败:`, error.message);
    process.exit(1);
  }
}

/**
 * 主函数
 */
function main() {
  try {
    console.log('🔍 查找最新版本的 zip 文件...');
    const latestZipFile = findLatestZipFile();
    console.log(`找到最新版本: ${latestZipFile}`);
    
    console.log('\n📖 读取 update.json...');
    const updateContent = readUpdateContent();
    console.log(`更新内容: ${updateContent}`);
    
    // 从文件名提取版本号（去除 .zip 后缀）
    const version = latestZipFile.replace('.zip', '');
    
    console.log('\n🚀 创建 GitHub Release...');
    const assetPath = path.join(EXTENSION_DIR, latestZipFile);
    createRelease(version, version, updateContent, assetPath);
    
  } catch (error) {
    console.error('❌ 执行失败:', error.message);
    process.exit(1);
  }
}

// 运行主函数
main();