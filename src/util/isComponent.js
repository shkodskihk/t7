import validateElementTags from './validateElementTags';
 
/**
 * Validate if the 'tagName' is a valid Component name
 * @param {String} tagName The name to be validated
 * @return {Boolean}
 */
 
 let VALID_COMPONENT_REGEX = /[~#%&*{}]/g; 
 

 
export default (tagName) => !validateElementTags(tagName[0].toLowerCase()) && !(VALID_COMPONENT_REGEX.test( tagName[0] )) && (tagName[0] === tagName[0].toUpperCase());
