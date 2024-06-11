/* eslint-disable react/prop-types */
/**
 * Generated by `./scripts/prebuild/generate-icons.ts`.
 * Run `yarn generate-icons` to regenerate.
 */
import React from 'react';
import { findClosestGlyphAvailable, Icon } from "../../";
export function IconCheckAlt(props) {
  var _props$autoMirror;

  /* prettier-ignore */
  var iconList = [{
    'size': 16,
    'svgContent': '<path d=\'M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z\'/><path d=\'M11.079 5.47a.75.75 0 010 1.06l-4.53 4.53-2.08-2.078a.75.75 0 111.061-1.06l1.02 1.016 3.47-3.47a.75.75 0 011.06 0z\'/>'
  }, {
    'size': 24,
    'svgContent': '<path d=\'M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z\'/><path d=\'M17.398 8.207a1 1 0 010 1.414l-7.425 7.425-3.308-3.308a1 1 0 011.414-1.414l1.894 1.894 6.011-6.011a1 1 0 011.414 0z\'/>'
  }];
  var closestSize = findClosestGlyphAvailable(iconList, props.iconSize || 24);

  var titleTag = function titleTag(title, titleId) {
    return title ? "<title ".concat(titleId ? "id=\"".concat(titleId, "\"") : "", ">").concat(title, "</title>") : "";
  };

  var descTag = function descTag(desc, descId) {
    return desc ? "<desc ".concat(descId ? "id=\"".concat(descId, "\"") : "", ">").concat(desc, "</desc>") : "";
  };

  var autoMirror = (_props$autoMirror = props.autoMirror) !== null && _props$autoMirror !== void 0 ? _props$autoMirror : false;
  return /*#__PURE__*/React.createElement(Icon, Object.assign({}, props, {
    autoMirror: autoMirror,
    viewBox: "0 0 ".concat(closestSize.size, " ").concat(closestSize.size),
    dangerouslySetInnerHTML: {
      __html: "".concat(titleTag(props.title, props.titleId)).concat(descTag(props.desc, props.descId)).concat(closestSize.svgContent)
    }
  }));
}
/**
 * @deprecated The name Experimental__IconCheckAlt is deprecated and will be archived soon. Use IconCheckAlt instead.
 */

export function Experimental__IconCheckAlt(props) {
  return /*#__PURE__*/React.createElement(IconCheckAlt, props);
}